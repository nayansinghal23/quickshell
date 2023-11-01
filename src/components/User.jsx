import React, { useContext } from "react";
import VerticleCard from "./VerticleCard";
import { persons } from "../assets";
import StateContext from "../context/StateContext";

const User = ({ userTasks, users, type }) => {
  const { defaultValue } = useContext(StateContext);

  (() => {
    if (defaultValue === "") return;
    if (defaultValue === "priority") {
      for (let key in userTasks) {
        userTasks[key]?.sort((p1, p2) =>
          p1?.priority < p2?.priority ? 1 : p1?.priority > p2?.priority ? -1 : 0
        );
      }
    } else {
      for (let key in userTasks) {
        userTasks[key]?.sort((p1, p2) =>
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
      {users?.map((user, index) => (
        <VerticleCard
          key={user?.id}
          heading={user?.name}
          statusContent={userTasks[`usr${index + 1}`]}
          imageSrc={persons[index]}
          users={users}
          type={type}
        />
      ))}
    </div>
  );
};

export default User;
