import { useSelector } from 'react-redux';
import './ScreenBlock.styles'
import { ScreenBlockContainer } from './ScreenBlock.styles';
import { screenShowSelector } from '../../store/slices/screen/screen.selectors';

export default function ScreenBlock() {
  const show = useSelector(screenShowSelector);
  return <ScreenBlockContainer $show={show} />
}
