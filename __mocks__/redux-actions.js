export const handleActions = jest.fn((...args) => () => Promise.resolve(args));
export const createAction = function(type) {
    const resultFn = function(payload) {
        return Object.assign(
            { type },
            payload ? { payload } : null,
        );
    };
    resultFn.toString = () => type;
    return resultFn;
};
