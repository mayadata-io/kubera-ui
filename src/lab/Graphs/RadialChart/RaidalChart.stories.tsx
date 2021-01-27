import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import { RadialChart } from './RadialChart';
import { testRadialChartData } from './testData';

storiesOf('Graphs/RadialChart', module).add('Kubera Chaos', () => (
  <ThemedBackground platform="kubera-chaos">
    <RadialChart
      width={350}
      height={250}
      radialData={testRadialChartData}
      semiCircle={false}
      heading={'Heading'}
    />
  </ThemedBackground>
));
