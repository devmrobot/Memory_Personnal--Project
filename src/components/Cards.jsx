import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = ({ images, setImages }) => {

 const [prev, setPrev] = useState(-1);

 const check = (current) => {
  if (images[current].id == images[prev].id) {
   images[current].stat = "correct";
   images[prev].stat = "correct";
   setImages([...images]);
   setPrev(-1);
  } else {
   images[current].stat = "wrong";
   images[prev].stat = "wrong";
   setImages([...images]);
   setTimeout(() => {
    images[current].stat = "";
    images[prev].stat = "";
    setImages([...images]);
    setPrev(-1);
   }, 1000);
  }
 };

 const handleClick = (id) => {
  if (prev === -1) {
   images[id].stat = "active";
   setImages([...images]);
   setPrev(id);
  } else {
   check(id);
  }
 };

 return (
  <div className="grid">
   {images &&
    images.map((image, index) => (
     <Card image={image} key={index} id={index} handleClick={handleClick} />
    ))}
  </div>
 );
};

export default Cards;
