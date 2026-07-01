import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import Container from "../components/Container";

import {
  FaEnvelope,
  FaPenFancy,
  FaSignOutAlt,
  FaCamera,
  FaHeart,
  FaBookmark,
} from "react-icons/fa";

import { logout } from "../redux/authSlice";

function Profile() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector(
    (state) => state.auth
  );

  const { blogs } = useSelector(
    (state) => state.blogs
  );

  const myBlogs =
    blogs?.filter(
      (blog) =>
        blog.author === user
    ) || [];

  const totalLikes =
    myBlogs.reduce(
      (total, blog) =>
        total +
        (blog.likes
          ? blog.likes.length
          : 0),
      0
    );

  const [profileImage, setProfileImage] =
    useState(
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1170&auto=format&fit=crop"
    );

  const handleLogout = () => {

    dispatch(logout());

    navigate("/login");
  };

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl =
        URL.createObjectURL(file);

      setProfileImage(imageUrl);
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#f3e8ff,#ffffff,#f8fafc)",
        overflow: "hidden",
        position: "relative",
      }}
    >

      <Navbar />

      {/* BACKGROUND CIRCLES */}

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "rgba(123,44,191,0.12)",
          top: "-80px",
          left: "-80px",
          filter: "blur(10px)",
          animation:
            "float 6s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "rgba(199,125,255,0.15)",
          bottom: "-60px",
          right: "-60px",
          filter: "blur(10px)",
          animation:
            "float 4s ease-in-out infinite",
        }}
      />

      <Container>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "60px 15px",
          }}
        >

          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              background:
                "rgba(255,255,255,0.88)",
              backdropFilter:
                "blur(16px)",
              borderRadius: "35px",
              overflow: "hidden",
              boxShadow:
                "0 20px 60px rgba(123,44,191,0.12)",
              border:
                "1px solid rgba(255,255,255,0.3)",
              animation:
                "fadeUp 0.8s ease",
            }}
          >

            {/* COVER */}

            <div
              style={{
                height: "260px",
                background:
                  "linear-gradient(135deg,#7B2CBF,#9D4EDD,#C77DFF)",
                position: "relative",
                overflow: "hidden",
              }}
            >

              {/* GLOW */}

              <div
                style={{
                  position: "absolute",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background:
                    "rgba(255,255,255,0.12)",
                  top: "-100px",
                  right: "-60px",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  background:
                    "rgba(255,255,255,0.08)",
                  bottom: "-60px",
                  left: "-40px",
                }}
              />

              {/* PROFILE IMAGE */}

              <div
                style={{
                  position: "absolute",
                  bottom: "-80px",
                  left: "50%",
                  transform:
                    "translateX(-50%)",
                }}
              >

                <div
                  style={{
                    position: "relative",
                  }}
                >

                  <img
                    src={profileImage}
                    alt="profile"
                    style={{
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border:
                        "6px solid #fff",
                      boxShadow:
                        "0 15px 35px rgba(0,0,0,0.2)",
                      animation:
                        "zoomIn 0.8s ease",
                    }}
                  />

                  {/* CAMERA BUTTON */}

                  <label
                    htmlFor="profileUpload"
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      right: "8px",
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(to right,#7B2CBF,#9D4EDD)",
                      display: "flex",
                      justifyContent:
                        "center",
                      alignItems:
                        "center",
                      color: "#fff",
                      cursor: "pointer",
                      border:
                        "3px solid #fff",
                      boxShadow:
                        "0 5px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    <FaCamera />
                  </label>

                  <input
                    id="profileUpload"
                    type="file"
                    accept="image/*"
                    onChange={
                      handleImageUpload
                    }
                    style={{
                      display: "none",
                    }}
                  />

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div
              style={{
                padding:
                  "110px 35px 45px",
                textAlign: "center",
              }}
            >

              {/* NAME */}

              <h1
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "10px",
                  color: "#222",
                  fontWeight: "800",
                }}
              >
                {user || "User"}
              </h1>

              {/* EMAIL */}

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "center",
                  alignItems:
                    "center",
                  gap: "10px",
                  color: "#666",
                  marginBottom: "40px",
                  fontSize: "1rem",
                }}
              >

                <FaEnvelope />

                <span>
                  {user
                    ? `${user}@gmail.com`
                    : "user@gmail.com"}
                </span>

              </div>

              {/* STATS */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(220px,1fr))",
                  gap: "25px",
                  marginBottom: "45px",
                }}
              >

                <div style={statsCard}>

                  <div style={iconBox}>
                    <FaPenFancy />
                  </div>

                  <h2 style={numberStyle}>
                    {myBlogs.length}
                  </h2>

                  <p style={textStyle}>
                    Blogs Created
                  </p>

                </div>

                <div style={statsCard}>

                  <div style={iconBox}>
                    <FaHeart />
                  </div>

                  <h2 style={numberStyle}>
                    {totalLikes}
                  </h2>

                  <p style={textStyle}>
                    Total Likes
                  </p>

                </div>

                <div style={statsCard}>

                  <div style={iconBox}>
                    <FaBookmark />
                  </div>

                  <h2 style={numberStyle}>
                    {myBlogs.length * 2}
                  </h2>

                  <p style={textStyle}>
                    Engagement
                  </p>

                </div>

              </div>

              {/* LOGOUT BUTTON */}

              <button
                onClick={handleLogout}
                style={{
                  border: "none",
                  padding:
                    "16px 35px",
                  borderRadius:
                    "16px",
                  background:
                    "linear-gradient(to right,#ff4d4d,#ff6b6b)",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems:
                    "center",
                  gap: "12px",
                  boxShadow:
                    "0 10px 25px rgba(255,77,77,0.25)",
                  transition:
                    "0.3s ease",
                }}
                onMouseEnter={(e) => {

                  e.target.style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {

                  e.target.style.transform =
                    "translateY(0px)";
                }}
              >

                <FaSignOutAlt />

                Logout

              </button>

            </div>

          </div>

        </div>

      </Container>

      {/* ANIMATIONS */}

      <style>
        {`

          *{

            box-sizing:border-box;
          }

          @keyframes fadeUp {

            from {

              opacity: 0;

              transform: translateY(50px);
            }

            to {

              opacity: 1;

              transform: translateY(0);
            }
          }

          @keyframes float {

            0% {

              transform: translateY(0px);
            }

            50% {

              transform: translateY(20px);
            }

            100% {

              transform: translateY(0px);
            }
          }

          @keyframes zoomIn {

            from {

              opacity: 0;

              transform: scale(0.8);
            }

            to {

              opacity: 1;

              transform: scale(1);
            }
          }

          @media(max-width:768px){

            h1{

              font-size:2rem !important;
            }
          }

        `}
      </style>

    </div>
  );
}

const statsCard = {

  background:
    "rgba(255,255,255,0.8)",

  border:
    "1px solid rgba(123,44,191,0.1)",

  padding: "35px 25px",

  borderRadius: "25px",

  backdropFilter:
    "blur(10px)",

  boxShadow:
    "0 10px 30px rgba(123,44,191,0.08)",

  transition: "0.3s ease",
};

const iconBox = {

  width: "70px",

  height: "70px",

  borderRadius: "22px",

  background:
    "linear-gradient(to right,#7B2CBF,#C77DFF)",

  display: "flex",

  justifyContent: "center",

  alignItems: "center",

  color: "#fff",

  fontSize: "1.5rem",

  margin: "0 auto 20px",
};

const numberStyle = {

  fontSize: "2.5rem",

  color: "#7B2CBF",

  marginBottom: "10px",

  fontWeight: "800",
};

const textStyle = {

  color: "#666",

  fontWeight: "600",
};

export default Profile;