module.exports = {
  url: 'http://localhost:3000',
  elements: {
    pageTitle: {
      selector: 'h1'
    },
    linkList: {
      selector: '.link-list'
    },
    linkItem: {
      selector: '.link-item'
    }
  },
  sections: {
    linkList: {
      selector: '.link-list',
      elements: {
        linkItems: {
          selector: '.link-item'
        }
      }
    }
  }
};
