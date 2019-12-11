import React from "react"

function Gameboard({ children }) {
  const myStyle = {
    paddingTop: "25px",
    paddingBottom: "25px",
    backgroundColor: "gray",
    width: "800px",


  }
  return (
    <div style={myStyle} className="container d-flex flex-wrap justify-content-center">
      {children.map(element => element)}
    </div>
  )
}

export default Gameboard;