import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { Dropdown } from '../../Dropdown';
import MenuItem from '@material-ui/core/MenuItem';

describe('Dropdown Component', () => {
  it('Renders', () => {
    const { getByText } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Dropdown anchorEl={null}>
          <MenuItem>View PVC</MenuItem>
          <MenuItem>Edit PVC</MenuItem>
          <MenuItem>Delete PVC</MenuItem>
        </Dropdown>
      </KuberaThemeProvider>
    );

    expect(getByText('Open Menu')).toBeTruthy();
  });
});
