import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useStyles } from './styles';
import { BaseLinkProps } from './base';

interface LinksProps extends BaseLinkProps {
  pathname: string;
  disabled?: boolean;
  active?: boolean;
}

const Links: React.FC<LinksProps> = ({
  pathname,
  children,
  disabled,
  active,
}) => {
  const classes = useStyles();
  const disableLink = disabled ? classes.disabled : '';
  const pressed = disabled === false && active ? classes.pressed : '';
  return (
    <Router>
      <Link
        data-testid="link"
        className={`${classes.root} ${disableLink} ${pressed}`}
        to={pathname}
        target="_blank"
      >
        {children}
      </Link>
    </Router>
  );
};
export { Links };
