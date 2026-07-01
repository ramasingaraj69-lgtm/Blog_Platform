import { useEffect, useState } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { fetchBlogs } from "../redux/blogSlice";

import Navbar from "../components/Navbar";

import SearchBar from "../components/SearchBar";

import BlogCard from "../components/BlogCard";

import Container from "../components/Container";

import {
  FaFire,
  FaPenFancy,
  FaUsers,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Home() {

  const dispatch = useDispatch();

  const { blogs, loading } = useSelector(
    (state) => state.blogs
  );

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    dispatch(fetchBlogs());

  }, [dispatch]);

  const safeBlogs = Array.isArray(blogs)
    ? blogs
    : [];

  const filteredBlogs =
    safeBlogs.filter((blog) => {

      if (
        blog &&
        blog.title &&
        typeof blog.title === "string"
      ) {

        return blog.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );
      }

      return false;
    });

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#f5eeff,#ffffff)",
        overflow: "hidden",
      }}
    >

      <Navbar />

      {/* HERO SECTION */}

      <div
        style={{
          width: "100%",
          padding:
            "110px 20px 140px",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#5A189A,#7B2CBF,#9D4EDD,#C77DFF)",
        }}
      >

        {/* ANIMATED BG */}

        <div style={circle1} />
        <div style={circle2} />
        <div style={circle3} />

        {/* GRID LIGHT */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px),linear-gradient(to right,#fff 1px, transparent 1px)",
            backgroundSize:
              "40px 40px",
          }}
        />

        <Container>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(340px,1fr))",
              gap: "70px",
              alignItems: "center",
              position: "relative",
              zIndex: 5,
            }}
          >

            {/* LEFT */}

            <div
              style={{
                animation:
                  "fadeLeft 1s ease",
              }}
            >

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding:
                    "10px 18px",
                  borderRadius:
                    "50px",
                  background:
                    "rgba(255,255,255,0.15)",
                  color: "#fff",
                  marginBottom:
                    "25px",
                  backdropFilter:
                    "blur(10px)",
                  border:
                    "1px solid rgba(255,255,255,0.15)",
                }}
              >

                <FaStar />

                <span>
                  Modern Blogging Platform
                </span>

              </div>

              <h1
                style={{
                  fontSize: "4.5rem",
                  color: "#fff",
                  lineHeight: "1.1",
                  fontWeight: "800",
                  marginBottom: "25px",
                }}
              >
                Write.
                <br />
                Inspire.
                <br />
                Connect.
              </h1>

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.88)",
                  lineHeight: "2",
                  fontSize: "1.05rem",
                  maxWidth: "620px",
                  marginBottom: "40px",
                }}
              >
                Discover trending stories,
                share your ideas, connect
                with readers worldwide and
                build your own blogging
                community with beautiful
                modern UI experience.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >

                <Link
                  to="/create-blog"
                  style={{
                    textDecoration:
                      "none",
                  }}
                >

                  <button
                    style={{
                      ...heroButton,
                      background:
                        "#fff",
                      color:
                        "#7B2CBF",
                    }}
                  >

                    Start Writing

                    <FaArrowRight />

                  </button>

                </Link>

                <button
                  style={{
                    ...heroButton,
                    background:
                      "rgba(255,255,255,0.12)",
                    color: "#fff",
                    border:
                      "1px solid rgba(255,255,255,0.2)",
                    backdropFilter:
                      "blur(10px)",
                  }}
                >
                  Explore Blogs
                </button>

              </div>

              {/* STATS */}

              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  marginTop: "50px",
                  flexWrap: "wrap",
                }}
              >

                {[
                  {
                    number: "10K+",
                    label: "Readers",
                  },

                  {
                    number: "5K+",
                    label: "Blogs",
                  },

                  {
                    number: "1K+",
                    label: "Creators",
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                  >

                    <h2
                      style={{
                        color:
                          "#fff",
                        fontSize:
                          "2rem",
                        marginBottom:
                          "5px",
                      }}
                    >
                      {item.number}
                    </h2>

                    <p
                      style={{
                        color:
                          "rgba(255,255,255,0.7)",
                      }}
                    >
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div
              style={{
                position: "relative",
                animation:
                  "fadeRight 1s ease",
              }}
            >

              {/* MAIN IMAGE */}

              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "40px",
                  height: "580px",
                  objectFit: "cover",
                  boxShadow:
                    "0 30px 60px rgba(0,0,0,0.35)",
                  transform:
                    "rotate(-2deg)",
                }}
              />

              {/* FLOAT CARD 1 */}

              <div
                style={{
                  ...floatingCard,
                  top: "30px",
                  left: "-40px",
                  animation:
                    "float 5s ease-in-out infinite",
                }}
              >

                <FaFire
                  style={{
                    color:
                      "#ff5e5e",
                    fontSize:
                      "1.3rem",
                  }}
                />

                <div>

                  <h3
                    style={{
                      color:
                        "#222",
                    }}
                  >
                    Trending
                  </h3>

                  <p
                    style={{
                      color:
                        "#666",
                    }}
                  >
                    500+ blogs this week
                  </p>

                </div>

              </div>

              {/* FLOAT CARD 2 */}

              <div
                style={{
                  ...floatingCard,
                  bottom: "20px",
                  right: "-40px",
                  animation:
                    "float 4s ease-in-out infinite",
                }}
              >

                <FaUsers
                  style={{
                    color:
                      "#7B2CBF",
                    fontSize:
                      "1.3rem",
                  }}
                />

                <div>

                  <h3
                    style={{
                      color:
                        "#222",
                    }}
                  >
                    Community
                  </h3>

                  <p
                    style={{
                      color:
                        "#666",
                    }}
                  >
                    Connect with creators
                  </p>

                </div>

              </div>

            </div>

          </div>

        </Container>

      </div>

      {/* FEATURES */}

      <Container>

        <div
          style={{
            marginTop: "-70px",
            position: "relative",
            zIndex: 10,
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "30px",
            }}
          >

            {[
              {
                icon: <FaPenFancy />,
                title:
                  "Write Blogs",
                desc:
                  "Create beautiful engaging blogs with modern editor experience.",
              },

              {
                icon: <FaUsers />,
                title:
                  "Grow Audience",
                desc:
                  "Connect with readers and build your blogging community.",
              },

              {
                icon: <FaFire />,
                title:
                  "Trending Content",
                desc:
                  "Explore popular blogs and discover amazing creators.",
              },
            ].map((item, index) => (

              <div
                key={index}
                style={{
                  background:
                    "rgba(255,255,255,0.88)",
                  backdropFilter:
                    "blur(15px)",
                  padding: "35px",
                  borderRadius:
                    "30px",
                  boxShadow:
                    "0 20px 50px rgba(123,44,191,0.08)",
                  transition:
                    "0.4s",
                  cursor: "pointer",
                  border:
                    "1px solid rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(-10px)";
                }}
                onMouseLeave={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(0px)";
                }}
              >

                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius:
                      "22px",
                    background:
                      "linear-gradient(to right,#7B2CBF,#C77DFF)",
                    display:
                      "flex",
                    justifyContent:
                      "center",
                    alignItems:
                      "center",
                    color: "#fff",
                    fontSize:
                      "1.5rem",
                    marginBottom:
                      "25px",
                    boxShadow:
                      "0 15px 30px rgba(123,44,191,0.2)",
                  }}
                >
                  {item.icon}
                </div>

                <h2
                  style={{
                    marginBottom:
                      "14px",
                    color: "#222",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.9",
                  }}
                >
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Container>

      {/* BLOGS */}

      <Container>

        <div
          style={{
            padding: "100px 0",
          }}
        >

          {/* SEARCH */}

          <div
            style={{
              marginBottom: "50px",
            }}
          >

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

          </div>

          {/* TITLE */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "40px",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >

            <div>

              <h1
                style={{
                  fontSize: "2.8rem",
                  color: "#222",
                  marginBottom: "10px",
                }}
              >
                Latest Blogs
              </h1>

              <p
                style={{
                  color: "#777",
                }}
              >
                Explore blogs from creators
                worldwide.
              </p>

            </div>

            <div
              style={{
                padding:
                  "14px 24px",
                borderRadius:
                  "18px",
                background:
                  "linear-gradient(to right,#7B2CBF,#9D4EDD)",
                color: "#fff",
                fontWeight: "700",
                boxShadow:
                  "0 10px 25px rgba(123,44,191,0.2)",
              }}
            >
              {filteredBlogs.length} Blogs
            </div>

          </div>

          {/* LOADING */}

          {loading ? (

            <div
              style={{
                textAlign: "center",
                padding: "100px 0",
                color: "#7B2CBF",
                fontWeight: "700",
                fontSize: "1.3rem",
              }}
            >
              Loading blogs...
            </div>

          ) : filteredBlogs.length > 0 ? (

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(340px,1fr))",
                gap: "35px",
              }}
            >

              {filteredBlogs.map((blog) => (

                <BlogCard
                  key={blog._id}
                  blog={blog}
                />
              ))}

            </div>

          ) : (

            <div
              style={{
                background: "#fff",
                padding: "90px",
                borderRadius: "35px",
                textAlign: "center",
                border:
                  "1px solid #f0e7ff",
                boxShadow:
                  "0 15px 40px rgba(123,44,191,0.06)",
              }}
            >

              <h2
                style={{
                  marginBottom:
                    "10px",
                  color: "#222",
                }}
              >
                No Blogs Found
              </h2>

              <p
                style={{
                  color: "#777",
                }}
              >
                Try another search keyword.
              </p>

            </div>
          )}

        </div>

      </Container>

      {/* STYLES */}

      <style>
        {`

          *{
            box-sizing:border-box;
          }

          @keyframes float {

            0%{
              transform:translateY(0px);
            }

            50%{
              transform:translateY(20px);
            }

            100%{
              transform:translateY(0px);
            }
          }

          @keyframes fadeLeft {

            from{
              opacity:0;
              transform:translateX(-60px);
            }

            to{
              opacity:1;
              transform:translateX(0);
            }
          }

          @keyframes fadeRight {

            from{
              opacity:0;
              transform:translateX(60px);
            }

            to{
              opacity:1;
              transform:translateX(0);
            }
          }

          @media(max-width:768px){

            h1{
              font-size:2.8rem !important;
            }

          }

        `}
      </style>

    </div>
  );
}

const heroButton = {

  padding:
    "18px 30px",

  border: "none",

  borderRadius:
    "18px",

  fontWeight: "700",

  cursor: "pointer",

  display: "flex",

  alignItems: "center",

  gap: "12px",

  fontSize: "1rem",

  transition: "0.3s",
};

const floatingCard = {

  position: "absolute",

  background:
    "rgba(255,255,255,0.92)",

  backdropFilter:
    "blur(15px)",

  padding: "20px",

  borderRadius:
    "24px",

  display: "flex",

  alignItems: "center",

  gap: "15px",

  boxShadow:
    "0 15px 40px rgba(0,0,0,0.12)",
};

const circle1 = {

  position: "absolute",

  width: "400px",

  height: "400px",

  borderRadius: "50%",

  background:
    "rgba(255,255,255,0.08)",

  top: "-120px",

  right: "-100px",

  filter: "blur(10px)",

  animation:
    "float 6s ease-in-out infinite",
};

const circle2 = {

  position: "absolute",

  width: "250px",

  height: "250px",

  borderRadius: "50%",

  background:
    "rgba(255,255,255,0.08)",

  bottom: "-80px",

  left: "-50px",

  animation:
    "float 8s ease-in-out infinite",
};

const circle3 = {

  position: "absolute",

  width: "180px",

  height: "180px",

  borderRadius: "50%",

  background:
    "rgba(255,255,255,0.06)",

  top: "50%",

  left: "45%",

  animation:
    "float 5s ease-in-out infinite",
};

export default Home;