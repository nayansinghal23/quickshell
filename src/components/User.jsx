import React from "react";
import VerticleCard from "./VerticleCard";
import { persons } from "../assets";

const User = ({ userTasks, users, type }) => {
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
