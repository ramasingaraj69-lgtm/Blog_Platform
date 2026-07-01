import { motion } from "framer-motion";
import Container from "./Container";
import { theme } from "../utils/theme";

function Hero() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "90vh",
        background:
          "linear-gradient(to bottom,#ffffff,#f8f5ff)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <div>

            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "clamp(2.5rem,6vw,5rem)",
                lineHeight: "1.1",
                color: theme.colors.dark,
              }}
            >
              Share Your Ideas With The World
            </motion.h1>

            <p
              style={{
                marginTop: "25px",
                color: theme.colors.gray,
                lineHeight: "1.8",
                fontSize: "1.1rem",
              }}
            >
              Create blogs, connect with developers,
              discover trending topics and build your
              community.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "35px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "15px 30px",
                  borderRadius: "16px",
                  border: "none",
                  background: theme.colors.primary,
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Start Writing
              </button>

              <button
                style={{
                  padding: "15px 30px",
                  borderRadius: "16px",
                  border: `1px solid ${theme.colors.border}`,
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                Explore Blogs
              </button>
            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              alt=""
              style={{
                width: "100%",
                borderRadius: "30px",
                boxShadow:
                  "0 20px 50px rgba(123,44,191,0.15)",
              }}
            />

          </div>
        </div>

      </Container>
    </div>
  );
}

export default Hero;