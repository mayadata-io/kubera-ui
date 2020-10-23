import { render, cleanup } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { KuberaThemeProvider } from '../../../theme';
import { CheckBox } from '../CheckBox';

afterEach(cleanup);
jest.useFakeTimers();

describe('CheckBox', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <CheckBox checked={false} disabled={false} />
      </KuberaThemeProvider>
    );
    const checkbox = getByTestId('checkbox').querySelector(
      'input[type="checkbox"]'
    );
    expect(checkbox).toHaveProperty('checked', false);
    expect(checkbox).toHaveProperty('disabled', false);
  });
});
