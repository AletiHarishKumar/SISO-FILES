import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    designation: '',
    jobRole: '',
    workStatus: '',
    benchStatus: '',
    modeOfJob: '',
    typeOfJob: '',
    years: '',
    months: '',
    currentSalary: ''
  });
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    const validations = {
      employeeId: /^\d+$/, 
      firstName: /^[a-zA-Z\s]*$/,
      lastName: /^[a-zA-Z\s]*$/, 
      email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
      phone: /^[\d\s]+$/, 
      gender: /^(female|male|other)$/i,
      designation: /^[a-zA-Z\s]*$/, 
      jobRole: /^[a-zA-Z\s]*$/, 
      workStatus: /^[a-zA-Z\s]*$/, 
      benchStatus: /^[a-zA-Z\s]*$/,
      modeOfJob: /^[a-zA-Z\s]*$/, 
      typeOfJob: /^[a-zA-Z\s]*$/, 
      years: /^\d+$/, 
      months: /^\d+$/, 
      currentSalary: /^\d+(\.\d{1,2})?$/ 
    };

    if (validations[name] && !validations[name].test(value)) {
      setErrors({ ...errors, [name]: `Invalid input for ${name}.` });
    } else {
      setErrors({ ...errors, [name]: null });
      setEmployeeData({ ...employeeData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8093/svc/v1/saveemployee', employeeData);
      console.log('Response:', response.data);
      
      setEmployeeData({
        employeeId: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        designation: '',
        jobRole: '',
        workStatus: '',
        benchStatus: '',
        modeOfJob: '',
        typeOfJob: '',
        years: '',
        months: '',
        currentSalary: ''
      });
      setErrors({}); 
      
      window.alert('Data submitted successfully!');
      console.log('Employee data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
    
      setErrors(error.response?.data?.message || 'An error occurred while submitting data.');
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px", backgroundColor:"darkgrey"}}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Employee Form</h3>
                <form onSubmit={handleSubmit}>
                
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="employeeId" name="employeeId" className="form-control form-control-lg" value={employeeData.employeeId} onChange={handleChange} />
                        <label className="form-label" htmlFor="employeeId">Employee ID</label>
                        {errors.employeeId && <p className="text-danger">{errors.employeeId}</p>}
                      </div>
                    </div>

                    
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="firstName" name="firstName" className="form-control form-control-lg" value={employeeData.firstName} onChange={handleChange} />
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                      </div>
                    </div>
                  </div>

                  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="lastName" name="lastName" className="form-control form-control-lg" value={employeeData.lastName} onChange={handleChange} />
                        <label className="form-label" htmlFor="lastName">Last Name</label>
                        {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                      </div>
                    </div>

                  
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="email" id="email" name="email" className="form-control form-control-lg" value={employeeData.email} onChange={handleChange} />
                        <label className="form-label" htmlFor="email">Email</label>
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                      </div>
                    </div>
                  </div>

                
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="tel" id="phone" name="phone" className="form-control form-control-lg" value={employeeData.phone} onChange={handleChange} />
                        <label className="form-label" htmlFor="phone">Phone</label>
                        {errors.phone && <p className="text-danger">{errors.phone}</p>}
                      </div>
                    </div>

                  
                    <div className="col-md-6 mb-4">
                      <select className="form-select" style={{ marginTop: "4px", height: '45px' }} id="gender" name="gender" value={employeeData.gender} onChange={handleChange} >
                        <option value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                      <label htmlFor="gender" style={{ marginTop: "15px" }}>Gender</label>
                      {errors.gender && <p className="text-danger">{errors.gender}</p>}
                    </div>
                  </div>

              
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="designation" name="designation" className="form-control form-control-lg" value={employeeData.designation} onChange={handleChange} />
                        <label className="form-label" htmlFor="designation">Designation</label>
                        {errors.designation && <p className="text-danger">{errors.designation}</p>}
                      </div>
                    </div>

                  
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="jobRole" name="jobRole" className="form-control form-control-lg" value={employeeData.jobRole} onChange={handleChange} />
                        <label className="form-label" htmlFor="jobRole">Job Role</label>
                        {errors.jobRole && <p className="text-danger">{errors.jobRole}</p>}
                      </div>
                    </div>
                  </div>

                  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="workStatus" name="workStatus" className="form-control form-control-lg" value={employeeData.workStatus} onChange={handleChange} />
                        <label className="form-label" htmlFor="workStatus">Work Status</label>
                        {errors.workStatus && <p className="text-danger">{errors.workStatus}</p>}
                      </div>
                    </div>

              
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="benchStatus" name="benchStatus" className="form-control form-control-lg" value={employeeData.benchStatus} onChange={handleChange} />
                        <label className="form-label" htmlFor="benchStatus">Bench Status</label>
                        {errors.benchStatus && <p className="text-danger">{errors.benchStatus}</p>}
                      </div>
                    </div>
                  </div>

                  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="modeOfJob" name="modeOfJob" className="form-control form-control-lg" value={employeeData.modeOfJob} onChange={handleChange} />
                        <label className="form-label" htmlFor="modeOfJob">Mode of Job</label>
                        {errors.modeOfJob && <p className="text-danger">{errors.modeOfJob}</p>}
                      </div>
                    </div>

                    
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="typeOfJob" name="typeOfJob" className="form-control form-control-lg" value={employeeData.typeOfJob} onChange={handleChange} />
                        <label className="form-label" htmlFor="typeOfJob">Type of Job</label>
                        {errors.typeOfJob && <p className="text-danger">{errors.typeOfJob}</p>}
                      </div>
                    </div>
                  </div>

                
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="years" name="years" className="form-control form-control-lg" value={employeeData.years} onChange={handleChange} />
                        <label className="form-label" htmlFor="years">Years</label>
                        {errors.years && <p className="text-danger">{errors.years}</p>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="months" name="months" className="form-control form-control-lg" value={employeeData.months} onChange={handleChange} />
                        <label className="form-label" htmlFor="months">Months</label>
                        {errors.months && <p className="text-danger">{errors.months}</p>}
                      </div>
                    </div>
                  </div>

                  
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <input type="text" id="currentSalary" name="currentSalary" className="form-control form-control-lg" value={employeeData.currentSalary} onChange={handleChange} />
                        <label className="form-label" htmlFor="currentSalary">Current Salary</label>
                        {errors.currentSalary && <p className="text-danger">{errors.currentSalary}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <input type="submit" className="btn btn-primary btn-lg" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeForm;
