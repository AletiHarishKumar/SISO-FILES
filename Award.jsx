import React from 'react'
import  { useState } from 'react';
import AwardsForm  from"./AwardsForm"
const Award = () => {
    const [formData, setFormData] = useState(null);

    const handleSubmit = (data) => {
      console.log('Form submitted with data:', data);
      setFormData(data);
    };
  
    const handleCancel = () => {
      console.log('Form submission canceled');
      setFormData(null);
    };
  
    return (
      <div>
       
        {!formData ? (
          <AwardsForm onSubmit={handleSubmit} onCancel={handleCancel} />
        ) : (
          <div>
            <h2>Submitted Data:</h2>
            <p>Awards & Achievements: {formData.awards}</p>
            <p>Facebook: {formData.fbLink}</p>
            <p>Instagram: {formData.instaLink}</p>
            <p>LinkedIn: {formData.linkedinLink}</p>
            <p>Twitter: {formData.twitterLink}</p>
            <p>References: {formData.references}</p>
            <button onClick={handleCancel}>Edit</button>
          </div>
        )}
      </div>
    );
  };
  

export default Award

