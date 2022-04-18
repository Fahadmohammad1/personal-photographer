import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./components/CheckOut/CheckOut";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RequireAuth from "./components/RequireAuth/RequireAuth";

import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SingIn/SignIn";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route
          path="/checkOut"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
