import { createSlice } from '@reduxjs/toolkit';
import Songs from '~/SongsData';

const initialStates = {
  queue: Songs,
  currentSong: Songs[0],
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: 1,
};

// export const getSongs = createAsyncThunk('listen/getSongs', async (_, thunkAPI) => {
//   console.log('hhee');
//   try {
//     const response = await axios.get('http://localhost:8000/songs');
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

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
        state.currentIndex = state.currentIndex + 1;
        state.currentSong = state.queue[state.currentIndex + 1];
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

    changeRandom: (state) => void !state.isRandom,

    noRepeat: (state) => void (state.isRepeat = 1),
    repeatAll: (state) => void (state.isRepeat = 2),
    repeatOne: (state) => void (state.isRepeat = 3),

    changeFavoriteSong: (state, action) => {
      console.log('state');
      state.queue.forEach((song) => {
        if (song.id === action.payload.id) {
          song.isFavorite = !song.isFavorite;
        }
      });
      if (state.currentSong.id === action.payload.id) {
        state.currentSong.isFavorite = !action.payload.isFavorite;
      }
    },
  },

  // extraReducers(bullder) {
  //   bullder.addCase(getSongs.fulfilled, (state, action) => {
  //     state.queue = action.payload;
  //     state.currentSong = action.payload[0];
  //     state.currentIndex = 0;
  //   });
  // },
});

export const {
  setCurrentSong,
  nextSong,
  prevSong,
  playSong,
  pauseSong,
  changeRandom,
  noRepeat,
  repeatAll,
  repeatOne,
  changeFavoriteSong,
} = listenSlice.actions;
export default listenSlice.reducer;
