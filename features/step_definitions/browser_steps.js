var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var assert = require('assert');

defineSupportCode(function({Given, When, Then}) {
  var links;
  var linkUrlToTest;

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

  When('I click the link text in the first link item', function () {
    return links[0].findElement({css: '.link-item-link'}).then(function(element) {
      linkUrlToTest = element.getAttribute('href');
      element.click();
    });
  });

  Then('I should visit the site in the link item href', function () {
    return this.driver.getCurrentUrl().then(function(url) {
      assert(url, linkUrlToTest);
    });
  });
});
