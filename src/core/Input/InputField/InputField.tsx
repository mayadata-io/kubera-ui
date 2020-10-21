import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import { BaseInputProps } from '../base';
import { useStyles } from './styles';

type Variant = 'primary' | 'error' | 'success' | undefined;

interface CustomInputProps extends BaseInputProps {
  variant?: Variant;
  label: string;
  error: boolean;
  disabled?: boolean;
  required?: boolean;
  styles?: Record<string, any>;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<CustomInputProps> = ({
  variant,
  label,
  disabled,
  error,
  styles,
  required,
  handleChange,
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

  function getVariant(variant: string | undefined): string {
    switch (variant) {
      case 'error':
        return classes.errorInput;
      case 'success':
        return classes.successInput;
      default:
        return classes.primaryInput;
    }
  }

  function getLabel(variant: string | undefined): string {
    switch (variant) {
      case 'error':
        return classes.errorLabel;
      case 'success':
        return classes.successLabel;
      default:
        return classes.primaryLabel;
    }
  }
  return (
    <FormControl
      data-testid="inputField"
      variant="outlined"
      className={disabled ? classes.disabledInput : getVariant(variant)}
    >
      <InputLabel
        htmlFor="outlined-adornment-password"
        className={getLabel(variant)}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        error={error}
        disabled={disabled}
        onChange={handleChange}
        required={required}
        style={styles}
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
};

export { InputField };
