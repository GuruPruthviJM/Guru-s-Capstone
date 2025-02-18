import React from "react";
import { Link } from "react-router-dom";

const TicketCard = ({ title, count, bgColor, textColor, href }) => {
  const cardContent = (
    <div
      className="p-4 rounded"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h6>{title}</h6>
      <h3>{count}</h3>
    </div>
  );

  return href ? (
    <Link to={href} style={{ textDecoration: "none" }}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default TicketCard;