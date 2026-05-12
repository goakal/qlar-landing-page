# Try-Live Agent Section — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new section between Hero and Outcomes that embeds the real Qlar agent via Pusaka Container, with the page's existing visual language.

**Architecture:** The codebase is a bundled single-page React app — source files in `src/extracted/*.{js,html}` get repacked into `index.html` by `scripts/pack-bundle.mjs`. We edit four source files (template HTML, i18n strings, sections module, main app composition) then repack. The Pusaka container is a third-party web component loaded from `app-container-prod.pusaka.ai`; JSX renders unknown lowercase tags as custom elements unchanged, so no special registration is needed.

**Tech Stack:** React 18 (via Babel standalone), plain CSS in a single `<style>` block, vanilla JS modules. No build step except `node scripts/pack-bundle.mjs`. No automated tests — verification is by reading the resulting source and previewing in a browser (manual).

**Spec:** `docs/superpowers/specs/2026-05-12-try-live-agent-section-design.md`

---

## File Structure

Files to modify (all under `src/extracted/`):

- `__template.html` — add the Pusaka script tag in `<head>`, add `.try-live-card` CSS to the existing `<style>` block.
- `3387ede2-6a4f-47a4-bf6d-bb2e3e729145.js` — i18n strings; add a `tryLive` block under both `I18N.en` and `I18N.id`.
- `2809eaf2-0920-4540-8d4b-db0b5a25f501.js` — sections module; add a `TryLive` component and export it on `window` so it's visible to the main app file.
- `2433394d-605a-451a-ab2d-c1d4ec3b33ad.js` — main app composition; render `<TryLive />` between the closing `</section>` of `.hero` and `<Outcomes />`.

File regenerated:

- `index.html` — repacked from the above sources by `node scripts/pack-bundle.mjs`. Do not hand-edit.

---

## Chunk 1: Source changes

### Task 1: Add Pusaka script to the template head

**Files:**
- Modify: `src/extracted/__template.html:8` (insert after the `fonts.gstatic.com` preconnect link)

- [ ] **Step 1.1: Insert the script tag**

Use `Edit` to add the Pusaka container script. The exact `old_string` is the existing `fonts.gstatic.com` preconnect line; replace with the same line plus a new line for the Pusaka script:

```html
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <script type="module" crossorigin src="https://app-container-prod.pusaka.ai/pusaka-container.mjs"></script>
```

- [ ] **Step 1.2: Verify**

`grep -n "pusaka-container.mjs" src/extracted/__template.html` → expect one line near the top of `<head>`.

---

### Task 2: Add CSS for the try-live section

**Files:**
- Modify: `src/extracted/__template.html` — insert a new CSS block immediately before `/* ============ Tweaks accent overrides ============ */` (currently line 1983).

- [ ] **Step 2.1: Insert the CSS block**

Use `Edit` with `old_string` set to the unique sentinel `/* ============ Tweaks accent overrides ============ */` and `new_string` set to:

```css
/* ============ Try-live agent embed ============ */
.try-live {
  background: var(--ink-50);
}
.try-live-card {
  max-width: 720px;
  margin: 0 auto;
  background: var(--card);
  border: 1px solid var(--ink-100);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  padding: 12px;
  position: relative;
  overflow: hidden;
}
.try-live-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, var(--qlar-500), var(--qlar-300));
}
.try-live-card pusaka-container {
  display: block;
  width: 100%;
  min-height: 600px;
  border-radius: calc(var(--radius-xl) - 12px);
  overflow: hidden;
}
@media (max-width: 880px) {
  .try-live-card pusaka-container { min-height: 520px; }
}
@media (max-width: 560px) {
  .try-live-card { padding: 8px; }
  .try-live-card pusaka-container { min-height: 480px; }
}

/* ============ Tweaks accent overrides ============ */
```

- [ ] **Step 2.2: Verify**

`grep -n "try-live-card" src/extracted/__template.html` → expect ~5 matches (selector definitions + nested rule).

---

### Task 3: Add i18n strings (English)

**Files:**
- Modify: `src/extracted/3387ede2-6a4f-47a4-bf6d-bb2e3e729145.js:127` (insert before the existing `// Final CTA` comment in the `en` block)

- [ ] **Step 3.1: Insert the English `tryLive` block**

Use `Edit`. `old_string`:

```js
      ],
    },
    // Final CTA
    cta: {
      eyebrow: "§ Ship in 48 hours",
```

`new_string`:

```js
      ],
    },
    // Try-live agent
    tryLive: {
      eyebrow: "§ Talk to the agent",
      h2a: "Skip the pitch.",
      h2b: "Talk to the real Qlar.",
      sub: "This is the same agent live with our pilot providers. Ask about booking, pricing, after-hours — anything a patient would.",
    },
    // Final CTA
    cta: {
      eyebrow: "§ Ship in 48 hours",
```

This anchor (`§ Ship in 48 hours`) is unique to the `en` block — verified by grep.

- [ ] **Step 3.2: Verify**

`grep -n "Talk to the real Qlar" src/extracted/3387ede2-6a4f-47a4-bf6d-bb2e3e729145.js` → expect one match in the `en` block.

---

### Task 4: Add i18n strings (Indonesian)

**Files:**
- Modify: `src/extracted/3387ede2-6a4f-47a4-bf6d-bb2e3e729145.js` (insert before the `cta: { eyebrow: "§ Aktif dalam 48 jam"` block in the `id` block)

- [ ] **Step 4.1: Insert the Indonesian `tryLive` block**

Use `Edit`. `old_string`:

```js
      ],
    },
    cta: {
      eyebrow: "§ Aktif dalam 48 jam",
```

`new_string`:

```js
      ],
    },
    tryLive: {
      eyebrow: "§ Bicara dengan agen",
      h2a: "Lewati pitch.",
      h2b: "Bicara langsung dengan Qlar.",
      sub: "Ini agen yang sama yang aktif di mitra pilot kami. Tanya soal booking, harga, jam malam — apa pun yang akan pasien tanyakan.",
    },
    cta: {
      eyebrow: "§ Aktif dalam 48 jam",
```

This anchor (`§ Aktif dalam 48 jam`) is unique to the `id` block.

- [ ] **Step 4.2: Verify**

`grep -n "Bicara langsung dengan Qlar" src/extracted/3387ede2-6a4f-47a4-bf6d-bb2e3e729145.js` → expect one match in the `id` block.

---

### Task 5: Add the `TryLive` component

**Files:**
- Modify: `src/extracted/2809eaf2-0920-4540-8d4b-db0b5a25f501.js` — add `TryLive` after `HowItWorks` (so the component definitions appear in roughly the order they render); also add to the `window` export at the bottom of the file.

- [ ] **Step 5.1: Insert the component definition**

Use `Edit`. `old_string` is the closing of `HowItWorks` followed by the comment that precedes `Pricing`:

```js
};

// Pricing — interactive per-conversation calculator
const Pricing = () => {
```

`new_string`:

```js
};

const TryLive = () => {
  const { t } = useLang();
  return (
    <section id="try-live" className="section try-live">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.tryLive.eyebrow}</span>
          <h2 className="h-section" style={{ marginTop: 8 }}>
            {t.tryLive.h2a}<br />
            <span className="gradient-text">{t.tryLive.h2b}</span>
          </h2>
          <p className="lede" style={{ marginTop: 20 }}>{t.tryLive.sub}</p>
        </div>
        <div className="try-live-card">
          <pusaka-container
            data-agent-id="a31cf423-a159-46c7-8ead-5cba68a78db6"
            data-theme="light"
            data-app-mode="chat"
            data-enable-autofocus="false"
          ></pusaka-container>
        </div>
      </div>
    </section>
  );
};

// Pricing — interactive per-conversation calculator
const Pricing = () => {
```

- [ ] **Step 5.2: Add `TryLive` to the window export**

Use `Edit`. `old_string`:

```js
Object.assign(window, { Outcomes, HowItWorks, Pricing, SocialProof, FAQ, FinalCTA, Footer, LangToggle });
```

`new_string`:

```js
Object.assign(window, { Outcomes, HowItWorks, TryLive, Pricing, SocialProof, FAQ, FinalCTA, Footer, LangToggle });
```

- [ ] **Step 5.3: Verify**

```bash
grep -n "const TryLive\|TryLive," src/extracted/2809eaf2-0920-4540-8d4b-db0b5a25f501.js
```

Expect two matches: the `const TryLive = () => {` definition and the entry in the `Object.assign` export.

---

### Task 6: Render `<TryLive />` in the main app

**Files:**
- Modify: `src/extracted/2433394d-605a-451a-ab2d-c1d4ec3b33ad.js:124-126` (insert between hero's closing `</section>` and `<Outcomes />`)

- [ ] **Step 6.1: Insert the render call**

Use `Edit`. `old_string`:

```jsx
      </section>

      <Outcomes />
      <HowItWorks />
```

`new_string`:

```jsx
      </section>

      <TryLive />
      <Outcomes />
      <HowItWorks />
```

- [ ] **Step 6.2: Verify**

`grep -n "<TryLive />" src/extracted/2433394d-605a-451a-ab2d-c1d4ec3b33ad.js` → expect one match between the hero section close and the `<Outcomes />` line.

---

### Task 7: Commit source changes

- [ ] **Step 7.1: Stage and review the diff**

```bash
git add src/extracted/__template.html \
        src/extracted/3387ede2-6a4f-47a4-bf6d-bb2e3e729145.js \
        src/extracted/2809eaf2-0920-4540-8d4b-db0b5a25f501.js \
        src/extracted/2433394d-605a-451a-ab2d-c1d4ec3b33ad.js
git diff --staged --stat
```

Expected: 4 files changed, ~50 insertions, 0 deletions.

- [ ] **Step 7.2: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat: add try-live agent section under hero

New section between hero and Outcomes that embeds the real Qlar agent
via Pusaka Container. Uses light theme, autofocus disabled (to avoid
auto-scrolling past the hero on page load), and the page's existing
section/card visual language. i18n keys added for en and id.

Source-only — index.html will be repacked in the next commit.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Chunk 2: Repack and verify

### Task 8: Repack the bundle

- [ ] **Step 8.1: Run the packer**

```bash
node scripts/pack-bundle.mjs
```

Expected stdout: `Repacked index.html (NNN bytes)` where NNN is a number slightly larger than the previous size.

- [ ] **Step 8.2: Verify the repacked HTML contains the new content**

```bash
grep -c "tryLive" index.html
grep -c "try-live-card" index.html
grep -c "Skip the pitch" index.html
```

Each should return a count ≥ 1. (They live inside the base64-encoded bundle, but `pack-bundle.mjs` does NOT gzip-encode text files for the entries that have `compressed: false`; some entries ARE gzipped. So these greps may return 0 even on success — if so, fall back to the script's own output line, which is the authoritative confirmation.)

Authoritative check (works regardless of compression):

```bash
node -e "
const fs = require('fs');
const zlib = require('zlib');
const html = fs.readFileSync('index.html', 'utf8');
const m = html.match(/<script type=\"__bundler\/manifest\">([\\s\\S]*?)<\\/script>/);
const manifest = JSON.parse(m[1]);
let hits = 0;
for (const [uuid, entry] of Object.entries(manifest)) {
  if (!entry.mime.includes('javascript') && !entry.mime.includes('jsx')) continue;
  let buf = Buffer.from(entry.data, 'base64');
  if (entry.compressed) buf = zlib.gunzipSync(buf);
  const text = buf.toString('utf8');
  if (text.includes('tryLive') || text.includes('try-live-card') || text.includes('Skip the pitch')) {
    hits++;
    console.log('hit in', uuid, '(' + entry.mime + ')');
  }
}
console.log('total hits:', hits);
"
```

Expect ≥ 3 hits (template HTML for `try-live-card`, i18n JS for `tryLive`, main app JS for `<TryLive />`).

- [ ] **Step 8.3: Verify the Pusaka script tag is in the template entry**

The template HTML is stored as a JSON-encoded string in a `<script type="__bundler/template">` block — verify with:

```bash
grep -c "pusaka-container.mjs" index.html
```

Expect ≥ 1 (the URL appears in the template string).

---

### Task 9: Commit the rebuilt bundle

- [ ] **Step 9.1: Stage and inspect**

```bash
git add index.html
git diff --staged --stat
```

Expected: 1 file changed, small line-count change (the bundle is one giant line).

- [ ] **Step 9.2: Commit**

```bash
git commit -m "$(cat <<'EOF'
build: repack index.html with try-live agent section

Regenerated from src/extracted/* via scripts/pack-bundle.mjs.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 10: Manual verification (user, not agent)

> The agent stops at Task 9. This section is a checklist for the user to run in a browser. Do not skip it.

The agent has no browser available. The user verifies by opening `index.html` directly or via `python -m http.server 8000` and checking:

1. New section renders between the hero and Outcomes section, with the `--ink-50` tinted background.
2. Eyebrow shows `§ Talk to the agent` (or `§ Bicara dengan agen` in Indonesian after toggling).
3. Heading reads `Skip the pitch. <gradient>Talk to the real Qlar.</gradient>` (line break between the two halves).
4. The chat card is centered, max-width ~720px, has rounded corners, a thin purple gradient strip on top, and a soft drop shadow.
5. The `<pusaka-container>` loads inside the card (chat interface appears, not an empty space).
6. Page initial scroll position is at the top (hero), NOT auto-scrolled to the chat — this confirms `data-enable-autofocus="false"` is working.
7. Embed height is roughly: 600px on desktop, 520px on tablet (resize window), 480px on mobile (≤560px).
8. Switching language with the `LangToggle` updates the eyebrow, headline, and lede.
9. The existing simulated `#demo` section further down still renders normally.
10. No console errors related to `pusaka-container.mjs` or `<pusaka-container>`.

If any of those fail, return to the relevant task and adjust.

---

## Notes for the implementing engineer

- **No automated tests in this repo.** Verification is by file content (`grep`) and the manual browser checklist in Task 10. Don't try to add a test runner.
- **The `Edit` tool with unique anchors is the right primitive here** — the source files are small (under 400 lines each) and have unambiguous landmarks (comments, unique strings). Don't `Write` whole files when an `Edit` with a small `old_string`/`new_string` will do.
- **The pack step is deterministic** — running `pack-bundle.mjs` twice in a row produces byte-identical output, so it's safe to re-run if a source edit was missed.
- **`pusaka-container` is a custom element**, not a React component. JSX passes lowercase tags through verbatim with `data-*` attributes preserved. No declaration or import needed.
- **No nav changes.** The section sits right under the hero and isn't a destination users navigate *to* — they land on it.
- **Don't touch the existing `#demo` section** (the simulated WhatsApp scenario UI). It coexists with this new section by design.
