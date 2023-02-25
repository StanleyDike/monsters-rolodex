import { Component } from 'react';
import CardList from './components/CardList/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }

  // First time react renders a component onto the page
  async componentDidMount() {
    console.log('componentDidMount');
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
