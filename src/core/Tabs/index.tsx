import React, { Fragment } from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

interface SiampleTabsProps {
  label: string[];
  content: any[];
}

const SimpleTabs: React.FC<SiampleTabsProps> = ({ label, content }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const CustomTab = withStyles({
    root: {
      fontWeight: 500,
      color: ' #B9B9B9',
      fontSize: '1rem',
      lineHeight: '140%',
      textAlign: 'center',
      textTransform: 'none',
    },

    selected: {
      color: '#EAD7A2',
    },
  })(Tab);

  return (
    <div>
      <Fragment>
        <AppBar position="static" className={classes.panel}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            classes={{
              indicator: classes.indicator,
            }}
          >
            {label.map((item, index) => {
              return (
                <CustomTab key={index} label={item} {...a11yProps(index)} />
              );
            })}
          </Tabs>
        </AppBar>
        {content.map((item, index) => {
          return (
            <TabPanel key={index} value={value} index={index}>
              {item}
            </TabPanel>
          );
        })}
      </Fragment>
    </div>
  );
};

export default SimpleTabs;
