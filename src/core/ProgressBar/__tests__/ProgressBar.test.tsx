import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar', () => {
  it('Renders', () => {
    function checkProgressValue(value: number) {
      if (value >= 0 && value <= 100) {
        return value;
      }
      return 0;
    }
    function isColor(strColor: string) {
      var s = new Option().style;
      s.color = strColor;

      if (s.color === strColor.toLowerCase()) {
        return strColor;
      }
      return strColor;
    }

    const { getAllByRole } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <ProgressBar
          value={checkProgressValue(80)}
          label="Success"
          color={isColor('red')}
        />
      </KuberaThemeProvider>
    );
    expect(getAllByRole('progressbar')).toBeTruthy();
  });
});
