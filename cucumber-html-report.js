const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json/",
  reportPath: "cypress/reports/html-multi-report/",
  ignorebadJsonFile: true,
  displayReportTime: true,
  displayDuration: true,
  metadata: {
    device: "Local test machine",
    platform: {
        name: "Mac OS",
        version: "10.14.6"
    },
  },
});