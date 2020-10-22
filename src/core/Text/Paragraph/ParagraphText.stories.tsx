import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import { ParagraphText } from '../Paragraph';

storiesOf('Text/ParagraphText', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <ParagraphText>Paragraph Text</ParagraphText>
      <ParagraphText type="small">Paragraph Text</ParagraphText>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <ParagraphText>Paragraph Text</ParagraphText>
      <ParagraphText type="small">Paragraph Text</ParagraphText>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <ParagraphText>Paragraph Text</ParagraphText>
      <ParagraphText type="small">Paragraph Text</ParagraphText>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <ParagraphText>Paragraph Text</ParagraphText>
      <ParagraphText type="small">Paragraph Text</ParagraphText>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <ParagraphText>Paragraph Text</ParagraphText>
      <ParagraphText type="small">Paragraph Text</ParagraphText>
    </ThemedBackground>
  ));
