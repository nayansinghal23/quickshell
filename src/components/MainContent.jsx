import React, { useEffect, useState } from "react";
import { removeDuplicatesInArray } from "../helpers/removeDuplicatesInArray";
import Status from "./Status";
import Priority from "./Priority";
import User from "./User";

const MainContent = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState({
    backlog: [],
    todo: [],
    inprogress: [],
    done: [],
    canceled: [],
  });
  const [priority, setPriority] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  });
  const [userTasks, setUserTasks] = useState({
    usr1: [],
    usr2: [],
    usr3: [],
    usr4: [],
    usr5: [],
  });

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((data) => {
        return data.json();
      })
      .then(({ tickets, users }) => {
        setUsers(users);
        tickets?.forEach((ticket) => {
          let temp = status;
          if (ticket?.status === "Todo") {
            temp["todo"].push(ticket);
          } else if (ticket?.status === "Backlog") {
            temp["backlog"].push(ticket);
          } else if (ticket?.status === "In progress") {
            temp["inprogress"].push(ticket);
          } else if (ticket?.status === "Done") {
            temp["done"].push(ticket);
          } else {
            temp["canceled"].push(ticket);
          }
          setStatus(temp);

          let dummy = priority;
          if (ticket?.priority === 0) {
            dummy["0"].push(ticket);
          } else if (ticket?.priority === 1) {
            dummy["1"].push(ticket);
          } else if (ticket?.priority === 2) {
            dummy["2"].push(ticket);
          } else if (ticket?.priority === 3) {
            dummy["3"].push(ticket);
          } else {
            dummy["4"].push(ticket);
          }
          setPriority(dummy);

          let fakeTask = userTasks;
          if (ticket?.userId === "usr-1") {
            fakeTask["usr1"].push(ticket);
          } else if (ticket?.userId === "usr-2") {
            fakeTask["usr2"].push(ticket);
          } else if (ticket?.userId === "usr-3") {
            fakeTask["usr3"].push(ticket);
          } else if (ticket?.userId === "usr-4") {
            fakeTask["usr4"].push(ticket);
          } else {
            fakeTask["usr5"].push(ticket);
          }
          setUserTasks(fakeTask);
        });
        // removing duplicates in array
        for (const key in status) {
          status[key] = removeDuplicatesInArray(status[key]);
        }
        for (const key in priority) {
          priority[key] = removeDuplicatesInArray(priority[key]);
        }
        for (const key in userTasks) {
          userTasks[key] = removeDuplicatesInArray(userTasks[key]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mainContent-container">
      {/* <Status status={status} users={users} type="status" /> */}
      <Priority priority={priority} users={users} type="priority" />
      {/* <User userTasks={userTasks} users={users} type="user" /> */}
    </div>
  );
};

export default MainContent;
