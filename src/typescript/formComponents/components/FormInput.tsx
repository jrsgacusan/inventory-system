import { TextField } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import { Controller, FieldErrorsImpl, UseControllerProps, UseFormReturn } from 'react-hook-form';

interface Props {
  control: UseFormReturn<any>['control'];
  name: string;
  validation: UseControllerProps['rules'];
  errors: Partial<FieldErrorsImpl<any>>;
  placeHolder: string;
  label: string;
  type: HTMLInputTypeAttribute;
  defaultValue?: string | number;
  fullWidth?: boolean;
}

const FormInput = ({ control, name, defaultValue = '', validation, errors, fullWidth = false, placeHolder, label, type }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          InputLabelProps={{ htmlFor: name }}
          helperText={(errors[name]?.message as string) ?? <>&nbsp;</>}
          InputProps={{ id: name }}
          error={!!errors[name]}
          fullWidth={fullWidth}
          placeholder={placeHolder}
          label={label}
          {...field}
          type={type}
        />
      )}
    />
  );
};

export default FormInput;
