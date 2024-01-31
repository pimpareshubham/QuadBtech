import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{show.name}</h2>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: show.summary }} />
          <Link to={`/show/${show.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
