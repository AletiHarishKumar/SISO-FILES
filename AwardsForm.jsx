import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AwardsForm = ({ onSubmit, onCancel }) => {
  const [awards, setAwards] = useState('');
  const [selectedSocial, setSelectedSocial] = useState('');
  const [socialLinks, setSocialLinks] = useState({
    fbLink: '',
    instaLink: '',
    linkedinLink: '',
    twitterLink: ''
  });
  const [references, setReferences] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ awards, socialLinks, references });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

   
    if (!awards.trim()) {
      newErrors.awards = 'Awards & Achievements field is required.';
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(awards)) {
      newErrors.awards = 'Awards & Achievements field should only contain text.';
      valid = false;
    }

    if (!socialLinks[selectedSocial]) {
      newErrors[selectedSocial] = 'Social link is required.';
      valid = false;
    }

    
    if (!references.trim()) {
      newErrors.references = 'References field is required.';
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(references)) {
      newErrors.references = 'References field should only contain text.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleSocialLinkChange = (e) => {
    setSelectedSocial(e.target.value);
  };

  const handleSocialLinkInput = (e) => {
    const { name, value } = e.target;
    setSocialLinks({
      ...socialLinks,
      [name]: value
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ maxWidth: '820px', margin: '0 auto', marginTop: "60px", backgroundImage: `url('https://www.datameer.com/wp-content/uploads/2022/01/datameer-top-transformation-tools-2022-scaled-e1643306010308.jpg')`, backgroundPosition: "fit", backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: '12px', marginTOP: "10px", boxShadow: '0 40px 50px rgba(0, 0, 0, 1.9)' }}>
        <h1 style={{ marginBottom: '50px' }}>- - Awards Form - -</h1>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '80px' }}>
          <label htmlFor="awards" style={{ marginbottom: '50px', minWidth: '150px', flexBasis: '160px', color: "black", fontFamily: "inherit", fontWeight: "bold" }}>Awards & Achievements:</label>
          <textarea
            id="awards"
            value={awards}
            onChange={(e) => setAwards(e.target.value)}
            style={{ flex: '1', minHeight: '100px', borderColor: errors.awards ? 'pink' : '' }}
          />
        </div>
        {errors.awards && <p style={{ color: 'red', marginBottom: '10px' }}>{errors.awards}</p>}
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
          <label htmlFor="socialLinks" style={{ marginRight: '25px', minWidth: '90px', height: "10px", gap: "40px", flexBasis: '150px', color: "black", fontFamily: "inherit", fontWeight: "bold" }}>Social Links:</label>
          <select
            id="socialLinks"
            value={selectedSocial}
            onChange={handleSocialLinkChange}
            style={{ marginLeft: '10px', flex: '2', borderColor: errors[selectedSocial] ? 'pink' : '' }}
          >
            <option value="">Select Social Media</option>
            <option value="fbLink">Facebook</option>
            <option value="instaLink">Instagram</option>
            <option value="linkedinLink">LinkedIn</option>
            <option value="twitterLink">Twitter</option>
          </select>
          {selectedSocial && (
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <input
                type="text"
                name={selectedSocial}
                value={socialLinks[selectedSocial]}
                onChange={handleSocialLinkInput}
                placeholder="Enter link"
                style={{ flex: '1', marginLeft: '10px', marginBottom: "10px", marginRight: '30px', borderColor: errors[selectedSocial] ? 'pink' : '' }}
              />
              <FontAwesomeIcon className="fontocons" icon={selectedSocial === "fbLink" ? faFacebook : selectedSocial === "instaLink" ? faInstagram : selectedSocial === "linkedinLink" ? faLinkedin : faTwitter} color={selectedSocial === "fbLink" ? "#4267B2" : selectedSocial === "instaLink" ? "#C13584" : selectedSocial === "twitterLink" ? "#1DA1F2" : "#0077B5"} style={{ fontSize: '48px' }} />
            </div>
          )}
        </div>
        {errors[selectedSocial] && <p style={{ color: 'red', marginBottom: '10px' }}>{errors[selectedSocial]}</p>}
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label htmlFor="references" style={{ marginRight: '10px', minWidth: '175px', flexBasis: '150px', color: "black", fontFamily: "inherit", fontWeight: "bold" }}>References:</label>
          <textarea
            id="references"
            value={references}
            onChange={(e) => setReferences(e.target.value)}
            style={{ flex: '1', minHeight: '100px', borderColor: errors.references ? 'pink' : '' }}
          />
        </div>
        {errors.references && <p style={{ color: 'red', marginBottom: '10px' }}>{errors.references}</p>}
        
        <div style={{ textAlign: 'center', marginTop: "60px" }}>
          <button type="submit" style={{ fontSize: '20px', padding: '4px 10px', backgroundColor: '#28a745', border: '1px solid #007bff', color: 'white', cursor: 'pointer' }} class="btn btn-success" onMouseOver={(e) => e.target.style.backgroundColor = 'blue'} onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}>Submit</button>
          <button type="button" onClick={handleCancel} style={{ fontSize: '20px', padding: '4px 10px', backgroundColor: '#dc3545', border: '1px solid #007bff', color: 'white', cursor: 'pointer' }} class="btn btn-danger" onMouseOver={(e) => e.target.style.backgroundColor = 'blue'} onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default AwardsForm;
