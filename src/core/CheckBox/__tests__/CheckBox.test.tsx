import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { CheckBox } from '../CheckBox';

describe('CheckBox', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <CheckBox checked={false} disabled={false} />
      </KuberaThemeProvider>
    );
    let checkbox = getByTestId('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeFalsy();
  });
});
