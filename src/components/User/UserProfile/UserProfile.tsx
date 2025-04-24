import { useEffect, useState } from 'react';
import API from '../../../API/api';
import * as S from './UserProfile.styles';
import * as C from '../../../styles/components';
import { EInputFieldTypes } from '../../../utils/DesignType.types';

interface IProps {
  username: string;
}

interface IDesc {
  about?: string;
  location?: string;
  realname?: string;
  profession?: string;
}

export default function UserProfile({ username }: IProps) {
  const [profileData, setProfileData] = useState<IDesc | undefined>(undefined);
  useEffect(() => {
    API.get(`profile/${username}`).then((res) => {
      const data: IDesc = res.data;
      setProfileData(data);
    });
  }, [username]);
  return (
    <S.ProfileUserContainer>
      <S.TopBlock>
        <S.DescText
          $size={24}
          $weight={400}
        >
          About user
        </S.DescText>
        <C.TextField
          $size={24}
          $type={EInputFieldTypes.onBright}
        >
          {profileData?.about ? profileData.about : 'User doesnt set any info'}
        </C.TextField>
      </S.TopBlock>
      <S.MiddleBlocks $gridColumn='1/2'>
        <S.DescText
          $size={24}
          $weight={400}
        >
          Location
        </S.DescText>
        <C.TextField
          $size={24}
          $type={EInputFieldTypes.onBright}
        >
          {profileData?.location ? profileData.location : 'User doesnt set any info'}
        </C.TextField>
      </S.MiddleBlocks>
      <S.MiddleBlocks $gridColumn='2/3'>
        <S.DescText
          $size={24}
          $weight={400}
        >
          Real Name
        </S.DescText>
        <C.TextField
          $size={24}
          $type={EInputFieldTypes.onBright}
        >
          {profileData?.realname ? profileData.realname : 'User doesnt set any info'}
        </C.TextField>
      </S.MiddleBlocks>
      <S.MiddleBlocks $gridColumn='3/4'>
        <S.DescText
          $size={24}
          $weight={400}
        >
          Location
        </S.DescText>
        <C.TextField
          $size={24}
          $type={EInputFieldTypes.onBright}
        >
          {profileData?.location ? profileData.location : 'User doesnt set any info'}
        </C.TextField>
      </S.MiddleBlocks>
    </S.ProfileUserContainer>
  );
}
