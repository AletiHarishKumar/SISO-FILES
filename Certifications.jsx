import React, { useState } from 'react';

const Certifications = () => {
  const [formData, setFormData] = useState({
    nameofCourse: '',
    board: '',
    durationTime: '',
    year: '',
    pass: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    board: '',
    duration: '',
    year: '',
    pass: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'nameofCourse' || name === 'board' || name === 'durationTime' || name === 'year' || name === 'pass') {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateFormData = () => {
    const namePattern = /^[a-zA-Z ]*$/;
    const boardPattern = /^[a-zA-Z ]*$/;
    const durationPattern = /^[a-zA-Z0-9]+$/;
    const yearPattern = /^[0-9]+$/;
    const passPattern = /^[0-9]+$/;

    const newErrors = {};

    if (!namePattern.test(formData.nameofCourse)) {
      newErrors.name = 'Name must be text only';
    }

    if (!boardPattern.test(formData.board)) {
      newErrors.board = 'Board must be text only';
    }

    if (!durationPattern.test(formData.durationTime)) {
      newErrors.duration = 'Duration must be text and numbers';
    }

    if (!yearPattern.test(formData.year)) {
      newErrors.year = 'Year must contain only numbers';
    }

    if (!passPattern.test(formData.pass)) {
      newErrors.pass = 'Passed must contain only numbers';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newErrors = validateFormData();

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {!submitted ? (
        <CertificationForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Certificate formData={formData} />
      )}
    </>
  );
};

const CertificationForm = ({ formData, errors, handleChange, handleSubmit }) => {
  return (
    <div
      style={{
        boxShadow: '0 6px 12px rgba(0,0,6,8.10)',
        marginTop: "50PX",
        color: "green",
        borderRadius: '5px',
        padding: '60px',
        maxWidth: '550px',
        margin: '0 auto',
        backgroundImage: `url('https://th.bing.com/th/id/OIP.CyrG6vs2w5l-E-vJp1occwAAAA?rs=1&pid=ImgDetMain')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ color: 'red', marginBottom: '40px', padding: "20PX", fontWeight: "bold" }}> CERTIFICATIONS FORM </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
            <label style={{ flex: '1', textAlign: 'left', width: '80px', fontWeight: "bold", color: "black" }}>Name:</label>
            <input
              type="text"
              name="nameofCourse"
              value={formData.nameofCourse}
              onChange={handleChange}
              style={{ flex: '2', width: '100%' }}
            />
          </div>
          <div>{errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}</div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ flex: '1', textAlign: 'left', width: '80px', fontWeight: "bold", color: "black" }}>Board:</label>
            <input
              type="text"
              name="board"
              value={formData.board}
              onChange={handleChange}
              style={{ flex: '2', width: '100%' }}
            />
          </div>
          <div>{errors.board && <span style={{ color: 'red' }}>{errors.board}</span>}</div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ flex: '1', textAlign: 'left', width: '80px', fontWeight: "bold", color: "black" }}>Duration:</label>
            <input
              type="text"
              name="durationTime"
              value={formData.durationTime}
              onChange={handleChange}
              style={{ flex: '2', width: '100%' }}
            />
          </div>
          <div>{errors.duration && <span style={{ color: 'red' }}>{errors.duration}</span>}</div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ flex: '1', textAlign: 'left', width: '80px', fontWeight: "bold", color: "black" }}>Year:</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              style={{ flex: '2', width: '100%' }}
            />
          </div>
          <div>{errors.year && <span style={{ color: 'red' }}>{errors.year}</span>}</div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ flex: '1', textAlign: 'left', width: '80px', fontWeight: "bold", color: "black" }}>Passed:</label>
            <input
              type="text"
              name="pass"
              value={formData.pass}
              onChange={handleChange}
              style={{ flex: '2', width: '100%' }}
            />
          </div>
          <div>{errors.pass && <span style={{ color: 'red' }}>{errors.pass}</span>}</div>

          <button type="button" style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', marginTop: '0px', marginRight: "20px", transition: 'background-color 0.3s' }}>Cancel</button>
          <button type="submit" style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', marginTop: '40px', transition: 'background-color 0.3s' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const Certificate = ({ formData }) => {
  return (
    <div
      style={{
        marginTop: '40px',
        textAlign: 'center',
        backgroundImage: `url('https://th.bing.com/th/id/R.1973c0fecf4646feb1cdee170e107158?rik=3u1kPCryMrdh4g&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fcertificate-border-vector-free-35.jpg&ehk=CCLtsudUQp06Gwrw46nbOKMbcZw294e9m%2fSNhMlS12U%3d&risl=1&pid=ImgRaw&r=0')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the background image
        borderRadius: '10px', // Add border radius
        padding: '20px', // Add padding
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'   }}
    >
      <h2>Certificate</h2>
      <p>Name of Course: {formData.nameofCourse}</p>
      <p>Board: {formData.board}</p>
      <p>Duration: {formData.durationTime}</p>
      <p>Year: {formData.year}</p>
      <p>Passed: {formData.pass}</p>
    </div>
  );
};

export default Certifications;
