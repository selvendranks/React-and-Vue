import { useContext } from "react";
import CartContext from "../../store/cart-context";
import ModalOverlay from "../UI/Modal";
import Modal from "../UI/Modal";
import CartModal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {

  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        ></CartItem>
      ))}
    </ul>
  );

  function closeModal() {
    props.CartVisibility(false);
  }

  return (
    <Modal CartVisibility={props.CartVisibility}>
      {cartItem}
      <div className={classes.total}>
        <span>{totalAmount}</span>
        <span>{cartCtx.items.price}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeModal}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
