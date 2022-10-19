import React from 'react';

import './helloWorld.css';

const HelloWorld = () => {
  return (
    <button
      className='helloWorldButton'
      onClick={() => console.log('Hello world')}
    >
      SAY HELLO
    </button>
  );
};

export default HelloWorld;
