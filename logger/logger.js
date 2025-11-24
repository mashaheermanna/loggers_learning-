import SomeLoggerMethod from "./SomeLoggerMethod.js";
import productionLogger from "./productionLogger.js";

const NODE_ENV = process.env.NODE_ENV;
let logger = null;

// if (process.env.NODE_ENV !== "development") {
//   logger = SomeLoggerMethod();
// }
console.log("node env value ", NODE_ENV);
if (NODE_ENV !== "production") {
  console.log("inside production");
  logger = productionLogger();
}

export default logger;
