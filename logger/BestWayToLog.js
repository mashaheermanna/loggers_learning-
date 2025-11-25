import winston, { loggers } from "winston";

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf, json, colorize, errors } = format;

export const BestWayToLog = () => {
  // const logger = winston.createLogger({
  //   level: "debug",
  //   format: format.json(),
  //   defaultMeta: { service: "user-service" },
  //   transports: [
  //     new winston.transports.Console(),
  //     new winston.transports.File({ filename: "combined.log" }),
  //   ],
  // });
  // return logger;

  // handeling errors
  const logger = createLogger({
    level: "info",
    format: combine(colorize(), timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: "error-handeling" },
    transports: [new winston.transports.File({ filename: "combined.log" })],
    exceptionHandlers: [new transports.File({ filename: "exception.log" })],
    rejectionHandlers: [new transports.File({ filename: "rejections.log" })],
  });
  return logger;
};

export default BestWayToLog;
