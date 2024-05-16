


import React, { useState } from 'react';
import './ProjectForm.css';
import 'bootstrap';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    duration: '',
    technologies: '',
    teamSize: '',
    projectDetails: '',
    url: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionError, setSubmissionError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

  
    let updatedValue = value;
    if (name === "projectName") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "duration" || name === "teamSize") {
      updatedValue = value.replace(/\D/g, "");
    } else if (name === "technologies") {
      updatedValue = value.replace(/[^a-zA-Z\s,]/g, "");
    }

    setFormData({
      ...formData,
      [name]: updatedValue
    });

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      
      const errorMessage = Object.values(validationErrors).join('\n');
      alert(errorMessage);
      setSubmissionError(false);
      return;
    }

  
    if (Object.values(formData).some(value => value.trim() === '')) {
      setSubmissionError(true);
      return;
    }

    console.log(formData);

    
    setFormData({
      projectName: '',
      duration: '',
      technologies: '',
      teamSize: '',
      projectDetails: '',
      url: ''
    });
    setErrors({});
    setSubmissionError(false);
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.projectName.trim()) {
      errors.projectName = 'Project name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(data.projectName)) {
      errors.projectName = 'Project name should contain only letters and spaces';
    }

    if (!data.duration.trim()) {
      errors.duration = 'Duration is required';
    } else if (!/^\d+$/.test(data.duration)) {
      errors.duration = 'Duration should contain only numbers';
    }

    if (!data.technologies.trim()) {
      errors.technologies = 'Technologies are required';
    } else if (!/^[a-zA-Z\s,]+$/.test(data.technologies)) {
      errors.technologies = 'Technologies should contain only letters, spaces, and commas';
    }

    if (!data.teamSize.trim()) {
      errors.teamSize = 'Team size is required';
    } else if (!/^\d+$/.test(data.teamSize)) {
      errors.teamSize = 'Team size should contain only numbers';
    }

    if (!data.projectDetails.trim()) {
      errors.projectDetails = 'Project details are required';
    }

    if (!data.url.trim()) {
      errors.url = 'URL is required';
    }

    return errors;
  };

  const handleCancel = () => {
    setFormData({
      projectName: '',
      duration: '',
      technologies: '',
      teamSize: '',
      projectDetails: '',
      url: ''
    });
    setErrors({});
    setSubmissionError(false);
  };

  return (
    <div className="card" style={{ width: '65rem', height: "530px", border: 'solid 2px black', borderRadius: '6px',padding:"80px" ,left: '12rem', top: '2rem', backgroundColor: "lightgray" }}>
      <form onSubmit={handleSubmit}>
        <div className="Card-Data">
          <div style={{ marginLeft: "-10.9cm" }}>
          <label>Name of the Project:</label>
            <input className='Form-Input-Dura'
              type="text"
              name="duration"
              placeholder='Enter Duration Here' style={{ width: '270px', fontSize: "14px" }}
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginLeft: "-8.9cm", padding: "16px" }}>
            <label>Duration:</label>
            <input className='Form-Input-Dura'
              type="text"
              name="duration"
              placeholder='Enter Duration Here' style={{ width: '270px', fontSize: "14px" }}
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginLeft: "-9.6cm", padding: "2px" }}>
            <label>Technologies:</label>
            <input className='Form-Input-Tech'
              type="text"
              name="technologies"
              placeholder='Enter Technologies Here' style={{ width: '270px', fontSize: "14px" }}
              value={formData.technologies}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginLeft: "-9.1cm", padding: "12px" }}>
            <label>Team Size:</label>
            <input className='Form-Input-TS'
              type="number"
              name="teamSize"
              placeholder='Enter Team Size Here' style={{ width: '270px', fontSize: "14px" }}
              value={formData.teamSize}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginLeft: "-9.8cm", padding: "1px" }}>
            <label>Project Details:</label>
            <textarea className='Form-Input-PRD'
              name="projectDetails"
              type="textarea"
              placeholder='Enter Project Details' style={{ width: '270px', padding: "19px", fontSize: "8px" }}
              value={formData.projectDetails}
              onChange={handleChange}
            ></textarea>
          </div>
          <div style={{ marginLeft: "-8.1cm", padding: "14px" }}>
            <label>URL:</label>
            <input className='Form-Input-URL'
              type="text"
              name="url"
              placeholder='Enter URL Here' style={{ width: '266px', fontSize: "14px" }}
              value={formData.url}
              onChange={handleChange}
            />
          </div>
          <div className="Btn-S-C">

          <button type="submit" style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', marginTop: '40px', transition: 'background-color 0.3s' }} className="">success</button>
          <button type="button" style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', marginTop: '0px', marginRight: "20px", transition: 'background-color 0.3s' }}onClick={handleCancel} className="Cancel-Button">cancel</button>
            
            
          </div>
        </div>
      </form>
      {submissionError && <span className="error">Please fill all fields before submitting.</span>}
    </div>
  );
};

export default ProjectForm;
