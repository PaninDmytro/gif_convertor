const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9zohkt",
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
