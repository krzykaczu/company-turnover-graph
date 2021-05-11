module.exports = {
  clearMocks: true,
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  globals: {
    render: require("@testing-library/react").render,
  },
  transform: {
    "\\.[jt]sx?$": "<rootDir>/node_modules/babel-jest",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  moduleNameMapper: {
    "^components$": "<rootDir>/src/components",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^pages$": "<rootDir>/src/pages",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
  },
};
