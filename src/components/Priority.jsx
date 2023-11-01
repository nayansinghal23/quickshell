import React from "react";
import VerticleCard from "./VerticleCard";
import {
  highIcon,
  lowIcon,
  mediumIcon,
  threeDotsIcon,
  urgentIcon,
} from "../assets";

const Priority = ({ priority }) => {
  return (
    <div className="status-wrapper">
      <VerticleCard
        heading="No priority"
        statusContent={priority["0"]}
        imageSrc={threeDotsIcon}
      />
      <VerticleCard
        heading="Urgent"
        statusContent={priority["4"]}
        imageSrc={urgentIcon}
      />
      <VerticleCard
        heading="High"
        statusContent={priority["3"]}
        imageSrc={highIcon}
      />
      <VerticleCard
        heading="Medium"
        statusContent={priority["2"]}
        imageSrc={mediumIcon}
      />
      <VerticleCard
        heading="Low"
        statusContent={priority["1"]}
        imageSrc={lowIcon}
      />
    </div>
  );
};

export default Priority;
