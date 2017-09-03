var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var assert = require('assert');

defineSupportCode(function({Given, When, Then}) {
  var links;

  Given('I am on the Linkshare homepage', function() {
    return this.driver.get('http://localhost:3000');
  });

  When('I look for a list of links', function () {
    return this.driver.findElements({css: '.link-list .link-item'}).then(function(elements) {
      links = elements;
    });
  });

  Then('I should see one or more link elements', function () {
    assert(links.length, 4);
  });
});
