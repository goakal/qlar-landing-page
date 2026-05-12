// Main app — composes nav + hero + sections, handles tweaks + i18n
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "purple",
  "density": "default",
  "heroHook": "promise"
}/*EDITMODE-END*/;

const HOOKS = {
  promise: (t) => ({
    h1: <>{t.hero.h1a}<span className="gradient-text">{t.hero.h1b}</span></>,
    sub: t.hero.sub,
  }),
  pain: (t) => ({
    h1: t.lang === "id"
      ? <>Jam 23:47.<br /><span className="gradient-text">Pasien baru saja kirim pesan.</span></>
      : <>It's 23:47.<br /><span className="gradient-text">A patient just messaged.</span></>,
    sub: t.hero.sub,
  }),
  outcome: (t) => ({
    h1: <>Recover <span className="gradient-text">Rp 50–150jt</span> a month.</>,
    sub: t.hero.sub,
  }),
};

const AppInner = () => {
  const { t, lang } = useLang();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.accent = tweaks.accent;
    document.documentElement.dataset.density = tweaks.density;
  }, [tweaks.accent, tweaks.density]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => { if (!e.target.closest(".nav")) setMobileOpen(false); };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [mobileOpen]);

  const hookFn = HOOKS[tweaks.heroHook] || HOOKS.promise;
  const hook = hookFn({ ...t, lang });
  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className={"nav " + (scrolled ? "scrolled" : "")}>
        <div className="container nav-inner">
          <div className="nav-logo"><QlarLogo size={26} /></div>
          <div className="nav-links">
            <a href="#outcomes">{t.nav.outcomes}</a>
            <a href="#how">{t.nav.how}</a>
            <a href="#demo">{t.nav.demo}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#faq">{t.nav.faq}</a>
          </div>
          <div className="nav-actions">
            <LangToggle />
            {/* Desktop */}
            <a href="#" className="btn btn-ghost btn-sm nav-desktop-item">{t.nav.signin}</a>
            <a href="https://wa.me/6280989999" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm nav-desktop-item">
              <Icon.whatsapp /> {t.nav.chat}
            </a>
            <a href="https://app.qlar.ai/a31cf423" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm nav-desktop-item">{t.nav.cta} <Icon.arrow /></a>
            {/* Mobile */}
            <a href="#" className="btn btn-ghost btn-sm nav-mobile-item">{t.nav.signin}</a>
            <button className="nav-burger nav-mobile-item" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              {mobileOpen ? <Icon.x /> : <Icon.menu />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="nav-mobile-menu">
            <div className="container">
              <div className="nav-mobile-links">
                {[["#outcomes", t.nav.outcomes], ["#how", t.nav.how], ["#demo", t.nav.demo], ["#pricing", t.nav.pricing], ["#faq", t.nav.faq]].map(([href, label]) => (
                  <a key={href} href={href} className="nav-mobile-link" onClick={closeMenu}>{label}</a>
                ))}
              </div>
              <div className="nav-mobile-divider" />
              <div className="nav-mobile-ctas">
                <a href="#" className="btn btn-ghost btn-sm" onClick={closeMenu}>{t.nav.signin}</a>
                <a href="https://wa.me/6280989999" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm" onClick={closeMenu}>
                  <Icon.whatsapp /> {t.nav.chat}
                </a>
                <a href="https://app.qlar.ai/a31cf423" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" onClick={closeMenu}>{t.nav.cta} <Icon.arrow /></a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section className="hero" data-screen-label="Hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 99, background: "var(--qlar-50)", border: "1px solid var(--qlar-100)", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--qlar-500)" }} />
              <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--qlar-700)" }}>{t.badge}</span>
            </div>
            <h1 className="h-display">{hook.h1}</h1>
            <p className="lede" style={{ marginTop: 24, maxWidth: 540 }}>{hook.sub}</p>
            <div className="hero-cta">
              <a href="https://app.qlar.ai/a31cf423" target="_blank" rel="noopener noreferrer" className="btn btn-brand">{t.hero.ctaPrimary} <Icon.arrow /></a>
              <a href="https://wa.me/6280989999" target="_blank" rel="noopener noreferrer" className="btn btn-wa"><Icon.whatsapp /> {t.hero.ctaChat}</a>
            </div>
            <div className="hero-meta">
              <span><span className="pip" />{t.hero.metaLive}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon.whatsapp style={{ color: "var(--wa-green)" }} /> {t.hero.metaWa}
              </span>
            </div>
          </div>
          <HeroScene />
        </div>
      </section>

      <TryLive />
      <Outcomes />
      <HowItWorks />
      <section id="demo" className="section" data-screen-label="Demo">
        <div className="container"><DemoWidget /></div>
      </section>
      <Pricing />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />

      <TweaksPanel title="Tweaks" defaultOpen={false}>
        <TweakSection title="Brand accent">
          <TweakRadio
            value={tweaks.accent}
            options={[
              { value: "purple", label: "Qlar Purple" },
              { value: "indigo", label: "Indigo" },
              { value: "green", label: "WA Green" },
            ]}
            onChange={(v) => setTweak("accent", v)}
          />
        </TweakSection>
        <TweakSection title="Hero hook">
          <TweakRadio
            value={tweaks.heroHook}
            options={[
              { value: "promise", label: "Promise" },
              { value: "pain", label: "Pain" },
              { value: "outcome", label: "Outcome" },
            ]}
            onChange={(v) => setTweak("heroHook", v)}
          />
        </TweakSection>
        <TweakSection title="Density">
          <TweakRadio
            value={tweaks.density}
            options={[
              { value: "packed", label: "Packed" },
              { value: "default", label: "Default" },
              { value: "airy", label: "Airy" },
            ]}
            onChange={(v) => setTweak("density", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

const App = () => (
  <LangProvider>
    <AppInner />
  </LangProvider>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
