import React from "react";
import VerticleCard from "./VerticleCard";
import {
  circleIcon,
  crossIcon,
  pendingIcon,
  tickIcon,
  verticleHalfFillIcon,
} from "../assets";

const Status = ({ status, users, type }) => {
  return (
    <div className="status-wrapper">
      <VerticleCard
        heading="Backlog"
        statusContent={status["backlog"]}
        imageSrc={pendingIcon}
        users={users}
        type={type}
      />
      <VerticleCard
        heading="Todo"
        statusContent={status["todo"]}
        imageSrc={circleIcon}
        users={users}
        type={type}
      />
      <VerticleCard
        heading="In Progress"
        statusContent={status["inprogress"]}
        imageSrc={verticleHalfFillIcon}
        users={users}
        type={type}
      />
      <VerticleCard
        heading="Done"
        statusContent={status["done"]}
        imageSrc={tickIcon}
        users={users}
        type={type}
      />
      <VerticleCard
        heading="Canceled"
        statusContent={status["canceled"]}
        imageSrc={crossIcon}
        users={users}
        type={type}
      />
    </div>
  );
};

export default Status;
