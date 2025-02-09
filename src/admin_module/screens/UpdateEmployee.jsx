import { useState } from "react";
import "../../CSS/employee_module/AddEmployee.css";

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    managerId: "",
    designation: "",
    department: "",
    gender: "",
    role: "ADMIN",
    dateOfBirth: "",
    dateOfJoining: "",
    salary: "",
    email: "",
    phoneNo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Employee Registered Successfully!\n${Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")}`);
  };

  const commonFields = [
    { label: "ID", type: "text", name: "id"},
    { label: "Name", type: "text", name: "name" },
    { label: "Email", type: "email", name: "email" },
    { label: "Phone No", type: "text", name: "phoneNo" },
    { label: "Password", type: "password", name: "password" },
  ];

  const roleSpecificFields = {
    ADMIN: [],
    MANAGER: [
      { label: "Department", type: "text", name: "department" },
    ],
    EMPLOYEE: [
      { label: "Manager ID", type: "text", name: "managerId" },
      { label: "Designation", type: "text", name: "designation" },
      { label: "Department", type: "text", name: "department" },
    ],
  };

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="employeeCard p-4 shadow w-50">
        <h2 className="h2-employee text-center">Employee Updation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Role:
              <select className="form-control" name="role" value={formData.role} onChange={handleChange} required>
                <option value="ADMIN">Admin</option>
                <option value="MANAGER">Manager</option>
                <option value="EMPLOYEE">Employee</option>
              </select>
            </label>
          </div>
          {commonFields.concat(roleSpecificFields[formData.role]).map(({ label, type, name }) => (
            <div className="form-group" key={name}>
              <label className="form-label">{label}:
                <input type={type} className="form-control" name={name} value={formData[name]} onChange={handleChange} required />
              </label>
            </div>
          ))}
          <div className="form-group">
            <label className="form-label">Gender:
              <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
