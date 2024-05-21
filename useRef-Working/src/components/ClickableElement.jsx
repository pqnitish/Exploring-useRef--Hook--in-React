import React, { useRef } from 'react';

function ClickableElement() {
  const divRef = useRef(null);

  function handleClick () {
    // Change the background color of the div when it is clicked
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'lightblue';
    }
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      style={{ width: '200px', height: '200px', border: '1px solid black' }}
    >
      Click me to change my background color
    </div>
  );
};

export default ClickableElement;
