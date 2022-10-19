import React from 'react';

const HelloWorld = () => {
  return (
    <div>
      <button onClick={() => console.log('Hello world')}>Say hello!</button>
    </div>
  );
};

export default HelloWorld;
