import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { Switch } from '../Switch';

describe('Switch Component', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="litmus-portal" data-testid="switch">
        <Switch variant="default" />
      </KuberaThemeProvider>
    );

    expect(getByTestId('switch')).toBeTruthy();
  });
});
