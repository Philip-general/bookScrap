const jestPreset = require("@testing-library/react-native/jest-preset");
module.exports = {
  preset: "jest-expo",
  setupFiles: [...jestPreset.setupFiles],
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
