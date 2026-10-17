---
doc: scope
status: approved
---

# Gloob's Cosmic Organization Headquarters

A playful, early-web character portfolio where visitors help an earnest baby black hole organize space while his gravity keeps swallowing his work.

## The Unique Kernel

Gloob takes his ridiculous profession seriously. His gravity causes a harmless organizing accident, and helping him recover turns the visitor into his cosmic assistant. His personality drives the interactions: visitors should remember Gloob, not merely the animations.

## Who It's For

A Baby's First Website judge or curious visitor opening the site on a phone, tablet, or desktop, looking to discover an original character through a few minutes of playful exploration. Instead of reading static fictional case studies, they participate in Gloob's work without an account.

## The Core Loop

Meet Gloob → witness his mistake → help him recover → explore his inventions → feel like his little cosmic assistant.

Gloob is immediately visible in his cosmic office, with expressive reactions, cursor-following eyes on suitable devices, and subtle gravity effects on nearby objects. He demonstrates star organizing, accidentally swallows a star, and asks for help. The visitor makes him release it and guides it into its constellation. This counts as the first placement in Stardust Sorting Co., not a separate tutorial. Gloob celebrates: “YOU'RE HIRED! Wait... do you know where the other stars go?”

Visitors can continue that job or explore the other projects and story freely. Small actions produce visible results and funny character responses; mistakes are forgiving, and activities can be replayed. Navigation remains available without completing activities in order.

The introductory rescue is skippable and replayable. Skipping leaves the star available for normal placement and never prevents completion. A successful rescue placement credits that star only once. Replaying the introduction must not duplicate stars or rewards, erase placements, or change existing completion progress; replaying an already-credited rescue is a demonstration only. Restarting a project is a separate, deliberate action.

## Inspiration & Identity

An eccentric early-2000s personal homepage meets a soft cosmic toybox: retro windows, sticker-like achievements, odd little status messages, starry surroundings, and readable, playful typography. It should feel like entering a tiny living universe, cute and slightly chaotic without becoming cluttered.

**Early-web personality is a core design requirement**, carried by layout, typography, copy, retro framing, and character feedback from the first shippable version. Optional effects may be removed, but the site must still feel like Gloob's eccentric personal homepage rather than a generic modern portfolio.

Preserve Gloob's established midnight-purple appearance, lilac-and-coral ring, bright eyes, little arms, yellow head-star, earnest temperament, and professional dream. His tagline remains: **“A place for everything. Preferably not in my tummy.”**

The authoritative project context is [`../context.md`](../context.md). Official event references are haX.baby's [problem statement](https://hax.baby/baby-problem) and [event homepage](https://hax.baby/first-website). No external visual reference has been selected.

## Why This Matters to the Learner

“I want the finished experience to feel like visiting the personal website of a tiny black hole who takes his ridiculous profession very seriously.”

“The primary measure of quality is how delightful and coherent the experience feels, not how many features we implement.”

## What "Working" Looks Like

The publicly deployed website introduces a memorable Gloob within seconds. The signature moment is his accidental star snack, the visitor's satisfying rescue, and his delighted decision to hire them. That rescue contributes directly to his portfolio work.

All three projects offer distinct, functional interactions. The short illustrated story explains his origin, and visitors can discover and use the hidden Snack Drawer. They can navigate, recover from mistakes, and replay on desktop, tablet, and mobile without relying on hovering, dragging, or precise pointer movement. Keyboard access, visible focus, readable content, non-color-only cues, and reduced-motion support are part of completion.

Before **19 October 2026 at 17:17 IST**, the live URL, public GitHub repository with eligible build-window history, short build story/submission description, five-point character sheet, and asset/library/AI-assistance credits are ready. Only shipped functionality is claimed. Deployment is required; a pitch video is not a listed requirement in the supplied context.

## The POC Boundary

### Required foundation

The official requirements recorded in `context.md` are identity, at least three showcased projects, visual storytelling, meaningful visitor reaction, mobile friendliness, and an Easter egg. Track 2 also requires a discoverable five-field character sheet: name; what he is; what he does; story; tagline. These are release requirements, not optional backlog items.

### Committed project choices

- **Opening + Stardust Sorting Co. — signature experience:** One continuous rescue-and-organize activity, with six stars across three constellations. The rescued star is the first successful placement; five remain. Click/tap to select and place is the baseline. Correct placements receive expressive feedback, and constellation completion earns a little achievement sticker. This experience gets the most polish.
- **Lost Moon & Found:** Three illustrated missing-moon case files with simple visual clues. Match three moons to their planets and watch their orbits return. Wrong matches receive humorous dialogue without penalties or frustrating resets. Aim for roughly one minute; completing all cases earns a “Certified Moon Detective” sticker.
- **Orbit Organizer 3000:** Place three celestial objects onto orbit rings around a central star, then use “START ORBITS!” to bring the arrangement to life. A small set of controls, such as direction or speed, visibly changes the result. Include reset for experimentation. This is a toy, not a scientific simulator.
- **Three-scene origin story:** A short illustrated, scroll-driven sequence explored naturally after the opening hook: “A Little Void Is Born,” “The Great Organization Disaster,” and “Gloob's Cosmic Headquarters.” Show the messy nebula, his accidental swallowing of seventeen stars and other objects, and his decision to open an office. Use short text and expressive visual changes; avoid a mandatory cinematic introduction.
- **Secret Snack Drawer:** Activating Gloob's yellow head-star three times opens a hidden retro-style popup. Subtle hints aid discovery. Its contents include seventeen stars, one Wednesday, a left sock, and his to-do list; a small interaction releases an object to float away. The trigger and drawer work with touch and keyboard.
- **Completion acknowledgment:** After all three projects are finished, Gloob gives a brief, warm acknowledgment that the visitor has helped him become a better organizer. Simple character feedback and a message are sufficient; a full badge or printable certificate remains optional.
- **Shared quality baseline:** Expressive Gloob reactions, subtle controlled gravity effects, responsive layout, accessible controls, reduced-motion alternatives, forgiving feedback, and replayability. The core experience works without backend services or saved progress.

### Minimum shippable experience and feature reduction

The minimum release includes the recognizable, reactive Gloob and early-web headquarters; the skippable, progress-safe opening rescue; all three distinct interactive projects at the committed object counts; three concise illustrated story scenes; the five-field character sheet; the accessible Snack Drawer and its small release interaction; simple project stickers and the final acknowledgment. Responsive, keyboard-accessible, reduced-motion behavior, recovery/replay, a working deployment, and the submission deliverables are part of this minimum.

If time runs short, reduce in this order:

1. Defer all optional extras: sound, cursor effects, Responsive Chaos Mode, certificate/badge, persistence, and desktop dragging. Protect the finishing-time reserve.
2. Reduce decorative density, dialogue variants, and animation complexity. Keep clear character expressions and outcome feedback; use simple illustrated scene transitions rather than elaborate scroll choreography.
3. Keep the moon activity to its three short cases and the orbit toy to three objects with one simple adjustable property. Avoid additional puzzles, controls, or variants; retain reset and visible outcomes.

These reductions simplify presentation and optional depth, not the core identity or required experience. Do not cut a project, the origin story, character sheet, Easter egg, safe rescue behavior, completion acknowledgment, accessibility, cross-device verification, or early-web personality to fund optional polish. If this minimum is still at risk, explicitly revisit scope rather than silently dropping commitments.

### Delivery constraint and priority

Primarily a solo build with OpenCode and AI coding assistance. **12–16 focused hours is a provisional planning assumption**, not guaranteed availability. Reserve **at least three hours** for mobile testing, bug fixing, deployment, and submission preparation; deploy a working version early.

Prioritize the responsive character/story foundation, then the opening and Stardust polish, then the other two functional projects. Complete and verify the required Easter egg, accessibility, and cross-device behavior before release. These requirements remain mandatory even when scheduled later. Optional bonuses and extra polish are the first things reduced if work overruns.

### Deliberately left for later planning

Exact animation timings, orbit-control ranges, placement rules, state/storage design, and implementation architecture are not chosen here. Detailed rescue behavior must satisfy the skip, replay, and progress-protection boundaries above. Optional desktop dragging must never replace click/tap controls.

## Later

These additions are outside the committed release boundary and are attempted only after the complete core works:

- **High-priority extras:** Small playful sound effects with a conspicuous mute/unmute control and no unexpected autoplay; a lightweight desktop sparkle/stardust cursor effect.
- **Stretch:** Deliberately playful Responsive Chaos Mode that preserves usability; a final assistant badge or printable certificate after all three projects; additional character reactions, decorative interactions, and animation refinement.
- **Optional convenience:** Local progress persistence if genuinely trivial; completion must not depend on it. Optional desktop dragging is similarly subordinate to the working tap-based experience.

Published bonus eligibility is organizer-controlled; implementing an effect does not guarantee bonus points. Per-project stickers and Gloob's lightweight final acknowledgment are committed feedback; the overall badge/certificate is stretch scope.

## Explicitly Cut

- **Backend services, shared live guestbook, global visitor counter:** Avoid infrastructure and verification work that competes with character polish. Do not substitute local-only features and claim they are shared or globally counted.
- **Complex physics, procedural universe generation, and a 3D rendering engine:** Controlled lightweight animation is sufficient to express gravity and preserves the time budget.
- **AI chatbot or conversational character system:** Authored reactions provide a coherent voice without introducing an additional product or runtime dependency.
- **Authentication, user accounts, and online progress synchronization:** Visitors should explore immediately; these do not strengthen the core experience.
- **Three large standalone games:** Keep the moon mystery and orbital toy small so the signature star experience receives disproportionate polish.
- **Forced completion order or a lengthy opening cinematic:** Judges and visitors must be free to explore, including the story and character sheet.
- **Desktop-only interaction, punitive resets, and irreversible mistakes:** These contradict the friendly, accessible, experimental experience.

## Planning Workflow

Use `docs/` for planning artifacts and the installed scope template's draft/review/approval workflow. Educational onboarding and learner-profile files are intentionally omitted. Preserve `context.md` unchanged. This scope is approved with the four requested refinements incorporated; PRD and implementation are outside this session.
