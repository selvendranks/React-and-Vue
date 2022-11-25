import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import ModalOverlay from "../UI/Modal";
import Modal from "../UI/Modal";
import CartModal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isOrdered, setOrderClick] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didsubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  let modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={closeModal}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  function closeModal() {
    props.CartVisibility(false);
  }

  function orderHandler() {
    setOrderClick(true);
  }

  async function submitOrderHandler(userData) {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-18f60-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart()
  }

  const cartModelContent = (
    <>
      {cartItem}
      <div className={classes.total}>
        <span>{totalAmount}</span>
        <span>{cartCtx.items.price}</span>
      </div>
      {isOrdered && (
        <Checkout cancel={closeModal} order={submitOrderHandler}></Checkout>
      )}
      {!isOrdered && modalActions}
    </>
  );

  const isSubmittingModelContent = (
    
      <p>Confirming your order ... </p>
    
  )

  const didsubmitModelContent = (
    <>
    <p>Successfully confirmed your order, happy meals </p>
    <div className={classes.actions}>
      <button className={classes.button} onClick={closeModal}>
        Close
      </button>
     
    </div>
    </>
  )

  return <Modal CartVisibility={props.CartVisibility}>
    
    {!isSubmitting && !didsubmit &&  cartModelContent}
    {isSubmitting && isSubmittingModelContent}
    {!isSubmitting && didsubmit && didsubmitModelContent}
    </Modal>;
};

export default Cart;
