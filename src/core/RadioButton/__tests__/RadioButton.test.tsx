import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import RadioButton from '../../RadioButton';

describe('Radio Button Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <RadioButton>Target cluster</RadioButton>
      </KuberaThemeProvider>
    );

    expect(getByText('Target cluster')).toBeTruthy();
  });
});
