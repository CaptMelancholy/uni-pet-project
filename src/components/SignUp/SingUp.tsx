import { useForm } from 'react-hook-form';
import * as C from '../../styles/components';
import * as S from './SignUp.styles';
import { useTheme } from 'styled-components';
import { EButtonType, EInputFieldTypes } from '../../utils/DesignType.types';
import API from '../../API/api';
import { IUserSignUp } from './SignUp.types';
import axios from 'axios';
import { useState } from 'react';

interface IUserInput {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export default function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IUserInput>();
  const [isSuccess, setIsSuccess] = useState(false);
  const theme = useTheme();
  const handleRegistration = (data: IUserInput) => {
    const registerUser = async (user: IUserSignUp) => {
      try {
        await API.post('register', user);
        setIsSuccess(true);
      } catch (error) {
        setIsSuccess(false);
        if (axios.isAxiosError(error)) {
          const message = error.response?.data.error || 'Internal Server Error';
          setError('root.serverError', {
            type: 'server',
            message,
          });
        } else {
          console.error(error);
          setError('root.serverError', {
            type: 'server',
            message: 'Unknown error. Contact developer',
          });
        }
      }
    };

    const payload: IUserSignUp = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
    };
    registerUser(payload);
    reset();
    clearErrors('root.serverError');
  };

  const registerOptions = {
    username: { required: 'Username is required' },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Invalid email address',
      },
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
      validate: (val: string) => {
        function containsOnlyDigits(str: string) {
          return /^\d+$/.test(str);
        }

        function containsOnlyLetters(str: string) {
          return /^[a-zA-Z]+$/.test(str);
        }

        if (containsOnlyDigits(val) || containsOnlyLetters(val)) {
          return 'Password must include both letters and numbers';
        }
      },
    },
    confirm_password: {
      required: 'Password is required',
      validate: {
        password_is_same: (v: string) => {
          if (watch('password') !== v) {
            return 'Passwords do not match';
          }
        },
      },
    },
  };
  return (
    <S.Form onSubmit={handleSubmit(handleRegistration)}>
      <S.InputFields>
        <C.InputFormContainer>
          <C.Text
            $size={18}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            Username
          </C.Text>
          <C.InputField
            $size={16}
            $type={EInputFieldTypes.onBright}
            type='text'
            placeholder='Your email'
            {...register('username', registerOptions.username)}
          />
          {errors.username && <C.Error>{errors.username.message}</C.Error>}
        </C.InputFormContainer>
        <C.InputFormContainer>
          <C.Text
            $size={18}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            Email
          </C.Text>
          <C.InputField
            $size={16}
            $type={EInputFieldTypes.onBright}
            type='email'
            placeholder='Your email'
            {...register('email', registerOptions.email)}
          />
          {errors.email && <C.Error>{errors.email.message}</C.Error>}
        </C.InputFormContainer>
        <C.InputFormContainer>
          <C.Text
            $size={18}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            Password
          </C.Text>
          <C.InputField
            $size={16}
            $type={EInputFieldTypes.onBright}
            type='password'
            placeholder='Your password'
            {...register('password', registerOptions.password)}
          />
          {errors.password && <C.Error>{errors.password.message}</C.Error>}
        </C.InputFormContainer>
        <C.InputFormContainer>
          <C.Text
            $size={18}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            Confirm password
          </C.Text>
          <C.InputField
            $size={16}
            $type={EInputFieldTypes.onBright}
            type='password'
            placeholder='Confirm your password'
            {...register('confirm_password', registerOptions.confirm_password)}
          />
          {errors.confirm_password && (
            <C.Error>{errors.confirm_password.message}</C.Error>
          )}
        </C.InputFormContainer>
      </S.InputFields>
      <C.InputFormContainer>
        <S.AuthButton
          $type={EButtonType.empty}
          type='submit'
        >
          SIGN UP
        </S.AuthButton>
        {errors.root?.serverError && (
          <C.Error>{errors.root.serverError.message}</C.Error>
        )}
        {isSuccess && (
          <C.SuccessLabel>You changed password successfully</C.SuccessLabel>
        )}
      </C.InputFormContainer>
    </S.Form>
  );
}
