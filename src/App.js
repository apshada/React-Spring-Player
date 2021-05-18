import React from 'react'
import './app.styles.scss'
import Navbar from './Components/Navbar/Navbar'
import RangeConfig from './Components/Range/Range'
import UseTrailPlay from './Containers/UseTrail/UseTrail'
import UseTransitionPlay from './Containers/useTransition/UseTransition'
import PlayGround from './PlayGround/PlayGround'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <UseTransitionPlay /> */}
      {/* <UseTrailPlay /> */}
      {/* <PlayGround /> */}
      <RangeConfig />
    </div>
  )
}

export default App
