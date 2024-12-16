import './ScreenBlock.styles'
import { ScreenBlockContainer } from './ScreenBlock.styles';
import { useScreenBlock } from '../../context/ScreenHooks';

export default function ScreenBlock() {
  const { screen } = useScreenBlock();
  return <ScreenBlockContainer $show={screen} />
}
