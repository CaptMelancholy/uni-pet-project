import { useForm } from 'react-hook-form';
import * as C from '../../styles/components';
import * as S from './NewSignIn.styles'
import { EButtonType, EInputFieldTypes } from '../../utils/DesignType.types';
import { useTheme } from 'styled-components';
import { IUserSignIn } from './SignIn.types';
import API from '../../API/api';
import { generatePath, useNavigate } from 'react-router-dom';
import DefaultRoutes from '../../Routes/Routes';
import axios from 'axios';
import { useAuth } from '../../context/AuthHooks';

interface IUserInput {
  username: string;
  password: string;
}

export default function SingIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserInput>();
  const { setIsAuth, setAuthName } = useAuth();
  const theme = useTheme();
  const navigate = useNavigate();
  const handleLogin = (data: IUserInput) => {
    const signInUser = async (user : IUserSignIn) => {
      try {
        const { data } = await API.post('login', user);
        navigate(DefaultRoutes.boards);
        setIsAuth(true);
        setAuthName(data.username);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.status);
          const path = generatePath(DefaultRoutes.error, { code: error.response?.status });
          navigate(path, {
            state: { message: error.response?.data.error },
          });
        } else {
          console.error(error);
          const path = generatePath(DefaultRoutes.error, { code: error });
          navigate(path);
        }
      }
    };
    const payload: IUserSignIn = {
      username: data.username,
      password: data.password,
    };
    signInUser(payload);
    reset();
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
      <S.AuthButton
        $type={EButtonType.empty}
        type='submit'
      >
        SIGN IN
      </S.AuthButton>
    </S.Form>
  );
}
