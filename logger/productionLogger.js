// const { createLogger, format, transports } = require("winston");
// const { combine, timestamp, label, printf } = format;

import winston from "winston";

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});

export const productionLogger = () => {
  const logger = new createLogger({
    level: "debug",
    format: combine(
      // format.colorize(),
      // format.json(),
      timestamp({}),
      myFormat
    ),
    defaultMeta: { service: "user-service" },
    transports: [
      new transports.Console(),

      //   // - Write all logs with importance level of `error` or higher to `error.log`
      //   //   (i.e., error, fatal, but not other levels)
      new winston.transports.File({ filename: "error.log", level: "error" }),

      //   // - Write all logs with importance level of `info` or higher to `combined.log`
      //   //   (i.e., fatal, error, warn, and info, but not trace)
      new winston.transports.File({ filename: "combined.log" }),
    ],
  });
  return logger;
};

export default productionLogger;
