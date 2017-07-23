import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './containers/App/App'
import Home from './containers/Home/Home'
import AboutMe from './containers/AboutMe/AboutMe'
import Project from './containers/Projects/Project'
import Contact from './containers/Contact/Contact'
import './routes.css';


const RoutesMap = () => (
  <Router>
    <div className="routes">


      <Route exact path="/" component={App}/>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Project}/>
          <Route path="/me" component={AboutMe}/>
          <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)

export default RoutesMap
