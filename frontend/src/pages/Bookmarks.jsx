import {
  useSelector,
} from "react-redux";

import {
  FaBookmark,
  FaHeart,
  FaFire,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

import Container from "../components/Container";

import BlogCard from "../components/BlogCard";

function Bookmarks() {

  const user = useSelector(
    (state) => state.auth.user
  );

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const bookmarkedMap = useSelector(
    (state) => state.bookmarks.bookmarkedMap
  );

  // FILTER BOOKMARKED BLOGS

  const bookmarkedBlogs = blogs.filter((blog) => {

    const blogId = blog._id;

    if (bookmarkedMap[blogId] === true) {

      return true;
    }

    return false;
  });

  return (

    <div
      style={{

        minHeight: "100vh",

        backgroundImage:
          `
          linear-gradient(
            rgba(248,245,255,0.92),
            rgba(255,255,255,0.96)
          ),
          url("https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop")
          `,

        backgroundSize: "cover",

        backgroundAttachment: "fixed",

        overflow: "hidden",
      }}
    >

      <Navbar />

      {/* FLOATING BLOBS */}

      <div
        style={{

          position: "fixed",

          width: "280px",

          height: "280px",

          borderRadius: "50%",

          background:
            "rgba(123,44,191,0.12)",

          top: "-60px",

          left: "-80px",

          filter: "blur(20px)",

          animation:
            "floatBlob 7s ease-in-out infinite",
        }}
      />

      <div
        style={{

          position: "fixed",

          width: "220px",

          height: "220px",

          borderRadius: "50%",

          background:
            "rgba(157,78,221,0.15)",

          bottom: "20px",

          right: "-50px",

          filter: "blur(25px)",

          animation:
            "floatBlob 9s ease-in-out infinite",
        }}
      />

      <Container>

        <div
          style={{
            padding: "60px 0",
          }}
        >

          {/* HERO SECTION */}

          <div
            style={{

              background:
                "rgba(255,255,255,0.65)",

              backdropFilter:
                "blur(18px)",

              border:
                "1px solid rgba(255,255,255,0.4)",

              borderRadius: "35px",

              padding: "45px",

              marginBottom: "45px",

              boxShadow:
                "0 15px 40px rgba(123,44,191,0.10)",

              position: "relative",

              overflow: "hidden",
            }}
          >

            {/* GLOW */}

            <div
              style={{

                position: "absolute",

                width: "240px",

                height: "240px",

                borderRadius: "50%",

                background:
                  "rgba(157,78,221,0.12)",

                top: "-100px",

                right: "-70px",

                filter: "blur(25px)",
              }}
            />

            <div
              style={{

                display: "flex",

                justifyContent:
                  "space-between",

                alignItems: "center",

                flexWrap: "wrap",

                gap: "25px",

                position: "relative",
              }}
            >

              {/* LEFT */}

              <div>

                <div
                  style={{

                    display: "flex",

                    alignItems: "center",

                    gap: "15px",

                    marginBottom: "18px",
                  }}
                >

                  <div
                    style={{

                      width: "65px",

                      height: "65px",

                      borderRadius: "20px",

                      background:
                        "linear-gradient(to right,#7B2CBF,#9D4EDD)",

                      display: "flex",

                      justifyContent:
                        "center",

                      alignItems: "center",

                      color: "#fff",

                      fontSize: "1.5rem",

                      boxShadow:
                        "0 10px 25px rgba(123,44,191,0.30)",
                    }}
                  >

                    <FaBookmark />

                  </div>

                  <div>

                    <h1
                      style={{

                        fontSize: "3rem",

                        margin: 0,

                        color: "#222",

                        fontWeight: "800",
                      }}
                    >
                      Saved Blogs
                    </h1>

                    <p
                      style={{

                        color: "#777",

                        marginTop: "8px",

                        fontSize: "1rem",
                      }}
                    >
                      Your personal reading collection ✨
                    </p>

                  </div>

                </div>

                <p
                  style={{

                    color: "#555",

                    lineHeight: "1.9",

                    maxWidth: "650px",
                  }}
                >
                  Keep your favorite articles safe and
                  revisit them anytime. Build your own
                  knowledge library with beautifully
                  saved blogs.
                </p>

              </div>

              {/* RIGHT STATS */}

              <div
                style={{

                  display: "flex",

                  gap: "18px",

                  flexWrap: "wrap",
                }}
              >

                <div style={statCard}>
                  <FaBookmark />
                  <h2>
                    {bookmarkedBlogs.length}
                  </h2>
                  <p>Bookmarks</p>
                </div>

                <div style={statCard}>
                  <FaHeart />
                  <h2>
                    {blogs.length}
                  </h2>
                  <p>Total Blogs</p>
                </div>

                <div style={statCard}>
                  <FaFire />
                  <h2>
                    {user ? "ON" : "OFF"}
                  </h2>
                  <p>Status</p>
                </div>

              </div>

            </div>

          </div>

          {/* BLOG GRID */}

          {bookmarkedBlogs.length > 0 ? (

            <div
              style={{

                display: "grid",

                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",

                gap: "35px",
              }}
            >

              {bookmarkedBlogs.map((blog) => (

                <div
                  key={blog._id}
                  style={{

                    transition: "0.35s",

                    animation:
                      "fadeUp 0.6s ease",
                  }}
                >

                  <BlogCard blog={blog} />

                </div>
              ))}

            </div>

          ) : (

            <div
              style={{

                background:
                  "rgba(255,255,255,0.75)",

                backdropFilter:
                  "blur(18px)",

                padding: "80px 40px",

                borderRadius: "35px",

                textAlign: "center",

                border:
                  "1px solid rgba(255,255,255,0.4)",

                boxShadow:
                  "0 15px 35px rgba(123,44,191,0.08)",

                animation:
                  "fadeUp 0.6s ease",
              }}
            >

              {/* ICON */}

              <div
                style={{

                  width: "120px",

                  height: "120px",

                  borderRadius: "30px",

                  margin: "0 auto 30px",

                  background:
                    "linear-gradient(to right,#7B2CBF,#9D4EDD)",

                  display: "flex",

                  justifyContent:
                    "center",

                  alignItems: "center",

                  color: "#fff",

                  fontSize: "2.5rem",

                  boxShadow:
                    "0 15px 35px rgba(123,44,191,0.25)",

                  animation:
                    "pulse 2s infinite",
                }}
              >

                <FaBookmark />

              </div>

              <h2
                style={{
                  fontSize: "2rem",
                  color: "#222",
                  marginBottom: "15px",
                }}
              >
                No Bookmarks Yet
              </h2>

              <p
                style={{

                  color: "#777",

                  fontSize: "1rem",

                  maxWidth: "500px",

                  margin: "0 auto",

                  lineHeight: "1.8",
                }}
              >
                Start saving blogs you love and create
                your own personalized reading space 💜
              </p>

            </div>
          )}

        </div>

      </Container>

      {/* ANIMATIONS */}

      <style>
        {`

          @keyframes fadeUp {

            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {

            0% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.08);
            }

            100% {
              transform: scale(1);
            }
          }

          @keyframes floatBlob {

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

        `}
      </style>

    </div>
  );
}

const statCard = {

  background:
    "rgba(255,255,255,0.75)",

  backdropFilter:
    "blur(14px)",

  border:
    "1px solid rgba(255,255,255,0.4)",

  borderRadius: "24px",

  padding: "20px 28px",

  minWidth: "140px",

  textAlign: "center",

  boxShadow:
    "0 10px 25px rgba(123,44,191,0.08)",

  color: "#7B2CBF",
};

export default Bookmarks;