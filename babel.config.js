const commonConfig = {
    presets: [
        '@babel/preset-react',
        ['@babel/preset-env', {
            targets: {
                browsers: ['last 2 versions'],
            },
        }],
    ],
    plugins: [
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        ['@babel/plugin-transform-runtime', {
            regenerator: true,
        }],
    ],
};

module.exports = {
    env: {
        production: {
            ...commonConfig,
            plugins: [
                ...commonConfig.plugins,
                '@babel/plugin-syntax-dynamic-import',
            ],
        },
        test: {
            ...commonConfig,
            plugins: [
                ...commonConfig.plugins,
                'babel-plugin-dynamic-import-node',
            ],
        },
    },
};
