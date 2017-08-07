import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';

import LinkList from '../LinkList/LinkList';

import { incrementFavorites } from '../../actions/linkActions.js';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1>Welcome to Linkshare</h1>
        </header>
        <main className="app-intro">
          <LinkList links={this.props.links} increment={this.props.incrementLinkCount} />
        </main>
        <footer className="app-footer">
          <span className="attribution">
            Icon made by <a href="http://www.freepik.com/" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="www.flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
          </span>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    links: state.links
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementLinkCount: (linkUrl) => dispatch(incrementFavorites(linkUrl))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
