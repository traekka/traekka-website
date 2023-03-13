/* eslint-disable import/no-extraneous-dependencies */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8zmb5j",

  e2e: {
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
