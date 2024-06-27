import { ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { Provider } from 'react-redux';
import store from '../store';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const render = (ui: ReactNode) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <DragDropContext onDragEnd={() => console.log('ok')}>
            {children}
          </DragDropContext>
        </ThemeProvider>
      </Provider>
    ),
  });
};

export const specifiedCardRender = (ui: ReactNode) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <DragDropContext onDragEnd={() => console.log('ok')}>
            <Droppable droppableId='test-droppable-id'>
              {() => <>${children}</>}
            </Droppable>
          </DragDropContext>
        </ThemeProvider>
      </Provider>
    ),
  });
};
