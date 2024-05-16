import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import './Memo.css';
import axios from 'axios';
import { Card, Alert, Modal, Button } from 'react-bootstrap'; 
import pics from "../src/certificatebg2.jpg";
import signature from '../src/HarishSign.png';
import Participating from '../src/name.png';

const Memo = () => {
  const d = new Date();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [courseData, setCourseData] = useState({ course: '', percentage: '' });
  const [nameError, setNameError] = useState('');
  const [courseError, setCourseError] = useState('');
  const [downloadError, setDownloadError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const current = d.toLocaleDateString();

  useEffect(() => {
    axios.get('http://localhost:8062/api/test/user/123')
      .then(response => {
        setCourseData(response.data);
      })
      .catch(error => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  const handleNameChange = (e) => {
    const value = e.target.value;
    
    if (/^[A-Za-z -]*$/.test(value) || value.trim() === '') {
      setName(value);
      setNameError('');
      setDownloadError('');
    } else {
      setNameError('Name field allows only alphabets and spaces');
    }
  }

  const handleCourseChange = (e) => {
    const value = e.target.value;
   
    if (/^[A-Za-z -]*$/.test(value) || value.trim() === '') {
      setCourse(value);
      setCourseError('');
      setDownloadError('');
    } else {
      setCourseError('Course field allows only alphabets and spaces');
    }
  }

  const handleDownloadCertificate = () => {
    if (!name.trim() || !course.trim()) {
      setShowModal(true);
    } else {
      setDownloadError('');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a5'
      });

      pdf.addImage(pics, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.addImage(signature, 'PNG', 137, 109);
      pdf.addImage(Participating, '.png', 26, 20);
      pdf.text('Best Regards', 152, 135);
      pdf.text('Date : ' + current, 147, 60);
      pdf.text(`Here, by we are presenting a Certification to Mr. ${name} `, 12, 80);
      pdf.text(`participating Fabulously in a ${course} course on `+ current, 10, 90);
      pdf.save('Certificate.pdf');
    }
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center hover-green" style={{ height: '100vh'}}>
      <div className="row">
        <div className="col-md-6">
        <Card style={{ 
  width: "860px", 
  height: '14cm', 
  backgroundColor: "darkseagreen",
  boxShadow: "18px 40px 19px rgba(4, 9, 3, 4.9)" // Adding box shadow
}}>

            <Card.Body className="card-content">
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Certificate Entry</h2>
              <div className="input-field">
                <input 
                  type='text' 
                  id='name' 
                  value={name} 
                  onChange={handleNameChange} 
                  placeholder='Enter full name Here' 
                  style={{ width: '100%', marginTop: '20px' , height:"62px"}} 
                />
                {nameError && <Alert variant="danger">{nameError}</Alert>}
              </div>
              <div className="input-field">
                <input 
                  type='text' 
                  id='course'  
                  value={course} 
                  onChange={handleCourseChange} 
                  placeholder='Enter the course Here' 
                  style={{ width: '100%', marginTop: '60px', height:"62px" }} 
                />
                {courseError && <Alert variant="danger">{courseError}</Alert>}
              </div>
              <div className="button-container">
                {downloadError && <Alert variant="danger">{downloadError}</Alert>}
                <button
                  type="button"
                  onClick={handleDownloadCertificate}
                  className="memo-button"
                >
                  Download Certificate
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Both name and course fields are required.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Memo;
