import React, { useEffect, useState } from "react";
import { removeDuplicatesInArray } from "../helpers/removeDuplicatesInArray";
import Status from "./Status";

const MainContent = () => {
  const [tickets, setTickets] = useState([]);
  const [status, setStatus] = useState({
    backlog: [],
    todo: [],
    inprogress: [],
    done: [],
    canceled: [],
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
        });
        // removing duplicates in array
        for (const key in status) {
          status[key] = removeDuplicatesInArray(status[key]);
        }
        // console.log(status);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mainContent-container">
      <Status status={status} />
    </div>
  );
};

export default MainContent;
