import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import CustomText from './customText';

storiesOf('CustomText', module)
  .add('Litmus Portal', () => {
    return (
      <ThemedBackground platform="litmus-portal">
        <CustomText
          value={'test'}
          id="name"
          onchange={(val: string) => console.log('l')}
          isEditable={true}
          validateText={false}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Chaos', () => {
    return (
      <ThemedBackground platform="kubera-chaos">
        <CustomText
          value={'test'}
          id="name"
          onchange={(val: string) => console.log('hi')}
          isEditable={true}
          validateText={false}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Propel', () => {
    return (
      <ThemedBackground platform="kubera-propel">
        <CustomText
          value={'test'}
          id="name"
          onchange={(val: string) => console.log('hi')}
          isEditable={true}
          validateText={false}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Portal', () => {
    return (
      <ThemedBackground platform="kubera-portal">
        <CustomText
          value={'test'}
          id="name"
          onchange={(val: string) => console.log('hi')}
          isEditable={true}
          validateText={false}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Core', () => {
    return (
      <ThemedBackground platform="kubera-core">
        <CustomText
          value={'test'}
          id="name"
          onchange={(val: string) => console.log('hi')}
          isEditable={true}
          validateText={false}
        />
      </ThemedBackground>
    );
  });
