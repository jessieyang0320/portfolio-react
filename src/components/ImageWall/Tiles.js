import React, { Component } from 'react';
import Tile from './Tile';
import './Tiles.css'


class Tiles extends Component {
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return (
      <div className="tiles">
        {this.props.data.map((data) => {
          return <Tile data={data} key={data.id} />
        })}
      </div>
    );
  }
}

export default Tiles;