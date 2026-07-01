import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  FaUserCircle,
  FaSignOutAlt,
  FaUser,
  FaHome,
  FaBookmark,
  FaPenFancy,
  FaThLarge,
} from "react-icons/fa";

import { useState } from "react";

import { logout } from "../redux/authSlice";

import Container from "./Container";

function Navbar() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector(
    (state) => state.auth
  );

  const [showMenu, setShowMenu] =
    useState(false);

  const handleLogout = () => {

    dispatch(logout());

    navigate("/login");
  };

  return (

    <nav
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 999,
        backdropFilter: "blur(14px)",
        background:
          "rgba(255,255,255,0.88)",
        borderBottom:
          "1px solid rgba(123,44,191,0.08)",
      }}
    >

      <Container>

        <div
          style={{
            height: "85px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >

          {/* LOGO */}

          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >

            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "800",
                background:
                  "linear-gradient(to right,#7B2CBF,#9D4EDD)",
                WebkitBackgroundClip:
                  "text",
                WebkitTextFillColor:
                  "transparent",
              }}
            >
              Blogify
            </h1>

          </Link>

          {/* NAVIGATION */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
            }}
          >

            {/* HOME */}

            <Link
              to="/"
              style={linkStyle}
            >

              <FaHome />

              Home

            </Link>

            {/* ABOUT */}

            <Link
              to="/about"
              style={linkStyle}
            >
              About
            </Link>

            {/* AUTH USER LINKS */}

            {user && (

              <>

                <Link
                  to="/dashboard"
                  style={linkStyle}
                >

                  <FaThLarge />

                  Dashboard

                </Link>

                <Link
                  to="/create-blog"
                  style={linkStyle}
                >

                  <FaPenFancy />

                  Create

                </Link>

                <Link
                  to="/bookmarks"
                  style={linkStyle}
                >

                  <FaBookmark />

                  Bookmarks

                </Link>

              </>
            )}

            {/* LOGIN */}

            {!user && (

              <Link
                to="/login"
                style={{
                  textDecoration:
                    "none",
                }}
              >

                <button
                  style={{
                    border: "none",
                    background:
                      "linear-gradient(to right,#7B2CBF,#9D4EDD)",
                    color: "#fff",
                    padding:
                      "13px 26px",
                    borderRadius:
                      "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow:
                      "0 10px 25px rgba(123,44,191,0.22)",
                  }}
                >
                  Login
                </button>

              </Link>
            )}

            {/* PROFILE */}

            {user && (

              <div
                style={{
                  position:
                    "relative",
                }}
              >

                {/* PROFILE BUTTON */}

                <button
                  onClick={() =>
                    setShowMenu(
                      !showMenu
                    )
                  }
                  style={{
                    border: "none",
                    background:
                      "linear-gradient(to right,#7B2CBF,#9D4EDD)",
                    width: "52px",
                    height: "52px",
                    borderRadius:
                      "50%",
                    color: "#fff",
                    display: "flex",
                    justifyContent:
                      "center",
                    alignItems:
                      "center",
                    fontSize:
                      "1.4rem",
                    cursor:
                      "pointer",
                    boxShadow:
                      "0 10px 25px rgba(123,44,191,0.2)",
                  }}
                >

                  <FaUserCircle />

                </button>

                {/* DROPDOWN */}

                {showMenu && (

                  <div
                    style={{
                      position:
                        "absolute",
                      top: "65px",
                      right: 0,
                      width:
                        "260px",
                      background:
                        "#fff",
                      borderRadius:
                        "24px",
                      overflow:
                        "hidden",
                      boxShadow:
                        "0 20px 50px rgba(0,0,0,0.1)",
                      border:
                        "1px solid #f1e8ff",
                      animation:
                        "fadeIn 0.3s ease",
                    }}
                  >

                    {/* TOP */}

                    <div
                      style={{
                        padding:
                          "25px",
                        background:
                          "linear-gradient(to right,#7B2CBF,#9D4EDD)",
                        color: "#fff",
                      }}
                    >

                      <div
                        style={{
                          display:
                            "flex",
                          alignItems:
                            "center",
                          gap: "14px",
                        }}
                      >

                        <div
                          style={{
                            width:
                              "55px",
                            height:
                              "55px",
                            borderRadius:
                              "50%",
                            background:
                              "rgba(255,255,255,0.18)",
                            display:
                              "flex",
                            justifyContent:
                              "center",
                            alignItems:
                              "center",
                            fontSize:
                              "1.6rem",
                          }}
                        >

                          <FaUserCircle />

                        </div>

                        <div>

                          <h3
                            style={{
                              fontWeight:
                                "700",
                              marginBottom:
                                "4px",
                            }}
                          >
                            {user}
                          </h3>

                          <p
                            style={{
                              fontSize:
                                "0.9rem",
                              opacity:
                                "0.9",
                            }}
                          >
                            Blogger
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* MENU */}

                    <div
                      style={{
                        padding:
                          "15px",
                      }}
                    >

                      <Link
                        to="/profile"
                        style={
                          menuStyle
                        }
                        onClick={() =>
                          setShowMenu(
                            false
                          )
                        }
                      >

                        <FaUser />

                        My Profile

                      </Link>

                      <button
                        onClick={
                          handleLogout
                        }
                        style={{
                          ...menuStyle,
                          border:
                            "none",
                          width:
                            "100%",
                          background:
                            "#fff5f5",
                          color:
                            "#ff3b3b",
                          cursor:
                            "pointer",
                          marginTop:
                            "10px",
                        }}
                      >

                        <FaSignOutAlt />

                        Logout

                      </button>

                    </div>

                  </div>
                )}

              </div>
            )}

          </div>

        </div>

      </Container>

      {/* ANIMATION */}

      <style>
        {`

          @keyframes fadeIn {

            from {

              opacity: 0;

              transform: translateY(10px);
            }

            to {

              opacity: 1;

              transform: translateY(0);
            }
          }

        `}
      </style>

    </nav>
  );
}

const linkStyle = {

  textDecoration: "none",

  color: "#444",

  fontWeight: "600",

  display: "flex",

  alignItems: "center",

  gap: "8px",

  transition: "0.3s",
};

const menuStyle = {

  display: "flex",

  alignItems: "center",

  gap: "12px",

  width: "100%",

  padding: "14px",

  borderRadius: "14px",

  textDecoration: "none",

  color: "#444",

  fontWeight: "600",

  background: "#faf7ff",
};

export default Navbar;