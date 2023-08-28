import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import requestApi from '~/helpers/api';

const initialState = {
  isLogined: false,
  user: null,
  token: '',
  favoriteId: [],
  queueFavorite: [],
  playlists: [],
};

export const handleLogin = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const response = await requestApi('/auth/login', 'POST', body);

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

export const handleEditName = createAsyncThunk('auth/handleEditName', async (body, thunkAPI) => {
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

export const handleChangeFavoriteSong = createAsyncThunk(
  'auth/handleChangeFavoriteSong',
  async (reqData, thunkAPI) => {
    try {
      const { data } = await requestApi(`/songs/favorite/${reqData}`, 'GET');
      return { data: data.result, id: reqData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const handleAddPlaylist = createAsyncThunk(
  'auth/handleAddPlaylist',
  async (reqData, thunkAPI) => {
    try {
      const { data } = await requestApi('/playlists', 'POST', reqData);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getPlaylists = createAsyncThunk('auth/getPlaylists', async (_, thunkAPI) => {
  try {
    const { data } = await requestApi(`/playlists`, 'GET');
    return data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const handleAddSongToPlaylist = createAsyncThunk(
  'auth/handleAddSongToPlaylist',
  async (reqData, thunkAPI) => {
    try {
      const { data } = await requestApi(`/playlists/add`, 'PATCH', reqData);
      return data.result;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const handleDeletePlaylist = createAsyncThunk(
  'auth/handleDeletePlaylist',
  async (reqData, thunkAPI) => {
    try {
      const { data } = await requestApi(`/playlists/${reqData}`, 'DELETE');
      return data.result;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const handleRemoveSongToPlaylist = createAsyncThunk(
  'auth/handleAddSongToPlaylist',
  async (reqData, thunkAPI) => {
    try {
      const { data } = await requestApi(`/playlists/add`, 'PATCH', reqData);
      return data.result;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogined = true;
      state.token = action.payload.tokens.access_token;
      state.user = action.payload.user;
      state.queueFavorite = action.payload.user.favoriteSongs;
      if (action.payload.user.favoriteSongs > 0) {
        action.payload.user.favoriteSongs.forEach((song) => {
          return state.favoriteId.push(song.id);
        });
      }
    },
    setLogout: (state) => {
      state.isLogined = false;
      state.user = null;
      state.token = '';
      localStorage.removeItem('user_data');
    },
    setFavoriteId: (state) => {
      state.favoriteId = [];
      state.queueFavorite.forEach((song) => {
        state.favoriteId.push(song.id);
      });
    },
  },

  extraReducers(bullder) {
    bullder
      .addCase(handleLogin.fulfilled, (state, action) => {
        localStorage.setItem('user_data', JSON.stringify(action.payload));
        state.isLogined = true;
        state.token = action.payload.tokens.access_token;
        state.user = action.payload.user;
        state.queueFavorite = action.payload.user.favoriteSongs;
        state.favoriteId = [];
        action.payload.user.favoriteSongs.forEach((song) => {
          return state.favoriteId.push(song.id);
        });
      })
      .addCase(handleEditName.fulfilled, (state, action) => {
        state.user.first_name = action.payload.first_name;
        state.user.last_name = action.payload.last_name;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(handleChangeFavoriteSong.fulfilled, (state, action) => {
        state.queueFavorite = action.payload.data.response.favoriteSongs;
        state.favoriteId = [];
        state.queueFavorite.forEach((song) => {
          state.favoriteId.push(song.id);
        });
      })
      .addCase(handleAddPlaylist.fulfilled, (state, action) => {
        state.playlists.push(action.payload);
      })
      .addCase(getPlaylists.fulfilled, (state, action) => {
        state.playlists = action.payload;
      })
      .addCase(handleAddSongToPlaylist.fulfilled, (state, action) => {
        state.playlists.forEach((playlist) => {
          if (playlist.id === action.payload.id) {
            playlist.songs = action.payload.songs;
          }
        });
      });
  },
});

export const { setLogin, setLogout, setQueueFavorite, setFavoriteId } = userSlice.actions;

export default userSlice.reducer;
