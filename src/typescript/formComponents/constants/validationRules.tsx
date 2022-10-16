import { UseControllerProps } from 'react-hook-form';
import { emailPattern, namePattern } from './validationPatterns';

interface ValidationObject {
  [key: string]: UseControllerProps['rules'];
}

export const VALIDATIONS: ValidationObject = {
  firstName: {
    required: 'First name is required',
    maxLength: {
      value: 25,
      message: 'First name max length is 25',
    },
    pattern: {
      value: namePattern,
      message: 'You entered invalid values',
    },
  },
  lastName: {
    required: 'Last name is required',
    maxLength: {
      value: 25,
      message: 'Last name max length is 25',
    },
    pattern: {
      value: namePattern,
      message: 'You entered invalid values',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: emailPattern,
      message: 'Invalid email',
    },
  },
  title: {
    required: 'Required',
  },
  password: {
    required: 'Password is required',
  },
  retypePassword: {
    required: 'Retype password',
  },
};
