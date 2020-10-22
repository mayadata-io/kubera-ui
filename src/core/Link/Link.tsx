import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useStyles } from './styles';

interface LinksProps {
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
        className={`${classes.root} ${disableLink} ${pressed}`}
        to={pathname}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </Link>
    </Router>
  );
};
export { Links };
