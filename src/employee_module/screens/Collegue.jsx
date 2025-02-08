import React, { useState } from 'react';
import '../../CSS/customer_module/MyTicket.css';

const Collegue = () => {
  const [managers, setManagers] = useState([
    { name: 'Johny', id: '0208', domain: 'HR', type: 'manager' },
    { name: 'Guru', id: '0204', domain: 'Technology', type: 'employee' },
    { name: 'Steve Smith', id: '0207', domain: 'Marketing', type: 'employee' },
    { name: 'Federson', id: '0206', domain: 'Sales', type: 'employee' },
  ]);

  const handleClick = (value) => {
    alert(`You clicked: ${value}`);
  };

  const headers = Object.keys(managers[0]);

  return (
    <div className="container mt-5">
      <h2>My Collegue</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {managers
              .sort((a, b) => (a.type === 'manager' ? -1 : 1)) // Sort managers to the top
              .map((manager, index) => (
                <tr 
                  key={index} 
                  style={manager.type === 'manager' ? { backgroundColor: 'green', fontWeight: 'bold' } : {}}
                >
                  {headers.map((header, idx) => (
                    <td 
                      key={idx} 
                      onClick={() => handleClick(manager[header])} 
                      style={{ cursor: 'pointer', color: 'blue' }}
                    >
                      {manager[header]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Collegue;
