import React from 'react';
import useStyles from './styles';
import { TabBaseProps } from './base';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

interface TabPanelProps {
  children?: string;
  index: any;
  value: any;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index,
  value,
  ...other
}) => {
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={classes.tabPanel}>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

interface SiampleTabsProps extends TabBaseProps {
  label: string[];
  content: any[];
}

const SimpleTabs: React.FC<SiampleTabsProps> = ({ label, content }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
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
              <Tab
                className={classes.TabItem}
                key={index}
                label={item}
                {...a11yProps(index)}
              />
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
    </div>
  );
};

export default SimpleTabs;
