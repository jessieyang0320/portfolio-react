import React, { Component } from 'react';
import routes from '../../routes'


class App extends Component {
  render() {
    return (
      <div >
        {this.props.children}
      </div>
    );
  }
}

export default App;
