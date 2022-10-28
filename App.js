import React from "react";
import Login from "./components/login";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Logout from "./components/logout";

const App = () => {
  const user = useSelector(selectUser);
}
export default App;