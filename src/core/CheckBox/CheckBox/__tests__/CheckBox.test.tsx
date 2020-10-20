import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../../theme';
import { CheckBox } from '../CheckBox';

describe('CheckBox', () => {
  it('Renders', () => {
    const { container } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <CheckBox checked={false} disabled={false} />
      </KuberaThemeProvider>
    );
    container.querySelector('input');
  });
});
