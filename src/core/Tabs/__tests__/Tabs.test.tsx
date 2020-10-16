import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import Tabs from '../../Tabs';

describe('Tabs', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Tabs label={['Tab Item']} content={['Tab Content']}>
          Tab Component
        </Tabs>
      </KuberaThemeProvider>
    );

    expect(getByText('Tabs Component')).toBeTruthy();
  });
});
