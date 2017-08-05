import React, { Component } from 'react';
import logo from '../../logo.svg';

import LinkList from '../LinkList/LinkList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const links = [
      {
        linkUrl: 'http://www.csszengarden.com',
        favorites: 10
      },
      {
        linkUrl: 'http://www.daringfireball.com',
        favorites: 15
      }
    ];

    this.state = {
      links: links
    };
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1>Welcome to Linkshare</h1>
        </header>
        <main className="app-intro">
          <LinkList links={this.state.links} />
        </main>
        <footer className="app-footer">
          <span className="attribution">
            Icon made by <a href="http://www.freepik.com/" target="_blank">Freepik</a> from <a href="www.flaticon.com" target="_blank">www.flaticon.com</a>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
