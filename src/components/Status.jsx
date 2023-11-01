import React, { useContext } from "react";
import VerticleCard from "./VerticleCard";
import {
  circleIcon,
  crossIcon,
  pendingIcon,
  tickIcon,
  verticleHalfFillIcon,
} from "../assets";
import StateContext from "../context/StateContext";

const Status = ({ status, users, type }) => {
  const { defaultValue } = useContext(StateContext);
  (() => {
    if (defaultValue === "") return;
    if (defaultValue === "priority") {
      for (let key in status) {
        status[key]?.sort((p1, p2) =>
          p1?.priority < p2?.priority ? 1 : p1?.priority > p2?.priority ? -1 : 0
        );
      }
    } else {
      for (let key in status) {
        status[key]?.sort((p1, p2) =>
          p1?.id[p1?.id.length - 1] - "0" > p2?.id[p1?.id.length - 1] - "0"
            ? 1
            : p1?.id[p1?.id.length - 1] - "0" < p2?.id[p1?.id.length - 1] - "0"
            ? -1
            : 0
        );
      }
    }
  })();

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
