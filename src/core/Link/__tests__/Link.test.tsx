import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { Links } from '../Link';

describe('Link component', () => {
  it('Renders', () => {
    const { getByRole } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Links disabled={false} pathname="/home">
          Link
        </Links>
      </KuberaThemeProvider>
    );
    const element = getByRole('navlink');
    // check href
    expect(element).toHaveProperty('href', window.location.origin + '/home');
  });
});
