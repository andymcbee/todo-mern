import React from "react";

export const SidebarToDoListSingle = ({ list }) => {
  return (
    <div>
      <div className="listNames">{list.listTitle}</div>
      <div>
        <button className="listNames">Select</button>
      </div>
    </div>
  );
};
