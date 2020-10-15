import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import BaseModal from '../BaseModal/BaseModal';

storiesOf('Modal/Base Modal', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <BaseModal
        isOpen={true}
        handleClose={() => console.log('clicked')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        hasCloseBtn
      >
        Base Modal
      </BaseModal>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <BaseModal
        isOpen={true}
        handleClose={() => console.log('clicked')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        hasCloseBtn
      >
        Base Modal
      </BaseModal>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <BaseModal
        isOpen={true}
        handleClose={() => console.log('clicked')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        hasCloseBtn
      >
        Base Modal
      </BaseModal>
    </ThemedBackground>
  ));
