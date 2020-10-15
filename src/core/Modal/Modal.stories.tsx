import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import Modal from './Modal';

storiesOf('Modal', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <Modal
        isOpen={true}
        handleClose={() => console.log('clicked')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        hasCloseBtn
      >
        Modal
      </Modal>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <Modal
        isOpen={true}
        handleClose={() => console.log('clicked')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        hasCloseBtn
      >
        Modal
      </Modal>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <Modal
        isOpen={true}
        handleClose={() => console.log('clicked')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        hasCloseBtn
      >
        Modal
      </Modal>
    </ThemedBackground>
  ));
