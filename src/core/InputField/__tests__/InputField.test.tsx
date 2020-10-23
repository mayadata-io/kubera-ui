import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { InputField } from '../InputField';

describe('InputField', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <InputField
          label="primary"
          variant="primary"
          type="text"
          disabled={false}
          onChange={() => console.log('change')}
        />
      </KuberaThemeProvider>
    );

    expect(getByTestId('inputField')).toBeTruthy();
  });
});
