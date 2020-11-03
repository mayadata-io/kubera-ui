import React from 'react';
import {
  InputLabel,
  FormControl,
  Select,
  SelectProps,
} from '@material-ui/core';
import useStyles from './styles';

interface BaseSelectProps extends SelectProps {
  width?: number;
}

const BaseSelect: React.FC<BaseSelectProps> = ({
  children,
  value,
  label,
  width,
}) => {
  const classes = useStyles({ width });
  const [selected, setSelected] = React.useState<any>(value);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelected(event.target.value as number);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={handleChange}
        value={selected}
        label={label}
        role="Select"
      >
        {children}
      </Select>
    </FormControl>
  );
};

export { BaseSelect };
