export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f3ef",
        color: "#1f2937",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "60px 24px"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "10px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "#8b7355",
            letterSpacing: "0.22em",
            fontSize: "12px",
            marginBottom: "28px"
          }}
        >
          ALWAYS WITH YOU
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 76px)",
            lineHeight: 1.1,
            fontWeight: 300,
            letterSpacing: "0.03em",
            color: "#b8871b",
            margin: "0 auto",
            maxWidth: "900px"
          }}
        >
          Trusted and instant support when it matters most.
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "28px auto 0",
            fontSize: "22px",
            lineHeight: 1.6,
            color: "#4b5563"
          }}
        >
          HALO is a new kind of emotional support companion — designed to help
          people move from overwhelm to steadiness, and from coping to real inner strength.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="#waitlist"
            style={{
              display: "inline-block",
              borderRadius: "999px",
              padding: "16px 26px",
              fontSize: "13px",
              letterSpacing: "0.16em",
              fontWeight: 600,
              background: "#d4af37",
              color: "white",
              textDecoration: "none"
            }}
          >
            JOIN EARLY ACCESS
          </a>
        </div>

        <section style={{ marginTop: "80px" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 300,
              marginBottom: "20px"
            }}
          >
            The missing layer between distress, recovery, and growth.
          </h2>
          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#4b5563"
            }}
          >
            Most tools break down at the exact moment people need help most.
            HALO is designed for the moment the chest tightens, the mind starts
            spiralling, and support is needed now.
          </p>
        </section>

        <section
          id="waitlist"
          style={{
            marginTop: "90px",
            background: "white",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "28px",
            padding: "40px 24px"
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 300,
              marginBottom: "16px"
            }}
          >
            Be first to experience HALO.
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 24px",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#4b5563"
            }}
          >
            Join the early waitlist for launch updates, private previews, and first
            access to a new kind of support companion.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "min(100%, 420px)",
              height: "52px",
              borderRadius: "999px",
              border: "1px solid rgba(212,175,55,0.2)",
              padding: "0 18px",
              fontSize: "16px"
            }}
          />
        </section>
      </div>
    </main>
  );
}
