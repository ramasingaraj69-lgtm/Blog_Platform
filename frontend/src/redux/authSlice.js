import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";

import API from "../api/axios";


// REGISTER USER

export const registerUser = createAsyncThunk(

    "auth/registerUser",

    async(data, { rejectWithValue }) => {

        try {

            const res = await API.post(

                "users/register/",

                data
            );

            return res.data;

        } catch (err) {

            if (err.response && err.response.data) {

                return rejectWithValue(
                    err.response.data
                );
            }

            return rejectWithValue(
                "Something went wrong"
            );
        }
    }
);


// LOGIN USER

export const loginUser = createAsyncThunk(

    "auth/loginUser",

    async(data, { rejectWithValue }) => {

        try {

            const res = await API.post(

                "users/login/",

                data
            );

            return res.data;

        } catch (err) {

            if (err.response && err.response.data) {

                return rejectWithValue(
                    err.response.data
                );
            }

            return rejectWithValue(
                "Something went wrong"
            );
        }
    }
);


// GET PROFILE

export const fetchProfile = createAsyncThunk(

    "auth/fetchProfile",

    async(username, { rejectWithValue }) => {

        try {

            const res = await API.get(

                `users/profile/${username}/`
            );

            return res.data;

        } catch (err) {

            if (err.response && err.response.data) {

                return rejectWithValue(
                    err.response.data
                );
            }

            return rejectWithValue(
                "Something went wrong"
            );
        }
    }
);


const authSlice = createSlice({

    name: "auth",

    initialState: {

        user: null,

        token: null,

        profile: null,

        loading: false,

        error: null,
    },

    reducers: {

        logout: (state) => {

            state.user = null;

            state.token = null;

            state.profile = null;
        },
    },

    extraReducers: (builder) => {

        builder

        // REGISTER

            .addCase(registerUser.pending, (state) => {

            state.loading = true;

            state.error = null;
        })

        .addCase(registerUser.fulfilled, (state) => {

            state.loading = false;
        })

        .addCase(registerUser.rejected, (state, action) => {

            state.loading = false;

            state.error = action.payload;
        })


        // LOGIN

        .addCase(loginUser.pending, (state) => {

            state.loading = true;

            state.error = null;
        })

        .addCase(loginUser.fulfilled, (state, action) => {

            state.loading = false;

            state.user = action.payload.username;

            state.token = action.payload.access;
        })

        .addCase(loginUser.rejected, (state, action) => {

            state.loading = false;

            state.error = action.payload;
        })


        // PROFILE

        .addCase(fetchProfile.pending, (state) => {

            state.loading = true;
        })

        .addCase(fetchProfile.fulfilled, (state, action) => {

            state.loading = false;

            state.profile = action.payload;
        })

        .addCase(fetchProfile.rejected, (state, action) => {

            state.loading = false;

            state.error = action.payload;
        });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;