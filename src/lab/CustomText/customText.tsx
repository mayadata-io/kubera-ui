import { IconButton, TextField, useTheme } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { useStyles } from './styles';

interface CustomTextProps {
  value: string;
  id: string;
  onchange: (val: string) => void;
  isEditable?: boolean;
  validateText?: boolean;
  helperText?: string;
}

// If validateText => True => There is a validation error
// If validateText => False => There is no validation error

// Editable text field used to edit and save the input in the text box
const CustomText: React.FC<CustomTextProps> = ({
  value,
  id,
  onchange,
  isEditable,
  validateText,
  helperText,
}) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [newValue, setNewValue] = React.useState<string>(value);

  const handleEdit = () => {
    setIsDisabled(false);
  };
  const handleSave = () => {
    onchange(newValue);
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
          required
          id="outlined-required"
          defaultValue="Hello World"
          variant={isDisabled ? 'standard' : 'outlined'}
          onChange={handleChange}
          disabled={isDisabled}
          inputProps={{
            readOnly: isDisabled,
            style: {
              color: validateText ? palette.error.main : palette.text.primary,
              lineHeight: '1rem',
              fontSize: '1rem',
            },
          }}
        />
        {/* <TextField
          data-cy="text"
          className={classes.inputText}
          disabled={isDisabled}
          id={id}
          defaultValue={newValue}
          multiline
          InputProps={{
            disableUnderline: true,
            style: {
              color: validateText ? palette.error.main : palette.text.primary,
              lineHeight: '1rem',
              fontSize: '1rem',
            },
          }}
          onChange={handleChange}
        /> */}

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
      <div className={classes.helperMessage}>{helperText}</div>
    </div>
  );
};
export default CustomText;
