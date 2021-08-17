import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Main from './Main'
import Footer from './Footer'
import Schedule from './Schedule'
import Navbar from './Navbar'
import Tracks from './Tracks'
import '../styles/App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ='/schedule' component={Schedule}/>
        <Route exact path = '/tracks' component={Tracks}/>
        <Route exact path='/' component={Main}/>
        <Redirect to='/' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
