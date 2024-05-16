import React, { useState } from 'react';
import './PreferencePages.css'; 

const PreferencePages = () => {
  const [formData, setFormData] = useState({
    currentIndustry: '',
    department: '',
    roleCategory: '',
    role: '',
    desiredEmployeeType: '',
    preType: '',
    prefLocation: '',
    expectedSalary: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;


    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData); 
  };
  const validateFormData = (data) => {
    const errors = {};

    if (!/^[a-zA-Z\s]+$/.test(data.currentIndustry)) {
      errors.nameofInstitution = 'Name of Institution should contain only characters.';
    }

    if (!/^[a-zA-Z\s]+$/.test(data.department)) {
      errors.nameofInstitution = 'Department should contain only characters.';
    }

    if (!/^[a-zA-Z\s]+$/.test(data.roleCategory)) {
      errors.nameofInstitution = 'Role Category should contain only characters.';
    }

    if (!/^[a-zA-Z\s]+$/.test(data.role)) {
      errors.nameofInstitution = 'Role should contain only characters.';
    }

    if (!/^[a-zA-Z\s]+$/.test(data.desiredEmployeeType)) {
      errors.location = 'Desired EmployeeType should contain only characters.';
    }

    if (!/^[a-zA-Z\s]+$/.test(data.preType)) {
      errors.location = 'preType should contain only characters.';
    }

    if (!/^[a-zA-Z\s]+$/.test(data.prefLocation)) {
      errors.location = 'Location should contain only characters.';
    }

    if (!/^\d+$/.test(data.expectedSalary)) {
      errors.totalMarks = 'Total Salary should contain only numbers.';
    }

    return errors;
  };

  return (
    <div className="form-container" style={{ backgroundColor: "lightgrey" ,padding:"80px"}}>
      <form style={{ marginTop: "-20px"}} onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="currentIndustry">Current Industry:</label>
            <input
              type='text'
              name='currentIndustry'
              value={formData.currentIndustry}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type='text'
              name='department'
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="roleCategory">Role Category:</label>
            <input
              type='text'
              name='roleCategory'
              value={formData.roleCategory}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <input
              type='text'
              name='role'
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-row">
          <div className="form-group">
            <label htmlFor="desiredEmployeeType">EmployeeType:</label>
            <select
              name='desiredEmployeeType'
              value={formData.desiredEmployeeType}
              onChange={handleChange}
              required
            >
              <option value=''>select</option>
              <option value='Full Time'>Full Time</option>
              <option value='Part Time'>Part Time</option>
              <option value='Contract'>Contract</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="preType">Pref Type:</label>
            <select
              name='preType'
              value={formData.preType}
              onChange={handleChange}
              required
            >
              <option value=''>select</option>
              <option value='General'>General</option>
              <option value='Night Shift'>Night Shift</option>
              <option value='Contract'>Contract</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="prefLocation">Pref Location:</label>
            <input
              type='text'
              name='prefLocation'
              value={formData.prefLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expectedSalary">Expected Salary:</label>
            <input
              type='number'
              pattern='[0-9]*'
              name='expectedSalary'
              value={formData.expectedSalary}
              onChange={handleChange}
              required
            />

{errors.nameofInstitution && <p style={{ color: 'red' }}>{errors.nameofInstitution}</p>}
          </div>
        </div>

        <div className="button-container">
          <button style={{marginLeft:"120px"}} type="Submit" className="btn btn-warning">Save & Next</button>
          <button style={{marginright:"120px"}}type="Button" className="btn btn-danger">Back</button>
        </div>
      </form>
    </div>
  );
};
export default PreferencePages;  


