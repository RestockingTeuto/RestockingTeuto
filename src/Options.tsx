import React from "react";
import ReactDOM from "react-dom/client";
import './Options.css'

function Options(clicked: boolean, setClicked: (p: boolean) => any) {
    return (
      <div className={"Options"}>
          <header className={"Head"}>Options</header>
          <button className={"ButtonX"} onClick={() => setClicked(!clicked) }>
          </button>
      </div>
    );
}

export default Options