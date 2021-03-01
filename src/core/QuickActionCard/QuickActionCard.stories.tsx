import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { QuickActionCard } from './QuickActionCard';
import { quickActionTestData } from './testData';

storiesOf('QuickAction', module)
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <QuickActionCard
        quickActions={quickActionTestData}
        title={'Quick Actions'}
      />
    </ThemedBackground>
  ))
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <QuickActionCard
        quickActions={quickActionTestData}
        title={'Quick Actions'}
      />
    </ThemedBackground>
  ))
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <QuickActionCard
        quickActions={quickActionTestData}
        title={'Quick Actions'}
      />
    </ThemedBackground>
  ))
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <QuickActionCard
        quickActions={quickActionTestData}
        title={'Quick Actions'}
      />
    </ThemedBackground>
  ));
