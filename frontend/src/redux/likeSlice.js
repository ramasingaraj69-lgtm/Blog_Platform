import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

// TOGGLE LIKE (backend)
export const toggleLike = createAsyncThunk(
    "likes/toggleLike",
    async({ blogId, user }) => {
        const res = await API.post(
            `blogs/like/${blogId}/`, { user }
        );

        return {
            blogId: blogId,
            totalLikes: res.data.totalLikes,
            likedByUser: res.data.likedByUser,
        };
    }
);

const likeSlice = createSlice({
    name: "likes",
    initialState: {
        likes: {}, // blogId -> total likes
        likedByUser: {}, // blogId -> boolean
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(toggleLike.fulfilled, (state, action) => {
            const blogId = action.payload.blogId;

            state.likes[blogId] = action.payload.totalLikes;
            state.likedByUser[blogId] = action.payload.likedByUser;
        });
    },
});

export default likeSlice.reducer;