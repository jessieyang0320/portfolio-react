import React, { Component } from 'react';



class Tile extends Component {
  constructor(props) {
      super(props);
      this.state = {
        open: false
        
      };
      // Bind properties to class instance
      this.clickHandler = this.clickHandler.bind(this);
     
    }
    // Event handlers to modify state values

  clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {};
    let headerStyle = {};
    let zoom = {};
    // When tile clicked
    if (this.state.open) {
      tileStyle = {
        width: '62vw',
        height: '40vw',
        position: 'absolute',
        top: '30%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        zIndex: '99',
        transform: 'none'
      };
    } else {
      tileStyle = {
        width: '26vw',
        height: '18vw'
      };
    }

    return (
      <div className="tile">
        <img
          className="grow"
         
          onClick={this.clickHandler}
          src={this.props.data.imageURL}
          alt={this.props.data.title}
          style={tileStyle}
        />
      </div>
    );
  }
}

export default Tile