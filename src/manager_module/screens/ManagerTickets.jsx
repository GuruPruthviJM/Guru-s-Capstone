import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../redux/manager_module/managerTicketTable/managerTicketAction";
import { useParams, useNavigate } from "react-router-dom";
import "../../CSS/customer_module/MyTicket.css";

const ManagerTicketList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { id: managerId, ticketStatus} = useParams();
  
  useEffect(() => {
    // if (managerId) {
      dispatch(fetchTickets(managerId, ticketStatus));
    // }
  }, [dispatch, managerId, ticketStatus,navigate]);
  
  const { tickets, loading, error } = useSelector((state) => state.tickets);

  const handleClick = (ticketId) => {
    navigate(`${ticketId}`);
  };

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 text-danger">Error: {error}</div>;
  if (!tickets || tickets.length === 0) return <div className="container mt-5">No tickets available</div>;
  console.log("tickets in ManagerTickets",tickets);
  if(!(tickets instanceof Array))
    return <div className="container mt-5 text-danger">Tickets are not an array</div>;






  return (
    <div className="container mt-5">
      <h2>My Tickets ({ticketStatus})</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Ticket Type</th>
              <th>Ticket Description</th>
              <th>Ticket Assigned To</th>
              <th>Ticket Raise Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index} onMouseEnter={(e) => e.currentTarget.style.cursor = "pointer"} onClick={() => handleClick(ticket.ticketId)}>
                <td style={{ color: "blue" }}>{ticket.ticketId}</td>
                <td>{ticket.ticketType}</td>
                <td>{ticket.ticketDescription}</td>
                <td>{ticket.employeeId}</td>
                <td>{new Date(ticket.ticketRaiseDate).toLocaleDateString("en-GB")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerTicketList;