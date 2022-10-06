import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {

  const [CartIsShown,SetCartIsShown] = useState(false);

  function CartVisibilityHandler(visibility){
     SetCartIsShown(visibility);
     console.log("should work fine")
  }

  return (
    <CartProvider>
      <Header CartVisibility={CartVisibilityHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
     {CartIsShown && <Cart CartVisibility={CartVisibilityHandler}></Cart>}
    </CartProvider>
  );
}

export default App;
