const winston = require('winston');
const path = require('path');

// Determine log level based on environment
const level = process.env.NODE_ENV === 'development' ? 'debug' : 'info';

// Custom log format
const customFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
  })
);

const logger = winston.createLogger({
  level: level,
  format: customFormat,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        customFormat
      )
    })
  ]
});

// Optionally add file transports if needed in the future
// if (process.env.NODE_ENV === 'production') {
//   logger.add(new winston.transports.File({ filename: path.join(__dirname, '../logs/error.log'), level: 'error' }));
//   logger.add(new winston.transports.File({ filename: path.join(__dirname, '../logs/combined.log') }));
// }

module.exports = logger;
