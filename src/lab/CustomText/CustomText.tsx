import { IconButton, TextField, useTheme } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { CustomTextProps } from './base';
import { useStyles } from './styles';

const CustomText: React.FC<CustomTextProps> = ({
  value,
  onChangeText,
  validateText,
  helperText,
  placeholder,
  label,
  showLabelOnDisabled = true,
  showHelperTextOnDisabled = true,
  width,
  multiline = false,
  initialStateOutline = false,
  isEditable = true,
}) => {
  const [isDisabled, setIsDisabled] = React.useState(!initialStateOutline);
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

  const classes = useStyles({ width });
  const { palette } = useTheme();
  return (
    <div className={classes.root}>
      <div style={{ color: palette.text.primary }}>
        <TextField
          className={classes.inputText}
          value={newValue}
          placeholder={placeholder}
          label={label ? (showLabelOnDisabled ? label : '') : label}
          variant={isDisabled ? 'standard' : 'outlined'}
          onChange={handleChange}
          disabled={isDisabled}
          multiline={multiline}
          inputProps={{
            style: {
              color: validateText ? palette.error.main : palette.text.primary,
              lineHeight: '1rem',
              fontSize: '1rem',
            },
          }}
          InputProps={{
            readOnly: !isEditable,
          }}
          helperText={
            isDisabled
              ? showHelperTextOnDisabled
                ? helperText
                : ''
              : helperText
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
    </div>
  );
};
export { CustomText };
