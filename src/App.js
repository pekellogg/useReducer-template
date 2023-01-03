import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";


function App() {
  
  const context = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );

}

export default App;