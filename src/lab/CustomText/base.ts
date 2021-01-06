export interface CustomTextProps {
  value: string;
  width: string;
  onChangeText: (value: string) => void;
  isEditable?: boolean;
  showLabelDisabled?: boolean;
  showHelperTextDisabled?: boolean;
  validateText?: boolean;
  placeholder?: string;
  label?: string;
  helperText?: string;
  multiline?: boolean;
}
