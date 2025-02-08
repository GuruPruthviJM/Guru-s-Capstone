import React, { useEffect } from 'react';
import NotificationCard from '../../components/NotificationCard';
import '../../CSS/customer_module/Notification.css';

const notifications = [
  {
    title: "New Feature Update",
    message: "We have launched a new feature to enhance your experience. Check it out now!",
  },
  {
    title: "Maintenance Notification",
    message: "Scheduled maintenance is planned for this weekend. Services may be interrupted.",
  },
  {
    title: "Welcome to Our Platform",
    message: "Thank you for joining! Explore our features to get the best out of your experience.",
  }
];


const Notifications = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Notifications</h2>
      <div className="row" id="notification-container">
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            title={notification.title}
            message={notification.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications ;
