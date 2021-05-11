module.exports = {
  clearMocks: true,
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  moduleDirectories: ["<rootDir>/node_modules"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  globals: {
    render: require("@testing-library/react").render,
  },
  transform: {
    "\\.[jt]sx?$": "<rootDir>/node_modules/babel-jest",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  moduleNameMapper: {
    "^components$": "<rootDir>components",
    "^components/(.*)$": "<rootDir>components/$1",
    "^pages$": "<rootDir>pages",
    "^pages/(.*)$": "<rootDir>pages/$1",
  },
};
