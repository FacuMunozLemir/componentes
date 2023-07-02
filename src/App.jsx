import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />
      {/* <Route></Route>
      <Routes></Routes> */}
    </BrowserRouter>
  );
}

export default App;