import { IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { InputField } from '../../core/InputField/InputField';
import { BaseInputProps } from './base';
import { useStyles } from './styles';

type Variant = 'primary' | 'error' | 'success' | undefined;

interface InputProps extends BaseInputProps {
  variant?: Variant;
  width?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
const EditableText: React.FC<InputProps> = ({
  value,
  fullWidth,
  multiline,
  width,
  className,
  ...rest
}) => {
  const [toggleEditSave, settoggleEditSave] = React.useState(true);

  const classes = useStyles({ fullWidth, multiline, width: width ?? '25rem' });
  return (
    <div>
      <div className={`${classes.root} ${className}`}>
        {toggleEditSave ? (
          <Typography variant="body1" className={classes.text}>
            {value as any}
          </Typography>
        ) : (
          <InputField
            value={value}
            width={width}
            multiline={multiline}
            fullWidth={fullWidth}
            {...rest}
          />
        )}
        <div className={classes.btn}>
          <IconButton
            size="medium"
            onClick={() => settoggleEditSave(!toggleEditSave)}
          >
            {toggleEditSave ? (
              <EditIcon data-cy="edit" />
            ) : (
              <SaveIcon data-cy="save" />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export { EditableText };
