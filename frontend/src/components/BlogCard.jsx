
import {
  FaHeart,
  FaBookmark,
  FaComment,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useState } from "react";

import { toast } from "react-toastify";

import {
  toggleLike,
} from "../redux/likeSlice";

import {
  toggleBookmark,
} from "../redux/bookmarkSlice";

import {
  deleteBlog,
} from "../redux/blogSlice";

import {
  Link,
} from "react-router-dom";

function BlogCard({ blog }) {

  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.auth.user
  );

  const likesState = useSelector(
    (state) => state.likes.likes
  );

  const likedByUser = useSelector(
    (state) => state.likes.likedByUser
  );

  const bookmarkedMap = useSelector(
    (state) => state.bookmarks.bookmarkedMap
  );

  const blogId = blog._id;

  // ANIMATION STATES
  const [likeAnimating, setLikeAnimating] =
    useState(false);

  const [bookmarkAnimating, setBookmarkAnimating] =
    useState(false);

  // CHECK USER LIKE
  let isLiked = false;

  if (likedByUser[blogId] === true) {

    isLiked = true;
  }

  // CHECK USER BOOKMARK
  let isBookmarked = false;

  if (bookmarkedMap[blogId] === true) {

    isBookmarked = true;
  }

  // LIKE COUNT
  let likeCount = 0;

  if (likesState[blogId]) {

    likeCount = likesState[blogId];

  } else {

    if (blog.likes) {

      likeCount = blog.likes.length;
    }
  }

  // LIKE BLOG
  const handleLike = () => {

    setLikeAnimating(true);

    dispatch(

      toggleLike({

        blogId: blogId,

        user: user,
      })
    );

    if (isLiked) {

      toast.info("Like removed 💔");

    } else {

      toast.success("Liked ❤️");
    }

    setTimeout(() => {

      setLikeAnimating(false);

    }, 250);
  };

  // BOOKMARK BLOG
  const handleBookmark = () => {

    setBookmarkAnimating(true);

    dispatch(

      toggleBookmark({

        blogId: blogId,

        user: user,
      })
    );

    if (isBookmarked) {

      toast.info(
        "Removed from bookmarks"
      );

    } else {

      toast.success("Saved ✔");
    }

    setTimeout(() => {

      setBookmarkAnimating(false);

    }, 250);
  };

  // DELETE BLOG
  const handleDelete = () => {

    const confirmDelete =
      window.confirm(
        "Delete this blog?"
      );

    if (confirmDelete) {

      dispatch(deleteBlog(blogId));

      toast.error(
        "Blog deleted 🗑"
      );
    }
  };

  // OWNER CHECK
  let isOwner = false;

  if (user === blog.author) {

    isOwner = true;
  }

  return (

    <div
      style={{

        background:
          "rgba(255,255,255,0.75)",

        backdropFilter:
          "blur(18px)",

        borderRadius: "30px",

        overflow: "hidden",

        border:
          "1px solid rgba(255,255,255,0.4)",

        boxShadow:
          "0 10px 40px rgba(123,44,191,0.10)",

        transition: "0.3s",

        position: "relative",
      }}
    >

      {/* IMAGE */}

      <Link
        to={`/blog/${blogId}`}
        style={{
          textDecoration: "none",
        }}
      >

        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >

          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              transition: "0.4s",
            }}
          />

          {/* AUTHOR */}

          <div
            style={{

              position: "absolute",

              bottom: "18px",

              left: "18px",

              background:
                "rgba(255,255,255,0.25)",

              backdropFilter:
                "blur(10px)",

              padding: "10px 16px",

              borderRadius: "40px",

              color: "#fff",

              fontWeight: "700",

              border:
                "1px solid rgba(255,255,255,0.3)",
            }}
          >
            @{blog.author}
          </div>

        </div>

      </Link>

      {/* CONTENT */}

      <div
        style={{
          padding: "24px",
        }}
      >

        {/* TITLE */}

        <Link
          to={`/blog/${blogId}`}
          style={{
            textDecoration: "none",
          }}
        >

          <h2
            style={{
              color: "#222",
              marginBottom: "14px",
              fontSize: "1.4rem",
            }}
          >
            {blog.title}
          </h2>

        </Link>

        {/* DESCRIPTION */}

        <p
          style={{

            color: "#666",

            lineHeight: "1.8",

            marginBottom: "25px",
          }}
        >
          {blog.description.length > 120

            ? blog.description.slice(
                0,
                120
              ) + "..."

            : blog.description}
        </p>

        {/* ACTION BAR */}

        <div
          style={{

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",
          }}
        >

          {/* LEFT ACTIONS */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >

            {/* LIKE */}

            <button
              onClick={handleLike}
              style={{

                border: "none",

                background:
                  isLiked
                    ? "#ffe4ea"
                    : "#f6f1ff",

                width: "46px",

                height: "46px",

                borderRadius: "50%",

                cursor: "pointer",

                display: "flex",

                justifyContent:
                  "center",

                alignItems: "center",

                transform:
                  likeAnimating
                    ? "scale(1.25)"
                    : "scale(1)",

                transition: "0.2s",
              }}
            >

              <FaHeart
                style={{

                  color:
                    isLiked
                      ? "#ff2d55"
                      : "#7B2CBF",

                  fontSize: "1rem",
                }}
              />

            </button>

            <span
              style={{
                fontWeight: "700",
                color: "#444",
              }}
            >
              {likeCount}
            </span>

            {/* COMMENT */}

            <Link
              to={`/blog/${blogId}`}
            >

              <div
                style={{

                  width: "46px",

                  height: "46px",

                  borderRadius: "50%",

                  background:
                    "#f6f1ff",

                  display: "flex",

                  justifyContent:
                    "center",

                  alignItems: "center",

                  color: "#7B2CBF",
                }}
              >

                <FaComment />

              </div>

            </Link>

            {/* BOOKMARK */}

            <button
              onClick={handleBookmark}
              style={{

                border: "none",

                background:
                  isBookmarked
                    ? "#111"
                    : "#f6f1ff",

                width: "46px",

                height: "46px",

                borderRadius: "50%",

                cursor: "pointer",

                display: "flex",

                justifyContent:
                  "center",

                alignItems: "center",

                transform:
                  bookmarkAnimating
                    ? "scale(1.25)"
                    : "scale(1)",

                transition: "0.2s",
              }}
            >

              <FaBookmark
                style={{

                  color:
                    isBookmarked
                      ? "#fff"
                      : "#7B2CBF",
                }}
              />

            </button>

          </div>

          {/* OWNER ACTIONS */}

          {isOwner && (

            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >

              {/* EDIT */}

              <Link
                to={`/edit-blog/${blogId}`}
                style={{
                  color: "#7B2CBF",
                }}
              >

                <FaEdit
                  style={{
                    fontSize: "1.1rem",
                  }}
                />

              </Link>

              {/* DELETE */}

              <button
                onClick={handleDelete}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >

                <FaTrash
                  style={{
                    color: "#ff3b3b",
                    fontSize: "1rem",
                  }}
                />

              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default BlogCard;

