import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { Card } from '../Card';

describe('Button Filled Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-propel">
        <Card width="15rem" height="20rem" glow>
          Card With Glow
        </Card>
      </KuberaThemeProvider>
    );

    expect(getByText('Card With Glow')).toBeTruthy();
  });
});
