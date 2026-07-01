import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../redux/authSlice";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

function Login() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const [focused, setFocused] =
    useState("");

  const [formData, setFormData] =
    useState({

      email: "",

      password: "",
    });

  const handleSubmit = async (e) => {

    e.preventDefault();

    const result = await dispatch(
      loginUser(formData)
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
        background:
          "linear-gradient(to right,#f5eeff,#ffffff)",
        overflow: "hidden",
        position: "relative",
      }}
    >

      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "rgba(123,44,191,0.12)",
          top: "-150px",
          left: "-150px",
          filter: "blur(40px)",
          animation:
            "pulseGlow 6s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "rgba(157,78,221,0.10)",
          bottom: "-150px",
          right: "-100px",
          filter: "blur(40px)",
          animation:
            "pulseGlow 8s ease-in-out infinite",
        }}
      />

      {/* LEFT SIDE */}

      <div
        className="left-panel"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          position: "relative",
          zIndex: 10,
        }}
      >

        {/* FLOATING SHAPES */}

        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background:
              "rgba(123,44,191,0.08)",
            top: "60px",
            left: "80px",
            animation:
              "float 6s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            borderRadius: "30px",
            background:
              "rgba(157,78,221,0.08)",
            bottom: "100px",
            right: "100px",
            transform: "rotate(25deg)",
            animation:
              "rotateBox 10s linear infinite",
          }}
        />

        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "470px",
            background:
              "rgba(255,255,255,0.88)",
            backdropFilter:
              "blur(20px)",
            padding: "50px",
            borderRadius: "35px",
            border:
              "1px solid rgba(255,255,255,0.4)",
            boxShadow:
              "0 20px 60px rgba(123,44,191,0.12)",
            animation:
              "slideLeft 0.9s ease",
            position: "relative",
            overflow: "hidden",
          }}
        >

          {/* TOP LIGHT */}

          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background:
                "rgba(157,78,221,0.12)",
              filter: "blur(20px)",
            }}
          />

          <p
            style={{
              color: "#7B2CBF",
              fontWeight: "700",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            WELCOME BACK
          </p>

          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "10px",
              color: "#222",
              fontWeight: "800",
            }}
          >
            Login
          </h1>

          <p
            style={{
              color: "#777",
              marginBottom: "35px",
              lineHeight: "1.8",
            }}
          >
            Continue your blogging journey
            and explore trending stories.
          </p>

          {/* EMAIL */}

          <div
            style={{
              position: "relative",
              marginBottom: "22px",
            }}
          >

            <FaEnvelope
              style={{
                position: "absolute",
                top: "20px",
                left: "18px",
                color:
                  focused === "email"
                    ? "#7B2CBF"
                    : "#999",
                transition: "0.3s",
              }}
            />

            <input
              type="email"
              placeholder="Email Address"
              onFocus={() =>
                setFocused("email")
              }
              onBlur={() =>
                setFocused("")
              }
              onChange={(e) =>
                setFormData({

                  ...formData,

                  email:
                    e.target.value,
                })
              }
              style={{
                width: "100%",
                padding:
                  "18px 18px 18px 50px",
                borderRadius: "18px",
                border:
                  focused === "email"
                    ? "2px solid #7B2CBF"
                    : "1px solid #e5d9ff",
                outline: "none",
                transition: "0.3s",
                fontSize: "1rem",
                background:
                  "#faf7ff",
                boxShadow:
                  focused === "email"
                    ? "0 0 20px rgba(123,44,191,0.12)"
                    : "none",
              }}
            />

          </div>

          {/* PASSWORD */}

          <div
            style={{
              position: "relative",
              marginBottom: "22px",
            }}
          >

            <FaLock
              style={{
                position: "absolute",
                top: "20px",
                left: "18px",
                color:
                  focused ===
                  "password"
                    ? "#7B2CBF"
                    : "#999",
                transition: "0.3s",
              }}
            />

            <input
              type="password"
              placeholder="Password"
              onFocus={() =>
                setFocused("password")
              }
              onBlur={() =>
                setFocused("")
              }
              onChange={(e) =>
                setFormData({

                  ...formData,

                  password:
                    e.target.value,
                })
              }
              style={{
                width: "100%",
                padding:
                  "18px 18px 18px 50px",
                borderRadius: "18px",
                border:
                  focused ===
                  "password"
                    ? "2px solid #7B2CBF"
                    : "1px solid #e5d9ff",
                outline: "none",
                transition: "0.3s",
                fontSize: "1rem",
                background:
                  "#faf7ff",
                boxShadow:
                  focused ===
                  "password"
                    ? "0 0 20px rgba(123,44,191,0.12)"
                    : "none",
              }}
            />

          </div>

          {/* ERROR */}

          {error && (

            <p
              style={{
                color: "#ff2d55",
                marginBottom: "18px",
                fontWeight: "600",
              }}
            >
              Invalid credentials
            </p>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "18px",
              background:
                "linear-gradient(to right,#7B2CBF,#9D4EDD,#C77DFF)",
              color: "#fff",
              border: "none",
              borderRadius: "18px",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "0.3s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              boxShadow:
                "0 15px 35px rgba(123,44,191,0.3)",
            }}
          >

            {loading
              ? "Logging in..."
              : "Login"}

            {!loading && (
              <FaArrowRight />
            )}

          </button>

          {/* REGISTER */}

          <p
            style={{
              marginTop: "28px",
              textAlign: "center",
              color: "#666",
            }}
          >
            Don’t have an account?{" "}

            <Link
              to="/register"
              style={{
                color: "#7B2CBF",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </p>

        </form>

      </div>

      {/* RIGHT SIDE */}

      <div
        className="right-panel"
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          background:
            "linear-gradient(135deg,#7B2CBF,#9D4EDD,#C77DFF)",
          overflow: "hidden",
        }}
      >

        {/* FLOATING BLOBS */}

        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background:
              "rgba(255,255,255,0.10)",
            top: "-60px",
            right: "-60px",
            animation:
              "float 7s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background:
              "rgba(255,255,255,0.10)",
            bottom: "30px",
            left: "30px",
            animation:
              "float 5s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            borderRadius: "30px",
            background:
              "rgba(255,255,255,0.08)",
            top: "120px",
            left: "100px",
            transform:
              "rotate(25deg)",
            animation:
              "rotateBox 12s linear infinite",
          }}
        />

        <div
          style={{
            zIndex: 10,
            textAlign: "center",
            color: "#fff",
            animation:
              "slideRight 1s ease",
          }}
        >

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt=""
            style={{
              width: "100%",
              maxWidth: "460px",
              borderRadius: "35px",
              objectFit: "cover",
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.25)",
              marginBottom: "35px",
              animation:
                "floatImage 6s ease-in-out infinite",
            }}
          />

          <h1
            style={{
              fontSize: "3.2rem",
              marginBottom: "15px",
              fontWeight: "800",
            }}
          >
            Welcome to Blogify
          </h1>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              maxWidth: "520px",
              margin: "0 auto",
              color:
                "rgba(255,255,255,0.92)",
            }}
          >
            Discover inspiring stories,
            trending blogs and connect
            with creative writers across
            the world.
          </p>

        </div>

      </div>

      {/* ANIMATIONS */}

      <style>
        {`

          *{
            box-sizing:border-box;
          }

          @keyframes slideLeft {

            from {

              opacity: 0;

              transform:
                translateX(-60px);
            }

            to {

              opacity: 1;

              transform:
                translateX(0);
            }
          }

          @keyframes slideRight {

            from {

              opacity: 0;

              transform:
                translateX(60px);
            }

            to {

              opacity: 1;

              transform:
                translateX(0);
            }
          }

          @keyframes float {

            0% {

              transform:
                translateY(0px);
            }

            50% {

              transform:
                translateY(20px);
            }

            100% {

              transform:
                translateY(0px);
            }
          }

          @keyframes floatImage {

            0% {

              transform:
                translateY(0px);
            }

            50% {

              transform:
                translateY(-15px);
            }

            100% {

              transform:
                translateY(0px);
            }
          }

          @keyframes rotateBox {

            from {

              transform:
                rotate(0deg);
            }

            to {

              transform:
                rotate(360deg);
            }
          }

          @keyframes pulseGlow {

            0% {

              transform: scale(1);
            }

            50% {

              transform: scale(1.1);
            }

            100% {

              transform: scale(1);
            }
          }

          button:hover {

            transform:
              translateY(-4px)
              scale(1.02);
          }

          input:hover {

            transform:
              translateY(-2px);
          }

          @media(max-width: 950px) {

            .right-panel {

              display: none !important;
            }

            .left-panel {

              width: 100%;
            }
          }

          @media(max-width: 600px) {

            form {

              padding: 35px 25px !important;
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

export default Login;