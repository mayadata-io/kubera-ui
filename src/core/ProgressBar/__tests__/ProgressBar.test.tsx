import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar', () => {
  it('Renders', () => {
    const { getAllByRole } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <ProgressBar value={80} label="Success" color={'red'} />
      </KuberaThemeProvider>
    );
    expect(getAllByRole('progressbar')).toBeTruthy();
  });
});
