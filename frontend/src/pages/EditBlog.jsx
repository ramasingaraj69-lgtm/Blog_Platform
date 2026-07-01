import {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  updateBlog,
} from "../redux/blogSlice";

import {
  FaArrowLeft,
  FaPenFancy,
  FaImage,
  FaAlignLeft,
} from "react-icons/fa";

function EditBlog() {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { blogs } = useSelector(
    (state) => state.blogs
  );

  const blog = blogs.find(
    (b) => b._id === id
  );

  const [focused, setFocused] =
    useState("");

  const [formData, setFormData] =
    useState({

      title: "",

      description: "",

      image: "",
    });

  // LOAD BLOG DATA
  useEffect(() => {

    if (blog) {

      setFormData({

        title: blog.title,

        description:
          blog.description,

        image: blog.image,
      });
    }

  }, [blog]);

  // UPDATE BLOG
  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.image
    ) {

      alert("All fields required");

      return;
    }

    dispatch(

      updateBlog({

        id,

        data: formData,
      })
    );

    navigate("/");
  };

  // NOT FOUND
  if (!blog) {

    return (

      <div
        style={{

          minHeight: "100vh",

          display: "flex",

          justifyContent:
            "center",

          alignItems: "center",

          background:
            "linear-gradient(to right,#7B2CBF,#C77DFF)",

          color: "#fff",
        }}
      >

        <h1>
          Blog not found
        </h1>

      </div>
    );
  }

  return (

    <div
      style={{

        minHeight: "100vh",

        display: "flex",

        justifyContent:
          "center",

        alignItems: "center",

        padding: "40px 20px",

        position: "relative",

        overflow: "hidden",

        backgroundImage:
          "url('https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1600&auto=format&fit=crop')",

        backgroundSize: "cover",

        backgroundPosition:
          "center",
      }}
    >

      {/* DARK OVERLAY */}

      <div
        style={{

          position: "absolute",

          inset: 0,

          background:
            "rgba(18,18,18,0.65)",

          backdropFilter:
            "blur(4px)",
        }}
      />

      {/* GLOW EFFECTS */}

      <div
        style={{

          position: "absolute",

          width: "300px",

          height: "300px",

          borderRadius: "50%",

          background:
            "#9D4EDD",

          opacity: 0.18,

          filter:
            "blur(60px)",

          top: "-80px",

          left: "-80px",

          animation:
            "floatOne 8s ease-in-out infinite",
        }}
      />

      <div
        style={{

          position: "absolute",

          width: "250px",

          height: "250px",

          borderRadius: "50%",

          background:
            "#ff4d6d",

          opacity: 0.18,

          filter:
            "blur(60px)",

          bottom: "-50px",

          right: "-50px",

          animation:
            "floatTwo 7s ease-in-out infinite",
        }}
      />

      {/* BACK BUTTON */}

      <button
        onClick={() =>
          navigate("/")
        }
        style={{

          position: "absolute",

          top: "30px",

          left: "30px",

          zIndex: 10,

          width: "58px",

          height: "58px",

          borderRadius: "50%",

          border: "none",

          cursor: "pointer",

          background:
            "rgba(255,255,255,0.15)",

          backdropFilter:
            "blur(10px)",

          color: "#fff",

          display: "flex",

          justifyContent:
            "center",

          alignItems: "center",

          fontSize: "1.1rem",

          transition: "0.3s",

          boxShadow:
            "0 10px 25px rgba(0,0,0,0.25)",
        }}

        onMouseEnter={(e) => {

          e.currentTarget.style.transform =
            "translateX(-4px) scale(1.08)";
        }}

        onMouseLeave={(e) => {

          e.currentTarget.style.transform =
            "translateX(0px) scale(1)";
        }}
      >

        <FaArrowLeft />

      </button>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        style={{

          position: "relative",

          zIndex: 5,

          width: "100%",

          maxWidth: "760px",

          background:
            "rgba(255,255,255,0.12)",

          backdropFilter:
            "blur(20px)",

          border:
            "1px solid rgba(255,255,255,0.2)",

          borderRadius: "35px",

          padding: "50px",

          color: "#fff",

          boxShadow:
            "0 25px 60px rgba(0,0,0,0.25)",

          animation:
            "fadeUp 0.8s ease",
        }}
      >

        {/* HEADING */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >

          <div
            style={{

              width: "90px",

              height: "90px",

              margin: "0 auto 20px",

              borderRadius: "50%",

              background:
                "linear-gradient(to right,#7B2CBF,#9D4EDD)",

              display: "flex",

              justifyContent:
                "center",

              alignItems: "center",

              fontSize: "2rem",

              boxShadow:
                "0 10px 30px rgba(123,44,191,0.4)",
            }}
          >

            <FaPenFancy />

          </div>

          <h1
            style={{

              fontSize: "2.8rem",

              marginBottom: "10px",
            }}
          >
            Edit Blog ✨
          </h1>

          <p
            style={{
              color:
                "rgba(255,255,255,0.75)",
              lineHeight: "1.8",
            }}
          >
            Update your content and
            make your blog even more
            engaging.
          </p>

        </div>

        {/* TITLE */}

        <div
          style={{
            marginBottom: "20px",
          }}
        >

          <label
            style={labelStyle}
          >

            <FaPenFancy />

            Blog Title

          </label>

          <input
            type="text"

            value={formData.title}

            placeholder="Enter title"

            onFocus={() =>
              setFocused("title")
            }

            onBlur={() =>
              setFocused("")
            }

            onChange={(e) =>
              setFormData({

                ...formData,

                title:
                  e.target.value,
              })
            }

            style={{
              ...inputStyle,
              border:
                focused ===
                "title"
                  ? "2px solid #9D4EDD"
                  : inputStyle.border,
            }}
          />

        </div>

        {/* DESCRIPTION */}

        <div
          style={{
            marginBottom: "20px",
          }}
        >

          <label
            style={labelStyle}
          >

            <FaAlignLeft />

            Description

          </label>

          <textarea
            value={
              formData.description
            }

            placeholder="Write description..."

            onFocus={() =>
              setFocused(
                "description"
              )
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
              ...inputStyle,

              height: "220px",

              resize: "none",

              border:
                focused ===
                "description"
                  ? "2px solid #9D4EDD"
                  : inputStyle.border,
            }}
          />

        </div>

        {/* IMAGE */}

        <div
          style={{
            marginBottom: "30px",
          }}
        >

          <label
            style={labelStyle}
          >

            <FaImage />

            Image URL

          </label>

          <input
            type="text"

            value={formData.image}

            placeholder="Paste image URL"

            onFocus={() =>
              setFocused("image")
            }

            onBlur={() =>
              setFocused("")
            }

            onChange={(e) =>
              setFormData({

                ...formData,

                image:
                  e.target.value,
              })
            }

            style={{
              ...inputStyle,
              border:
                focused ===
                "image"
                  ? "2px solid #9D4EDD"
                  : inputStyle.border,
            }}
          />

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          style={{

            width: "100%",

            padding: "18px",

            border: "none",

            borderRadius: "18px",

            background:
              "linear-gradient(to right,#7B2CBF,#9D4EDD)",

            color: "#fff",

            fontWeight: "700",

            fontSize: "1rem",

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

          Update Blog 🚀

        </button>

      </form>

      {/* STYLES */}

      <style>

        {`

          input::placeholder,
          textarea::placeholder {

            color:
              rgba(255,255,255,0.65);
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
                translateY(0px);
            }

            50% {

              transform:
                translateY(25px);
            }

            100% {

              transform:
                translateY(0px);
            }
          }

          @keyframes floatTwo {

            0% {

              transform:
                translateY(0px);
            }

            50% {

              transform:
                translateY(-25px);
            }

            100% {

              transform:
                translateY(0px);
            }
          }

          @media(max-width:768px){

            form{

              padding:
                35px 25px !important;
            }

            h1{

              font-size:
                2.2rem !important;
            }
          }

        `}

      </style>

    </div>
  );
}

const labelStyle = {

  display: "flex",

  alignItems: "center",

  gap: "10px",

  marginBottom: "12px",

  fontWeight: "600",

  color: "#fff",
};

const inputStyle = {

  width: "100%",

  padding: "18px",

  borderRadius: "18px",

  border:
    "1px solid rgba(255,255,255,0.2)",

  background:
    "rgba(255,255,255,0.08)",

  color: "#fff",

  outline: "none",

  fontSize: "1rem",

  transition: "0.3s",

  backdropFilter:
    "blur(10px)",
};

export default EditBlog;