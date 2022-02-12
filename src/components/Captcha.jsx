import React, { useState } from 'react';
import Canvas from './content/Canvas';
import ValidSvg from './content/ValidSvg';

const Captcha = () => {

  const [isExpandedWindow, setIsExpandedWindow] = useState(false);
  const [isValided, setisValided] = useState(false);
  const [input, setInput] = useState([]);
  const progressPercentage = [0, 7.5, 15, 22.5, 30, 37.5];
  const gridPad = [];

  for (let i = 1; i < 10; i++) {
    gridPad.push(i);
  }
  const handleClick = block => {
    if (input.length < 6) {
      setInput([...input, block.target.innerText]);
    }
  };
  const toExpand = () => {
    setIsExpandedWindow(!isExpandedWindow ? true : false);
  }
  const toReset = e => {
    setTimeout(() => {
      if (e === "end") {
        setisValided(true);
        toExpand();
      }
      setInput([]);
    }, 10);
  };
  return (
    <div className="captcha">
      {isExpandedWindow
        ?
        <>
          <div className="captcha__example">
            <Canvas input={input} reset={toReset} />
            <div
              className="captcha__example-progress"
              style={{ transform: `translateX(${progressPercentage[input.length]}%)` }}
            ></div>
          </div>
          <div className="captcha__grid">
            {gridPad.map(block => (
              <div className="captcha__grid-case"
                key={block}
                onClick={handleClick}
              >
                {block}
              </div>
            ))}
          </div>
        </>
        :
        <div className="captcha__launcher"
          onClick={!isValided ? toExpand : null}
        >
          <ValidSvg valided={isValided} />
          No-Bot Validation
        </div>
      }
    </div>
  );
}

export default Captcha;