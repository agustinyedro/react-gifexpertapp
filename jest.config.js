export const testEnvironment = 'jsdom';
export const transform = {
    '^.+\\.jsx?$': 'babel-jest',
};
export const moduleFileExtensions = ['js', 'jsx'];
export const setupFilesAfterEnv = ['<rootDir>/jest.setup.js'];
export const moduleNameMapper = {
    '^@/(.*)$': '<rootDir>/src/$1'
};
