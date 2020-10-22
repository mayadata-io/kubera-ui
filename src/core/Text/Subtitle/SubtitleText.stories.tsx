import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemedBackground } from '../../../utils/storybook';
import { SubtitleText } from '../Subtitle';

storiesOf('Text/SubtitleText', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <SubtitleText>Subtitle Text</SubtitleText>
      <SubtitleText type="small">Subtitle Text</SubtitleText>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <SubtitleText>Subtitle Text</SubtitleText>
      <SubtitleText type="small">Subtitle Text</SubtitleText>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <SubtitleText>Subtitle Text</SubtitleText>
      <SubtitleText type="small">Subtitle Text</SubtitleText>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <SubtitleText>Subtitle Text</SubtitleText>
      <SubtitleText type="small">Subtitle Text</SubtitleText>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <SubtitleText>Subtitle Text</SubtitleText>
      <SubtitleText type="small">Subtitle Text</SubtitleText>
    </ThemedBackground>
  ));
