import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../redux/customer_model/Ticket/ticketActions";
import { useParams, useNavigate } from "react-router-dom";
import "../../CSS/customer_module/MyTicket.css";

const TicketList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tickets, loading, error } = useSelector((state) => state.tickets);
  
  const { id: customerId } = useParams(); 

  useEffect(() => {
    if (customerId) {
      dispatch(fetchTickets(customerId));
    }
  }, [dispatch, customerId]); 

  const handleClick = (customerId, ticketId) => {
    navigate(`${ticketId}`);
  };

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 text-danger">Error: {error}</div>;
  if (!tickets || tickets.length === 0) return <div className="container mt-5">No tickets available</div>;

  return (
    <div className="container mt-5">
      <h2>My Tickets</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Ticket Type</th>
              <th>Ticket Description</th>
              <th>Ticket Status</th>
              <th>Ticket Raise Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index} onMouseEnter={(e) => e.currentTarget.style.cursor = "pointer"} onClick={() => handleClick(customerId, ticket.ticketId)}>
                <td style={{ color: "blue" }}>{ticket.ticketId}</td>
                <td>{ticket.ticketType}</td>
                <td>{ticket.ticketDescription}</td>
                <td>{ticket.ticketStatus}</td>
                <td>{new Date(ticket.ticketRaiseDate).toLocaleDateString("en-GB")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketList;