import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { BaseSelect } from '../Select';
import { MenuItem } from '@material-ui/core';

describe('Basic Pills Component', () => {
  it('Renders', () => {
    const { getByRole } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <BaseSelect width={250} label="Replicas">
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </BaseSelect>
      </KuberaThemeProvider>
    );
    const element = getByRole('Select').querySelector('input');
    expect(element).toHaveProperty('value', '');
  });
});
