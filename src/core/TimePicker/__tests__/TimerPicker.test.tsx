import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { TimePicker } from '../TimePicker';

describe('Timepicker component', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <TimePicker onChange={() => console.log('Time Changed')} />
      </KuberaThemeProvider>
    );

    expect(getByTestId('timepicker')).toBeTruthy();
  });
});
