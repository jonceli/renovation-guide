# Navigation Home and Chapter Pages Implementation Plan

> **For Hermes:** Execute this plan directly in the current repo with incremental verification after each structural change.

**Goal:** Convert the current long single-page renovation guide into a navigation-style homepage plus 10 standalone chapter pages.

**Architecture:** Keep GitHub Pages and the current static stack. Preserve `index.html` as a concise homepage, reuse shared `styles.css` and `script.js`, and move full chapter bodies into `chapters/*.html` pages with shared navigation, metadata, and previous/next links.

**Tech Stack:** Static HTML, shared CSS, shared vanilla JavaScript, GitHub Pages.

---

## Scope

### Keep
- GitHub Pages static hosting
- Existing shared `styles.css`
- Existing shared `script.js`
- Existing chapter content wording
- Existing 10-chapter information architecture

### Change
- `index.html` becomes a homepage/navigation page rather than a full longform article
- Add `chapters/` directory with 10 standalone chapter pages
- Homepage keeps hero, quick start, chapter directory, short summaries, footer, updated timestamp
- Chapter pages get shared structure, back-home link, previous/next navigation, timestamp

---

## File Plan

### Create
- `chapters/inspection.html`
- `chapters/preparation.html`
- `chapters/materials.html`
- `chapters/contracts.html`
- `chapters/waterproofing.html`
- `chapters/carpentry.html`
- `chapters/tiling.html`
- `chapters/painting.html`
- `chapters/standards.html`
- `chapters/design-resources.html`
- `docs/plans/2026-04-26-navigation-home-and-chapter-pages.md`

### Modify
- `index.html`
- `styles.css`
- `script.js`

---

## Implementation Tasks

### Task 1: Define chapter page mapping and homepage summary data
**Objective:** Create a stable mapping from current chapter cards to standalone file paths and homepage summary copy.

**Steps:**
1. Extract the 10 current chapter titles, subtitles, visible numbers, and order from `index.html`.
2. Map them to stable slugs:
   - `01` → `inspection.html`
   - `02` → `preparation.html`
   - `03` → `materials.html`
   - `04` → `contracts.html`
   - `05` → `waterproofing.html`
   - `06` → `carpentry.html`
   - `07` → `tiling.html`
   - `08` → `painting.html`
   - `09` → `standards.html`
   - `10` → `design-resources.html`
3. Write or refine one short homepage summary paragraph per chapter.
4. Verify that homepage summaries are clearly shorter than full chapter bodies.

**Verification:**
- Confirm 10 unique output files are planned
- Confirm homepage summary content exists for all 10 chapters

---

### Task 2: Create a reusable standalone chapter page shell
**Objective:** Create one consistent chapter-page layout that can be reused for all 10 pages.

**Files:**
- Modify: `styles.css`
- Modify: `script.js` (only if page-specific behavior is needed)
- Create: one sample chapter file first

**Required structure:**
- Shared `<head>` metadata pattern
- Link to `../styles.css`
- Optional script include `../script.js`
- Top bar with home link
- Chapter number, title, subtitle
- Full body content
- Previous/next chapter nav
- Last updated line
- Footer

**Verification:**
- Open the sample chapter page locally
- Confirm styles load correctly from relative paths
- Confirm navigation renders correctly

---

### Task 3: Generate all 10 standalone chapter pages
**Objective:** Move full chapter bodies out of the homepage and into standalone pages.

**Steps:**
1. Extract each chapter body from current `index.html`
2. Wrap each in the standalone shell
3. Add previous/next links in chapter order
4. Add homepage link
5. Add last updated date to each page

**Verification:**
- Confirm 10 files exist in `chapters/`
- Open multiple sample pages locally
- Confirm relative CSS/JS paths work

---

### Task 4: Convert homepage into a concise navigation page
**Objective:** Keep homepage focused on discovery and navigation, not full reading.

**Steps:**
1. Keep hero and quick start sections
2. Replace current full article stack with a homepage-oriented chapter grid/list
3. Each chapter card should include:
   - number
   - title
   - subtitle
   - short summary
   - link to standalone page
4. Remove full chapter bodies from homepage
5. Keep the footer and last updated cues

**Verification:**
- Homepage no longer contains all full chapter bodies
- Homepage is visibly shorter and easier to scan
- Every chapter card links to the correct standalone page

---

### Task 5: Update shared styling for homepage-vs-chapter separation
**Objective:** Ensure the homepage feels like a navigation hub and chapter pages feel like reading pages.

**Steps:**
1. Add any missing styles for standalone page layout
2. Add styles for homepage summary cards if needed
3. Keep visual continuity between homepage and chapter pages
4. Avoid introducing a framework or unnecessary complexity

**Verification:**
- Homepage looks like a directory/hub
- Chapter pages look like article/detail pages
- No major style regressions on mobile-width snapshots

---

### Task 6: Verify structure, links, and rendering
**Objective:** Run fresh checks before commit.

**Checks:**
- HTML parse for homepage and sample chapter pages
- File existence for all 10 chapter pages
- Homepage link targets all resolve
- Local browser render works for homepage and multiple chapter pages
- Shared CSS/JS load from relative paths

**Verification commands:**
- Python HTML parser against homepage and sample chapter files
- Local browser open for homepage and at least 3 representative chapter pages

---

### Task 7: Commit and push
**Objective:** Deliver the refactor safely to `main`.

**Commit strategy:**
- One commit for page-splitting / architecture change
- Push directly to `main` after verification

**Verification:**
- Confirm `HEAD == origin/main`

---

## Non-Goals
- No framework migration
- No build step introduction
- No CMS introduction
- No server-side rendering
- No content rewrite beyond homepage summary tightening and structural navigation text

---

## Success Criteria
- Homepage becomes clearly navigational rather than an infinite-scroll document
- All 10 chapters are accessible as standalone pages
- Shared CSS/JS continue to work
- Future chapter edits can be made page-by-page without touching homepage body structure
- GitHub Pages remains simple static hosting
