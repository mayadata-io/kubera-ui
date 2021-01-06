export interface CustomTextProps {
  value: string;
  width: string;
  onChangeText: (value: string) => void;
  initialStateOutline?: boolean;
  showLabelOnDisabled?: boolean;
  showHelperTextOnDisabled?: boolean;
  validateText?: boolean;
  placeholder?: string;
  label?: string;
  helperText?: string;
  multiline?: boolean;
  isEditable?: boolean;
}
