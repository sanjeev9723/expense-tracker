import React, { useContext } from "react";
import { AppContext } from "../App";
import "./Transcation.css"

function Transcation() {
  const { text, setText, amount, setAmount,handleSubmit } = useContext(AppContext);

  return (
    <div>
      <div>
        <h3>Add Transcation</h3>
      </div>
      <div className="trans" >
        <h3>Text</h3>
        <input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      <div>
        <h3>
          Amount <br />
          {/* [negative - expense,positive - income] */}
        </h3>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      </div>

      <br/>
      <div className="btn-container">
      <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Transcation;
