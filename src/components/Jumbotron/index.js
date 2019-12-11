import React from "react";

function Jumbotron() {
  return (
    <div style={{ height: "10rem", marginBottom: "10px" }} className="jumbotron dark bg-dark text-light">
      <div>
        <h1>Clicky Game</h1>
        <h5>Click on an image to earn points, but don't click a image more than once!</h5>
      </div>
    </div>
  )
};

export default Jumbotron;