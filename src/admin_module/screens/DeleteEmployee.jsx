import { useState } from 'react';
import '../../CSS/admin_module/DeleteEmployee.css'

function Form() {
  const [employeeID, setEmployeeID] = useState("");
  const [reasonForDeletion, setReasonForDeletion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Employee ID entered was: ${employeeID}\nReason for Deletion: ${reasonForDeletion}`);
  }

  return (
    <div className="center-container">
        <div className='delete-form'>
        <form className="Deletecard" onSubmit={handleSubmit}>
            <h2>Delete Employee</h2>
            <label className="form-label">Employee ID:
            <input
                type="text"
                className="form-control"
                value={employeeID}
                onChange={(e) => setEmployeeID(e.target.value)}
                />
            </label>
            <label className="form-label">Reason for Deletion:
            <textarea
                className="form-control"
                value={reasonForDeletion}
                onChange={(e) => setReasonForDeletion(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
}

export default Form;
