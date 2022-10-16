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
      message: 'First name max length is 25.',
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
      message: 'First name max length is 25.',
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
      message: 'Test',
    },
  },
};
