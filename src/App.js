import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Wiz', lastName: 'Khalifa' },
      affiliation: 'Taylor Gang',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name.firstName} {this.state.name.lastName} is apart of{' '}
            {this.state.affiliation}
          </p>
          <button
            onClick={() => {
              // Shallow merge with current state object
              this.setState(
                () => {
                  return {
                    name: { firstName: 'Chief', lastName: 'Keef' },
                    affiliation: 'Glory Boys',
                  };
                },
                // Runs only after state is fully updated
                () => {
                  console.log(this.state);
                }
              );
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
