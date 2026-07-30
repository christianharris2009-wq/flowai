import Link from "next/link";

export default function Home() {
  const inputStyle = {
    width: "100%",
    marginTop: "8px",
    padding: "14px",
    border: "1px solid #dbe5f0",
    borderRadius: "10px",
    background: "#f8fafc",
    color: "#0b1730",
    fontSize: "15px",
    outline: "none",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        background: "#071326",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          padding: "70px clamp(30px, 7vw, 100px)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #2563eb, #22d3ee)",
            }}
          >
            F
          </span>

          Flow<span style={{ color: "#22d3ee", marginLeft: "-10px" }}>AI</span>
        </div>

        <p
          style={{
            marginTop: "65px",
            color: "#22d3ee",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "1.6px",
          }}
        >
          AI AUTOMATION FOR ROOFING COMPANIES
        </p>

        <h1
          style={{
            maxWidth: "650px",
            margin: "14px 0 20px",
            fontSize: "clamp(44px, 6vw, 72px)",
            lineHeight: "1.04",
            letterSpacing: "-3px",
          }}
        >
          Your roofing business—always answering, always following up.
        </h1>

        <p
          style={{
            maxWidth: "620px",
            color: "#9fb1c6",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Manage leads, appointments, customer conversations, Google reviews,
          and your AI receptionist from one powerful platform.
        </p>

        <div
          style={{
            display: "grid",
            gap: "14px",
            marginTop: "32px",
            color: "#c5d3e1",
            fontSize: "16px",
          }}
        >
          <div>✓ 24/7 AI receptionist</div>
          <div>✓ Automatic roofing estimate booking</div>
          <div>✓ Roofing CRM and lead pipeline</div>
          <div>✓ Text follow-up and review automation</div>
        </div>
      </section>

      <section
        style={{
          padding: "30px",
          display: "grid",
          placeItems: "center",
          background: "#eef5ff",
        }}
      >
        <div
          style={{
            width: "min(480px, 100%)",
            padding: "40px",
            borderRadius: "24px",
            background: "white",
            boxShadow: "0 28px 80px rgba(7, 19, 38, 0.2)",
          }}
        >
          <p
            style={{
              margin: "0",
              color: "#2563eb",
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "1.4px",
            }}
          >
            WELCOME BACK
          </p>

          <h2
            style={{
              margin: "10px 0 8px",
              color: "#0b1730",
              fontSize: "36px",
              letterSpacing: "-1px",
            }}
          >
            Sign in to FlowAI
          </h2>

          <p
            style={{
              margin: "0 0 28px",
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Access your roofing automation command center.
          </p>

          <label
            style={{
              display: "block",
              marginBottom: "18px",
              color: "#40536a",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            EMAIL ADDRESS
            <input
              type="email"
              placeholder="you@roofingcompany.com"
              style={inputStyle}
            />
          </label>

          <label
            style={{
              display: "block",
              marginBottom: "12px",
              color: "#40536a",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            PASSWORD
            <input
              type="password"
              placeholder="••••••••"
              style={inputStyle}
            />
          </label>

          <div style={{ textAlign: "right", marginBottom: "22px" }}>
            <a
              href="#"
              style={{
                color: "#2563eb",
                fontSize: "13px",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Forgot password?
            </a>
          </div>

          <Link
            href="/dashboard"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px 20px",
              borderRadius: "11px",
              color: "white",
              background: "#2563eb",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Sign In
          </Link>

          <p
            style={{
              marginTop: "22px",
              color: "#64748b",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            New to FlowAI?{" "}
            <a
              href="#"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Create an account
            </a>
          </p>

          <p
            style={{
              margin: "28px 0 0",
              paddingTop: "20px",
              borderTop: "1px solid #e6edf5",
              color: "#8a9bad",
              textAlign: "center",
              fontSize: "11px",
            }}
          >
            Trusted by growth-minded roofing companies
          </p>
        </div>
      </section>
    </main>
  );
}