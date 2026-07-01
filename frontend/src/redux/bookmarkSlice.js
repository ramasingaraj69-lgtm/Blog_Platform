import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

import API from "../api/axios";

// TOGGLE BOOKMARK

export const toggleBookmark = createAsyncThunk(

    "bookmarks/toggleBookmark",

    async({ blogId, user }) => {


        const res = await API.post(

            `bookmarks/toggle/${blogId}/`,

            { user }
        );

        return {

            blogId: blogId,

            bookmarked: res.data.bookmarked,
        };


    }
);

// FETCH BOOKMARKS

export const fetchBookmarks = createAsyncThunk(

    "bookmarks/fetchBookmarks",

    async(user) => {


        const res = await API.get(

            `bookmarks/${user}/`
        );

        return res.data;


    }
);

const bookmarkSlice = createSlice({

    name: "bookmarks",

    initialState: {


        bookmarks: [],

        bookmarkedMap: {},


    },

    reducers: {},

    extraReducers: (builder) => {


        // FETCH BOOKMARKS

        builder.addCase(

            fetchBookmarks.fulfilled,

            (state, action) => {

                state.bookmarks = action.payload;

                const map = {};

                action.payload.forEach((blog) => {

                    map[blog._id] = true;
                });

                state.bookmarkedMap = map;
            }
        );


        // TOGGLE BOOKMARK

        builder.addCase(

            toggleBookmark.fulfilled,

            (state, action) => {

                const blogId = action.payload.blogId;

                state.bookmarkedMap[blogId] =
                    action.payload.bookmarked;
            }
        );


    },
});

export default bookmarkSlice.reducer;