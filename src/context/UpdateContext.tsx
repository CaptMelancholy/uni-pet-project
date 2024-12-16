import { createContext, ReactNode, useState } from 'react';

export interface UpdateContextType {
  update: boolean;
  setUpdate: (update: boolean) => void;
}

export const UpdateContext = createContext<UpdateContextType>({
  update: false,
  setUpdate: () => {},
});

interface IProps {
  children: ReactNode;
}

export const UpdateProvider = ({ children }: IProps) => {
  const [update, setUpdate] = useState<boolean>(false);

  return (
    <UpdateContext.Provider value={{ update, setUpdate }}>
      {children}
    </UpdateContext.Provider>
  );
};