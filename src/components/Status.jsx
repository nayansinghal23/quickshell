import React from "react";
import VerticleCard from "./VerticleCard";
import {
  circleIcon,
  crossIcon,
  pendingIcon,
  tickIcon,
  verticleHalfFillIcon,
} from "../assets";

const Status = ({ status }) => {
  return (
    <div className="status-wrapper">
      <VerticleCard
        heading="Backlog"
        statusContent={status["backlog"]}
        imageSrc={pendingIcon}
      />
      <VerticleCard
        heading="Todo"
        statusContent={status["todo"]}
        imageSrc={circleIcon}
      />
      <VerticleCard
        heading="In Progress"
        statusContent={status["inprogress"]}
        imageSrc={verticleHalfFillIcon}
      />
      <VerticleCard
        heading="Done"
        statusContent={status["done"]}
        imageSrc={tickIcon}
      />
      <VerticleCard
        heading="Canceled"
        statusContent={status["canceled"]}
        imageSrc={crossIcon}
      />
    </div>
  );
};

export default Status;
