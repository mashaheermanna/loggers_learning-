import logger from "./logger/logger.js";
// const logger = require("./logger/logger");

// logger.log("logger.log messge");
logger.error("console.error message level is 0");
logger.warn("console.warn message level is 1");
logger.info("console.info message level is 2");
console.log("mash");
logger.debug("debug sdkaksk");
// logger.log("logger.log");

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};
