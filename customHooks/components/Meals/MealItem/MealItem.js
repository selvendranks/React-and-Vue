import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount =>{
     cartCtx.addItem({
      id: props.id,
      name : props.name,
      amount :  amount,
      price : props.price
     })
  }

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>

      </div>
        <div>
          <MealItemForm id={props.id} addToCart={addToCartHandler}></MealItemForm>
        </div>
    </li>
  );
};

export default MealItem;
