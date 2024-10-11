// create all functions for calculations needed for calculating
import { evaluate } from "mathjs";
// complicated expression
export const complexExpression = (expression) => {
  try {
    const result = evaluate(expression);
    return result;
  } catch (error) {
    throw new Error("Invalid expression");
  }
};
