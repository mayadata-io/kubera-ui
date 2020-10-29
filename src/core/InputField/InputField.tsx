import React, { useState } from 'react';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { BaseInputProps } from './base';
import { useStyles } from './styles';

type Variant = 'primary' | 'error' | 'success' | undefined;

interface InputProps extends BaseInputProps {
  variant?: Variant;
  adornment?: string;
  startIcons: JSX.Element[];
  endIcons: JSX.Element[];
}
const InputField: React.FC<InputProps> = ({
  variant,
  label,
  disabled,
  type,
  value,
  adornment,
  required,
  startIcons,
  endIcons,
  onChange,
}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const handleClickShowPassword = () => {
    setShowPassword(true);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setShowPassword(false);
  };
  function getVariant(variant: Variant): string {
    switch (variant) {
      case 'error':
        return classes.error;
      case 'success':
        return classes.success;
      default:
        return classes.primary;
    }
  }
  if (type === 'password') {
    return (
      <FormControl
        data-testid="inputField"
        variant="outlined"
        className={
          disabled
            ? classes.disabled
            : `${classes.root}  ${getVariant(variant)}`
        }
      >
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          role="OutlinedInput"
          type={showPassword ? 'text' : 'password'}
          value={value}
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? endIcons[0] : endIcons[1]}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  }
  if (adornment === 'Start') {
    return (
      <FormControl
        data-testid="inputField"
        variant="outlined"
        className={
          disabled
            ? classes.disabled
            : `${classes.root}  ${getVariant(variant)}`
        }
      >
        <InputLabel htmlFor="outlined-adornment">{label}</InputLabel>
        <OutlinedInput
          role="OutlinedInput"
          type={type}
          value={value}
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          startAdornment={
            <InputAdornment position="start">
              {startIcons?.map((Icon) => (
                <IconButton edge="start" key={startIcons.indexOf(Icon)}>
                  {Icon}
                </IconButton>
              ))}
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  } else if (adornment === 'End') {
    return (
      <FormControl
        data-testid="inputField"
        variant="outlined"
        className={
          disabled
            ? classes.disabled
            : `${classes.root}  ${getVariant(variant)}`
        }
      >
        <InputLabel htmlFor="outlined-adornment">{label}</InputLabel>
        <OutlinedInput
          role="OutlinedInput"
          type={type}
          value={value}
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          endAdornment={
            <InputAdornment position="end">
              {endIcons?.map((Icon) => (
                <IconButton edge="end" key={endIcons.indexOf(Icon)}>
                  {Icon}
                </IconButton>
              ))}
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  } else if (adornment === 'StartEnd') {
    return (
      <FormControl
        data-testid="inputField"
        variant="outlined"
        className={
          disabled
            ? classes.disabled
            : `${classes.root}  ${getVariant(variant)}`
        }
      >
        <InputLabel htmlFor="outlined-adornment">{label}</InputLabel>
        <OutlinedInput
          role="OutlinedInput"
          type={type}
          value={value}
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          endAdornment={
            <InputAdornment position="end">
              {endIcons?.map((Icon) => (
                <IconButton edge="end" key={endIcons.indexOf(Icon)}>
                  {Icon}
                </IconButton>
              ))}
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              {startIcons?.map((Icon) => (
                <IconButton edge="end" key={startIcons.indexOf(Icon)}>
                  {Icon}
                </IconButton>
              ))}
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  } else {
    return (
      <FormControl
        data-testid="inputField"
        variant="outlined"
        className={
          disabled
            ? classes.disabled
            : `${classes.root}  ${getVariant(variant)}`
        }
      >
        <InputLabel
          htmlFor="outlined-adornment"
          className={disabled ? `MuiInputLabel-shrink MuiFormLabel-filled` : ``}
        >
          {label}
        </InputLabel>
        <OutlinedInput
          role="OutlinedInput"
          type={type}
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          value={value}
          labelWidth={70}
        />
      </FormControl>
    );
  }
};

export { InputField };
