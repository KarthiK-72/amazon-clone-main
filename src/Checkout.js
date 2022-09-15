import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
import { Flip } from "@material-ui/icons";
import { Link } from "react-router-dom";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/SMP_Desktop_1x_2._CB665936948_.jpg"
          alt=""
        />
        <div>
          <h3>Hello ,{user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {!basket.length && (
            <h3 className="No__items">
              No items in your basket .. <Link to="/">Click here to shop</Link>{" "}
            </h3>
          )}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
