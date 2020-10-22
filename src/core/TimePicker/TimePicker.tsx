import 'date-fns';
import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { BaseTimePickerProps } from './base';

interface TimePickerProps extends BaseTimePickerProps {
  value?: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ value }) => {
  const date = value ? value : '2020 12:30 PM';
  const [selectedDate, handleDateChange] = useState<number>(Date.parse(date));
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        autoOk
        okLabel="Save"
        label="Time picker"
        value={selectedDate}
        data-testid="timepicker"
        onChange={(newDate: any) => handleDateChange(newDate)}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
export { TimePicker };
