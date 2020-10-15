import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import Modal from '../Modal';

describe('Modal Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Modal
          isOpen={true}
          handleClose={() => console.log('clicked')}
          hasCloseBtn
        >
          Open Modal
        </Modal>
      </KuberaThemeProvider>
    );

    expect(getByText('Open Modal')).toBeTruthy();
  });
});
