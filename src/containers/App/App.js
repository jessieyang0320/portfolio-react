import React, { Component } from 'react';


// import Loading from '../../components/Loading/Loading';


class App extends Component {


  render() {

    return (
      <div>
        
        {this.props.children}
        
      </div>
    );
  }
}

export default App;
