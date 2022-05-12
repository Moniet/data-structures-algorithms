// import type { Config } from "@jest/types"
module.exports = {
  testPathIgnorePatterns: ["<rootDir>/dist/*"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  rootDir: ".",
  verbose: true,
  testTimeout: 5000,
}

// export default config
