import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'


export default class App extends Component {
  state = {
      sizes: [],
      colors: [],
      prices: []
  }


  addFilter = (filterName, value) => {
    const values = [...this.state[filterName]];
    values.push(value);
    this.setState({
      [filterName]:values
    });
  }

  removeFilter = (filterName, value) => {
    const values = [...this.state[filterName]];
    const index  = values.indexOf(value);
    values.splice(index,1);
    this.setState({
      [filterName]:values
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <List sizes={this.state.sizes} colors={this.state.colors} prices={this.state.prices} addFilter={this.addFilter} removeFilter={this.removeFilter} />
      </div>
    );
  }
}

