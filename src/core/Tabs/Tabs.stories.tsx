import React from 'react';
import Tabs from '../Tabs';
import { storiesOf } from '@storybook/react';
import { ThemedBackground } from '../../../src/utils/storybook';

storiesOf('Tabs', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <Tabs
        label={['Workflow', 'Hubs']}
        content={['Workflow Content', 'Hubs Content']}
      ></Tabs>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <Tabs
        label={['Workflow', 'Hubs']}
        content={['Workflow Content', 'Hubs Content']}
      ></Tabs>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <Tabs
        label={['Workflow', 'Hubs']}
        content={['Workflow Content', 'Hubs Content']}
      ></Tabs>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <Tabs
        label={['Workflow', 'Hubs']}
        content={['Workflow Content', 'Hubs Content']}
      ></Tabs>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <Tabs
        label={['Workflow', 'Hubs']}
        content={['Workflow Content', 'Hubs Content']}
      ></Tabs>
    </ThemedBackground>
  ));
