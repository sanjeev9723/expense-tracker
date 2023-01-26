import React, { useContext } from "react";
import { AppContext } from "../App";
import "./History.css";
function History() {
  const { history } = useContext(AppContext);

  return (
    <div className="main">
      <h3>History</h3>
      <div>
        {history.map((e, index) => (
          <div
            key={index}
            className={parseInt(e.amount) > 0 ? "border-green" : "border-red"}
          >
            {e.text} {e.amount}
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
