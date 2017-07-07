import React, { Component } from 'react';
import { Link } from 'react-router';
import Naigation from './components/Navigation';
import TemplateHero from './components/TemplateHero';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
        <div>
          <Naigation/>
            <TemplateHero/>
            {this.props.children}
          <Footer/>
        </div>
    );
  }
}

export default App;
