import React from 'react'
import { Range } from 'react-range'
import PlayGround from '../PlayGround/PlayGround'
import CodePreview from '../codePreview/CodePreview'

const FromConfig = [
  {
    id: 1,
    rangeText: 'X',
  },
  {
    id: 2,
    rangeText: 'Y',
  },
  {
    id: 3,
    rangeText: 'SCALE',
  },
  {
    id: 4,
    rangeText: 'ROTATE',
  },
]

const objectCon = [
  {
    id: 1,
    rangeText: 'MASS',
  },
  {
    id: 2,
    rangeText: 'TENSION',
  },
  {
    id: 3,
    rangeText: 'FRICTION',
  },
]

const RangeConfig = () => {
  const [loopValue, setLoopValue] = React.useState(false)
  const [springCss, setSpringCss] = React.useState({
    height: 5,
    width: 5,
    borderRadius: 1,
    backgroundColor: '#d8efd4',
  })
  const [toconfig, setToConfig] = React.useState({
    X: [0],
    Y: [0],
    SCALE: [1],
    ROTATE: [0],
  })

  const [objectConfig, setObjectConfig] = React.useState({
    MASS: [1],
    TENSION: [170],
    FRICTION: [26],
  })

  const updateToConfig = (value, updateParameterforTo) => {
    setToConfig({
      ...toconfig,
      [updateParameterforTo]: value,
    })
  }

  const updateSpringConfig = (value, updateParameterforSpring) => {
    setObjectConfig({
      ...objectConfig,
      [updateParameterforSpring]: value,
    })
  }

  console.log(objectConfig)

  const configFrom = {
    transform: `translateX(0px) translateY(0px) scale(1) rotate(0deg)`,
    height: `5rem`,
    width: `5rem`,
    backgroundColor: `#d8efd4`,
    borderRadius: `1rem`,
  }

  const updateSpringCss = (e) => {
    console.log([e.target.name])
    if (e.target.name === 'backgroundColor' && e.target.length >= 3) {
      console.log([e.target.name], e.target.value)
      setSpringCss({
        ...springCss,
        [e.target.name]: toString(e.target.value),
      })
    } else {
      if (e.target.value) {
        setSpringCss({
          ...springCss,
          [e.target.name]: parseInt(e.target.value),
        })
      }
    }
  }

  const springConfig = {
    mass: `${objectConfig.MASS[0]}`,
    friction: `${objectConfig.FRICTION[0]}`,
    tension: `${objectConfig.TENSION[0]}`,
    // bounce: 2,
    // frequency: -300,
    // // damping: 0,
  }

  const configTo = [
    {
      transform: `translateX(${toconfig.X[0]}px) translateY(${toconfig.Y[0]}px) scale(${toconfig.SCALE[0]}) rotate(${toconfig.ROTATE[0]}deg)`,
      height: `${springCss.height}rem`,
      width: `${springCss.width}rem`,
      backgroundColor: `${springCss.backgroundColor}`,
      borderRadius: `${springCss.borderRadius}rem`,
    },
  ]

  console.log(configTo, springCss)
  return (
    <>
      <PlayGround
        fromConfiguration={configFrom}
        toconfiguration={configTo}
        springConfiguration={springConfig}
        loopBool={loopValue}
      />
      <div className='flex flex-row justify-center overflow-auto'>
        <div className='flex justify-center'>
          <div className='h-auto w-50  bg-purple-100 p-5 m-10 rounded-md'>
            <div>
              {FromConfig.map((mainConfig) => {
                return (
                  <div key={mainConfig.id}>
                    <p>{mainConfig.rangeText}</p>
                    <Range
                      step={mainConfig.rangeText === 'SCALE' ? 0.1 : 1}
                      min={
                        mainConfig.rangeText === 'SCALE' ||
                        mainConfig.rangeText === 'ROTATE'
                          ? 0
                          : -100
                      }
                      max={
                        mainConfig.rangeText === 'SCALE'
                          ? 2
                          : mainConfig.rangeText === 'ROTATE'
                          ? 360
                          : 100
                      }
                      values={toconfig[mainConfig.rangeText]}
                      onChange={(values) => {
                        updateToConfig(values, mainConfig.rangeText)
                      }}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          className='w-40 h-3 pr-2 my-4 bg-gray-400 rounded-md'
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          className='w-5 h-5 transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        />
                      )}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          {/* Config for Spring */}
          <div className='h-auto w-50  bg-purple-100 p-5 m-10 rounded-md'>
            <div>
              {objectCon.map((mainConfig) => {
                return (
                  <div key={mainConfig.id}>
                    <p>{mainConfig.rangeText}</p>
                    <Range
                      step={1}
                      min={mainConfig.rangeText === 'MASS' ? 0 : 1}
                      max={
                        mainConfig.rangeText === 'FRICTION'
                          ? 200
                          : mainConfig.rangeText === 'TENSION'
                          ? 500
                          : 700
                      }
                      values={objectConfig[mainConfig.rangeText]}
                      onChange={(values) => {
                        updateSpringConfig(values, mainConfig.rangeText)
                      }}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          className='w-40 h-3 pr-2 my-4 bg-gray-400 rounded-md'
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          className='w-5 h-5 transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        />
                      )}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className='h-auto w-50  bg-purple-100 p-5 m-10 rounded-md flex flex-col'>
            <label>Height (in rem)</label>
            <input
              type='number'
              placeholder='Height(in Rems)'
              defaultValue={springCss.height}
              name='height'
              min='1'
              onChange={(e) => {
                updateSpringCss(e)
              }}
              className='px-3 py-3 m-2 placeholder-blueGray-300 w-30 text-blueGray-600 bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring'
            />
            <label>Width (in rem)</label>
            <input
              type='number'
              placeholder='Width(in Rems)'
              name='width'
              defaultValue={springCss.width}
              onChange={(e) => {
                updateSpringCss(e)
              }}
              className='px-3 py-3 m-2 placeholder-blueGray-300 w-30 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring'
            />
            <label>Border Radius (in rem)</label>
            <input
              type='number'
              placeholder='Border Radius(in Rems)'
              name='borderRadius'
              defaultValue={springCss.borderRadius}
              onChange={(e) => {
                updateSpringCss(e)
              }}
              className='px-3 py-3 m-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring'
            />
            {/* <input
              type='color'
              placeholder='Background Color'
              name='backgroundColor'
              value={springCss.backgroundColor}
              onChange={(e) => {
                updateSpringCss(e)
              }}
              className='px-3 py-3 m-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring'
            /> */}
          </div>
        </div>
      </div>

      <div className='m-5 p-5'>
        <CodePreview
          fromConfiguration={configFrom}
          toconfiguration={configTo}
          springConfiguration={springConfig}
        />
      </div>
    </>
  )
}

export default RangeConfig
