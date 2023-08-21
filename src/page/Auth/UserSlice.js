import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import requestApi from '~/helpers/api';

const initialState = {
  isLogined: false,
  user: null,
  token: '',
  Playlists: [],
};

export const handleLogin = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const response = await requestApi('/auth/login', 'POST', body);

    console.log(response);

    const { data } = response;

    const { data: user } = await axios.get(`http://localhost:9000/users/${data.result.id}`, {
      headers: {
        Authorization: `Bearer ${data.result.tokens.access_token}`,
      },
    });

    return { tokens: data.result.tokens, user: user.result };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const handleEditName = createAsyncThunk('users/update-user', async (body, thunkAPI) => {
  try {
    const userId = JSON.parse(localStorage.getItem('user_data')).user.id;
    const response = await requestApi(`/users/${userId}`, 'PUT', body);
    console.log(response);
    return body;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getUser = createAsyncThunk('auth/getUser', async (reqData, thunkAPI) => {
  try {
    const { data } = await requestApi(`/users/${reqData}`, 'GET');
    return data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogined = true;
      state.token = action.payload.tokens.access_token;
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.isLogined = false;
      state.user = null;
      state.token = '';
      localStorage.removeItem('user_data');
    },
  },

  extraReducers(bullder) {
    bullder
      .addCase(handleLogin.fulfilled, (state, action) => {
        localStorage.setItem('user_data', JSON.stringify(action.payload));
        state.isLogined = true;
        state.token = action.payload.tokens.access_token;
        state.user = action.payload.user;
      })
      .addCase(handleEditName.fulfilled, (state, action) => {
        state.user.first_name = action.payload.first_name;
        state.user.last_name = action.payload.last_name;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
