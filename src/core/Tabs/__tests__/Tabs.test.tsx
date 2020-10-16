import React from 'react';
import Tabs from '../../Tabs';
import { render } from '@testing-library/react';
import { KuberaThemeProvider } from '../../../theme';

describe('Tabs', () => {
  it('Renders', () => {
    const { getAllByRole } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Tabs label={['Tab Item']} content={['Tab Content']}></Tabs>
      </KuberaThemeProvider>
    );
    expect(getAllByRole('tabs')).toBeTruthy();
  });
});
