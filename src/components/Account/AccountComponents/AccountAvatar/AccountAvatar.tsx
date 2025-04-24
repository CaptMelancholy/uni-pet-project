import { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as S from './AccountAvatar.styles';
import API, { APIImage, apiUrl } from '../../../../API/api';
import { useAuth } from '../../../../context/AuthHooks';

const DEFAULT_AVATAR = '/default.jpg';

export default function AccountAvatar() {
  const [avatarUrl, setAvatarUrl] = useState<string>(DEFAULT_AVATAR);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { authName } = useAuth();
  useEffect(() => {
    API.get(`avatar/me`, { responseType: 'blob' })
      .then((res) => {
        const url = URL.createObjectURL(res.data);
        setAvatarUrl(url);
      })
      .catch(() => {
        setAvatarUrl(DEFAULT_AVATAR);
      });
  }, [authName]);
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);
    console.log(formData);
    try {
      const res = await APIImage.post('upload-avatar', formData);

      const newUrl = `${apiUrl}${res.data.avatarUrl}`;
      setAvatarUrl(newUrl);
    } catch (err) {
      console.error('Error', err);
    }
  };
  return (
    <S.Wrapper>
      <S.ImageUploader
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        accept='image/*'
      />
      <S.AvatarContainer onClick={() => fileInputRef.current?.click()}>
        <S.Avatar
          src={avatarUrl}
          alt='Avatar'
        />
      </S.AvatarContainer>
    </S.Wrapper>
  );
}
