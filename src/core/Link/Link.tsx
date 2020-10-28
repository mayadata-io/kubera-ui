import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

interface LinksProps {
  pathname: string;
  disabled?: boolean;
  target?: string;
}

const Links: React.FC<LinksProps> = ({
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
export { Links };
