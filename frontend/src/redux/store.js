import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

import blogReducer from "./blogSlice";

import bookmarkReducer from "./bookmarkSlice";

import commentReducer from "./commentSlice";

import likeReducer from "./likeSlice";

export const store = configureStore({

    reducer: {

        auth: authReducer,

        blogs: blogReducer,

        bookmarks: bookmarkReducer,

        comments: commentReducer,

        likes: likeReducer,
    },
});