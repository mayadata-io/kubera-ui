import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import Modal from './Modal';

storiesOf('Modal', module)
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

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core">
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

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
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

  // Kubera Propel
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
