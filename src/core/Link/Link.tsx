import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

interface LinkProps {
  pathname: string;
  disabled?: boolean;
  target?: string;
}

const Link: React.FC<LinkProps> = ({
  pathname,
  target,
  children,
  disabled,
}) => {
  const classes = useStyles();
  const disableLink = disabled ? classes.disabled : '';
  return (
    <NavLink
      className={`${classes.root} ${disableLink}`}
      to={pathname}
      target={target}
      rel="noreferrer noopener"
      role="navlink"
    >
      {children}
    </NavLink>
  );
};
export { Link };
