import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './AddMarkForm.styles';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import * as C from '../../styles/components';
import { EButtonType, EInputFieldTypes } from '../../utils/DesignType.types';
import { HexColorPicker } from 'react-colorful';
import API from '../../API/api';

interface IMarkInput {
  title: string;
}

export interface IMark {
  id: number;
  boardId: number;
  title: string;
  titleColor: string;
  bgColor: string;
}

export interface IProps {
  setShowAddMark: (flag: boolean) => void;
  boardId: number;
  fetchAllMarks: () => Promise<void>;
}

export default function AddMarkForm({ setShowAddMark, boardId, fetchAllMarks }: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMarkInput>();
  const [titleColor, setTitleColor] = useState<string>('#fff');
  const [bgColor, setBgColor] = useState<string>('#000');
  const submitOptions = {
    title: {
      required: 'Title is required',
      validate: {
        trapSpacesForRequiredFields: (v: string) =>
          !!v.trim() || 'White spaces not acceptable',
      },
    },
  };

  const handleOnClose = () => {
    reset();
    setShowAddMark(false);
  };

  const handleAddSubmit = (data: IMarkInput) => {
    const pushNewMark = async (newMark : IMark) => {
        try {
            await API.post('marks/all', newMark);
            await fetchAllMarks();
        } catch (e) {
            console.error(e);
        }
    }
    const newMark: IMark = {
      id: 0,
      boardId,
      title: data.title,
      titleColor,
      bgColor,
    };
    pushNewMark(newMark);
    setShowAddMark(false);
  };

  return (
    <S.AddMarkContainer onSubmit={handleSubmit(handleAddSubmit)}>
      <S.InfoContainer>
        <S.FormText
          $weight={700}
          $size={18}
        >
          Adding Mark
        </S.FormText>
        <IconButton
          onActionDoNext={handleOnClose}
          $size={14}
          buttonType={EType.close}
        />
      </S.InfoContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Title
        </S.FormText>
        <C.InputField
          $type={EInputFieldTypes.onDark}
          $size={14}
          placeholder='Enter title...'
          {...register('title', submitOptions.title)}
        />
        {errors.title && <C.Error>{errors.title.message}</C.Error>}
      </S.InputContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Text Color
        </S.FormText>
        <HexColorPicker
          color={titleColor}
          onChange={setTitleColor}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Background Color
        </S.FormText>
        <HexColorPicker
          color={bgColor}
          onChange={setBgColor}
        />
      </S.InputContainer>
      <C.Button
        $type={EButtonType.add}
        type='submit'
      >
        Add mark
      </C.Button>
    </S.AddMarkContainer>
  );
}
