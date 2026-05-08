// Qlar logo as inline SVG (recreated from brand mark)
const QlarLogo = ({ size = 28, color = "var(--qlar-500)", showWord = true }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Qlar">
      <circle cx="28" cy="28" r="22" fill="none" stroke={color} strokeWidth="9" />
      <circle cx="44" cy="46" r="6" fill={color} />
      <rect x="38" y="38" width="4" height="14" rx="2" transform="rotate(-45 40 45)" fill={color} />
    </svg>
    {showWord && (
      <span style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: size * 0.95,
        letterSpacing: "-0.02em",
        color: color,
        lineHeight: 1,
      }}>Qlar</span>
    )}
  </div>
);

const Icon = {
  arrow: (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  check: (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  plus: (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  whatsapp: (props) => (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.001 3.2c-7.069 0-12.8 5.731-12.8 12.8 0 2.255.595 4.464 1.722 6.408L3.2 28.8l6.555-1.717a12.78 12.78 0 0 0 6.246 1.6c7.069 0 12.8-5.731 12.8-12.8s-5.731-12.683-12.8-12.683Zm0 23.32a10.55 10.55 0 0 1-5.376-1.473l-.385-.231-3.892 1.022 1.04-3.795-.25-.395a10.61 10.61 0 0 1-1.628-5.665c0-5.876 4.781-10.657 10.657-10.657S26.658 9.96 26.658 15.836s-4.781 10.684-10.657 10.684Z" />
    </svg>
  ),
  bolt: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  shield: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
    </svg>
  ),
  graph: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
    </svg>
  ),
  heart: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z"/>
    </svg>
  ),
  send: (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m3 3 18 9-18 9V3z" />
    </svg>
  ),
};

const StatPill = ({ children, color = "var(--qlar-500)" }) => (
  <span style={{
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    padding: "4px 10px",
    borderRadius: 99,
    background: "rgba(118, 114, 221, 0.10)",
    color: color,
    fontWeight: 600,
    letterSpacing: "0.05em",
  }}>{children}</span>
);

Object.assign(window, { QlarLogo, Icon, StatPill });
