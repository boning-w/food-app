import winston from "winston/lib/winston/config";
import path from "path";
import moment from "moment";

const createLogger = (filename) => {
  const logger = winston.createLogger({
    level: "info",
    defaultMeta: {
      file: filename ? path.basename(filename) : undefined,
    },
    format: winston.format.combine(
      winston.format.timestamp({
        format: () => moment().format("YYYY-MM-DD HH:mm:ss"), // Format the timestamp
      }),
      winston.format.printf(({ timestamp, file, level, message }) => {
        return `[${timestamp}] [${level}] ${
          file ? `[${file}]` : ""
        } : ${message}`;
      })
    ),
    transports: [new winston.transports.Console()],
  });

  logger.stream = {
    write: (message) => {
      logger.info(message);
    },
  };
  return logger;
};

export default createLogger;
