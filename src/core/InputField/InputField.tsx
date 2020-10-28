import React, { useState } from 'react';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons';
import { BaseInputProps } from './base';
import { useStyles } from './styles';

type Variant = 'primary' | 'error' | 'success' | undefined;

interface InputProps extends BaseInputProps {
  variant?: Variant;
  adornment?: string;
}
const InputField: React.FC<InputProps> = ({
  variant,
  label,
  disabled,
  type,
  adornment,
  required,
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
                {showPassword ? <Visibility /> : <VisibilityOff />}
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
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          startAdornment={
            <InputAdornment position="start">
              <IconButton edge="start">
                <AccountCircle />
              </IconButton>
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
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <AccountCircle />
              </IconButton>
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
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <AccountCircle />
              </IconButton>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <IconButton edge="start">
                <AccountCircle />
              </IconButton>
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
        <InputLabel htmlFor="outlined-adornment">{label}</InputLabel>
        <OutlinedInput
          role="OutlinedInput"
          type={type}
          error={variant === 'error' ? true : false}
          disabled={disabled}
          onChange={onChange}
          required={required}
          labelWidth={70}
        />
      </FormControl>
    );
  }
};

export { InputField };
