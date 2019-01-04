const promise = () => Promise.resolve({
    body: {},
});

const request = {
    get: jest.fn(() => ({
        send: () => ({
            promise,
        }),
        promise,
    })),
};

export default request;
