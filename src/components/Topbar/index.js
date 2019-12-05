import React from "react";




function Topbar(props) {
  const myStyle = {
    lineHeight: "5rem",
    backgroundColor: "#32a8a4",
  };
  return (
    <nav style={myStyle} className="navbar fixed-top text-light">

      <a className="h3 text-left" href="/">Clicky Game</a>

      <h4 className="text-center">{props.message}</h4>

      <h4 className="text-right">Your Score: {props.score} / Top Score: {props.topscore}</h4>

    </nav>
  );

};

export default Topbar;