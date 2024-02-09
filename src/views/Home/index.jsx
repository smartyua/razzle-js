import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-helmet';

import logo from 'src/assets/logo.svg';

import { getHomeTitle } from './requests';

import './Home.scss';

class Home extends Component {
  static serverSideInitial() {
    const title = getHomeTitle();

    return {
      title,
    };
  }

  render() {
    const { initialSSRData: { title } } = this.props;

    return (
      <main className="container home">
        <MetaTags title="ssr-starter-kit 🚀" />
        <img
          className="home__logo"
          src={logo}
          alt="divar-stater-kit"
        />
        <p className="title">{title}</p>
      </main>
    );
  }
}

Home.propTypes = {
  initialSSRData: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default Home;
