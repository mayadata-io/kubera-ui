import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Dropdown } from './Dropdown';
import MenuItem from '@material-ui/core/MenuItem';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WidgetsIcon from '@material-ui/icons/Widgets';
import { ButtonFilled } from '../Button/ButtonFilled';

storiesOf('Dropdown', module)
  // Litmus Portal
  .add('Litmus Portal', () => {
    const [
      anchorElement,
      setAnchorElement,
    ] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorElement(null);
    };
    return (
      <ThemedBackground platform="litmus-portal">
        <ButtonFilled variant="default" onClick={handleClick}>
          Show Dropdown
        </ButtonFilled>
        <Dropdown anchorEl={anchorElement} handleClose={handleClose}>
          <MenuItem>Show the workflow</MenuItem>
          <MenuItem>Show the analytics</MenuItem>
          <MenuItem>Show the scheduler</MenuItem>
        </Dropdown>
      </ThemedBackground>
    );
  })

  // Kubera Chaos
  .add('Kubera Chaos', () => {
    const [
      anchorElement,
      setAnchorElement,
    ] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorElement(null);
    };
    return (
      <ThemedBackground platform="kubera-chaos">
        <ButtonFilled variant="default" onClick={handleClick}>
          Show Dropdown
        </ButtonFilled>
        <Dropdown anchorEl={anchorElement} handleClose={handleClose}>
          <MenuItem>Show the workflow</MenuItem>
          <MenuItem>Show the analytics</MenuItem>
          <MenuItem>Show the scheduler</MenuItem>
        </Dropdown>
      </ThemedBackground>
    );
  })

  // Kubera Propel
  .add('Kubera Propel', () => {
    const [
      anchorElement,
      setAnchorElement,
    ] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorElement(null);
    };
    return (
      <ThemedBackground platform="kubera-propel">
        <ButtonFilled variant="default" onClick={handleClick}>
          Show Dropdown
        </ButtonFilled>
        <Dropdown anchorEl={anchorElement} handleClose={handleClose}>
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
    );
  })

  // Kubera Core
  .add('Kubera Core', () => {
    const [
      anchorElement,
      setAnchorElement,
    ] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorElement(null);
    };
    return (
      <ThemedBackground platform="kubera-core">
        <ButtonFilled variant="default" onClick={handleClick}>
          Show Dropdown
        </ButtonFilled>
        <Dropdown anchorEl={anchorElement} handleClose={handleClose}>
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
    );
  })

  // Kubera Portal
  .add('Kubera Portal', () => {
    const [
      anchorElement,
      setAnchorElement,
    ] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorElement(null);
    };
    return (
      <ThemedBackground platform="kubera-portal">
        <ButtonFilled variant="default" onClick={handleClick}>
          Show Dropdown
        </ButtonFilled>
        <Dropdown anchorEl={anchorElement} handleClose={handleClose}>
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
    );
  });
