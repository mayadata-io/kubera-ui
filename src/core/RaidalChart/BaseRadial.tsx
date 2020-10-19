import React from 'react';

import RadialChart from './RadialChart';

const width = 600;
const height = 400;

function BaseRadial() {
  return (
    <div className="App">
      <RadialChart width={width} height={height} />
    </div>
  );
}

export default BaseRadial;
