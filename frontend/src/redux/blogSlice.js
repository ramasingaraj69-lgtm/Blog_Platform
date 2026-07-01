import {

    createSlice,

    createAsyncThunk,

} from "@reduxjs/toolkit";

import API from "../api/axios";


// FETCH BLOGS

export const fetchBlogs = createAsyncThunk(

    "blogs/fetchBlogs",

    async() => {

        const res = await API.get("blogs/");

        return res.data;
    }
);


// CREATE BLOG

export const createBlog = createAsyncThunk(

    "blogs/createBlog",

    async(data) => {

        const res = await API.post(

            "blogs/create/",

            data
        );

        return res.data;
    }
);


// DELETE BLOG

export const deleteBlog = createAsyncThunk(

    "blogs/deleteBlog",

    async(id) => {

        await API.delete(

            `blogs/delete/${id}/`
        );

        return id;
    }
);


// UPDATE BLOG

export const updateBlog = createAsyncThunk(

    "blogs/updateBlog",

    async({ id, data }) => {

        await API.put(

            `blogs/update/${id}/`,

            data
        );

        return {

            id,

            data,
        };
    }
);


const blogSlice = createSlice({

    name: "blogs",

    initialState: {

        blogs: [],

        loading: false,

        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {

        builder

        // FETCH

            .addCase(

            fetchBlogs.pending,

            (state) => {

                state.loading = true;
            }
        )

        .addCase(

            fetchBlogs.fulfilled,

            (state, action) => {

                state.loading = false;

                state.blogs =
                    action.payload;
            }
        )

        .addCase(

            fetchBlogs.rejected,

            (state, action) => {

                state.loading = false;

                state.error =
                    action.error.message;
            }
        )


        // CREATE

        .addCase(

            createBlog.pending,

            (state) => {

                state.loading = true;
            }
        )

        .addCase(

            createBlog.fulfilled,

            (state, action) => {

                state.loading = false;

                state.blogs.unshift(
                    action.payload
                );
            }
        )

        .addCase(

            createBlog.rejected,

            (state, action) => {

                state.loading = false;

                state.error =
                    action.error.message;
            }
        )


        // DELETE

        .addCase(

            deleteBlog.fulfilled,

            (state, action) => {

                state.blogs =
                    state.blogs.filter(

                        (blog) =>

                        blog._id !==
                        action.payload
                    );
            }
        )


        // UPDATE

        .addCase(

            updateBlog.fulfilled,

            (state, action) => {

                const index =
                    state.blogs.findIndex(

                        (blog) =>

                        blog._id ===
                        action.payload.id
                    );

                if (index !== -1) {

                    state.blogs[index] = {

                        ...state.blogs[index],

                        ...action.payload.data,
                    };
                }
            }
        );
    },
});

export default blogSlice.reducer;