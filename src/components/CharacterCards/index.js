import React from "react";

function CharacterCards(props) {
  console.log(props)
  const myStyle = {
    backgroundColor: props.color.color,
    height: "200px",
    width: "200px"
  }


  return (
    <div className="card"
      data-id={props.color.id}
      style={myStyle}
      onClick={props.myFunc}
    >
      {/* <img className="card-img-top card-height" alt="" /> */}
    </div>
  )
}

export default CharacterCards;