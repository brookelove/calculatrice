import { Routes, Route } from "react-router-dom";
// components
import About from "../components/About";
import Calculator from "../components/Calculator";
import Header from "../components/Header";
import TransitionComponent from "../components/Transition";

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <TransitionComponent>
            <Calculator />
          </TransitionComponent>
        }
      />

      <Route
        path="/about"
        element={
          <TransitionComponent>
            <About />
          </TransitionComponent>
        }
      />
    </Routes>
  );
};
export default Router;
