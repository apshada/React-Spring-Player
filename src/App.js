import React from 'react'
import RangeConfig from './Containers/Range/Range'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import useTrailConfig from './Containers/Range/useTrail'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route to='/' component={RangeConfig}></Route>
      <Route path='/trail' component={useTrailConfig} />
    </Router>
    // <Router>
    //   <Navbar />
    //   {/* <Switch> */}
    //   <Route path='/'>
    //     <RangeConfig />
    //   </Route>
    //   <Route path='/trail' component={useTrailConfig} />
    //   {/* <Topics /> */}
    //   {/* </Switch> */}
    // </Router>
  )
}

export default App
