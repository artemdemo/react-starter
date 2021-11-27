module.exports = {
  rootDir: '../',
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/?(*.)(spec|test).(t|j)s?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  setupFiles: [],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transformIgnorePatterns: ['/node_modules/'],
  unmockedModulePathPatterns: ['react', 'react-dom'],
  globals: {
    ENV: {
      production: true,
    },
  },
  collectCoverageFrom: [
    'source/**/*.{js,jsx,ts,tsx}',
    '!source/libraries/**',
    '!source/styles/**',
    '!source/images/**',
    '!node_modules/**',
  ],
  coverageReporters: ['text', 'text-summary'],
};
