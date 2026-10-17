---
doc: checklist
status: approved
mode: fast
---

# Gloob — Implementation Checklist

This implementation roadmap applies the approved scope, PRD, and spec. The request to begin building authorizes the first implementation slice; subsequent slices remain independently verifiable. **Nothing is complete without mechanical checks and user review where specified.**

## Slices

- [ ] **1. Meet Gloob in a running headquarters**
  - Becomes usable: A React/Vite website with an original layered SVG Gloob, expressive greeting, accessible character buttons, responsive retro office, main navigation, and canon identity/story.
  - Why now: Validate the unique character and visual language before investing in secondary artwork.
  - PRD ref: `The Core Journey`, `Screens and Layout`, `Look and Feel`, `Gloob's Presence and Personality`.
  - Spec ref: `App / Headquarters Coordinator`, `GloobCharacter`, `Look and Feel`.
  - Build: Bootstrap React/TS/Vite, original SVG composition, reusable character wrapper, retro shell, responsive navigation and initial visual sections.
  - Verify (mechanical): `npm install`, `npm run build`, inspect DOM/console; verify no erroneous or broken links.
  - Learner check: Start `npm run dev`; judge Gloob's face, silhouette, ring, hero, mobile view, and star/tummy touch targets.
  - Commit: `feat: introduce Gloob and responsive cosmic headquarters`

- [ ] **2. Authoritative progress and star rescue**
  - Becomes usable: Six-star Stardust sorter plus skippable/replayable swallowed-star rescue, valid placement counting once.
  - Why now: Demonstrates the unique kernel and protects state correctness early.
  - PRD ref: `Opening Demonstration and Rescue`, `Stardust Sorting Co.`, `States and Boundaries`.
  - Spec ref: `Data Model`, `StardustDepartment and useRescuePresentation`.
  - Build: Pure reducer, guard tests, rescue with cancellation IDs, chart selection, correct/wrong feedback, confirmed Stardust reset.
  - Verify (mechanical): `npm run test:run`, `npm run build`, manual skip/replay/reset checks.
  - Learner check: Start demo, boop, correctly place crown; skip/replay without duplicate credit; finish all six.
  - Commit: `feat: add progress-safe Gloob rescue and star sorting`

- [ ] **3. Early Vercel preview**
  - Becomes usable: Public working shell and star activity from a Vercel deployment.
  - Why now: Catch live-hosting, fonts, URLs, and mobile issues before finishing the rest.
  - PRD ref: `Accessibility and Responsive Behavior`, `Screens and Layout`.
  - Spec ref: `Where It Runs and How Someone Tries It`.
  - Build: Connect GitHub/Vercel, production `main` after review, verify subpages/hash links and production accessibility.
  - Verify (mechanical): `npm run build`, inspect live URL on desktop/mobile, signed-out public access, correct assets.
  - Learner check: Open live website on phone and desktop; confirm navigation and interactions.
  - Commit: `docs: record verified Vercel deployment`

- [ ] **4. Lost Moon & Found**
  - Becomes usable: Solve three illustrated case files in any order, inspect evidence, match each moon to planet, reset independently.
  - Why now: Add the second distinct interactive showcased project.
  - PRD ref: `Lost Moon & Found`, `Achievements, Completion, and Resets`.
  - Spec ref: `MoonDepartment`, `Data Model`.
  - Build: Three case files and planet clues, immediate attempted selection, playful no-penalty feedback, reducer tests.
  - Verify (mechanical): `npm run test:run`, `npm run build`.
  - Learner check: Solve all cases, test incorrect planet, verify no duplicate sticker.
  - Commit: `feat: add Lost Moon and Found detective cases`

- [ ] **5. Orbit Organizer 3000**
  - Becomes usable: Assign three objects, start/pause/resume orbits, change speed/direction, retain earned sticker while experimenting.
  - Why now: Finish the third distinct interactive project.
  - PRD ref: `Orbit Organizer 3000`, `States and Boundaries`.
  - Spec ref: `OrbitDepartment and useOrbitMotion`, `Data Model`.
  - Build: Guarded reducer actions, one presentation-only RAF helper, reduced-motion static rendering, independently confirmed lab reset.
  - Verify (mechanical): `npm run test:run`, `npm run build`, manual orbit continuity/reduced-motion check.
  - Learner check: Start the orbit machine, modify settings, return one object; badge remains earned until reset.
  - Commit: `feat: build interactive orbit organizer`

- [ ] **6. Story, secret, achievement and final reaction**
  - Becomes usable: Illustrated story, explicit five-field profile, head-star three-tap Snack Drawer, three derived stickers, 3/3 Gloob celebration.
  - Why now: Complete the character portfolio requirements and payoff.
  - PRD ref: `Origin Story and Employee Profile`, `Gloob's Secret Snack Drawer`, `Achievements, Completion, and Resets`.
  - Spec ref: `OriginStory`, `SnackDrawer`, `AchievementBoard and CompletionFeedback`.
  - Build: Finish illustrated scenes, accessible dialog/focus, secret release, canonical profile, shared progress board/header, all-complete transition.
  - Verify (mechanical): `npm run test:run`, `npm run build`, keyboard and full-journey checks.
  - Learner check: Find drawer using three head-star activations, finish 3/3, reset and re-complete.
  - Commit: `feat: complete Gloob story, drawer and achievements`

- [ ] **7. Polish, accessibility and shipping handoff**
  - Becomes usable: Verified responsive public experience, credits/licenses, locally hosted OFL fonts, tested production output and ready-to-submit links.
  - Why now: Preserve real-browser quality and submission time.
  - PRD ref: `Look and Feel`, `Accessibility and Responsive Behavior`.
  - Spec ref: `Typography and Font Files`, `Original Artwork Preparation and Licensing`, `Where It Runs and How Someone Tries It`.
  - Build: Font license notices, remaining art quality fixes, contrast/focus/touch QA, docs, deployment verification.
  - Verify (mechanical): `npm run test:run`, `npm run build`, manual mobile, keyboard, reduced-motion, live link QA.
  - Learner check: Entire app, desktop and mobile, in browser with no blocking bugs.
  - Commit: `chore: polish and verify Gloob for submission`

## Hands-on Checkpoints

- [ ] Early Gloob artwork and first responsive browser view approved by learner.
- [ ] First functional Stardust rescue and Vercel experience reviewed in a real browser.
- [ ] Core journey integrated check after all departments.

## Final Review

- [ ] User explores all activities, resets, secret, story and mobile version and reports issues.
- [ ] Requested fixes implemented, verified and committed.
- [ ] User confirms prototype is ready for submission.

## Code Tour and App Map

- [ ] Summarize real state boundary and animation cancellation decision with code pointers.
- [ ] Create a compact app map under `docs/` when implementation is completed.

## Revisions

- 2026-10-18: Initial source scaffolding and Stardust implementation committed to a feature branch. Dependency installation, tests, visual review, and Vercel deployment are still **unverified**; no slice is checked off prematurely.
- Initial roadmap inferred from the approved technical spec; implementation will use testable, independently committed slices.
