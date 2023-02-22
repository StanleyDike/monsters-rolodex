import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      affiliation: 'Taylor Gang',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.affiliation}</p>
          <button
            onClick={() => {
              this.setState({ affiliation: 'Glory Boys' });
              // this.state.affiliation = 'Glory Boys';
              // console.log(this.state);
            }}
          >
            Change Affiliation
          </button>
        </header>
      </div>
    );
  }
}

export default App;
