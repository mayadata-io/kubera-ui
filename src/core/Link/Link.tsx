import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useStyles } from './styles';

interface LinksProps {
  pathname: string;
  disabled?: boolean;
}

const Links: React.FC<LinksProps> = ({ pathname, children, disabled }) => {
  const classes = useStyles();
  const disableLink = disabled ? classes.disabled : '';
  return (
    <Router>
      <NavLink
        className={`${classes.root} ${disableLink}`}
        to={pathname}
        rel="noreferrer noopener"
      >
        {children}
      </NavLink>
    </Router>
  );
};
export { Links };
