import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import requestApi from '~/helpers/api';

const currentSong = {
  id: null,
  path: '',
  name: '',
  thumb: '',
  author: '',
  isFavorite: false,
};

const initialStates = {
  queue: [],
  currentSong: currentSong,
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: 1,
  favoriteId: [],
  queueFavorite: [],
};

export const getSongs = createAsyncThunk('listen/getSongs', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:9000/songs');
    return response.data.result;
  } catch (error) {
    throw error;
  }
});

export const handleUploadSong = createAsyncThunk('listen/uploadSong', async (body, thunkAPI) => {
  try {
    const response = await requestApi('/songs', 'POST', body);
    console.log(response);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const handleChangeFavoriteSong = createAsyncThunk(
  'listen/handleChangeFavoriteSong',
  async (reqData, thunkAPI) => {
    try {
      const { data } = await requestApi(`/songs/favorite/${reqData}`, 'GET');
      return { data: data.result, id: reqData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const listenSlice = createSlice({
  name: 'listen',
  initialState: initialStates,
  reducers: {
    setCurrentSong: (state, action) => {
      const song = action.payload;
      const index = state.queue.findIndex((item) => item.id === song.id);
      state.currentSong = song;
      state.currentIndex = index;
    },
    nextSong: (state) => {
      if (state.currentIndex + 1 === state.queue.length) {
        state.currentSong = state.queue[0];
        state.currentIndex = 0;
      } else {
        state.currentSong = state.queue[state.currentIndex + 1];
        state.currentIndex = state.currentIndex + 1;
      }
    },
    prevSong: (state) => {
      if (state.currentIndex - 1 < 0) {
        state.currentSong = state.queue[state.queue.length - 1];
        state.currentIndex = state.queue.length - 1;
      } else {
        state.currentSong = state.queue[state.currentIndex - 1];
        state.currentIndex = state.currentIndex - 1;
      }
    },

    playSong: (state) => void (state.isPlaying = true),
    pauseSong: (state) => void (state.isPlaying = false),

    randomOn: (state) => void (state.isRandom = true),
    randomOff: (state) => void (state.isRandom = false),

    noRepeat: (state) => void (state.isRepeat = 1),
    repeatAll: (state) => void (state.isRepeat = 2),
    repeatOne: (state) => void (state.isRepeat = 3),

    setQueueFavorite: (state) => {
      const queue = JSON.parse(localStorage.getItem('user_data')).user.favoriteSongs;
      state.queueFavorite = queue;
      state.favoriteId = [];
      queue?.forEach((song) => {
        return state.favoriteId.push(song.id);
      });
    },
  },

  extraReducers(bullder) {
    bullder
      .addCase(getSongs.fulfilled, (state, action) => {
        state.queue = action.payload;
        state.currentSong = action.payload[0];
        state.currentIndex = 0;
      })
      .addCase(handleChangeFavoriteSong.fulfilled, (state, action) => {
        state.queueFavorite = action.payload.data.response.favoriteSongs;
        state.favoriteId = [];
        state.queueFavorite.forEach((song) => {
          state.favoriteId.push(song.id);
        });
      });
  },
});

export const {
  setCurrentSong,
  nextSong,
  prevSong,
  playSong,
  pauseSong,
  randomOn,
  randomOff,
  noRepeat,
  repeatAll,
  repeatOne,
  setQueueFavorite,
} = listenSlice.actions;
export default listenSlice.reducer;
