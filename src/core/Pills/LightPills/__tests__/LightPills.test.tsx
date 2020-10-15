import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import { LightPills } from '../LightPills';

describe('Light Pills Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <LightPills variant="success">Completed</LightPills>
        <LightPills variant="warning">Runing</LightPills>
        <LightPills variant="danger">Failed</LightPills>
      </KuberaThemeProvider>
    );

    expect(getByText('Light Pills Component')).toBeTruthy();
  });
});
