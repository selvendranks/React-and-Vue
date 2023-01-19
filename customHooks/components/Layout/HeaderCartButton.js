import { useContext, useEffect ,useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  
   const [btnIsHighlighted,setbtnIsHighlighted] = useState(false)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(()=>{
     if(cartCtx.items.length===0){
      return;
     }
    setbtnIsHighlighted(true);
    
    const timer = setTimeout(()=>{
      setbtnIsHighlighted(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }
  },[cartCtx.items])
 
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  function openCart() {
    props.CartVisibility(true);
  }
  return (
    <button className={btnClasses} onClick={openCart}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
