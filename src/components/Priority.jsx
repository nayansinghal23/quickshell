import React from "react";
import VerticleCard from "./VerticleCard";
import {
  highIcon,
  lowIcon,
  mediumIcon,
  threeDotsIcon,
  urgentIcon,
} from "../assets";

const Priority = ({ priority, users, type }) => {
  return (
    <div className="status-wrapper">
      <VerticleCard
        heading="No priority"
        statusContent={priority["0"]}
        imageSrc={threeDotsIcon}
        users={users}
        type={type}
      />
      <VerticleCard
        heading="Urgent"
        statusContent={priority["4"]}
        imageSrc={urgentIcon}
        users={users}
        type={type}
      />
      <VerticleCard
        heading="High"
        statusContent={priority["3"]}
        imageSrc={highIcon}
        users={users}
        type={type}
      />
      <VerticleCard
        heading="Medium"
        statusContent={priority["2"]}
        imageSrc={mediumIcon}
        users={users}
        type={type}
      />
      <VerticleCard
        heading="Low"
        statusContent={priority["1"]}
        imageSrc={lowIcon}
        users={users}
        type={type}
      />
    </div>
  );
};

export default Priority;
