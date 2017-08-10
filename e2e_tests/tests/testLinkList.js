module.exports = {
  'Page has appropriate title': function(client) {
    var linkListPage = client.page.linkListPage();

    linkListPage
      .navigate()
      .waitForElementPresent('@linkList');

    linkListPage.expect.element('@pageTitle').text.to.contain('Welcome to Linkshare');
    linkListPage.expect.element('@linkList').to.be.visible;

    client.elements('css selector','.link-list .link-item', function (result) {
      client.assert.equal(result.value.length, 4);
    });

    client.end();
  }
};
