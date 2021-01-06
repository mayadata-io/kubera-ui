/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconButton, Typography, useTheme } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { InputField } from '../../core/InputField/InputField';
import { BaseInputProps } from './base';
import { useStyles } from './styles';

type Variant = 'primary' | 'error' | 'success' | undefined;

interface InputProps extends BaseInputProps {
  variant?: Variant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
const EditableText: React.FC<InputProps> = ({ value, fullWidth, ...rest }) => {
  const [toggleEditSave, settoggleEditSave] = React.useState(true);

  const classes = useStyles({ fullWidth: fullWidth });
  const { palette } = useTheme();
  return (
    <div>
      <div style={{ color: palette.text.primary, display: 'inline-flex' }}>
        {toggleEditSave ? (
          <Typography variant="body1" component="pre" className={classes.text}>
            {typeof value === 'string' ? value : ''}
          </Typography>
        ) : (
          <InputField value={value} fullWidth={fullWidth} {...rest} />
        )}
        <div className={classes.btn}>
          {toggleEditSave ? (
            <IconButton size="medium" onClick={() => settoggleEditSave(false)}>
              <EditIcon data-cy="edit" />
            </IconButton>
          ) : (
            <IconButton size="medium" onClick={() => settoggleEditSave(true)}>
              <SaveIcon data-cy="save" />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};
export { EditableText };
