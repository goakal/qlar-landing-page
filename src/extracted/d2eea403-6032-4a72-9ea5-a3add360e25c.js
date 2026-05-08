// Hero animated scene — 6-beat narrative loop
const HeroScene = () => {
  const [beat, setBeat] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const total = 6;
  const beatDurations = [2200, 1800, 2200, 2000, 2200, 1600]; // ms per beat

  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setBeat((b) => (b + 1) % total), beatDurations[beat]);
    return () => clearTimeout(t);
  }, [beat, paused]);

  // Phone configurations per beat
  const mainMessages = [
    { in: "My kid has a fever. Can I book a pediatrician for tomorrow 8am?", out: null, who: "Diana", typing: false },
    { in: "My kid has a fever. Can I book a pediatrician for tomorrow 8am?", out: null, who: "Diana", typing: true },
    { in: "My kid has a fever. Can I book a pediatrician for tomorrow 8am?", out: "Yes — Dr. Sari, 8:00 AM, Kemang branch. Confirm?", who: "Diana", typing: false },
    { in: "My kid has a fever. Can I book a pediatrician for tomorrow 8am?", out: "Yes — Dr. Sari, 8:00 AM, Kemang branch. Confirm?", who: "Diana", typing: false },
    { in: "Confirmed ✓", out: "See you at 8 AM. Bring vaccination card.", who: "Diana", typing: false },
    { in: "Confirmed ✓", out: "See you at 8 AM. Bring vaccination card.", who: "Diana", typing: false },
  ];

  const clockText = beat < 5 ? "23:47" : "06:00";
  const clockIcon = beat < 5 ? "🌙" : "☀️";

  // Multi-phone reveal at beat 4
  const showSidePhones = beat >= 3;
  const showDashboard = beat >= 4;
  const hubVisible = beat >= 1 && beat <= 4;

  return (
    <div className="hero-scene" role="img" aria-label="Animated illustration: a worried parent's after-hours WhatsApp inquiry is answered instantly by Qlar's AI agent. Multiple patients receive replies simultaneously. A dashboard tallies recovered bookings overnight.">
      {/* Clock */}
      <div className="scene-clock">
        <span className="moon">{clockIcon}</span>
        <span>{clockText} WIB</span>
      </div>

      {/* Beat progress */}
      <div className="scene-progress">
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} className={i === beat ? "active" : ""} />
        ))}
      </div>

      <div className="scene-stage">
        {/* AI hub */}
        <div className="s-hub" style={{
          opacity: hubVisible ? 1 : 0.3,
          transition: "opacity 0.5s ease",
        }}>
          {hubVisible && <>
            <div className="s-hub-ring" />
            <div className="s-hub-ring" />
            <div className="s-hub-ring" />
          </>}
          <div className="s-hub-core">Q</div>
        </div>

        {/* Connection lines (SVG) when hub active */}
        {hubVisible && (
          <svg className="msg-flow" style={{ inset: 0, width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(118,114,221,0)" />
                <stop offset="50%" stopColor="rgba(118,114,221,0.6)" />
                <stop offset="100%" stopColor="rgba(118,114,221,0)" />
              </linearGradient>
            </defs>
            {showSidePhones && (
              <>
                <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="rgba(118,114,221,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="rgba(118,114,221,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
              </>
            )}
            <line x1="50%" y1="80%" x2="50%" y2="55%" stroke="rgba(118,114,221,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        )}

        {/* Main phone — bottom center */}
        <div className="s-phone" style={{
          left: "50%",
          bottom: showDashboard ? "30%" : "8%",
          transform: `translateX(-50%) scale(${showDashboard ? 0.7 : 1})`,
          zIndex: 4,
        }}>
          <div className="s-phone-screen">
            <div className="s-msg in">{mainMessages[beat].in}</div>
            {mainMessages[beat].typing && (
              <div className="s-msg in" style={{ display: "inline-flex", gap: 3, padding: "8px 10px" }}>
                <span style={{ width: 4, height: 4, borderRadius: 99, background: "var(--ink-400)", animation: "typing 1.2s infinite" }} />
                <span style={{ width: 4, height: 4, borderRadius: 99, background: "var(--ink-400)", animation: "typing 1.2s infinite 0.2s" }} />
                <span style={{ width: 4, height: 4, borderRadius: 99, background: "var(--ink-400)", animation: "typing 1.2s infinite 0.4s" }} />
              </div>
            )}
            {mainMessages[beat].out && <div className="s-msg out">{mainMessages[beat].out}</div>}
          </div>
        </div>

        {/* Side phone left */}
        <div className="s-phone" style={{
          left: "4%",
          top: "10%",
          width: 110,
          height: 200,
          opacity: showSidePhones ? 1 : 0,
          transform: showSidePhones ? "rotate(-8deg)" : "rotate(-8deg) translateY(20px) scale(0.9)",
          zIndex: 2,
        }}>
          <div className="s-phone-screen">
            <div className="s-msg in" style={{ fontSize: 7 }}>Reschedule facial?</div>
            <div className="s-msg out" style={{ fontSize: 7 }}>Moved to Sat 14:00 ✓</div>
          </div>
        </div>

        {/* Side phone right */}
        <div className="s-phone" style={{
          right: "4%",
          top: "12%",
          width: 110,
          height: 200,
          opacity: showSidePhones ? 1 : 0,
          transform: showSidePhones ? "rotate(8deg)" : "rotate(8deg) translateY(20px) scale(0.9)",
          zIndex: 2,
        }}>
          <div className="s-phone-screen">
            <div className="s-msg in" style={{ fontSize: 7 }}>Berapa harga botox?</div>
            <div className="s-msg out" style={{ fontSize: 7 }}>Mulai Rp 2.5jt — konsul gratis</div>
          </div>
        </div>

        {/* Dashboard */}
        <div className={"s-dashboard" + (showDashboard ? " show" : "")}>
          <div className="s-stat">
            <div className="v">12</div>
            <div className="l">Bookings recovered</div>
          </div>
          <div style={{ width: 1, background: "var(--ink-100)" }} />
          <div className="s-stat">
            <div className="v">Rp 8.4jt</div>
            <div className="l">Revenue tonight</div>
          </div>
          <div style={{ width: 1, background: "var(--ink-100)" }} />
          <div className="s-stat">
            <div className="v">Rp 12rb</div>
            <div className="l">Cost per booking</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="scene-controls">
        <button onClick={() => setPaused((p) => !p)} title={paused ? "Play" : "Pause"} className={paused ? "" : "active"}>
          {paused ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
          )}
        </button>
        <button onClick={() => setBeat((b) => (b + 1) % total)} title="Next beat">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l12 8-12 8V4z"/></svg>
        </button>
      </div>
    </div>
  );
};

Object.assign(window, { HeroScene });
