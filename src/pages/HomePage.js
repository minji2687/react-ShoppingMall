import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    // console.log(lacation.search);
    const p = new URLSearchParams(location.search);
    // console.log(p.get('category'));
    return (
      <Layout>
        <h1>Home</h1>
        <Link to="/">All</Link>
        <Link to="/?category=top">Top</Link>
        <Link to="/?category=pants">Pants</Link>
        <ProductList key={category} category={category} />
      </Layout>
    );
  }
}
