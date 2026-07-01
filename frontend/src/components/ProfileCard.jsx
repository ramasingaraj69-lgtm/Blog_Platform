import {
  FaMapMarkerAlt,
  FaPen,
  FaEnvelope,
  FaUserFriends,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function ProfileCard({ user }) {

  return (

    <div
      style={{
        width: "100%",
        background:
          "rgba(255,255,255,0.88)",
        backdropFilter: "blur(18px)",
        borderRadius: "38px",
        overflow: "hidden",
        boxShadow:
          "0 20px 50px rgba(123,44,191,0.08)",
        border:
          "1px solid rgba(123,44,191,0.08)",
      }}
    >

      {/* COVER */}

      <div
        style={{
          height: "240px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >

        {/* OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(123,44,191,0.45))",
          }}
        />

      </div>

      {/* PROFILE SECTION */}

      <div
        style={{
          padding:
            "0 40px 45px",
          position: "relative",
        }}
      >

        {/* PROFILE IMAGE */}

        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            border:
              "7px solid #fff",
            position: "absolute",
            top: "-80px",
            left: "40px",
            boxShadow:
              "0 15px 35px rgba(0,0,0,0.18)",
          }}
        >

          <img
            src="https://i.pravatar.cc/500"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

        </div>

        {/* EDIT BUTTON */}

        <button
          style={{
            position: "absolute",
            top: "-45px",
            right: "40px",
            border: "none",
            background:
              "linear-gradient(to right,#7B2CBF,#9D4EDD)",
            color: "#fff",
            padding:
              "14px 22px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "0.95rem",
            boxShadow:
              "0 10px 25px rgba(123,44,191,0.25)",
          }}
        >

          <FaPen />

          Edit Profile

        </button>

        {/* CONTENT */}

        <div
          style={{
            marginTop: "95px",
          }}
        >

          {/* NAME */}

          <h1
            style={{
              fontSize: "2.4rem",
              color: "#222",
              marginBottom: "10px",
              fontWeight: "800",
            }}
          >
            {user || "Rama"}
          </h1>

          {/* ROLE */}

          <p
            style={{
              color: "#7B2CBF",
              fontWeight: "700",
              fontSize: "1.05rem",
              marginBottom: "22px",
            }}
          >
            Fullstack Developer • Blogger
          </p>

          {/* BIO */}

          <p
            style={{
              color: "#666",
              lineHeight: "1.9",
              fontSize: "1rem",
              maxWidth: "850px",
              marginBottom: "35px",
            }}
          >
            Passionate about building modern,
            scalable and beautiful web
            applications using React, Django
            and MongoDB. I love sharing
            knowledge through blogs and
            helping developers grow in their
            coding journey.
          </p>

          {/* STATS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "22px",
              marginBottom: "35px",
            }}
          >

            <div style={statsCard}>
              <h2 style={statsNumber}>
                24
              </h2>

              <p style={statsText}>
                Blogs
              </p>
            </div>

            <div style={statsCard}>
              <h2 style={statsNumber}>
                1.2k
              </h2>

              <p style={statsText}>
                Followers
              </p>
            </div>

            <div style={statsCard}>
              <h2 style={statsNumber}>
                580
              </h2>

              <p style={statsText}>
                Following
              </p>
            </div>

          </div>

          {/* INFO */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginBottom: "35px",
            }}
          >

            <div style={infoBox}>

              <FaEnvelope
                style={iconStyle}
              />

              <span>
                rama@gmail.com
              </span>

            </div>

            <div style={infoBox}>

              <FaMapMarkerAlt
                style={iconStyle}
              />

              <span>
                Chennai, India
              </span>

            </div>

            <div style={infoBox}>

              <FaUserFriends
                style={iconStyle}
              />

              <span>
                Active Creator
              </span>

            </div>

          </div>

          {/* SOCIALS */}

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >

            <button
              style={socialButton}
            >

              <FaInstagram />

            </button>

            <button
              style={socialButton}
            >

              <FaGithub />

            </button>

            <button
              style={socialButton}
            >

              <FaLinkedin />

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

const statsCard = {

  background:
    "linear-gradient(145deg,#ffffff,#f8f5ff)",

  padding: "28px",

  borderRadius: "24px",

  border:
    "1px solid #f1e8ff",

  textAlign: "center",

  boxShadow:
    "0 8px 20px rgba(123,44,191,0.04)",
};

const statsNumber = {

  color: "#7B2CBF",

  fontSize: "2rem",

  fontWeight: "800",

  marginBottom: "8px",
};

const statsText = {

  color: "#777",

  fontWeight: "600",
};

const infoBox = {

  display: "flex",

  alignItems: "center",

  gap: "14px",

  padding: "20px",

  borderRadius: "20px",

  background:
    "linear-gradient(145deg,#ffffff,#faf7ff)",

  border:
    "1px solid #f1e8ff",

  color: "#555",

  fontWeight: "600",
};

const iconStyle = {

  color: "#7B2CBF",

  fontSize: "1.1rem",
};

const socialButton = {

  width: "55px",

  height: "55px",

  borderRadius: "18px",

  border: "none",

  background:
    "linear-gradient(to right,#7B2CBF,#9D4EDD)",

  color: "#fff",

  fontSize: "1.2rem",

  cursor: "pointer",

  display: "flex",

  justifyContent: "center",

  alignItems: "center",

  boxShadow:
    "0 10px 20px rgba(123,44,191,0.18)",
};

export default ProfileCard;