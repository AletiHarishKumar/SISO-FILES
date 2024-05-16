import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ContracttoHireTable = () => {
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8093/svc/v1/getallemployees');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);           
      }
    };

    fetchData();
  }, []);

  

  const handleView = (employeeId) => {
    // Handle view action
    console.log(`View employee with ID: ${employeeId}`);
  };

  const handleDelete = (employeeId) => {
    // Handle delete action
    console.log(`Delete employee with ID: ${employeeId}`);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div><br></br><br></br>
      <h2 style={{ textAlign: 'center' }}>Contract to Hire</h2><br></br><br></br><br></br>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Employee ID</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>First Name</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Last Name</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Phone</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Gender</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Designation</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Job Role</th>
            {showMore && (
              <>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Work Status</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Bench Status</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Mode of Job</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Type of Job</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Years</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Months</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Current Salary</th>
              </>
            )}
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>View/Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.employeeId}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.firstName}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.lastName}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.email}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.phone}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.gender}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.designation}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.jobRole}</td>
              {showMore && (
                <>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.workStatus}</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.benchStatus}</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.modeOfJob}</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.typeOfJob}</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.years}</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.months}</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.currentSalary}</td>
                </>
              )}
           <td style={{ border: '1px solid #dddddd', display: "flex", padding: "10px 5px"}}>
  <button className='btn btn-primary btn-sm' style={{ marginRight: "10px", position: "relative" }} onClick={() => handleView(employee.employeeId)} onMouseOver={(e) => e.target.style.backgroundColor = "yellowgreen"} onMouseOut={(e) => e.target.style.backgroundColor = ""}>
    View
  </button>
  <button className='btn' style={{ widows: "15px", backgroundColor: "red", marginLeft: "10px", position: "relative" }} onClick={() => handleDelete(employee.employeeId)} onMouseOver={(e) => e.target.style.color = "yellow"} onMouseOut={(e) => e.target.style.color = "darkgreen"}>
    Delete
  </button>
</td>




            </tr>
          ))}
        </tbody>
      </table>
      <button 
  onClick={toggleShowMore} 
  style={{
    display: 'block', 
    margin: '90px auto', 
    marginRight: '50px', 
    backgroundColor: 'transparent', 
    border: 'none', 
    color: '#000',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out', 
    fontSize:"20px"
  }}
  onMouseOver={(e) => e.target.style.color = 'green'} // Change text color on mouse over
  onMouseOut={(e) => e.target.style.color = 'red'} // Change text color on mouse out
>
  {showMore ? 'Show Less' : 'Show More'}
</button>


    </div>
  );
};

export default ContracttoHireTable;
