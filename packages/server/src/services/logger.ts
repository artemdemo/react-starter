const getFileKey = (fileName: string) => `[${fileName}]`;

const logError = (fileName: string, ...args: any[]) => {
  console.log(getFileKey(fileName), ...args);
};

const logInfo = (fileName: string, ...args: any[]) => {
  console.log(getFileKey(fileName), ...args);
};

const logger = (fileName: string, ...args: any[]) => {
  let hasErr = false;
  const argsColored = args.map((item) => {
    if (item instanceof Error) {
      hasErr = true;
      return String(item);
    }
    return item;
  });
  if (hasErr) {
    logError(fileName, ...argsColored);
  } else {
    logInfo(fileName, ...argsColored);
  }
};

interface BindedLogger {
  (...args: any[]): void;
  error: (...args: any[]) => void;
  info: (...args: any[]) => void;
}

const bindedLogger = (fileKey: string): BindedLogger => {
  const bindedLogger: BindedLogger = logger.bind(null, fileKey) as any;
  bindedLogger.error = logError.bind(null, fileKey);
  bindedLogger.info = logInfo.bind(null, fileKey);
  return bindedLogger;
};

export default bindedLogger;
