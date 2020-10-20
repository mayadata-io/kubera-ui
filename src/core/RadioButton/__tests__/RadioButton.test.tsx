import React from 'react';
import RadioButton from '../../RadioButton';
import { render } from '@testing-library/react';
import { KuberaThemeProvider } from '../../../theme';

describe('Radio Button Component', () => {
  it('Renders', () => {
    const { getAllByRole } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <RadioButton>Target cluster</RadioButton>
      </KuberaThemeProvider>
    );
    expect(getAllByRole('Radio')).toBeTruthy();
  });
});
