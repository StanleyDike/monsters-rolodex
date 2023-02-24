import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // First time react renders a component onto the page
  async componentDidMount() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let users = await response.json();
      console.log(users);
      // Shallow merge with current state object
      this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          // Runs only after state is fully updated
          console.log(this.state);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
