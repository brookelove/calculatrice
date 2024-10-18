import { complexExpression } from "../utils/calculations";
import Scene from "./Scene";

// component imports
import Header from "./Header";

//CSS
import "../assets/css/calculator.css";

function Calculator() {
  return (
    <section className="calculator-container">
      <Header />
      <Scene />
    </section>
  );
}
export default Calculator;
