import React from "react";

const AuthContext = React.createContext({

    isLoggedIn : false,
    onLogout : () =>{}  //optional  - just for ide auto completion 
});

export default AuthContext;