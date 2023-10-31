import React from "react";
import { exclaimationIcon } from "../assets";

const Card = ({ ticket }) => {
  // ticket -> userId, priority
  return (
    <div className="card-container">
      <div className="card-title-userImage-wrapper">
        <p className="card-title">{ticket?.id}</p>
        <div className="user-image-container">
          <img src={exclaimationIcon} alt="userImage" className="user-image" />
          <div className="user-available" />
        </div>
      </div>
      <p className="card-heading">
        {ticket?.title?.length <= 50
          ? ticket?.title
          : ticket?.title?.slice(0, 50) + "..."}
      </p>
      <div className="card-type">
        <div className="card-type-children">
          <img
            src={exclaimationIcon}
            alt="exclaimationIcon"
            className="exclaimationIcon-svg"
          />
        </div>
        <div className="card-type-children">
          <div className="card-type-circle" />
          <p className="card-type-para">{ticket?.tag[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
