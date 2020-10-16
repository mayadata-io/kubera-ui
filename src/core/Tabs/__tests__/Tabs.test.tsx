import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../src/theme';
import Tabs from '../../Tabs';

describe('Tabs Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Tabs />
      </KuberaThemeProvider>
    );

    expect(getByText('Tabs')).toBeTruthy();
  });
});
