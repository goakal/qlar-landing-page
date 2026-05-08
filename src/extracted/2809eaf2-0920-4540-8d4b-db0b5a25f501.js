// Sections: Outcomes, Steps, Pricing, Stats, FAQ, Final CTA — i18n-aware
const Outcomes = () => {
  const { t } = useLang();
  return (
    <section id="outcomes" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.outcomes.eyebrow}</span>
          <h2 className="h-section" style={{ marginTop: 8 }}>
            {t.outcomes.h2a}<br />
            <span className="gradient-text">{t.outcomes.h2b}</span>
          </h2>
          <p className="lede" style={{ marginTop: 20 }}>{t.outcomes.sub}</p>
        </div>
        <div className="outcomes">
          {t.outcomes.items.map((o, i) => (
            <div key={i} className="outcome-card">
              <div className="outcome-metric">
                {o.metric} <span className="unit">{o.unit}</span>
              </div>
              <div className="outcome-title">{o.title}</div>
              <div className="outcome-desc">{o.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { t } = useLang();
  return (
    <section id="how" className="section" style={{ background: "var(--ink-50)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.how.eyebrow}</span>
          <h2 className="h-section" style={{ marginTop: 8 }}>{t.how.h2}</h2>
        </div>
        <div className="steps">
          {t.how.steps.map((s) => (
            <div key={s.n} className="step">
              <div className="step-num">{s.n}</div>
              <h3 className="h-card">{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing — interactive per-conversation calculator
const Pricing = () => {
  const { t, lang } = useLang();
  const [vol, setVol] = React.useState(1000);
  const LOW_RATE = 3000;
  const HIGH_RATE = 6000;
  const fmt = (n) => {
    if (lang === "id") return "Rp " + n.toLocaleString("id-ID");
    return "Rp " + n.toLocaleString("en-US");
  };
  const fmtShort = (n) => {
    if (n >= 1_000_000) return "Rp " + (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "jt";
    if (n >= 1000) return "Rp " + (n / 1000).toFixed(0) + "rb";
    return fmt(n);
  };
  const tiers = [500, 1000, 2500, 5000, 10000];
  return (
    <section id="pricing" className="section" style={{ background: "var(--ink-50)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.pricing.eyebrow}</span>
          <h2 className="h-section" style={{ marginTop: 8 }}>
            {t.pricing.h2a}<br /><span className="gradient-text">{t.pricing.h2b}</span>
          </h2>
          <p className="lede" style={{ marginTop: 20 }}>{t.pricing.sub}</p>
        </div>

        {/* Calculator */}
        <div className="card pricing-calc-card" style={{ padding: 36, marginBottom: 32, background: "white", borderRadius: "var(--radius-xl)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "center" }} className="pricing-calc-grid">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-700)" }}>{t.pricing.sliderLabel}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--qlar-600)" }}>{vol.toLocaleString(lang === "id" ? "id-ID" : "en-US")}</span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={vol}
                onChange={(e) => setVol(parseInt(e.target.value))}
                style={{ width: "100%", accentColor: "var(--qlar-500)" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-400)", marginTop: 4, fontFamily: "var(--font-mono)" }}>
                <span>100</span><span>2,500</span><span>5,000</span><span>10,000+</span>
              </div>
              <div style={{ marginTop: 24, padding: 18, borderRadius: "var(--radius)", background: "var(--qlar-50)", border: "1px solid var(--qlar-100)" }}>
                <div style={{ fontSize: 12, color: "var(--qlar-700)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>{t.pricing.monthly}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 8, fontFamily: "var(--font-display)" }}>
                  <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink-900)" }}>{fmt(vol * LOW_RATE)}</span>
                  <span style={{ color: "var(--ink-500)" }}>—</span>
                  <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink-900)" }}>{fmt(vol * HIGH_RATE)}</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 6, fontFamily: "var(--font-mono)" }}>
                  Rp 3,000 ({t.pricing.lowEnd}) — Rp 6,000 ({t.pricing.highEnd}) {t.pricing.perConv}
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-700)", marginBottom: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{t.pricing.includes}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                {t.pricing.includesItems.map((it, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-700)", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: 99, background: "var(--qlar-100)", color: "var(--qlar-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                      <Icon.check style={{ width: 10, height: 10 }} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Volume table */}
        <div className="card pricing-table-card" style={{ padding: 0, background: "white", borderRadius: "var(--radius-xl)", overflow: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
            <thead>
              <tr style={{ background: "var(--ink-50)", borderBottom: "1px solid var(--ink-100)" }}>
                {t.pricing.tableHead.map((h, i) => (
                  <th key={i} style={{ textAlign: i === 0 ? "left" : "right", padding: "16px 24px", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--ink-500)", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tiers.map((n) => {
                const low = n * LOW_RATE;
                const high = n * HIGH_RATE;
                const avgBookingCost = ((low + high) / 2) / (n * 0.6);
                return (
                  <tr key={n} style={{ borderBottom: "1px solid var(--ink-100)", transition: "background 0.15s ease" }} onMouseEnter={(e) => e.currentTarget.style.background = "var(--qlar-50)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <td style={{ padding: "20px 24px", fontWeight: 600, fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: "-0.01em", color: "var(--ink-900)" }}>
                      {n.toLocaleString(lang === "id" ? "id-ID" : "en-US")}
                    </td>
                    <td style={{ padding: "20px 24px", textAlign: "right", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--ink-700)" }}>{fmtShort(low)}</td>
                    <td style={{ padding: "20px 24px", textAlign: "right", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--ink-700)" }}>{fmtShort(high)}</td>
                    <td style={{ padding: "20px 24px", textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--qlar-600)" }}>~{fmtShort(Math.round(avgBookingCost / 100) * 100)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: "var(--ink-400)", marginTop: 16, textAlign: "center", fontFamily: "var(--font-mono)" }}>{t.pricing.tableNote}</p>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="https://wa.me/6280989999" target="_blank" rel="noopener noreferrer" className="btn btn-wa"><Icon.whatsapp /> {t.pricing.ctaTalk}</a>
        </div>
      </div>

      <style>{`
        .pricing-calc-grid > div { min-width: 0; }
        @media (max-width: 880px) {
          .pricing-calc-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .pricing-calc-card { padding: 24px !important; }
          .pricing-calc-grid > div:first-child > div:first-child > span:last-child { font-size: 26px !important; }
          .pricing-calc-grid > div:first-child > div:last-child > div:nth-child(2) { flex-wrap: wrap; }
          .pricing-calc-grid > div:first-child > div:last-child > div:nth-child(2) span { font-size: 24px !important; }
          .pricing-table-card table th,
          .pricing-table-card table td { padding: 12px 14px !important; font-size: 13px !important; }
          .pricing-table-card table th { font-size: 10.5px !important; }
        }
      `}</style>
    </section>
  );
};

const SocialProof = () => {
  const { t } = useLang();
  return (
    <section id="proof" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="stats">
          {t.proof.stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
              <div className="src">{s.src}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useLang();
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="h-section" style={{ marginTop: 8 }}>{t.faq.h2}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((item, i) => (
            <details key={i} className="faq">
              <summary>
                {item.q}
                <span className="toggle"><Icon.plus /></span>
              </summary>
              <div className="faq-body">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const { t } = useLang();
  return (
    <section id="cta" className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="cta-final">
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>{t.cta.eyebrow}</span>
          <h2 style={{ marginTop: 12 }}>{t.cta.h2a}<br />{t.cta.h2b}</h2>
          <p>{t.cta.sub}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.qlar.ai/a31cf423" target="_blank" rel="noopener noreferrer" className="btn btn-brand" style={{ background: "white", color: "var(--qlar-700)" }}>
              {t.cta.primary} <Icon.arrow />
            </a>
            <a href="https://wa.me/6280989999" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <Icon.whatsapp /> {t.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <QlarLogo size={22} />
            <span>{t.footer.rights}</span>
          </div>
          <div className="footer-links">
            {t.footer.links.map((l, i) => <a key={i} href="#">{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Language toggle (compact pill)
const LangToggle = () => {
  const { lang, setLang } = useLang();
  return (
    <div style={{
      display: "inline-flex",
      background: "var(--ink-100)",
      borderRadius: 99,
      padding: 3,
      gap: 2,
    }}>
      {["en", "id"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: "6px 12px",
            border: "none",
            background: lang === l ? "white" : "transparent",
            color: lang === l ? "var(--ink-900)" : "var(--ink-500)",
            borderRadius: 99,
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: lang === l ? "0 1px 3px rgba(14,13,43,0.1)" : "none",
            transition: "all 0.15s ease",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.05em",
          }}
        >{l.toUpperCase()}</button>
      ))}
    </div>
  );
};

Object.assign(window, { Outcomes, HowItWorks, Pricing, SocialProof, FAQ, FinalCTA, Footer, LangToggle });
