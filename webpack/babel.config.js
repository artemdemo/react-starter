/*
 * This is babel config file.
 * It will be required in webapck configuration files
 */

module.exports = {
    presets: [
        'react',
        ['env', {
            targets: {
                browsers: ['last 2 versions'],
            },
        }],
    ],
    plugins: [
        'transform-react-jsx',
        'transform-object-assign',
        'transform-object-rest-spread',
        ['transform-runtime', {
            polyfill: false,
            regenerator: true,
        }],
    ],
};
