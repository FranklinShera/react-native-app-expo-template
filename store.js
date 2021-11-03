import { configureStore } from '@reduxjs/toolkit'
import AppSlice from './slices/appSlice'

export default configureStore({
  reducer: {
    app: AppSlice,
  },
})