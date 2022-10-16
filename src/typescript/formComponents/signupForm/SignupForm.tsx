import { Button, Typography } from '@mui/material';
import Box from '@mui/system/Box/Box';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import { VALIDATIONS } from '../constants/validationRules';
import S from '../loginForm/LoginForm.styles';

interface SignupFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  retypePassword: string;
  title: string;
}

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupFormFields>({
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...', data);
  });

  return (
    <S.LoginForm name="signupForm" onSubmit={onSubmit}>
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        Sign Up
      </Typography>
      <Box display="flex" columnGap={2}>
        <FormInput
          validation={VALIDATIONS.firstName}
          control={control}
          errors={errors}
          label="First Name"
          name="firstName"
          placeHolder="First Name"
          type={'text'}
          fullWidth
        />
        <FormInput
          validation={VALIDATIONS.lastName}
          control={control}
          errors={errors}
          label="Last Name"
          name="lastName"
          placeHolder="Last Name"
          type={'text'}
          fullWidth
        />
      </Box>
      <Box display={'flex'} columnGap={2}>
        <FormSelect
          control={control}
          errors={errors}
          label="Title"
          menuItems={['Mr', 'Mrs']}
          name="title"
          validation={VALIDATIONS.title}
          width={100}
        />
        <FormInput
          validation={VALIDATIONS.email}
          control={control}
          errors={errors}
          label="Email"
          name="email"
          placeHolder="Email"
          type={'email'}
          fullWidth
        />
      </Box>
      <FormInput
        validation={VALIDATIONS.password}
        control={control}
        errors={errors}
        label="Password"
        name="password"
        placeHolder="Password"
        type={'password'}
        fullWidth
      />
      <FormInput
        validation={{
          validate: (value) => {
            const { password } = getValues();
            return password === value || "Passwords doesn't match";
          },
          required: "Passwords doesn't match",
        }}
        control={control}
        errors={errors}
        label="Retype Password"
        name="retypePassword"
        placeHolder="Retype Password"
        type={'password'}
        fullWidth
      />

      <Button variant="contained" size="large" type="submit">
        Create Account
      </Button>
      <Typography>or</Typography>
      <Button variant="outlined" size="large" type="button" color="secondary" onClick={() => navigate('/auth/sign-in')}>
        Already have an account
      </Button>
    </S.LoginForm>
  );
};

export default SignupForm;
