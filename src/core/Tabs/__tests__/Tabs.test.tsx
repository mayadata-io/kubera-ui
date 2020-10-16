import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import Tabs from '../../Tabs';

describe('Tab Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Tabs label={['Tab Item']} content={['Tab Content']}></Tabs>
      </KuberaThemeProvider>
    );

    expect(getByText('Tab Component')).toBeTruthy();
  });
});
