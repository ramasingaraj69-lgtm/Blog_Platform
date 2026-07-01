import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";

import API from "../api/axios";


// FETCH COMMENTS
export const fetchComments = createAsyncThunk(
    "comments/fetchComments",

    async(blogId, { rejectWithValue }) => {
        try {

            const res = await API.get(
                `comments/${blogId}/`
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


// ADD COMMENT
export const addComment = createAsyncThunk(
    "comments/addComment",

    async(data, { rejectWithValue }) => {
        try {

            const res = await API.post(
                "comments/add/",
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


// DELETE COMMENT
export const deleteComment = createAsyncThunk(
    "comments/deleteComment",

    async(commentId, { rejectWithValue }) => {
        try {

            await API.delete(
                `comments/delete/${commentId}/`
            );

            return commentId;

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


const commentSlice = createSlice({

    name: "comments",

    initialState: {

        comments: [],

        loading: false,

        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {

        builder

        // FETCH COMMENTS
            .addCase(fetchComments.pending, (state) => {

            state.loading = true;
        })

        .addCase(fetchComments.fulfilled, (state, action) => {

            state.loading = false;

            state.comments = action.payload;
        })

        .addCase(fetchComments.rejected, (state, action) => {

            state.loading = false;

            state.error = action.payload;
        })


        // ADD COMMENT
        .addCase(addComment.pending, (state) => {

            state.loading = true;
        })

        .addCase(addComment.fulfilled, (state, action) => {

            state.loading = false;

            state.comments.unshift(
                action.payload
            );
        })

        .addCase(addComment.rejected, (state, action) => {

            state.loading = false;

            state.error = action.payload;
        })


        // DELETE COMMENT
        .addCase(deleteComment.fulfilled, (state, action) => {

            state.comments = state.comments.filter(

                (comment) =>
                comment._id !== action.payload
            );
        });
    },
});

export default commentSlice.reducer;