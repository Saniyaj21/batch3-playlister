import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'
import playlistReducer from './slices/playlistSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        playlist: playlistReducer,
    },
})