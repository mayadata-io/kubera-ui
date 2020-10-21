import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import { BaseTimePicker } from '../BaseTimePicker';

describe('Timepicker component', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <BaseTimePicker onChange={() => console.log('timepicker')} />
      </KuberaThemeProvider>
    );

    expect(getByTestId('timepicker')).toBeTruthy();
  });
});
