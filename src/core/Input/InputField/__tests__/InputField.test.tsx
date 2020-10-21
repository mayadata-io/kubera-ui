import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import { InputField } from '../InputField';

describe('InputField', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <InputField
          data-id="inputField"
          label="primary"
          variant="primary"
          error={false}
          disabled={false}
          handleChange={() => {}}
        />
      </KuberaThemeProvider>
    );

    expect(getByTestId('inputField')).toBeTruthy();
  });
});
