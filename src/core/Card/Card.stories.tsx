import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Card } from '../Card';

const cardContainer = (content: string) => (
  <div
    style={{
      textAlign: 'center',
      marginTop: '50%',
      fontSize: '1.2rem',
    }}
  >
    {content}
  </div>
);

storiesOf('Card', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <Card width="15rem" height="20rem" glow>
        {cardContainer('Card With Glow')}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardContainer('Card Without Glow')}
      </Card>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <Card width="15rem" height="20rem" glow>
        {cardContainer('Card With Glow')}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardContainer('Card Without Glow')}
      </Card>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <Card width="15rem" height="20rem" glow>
        {cardContainer('Card With Glow')}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardContainer('Card Without Glow')}
      </Card>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <Card width="15rem" height="20rem" glow>
        {cardContainer('Card With Glow')}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardContainer('Card Without Glow')}
      </Card>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <Card width="15rem" height="20rem" glow>
        {cardContainer('Card With Glow')}
      </Card>
      <Card width="15rem" height="20rem" glow={false}>
        {cardContainer('Card Without Glow')}
      </Card>
    </ThemedBackground>
  ));
