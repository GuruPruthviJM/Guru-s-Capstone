const NotificationCard = ({ title, message }) => (
    <div className="col-12">
      <div className="notification-card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{message}</p>
        </div>
      </div>
    </div>
  );

export default NotificationCard