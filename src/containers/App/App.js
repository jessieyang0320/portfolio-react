import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

// import Loading from '../../components/Loading/Loading';


class App extends Component {


  render() {

    return (
      <div>
        <NavigationBar/>

        {this.props.children}
        
      </div>
    );
  }
}

export default App;
