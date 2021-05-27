import React from 'react'
import { useTrail, animated } from 'react-spring'

const useTrailPlay = ({
  fromConfiguration,
  toconfiguration,
  springConfiguration,
}) => {
  const styles = useTrail(4, {
    from: fromConfiguration,
    to: toconfiguration,
    config: springConfiguration,
  })
  return (
    <div className='w-full h-screen/2 flex justify-center items-center bg-gradient-to-r from-green-500 to-blue-300'>
      {styles.map((props, index) => {
        return <animated.div key={index}></animated.div>
      })}
    </div>
  )
}

export default useTrailPlay
