import React from "react";

const Dropbox = () => {
  return (
    <div className="dropbox-container">
      <div className="dropbox-children">
        <p className="dropbox-optionTitle">Grouping</p>
        <select name="grouping" className="dropbox-options">
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="dropbox-children">
        <p className="dropbox-optionTitle">Ordering</p>
        <select name="grouping" className="dropbox-options">
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
};

export default Dropbox;
