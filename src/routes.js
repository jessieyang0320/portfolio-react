import React from 'react'
import {
  Route, BrowserRouter,Switch
} from 'react-router-dom'

import Home from './containers/Home/Home'
import AboutMe from './containers/AboutMe/AboutMe'
import Projects from './containers/Projects/Projects'
import Contact from './containers/Contact/Contact'



const RoutesMap = () => (
  <BrowserRouter>
    <div className="routes">

      <Switch>
            <Route exact path="/" component={ Home }/>
            
            <Route path="/projects" component={Projects}/>
            <Route path="/me" component={AboutMe}/>
            <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default RoutesMap
