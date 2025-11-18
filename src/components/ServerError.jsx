import React from 'react';
import './ServerError.css';

const ServerError = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-code">503</div>
        <h1>Service Temporarily Unavailable</h1>
        <p className="error-message">
          The server is temporarily unable to service your request due to maintenance downtime or capacity problems.
        </p>
        <p className="error-detail">
          Please try again shortly.
        </p>
        <div className="error-info">
          <p>Error Code: ERR_SERVICE_UNAVAILABLE</p>
          <p>Timestamp: {new Date().toUTCString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
