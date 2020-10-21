import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import { Dropdown } from './Dropdown';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';

storiesOf('DropdownCard/Dropdown', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <Dropdown anchorEl={null}>
        <MenuItem>View PVC</MenuItem>
        <MenuItem>Edit PVC</MenuItem>
        <MenuItem style={{ color: useTheme().palette.error.main }}>
          Delete PVC
        </MenuItem>
      </Dropdown>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <Dropdown anchorEl={null}>
        <MenuItem>View PVC</MenuItem>
        <MenuItem>Edit PVC</MenuItem>
        <MenuItem style={{ color: useTheme().palette.error.main }}>
          Delete PVC
        </MenuItem>
      </Dropdown>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <Dropdown anchorEl={null}>
        <MenuItem>View PVC</MenuItem>
        <MenuItem>Edit PVC</MenuItem>
        <MenuItem style={{ color: useTheme().palette.error.main }}>
          Delete PVC
        </MenuItem>
      </Dropdown>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <Dropdown anchorEl={null}>
        <MenuItem>View PVC</MenuItem>
        <MenuItem>Edit PVC</MenuItem>
        <MenuItem style={{ color: useTheme().palette.error.main }}>
          Delete PVC
        </MenuItem>
      </Dropdown>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <Dropdown anchorEl={null}>
        <MenuItem>View PVC</MenuItem>
        <MenuItem>Edit PVC</MenuItem>
        <MenuItem style={{ color: useTheme().palette.error.main }}>
          Delete PVC
        </MenuItem>
      </Dropdown>
    </ThemedBackground>
  ));
