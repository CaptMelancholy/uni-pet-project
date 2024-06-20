import { createSlice } from '@reduxjs/toolkit';
import ESliceNames from '../../store.types';
import { storageScreenDefaultState } from './screen.types';

const screenSlice = createSlice({
    name: ESliceNames.BACKGROUND_SCREEN_SLICE_NAME,
    initialState: storageScreenDefaultState,
    reducers: {
        setScreenStatus: (state, action: { payload : boolean }) => ({
            ...state,
            show: action.payload,
        })
    }
});

export const { setScreenStatus } = screenSlice.actions;

export default screenSlice.reducer;