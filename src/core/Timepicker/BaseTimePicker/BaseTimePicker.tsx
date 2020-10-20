import 'date-fns';
import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import { BaseTimePickerProps } from '../base';
import { useStyles } from './style';

interface TimePickerProps extends BaseTimePickerProps {
  value: Date;
}
const BaseTimePicker: React.FC<TimePickerProps> = ({ value }) => {
  const [selectedDate, handleDateChange] = useState<Date | null>(value);
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TimePicker
        autoOk
        okLabel="Save"
        value={selectedDate}
        className={classes.root}
        data-testid="timepicker"
        onChange={(newDate: any) => handleDateChange(newDate)}
      />
    </MuiPickersUtilsProvider>
  );
};
export { BaseTimePicker };
