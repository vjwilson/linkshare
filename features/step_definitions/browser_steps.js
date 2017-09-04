var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var assert = require('assert');

defineSupportCode(function({Given, When, Then}) {
  var links;
  var linkUrlToTest;
  var focusedLink;
  var existingFavoriteCount;

  Given('I am on the Linkshare homepage', function() {
    return this.driver.get('http://localhost:3000');
  });

  When('I look for a list of links', function () {
    return this.driver.findElements({css: '.link-list .link-item'}).then(function(elements) {
      links = elements;
    });
  });

  Then('I should see one or more link elements', function () {
    assert.equal(links.length, 4);
  });

  When('I click the link text in the first link item', function () {
    return links[0].findElement({css: '.link-item-link'}).then(function(element) {
      linkUrlToTest = element.getAttribute('href').then(function(href) {
        linkUrlToTest = href;
        element.click();
      });
    });
  });

  Then('I should visit the site in the link item href', function () {
    return this.driver.getCurrentUrl().then(function(url) {
      assert.equal(url, linkUrlToTest);
    });
  });

  When('I focus on the link at position {int}', function (position) {
    var arrayIndex = position - 1;
    return this.driver.findElements({css: '.link-list .link-item'}).then(function(elements) {
      focusedLink = elements[arrayIndex];
    });
  });

  When('I save the favorite count of the focused link', function () {
    return focusedLink.findElement({css: '.fave-count'}).then(function(element) {
      element.getText().then(function(faveCountText) {
        existingFavoriteCount = parseInt(faveCountText);
      });
    });
  });

  When('I click the Add Favorite button of the focused link', function () {
    return focusedLink.findElement({css: '.add-fave'}).then(function(element) {
      element.click();
    });
  });

  Then('The favorite count of the link I found should go up by 1', function () {
    return focusedLink.findElement({css: '.fave-count'}).then(function(element) {
      newFavoriteCount = element.getText().then(function(faveCountText) {
        var newFavoriteCount = parseInt(faveCountText);
        assert.equal(newFavoriteCount, existingFavoriteCount + 1);
      });
    });
  });
});
