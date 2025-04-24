import { useForm } from 'react-hook-form';
import * as C from '../../styles/components';
import * as S from './NewSignIn.styles';
import { EButtonType, EInputFieldTypes } from '../../utils/DesignType.types';
import { useTheme } from 'styled-components';
import { IUserSignIn } from './SignIn.types';
import API from '../../API/api';
import { useNavigate } from 'react-router-dom';
import DefaultRoutes from '../../Routes/Routes';
import axios from 'axios';
import { useAuth } from '../../context/AuthHooks';
import { useState } from 'react';

interface IUserInput {
  username: string;
  password: string;
}

export default function SingIn() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IUserInput>();
  const { setIsAuth, setAuthName } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const handleLogin = (data: IUserInput) => {
    const signInUser = async (user: IUserSignIn) => {
      try {
        const { data } = await API.post('login', user);
        navigate(DefaultRoutes.boards);
        setIsAuth(true);
        setAuthName(data.username);
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
    const payload: IUserSignIn = {
      username: data.username,
      password: data.password,
    };
    signInUser(payload);
    reset();
    clearErrors('root.serverError');
  };

  const registerOptions = {
    email: {
      required: 'Username is required',
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
  };
  return (
    <S.Form onSubmit={handleSubmit(handleLogin)}>
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
            placeholder='Your username'
            {...register('username', registerOptions.email)}
          />
          {errors.username && <C.Error>{errors.username.message}</C.Error>}
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
      </S.InputFields>
      <C.InputFormContainer>
        <S.AuthButton
          $type={EButtonType.empty}
          type='submit'
        >
          SIGN IN
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
