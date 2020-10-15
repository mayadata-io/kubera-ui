import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import BaseModal from '../BaseModal';

describe('Base Modal Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <BaseModal
          isOpen={true}
          handleClose={() => console.log('clicked')}
          hasCloseBtn
        >
          Base Modal
        </BaseModal>
      </KuberaThemeProvider>
    );

    expect(getByText('Base Modal')).toBeTruthy();
  });
});
