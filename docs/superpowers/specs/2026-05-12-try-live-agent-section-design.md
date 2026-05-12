# Try-Live Agent Section — Design

## Goal

Add a new section to the Qlar landing page that embeds the real, working Qlar agent via Pusaka Container. The section sits directly below the hero, so visitors can interact with the actual product immediately after reading the value prop.

## Placement

Between the existing hero and the existing `Outcomes` section.

```
nav
hero
TryLive   ← new
Outcomes
HowItWorks
#demo (existing simulated chat — unchanged)
Pricing
SocialProof
FAQ
FinalCTA
Footer
```

The existing simulated `#demo` section is kept as-is. It plays a different role (visualizing the agent's API-call reasoning with pre-scripted scenarios) and is separated from the new section by Outcomes + How it works, so the two don't feel redundant.

## Visual design

### Section frame
- Background: `var(--ink-50)` (#F8F8FC) — same band treatment as `How it works` and `Pricing`.
- Padding: standard `.section` (120px desktop, 80px mobile).
- `section-head` block (eyebrow + h2 + lede), centered, max-width 760px — matches every other section's head pattern.

### Chat card
- White surface (`var(--card)`), centered, max-width 720px.
- `border-radius: var(--radius-xl)` (32px).
- `border: 1px solid var(--ink-100)`, `box-shadow: var(--shadow-lg)`.
- 3px-tall gradient strip across the top edge (`linear-gradient(90deg, var(--qlar-500), var(--qlar-300))`) — echoes the hover treatment on `.outcome-card::before`.
- 12px internal padding around the embed so the chat surface isn't flush with the card edge.
- Embed `min-height`: 600px (desktop) / 520px (≤880px) / 480px (≤560px).
- `overflow: hidden` so the embed clips to the card's rounded corners.

### Embed configuration

```html
<pusaka-container
  data-agent-id="a31cf423-a159-46c7-8ead-5cba68a78db6"
  data-theme="light"
  data-app-mode="chat"
  data-enable-autofocus="false"
></pusaka-container>
```

- `data-theme="light"` — matches the page's light palette so the embed reads as native.
- `data-app-mode="chat"` — hides the Pusaka top bar, showing only the chat interface.
- `data-enable-autofocus="false"` — critical. The section sits right under the hero; autofocus would auto-scroll past the hero on page load, breaking the intended reading order.
- No `data-mode` set — renders inline, filling the parent card's box (as opposed to a floating FAB).

## Copy

The section uses the page's `§` eyebrow convention and the gradient-text accent on the second half of the heading (matches Outcomes, Pricing, FinalCTA).

| Slot | English | Indonesian |
|---|---|---|
| eyebrow | `§ Talk to the agent` | `§ Bicara dengan agen` |
| h2 (plain) | `Skip the pitch.` | `Lewati pitch.` |
| h2 (gradient-text) | `Talk to the real Qlar.` | `Bicara langsung dengan Qlar.` |
| lede | "This is the same agent live with our pilot providers. Ask about booking, pricing, after-hours — anything a patient would." | "Ini agen yang sama yang aktif di mitra pilot kami. Tanya soal booking, harga, jam malam — apa pun yang akan pasien tanyakan." |

The "skip the pitch" framing earns the placement directly under the hero — it acknowledges what the visitor just read and pivots to "now try it."

## Nav

Not changing. The section sits immediately under the hero, so it's visible without a nav link. The existing `Live demo` nav link continues to point at `#demo` (the simulated chat further down), which still serves its "see the API calls" purpose.

## Implementation surface

The codebase is a bundled single-page React app. Source files live in `src/extracted/` and are repacked into `index.html` via `scripts/pack-bundle.mjs`.

Files to change:

1. **`src/extracted/__template.html`**
   - Add the pusaka container script in `<head>`: `<script type="module" crossorigin src="https://app-container-prod.pusaka.ai/pusaka-container.mjs"></script>`
   - Add ~30 lines of CSS for `.try-live-card` and its responsive height breakpoints in the existing `<style>` block.

2. **`src/extracted/3387ede2-6a4f-47a4-bf6d-bb2e3e729145.js`** (i18n)
   - Add a `tryLive` object under both `I18N.en` and `I18N.id` with `eyebrow`, `h2a`, `h2b`, `sub`.

3. **`src/extracted/2809eaf2-0920-4540-8d4b-db0b5a25f501.js`** (sections module)
   - Add a new `TryLive` component following the same pattern as `Outcomes` and `HowItWorks` (uses `useLang()`, renders `.section` → `.container` → `.section-head` → chat card).

4. **`src/extracted/2433394d-605a-451a-ab2d-c1d4ec3b33ad.js`** (main app composition)
   - Insert `<TryLive />` between the closing `</section>` of `.hero` and `<Outcomes />`.

5. **Run `node scripts/pack-bundle.mjs`** to repack `index.html`.

## Architecture notes

- Pusaka container is a custom element. JSX renders unknown lowercase tags as custom elements with `data-*` attributes passed through unchanged, so no special declaration is needed in this plain-React (no TypeScript) codebase.
- The script is loaded as `type="module"`. It self-registers the `<pusaka-container>` element on load.
- The embed's height is controlled by the parent card's `min-height`. The pusaka container fills its parent.

## Risks and tradeoffs

- **External dependency**: the pusaka script loads from `app-container-prod.pusaka.ai`. If their CDN is down, the section shows an empty card. No fallback is built — this is an acceptable trade-off for a landing page that already depends on external Google Fonts and a WhatsApp deep-link.
- **Page weight**: an external module script + the chat runtime adds bytes and JS execution to the page. Acceptable because the section's purpose is the embed itself.
- **Two demo sections**: keeping both the new live embed and the existing simulated `#demo` is deliberate. They serve different jobs (real product interaction vs. visualizing the agent's reasoning). The 200+px of Outcomes + How content between them reduces the perceived redundancy.

## Verification plan

After packing the bundle, verify in the browser preview:

1. Section renders between hero and Outcomes with the correct background, padding, and centered head.
2. Chat card displays with rounded corners, gradient top strip, and shadow.
3. `<pusaka-container>` loads and the chat interface appears inside the card (not below it, not stretched, not clipped).
4. Embed height responds to viewport size: 600 / 520 / 480 at the three breakpoints.
5. `data-enable-autofocus="false"` actually prevents auto-scroll on page load — open the page and confirm the viewport lands on the hero, not the chat.
6. Switching language (EN ↔ ID via `LangToggle`) updates the eyebrow, heading, and lede.
7. The existing `#demo` section still works and renders unchanged.
8. No console errors related to the pusaka script.
