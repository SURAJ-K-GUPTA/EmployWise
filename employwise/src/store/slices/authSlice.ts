import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  } | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
  user: null,
};

// ✅ Login Async Thunk with Better Error Handling
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', credentials);
      return response.data.token;
    } catch (error: any) {
      // ✅ Handle 400 Bad Request Errors Gracefully
      if (error.response?.status === 400) {
        return rejectWithValue(error.response.data?.error || 'Invalid email or password.');
      }
      return rejectWithValue('Something went wrong. Please try again.');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        localStorage.setItem('token', action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Login failed. Please try again.';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
