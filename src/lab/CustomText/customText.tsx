import { IconButton, TextField, useTheme } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { useStyles } from './styles';

interface CustomTextProps {
  value: string;
  id?: string;
  onChangeText: (value: string) => void;
  isEditable?: boolean;
  showLabelDisabled?: boolean;
  showHelperTextDisables?: boolean;
  validateText?: boolean;
  placeholder?: string;
  label?: string;
  helperText?: string;
}

// If validateText => True => There is a validation error
// If validateText => False => There is no validation error

// Editable text field used to edit and save the input in the text box
const CustomText: React.FC<CustomTextProps> = ({
  value,
  id,
  onChangeText,
  isEditable,
  validateText,
  helperText,
  placeholder,
  label,
  showLabelDisabled = true,
  showHelperTextDisables = true,
}) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [newValue, setNewValue] = React.useState<string>(value);

  const handleEdit = () => {
    setIsDisabled(false);
  };
  const handleSave = () => {
    onChangeText(newValue);
    setIsDisabled(true);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value);
  };

  const classes = useStyles();
  const { palette } = useTheme();
  return (
    <div className={classes.root}>
      <div style={{ color: palette.text.primary }}>
        <TextField
          className={classes.inputText}
          value={newValue}
          id={id}
          placeholder={placeholder}
          label={label ? (showLabelDisabled ? label : '') : label}
          variant={isDisabled ? 'standard' : 'outlined'}
          onChange={handleChange}
          disabled={isDisabled}
          inputProps={{
            style: {
              color: validateText ? palette.error.main : palette.text.primary,
              lineHeight: '1rem',
              fontSize: '1rem',
            },
          }}
          helperText={
            isDisabled ? (showHelperTextDisables ? helperText : '') : helperText
          }
        />

        {isEditable ? (
          <>
            {isDisabled ? (
              <IconButton size="medium" onClick={handleEdit}>
                <EditIcon className={classes.editBtn} data-cy="edit" />
              </IconButton>
            ) : (
              <IconButton size="medium" onClick={handleSave}>
                <SaveIcon className={classes.saveBtn} data-cy="save" />
              </IconButton>
            )}
          </>
        ) : null}
      </div>
      {/* <div className={classes.helperMessage}>{'waah beta waah'}</div> */}
    </div>
  );
};
export default CustomText;
