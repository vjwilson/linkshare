import React, { Component } from 'react';
import logo from '../../logo.svg';

import LinkList from '../LinkList/LinkList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: props.links
    };

    this.incrementLinkCount = this.incrementLinkCount.bind(this);
  }

  incrementLinkCount(linkUrl) {
    const updatedLinkList = this.state.links.map((link) => {
      if (link.linkUrl === linkUrl) {
        return {
          linkUrl: link.linkUrl,
          favorites: link.favorites + 1
        };
      } else {
        return link;
      }
    });

    this.setState({
      links: updatedLinkList
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1>Welcome to Linkshare</h1>
        </header>
        <main className="app-intro">
          <LinkList links={this.state.links} increment={this.incrementLinkCount} />
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
