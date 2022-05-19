import React from "react";

const Card = ({ image, id, handleClick }) => {

    const imageClass = image.stat ? " active " + image.stat : "";

 return (
  <div className={"card" + imageClass} onClick={() => handleClick(id)}>
   <img src={image.img} alt={image.name}/>
   {console.log(image.img)}
  </div>
 )
}

export default Card;
 