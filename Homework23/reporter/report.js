const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'path/to/cucumber_report.json',
    output: 'path/to/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome  76.0.3809.100",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);