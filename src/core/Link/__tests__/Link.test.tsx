import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { Links } from '../Link';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Link component', () => {
  it('Renders', () => {
    const { getByRole } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Router>
          <Links disabled={false} pathname="/home">
            Link
          </Links>
        </Router>
      </KuberaThemeProvider>
    );
    const element = getByRole('navlink');
    // check href
    expect(element).toHaveProperty('href', window.location.origin + '/home');
  });
});
