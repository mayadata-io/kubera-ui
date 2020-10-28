import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Links } from '../Link';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('Link', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <Router>
        <Links disabled={false} target="_blank" pathname="/home">
          Link
        </Links>
      </Router>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <Router>
        <Links disabled={false} pathname="/home">
          Link
        </Links>
      </Router>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <Router>
        <Links disabled={false} pathname="/home">
          Link
        </Links>
      </Router>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
      <Router>
        <Links disabled={false} pathname="/home">
          Link
        </Links>
      </Router>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core">
      <Router>
        <Links disabled={false} pathname="/home">
          Link
        </Links>
      </Router>
    </ThemedBackground>
  ));
