import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollegues } from "../../redux/employee_module/collegue/collegueActions";
import "../../CSS/customer_module/MyTicket.css";
import { useParams } from "react-router";

const Collegue = () => {
  const dispatch = useDispatch();
  const { collegues, loading, error } = useSelector((state) => state.collegue);

  // useEffect(() => {
  //   dispatch(fetchCollegues());
  // }, [dispatch]);
  const { id: employeeId } = useParams(); 

  useEffect(() => {
    if (employeeId) {
      dispatch(fetchCollegues(employeeId));
    }
  }, [dispatch, employeeId]);

  const handleClick = (value) => {
    alert(`You clicked: ${value}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="alert alert-danger">{error}</p>;
  if (!collegues.length) return <p>No colleagues found.</p>;

  const headers = ["employeeId", "name", "designation", "email"];

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
            {collegues
              .sort((a, b) => (a.type === "manager" ? -1 : 1)) // Sort managers to the top
              .map((collegue, index) => (
                <tr
                  key={index}
                  style={collegue.type === "manager" ? { backgroundColor: "green", fontWeight: "bold" } : {}}
                >
                  {headers.map((header, idx) => (
                    <td
                      key={idx}
                      onClick={() => handleClick(collegue[header])}
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      {collegue[header]}
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
