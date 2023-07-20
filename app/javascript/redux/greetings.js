import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRandomGreeting = createAsyncThunk(
  'greetings/random',
  async () => {
    const res = await fetch('http://localhost:3000/api/random_greeting');
    const data = await res.json();
    console.log(data);
    return data.greeting;
  },
);

const initialState = {
  message: '',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default greetingsSlice.reducer;
