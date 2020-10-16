import React from 'react';
import Tabs from '../Tabs';
import { storiesOf } from '@storybook/react';
import { ThemedBackground } from '../../../src/utils/storybook';

// label[0] = content[0]
storiesOf('Tabs', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <Tabs
        label={['Workflow', 'Hubs']}
        content={['Hubs Content', 'Propel Content']}
      ></Tabs>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <Tabs
        label={['Workflow', 'Hubs']}
        content={['Hubs Content', 'Propel Content']}
      ></Tabs>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <Tabs
        label={['Workflow', 'Hubs']}
        content={['Hubs Content', 'Propel Content']}
      ></Tabs>
    </ThemedBackground>
  ));
