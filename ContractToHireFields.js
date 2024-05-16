import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import "./ContractToHireFields.css";

const ContractToHireFields = () => {
  const [formData, setFormData] = useState({
    skillsRequired: '',
    teamSize: '',
    location: '',
    c2hType: '',
    contactPerson: '',
    email: '',
    phoneNumber: '',
    c2hExpiry: '' // Add c2hExpiry to formData state
  });

  const [errors, setErrors] = useState({});
  const [additionalFields, setAdditionalFields] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleAdditionalFieldChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...additionalFields];
    updatedFields[index][name] = value;
    setAdditionalFields(updatedFields);
  };

  const handleAddField = () => {
    setAdditionalFields([...additionalFields, { role: '', workStatus: '', number: '' }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...additionalFields];
    updatedFields.splice(index, 1);
    setAdditionalFields(updatedFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validation logic
    if (!formData.skillsRequired.trim()) {
      validationErrors.skillsRequired = "Skills are Required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.skillsRequired)) {
      validationErrors.skillsRequired = "Skills should contain only letters and spaces";
    }

    if (!formData.teamSize.trim()) {
      validationErrors.teamSize = "Team Size is Required";
    } else if (!/^\d+$/.test(formData.teamSize)) {
      validationErrors.teamSize = "Team Size should contain only numbers";
    }

    if (!formData.location.trim()) {
      validationErrors.location = "Location is Required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.location)) {
      validationErrors.location = "Location should contain only letters and spaces";
    }

    if (!formData.c2hType.trim()) {
      validationErrors.c2hType = "C2H Type is Required";
    }

    if (!formData.contactPerson.trim()) {
      validationErrors.contactPerson = "Contact Person is Required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.contactPerson)) {
      validationErrors.contactPerson = "Contact Person should contain only letters and spaces";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (formData.phoneNumber && !/^\d+$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Phone Number should contain only numbers";
    }

    if (!formData.c2hExpiry.trim()) {
      validationErrors.c2hExpiry = "C2H Expiry is Required";
    }

    additionalFields.forEach((field, index) => {
      if (!field.role.trim()) {
        validationErrors[`role${index}`] = "Role is Required";
      } else if (!/^[A-Za-z\s]+$/.test(field.role)) {
        validationErrors[`role${index}`] = "Role should contain only letters and spaces";
      }

      if (!field.workStatus.trim()) {
        validationErrors[`workStatus${index}`] = "Work Status is Required";
      } else if (!/^[A-Za-z\s]+$/.test(field.workStatus)) {
        validationErrors[`workStatus${index}`] = "Work Status should contain only letters and spaces";
      }

      if (!field.number.trim()) {
        validationErrors[`number${index}`] = "Number is Required";
      } else if (!/^\d+$/.test(field.number)) {
        validationErrors[`number${index}`] = "Number should contain only numbers";
      }
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8092/c2h/R 6759', formData);
        console.log(response.data); // Optionally handle response from backend
        alert('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('backend-get-api-url');
        console.log(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Contract To Hire</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-4">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="skillsRequired" className={`form-control form-control-lg ${errors.skillsRequired ? 'is-invalid' : ''}`} onChange={handleChange} value={formData.skillsRequired} />
                            <label className="form-label" htmlFor="skillsRequired">Skills Required</label>
                            {errors.skillsRequired && <div className="invalid-feedback">{errors.skillsRequired}</div>}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="teamSize" className={`form-control form-control-lg ${errors.teamSize ? 'is-invalid' : ''}`} onChange={handleChange} value={formData.teamSize} />
                            <label className="form-label" htmlFor="teamSize">Team Size</label>
                            {errors.teamSize && <div className="invalid-feedback">{errors.teamSize}</div>}
                          </div>
                          <button type="button" className="btn btn-primary btn-sm mt-2" style={{ marginLeft: "166px" }} onClick={handleAddField}>Add+</button>
                        </div>
                      </div>
                      <div className="row mb-4">
                        {additionalFields.map((field, index) => (
                          <div className="col-md-12" key={index}>
                            <div className="row g-2">
                              <div className="col">
                                <div className="form-outline">
                                  <input type="text" name="role" className={`form-control form-control-lg ${errors[`role${index}`] ? 'is-invalid' : ''}`} value={field.role} onChange={(e) => handleAdditionalFieldChange(index, e)} />
                                  <label className="form-label" htmlFor="role">Role</label>
                                  {errors[`role${index}`] && <div className="invalid-feedback">{errors[`role${index}`]}</div>}
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-outline">
                                  <input type="text" name="workStatus" className={`form-control form-control-lg ${errors[`workStatus${index}`] ? 'is-invalid' : ''}`} value={field.workStatus} onChange={(e) => handleAdditionalFieldChange(index, e)} />
                                  <label className="form-label" htmlFor="workStatus">Work Status</label>
                                  {errors[`workStatus${index}`] && <div className="invalid-feedback">{errors[`workStatus${index}`]}</div>}
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-outline">
                                  <input
                                    type="text"
                                    name="number"
                                    className={`form-control form-control-lg ${errors[`number${index}`] ? 'is-invalid' : ''}`}
                                    value={field.number}
                                    onChange={(e) => handleAdditionalFieldChange(index, e)}
                                  />
                                  <label className="form-label" htmlFor="number">No.s</label>
                                  {errors[`number${index}`] && <div className="invalid-feedback">{errors[`number${index}`]}</div>}
                                  {index > 0 && (
                                    <button
                                      style={{ float: "right", color: "red" }}
                                      type="button"
                                      className="btn btn-sm mt-2"
                                      onClick={() => handleRemoveField(index)}
                                    >
                                      <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="location" className={`form-control form-control-lg ${errors.location ? 'is-invalid' : ''}`} onChange={handleChange} value={formData.location} />
                            <label className="form-label" htmlFor="location">Location</label>
                            {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <select className={`form-select form-select-lg ${errors.c2hType ? 'is-invalid' : ''}`} id="c2hType" onChange={handleChange} value={formData.c2hType}>
                              <option value="">C2H Type</option>
                              <option value="Hourly">Hourly</option>
                              <option value="Daily">Daily</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Contract Basis">Contract Basis</option>
                            </select>
                            {errors.c2hType && <div className="invalid-feedback">{errors.c2hType}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="date" id="c2hExpiry" className={`form-control form-control-lg ${errors.c2hExpiry ? 'is-invalid' : ''}`} onChange={handleChange} value={formData.c2hExpiry} />
                            <label className="form-label" htmlFor="c2hExpiry">C2H Expiry</label>
                            {errors.c2hExpiry && <div className="invalid-feedback">{errors.c2hExpiry}</div>}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="contactPerson" className={`form-control form-control-lg ${errors.contactPerson ? 'is-invalid' : ''}`} onChange={handleChange} value={formData.contactPerson} />
                            <label className="form-label" htmlFor="contactPerson">Contact Person</label>
                            {errors.contactPerson && <div className="invalid-feedback">{errors.contactPerson}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="email" id="email" className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`} onChange={handleChange} value={formData.email} />
                            <label className="form-label" htmlFor="email">Email</label>
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="tel" id="phoneNumber" className={`form-control form-control-lg ${errors.phoneNumber ? 'is-invalid' : ''}`} onChange={handleChange} value={formData.phoneNumber} />
                            <label className="form-label" htmlFor="phoneNumber">Phone Number (Optional)</label>
                            <small className="text-muted"></small>
                            {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="cancel-button">Cancel</button>
                        <button type="submit" className="submit-button">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContractToHireFields;
