import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { QuickActionCard } from './QuickActionCard';
import { quickActionTestData } from './testData';

storiesOf('QuickAction', module).add('Kubera Chaos', () => (
  <ThemedBackground platform="kubera-chaos" row>
    <QuickActionCard
      quickActions={quickActionTestData}
      title={'Quick Actions'}
    />
  </ThemedBackground>
));
