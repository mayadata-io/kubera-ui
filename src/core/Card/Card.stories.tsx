import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Card } from '../Card';

const cardWithGlow = (
  <div
    style={{
      textAlign: 'center',
      marginTop: '50%',
      fontSize: '1.2rem',
    }}
  >
    Card with Glow
  </div>
);

const cardWithoutGlow = (
  <div
    style={{
      textAlign: 'center',
      marginTop: '50%',
      fontSize: '1.2rem',
    }}
  >
    Card without Glow
  </div>
);

storiesOf('Card', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <Card width="15rem" height="20rem" glow>
        {cardWithGlow}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardWithoutGlow}
      </Card>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <Card width="15rem" height="20rem" glow>
        {cardWithGlow}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardWithoutGlow}
      </Card>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <Card width="15rem" height="20rem" glow>
        {cardWithGlow}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardWithoutGlow}
      </Card>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <Card width="15rem" height="20rem" glow>
        {cardWithGlow}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardWithoutGlow}
      </Card>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <Card width="15rem" height="20rem" glow>
        {cardWithGlow}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardWithoutGlow}
      </Card>
    </ThemedBackground>
  ));
