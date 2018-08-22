let defaultTime;

export const __setDefaultTime = time => defaultTime = time;

const momentMock = (time = defaultTime) => {
    return {
        // With this approach we could test with snapshot income time and format
        format: format => `${time} [${format}]`,
    };
};

momentMock.utc = momentMock;

export default momentMock;
