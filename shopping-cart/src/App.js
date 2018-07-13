import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import ShoppingCartBuilder from './container/shoppingCartBuilder/shoppingCartBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ShoppingCartBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
