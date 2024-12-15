import React from "react";

const Card = () => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img
        src="https://via.placeholder.com/500x325"
        className="card-img-top"
        alt="Placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a href="#" className="btn btn-primary">
          Call to action!
        </a>
      </div>
    </div>
  );
};

export default Card;
