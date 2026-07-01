import {
  FaTrash,
} from "react-icons/fa";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  deleteComment,
} from "../redux/commentSlice";

import { toast } from "react-toastify";

function CommentCard({ comment }) {

  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.auth.user
  );

  // OWNER CHECK
  let isOwner = false;

  if (user === comment.user) {

    isOwner = true;
  }

  // DELETE COMMENT
  const handleDelete = () => {

    const confirmDelete =
      window.confirm(
        "Delete this comment?"
      );

    if (confirmDelete) {

      dispatch(
        deleteComment(comment._id)
      );

      toast.error(
        "Comment deleted"
      );
    }
  };

  return (

    <div
      style={{

        background:
          "rgba(255,255,255,0.75)",

        backdropFilter:
          "blur(18px)",

        border:
          "1px solid rgba(255,255,255,0.35)",

        padding: "24px",

        borderRadius: "28px",

        marginBottom: "20px",

        boxShadow:
          "0 10px 35px rgba(123,44,191,0.08)",

        transition: "0.25s",
      }}
    >

      {/* TOP */}

      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "18px",
        }}
      >

        {/* USER INFO */}

        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "14px",
          }}
        >

          {/* AVATAR */}

          <div
            style={{

              width: "52px",

              height: "52px",

              borderRadius: "50%",

              background:
                "linear-gradient(to right,#7B2CBF,#9D4EDD)",

              display: "flex",

              justifyContent:
                "center",

              alignItems: "center",

              color: "#fff",

              fontWeight: "700",

              fontSize: "1.1rem",

              boxShadow:
                "0 6px 16px rgba(123,44,191,0.25)",
            }}
          >

            {
              comment.user
                ? comment.user
                    .charAt(0)
                    .toUpperCase()
                : "U"
            }

          </div>

          {/* NAME */}

          <div>

            <h4
              style={{

                margin: 0,

                color: "#222",

                fontSize: "1rem",

                fontWeight: "700",
              }}
            >
              {
                comment.user ||
                "Unknown User"
              }
            </h4>

            <p
              style={{

                margin: "4px 0 0",

                color: "#888",

                fontSize: "0.85rem",
              }}
            >
              Blog Reader
            </p>

          </div>

        </div>

        {/* DELETE BUTTON */}

        {isOwner && (

          <button
            onClick={handleDelete}
            style={{

              border: "none",

              background:
                "#fff0f0",

              width: "40px",

              height: "40px",

              borderRadius: "50%",

              cursor: "pointer",

              display: "flex",

              justifyContent:
                "center",

              alignItems: "center",

              transition: "0.2s",
            }}
          >

            <FaTrash
              style={{
                color: "#ff3b3b",
                fontSize: "0.95rem",
              }}
            />

          </button>
        )}

      </div>

      {/* COMMENT */}

      <div
        style={{

          background:
            "#faf7ff",

          padding: "18px",

          borderRadius: "18px",

          border:
            "1px solid #f0e7ff",
        }}
      >

        <p
          style={{

            margin: 0,

            color: "#555",

            lineHeight: "1.8",

            fontSize: "0.97rem",

            wordBreak: "break-word",
          }}
        >
          {
            comment.message ||
            "No comment"
          }
        </p>

      </div>

    </div>
  );
}

export default CommentCard;