// const logger = require("./logger/logger");
// import dotenv from "dotenv";
// dotenv.config();
import { request } from "express";
import "./config.js"; // loads .env BEFORE anything else

import logger from "./logger/logger.js";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

logger.log("info", "logger.log messge");
logger.error("console.error message level is 0");
logger.warn("console.warn message level is 1");
logger.info("console.info message level is 2");
console.log("mash");
logger.info("Hello, World");
logger.log("info", "Hellow, World Again!");
// logger.debug("debug sdkaksk");
// logger.log("logger.log");

//
// handelling childLogger
// function helloWorld() {
//   const user_name = "steve";
//   const childLogger = logger.child({
//     // userName: user_name,
//     requestId: "njknfjwjjn3212jn3jj",
//   });

//   childLogger.info("info message");
// }

// helloWorld();

logger.info("hello BetterStack?");

logger.info("Hello log file!");
// throw new Error("an error");

// longtail.flush();
