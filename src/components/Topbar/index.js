import React from "react";




function Topbar({children}) {
  const myStyle = {
     lineHeight: "5rem",
     backgroundColor: "#32a8a4",
   };
  return (
    <nav style={myStyle} className="navbar fixed-top text-light">

      <a className="h3 text-left" href="/">Clicky Game</a>

      <h4 className="text-center">Click a image to begin!</h4>

      <h4 className="text-right">Your Score: 0 / Top Score: 0</h4>

    </nav>
  );
  
};

export default Topbar;