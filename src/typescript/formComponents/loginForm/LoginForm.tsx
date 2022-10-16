import { Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormInput from '../components/FormInput';
import { VALIDATIONS } from '../constants/validationRules';
import { isEmpty } from 'lodash';
import S from './LoginForm.styles';

interface RegistrationFormFields {
  firstName: string;
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>({
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...', data);
  });

  console.log(errors);

  return (
    <S.LoginForm onSubmit={onSubmit} name="loginForm">
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        Login
      </Typography>
      <FormInput
        type="email"
        label="Email"
        placeHolder="Email"
        validation={VALIDATIONS.email}
        control={control}
        errors={errors}
        name="email"
      />
      <FormInput
        label="Password"
        placeHolder="Password"
        validation={VALIDATIONS.lastName}
        control={control}
        errors={errors}
        name="password"
        type="password"
      />
      <Typography sx={{ margin: '0 0 10px 0', textAlign: 'right' }}>Forgot password?</Typography>
      <Button variant="contained" type="submit" disabled={!isEmpty(errors)} size="large">
        Submit
      </Button>
    </S.LoginForm>
  );
};

export default LoginForm;
