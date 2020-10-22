import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import { HeaderText } from '../../Header';

describe('Text Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <HeaderText>Header Text</HeaderText>
      </KuberaThemeProvider>
    );

    expect(getByText('Header Text')).toBeTruthy();
  });
});
