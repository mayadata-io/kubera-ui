import { render } from '@testing-library/react';
import React from 'react';
import { screen } from '@testing-library/dom';
import { KuberaThemeProvider } from '../../../theme';
import { Dropdown } from '../../Dropdown';
import MenuItem from '@material-ui/core/MenuItem';

describe('Dropdown Component', () => {
  it('Renders', () => {
    render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Dropdown anchorEl={null}>
          <MenuItem>Show the workflow</MenuItem>
          <MenuItem>Show the analytics</MenuItem>
          <MenuItem>Show the scheduler</MenuItem>
        </Dropdown>
      </KuberaThemeProvider>
    );
    const element = screen.getByTestId('dropdownElement');
    expect(element).toBeTruthy();
  });
});
