import React from "react";




function Topbar(props) {
  const myStyle = {
    lineHeight: "5rem",
    backgroundColor: "#32a8a4",
  };
  return (
    <nav style={myStyle} className="navbar fixed-top text-light">

      <h3 className="strong">Clicky Game</h3>

      <h4 style={{color: props.messageColor}}>{props.message}</h4>

      <h4 >Your Score: {props.score}</h4>

    </nav>
  );

};

export default Topbar;