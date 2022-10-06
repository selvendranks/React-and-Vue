import ModalOverlay from "../UI/Modal";
import Modal from "../UI/Modal";
import CartModal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.8 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  
  function closeModal(){
    props.CartVisibility(false)
  }

  return (
    <Modal CartVisibility={props.CartVisibility}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeModal}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
