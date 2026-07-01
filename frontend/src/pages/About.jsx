import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import {
  FaPenFancy,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaHeart,
} from "react-icons/fa";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#f6eeff,#ffffff)",
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* HERO */}
      <div
        style={{
          position: "relative",
          padding: "120px 20px 80px",
          background:
            "linear-gradient(135deg,#7B2CBF,#9D4EDD,#C77DFF)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* floating shapes */}
        <div style={glow1}></div>
        <div style={glow2}></div>

        <Container>
          <div style={heroGrid}>
            <div>
              <p style={tagLine}>ABOUT BLOGIFY</p>

              <h1 style={heroTitle}>
                A modern platform for
                <br />
                storytellers & creators
              </h1>

              <p style={heroDesc}>
                Blogify is a creative space where writers,
                developers, and thinkers share ideas, inspire
                others, and build meaningful connections
                through storytelling.
              </p>

              <div style={btnRow}>
                <button style={primaryBtn}>
                  Explore Blogs
                </button>
                <button style={secondaryBtn}>
                  Start Writing
                </button>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
              alt=""
              style={heroImg}
            />
          </div>
        </Container>
      </div>

      {/* FEATURES */}
      <Container>
        <div style={{ padding: "80px 0" }}>
          <h2 style={sectionTitle}>What we offer</h2>

          <div style={grid}>
            <Feature
              icon={<FaPenFancy />}
              title="Create Blogs"
              desc="Write and publish beautiful blogs easily."
            />
            <Feature
              icon={<FaUsers />}
              title="Community"
              desc="Connect with creators worldwide."
            />
            <Feature
              icon={<FaGlobe />}
              title="Global Reach"
              desc="Share your ideas with the world."
            />
            <Feature
              icon={<FaRocket />}
              title="Fast Platform"
              desc="Optimized performance and speed."
            />
          </div>
        </div>
      </Container>

      {/* STORY SECTION */}
      <div
        style={{
          background: "#fff",
          padding: "80px 20px",
        }}
      >
        <Container>
          <div style={storyGrid}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
              style={storyImg}
              alt=""
            />

            <div>
              <h2 style={sectionTitle}>Our Story</h2>

              <p style={storyText}>
                Blogify started with a simple idea — give
                everyone a voice. We believe storytelling
                connects people, inspires innovation, and
                builds strong communities.
                <br />
                <br />
                Whether you're a developer sharing knowledge,
                a writer expressing creativity, or a reader
                exploring ideas — Blogify is your home.
              </p>

              <div style={badge}>
                <FaHeart /> Built with passion
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* FOOTER CTA */}
      <div style={ctaSection}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
          Ready to start your journey?
        </h2>
        <p style={{ opacity: 0.9, marginBottom: "25px" }}>
          Join thousands of creators sharing their stories.
        </p>

        <button style={ctaBtn}>Get Started</button>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(20px); }
            100% { transform: translateY(0px); }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          button:hover {
            transform: translateY(-3px) scale(1.02);
            transition: 0.3s;
          }

          img {
            transition: 0.4s;
          }

          img:hover {
            transform: scale(1.03);
          }
        `}
      </style>
    </div>
  );
}

/* FEATURE COMPONENT */
function Feature({ icon, title, desc }) {
  return (
    <div style={card}>
      <div style={iconBox}>{icon}</div>
      <h3 style={{ margin: "10px 0" }}>{title}</h3>
      <p style={{ color: "#666", lineHeight: "1.6" }}>{desc}</p>
    </div>
  );
}

/* STYLES */
const heroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "50px",
  alignItems: "center",
};

const heroTitle = {
  fontSize: "3.5rem",
  fontWeight: "800",
  lineHeight: "1.2",
};

const heroDesc = {
  marginTop: "20px",
  fontSize: "1.1rem",
  lineHeight: "1.8",
  opacity: 0.9,
};

const tagLine = {
  letterSpacing: "2px",
  fontWeight: "600",
  opacity: 0.8,
};

const btnRow = {
  marginTop: "30px",
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
};

const primaryBtn = {
  padding: "14px 28px",
  borderRadius: "14px",
  border: "none",
  background: "#fff",
  color: "#7B2CBF",
  fontWeight: "700",
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "14px 28px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.5)",
  background: "transparent",
  color: "#fff",
  fontWeight: "700",
  cursor: "pointer",
};

const heroImg = {
  width: "100%",
  borderRadius: "30px",
  height: "420px",
  objectFit: "cover",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
};

const glow1 = {
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.12)",
  top: "-100px",
  right: "-80px",
  filter: "blur(10px)",
  animation: "float 6s ease-in-out infinite",
};

const glow2 = {
  position: "absolute",
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.08)",
  bottom: "-80px",
  left: "-60px",
  animation: "float 5s ease-in-out infinite",
};

const sectionTitle = {
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "40px",
  fontWeight: "800",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "25px",
};

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const iconBox = {
  fontSize: "1.8rem",
  color: "#7B2CBF",
};

const storyGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "40px",
  alignItems: "center",
};

const storyImg = {
  width: "100%",
  borderRadius: "25px",
  height: "350px",
  objectFit: "cover",
};

const storyText = {
  fontSize: "1.1rem",
  lineHeight: "1.8",
  color: "#555",
};

const badge = {
  marginTop: "20px",
  display: "inline-flex",
  gap: "10px",
  alignItems: "center",
  padding: "10px 15px",
  borderRadius: "12px",
  background: "#f3e8ff",
  color: "#7B2CBF",
  fontWeight: "600",
};

const ctaSection = {
  background: "linear-gradient(135deg,#7B2CBF,#9D4EDD)",
  color: "#fff",
  textAlign: "center",
  padding: "80px 20px",
};

const ctaBtn = {
  padding: "15px 30px",
  borderRadius: "15px",
  border: "none",
  background: "#fff",
  color: "#7B2CBF",
  fontWeight: "700",
  cursor: "pointer",
};

export default About;