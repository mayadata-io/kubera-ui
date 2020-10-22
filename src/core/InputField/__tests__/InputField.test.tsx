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
          data-id="inputField"
          variant="primary"
          disabled={false}
          handleChange={() => console.log('change')}
        />
      </KuberaThemeProvider>
    );

    expect(getByTestId('inputField')).toBeTruthy();
  });
});
