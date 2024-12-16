import * as S from './TabButtons.styles';

interface IProps {
  name: [...Array<string>];
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
}

export default function TabButtons({
  name,
  activeTab,
  setActiveTab
}: IProps) {
  return (
    <S.ButtonWrapper>
      {name.map((title, index) => (
        <S.ButtonBold
          onClick={() => setActiveTab(index)}
          className={activeTab === index ? 'active' : ''}
        >
          {title}
        </S.ButtonBold>
      ))}
    </S.ButtonWrapper>
  );
}
