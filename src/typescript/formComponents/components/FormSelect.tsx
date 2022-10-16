import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, FieldErrorsImpl, UseControllerProps, UseFormReturn } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';

interface Props {
  menuItems: string[];
  control: UseFormReturn<any>['control'];
  name: string;
  validation?: UseControllerProps['rules'];
  errors: Partial<FieldErrorsImpl<any>>;
  label: string;
  defaultValue?: string | number;
  width?: number | string;
}

const FormSelect = ({ control, name, defaultValue = '', validation, errors, width = 80, label, menuItems }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Box sx={{ width }}>
          <FormControl fullWidth error={!!errors[name]}>
            <InputLabel id={name}>{label}</InputLabel>
            <Select labelId={name} id={name} label="Age" {...field}>
              {menuItems.map((menu, index) => (
                <MenuItem value={menu} key={index}>
                  {menu}
                </MenuItem>
              ))}
            </Select>
            {errors[name] && <FormHelperText error>{(errors[name]?.message as string) ?? <>&nbsp;</>}</FormHelperText>}
          </FormControl>
        </Box>
      )}
    />
  );
};

export default FormSelect;
