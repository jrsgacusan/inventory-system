import { Button } from '@mui/material';
import { Box } from '@mui/system';
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
      <FormInput
        label="First Name"
        placeHolder="First Name"
        validation={VALIDATIONS.firstName}
        control={control}
        errors={errors}
        name="firstName"
      />
      <FormInput
        label="Last Name"
        placeHolder="Last Name"
        validation={VALIDATIONS.lastName}
        control={control}
        errors={errors}
        name="lastName"
      />
      <Box>
        <Button variant="contained" type="submit" disabled={!isEmpty(errors)} size="large">
          Submit
        </Button>
      </Box>
    </S.LoginForm>
  );
};

export default LoginForm;
