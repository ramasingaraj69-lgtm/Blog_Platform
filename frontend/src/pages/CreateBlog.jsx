import { useState } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { createBlog } from "../redux/blogSlice";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaArrowLeft,
} from "react-icons/fa";

function CreateBlog() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector(
    (state) => state.auth
  );

  const { loading } = useSelector(
    (state) => state.blogs
  );

  const [focused, setFocused] =
    useState("");

  const [formData, setFormData] =
    useState({

      title: "",

      description: "",

      image: "",
    });

  // SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.image
    ) {

      alert("All fields required");

      return;
    }

    const result = await dispatch(

      createBlog({

        ...formData,

        author: user,
      })
    );

    if (
      result.meta.requestStatus ===
      "fulfilled"
    ) {

      navigate("/");
    }
  };

  return (

    <div
      style={{

        minHeight: "100vh",

        width: "100%",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        padding: "40px 20px",

        backgroundImage:
          "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        position: "relative",

        overflow: "hidden",
      }}
    >

      {/* DARK OVERLAY */}

      <div
        style={{

          position: "absolute",

          inset: 0,

          background:
            "rgba(20,20,20,0.58)",

          backdropFilter: "blur(3px)",
        }}
      />

      {/* FLOATING GRADIENT BALLS */}

      <div
        style={{

          position: "absolute",

          width: "300px",

          height: "300px",

          borderRadius: "50%",

          background:
            "linear-gradient(to right,#7B2CBF,#9D4EDD)",

          opacity: 0.25,

          filter: "blur(30px)",

          top: "-80px",

          left: "-80px",

          animation:
            "floatOne 8s ease-in-out infinite",
        }}
      />

      <div
        style={{

          position: "absolute",

          width: "220px",

          height: "220px",

          borderRadius: "50%",

          background:
            "linear-gradient(to right,#ff4d6d,#ff758f)",

          opacity: 0.22,

          filter: "blur(30px)",

          bottom: "-40px",

          right: "-40px",

          animation:
            "floatTwo 7s ease-in-out infinite",
        }}
      />

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate("/")}
        style={{

          position: "absolute",

          top: "30px",

          left: "30px",

          zIndex: 20,

          border: "none",

          width: "58px",

          height: "58px",

          borderRadius: "50%",

          background:
            "rgba(255,255,255,0.15)",

          backdropFilter: "blur(10px)",

          color: "#fff",

          fontSize: "1.1rem",

          cursor: "pointer",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          transition: "0.3s",

          boxShadow:
            "0 10px 25px rgba(0,0,0,0.25)",
        }}

        onMouseEnter={(e) => {

          e.currentTarget.style.transform =
            "scale(1.08) translateX(-5px)";

          e.currentTarget.style.background =
            "rgba(255,255,255,0.25)";
        }}

        onMouseLeave={(e) => {

          e.currentTarget.style.transform =
            "scale(1)";

          e.currentTarget.style.background =
            "rgba(255,255,255,0.15)";
        }}
      >

        <FaArrowLeft />

      </button>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        style={{

          position: "relative",

          zIndex: 10,

          width: "100%",

          maxWidth: "720px",

          padding: "50px",

          borderRadius: "35px",

          background:
            "rgba(255,255,255,0.12)",

          backdropFilter: "blur(20px)",

          border:
            "1px solid rgba(255,255,255,0.2)",

          boxShadow:
            "0 12px 45px rgba(0,0,0,0.25)",

          animation:
            "fadeUp 0.8s ease",
        }}
      >

        {/* TITLE */}

        <h1
          style={{

            fontSize: "3rem",

            color: "#fff",

            marginBottom: "12px",

            fontWeight: "700",

            letterSpacing: "1px",
          }}
        >
          Create Blog ✨
        </h1>

        {/* SUBTEXT */}

        <p
          style={{

            color:
              "rgba(255,255,255,0.82)",

            marginBottom: "35px",

            fontSize: "1rem",

            lineHeight: "1.8",
          }}
        >
          Share your creativity and
          inspire thousands of readers
          around the world with your
          amazing stories.
        </p>

        {/* TITLE INPUT */}

        <input
          type="text"

          placeholder="Enter blog title"

          value={formData.title}

          onFocus={() =>
            setFocused("title")
          }

          onBlur={() =>
            setFocused("")
          }

          onChange={(e) =>
            setFormData({

              ...formData,

              title: e.target.value,
            })
          }

          style={{

            width: "100%",

            padding: "18px",

            borderRadius: "18px",

            border:
              focused === "title"
                ? "2px solid #9D4EDD"
                : "1px solid rgba(255,255,255,0.2)",

            background:
              "rgba(255,255,255,0.08)",

            color: "#fff",

            outline: "none",

            marginBottom: "20px",

            fontSize: "1rem",

            transition: "0.3s",

            backdropFilter:
              "blur(10px)",
          }}
        />

        {/* DESCRIPTION */}

        <textarea
          placeholder="Write your blog content..."

          value={formData.description}

          onFocus={() =>
            setFocused("description")
          }

          onBlur={() =>
            setFocused("")
          }

          onChange={(e) =>
            setFormData({

              ...formData,

              description:
                e.target.value,
            })
          }

          style={{

            width: "100%",

            height: "220px",

            padding: "18px",

            borderRadius: "18px",

            border:
              focused ===
              "description"
                ? "2px solid #9D4EDD"
                : "1px solid rgba(255,255,255,0.2)",

            background:
              "rgba(255,255,255,0.08)",

            color: "#fff",

            outline: "none",

            resize: "none",

            marginBottom: "20px",

            fontSize: "1rem",

            transition: "0.3s",

            backdropFilter:
              "blur(10px)",
          }}
        />

        {/* IMAGE */}

        <input
          type="text"

          placeholder="Paste image URL"

          value={formData.image}

          onFocus={() =>
            setFocused("image")
          }

          onBlur={() =>
            setFocused("")
          }

          onChange={(e) =>
            setFormData({

              ...formData,

              image: e.target.value,
            })
          }

          style={{

            width: "100%",

            padding: "18px",

            borderRadius: "18px",

            border:
              focused === "image"
                ? "2px solid #9D4EDD"
                : "1px solid rgba(255,255,255,0.2)",

            background:
              "rgba(255,255,255,0.08)",

            color: "#fff",

            outline: "none",

            marginBottom: "30px",

            fontSize: "1rem",

            transition: "0.3s",

            backdropFilter:
              "blur(10px)",
          }}
        />

        {/* BUTTON */}

        <button
          type="submit"

          disabled={loading}

          style={{

            width: "100%",

            padding: "18px",

            border: "none",

            borderRadius: "18px",

            background:
              "linear-gradient(to right,#7B2CBF,#9D4EDD)",

            color: "#fff",

            fontSize: "1rem",

            fontWeight: "700",

            cursor: "pointer",

            transition: "0.3s",

            boxShadow:
              "0 12px 30px rgba(123,44,191,0.4)",
          }}

          onMouseEnter={(e) => {

            e.currentTarget.style.transform =
              "translateY(-3px)";
          }}

          onMouseLeave={(e) => {

            e.currentTarget.style.transform =
              "translateY(0px)";
          }}
        >

          {loading
            ? "Publishing..."
            : "Publish Blog 🚀"}

        </button>

      </form>

      {/* STYLES */}

      <style>

        {`

          input::placeholder,
          textarea::placeholder {

            color:
              rgba(255,255,255,0.7);
          }

          @keyframes fadeUp {

            from {

              opacity: 0;

              transform:
                translateY(40px);
            }

            to {

              opacity: 1;

              transform:
                translateY(0px);
            }
          }

          @keyframes floatOne {

            0% {

              transform:
                translateY(0px)
                translateX(0px);
            }

            50% {

              transform:
                translateY(25px)
                translateX(15px);
            }

            100% {

              transform:
                translateY(0px)
                translateX(0px);
            }
          }

          @keyframes floatTwo {

            0% {

              transform:
                translateY(0px)
                translateX(0px);
            }

            50% {

              transform:
                translateY(-20px)
                translateX(-10px);
            }

            100% {

              transform:
                translateY(0px)
                translateX(0px);
            }
          }

          @media(max-width: 768px) {

            form {

              padding:
                35px 25px !important;
            }

            h1 {

              font-size:
                2.2rem !important;
            }
          }

        `}

      </style>

    </div>
  );
}

export default CreateBlog;