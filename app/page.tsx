import Link from "next/link";

const features = [
  {
    icon: "☎",
    title: "AI Receptionist",
    text: "Answer every roofing call 24/7, qualify homeowners, and capture leads even when your team is busy.",
  },
  {
    icon: "📅",
    title: "Automatic Booking",
    text: "Turn incoming calls into scheduled roofing estimates without playing phone tag.",
  },
  {
    icon: "💬",
    title: "Instant Follow-Up",
    text: "Automatically text new leads, follow up with estimates, and keep homeowners engaged.",
  },
  {
    icon: "📈",
    title: "Lead Management",
    text: "Keep appointments, conversations, and opportunities organized in one roofing-focused system.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your business",
    text: "Set up your roofing company, phone line, service area, and appointment availability.",
  },
  {
    number: "02",
    title: "FlowAI answers",
    text: "Your AI receptionist talks with homeowners, answers common questions, and qualifies the lead.",
  },
  {
    number: "03",
    title: "Appointments get booked",
    text: "Qualified homeowners are scheduled automatically and your team gets the information they need.",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#071326",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVIGATION */}
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
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
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              display: "grid",
              placeItems: "center",
              background: "linear-gradient(135deg, #2563eb, #22d3ee)",
            }}
          >
            F
          </span>

          <span>
            Flow<span style={{ color: "#22d3ee" }}>AI</span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/login"
            style={{
              color: "#dbeafe",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "11px 16px",
            }}
          >
            Sign In
          </Link>

          <a
            href="#demo"
            style={{
              background: "#2563eb",
              color: "white",
              textDecoration: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Book a Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 28px 120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "70px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 560px" }}>
          <p
            style={{
              margin: "0 0 22px",
              color: "#22d3ee",
              fontSize: "13px",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            AI AUTOMATION BUILT FOR ROOFING COMPANIES
          </p>

          <h1
            style={{
              margin: "0",
              maxWidth: "800px",
              fontSize: "clamp(52px, 7vw, 86px)",
              lineHeight: "0.98",
              letterSpacing: "-4px",
            }}
          >
            Never miss another roofing lead.
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "30px 0 0",
              color: "#a9bad0",
              fontSize: "20px",
              lineHeight: "1.7",
            }}
          >
            FlowAI answers your calls, qualifies homeowners, books roofing
            estimates, and follows up automatically so your team can focus on
            selling and building roofs.
          </p>

          <div
            style={{
              marginTop: "38px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#demo"
              style={{
                padding: "16px 26px",
                borderRadius: "11px",
                background: "#2563eb",
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Book a Free Demo →
            </a>

            <a
              href="#how-it-works"
              style={{
                padding: "16px 26px",
                borderRadius: "11px",
                border: "1px solid #29405d",
                color: "#dbeafe",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              See How It Works
            </a>
          </div>

          <div
            style={{
              marginTop: "38px",
              display: "flex",
              gap: "28px",
              flexWrap: "wrap",
              color: "#9fb1c6",
              fontSize: "14px",
            }}
          >
            <span>✓ Answers 24/7</span>
            <span>✓ Books estimates</span>
            <span>✓ Follows up automatically</span>
          </div>
        </div>

        {/* AI CARD */}
        <div
          style={{
            flex: "1 1 390px",
            maxWidth: "500px",
            padding: "28px",
            borderRadius: "26px",
            background:
              "linear-gradient(145deg, rgba(37,99,235,.24), rgba(34,211,238,.08))",
            border: "1px solid #28425f",
            boxShadow: "0 40px 100px rgba(0,0,0,.35)",
          }}
        >
          <div
            style={{
              padding: "18px",
              borderRadius: "16px",
              background: "#0d1c31",
              border: "1px solid #223954",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0",
                    color: "#7f96b2",
                    fontSize: "12px",
                  }}
                >
                  INCOMING CALL
                </p>

                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  New Roofing Lead
                </p>
              </div>

              <span
                style={{
                  padding: "8px 11px",
                  background: "#0d3b32",
                  color: "#5ee6b6",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                AI ANSWERING
              </span>
            </div>

            <div
              style={{
                marginTop: "22px",
                padding: "18px",
                borderRadius: "14px",
                background: "#10243e",
                color: "#d8e6f5",
                lineHeight: "1.6",
              }}
            >
              “Thanks for calling. I can help get your roof inspection
              scheduled. May I start with your name and property address?”
            </div>
          </div>

          <div
            style={{
              marginTop: "16px",
              padding: "18px",
              borderRadius: "16px",
              background: "white",
              color: "#071326",
            }}
          >
            <p
              style={{
                margin: "0",
                color: "#64748b",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              APPOINTMENT BOOKED
            </p>

            <h3 style={{ margin: "8px 0 4px", fontSize: "20px" }}>
              Roof Inspection
            </h3>

            <p style={{ margin: "0", color: "#64748b" }}>
              Tomorrow • 2:30 PM
            </p>

            <div
              style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                color: "#475569",
                fontSize: "14px",
              }}
            >
              <span>Lead qualified</span>
              <strong style={{ color: "#16a34a" }}>✓ Complete</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          background: "#f8fbff",
          color: "#071326",
          padding: "100px 28px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "720px" }}>
            <p
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                letterSpacing: "1.8px",
                fontSize: "12px",
              }}
            >
              YOUR AI FRONT OFFICE
            </p>

            <h2
              style={{
                margin: "12px 0 18px",
                fontSize: "clamp(38px, 5vw, 58px)",
                lineHeight: "1.05",
                letterSpacing: "-2px",
              }}
            >
              More leads answered. More estimates booked.
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              FlowAI handles repetitive front-office work so your roofing
              company can respond faster and convert more opportunities.
            </p>
          </div>

          <div
            style={{
              marginTop: "55px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: "28px",
                  borderRadius: "18px",
                  background: "white",
                  border: "1px solid #e3ebf5",
                  boxShadow: "0 10px 35px rgba(15,23,42,.05)",
                }}
              >
                <div style={{ fontSize: "30px" }}>{feature.icon}</div>

                <h3
                  style={{
                    margin: "20px 0 10px",
                    fontSize: "21px",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    margin: "0",
                    color: "#64748b",
                    lineHeight: "1.7",
                  }}
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "110px 28px",
        }}
      >
        <p
          style={{
            color: "#22d3ee",
            fontWeight: "bold",
            letterSpacing: "1.8px",
            fontSize: "12px",
          }}
        >
          SIMPLE TO GET STARTED
        </p>

        <h2
          style={{
            margin: "12px 0 50px",
            maxWidth: "700px",
            fontSize: "clamp(38px, 5vw, 58px)",
            lineHeight: "1.05",
            letterSpacing: "-2px",
          }}
        >
          From missed call to booked appointment.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                padding: "30px",
                borderRadius: "18px",
                background: "#0c1a2d",
                border: "1px solid #203650",
              }}
            >
              <div
                style={{
                  color: "#22d3ee",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                {step.number}
              </div>

              <h3 style={{ fontSize: "22px", margin: "18px 0 10px" }}>
                {step.title}
              </h3>

              <p
                style={{
                  margin: "0",
                  color: "#9fb1c6",
                  lineHeight: "1.7",
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="demo"
        style={{
          padding: "30px 28px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "70px 35px",
            borderRadius: "28px",
            textAlign: "center",
            background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
          }}
        >
          <h2
            style={{
              margin: "0 auto",
              maxWidth: "750px",
              fontSize: "clamp(38px, 5vw, 60px)",
              lineHeight: "1.05",
              letterSpacing: "-2px",
            }}
          >
            Stop letting roofing leads go unanswered.
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "22px auto 30px",
              color: "#e3f3ff",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            See how FlowAI can answer your calls, book more appointments, and
            keep your pipeline moving automatically.
          </p>

          <a
            href="mailto:hello@flowai.com"
            style={{
              display: "inline-block",
              padding: "16px 28px",
              borderRadius: "11px",
              background: "white",
              color: "#1d4ed8",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Book Your Free Demo →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 28px 45px",
          borderTop: "1px solid #1b304a",
          color: "#7890aa",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          fontSize: "14px",
        }}
      >
        <strong style={{ color: "white" }}>
          Flow<span style={{ color: "#22d3ee" }}>AI</span>
        </strong>

        <span>AI automation for roofing companies.</span>
      </footer>
    </main>
  );
}