// Interactive WhatsApp demo with scripted responses + typing animation (i18n)
const formatBubble = (text) => {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <React.Fragment key={i}>
        {parts.map((p, j) =>
          p.startsWith("**") && p.endsWith("**") ? (
            <strong key={j}>{p.slice(2, -2)}</strong>
          ) : (
            <React.Fragment key={j}>{p}</React.Fragment>
          )
        )}
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
};

const DemoWidget = () => {
  const { t, lang, scripts } = useLang();
  const [activeKey, setActiveKey] = React.useState("emergency");
  const [messages, setMessages] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [responseTime, setResponseTime] = React.useState(null);
  const [actionStates, setActionStates] = React.useState([]);
  const bodyRef = React.useRef(null);
  const timeoutsRef = React.useRef([]);

  const playScript = (key, currentScripts) => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setMessages([]);
    setTyping(false);
    setResponseTime(null);

    const script = currentScripts[key];
    if (!script) return;
    const actions = script.actions || [];
    setActionStates(actions.map(() => "pending"));
    const setActionState = (idx, state) =>
      setActionStates((s) => {
        const n = s.slice();
        n[idx] = state;
        return n;
      });

    let cumulative = 0;
    script.convo.forEach((msg, i) => {
      cumulative += msg.delay;
      if (msg.role === "ai" && msg.typing) {
        const startAt = cumulative;
        const endAt = cumulative + msg.typing;
        actions.forEach((a, idx) => {
          if (a.trigger === i) {
            timeoutsRef.current.push(setTimeout(() => setActionState(idx, "running"), startAt));
            timeoutsRef.current.push(setTimeout(() => setActionState(idx, "done"), endAt));
          }
        });
        timeoutsRef.current.push(setTimeout(() => setTyping(true), startAt));
        cumulative = endAt;
        timeoutsRef.current.push(setTimeout(() => {
          setTyping(false);
          setMessages((m) => [...m, msg]);
          if (i === 1) {
            const tt = (msg.typing / 1000).toFixed(1);
            setResponseTime(tt);
          }
        }, cumulative));
      } else {
        timeoutsRef.current.push(setTimeout(() => {
          setMessages((m) => [...m, msg]);
        }, cumulative));
      }
    });
  };

  React.useEffect(() => {
    playScript(activeKey, scripts);
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, [activeKey, lang]);

  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  const activeScript = scripts[activeKey];
  const activeActions = (activeScript && activeScript.actions) || [];

  return (
    <div className="demo-shell">
      <div>
        <div className="eyebrow">{t.demo.eyebrow}</div>
        <h2 className="h-section" style={{ marginTop: 16 }}>
          {t.demo.h2a}<br />
          <span className="gradient-text">{t.demo.h2b}</span>
        </h2>
        <p className="lede" style={{ marginTop: 20 }}>{t.demo.sub}</p>

        <div className="demo-questions">
          {Object.entries(scripts).map(([key, script]) => (
            <button
              key={key}
              className={"demo-q " + (activeKey === key ? "active" : "")}
              onClick={() => setActiveKey(key)}
            >
              <span>{script.label}</span>
              <Icon.arrow className="arrow" />
            </button>
          ))}
        </div>

        <a href="https://app.qlar.ai/a31cf423" target="_blank" rel="noopener noreferrer" className="btn btn-primary demo-cta">
          {t.demo.tryFree}
          <Icon.arrow />
        </a>

        <p style={{ fontSize: 12, color: "var(--ink-400)", marginTop: 28, lineHeight: 1.5 }}>
          {t.demo.footnote}
        </p>
      </div>

      <div className="demo-phone-wrap">
        <div className="phone">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="wa-header">
              <div className="wa-avatar">Q</div>
              <div>
                <div className="wa-title">{t.demo.providerName}</div>
                <div className="wa-status"><span className="dot" /> {t.demo.online}</div>
              </div>
            </div>
            <div className="wa-body" ref={bodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={"wa-bubble " + (m.role === "user" ? "out" : "in")}>
                  {formatBubble(m.text)}
                  <span className="wa-time">{["23:47", "23:47", "23:48", "23:48", "23:49"][i] || "23:49"}</span>
                </div>
              ))}
              {typing && (
                <div className="wa-typing">
                  <span /><span /><span />
                </div>
              )}
            </div>
            <div className="wa-input">
              <div className="wa-input-pill">{t.demo.placeholder}</div>
              <div className="wa-send"><Icon.send /></div>
            </div>
          </div>
        </div>

        {responseTime && (
          <div className="response-meter">
            <span className="pulse" />
            <div>
              <strong>{responseTime}s</strong>
              <div style={{ fontSize: 10, color: "var(--ink-500)" }}>{t.demo.responseTime}</div>
            </div>
          </div>
        )}
      </div>

      <div className="demo-actions">
        <div className="eyebrow">{t.demo.behindEyebrow}</div>
        <div className="demo-actions-title">{t.demo.behindTitle}</div>
        <div className="demo-actions-sub">{t.demo.behindSub}</div>

        <div className="demo-actions-list">
          {activeActions.length === 0 ? (
            <div className="action-empty">{t.demo.idle}</div>
          ) : (
            activeActions.map((a, idx) => {
              const state = actionStates[idx] || "pending";
              return (
                <div key={idx} className={"action-row state-" + state}>
                  <div className="action-status" aria-hidden="true">
                    {state === "running" ? (
                      <span className="spinner" />
                    ) : state === "done" ? (
                      <span className="check">✓</span>
                    ) : (
                      <span className="dot" />
                    )}
                  </div>
                  <div className="action-body">
                    {a.thought && <div className="action-thought">{a.thought}</div>}
                    <div className="action-api">
                      <span className={"action-method m-" + (a.method || "GET").toLowerCase()}>{a.method}</span>
                      <code>{a.api}</code>
                    </div>
                    {a.intent && <div className="action-intent">{a.intent}</div>}
                    <div className="action-desc">{a.desc}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { DemoWidget });
