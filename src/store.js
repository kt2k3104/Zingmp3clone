import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

import ListenSlice from '~/components/Layouts/DefaultLayout/Listen/ListenSlice';
import UserSlice from './page/Auth/UserSlice';
import AppSlice from './app.slice';
// ...

export const store = configureStore({
  reducer: {
    listen: ListenSlice,
    user: UserSlice,
    app: AppSlice,
  },
});

// Optional, nhưng bắt buộc nếu dùng tính năng refetchOnFocus/refetchOnReconnect
// setupListeners(store.dispatch);
