import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTicketStats } from "../../redux/manager_module/managerHomeStatus/managerStatusActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const StatusTickets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { open, inProgress, closed, loading, error } = useSelector((state) => state.managerStatus);

  const managerID = JSON.parse(sessionStorage.getItem("user"))?.user?.userName;
  
  useEffect(() => {
    dispatch(fetchTicketStats(managerID));
  }, [dispatch, managerID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching ticket stats: {error}</div>;
  }

  const ticketStats = [
    { title: "Open Tickets", count: open, color: "bg-danger", path: "/tickets/open" },
    { title: "In Progress", count: inProgress, color: "bg-warning", path: "/tickets/in-progress" },
    { title: "Closed", count: closed, color: "bg-success", path: "/tickets/closed" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-3 fs-2">Status Ticket</h2>
      <div className="row">
        {ticketStats.map((ticket, index) => (
          <div key={index} className="col-md-4">
            <div
              className={`card ${ticket.color} text-white text-center p-3`}
              onClick={() => navigate(`${managerID}${ticket.path}`)}
              style={{ cursor: "pointer" }}
            >
              <h5 className="text-white fs-5">{ticket.title}</h5>
              <h2 className="fw-bold text-decoration-underline text-white fs-3">{ticket.count||0}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusTickets;
