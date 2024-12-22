import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './slices/PasteSlice'
export const store = configureStore({
  reducer: {
    paste : pasteReducer,
  },
})

