import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/dist/*"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  rootDir: ".",
  verbose: true,
  testTimeout: 5000,
}

export default config
