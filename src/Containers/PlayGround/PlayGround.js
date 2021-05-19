import React from 'react'
import { useSpring, animated } from 'react-spring'

const PlayGround = ({
  fromConfiguration,
  toconfiguration,
  springConfiguration,
}) => {
  const styles = useSpring({
    from: fromConfiguration,
    to: toconfiguration,
    config: springConfiguration,
  })
  return (
    <div className='w-full h-screen/2 flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500'>
      <animated.div
        style={{
          ...styles,
        }}
      ></animated.div>
    </div>
  )
}

export default PlayGround
