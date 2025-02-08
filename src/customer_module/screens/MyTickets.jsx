import React, { useState } from 'react';
import '../../CSS/customer_module/MyTicket.css';

const ManagerList = () => {
  const [managers, setManagers] = useState([
    { name: 'Guru', id: '0204', domain: 'Technology' },
    { name: 'Steve Smith', id: '0207', domain: 'Marketing' },
    { name: 'Federson', id: '0206', domain: 'Sales' },
    { name: 'Johny', id: '0208', domain: 'HR' },
  ]);

  const addManager = () => {
    const newManager = { name: 'New Manager', id: '0210', domain: 'Finance' };
    setManagers([...managers, newManager]);
  };

  const handleClick = (value) => {
    alert(`You clicked: ${value}`);
  };

  const headers = Object.keys(managers[0]); 

  return (
    <div className="container mt-5">
      <h2>My Tickets</h2>
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
            {managers.map((manager, index) => (
              <tr key={index}>
                {headers.map((header, idx) => (
                  <td key={idx} onClick={() => handleClick(manager[header])} style={{ cursor: 'pointer', color: 'blue' }}>
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

export default ManagerList;
