// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const { SpecReporter } = require('jasmine-spec-reporter');

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');

var reportsDirectory = './reports';
var dashboardReportDirectory = reportsDirectory + '/dashboardReport';

var reporter = new Jasmine2HtmlReporter({
  baseDirectory: './protractor-result', // a location to store screen shots.
  docTitle: 'Protractor Demo Reporter',
  docName: 'protractor-demo-tests-report.html'
});

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts',
    'todo-spec.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare : function () {
      // xml report generated for dashboard
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: reportsDirectory + '/xml',
        filePrefix: 'xmlOutput'
    }));

    var fs = require('fs-extra');
    if (!fs.existsSync(dashboardReportDirectory)) {
        fs.mkdirSync(dashboardReportDirectory);
    }

    jasmine.getEnv().addReporter({
        specDone: function (result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');

                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });

    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
            savePath: 'target/screenshots', // put your destination file
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
        })
    );

    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailedSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
    }));

    jasmine.getEnv().addReporter(reporter);
  },

  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        platform = caps.get('platform');

        var HTMLReport = require('protractor-html-reporter-2');
        testConfig = {
            reportTitle: 'Protractor Test Execution Report',
            outputPath: dashboardReportDirectory,
            outputFilename: 'index',
            screenshotPath: './',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testPlatform: platform
        };
        new HTMLReport().from(reportsDirectory + '/xml/xmlOutput.xml', testConfig);
    });
},

};