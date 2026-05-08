// Hero pillars — three outcome cards + takeaway, replaces phone scene as primary visual
const HeroPillars = () => {
  const { t } = useLang();
  const pillars = t.hero.pillars || [];
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % pillars.length), 3800);
    return () => clearInterval(id);
  }, [pillars.length]);

  const icons = [
    // conversion — bolt
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>,
    // revenue — trending up
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg>,
    // retention — repeat
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" /></svg>,
  ];

  return (
    <div className="hero-pillars">
      <div className="pillars-stack">
        {pillars.map((p, i) => (
          <div
            key={i}
            className={"pillar-card " + (active === i ? "active" : "")}
            onMouseEnter={() => setActive(i)}
          >
            <div className="pillar-head">
              <span className="pillar-icon">{icons[i]}</span>
              <span className="pillar-tag">{p.tag}</span>
            </div>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-desc">{p.desc}</p>
            <div className="pillar-metric">
              <span className="metric-num">{p.metric}</span>
              <span className="metric-label">{p.metricLabel}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pillar-takeaway">
        <span className="takeaway-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </span>
        <span>{t.hero.takeaway}</span>
      </div>
    </div>
  );
};

Object.assign(window, { HeroPillars });
