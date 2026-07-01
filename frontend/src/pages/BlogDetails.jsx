import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  FaHeart,
  FaBookmark,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";

import {
  toggleLike,
} from "../redux/likeSlice";

import {
  toggleBookmark,
} from "../redux/bookmarkSlice";

import {
  fetchComments,
  addComment,
} from "../redux/commentSlice";

import Navbar from "../components/Navbar";

import Container from "../components/Container";

import CommentCard from "../components/CommentCard";

import { toast } from "react-toastify";

function BlogDetails() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const [comment, setComment] =
    useState("");

  const [likeAnimating, setLikeAnimating] =
    useState(false);

  const [bookmarkAnimating, setBookmarkAnimating] =
    useState(false);

  const [cardHover, setCardHover] =
    useState(false);

  // REDUX

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const user = useSelector(
    (state) => state.auth.user
  );

  const comments = useSelector(
    (state) => state.comments.comments
  );

  const likes = useSelector(
    (state) => state.likes.likes
  );

  const likedByUser = useSelector(
    (state) => state.likes.likedByUser
  );

  const bookmarkedMap = useSelector(
    (state) => state.bookmarks.bookmarkedMap
  );

  // FIND BLOG

  const blog = blogs.find((b) => {

    return b._id === id;
  });

  // LOAD COMMENTS

  useEffect(() => {

    dispatch(
      fetchComments(id)
    );

  }, [dispatch, id]);

  // BLOG NOT FOUND

  if (!blog) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(to right,#f5f3ff,#ffffff)",
        }}
      >

        <h1
          style={{
            color: "#7B2CBF",
            fontSize: "2rem",
          }}
        >
          Blog not found 😢
        </h1>

      </div>
    );
  }

  // LIKE CHECK

  let isLiked = false;

  if (likedByUser[id] === true) {

    isLiked = true;
  }

  // BOOKMARK CHECK

  let isBookmarked = false;

  if (bookmarkedMap[id] === true) {

    isBookmarked = true;
  }

  // LIKE COUNT

  let likeCount = 0;

  if (likes[id]) {

    likeCount = likes[id];

  } else {

    if (blog.likes) {

      likeCount = blog.likes.length;
    }
  }

  // LIKE BLOG

  const handleLike = () => {

    if (!user) {

      toast.error(
        "Login required"
      );

      return;
    }

    setLikeAnimating(true);

    dispatch(

      toggleLike({

        blogId: id,

        user: user,
      })
    );

    if (isLiked) {

      toast.info(
        "Like removed 💔"
      );

    } else {

      toast.success(
        "Liked ❤️"
      );
    }

    setTimeout(() => {

      setLikeAnimating(false);

    }, 350);
  };

  // BOOKMARK BLOG

  const handleBookmark = () => {

    if (!user) {

      toast.error(
        "Login required"
      );

      return;
    }

    setBookmarkAnimating(true);

    dispatch(

      toggleBookmark({

        blogId: id,

        user: user,
      })
    );

    if (isBookmarked) {

      toast.info(
        "Removed from bookmarks"
      );

    } else {

      toast.success(
        "Saved ✔"
      );
    }

    setTimeout(() => {

      setBookmarkAnimating(false);

    }, 350);
  };

  // ADD COMMENT

  const handleComment = () => {

    if (!user) {

      toast.error(
        "Login required"
      );

      return;
    }

    if (!comment.trim()) {

      toast.error(
        "Comment required"
      );

      return;
    }

    dispatch(

      addComment({

        blog_id: id,

        user: user,

        message: comment,
      })
    );

    toast.success(
      "Comment added 💬"
    );

    setComment("");
  };

  return (

    <div
      style={{

        minHeight: "100vh",

        backgroundImage:
          `
          linear-gradient(
            rgba(245,240,255,0.94),
            rgba(255,255,255,0.96)
          ),
          url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop")
          `,

        backgroundSize: "cover",

        backgroundAttachment: "fixed",

        paddingBottom: "80px",
      }}
    >

      <Navbar />

      <Container>

        <div
          style={{
            padding: "50px 0",
          }}
        >

          {/* MAIN CARD */}

          <div
            onMouseEnter={() => {

              setCardHover(true);
            }}

            onMouseLeave={() => {

              setCardHover(false);
            }}

            style={{

              background:
                "rgba(255,255,255,0.65)",

              backdropFilter:
                "blur(20px)",

              borderRadius: "35px",

              overflow: "hidden",

              border:
                "1px solid rgba(255,255,255,0.4)",

              boxShadow:
                cardHover
                  ? "0 20px 60px rgba(123,44,191,0.22)"
                  : "0 12px 40px rgba(123,44,191,0.12)",

              transform:
                cardHover
                  ? "translateY(-4px)"
                  : "translateY(0px)",

              transition: "0.35s",
            }}
          >

            {/* BLOG IMAGE */}

            <div
              style={{
                position: "relative",
              }}
            >

              <img
                src={blog.image}
                alt={blog.title}
                style={{

                  width: "100%",

                  height: "460px",

                  objectFit: "cover",

                  transition: "0.5s",
                }}
              />

              {/* OVERLAY */}

              <div
                style={{

                  position: "absolute",

                  inset: 0,

                  background:
                    "linear-gradient(to top,rgba(0,0,0,0.7),transparent)",
                }}
              />

              {/* TITLE OVER IMAGE */}

              <div
                style={{

                  position: "absolute",

                  bottom: "40px",

                  left: "40px",

                  color: "#fff",
                }}
              >

                <h1
                  style={{

                    fontSize: "3rem",

                    marginBottom: "10px",

                    fontWeight: "800",
                  }}
                >
                  {blog.title}
                </h1>

                <p
                  style={{
                    opacity: 0.9,
                    fontSize: "1rem",
                  }}
                >
                  By @{blog.author}
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div
              style={{
                padding: "40px",
              }}
            >

              {/* DESCRIPTION */}

              <p
                style={{

                  color: "#555",

                  lineHeight: "2.1",

                  fontSize: "1.05rem",

                  marginBottom: "40px",
                }}
              >
                {blog.description}
              </p>

              {/* ACTION BUTTONS */}

              <div
                style={{

                  display: "flex",

                  gap: "18px",

                  flexWrap: "wrap",

                  marginBottom: "45px",
                }}
              >

                {/* LIKE */}

                <button
                  onClick={handleLike}
                  style={{

                    ...actionButton,

                    background:
                      isLiked
                        ? "linear-gradient(to right,#ff4d6d,#ff758f)"
                        : "#f7f2ff",

                    color:
                      isLiked
                        ? "#fff"
                        : "#7B2CBF",

                    transform:
                      likeAnimating
                        ? "scale(1.15)"
                        : "scale(1)",

                    boxShadow:
                      isLiked
                        ? "0 10px 25px rgba(255,77,109,0.35)"
                        : "none",
                  }}
                >

                  <FaHeart />

                  <span>
                    {likeCount}
                  </span>

                </button>

                {/* BOOKMARK */}

                <button
                  onClick={handleBookmark}
                  style={{

                    ...actionButton,

                    background:
                      isBookmarked
                        ? "linear-gradient(to right,#111,#333)"
                        : "#f7f2ff",

                    color:
                      isBookmarked
                        ? "#fff"
                        : "#7B2CBF",

                    transform:
                      bookmarkAnimating
                        ? "scale(1.15)"
                        : "scale(1)",
                  }}
                >

                  <FaBookmark />

                  <span>
                    Save
                  </span>

                </button>

                {/* COMMENTS */}

                <div
                  style={{
                    ...actionButton,
                    background: "#f7f2ff",
                    color: "#7B2CBF",
                  }}
                >

                  <FaComment />

                  <span>
                    {comments.length}
                  </span>

                </div>

              </div>

              {/* COMMENT BOX */}

              <div
                style={{

                  background:
                    "rgba(247,242,255,0.9)",

                  padding: "28px",

                  borderRadius: "28px",

                  marginBottom: "45px",

                  border:
                    "1px solid rgba(123,44,191,0.08)",
                }}
              >

                <h2
                  style={{
                    color: "#222",
                    marginBottom: "18px",
                  }}
                >
                  Join the discussion ✨
                </h2>

                <textarea
                  placeholder="Write your thoughts..."
                  value={comment}
                  onChange={(e) => {

                    setComment(
                      e.target.value
                    );
                  }}
                  style={{

                    width: "100%",

                    minHeight: "140px",

                    border: "none",

                    outline: "none",

                    padding: "22px",

                    borderRadius: "22px",

                    background:
                      "#ffffff",

                    resize: "none",

                    fontSize: "1rem",

                    color: "#444",

                    boxShadow:
                      "0 8px 20px rgba(123,44,191,0.06)",

                    marginBottom: "20px",
                  }}
                />

                <button
                  onClick={handleComment}
                  style={{

                    border: "none",

                    background:
                      "linear-gradient(to right,#7B2CBF,#9D4EDD)",

                    color: "#fff",

                    padding:
                      "15px 30px",

                    borderRadius: "18px",

                    cursor: "pointer",

                    fontWeight: "700",

                    display: "flex",

                    alignItems: "center",

                    gap: "10px",

                    fontSize: "1rem",

                    boxShadow:
                      "0 10px 25px rgba(123,44,191,0.25)",

                    transition: "0.3s",
                  }}
                >

                  <FaPaperPlane />

                  Post Comment

                </button>

              </div>

              {/* COMMENTS */}

              <div>

                <h2
                  style={{

                    marginBottom: "25px",

                    color: "#222",

                    fontSize: "2rem",
                  }}
                >
                  Community Comments 💜
                </h2>

                {comments.length > 0 ? (

                  comments.map((item) => (

                    <CommentCard
                      key={item._id}
                      comment={item}
                    />
                  ))

                ) : (

                  <div
                    style={{

                      padding: "40px",

                      borderRadius: "25px",

                      textAlign: "center",

                      background:
                        "rgba(255,255,255,0.75)",

                      backdropFilter:
                        "blur(10px)",
                    }}
                  >

                    <h3
                      style={{
                        color: "#666",
                      }}
                    >
                      No comments yet 😶
                    </h3>

                    <p
                      style={{
                        color: "#999",
                      }}
                    >
                      Be the first person to comment.
                    </p>

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </Container>

    </div>
  );
}

const actionButton = {

  border: "none",

  padding: "15px 24px",

  borderRadius: "18px",

  cursor: "pointer",

  display: "flex",

  alignItems: "center",

  gap: "12px",

  fontWeight: "700",

  transition: "0.3s",

  fontSize: "1rem",
};

export default BlogDetails;