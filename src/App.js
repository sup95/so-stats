import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)  {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow`)
      .then(res => {
        const data = res.data.items;
        this.setState({ data });
      });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SO Stats</h1>
        </header>
        <p className="App-intro">
          <table id="theTable">
            <tr>
              <th>Technology</th>
              <th>Popularity Count </th>
            </tr>
            {this.state.data.map(datum =>
              <tr>
                <td>{datum.name}</td>
                <td>{datum.count}</td>
              </tr>
            )}
          </table>
        </p>
      </div>
    );
  }
}

export default App;
