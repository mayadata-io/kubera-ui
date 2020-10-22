import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import { SubtitleText } from '../../Subtitle';

describe('Text Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <SubtitleText>Header Text</SubtitleText>
      </KuberaThemeProvider>
    );

    expect(getByText('Header Text')).toBeTruthy();
  });
});
