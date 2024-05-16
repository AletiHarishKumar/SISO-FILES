import React from 'react';

const ContracttoHire = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#f0f0f0'  }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contract to Hire</h2><br></br><br></br>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-center' }}>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="employeeId" style={{ marginRight: '10px' }}>Employee Id:</label>
          <input type="text" id="employeeId" style={{ padding: '8px', borderRadius: '4px' }} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="firstName" style={{ marginRight: '10px' }}>First Name:</label>
          <input type="text" id="firstName" style={{ padding: '8px', borderRadius: '4px' , backgroundColor:"revert"}} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
         <label htmlFor="lastName" style={{ marginRight: '10px' }}>Last Name:</label>
         <input type="text" id="lastName" style={{ padding: '8px', borderRadius: '4px', flex: 1 , backgroundColor:"revert"}} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <label htmlFor="email" style={{ marginRight: '10px' }}>Email:</label>
        <input type="email" id="email" style={{ padding: '8px', borderRadius: '4px', flex: 1 , backgroundColor:"revert"}} />
</div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
     <label htmlFor="phone" style={{ marginRight: '10px' }}>Phone:</label>
  <input type="tel" id="phone" style={{ padding: '8px', borderRadius: '4px', flex: 1, backgroundColor:"revert"}} />
</div>

        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="gender" style={{ marginRight: '10px' }}>Gender:</label>
          <select id="gender" style={{ padding: '8px', borderRadius: '4px' , backgroundColor:"revert"}}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="designation" style={{ marginRight: '10px' }}>Designation:</label>
          <input type="text" id="designation" style={{ padding: '8px', borderRadius: '4px', backgroundColor:"revert"}} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="jobRole" style={{ marginRight: '10px' }}>Job Role:</label>
          <input type="text" id="jobRole" style={{ padding: '8px', borderRadius: '4px' , backgroundColor:"revert"}} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="workStatus" style={{ marginRight: '10px' }}>Work Status:</label>
          <input type="text" id="workStatus" style={{ padding: '8px', borderRadius: '4px', backgroundColor:"revert"}} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="benchStatus" style={{ marginRight: '10px' }}>Bench Status:</label>
          <input type="text" id="benchStatus" style={{ padding: '8px', borderRadius: '4px', backgroundColor:"revert" }} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="modeOfJob" style={{ marginRight: '10px' }}>Mode of Job:</label>
          <input type="text" id="modeOfJob" style={{ padding: '8px', borderRadius: '4px' , backgroundColor:"revert"}} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="typeOfJob" style={{ marginRight: '10px' }}>Type of Job:</label>
          <input type="text" id="typeOfJob" style={{ padding: '8px', borderRadius: '4px' , backgroundColor:"revert"}} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="years" style={{ marginRight: '10px' }}>Years:</label>
          <input type="number" id="years" style={{ padding: '8px', borderRadius: '4px', backgroundColor:"revert" }} />
        </div>
        <div style={{ marginBottom: '46px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="months" style={{ marginRight: '10px' }}>Months:</label>
          <input type="number" id="months" style={{ padding: '8px', borderRadius: '4px' , backgroundColor:"revert"}} />
        </div>
        <div style={{ marginTop: '15px', display: 'inline-block' }}>
  <button type="submit" style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '150px' }}>Submit</button>
  <button type="submit" style={{ padding: '5px 10px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
</div>

      </form>
    </div>
  );
};

export default ContracttoHire;
