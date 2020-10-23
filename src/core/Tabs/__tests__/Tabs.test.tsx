import React from 'react';
import Tabs from '../../Tabs';
import { render, fireEvent, screen } from '@testing-library/react';
import { KuberaThemeProvider } from '../../../theme';

describe('Tabs', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Tabs
          label={['Tab Item', 'Tab Item two']}
          content={['Tab Content', 'Item two content']}
        ></Tabs>
      </KuberaThemeProvider>
    );
    fireEvent.click(getByText('Tab Item two'));

    expect(screen.getByText('Item two content')).toBeTruthy();
  });
});
