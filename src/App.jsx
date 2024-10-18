import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Header from "./components/Header";
import Router from "./routes/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <Router />
    </>
  );
}

export default App;
