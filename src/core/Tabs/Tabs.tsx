import React from 'react';
import useStyles from './styles';
import { TabBaseProps } from './base';
import Tab from '@material-ui/core/Tab';
import TabList from '@material-ui/lab/TabList';
import AppBar from '@material-ui/core/AppBar';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';

interface TabsProps extends TabBaseProps {
  label: string[];
  content: any[];
}

const Tabs: React.FC<TabsProps> = ({ label, content }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('0');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <AppBar position="static" className={classes.panel}>
          <TabList
            onChange={handleChange}
            aria-label="simple tabs example"
            classes={{
              indicator: classes.indicator,
            }}
          >
            {label.map((item, index) => {
              return (
                <Tab
                  value={index.toString()}
                  key={index}
                  label={item}
                  className={classes.TabItem}
                />
              );
            })}
          </TabList>
        </AppBar>
        {content.map((item, index) => {
          return (
            <TabPanel key={index} value={index.toString()}>
              {item}
            </TabPanel>
          );
        })}
      </TabContext>
    </div>
  );
};

export default Tabs;
