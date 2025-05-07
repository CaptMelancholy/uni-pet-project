import * as S from './ModalBoardCreateLinks.styles';
import * as C from '../../../../styles/components';
import {
  EButtonType,
  EInputFieldTypes,
} from '../../../../utils/DesignType.types';
import { useForm } from 'react-hook-form';
import API from '../../../../API/api';

interface IInputData {
  userLimit: string;
  userLimitCustom?: number;
  timeLimitDays: string;
  customDateTime?: string;
}

interface IProps {
  id: number;
  title: string;
}

export interface ILinkData {
  boardId: number;
  userLimit: number;
  title: string;
  timeLimit: Date;
}

export default function ModalBoardCreateLinks({ id, title }: IProps) {
  const {
    register,
    handleSubmit,
    watch
  } = useForm<IInputData>();

  const userLimitValue = watch('userLimit');
  const timeLimitDaysValue = watch('timeLimitDays');
  const today = new Date().toISOString().split('T')[0];

  const onCreateLink = (data: IInputData) => {
    function combineDateWithCurrentLocalTime(date: Date) {
      const combined = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );

      return combined;
    }

    function addDaysToCurrentDate(daysToAdd: number) {
      const now = new Date();
      const resultDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + daysToAdd,
      );

      return resultDate;
    }

    const createLink = async (link : ILinkData) => {
      await API.post('links', link);
    }
    const users =
      data.userLimit !== '-1' ? Number(data.userLimit) : data.userLimitCustom;
    const date =
      data.timeLimitDays !== '-1'
        ? addDaysToCurrentDate(Number(data.timeLimitDays))
        : combineDateWithCurrentLocalTime(new Date(data.customDateTime!));
    if (users !== undefined && date !== undefined) {
      const linkToCreate: ILinkData = {
        boardId: id,
        userLimit: users,
        title: title,
        timeLimit: date,
      };
      createLink(linkToCreate);
    }
  };

  return (
    <S.Wrapper>
      <S.CreateLinksContainer onSubmit={handleSubmit(onCreateLink)}>
        <S.InfoContainer>
          <C.Text
            $size={24}
            $weight={600}
          >
            Limit of users
          </C.Text>
          <C.Select
            $type={EInputFieldTypes.onBright}
            {...register('userLimit')}
          >
            <C.Option value={'1'}>1</C.Option>
            <C.Option value={'5'}>5</C.Option>
            <C.Option value={'10'}>10</C.Option>
            <C.Option value={'-1'}>CUSTOM</C.Option>
          </C.Select>
          {userLimitValue === '-1' && (
            <C.InputField
              $size={16}
              $type={EInputFieldTypes.onBright}
              type='number'
              placeholder='Custom value'
              {...register('userLimitCustom', {
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: 'Min number — 1',
                },
                required: 'You must enter number',
              })}
            />
          )}
        </S.InfoContainer>
        <S.InfoContainer>
          <C.Text
            $size={24}
            $weight={600}
          >
            Limit by time period
          </C.Text>
          <C.Select
            $type={EInputFieldTypes.onBright}
            {...register('timeLimitDays')}
            defaultValue={1}
          >
            <C.Option value={'1'}>1 day</C.Option>
            <C.Option value={'7'}>7 days</C.Option>
            <C.Option value={'30'}>30 days</C.Option>
            <C.Option value={'-1'}>CUSTOM</C.Option>
          </C.Select>
          {timeLimitDaysValue === '-1' && (
            <C.InputField
              $size={16}
              $type={EInputFieldTypes.onBright}
              type='date'
              min={today}
              {...register('customDateTime')}
            />
          )}
        </S.InfoContainer>
        <S.InfoContainer>
          <C.Button $type={EButtonType.add}>Create Link</C.Button>
        </S.InfoContainer>
      </S.CreateLinksContainer>
    </S.Wrapper>
  );
}
