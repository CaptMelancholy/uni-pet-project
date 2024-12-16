import { useContext } from 'react';
import ScreenContext, { IScreenContextHandler } from './ScreenContext';

export const useScreenBlock = () : IScreenContextHandler => {
    const context = useContext(ScreenContext);
    if(!context) {
        throw new Error('useScreenBlock must be used within a ScreenContext');
    }
    return context;
}