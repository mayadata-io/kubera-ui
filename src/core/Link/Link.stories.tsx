import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Link } from '../Link';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('Link', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <Router>
        <Link disabled={false} target="_blank" pathname="/home">
          Link
        </Link>
      </Router>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <Router>
        <Link disabled={false} pathname="/home">
          Link
        </Link>
      </Router>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <Router>
        <Link disabled={false} pathname="/home">
          Link
        </Link>
      </Router>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
      <Router>
        <Link disabled={false} pathname="/home">
          Link
        </Link>
      </Router>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core">
      <Router>
        <Link disabled={false} pathname="/home">
          Link
        </Link>
      </Router>
    </ThemedBackground>
  ));
