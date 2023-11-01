import React from "react";
import Card from "./Card";
import { plusIcon, threeDotsIcon } from "../assets";

const VerticleCard = ({ heading, statusContent, imageSrc, users, type }) => {
  return (
    <div className="verticleCard-container">
      <div className="verticleCard-headingContainer">
        <div className="headingContainer-children">
          <img src={imageSrc} alt="imageSrc-svg" className="imageSrc-svg" />
          <p className="headingContainer-para">{heading}</p>
          <p className="headingContainer-amount">{statusContent?.length}</p>
        </div>
        <div className="headingContainer-children">
          <img src={plusIcon} alt="plusIcon" className="plusIcon-svg" />
          <img
            src={threeDotsIcon}
            alt="threeDotsIcon"
            className="threeDotsIcon-svg"
          />
        </div>
      </div>
      {statusContent?.map((ticket) => (
        <Card
          ticket={ticket}
          key={ticket?.id}
          personImg={ticket?.userId[ticket?.userId?.length - 1] - "0"}
          available={
            users[ticket?.userId[ticket?.userId?.length - 1] - "1"]?.available
          }
          type={type}
        />
      ))}
    </div>
  );
};

export default VerticleCard;
