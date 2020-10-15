import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import { BasicPills } from '../BasicPills';

describe('Basic Pills Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <BasicPills>11 experiments</BasicPills>
      </KuberaThemeProvider>
    );

    expect(getByText('11 experiments')).toBeTruthy();
  });
});
