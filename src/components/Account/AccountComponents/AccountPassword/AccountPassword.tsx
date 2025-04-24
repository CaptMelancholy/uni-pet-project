import * as S from './AccountPassword.styles';
import * as C from './../../../../styles/components';
import {
  EButtonType,
  EInputFieldTypes,
} from '../../../../utils/DesignType.types';
import { useForm } from 'react-hook-form';
import API from '../../../../API/api';
import axios from 'axios';
import { useState } from 'react';

interface IPasswordInput {
  newPassword: string;
  oldPassword: string;
}

export default function AccountPassword() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IPasswordInput>();
  const [isSuccess, setIsSuccess] = useState(false);

  const registerOptions = {
    oldPassword: {
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
    newPassword: {
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
  };
  const handleChangePassword = (data: IPasswordInput) => {
    const changePassword = async () => {
      try {
        await API.post('change-password', data);
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
    changePassword();
    reset();
    clearErrors('root.serverError');
  };
  return (
    <S.ProfilePasswordFormContainer
      onSubmit={handleSubmit(handleChangePassword)}
    >
      <S.TopBlock>
        <S.FormText
          $weight={600}
          $size={30}
        >
          Change Password
        </S.FormText>
      </S.TopBlock>
      <S.MiddleBlocks $gridColumn='1/2'>
        <S.FormText
          $weight={400}
          $size={24}
        >
          Old password
        </S.FormText>
        <C.InputField
          type='password'
          $size={24}
          $type={EInputFieldTypes.onBright}
          placeholder='Enter old password..'
          {...register('oldPassword', registerOptions.oldPassword)}
        />
        {errors.oldPassword && <C.Error>{errors.oldPassword.message}</C.Error>}
      </S.MiddleBlocks>
      <S.MiddleBlocks $gridColumn='2/3'>
        <S.FormText
          $weight={400}
          $size={24}
        >
          New password
        </S.FormText>
        <C.InputField
          type='password'
          $size={24}
          $type={EInputFieldTypes.onBright}
          placeholder='Enter new password..'
          {...register('newPassword', registerOptions.newPassword)}
        />
        {errors.newPassword && <C.Error>{errors.newPassword.message}</C.Error>}
      </S.MiddleBlocks>
      <S.BottomBlock>
        <C.Button
          type='submit'
          $type={EButtonType.add}
        >
          Change Password
        </C.Button>
        {errors.root?.serverError && (
          <C.Error>{errors.root.serverError.message}</C.Error>
        )}
        {isSuccess && (
          <C.SuccessLabel>You changed password successfully</C.SuccessLabel>
        )}
      </S.BottomBlock>
    </S.ProfilePasswordFormContainer>
  );
}
