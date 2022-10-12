import colors from 'colors/safe';

const getFileKey = (fileName: string) => `[${fileName}]`;

const logError = (fileName: string, ...args: any[]) => {
  // @ts-ignore
  const fileKeyColored = colors.red.bold(getFileKey(fileName));
  console.log(fileKeyColored, ...args);
};

const logInfo = (fileName: string, ...args: any[]) => {
  const fileKeyColored = colors.green(getFileKey(fileName));
  console.log(fileKeyColored, ...args);
};

const logger = (fileName: string, ...args: any[]) => {
  let hasErr = false;
  const argsColored = args.map((item) => {
    if (item instanceof Error) {
      hasErr = true;
      return colors.red(String(item));
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
