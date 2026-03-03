# J-Krush Dev — Personal Brand Site

## Project Overview

Personal brand and portfolio site for **John Kreisher (J-Krush)** — repositioned for job hunting as a senior full-stack engineer. Built to demonstrate skills through the site itself, not just list them.

### Tech Stack
- **Framework:** Next.js 13 (Pages Router)
- **React:** 18.2.0
- **Styling:** Tailwind CSS 3.2.7 (wrapped with `@material-tailwind/react/utils/withMT`)
- **Animation:** Framer Motion 10
- **Font:** Montserrat (via `next/font/google`, CSS var `--font-mont`)
- **Forms:** Netlify Forms with honeypot field
- **Hosting:** Netlify
- **Other:** typewriter-effect, react-google-recaptcha-v3 (configured but verification logic commented out)

### Directory Structure
```
src/
  components/     # Reusable UI (AnimatedText, Layout, Navbar, Skills, etc.)
    Hooks/        # useThemeSwitch
  pages/          # Next.js pages (index, about, work, projects, articles, connect, 404)
    api/          # Serverless functions (hello.js placeholder)
  styles/         # globals.css, Home.module.css (legacy)
public/           # Static assets, images
```

### Commands
```bash
pnpm dev          # Local dev server
pnpm build        # Production build
pnpm start        # Serve production build
pnpm lint         # ESLint
```

### Origin
Bootstrapped from a CodeBucks Next.js portfolio template, heavily customized. Some placeholder content from the original template remains on orphaned pages (projects, articles, 404) — see Known Issues below.

---

## Brand Identity — The Core Narrative

This is the north star for all content decisions. Three interlocking narratives define John's professional identity:

### 1. Systems Engineer
Senior full-stack engineer whose aerospace background (MS CU Boulder, BS Penn State) isn't decorative — it's the foundation of systems thinking. John translates business goals into requirements, requirements into architecture, architecture into shipped product. The engineering discipline is real, not cosmetic.

### 2. AI-Native Engineer
Not "uses ChatGPT." John has developed genuine expertise in AI as a development methodology:
- Writing specifications that AI can execute against
- Building Claude files that encode project knowledge
- Configuring MCP servers for custom tooling
- Systematic edge case analysis before and during implementation
- Architecture-level prompting that produces production-quality code

This is an emergent skillset most engineers haven't developed yet. It's a legitimate competitive advantage.

### 3. Force Multiplier / Role Compression
AI is compressing roles. John already embodies designer + PM + architect + engineer + deployer. One hire, multiplicative output. The cross-industry experience (medical, VR, forensics, iOS, aerospace, hardware, creative) is a compounding asset — each domain informs the others.

### The Polymath Truth
NOT "jack of all trades, master of none." The exception — genuine mastery across domains driven by deep self-awareness about learning and operating. Each domain feeds the others:
- **Aerospace** → systems thinking, requirements discipline
- **Music** → pattern recognition, composition
- **Circus/AcroYoga** → risk assessment, spatial awareness, trust
- **Fabrication/Maker** → spatial reasoning, physical prototyping
- **Drone cinematography** → visual storytelling, technical precision

The Skills component already demonstrates this with its Software/Creative toggle — lean into that duality everywhere.

---

## Content Pillars

Every piece of content on the site should map to one or more of these five themes:

1. **Systems Thinker, Not Just a Coder** — Show the requirement → architecture → implementation pipeline. Emphasize process, not just output.

2. **AI-Native Engineer** — Demonstrate the AI development workflow with real artifacts. This is the primary differentiator.

3. **Polymath Mastery** — Demonstrated through projects and the site itself, never claimed outright. Let the breadth speak for itself.

4. **Force Multiplier / Role Compression** — Three businesses (J-Krush Software Consulting, Flowcraft Media, Shapesmith Studio). Ships real products across domains. One person, multiplicative output.

5. **Builder and Maker** — Not theoretical. Builds real things — software, music, physical products, cinematography. The businesses exist. The products ship.

---

## Tone & Voice

### Core Voice
**Confident and grounded, never boastful.** Write like a senior engineer talking to a peer — assume competence on both sides. No selling, just showing.

### Rules
- **Show vs. Tell:** Every claim needs a project, interactive element, or concrete example backing it up. If you can't demonstrate it, don't say it.
- **Active voice, short sentences for impact.** Specifics over abstractions. "Built a microservices backend with Nest.js and Postgres" not "experienced in backend development."
- **Never apologize for breadth.** Frame diverse skills as compounding advantages, not scattered interests.
- **Job-hunting calibration:** The goal is to make hiring managers think "I want to talk to this person." Intrigue, don't overwhelm. Leave them wanting to learn more.
- **No buzzword stuffing.** If a technology is mentioned, there should be a project that used it.
- **Personality is an asset.** The Enneagram/MBTI/Human Design stats, the circus skills, the music — these make John memorable. Don't sanitize them away.

---

## Content Strategy — "Show Don't Tell"

### Primary Interactive Concept: AI Workflow Walkthrough

A stepped interactive section showing John's real development process with actual artifacts. The centerpiece "show don't tell" element. Visitors click/scroll through each step:

1. **Business requirement analysis** — Show a real requirement being decomposed into actionable pieces
2. **Spec writing** — Show a well-structured specification document
3. **Claude file / skills setup** — Show the structure of a CLAUDE.md or custom skill file
4. **MCP server configuration** — Show a real MCP config with custom tools
5. **Implementation with AI pair programming** — Show the collaboration pattern, the back-and-forth
6. **Edge case analysis and testing** — Show systematic thinking about failure modes

**Implementation:** Interactive stepper component with code snippets, expandable details, and annotations. Each step reveals on interaction. Built with Framer Motion for smooth transitions. Code blocks should feel real — actual file snippets, not lorem ipsum.

### Supporting Concepts

**Self-Referential Demo:** The site itself IS the portfolio. Call it out explicitly: "The animations, the responsive design, the dark mode, the page transitions — I built all of it." Point to specific technical decisions (Framer Motion page wipes, the Skills wheel, the typewriter effect).

**Architecture Decision Records:** For each project on the Work page, use the format: Problem → Consideration → Decision → Outcome. This demonstrates engineering thinking, not just "I built a thing."

**AI Skills Section:** Dedicated section with tangible skill cards:
- Specification Writing
- Claude Files & Skills
- MCP Servers
- Edge Case Analysis
- Architecture-Level Prompting

Each with a brief code snippet or example that makes the skill concrete and believable.

---

## Design Patterns & Conventions

### Color System
| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#B63E96` | Accent, links, TransitionEffect first layer |
| `primaryDark` | `#58E6D9` | Dark mode accent, box-shadow glow |
| `dark` | `#1b1b1b` | Dark mode background, light mode text |
| `light` | `#f5f5f5` | Light mode background, dark mode text |

Box shadow `3xl`: `0 15px 15px 1px rgba(80,230,217, 0.4)` — primaryDark glow effect.

### Typography
- **Font:** Montserrat (`--font-mont`), applied via Tailwind `font-mont`
- **Headings:** AnimatedText component, base `text-8xl font-bold capitalize` → `xl:text-6xl`
- **Body:** Standard Tailwind text utilities

### Layout
- **Layout component:** Full-width wrapper with responsive padding: `p-32` → `xl:p-24` → `lg:p-16` → `md:p-12` → `sm:!p-4`
- **Background:** `bg-light dark:bg-dark` on Layout wrapper
- **Grid:** Standard Tailwind grid utilities, no custom grid system

### Dark Mode
- Tailwind `class` strategy — toggled by adding/removing `dark` on `<html>`
- `useThemeSwitch` hook manages state
- `_document.js` runs a `beforeInteractive` script to read `localStorage('theme')` or `prefers-color-scheme` before hydration (prevents flash)

### Animation Patterns
- **Page transitions (TransitionEffect):** Three stacked full-screen `motion.div` layers slide right-to-left with staggered delays (0s, 0.1s, 0.2s). Layer 1: `bg-primary`, Layer 2: `bg-light/dark`, Layer 3: `bg-dark/light`. Creates a curtain wipe effect.
- **Text reveal (AnimatedText):** Splits text on spaces, staggers each word 80ms apart with 0.5s initial delay. Words animate from `opacity:0, y:50` up to natural position.
- **Page-level transitions:** `AnimatePresence` in `_app.js` with `mode="wait"`, keyed by `router.asPath`.
- **Hover states:** Scale transforms, shadow transitions on cards.
- **Custom spin:** `spin-slow` animation (8s linear infinite) used for HireMe circular badge.

### Component Pattern
Standard page structure:
```
<Head> (title + meta)
<TransitionEffect />
<main>
  <Layout>
    <AnimatedText text="..." />
    {/* page content */}
  </Layout>
</main>
```

### Breakpoints (Desktop-First, max-width)
| Token | Max Width |
|-------|-----------|
| `2xl` | 1535px |
| `xl` | 1279px |
| `lg` | 1023px |
| `md` | 767px |
| `sm` | 639px |
| `xs` | 479px |

All breakpoints are max-width overrides. Design desktop-first, then add responsive overrides going down.

---

## Development Guidelines

- **Plain JavaScript** — no TypeScript. Don't introduce it.
- **PascalCase** for component files, **lowercase** for page files
- **Tailwind utility classes only** for new code — no CSS modules (Home.module.css is legacy, don't extend it)
- **Framer Motion** for all animations — no CSS keyframes for new work
- **Next.js Image** component with proper `sizes` attribute for responsive images
- **Desktop-first responsive** using the max-width breakpoints defined above
- **Content hardcoded in page files** — no data fetching layer, no CMS integration (except Shapesmith which uses Sanity separately)
- **No unused imports or dead code** in new work — clean as you go
- When adding new pages, follow the existing pattern: Head → TransitionEffect → main → Layout → AnimatedText → content

---

## Pages Inventory & Known Issues

### Home (`index.js`)
- **Status:** Functional, personalized
- **Tagline:** "Polymath at heart.. always learning, always building." — consider refreshing
- **HireMe CTA:** Commented out — consider re-enabling for job-hunting phase
- **Businesses section:** Three cards (J-Krush Software, Flowcraft Media, Shapesmith Studio)
- **Note:** Typewriter cycles between "I'm J-Krush" and "I'm John Kreisher"

### About (`about.js`)
- **Status:** Functional, needs content evolution
- **Bio:** Generic — needs to incorporate the brand narrative (systems thinker, AI-native, force multiplier)
- **Skills component:** Has the Software/Creative toggle (good duality showcase)
- **Known typo:** `Skills.js:104` — "Tawilwind CSS" should be "Tailwind CSS"
- **Minor:** "Meyers Briggs" should be "Myers-Briggs"

### Work (`work.js`)
- **Status:** Functional with three featured projects
- **Projects:** Genius Frequency, Shapesmith Studio, Zuri Fertility
- **Known typo:** Shapesmith URL is `shapemsith.studio` (missing 'h', swapped letters)
- **Commented out:** Tools/Components section and Photogrammetry section
- **HireMe CTA:** Commented out

### Projects (`projects.js`)
- **Status:** ENTIRELY CodeBucks placeholder — needs complete replacement
- **Not in nav** — page is orphaned but still accessible via URL
- **Head title/meta:** References CodeBucks and devdreaming

### Articles (`articles.js`)
- **Status:** ENTIRELY CodeBucks placeholder — needs complete replacement
- **Not in nav** — page is orphaned but still accessible via URL
- **Head title/meta:** References CodeBucks and devdreaming

### Connect (`connect.js`)
- **Status:** Functional form, submits to Netlify
- **Enhancement:** Add "what I'm looking for" context above the form
- **Note:** reCAPTCHA verification logic is commented out (form still works via Netlify)
- **Cleanup:** console.log statements left in submit handler

### 404 (`404.js`)
- **Head title/meta:** Still references CodeBucks — needs updating

### Footer (`Footer.js`)
- **Credit:** Still says "Bootstrapped with love by CodeBucks" linking to devdreaming.com — update or remove

### SEO Summary
Pages with CodeBucks/generic meta descriptions that need updating:
- `projects.js` — CodeBucks meta description
- `articles.js` — CodeBucks meta description
- `404.js` — CodeBucks meta description
- `Footer.js` — CodeBucks credit link

Pages with personalized but generic meta:
- `index.js`, `about.js`, `work.js`, `connect.js` — all use "Full-stack software developer and software engineer" — could be more distinctive

### Navigation
Current nav links: Home, About, Work, Connect
Projects and Articles are **not in the nav** — effectively orphaned pages with placeholder content.
