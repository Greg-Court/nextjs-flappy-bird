import React, { FC } from 'react';

const BIRD_SIZE = 20;

const Bird: FC = () => {
  return (
    <div
      className="bg-red-500 rounded-full absolute"
      style={{
        height: `${BIRD_SIZE}px`,
        width: `${BIRD_SIZE}px`,
        top: `${BIRD_SIZE}px`,
      }}
    ></div>
  );
};

export default Bird;