import { CrossContainer } from './IconButton.styles';
import { FaPen, FaRegTrashCan, FaX } from 'react-icons/fa6';
import { EType } from './IconButton.types';

interface IProps {
  onActionDoNext: () => void;
  $size: number;
  buttonType: EType;
}

export default function IconButton({
  onActionDoNext,
  $size,
  buttonType,
}: IProps) {
  const typeOfButton = (type: EType) => {
    switch (type) {
      case EType.close:
        return <FaX />;
      case EType.delete:
        return <FaRegTrashCan />;
      case EType.edit:
        return <FaPen />;
    }
  };
  return (
    <CrossContainer
      type='button'
      $size={$size}
      $type={buttonType}
      onClick={onActionDoNext}
    >
      {typeOfButton(buttonType)}
    </CrossContainer>
  );
}
