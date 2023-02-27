import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

class CardList extends Component {
  render() {
    console.log(this.props);
    console.log('render from cardlist');
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
