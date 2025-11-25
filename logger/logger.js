import SomeLoggerMethod from "./SomeLoggerMethod.js";
import productionLogger from "./productionLogger.js";

import BestWayToLog from "./BestWayToLog.js";
import centralizeUsingBetterStack from "./centralizeUsingBetterStack.js";

// const NODE_ENV = process.env.NODE_ENV;
let logger = null;

if (process.env.NODE_ENV === "development") {
  console.log("inside development");

  logger = SomeLoggerMethod();
}
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production1") {
  console.log("inside production");
  logger = productionLogger();
}

if (process.env.NODE_ENV === "production2") {
  console.log("inside best way production");
  logger = BestWayToLog();
}

if (process.env.NODE_ENV === "production") {
  console.log("inside Logtail");
  logger = centralizeUsingBetterStack();
}

export default logger;
