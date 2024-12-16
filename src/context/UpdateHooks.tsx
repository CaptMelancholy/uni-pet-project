/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { UpdateContext, UpdateContextType } from './UpdateContext';

export const useUpdate = (): UpdateContextType => {
  const context = useContext(UpdateContext);
  if (!context) {
    throw new Error('useUpdate must be used within a UpdateContext');
  }
  return context;
};