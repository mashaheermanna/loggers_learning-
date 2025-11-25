import winston from "winston";
import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf, json, colorize, errors } = format;

const longtail = new Logtail("NqCyVKAmJ2Hy551MMccuWcWf", {
  endpoint: "https://s1603460.eu-nbg-2.betterstackdata.com",
});

export const centralizeUsingBetterStack = () => {
  // sending logs to betterStack an centralise app to keep track of all our logs
  const logger = createLogger({
    level: "info",
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: "longtail-handeling" },
    transports: [new LogtailTransport(longtail)],
    exceptionHandlers: [new LogtailTransport(longtail)],
    rejectionHandlers: [new LogtailTransport(longtail)],
  });
  longtail.flush();
  return logger;
};
export default centralizeUsingBetterStack;
