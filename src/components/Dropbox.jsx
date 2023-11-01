import React, { useContext } from "react";
import StateContext from "../context/StateContext";

const Dropbox = ({ setClicked }) => {
  const { groupingValue, setGroupingValue, defaultValue, setDefaultValue } =
    useContext(StateContext);

  const handleGroupingValue = (e) => {
    setGroupingValue(e.target.value);
    setClicked((prevClick) => prevClick + 1);
  };

  const handleOrderingValue = (e) => {
    setDefaultValue(e.target.value);
    setClicked((prevClick) => prevClick + 1);
  };

  return (
    <div className="dropbox-container">
      <div className="dropbox-children">
        <p className="dropbox-optionTitle">Grouping</p>
        <select
          name="grouping"
          className="dropbox-options"
          defaultValue={groupingValue}
          onClick={handleGroupingValue}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="dropbox-children">
        <p className="dropbox-optionTitle">Ordering</p>
        <select
          name="grouping"
          className="dropbox-options"
          defaultValue={defaultValue}
          onClick={handleOrderingValue}
        >
          <option value="" style={{ display: "none" }}>
            Priority
          </option>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Dropbox;
