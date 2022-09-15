import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import GradeIcon from "@material-ui/icons/Grade";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import FlipMove from "react-flip-move";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.image} alt=""></img>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(Number.isInteger(props.rating) && props.rating)
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
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
