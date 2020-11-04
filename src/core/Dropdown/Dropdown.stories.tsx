import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Dropdown } from './Dropdown';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WidgetsIcon from '@material-ui/icons/Widgets';

storiesOf('Dropdown', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <Dropdown anchorEl={null}>
        <MenuItem>Show the workflow</MenuItem>
        <MenuItem>Show the analytics</MenuItem>
        <MenuItem>Show the scheduler</MenuItem>
      </Dropdown>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <Dropdown anchorEl={null}>
        <MenuItem>Show the workflow</MenuItem>
        <MenuItem>Show the analytics</MenuItem>
        <MenuItem>Show the scheduler</MenuItem>
      </Dropdown>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <Dropdown anchorEl={null}>
        <MenuItem>
          <WidgetsIcon />
          View PVC
        </MenuItem>
        <MenuItem>
          <TrendingUpIcon />
          Edit PVC
        </MenuItem>
        <MenuItem style={{ color: useTheme().palette.error.main }}>
          <QueryBuilderIcon /> Delete PVC
        </MenuItem>
      </Dropdown>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <Dropdown anchorEl={null}>
        <MenuItem>
          <WidgetsIcon />
          Show the workflow
        </MenuItem>
        <MenuItem>
          <TrendingUpIcon />
          Show the analytics
        </MenuItem>
        <MenuItem>
          <QueryBuilderIcon />
          Show the scheduler
        </MenuItem>
      </Dropdown>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <Dropdown anchorEl={null}>
        <MenuItem>
          <WidgetsIcon />
          Show the workflow
        </MenuItem>
        <MenuItem>
          <TrendingUpIcon />
          Show the analytics
        </MenuItem>
        <MenuItem>
          <QueryBuilderIcon />
          Show the scheduler
        </MenuItem>
      </Dropdown>
    </ThemedBackground>
  ));
