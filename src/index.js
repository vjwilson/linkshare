import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const links = [
  {
    linkUrl: 'http://www.csszengarden.com',
    favorites: 10
  },
  {
    linkUrl: 'https://daringfireball.net',
    favorites: 15
  },
  {
    linkUrl: 'https://alistapart.com',
    favorites: 9
  },
  {
    linkUrl: 'https://www.smashingmagazine.com',
    favorites: 18
  }
];


ReactDOM.render(<App links={links} />, document.getElementById('root'));
registerServiceWorker();
