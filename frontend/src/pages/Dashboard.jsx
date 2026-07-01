import {
  useSelector,
} from "react-redux";

import Navbar from "../components/Navbar";

import Container from "../components/Container";

import BlogCard from "../components/BlogCard";

import {
  Link,
} from "react-router-dom";

import {
  FaPenNib,
  FaFire,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";

function Dashboard() {

  const { user } = useSelector(
    (state) => state.auth
  );

  const { blogs } = useSelector(
    (state) => state.blogs
  );

  // MY BLOGS
  const myBlogs = blogs.filter(
    (blog) => {

      return (
        blog.author === user
      );
    }
  );

  // TOTAL LIKES
  const totalLikes =
    myBlogs.reduce(
      (total, blog) => {

        if (blog.likes) {

          return (
            total +
            blog.likes.length
          );
        }

        return total;
      },

      0
    );

  return (

    <div
      style={{

        minHeight: "100vh",

        background:
          "linear-gradient(to bottom right,#f5efff,#ffffff,#f8f5ff)",

        position: "relative",

        overflow: "hidden",
      }}
    >

      {/* BACKGROUND GLOW */}

      <div
        style={{

          position: "absolute",

          width: "350px",

          height: "350px",

          borderRadius: "50%",

          background:
            "linear-gradient(to right,#7B2CBF,#9D4EDD)",

          opacity: 0.15,

          filter: "blur(50px)",

          top: "-100px",

          left: "-100px",

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
            "linear-gradient(to right,#ff758f,#ff4d6d)",

          opacity: 0.14,

          filter: "blur(50px)",

          bottom: "-50px",

          right: "-50px",

          animation:
            "floatTwo 6s ease-in-out infinite",
        }}
      />

      <Navbar />

      <Container>

        <div
          style={{
            padding: "50px 0",
            position: "relative",
            zIndex: 2,
          }}
        >

          {/* HERO */}

          <div
            style={{

              background:
                "rgba(255,255,255,0.65)",

              backdropFilter:
                "blur(20px)",

              border:
                "1px solid rgba(255,255,255,0.3)",

              borderRadius: "35px",

              padding: "45px",

              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              flexWrap: "wrap",

              gap: "30px",

              marginBottom: "45px",

              boxShadow:
                "0 15px 40px rgba(123,44,191,0.08)",

              animation:
                "fadeUp 0.8s ease",
            }}
          >

            {/* LEFT */}

            <div>

              <h1
                style={{

                  fontSize: "3rem",

                  color: "#222",

                  marginBottom: "12px",

                  lineHeight: "1.2",
                }}
              >
                Welcome back,
                <br />

                <span
                  style={{
                    color: "#7B2CBF",
                  }}
                >
                  @{user}
                </span>
              </h1>

              <p
                style={{

                  color: "#666",

                  lineHeight: "1.8",

                  maxWidth: "600px",
                }}
              >
                Manage your blogs,
                monitor engagement,
                and continue sharing
                your ideas with the
                world.
              </p>

            </div>

            {/* BUTTON */}

            <Link
              to="/create-blog"
              style={{
                textDecoration: "none",
              }}
            >

              <button
                style={{

                  border: "none",

                  padding:
                    "18px 30px",

                  borderRadius:
                    "18px",

                  background:
                    "linear-gradient(to right,#7B2CBF,#9D4EDD)",

                  color: "#fff",

                  fontWeight: "700",

                  cursor: "pointer",

                  display: "flex",

                  alignItems: "center",

                  gap: "10px",

                  fontSize: "1rem",

                  transition: "0.3s",

                  boxShadow:
                    "0 12px 30px rgba(123,44,191,0.25)",
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

                <FaPenNib />

                Create Blog

                <FaArrowRight />

              </button>

            </Link>

          </div>

          {/* STATS */}

          <div
            style={{

              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",

              gap: "25px",

              marginBottom: "50px",
            }}
          >

            {/* CARD 1 */}

            <div style={cardStyle}>

              <div style={iconWrap}>

                <FaPenNib />

              </div>

              <h2 style={numberStyle}>
                {myBlogs.length}
              </h2>

              <p style={textStyle}>
                Total Blogs
              </p>

            </div>

            {/* CARD 2 */}

            <div style={cardStyle}>

              <div
                style={{
                  ...iconWrap,
                  background:
                    "#fff1f3",
                  color: "#ff4d6d",
                }}
              >

                <FaFire />

              </div>

              <h2 style={numberStyle}>
                {
                  myBlogs.filter(
                    (blog) => {

                      if (
                        blog.likes
                      ) {

                        return (
                          blog.likes
                            .length >
                          0
                        );
                      }

                      return false;
                    }
                  ).length
                }
              </h2>

              <p style={textStyle}>
                Popular Blogs
              </p>

            </div>

            {/* CARD 3 */}

            <div style={cardStyle}>

              <div
                style={{
                  ...iconWrap,
                  background:
                    "#eefbf3",
                  color: "#00a86b",
                }}
              >

                <FaChartLine />

              </div>

              <h2 style={numberStyle}>
                {totalLikes}
              </h2>

              <p style={textStyle}>
                Total Likes
              </p>

            </div>

          </div>

          {/* BLOGS */}

          {myBlogs.length > 0 ? (

            <div
              style={{

                display: "grid",

                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",

                gap: "30px",

                animation:
                  "fadeUp 1s ease",
              }}
            >

              {myBlogs.map((blog) => (

                <BlogCard
                  key={blog._id}
                  blog={blog}
                />
              ))}

            </div>

          ) : (

            <div
              style={{

                background:
                  "rgba(255,255,255,0.7)",

                backdropFilter:
                  "blur(15px)",

                padding: "90px 40px",

                borderRadius: "35px",

                textAlign: "center",

                border:
                  "1px solid rgba(255,255,255,0.3)",

                boxShadow:
                  "0 10px 35px rgba(123,44,191,0.08)",

                animation:
                  "fadeUp 0.9s ease",
              }}
            >

              <h2
                style={{
                  marginBottom: "14px",
                  fontSize: "2rem",
                  color: "#222",
                }}
              >
                No Blogs Created ✍️
              </h2>

              <p
                style={{
                  color: "#777",
                  lineHeight: "1.8",
                  marginBottom: "28px",
                }}
              >
                Start creating blogs
                and share your ideas
                with the world.
              </p>

              <Link
                to="/create-blog"
                style={{
                  textDecoration: "none",
                }}
              >

                <button
                  style={{

                    border: "none",

                    padding:
                      "15px 28px",

                    borderRadius:
                      "16px",

                    background:
                      "linear-gradient(to right,#7B2CBF,#9D4EDD)",

                    color: "#fff",

                    cursor: "pointer",

                    fontWeight: "700",

                    boxShadow:
                      "0 10px 25px rgba(123,44,191,0.25)",
                  }}
                >
                  Create Your First Blog
                </button>

              </Link>

            </div>
          )}

        </div>

      </Container>

      {/* STYLES */}

      <style>

        {`

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
                translateY(30px);
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

        `}

      </style>

    </div>
  );
}

const cardStyle = {

  background:
    "rgba(255,255,255,0.7)",

  backdropFilter:
    "blur(15px)",

  padding: "35px",

  borderRadius: "28px",

  border:
    "1px solid rgba(255,255,255,0.3)",

  boxShadow:
    "0 10px 30px rgba(123,44,191,0.08)",

  transition: "0.3s",

  cursor: "pointer",
};

const iconWrap = {

  width: "60px",

  height: "60px",

  borderRadius: "18px",

  background: "#f3ebff",

  color: "#7B2CBF",

  display: "flex",

  justifyContent: "center",

  alignItems: "center",

  fontSize: "1.3rem",

  marginBottom: "20px",
};

const numberStyle = {

  fontSize: "2.8rem",

  color: "#222",

  marginBottom: "10px",

  fontWeight: "700",
};

const textStyle = {

  color: "#777",

  fontWeight: "600",

  fontSize: "1rem",
};

export default Dashboard;