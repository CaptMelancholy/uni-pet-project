import * as S from './AccountProfile.styles';
import * as C from './../../../../styles/components';
import {
  EButtonType,
  EInputFieldTypes,
} from '../../../../utils/DesignType.types';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../../../API/api';

interface IAboutInput {
  about?: string;
  location?: string;
  realname?: string;
  profession?: string;
}

export default function AccountProfile() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IAboutInput>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [defaultInfo, setDefaultInfo] = useState<IAboutInput | null>(null);
  const validateEmptyOrNoSpaces = (value?: string) => {
    if (value === undefined || value === '') return true;
    if (value.trim() === '') return 'Field can be empty but no space';
    return true;
  };

  const updateOptions = {
    about: {
      validate: validateEmptyOrNoSpaces,
    },
    location: {
      validate: validateEmptyOrNoSpaces,
    },
    realname: {
      validate: validateEmptyOrNoSpaces,
    },
    profession: {
      validate: validateEmptyOrNoSpaces,
    },
  };

  const handleUpdateInfo = (data: IAboutInput) => {
    const updateInfo = async (data: IAboutInput) => {
      try {
        await API.post('update-profile', data);
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
    const cleanedData: IAboutInput = {
      about: data.about === '' ? undefined : data.about?.trim(),
      location: data.location === '' ? undefined : data.location?.trim(),
      realname: data.realname === '' ? undefined : data.realname?.trim(),
      profession: data.profession === '' ? undefined : data.profession?.trim(),
    };
    updateInfo(cleanedData);
    reset();
    clearErrors('root.serverError');
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await API.get('user-profile');
        const data: IAboutInput = {
          about: response.data.about,
          location: response.data.location,
          realname: response.data?.realname,
          profession: response.data.profession,
        };
        setDefaultInfo(data);
      } catch (error) {
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
    fetchUserProfile();
  }, []);
  return (
    <S.ProfileFormContainer onSubmit={handleSubmit(handleUpdateInfo)}>
      <S.TopBlock>
        <S.FormText
          $weight={400}
          $size={16}
        >
          About
        </S.FormText>
        <C.InputTextarea
          $type={EInputFieldTypes.onBright}
          $size={14}
          placeholder='Enter info about you..'
          defaultValue={defaultInfo?.about}
          {...register('about', updateOptions.about)}
        />
        {errors.about && <C.Error>{errors.about.message}</C.Error>}
      </S.TopBlock>
      <S.MiddleBlocks $gridColumn='1/2'>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Real Name
        </S.FormText>
        <C.InputField
          $type={EInputFieldTypes.onBright}
          $size={12}
          placeholder='Enter your real name...'
          defaultValue={defaultInfo?.realname}
          {...register('realname', updateOptions.realname)}
        />
        {errors.realname && <C.Error>{errors.realname.message}</C.Error>}
      </S.MiddleBlocks>
      <S.MiddleBlocks $gridColumn='2/3'>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Profession
        </S.FormText>
        <C.InputField
          $type={EInputFieldTypes.onBright}
          $size={12}
          placeholder='Enter your profession...'
          defaultValue={defaultInfo?.profession}
          {...register('profession', updateOptions.profession)}
        />
        {errors.profession && <C.Error>{errors.profession.message}</C.Error>}
      </S.MiddleBlocks>
      <S.MiddleBlocks $gridColumn='3/4'>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Location
        </S.FormText>
        <C.InputField
          $type={EInputFieldTypes.onBright}
          $size={12}
          placeholder='Enter location...'
          defaultValue={defaultInfo?.location}
          {...register('location', updateOptions.location)}
        />
        {errors.location && <C.Error>{errors.location.message}</C.Error>}
      </S.MiddleBlocks>
      <S.BottomBlock>
        <C.Button
          type='submit'
          $type={EButtonType.add}
        >
          Add information
        </C.Button>
        {errors.root?.serverError && (
          <C.Error>{errors.root.serverError.message}</C.Error>
        )}
        {isSuccess && (
          <C.SuccessLabel>You changed password successfully</C.SuccessLabel>
        )}
      </S.BottomBlock>
    </S.ProfileFormContainer>
  );
}
