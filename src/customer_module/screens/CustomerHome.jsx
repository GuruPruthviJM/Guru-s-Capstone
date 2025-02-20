import React, { useState } from "react";
import Card from "../../components/Card";
import Home from "../../components/Home"
import "../../CSS/customer_module/CustomerHome.css";

export default function CustomerHome() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(prevActiveCard => (prevActiveCard === index ? null : index));
  };

  const cardData = [
    { title: "Card 1", subtitle: "Subtitle 1", text: "Some quick example text for card 5 The layout has been adjusted to display only 3 cards per row using a grid layout. Let me know if there’s anything else you’d like to modify!.1.", price: "$19.00" },
    { title: "Card 2", subtitle: "Subtitle 2", text: "Some quick example text for card 5 The layout has been adjusted to display only 3 cards per row using a grid layout. Let me know if there’s anything else you’d like to modify!. 2.", price: "$29.00" },
    { title: "Card 3", subtitle: "Subtitle 3", text: "Some quick example text for card 5 The layout has been adjusted to display only 3 cards per row using a grid layout. Let me know if there’s anything else you’d like to modify!. 3.", price: "$199.00" },
    { title: "Card 4", subtitle: "Subtitle 4", text: "Some quick example text for card 5 The layout has been adjusted to display only 3 cards per row using a grid layout. Let me know if there’s anything else you’d like to modify!. 4.", price: "$39.00" },
    { title: "Card 5", subtitle: "Subtitle 5", text: "Some quick example text for card 5 The layout has been adjusted to display only 3 cards per row using a grid layout. Let me know if there’s anything else you’d like to modify!. 5.", price: "$99.00" },
    { title: "Card 6", subtitle: "Subtitle 6", text: "Some quick example text for card 5 The layout has been adjusted to display only 3 cards per row using a grid layout. Let me know if there’s anything else you’d like to modify!. 6.", price: "$69.00" },
  ];

  return (
    <div>
        <Home />
        <h3>Services Offered</h3>
        <div className="column">
        {cardData.map((data, i) => (
            <Card
            key={i}
            index={i + 1}
            title={data.title}
            subtitle={data.subtitle}
            text={data.text}
            price={data.price}
            isActive={activeCard === i + 1}
            onClick={() => handleCardClick(i + 1)}
            />
            ))}
        </div>
    </div>
  );
}