import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { Search } from '../Search';

describe('Search Component', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Search data-testid="search" placeholder="search" />
      </KuberaThemeProvider>
    );

    expect(getByTestId('search')).toBeTruthy();
  });
});
