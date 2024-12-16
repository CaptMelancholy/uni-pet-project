import { createContext, ReactNode, useState } from 'react';

interface IProps {
    children : ReactNode;
}

export interface IScreenContextHandler {
    screen: boolean;
    setScreen: (screen: boolean) => void;
}

export const ScreenContext = createContext<IScreenContextHandler>({
    screen: false,
    setScreen: () => {},
});

export const ScreenProvider = ({ children } : IProps) => {
    const [screen, setScreen] = useState<boolean>(false);

    return(
        <ScreenContext.Provider value={{ screen, setScreen }} >
            { children }
        </ScreenContext.Provider>
    );
}

export default ScreenContext;