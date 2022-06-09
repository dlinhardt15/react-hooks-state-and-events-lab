import React from "react";
import {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const liClass = inCart ? "in-cart" : ""
  const cartText = inCart ? "Remove From Cart" : "Add To Cart"
  function changeCartStatus () {
    setInCart(inCart => !inCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeCartStatus}>{cartText}</button>
    </li>
  );
}

export default Item;
