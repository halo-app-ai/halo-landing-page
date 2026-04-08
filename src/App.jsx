
export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#1f2937",
        fontFamily: "Inter, Arial, sans-serif",
       padding: "5px 24px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >


        <div style={{ marginBottom: "10px", textAlign: "center" }}>
  <div className="logo-wrap">
    <span className="sparkle m1"></span>
    <span className="sparkle m2"></span>
    <span className="sparkle m3"></span>
    <span className="sparkle m4"></span>

    <span className="sparkle s1"></span>
    <span className="sparkle s2"></span>
    <span className="sparkle s3"></span>
    <span className="sparkle s4"></span>
    <span className="sparkle s5"></span>
    <span className="sparkle s6"></span>
    <span className="sparkle s7"></span>
    <span className="sparkle s8"></span>

    <img
      src="https://raw.githubusercontent.com/halo-app-ai/halo-landing-page/main/HALO_Face_Logo.png"
      alt="HALO symbol"
      style={{
        width: "300px",
        maxWidth: "68vw",
        display: "block",
        margin: "0 auto 18px",
        position: "relative",
        zIndex: 2,
      }}
    />
  </div>

  <div className="halo-wordmark">HALO</div>
  <div className="halo-tagline">ALWAYS WITH YOU</div>
</div>

  <h1
  style={{
    fontSize: "clamp(42px, 6.5vw, 72px)",
    lineHeight: 1.16,
    fontWeight: 300,
    letterSpacing: "-0.01em",
    color: "#d2a13a",
    margin: "0 auto",
    maxWidth: "700px",
  }}
>
          Trusted and instant support
          <br />
          when it matters most.
        </h1>

      <p
  style={{
    maxWidth: "720px",
    margin: "34px auto 0",
    fontSize: "clamp(20px, 2.2vw, 22px)",
    lineHeight: 1.9,
    color: "#5f6368",
    fontWeight: 400,
  }}
>
          HALO is a new kind of emotional support companion —
          <br />
          designed to help you move from overwhelm to
          <br />
          steadiness, and from coping to real inner
          <br />
          strength.
        </p>

        <div style={{ marginTop: "42px" }}>
          <a
            href="#waitlist"
            style={{
              display: "inline-block",
              borderRadius: "999px",
              padding: "18px 42px",
              fontSize: "14px",
              letterSpacing: "0.08em",
              fontWeight: 600,
              background:
                "linear-gradient(135deg, #c8902f 0%, #e0b04f 55%, #c78c2b 100%)",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 10px 24px rgba(212, 175, 55, 0.22)",
            }}
          >
            JOIN EARLY ACCESS
          </a>
        </div>

        <section id="waitlist" style={{ marginTop: "74px" }}>
          <p
            style={{
              fontSize: "clamp(22px, 2.8vw, 28px)",
              lineHeight: 1.4,
              color: "#4b4f55",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Be first to experience HALO.
          </p>

          <div style={{ height: "44px" }} />

          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              paddingTop: "18px",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <form
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0",
                flexWrap: "wrap",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: "1 1 300px",
                  minWidth: "240px",
                  height: "56px",
                  borderRadius: "14px 0 0 14px",
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRight: "none",
                  padding: "0 20px",
                  fontSize: "16px",
                  color: "#4b4f55",
                  outline: "none",
                  background: "#ffffff",
                }}
              />
              <button
                type="submit"
                style={{
                  height: "56px",
                  border: "none",
                  borderRadius: "0 14px 14px 0",
                  padding: "0 26px",
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg, #c8902f 0%, #e0b04f 55%, #c78c2b 100%)",
                  color: "#ffffff",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                JOIN EARLY ACCESS
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
