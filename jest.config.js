module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/tsconfig.json"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  rootDir: ".",
}
