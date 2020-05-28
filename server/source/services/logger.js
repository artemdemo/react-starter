const colors = require('colors/safe');

const getFileKey = fileName => `[${fileName}]`;

const logError = (fileName, ...args) => {
    const fileKeyColored = colors.red.bold(getFileKey(fileName));
    console.log(fileKeyColored, ...args);
};

const logInfo = (fileName, ...args) => {
    const fileKeyColored = colors.green(getFileKey(fileName));
    console.log(fileKeyColored, ...args);
};

const logger = (fileName, ...args) => {
    let hasErr = false;
    const argsColored = args.map((item) => {
        if (item instanceof Error) {
            hasErr = true;
            return colors.red(item);
        }
        return item;
    });
    if (hasErr) {
        logError(fileName, ...argsColored);
    } else {
        logInfo(fileName, ...argsColored)
    }
};

module.exports = (fileKey) => {
    const bindedLogger = logger.bind(null, fileKey);
    bindedLogger.error = logError.bind(null, fileKey);
    bindedLogger.info = logInfo.bind(null, fileKey);
    return bindedLogger;
};
