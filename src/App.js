import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const storedLocalStorageInformation = localStorage.getItem('isLoggedIn');

  // if(storedLocalStorageInformation == '1'){
  //   setIsLoggedIn(true)
  // }

  useEffect(() => {
    const storedLocalStorageInformation = localStorage.getItem("isLoggedIn");

    if (storedLocalStorageInformation == "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
        }}
      >
        <MainHeader  onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
