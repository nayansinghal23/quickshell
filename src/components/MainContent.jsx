import React, { useEffect, useState } from "react";
import { removeDuplicatesInArray } from "../helpers/removeDuplicatesInArray";
import Status from "./Status";
import Priority from "./Priority";

const MainContent = () => {
  const [tickets, setTickets] = useState([]);
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

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((data) => {
        return data.json();
      })
      .then(({ tickets, users }) => {
        setTickets(tickets);
        // console.log(users);
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
        });
        // removing duplicates in array
        for (const key in status) {
          status[key] = removeDuplicatesInArray(status[key]);
        }
        for (const key in priority) {
          priority[key] = removeDuplicatesInArray(priority[key]);
        }
        console.log(priority);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mainContent-container">
      {/* <Status status={status} /> */}
      <Priority priority={priority} />
    </div>
  );
};

export default MainContent;
