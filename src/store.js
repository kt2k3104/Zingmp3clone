import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

import ListenSlice from '~/components/Layouts/DefaultLayout/Listen/ListenSlice';
// ...

export const store = configureStore({
  reducer: {
    listen: ListenSlice,
  },
});

// Optional, nhưng bắt buộc nếu dùng tính năng refetchOnFocus/refetchOnReconnect
// setupListeners(store.dispatch);
