import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const CodePreview = ({
  fromConfiguration,
  toconfiguration,
  springConfiguration,
}) => {
  const code = `
import React from 'react'
import { useSpring, animated } from 'react-spring'

const PlayGround = () => {
  const styles = useSpring({
    from: ${JSON.stringify(fromConfiguration, null, 2)},
    to: ${JSON.stringify(toconfiguration, null, 2)},
    config: ${JSON.stringify(springConfiguration, null, 2)},
  })
  return (
    <animated.div
          style={{
            ...styles,
          }}
    >
    </animated.div>
  )
}

export default PlayGround

          `;

  return <CopyBlock text={code} language="jsx" theme={dracula} codeBlock />;
};

export default CodePreview;
