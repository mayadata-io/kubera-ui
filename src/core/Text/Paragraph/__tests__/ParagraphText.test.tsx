import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import { ParagraphText } from '../../Paragraph';

describe('Text Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <ParagraphText>Header Text</ParagraphText>
      </KuberaThemeProvider>
    );

    expect(getByText('Header Text')).toBeTruthy();
  });
});
