import { createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit';
import { AppThunkDispatch, RootState } from '.';

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<
  RootState,
  AppThunkDispatch
>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;