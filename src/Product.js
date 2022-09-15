import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import GradeIcon from "@material-ui/icons/Grade";
import StarHalfIcon from "@material-ui/icons/StarHalf";
//import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Product(props) {
  const [{}, dispatch] = useStateValue();
  /*console.log("added",basket);*/
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        image: props.image,
        id: props.id,
        title: props.title,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(Number.isInteger(props.rating) && (props.rating-1))
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon />
              </p>
            ))}
          {Array(!Number.isInteger(props.rating) && props.rating - 0.5)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon />
              </p>
            ))}
          {!Number.isInteger(props.rating) && (
            <StarHalfIcon className="half__star" />
          )}
        </div>
      </div>

      <img alt="" className="product__image" src={props.image}></img>

      <button className=" product__button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
