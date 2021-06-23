// import React from 'react'
import RangeConfig from './Containers/Range/Range'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import useTrailConfig from './Containers/Range/useTrail'

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={RangeConfig} />
        <Route path='/trail' component={useTrailConfig} />
      </Switch>
    </Router>
  </>
)

export default App
