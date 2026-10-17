---
doc: prd
status: approved
---

# Gloob's Cosmic Organization Headquarters — Product Requirements

An early-web character portfolio where hackathon judges and curious visitors become temporary assistants to a baby black hole whose gravity keeps swallowing his organizing work.

Sources: [`scope.md`](scope.md), approved; [`../context.md`](../context.md), character canon and event context. Scope references below name the headings being developed. Official requirements, character canon, and interview-led product choices remain distinct: the event requires three showcased projects; making all three interactive is our project choice.

## The Core Journey

Source: `scope.md > The Core Loop`, `What "Working" Looks Like`.

1. Arrive at Gloob's cosmic office. See Gloob, his greeting, a six-star workbench, navigation, and a choice to watch his demonstration or explore freely.
2. Choose “WATCH ME ORGANIZE!” to begin the short accident. Gloob proudly moves a crown-marked star toward its chart, accidentally swallows it, panics, and asks for a tummy boop.
3. Activate his highlighted tummy or the equivalent “BOOP GLOOB!” button once. He releases the star into the workbench.
4. Select the recovered star, then Cosmic Crown. The placement earns real progress: 1/6. Gloob declares “YOU'RE HIRED!” The same workspace continues with five remaining stars.
5. Explore freely: finish Stardust, solve three missing-moon cases, and arrange and activate a three-object orbital machine in any order. The introduction can also be skipped entirely.
6. Discover the three-scene origin story, employee profile, and hidden Snack Drawer without completing projects first.
7. Earn one department sticker per completed activity. Completing all three produces a non-blocking acknowledgment beside the third completed activity and a completed achievement board.
8. Continue exploring, replay the accident safely, experiment in the lab, or deliberately reset a department. A full reload begins a fresh visit.

**Acceptance criteria**
- A visitor can complete all three projects without watching the introductory demonstration.
- Releasing the swallowed star alone never earns a placement; correct placement does.
- No story, character information, navigation, or department is locked behind completion.
- The opening rescue and placement aim to be enjoyable within 20–30 seconds, without a timer or enforced pace.

## Screens and Layout

Source: `scope.md > Inspiration & Identity`, `The Core Loop`.

One scrolling website, with themed departments rather than separate pages or a simulated operating system.

- **Header and navigation:** “GLOOB'S COSMIC ORGANIZATION HEADQUARTERS,” a subtitle such as “Keeping the universe tidy since approximately yesterday,” and clearly labeled links styled as colorful tabs or office signs: Home → opening office; Projects → compact department directory; My Story → three-scene story; About Gloob → employee profile; Achievements → achievement board. All destinations are sections of this same scrolling page. A small accessible header indicator, “DEPARTMENTS COMPLETED: n/3,” links directly to the board. On mobile it remains compact, not an obstructive floating overlay.
- **Projects directory:** Three clearly labeled links to Stardust Sorting Co.'s opening workbench, Lost Moon & Found's detective department, and Orbit Organizer 3000's laboratory. This is navigation only; it does not duplicate any project interface.
- **Opening office / Star Department:** Large Gloob left/center and the retro-window workbench to the right on desktop. Paperwork, crooked certificates, diagrams, and sticky notes frame the controls. Clearly labeled illustrated department shortcuts may supplement navigation, not replace it.
- **Detective Department:** Missing-moon noticeboard, three case files, evidence inspection, and three candidate planets within a coherent retro investigation window.
- **Research Laboratory:** Circular orbital workspace with inventory and controls arranged around it on desktop.
- **Storybook:** “HOW I BECAME VERY PROFESSIONAL,” with three concise illustrated scenes.
- **Employee profile:** A humorous résumé window near the lower page containing the five required character fields and optional short canon-based credentials.
- **Achievement board:** “COSMIC EMPLOYEE ACHIEVEMENTS,” after the three department experiences and before the origin story, with three sticker slots and an overall 0/3–3/3 completion status. The header progress link and Achievements navigation provide direct access.
- **Snack Drawer:** A hidden retro popup, not a separate destination page.
- **Credits:** Discoverable asset, audio if present, library, and AI-assistance acknowledgments.

On mobile, Gloob precedes his workspace; departments form a clean vertical sequence. The lab inventory and controls stack below its workspace. Layered decoration adapts rather than shrinking the desktop scene. Navigation stays compact, labeled, and touch-friendly.

**Acceptance criteria**
- Visitors reach each department, story, and profile without completing an activity.
- Each of the five navigation links reaches its named section; Projects reaches the directory, whose three links reach the existing workspaces without duplicating them.
- The board appears between the departments and story; its count and the linked header count always agree.
- The mobile header progress indicator is readable and usable without covering content.
- Desktop and mobile preserve the same content and functionality.
- Decorations never cover instructions, controls, or focus indicators.
- No draggable windows, overlapping-window management, or precision navigation is required.

## Look and Feel

Source: `scope.md > Inspiration & Identity`, `Minimum shippable experience and feature reduction`.

**Core requirement:** A handcrafted early-2000s personal website belonging to an enthusiastic baby black hole who has appointed himself CEO, receptionist, janitor, and chief scientist. Early-web personality must survive removal of optional effects.

Gloob is a softly irregular midnight-purple blob with subtle violet shading, tiny cosmic specks, and a gently irregular dark-purple outline. His wobbly luminous ring uses lilac, lavender, and coral. Enormous cream eyes, little mitten hands, an oversized utility belt, and the yellow head-star make him recognizable at small sizes. Avoid realistic astronomy, glossy 3D, or a featureless circle with eyes.

Use one cohesive storybook-cartoon illustration language: rounded imperfect shapes, expressive outlines, restrained highlights, doodle arrows, crooked labels, and cheerful celestial objects. Pixel-inspired accents are welcome; the character is not strictly pixel art.

Colors: midnight purple, lilac/lavender, coral/soft pink, warm cream, cheerful yellow; restrained blue or mint may distinguish departments. Keep the world inviting rather than gloomy or neon-heavy.

Typography: chunky playful headings and office signs; friendly, rounded, readable body text; old-computer lettering only for short labels and decorative status displays. Avoid long pixel-font paragraphs and tiny text. Colorful title bars, stamps, fictional status messages, and stickers supply nostalgia without confusing navigation.

**Acceptance criteria**
- Gloob remains recognizable without decorative motion or effects.
- Department artwork belongs to the same visual family.
- Instructions remain readable on phones and visually distinct from enthusiastic signage.
- No photorealism, unrelated clip art, generic corporate dashboard styling, or decorative clutter obscures the experience.

## Features and Behavior

### Gloob's Presence and Personality

Source: `scope.md > The Unique Kernel`, `Inspiration & Identity`; `context.md > Supporting canon and flavor`.

Gloob is earnest, affectionate, ambitious, and embarrassed by harmless mistakes. His humor comes from professional confidence exceeding his competence, never hostility toward the visitor. Speech is brief, enthusiastic, and slightly bureaucratic.

Expressions: proud/happy, confused, panicked, embarrassed, excited, and sleepy. His face communicates events before supporting dialogue. Pointer-following eyes suit desktop; touch and keyboard users receive equivalent meaningful action responses. Idle floating is gentle; sleepy half-closed eyes may appear after inactivity. Exact idle delay is not product-defining. Motion serves expression rather than constant distraction.

**Acceptance criteria**
- Arrival visibly introduces Gloob and his profession.
- Accident, rescue, mistakes, and success have distinguishable expressions and short readable feedback.
- Idle behavior never changes progress, steals focus, or blocks input.
- Reduced motion retains the expressive poses and dialogue needed to understand events.

### Opening Demonstration and Rescue

Source: `scope.md > The Core Loop`, `Committed project choices`.

**Arrival:** Gloob greets: “HI!! I'M GLOOB! ✦” and “Professional Space Organizer. Very qualified. Probably.” The workbench shows six scattered stars and three incomplete charts. “WATCH ME ORGANIZE!” begins the demonstration; “Explore HQ instead” dismisses it. No important event starts automatically.

**Accident:** Gloob says “WATCH THIS! I'VE BEEN PRACTICING!” A crown star moves toward its destination, is pulled into his tummy, and disappears. Gloob freezes, panics, and admits “I FILED IT IN MY TUMMY AGAIN.” This is a short readable cartoon, not a cinematic gate.

**Rescue:** “UM... COULD YOU BOOP MY TUMMY?” accompanies a highlighted tummy and a clearly labeled “BOOP GLOOB!” button. Both perform the same single action. One activation releases the star into the workspace; repeated activation cannot produce extra stars. Gloob expresses relief and asks the visitor to put it somewhere that is not him. The head-star remains a separate control.

**First placement:** “Select the star, then choose its matching constellation!” The crown mark and Cosmic Crown chart are clear, with an extra first-placement hint. The visitor selects and places the star. Only then does the count become 1/6, Gloob announce “YOU'RE HIRED!”, and the remaining five stars become available for ordinary sorting. No loading screen or separate scene intervenes.

**Skip/dismiss:** Return Gloob to normal, make the unplaced crown star available for sorting, and retain all placements. Dismissal never awards progress. Deliberate navigation, a department shortcut, or beginning another department's activity dismisses an unfinished demonstration. Ordinary scrolling does not: short animation can finish naturally, and the rescue remains at a stable interaction step when revisited. A pending rescue always has an obvious dismissal action and never overlays or blocks the page.

**Replay:** “REPLAY GLOOB'S OOPS!” repeats the accident without altering earned progress. If the crown star is unplaced, it can be released for normal placement. If already placed, use a clearly identified practice star; the real star stays in its chart. After the boop, the practice star floats toward the completed chart and disappears, with “JUST PRACTICING!! ALL STARS ACCOUNTED FOR!” No additional placement or award occurs.

The 1/6 greeting sequence describes a fresh first placement, not a forced counter value on later visits to the workbench. After a skip or partial sorting, a real placement adds exactly one to the existing count. Dismissing a practice replay removes only its temporary star; it never returns a credited star to the loose inventory. Finishing a decorative animation after dismissal or a confirmed Stardust reset cannot restore an obsolete rescue step or change progress.

**Acceptance criteria**
- The accident requires explicit activation; a single boop suffices.
- Tummy and labeled button are equivalent, accessible actions.
- Booping, skipping, navigating, scrolling, and replay animation never increment the placement counter.
- A skipped or dismissed rescue leaves every unplaced star available and every placed star intact.
- Replaying an already-credited star changes neither the chart nor stickers nor progress.
- Dismissing a practice replay leaves its real star in the chart and removes the temporary star; a later valid placement of an unplaced rescue star increments the existing count rather than setting it to 1/6.
- Rapid repeated activation cannot duplicate a release or award.
- Sound, hovering, animation, and timing are never essential to understanding or completing the rescue.

### Stardust Sorting Co.

Source: `scope.md > Committed project choices`, `The Core Loop`.

Six stars, two per chart:

| Chart | Star marking | Chart identity and completion flourish |
|---|---|---|
| Cosmic Crown | Crown | Crown illustration, glowing connections and a brief sparkle |
| Moon Mail | Crescent moon | Interplanetary post illustration and a briefly floating envelope |
| Rocket Route | Rocket | Navigation illustration and a miniature rocket following the finished route |

Each chart has its name, matching symbol, faint dotted guides, and two visible empty sockets. Background artwork makes two placements feel like completing a miniature constellation.

Select a loose star, then its chart. Selection visibly highlights the star and identifies its category, such as “CROWN STAR.” The whole chart is a destination; precise socket targeting is unnecessary. A correct star fills its next available socket, illuminates part of the pattern, leaves the loose-star area, and immediately updates “STARS OFFICIALLY FILED: n/6.”

A wrong chart gives gentle feedback and a short remark such as “PLEASE CONSULT MY VERY PROFESSIONAL LABELS.” The star stays selected and available; progress does not change. Matching evidence can become more noticeable after a mistake.

Two correct placements give that chart a persistent “CONSTELLATION APPROVED!” stamp. At six placements, all charts remain illuminated, the count reads 6/6, and the department awards “OFFICIAL STAR SORTER.” Gloob celebrates: “THIS IS THE MOST ORGANIZED I'VE EVER BEEN!” The workspace stays visible.

“START SORTING OVER” is separate from replay, less prominent, and requires confirmation. It clears only Stardust placements, chart stamps, and its department achievement. The introduction is not forced again.

**Acceptance criteria**
- Exactly two crown, two crescent, and two rocket stars can be placed, each once.
- A correct whole-chart selection fills one socket and increments progress once.
- Incorrect destinations preserve selection and all previous work.
- Each chart completes at two stars; the department completes at six total.
- Completed charts cannot accept extra stars or generate duplicate awards.
- Confirming reset returns Stardust to 0/6 and removes only its earned completion; canceling changes nothing.
- Symbols and readable labels make all matches possible without color.

### Lost Moon & Found

Source: `scope.md > Committed project choices`.

The “GALACTIC INVESTIGATION DEPARTMENT” has three illustrated case files, evidence inspection, a three-planet board, and “CASES SOLVED: n/3.” Gloob announces three missing moons and zero qualified detectives. Cases can be investigated in any order.

| Case | First witness statement | Revealed evidence | Destination |
|---|---|---|---|
| #001 Mimi, cheerful freckled crescent | Two giant rings outside her window | A little flag on top | Ringlet: two rings and a north-pole flag |
| #002 Nib, dramatic cratered round moon | Three pointy mountains counted at bedtime | A heart-shaped hole | Craggle: three tall peaks and a heart-shaped crater |
| #003 Puddle, sleepy squishy moon | A huge swirly storm | A weather station | Cloudle: spiral storm and a tiny weather station |

Planets have readable names and clearly distinguishable features, not color-only clues. Ringlet is cheerful, Craggle slightly grumpy, and Cloudle sleepy.

Opening a case shows portrait, report, first clue, and “EXAMINE EVIDENCE.” Activating the evidence reveals the second clue with a brief reveal; revealed clues remain visible while choosing. Evidence inspection is optional: visitors may answer from the first clue alone. Selecting a destination planet immediately attempts to return the currently selected moon, with no second confirmation action. The active case and destination controls are clearly identified through readable labels and selection feedback for touch and keyboard users. Evidence remains available before and after guesses. There is no separate help system; Gloob's wrong-answer dialogue encourages checking the evidence again. Evidence inspection is informative, not a timed challenge or a source of hidden scientific knowledge.

A correct return places the moon in its planet's visible orbit, stamps “CASE CLOSED!”, and increments progress once. A wrong return leaves the case active and moon unassigned, preserves previous solutions, and prompts another look at the clues. No penalties or limited attempts apply.

At 3/3, all restored moons and case stamps remain visible, and “CERTIFIED MOON DETECTIVE” is earned. Solved files can be inspected without earning progress again. A separate confirmed department restart restores its initial state and clears only its own achievement.

**Acceptance criteria**
- Each of the three cases has two concise, accessible clues with one unambiguous destination.
- Evidence can be revealed using click, tap, or keyboard; no clue requires hovering.
- Selecting a planet for an active unsolved case attempts the return immediately, whether or not the second clue has been revealed; no extra confirmation or help control appears.
- The selected case and destination actions are identifiable by keyboard and touch. Without an active unsolved case, selecting a planet cannot assign a moon or award progress.
- Wrong guesses leave all progress unchanged and evidence available.
- Each moon is assigned once per run; revisiting a solved case does not award it again.
- Three correct returns produce 3/3, three visible restored moons, and one department sticker.
- Navigation within the visit preserves solved cases; confirmed restart affects this department alone.
- The activity targets roughly one minute without a countdown. Reduced motion shows static restored moons and equivalent stamps/messages.

### Orbit Organizer 3000

Source: `scope.md > Committed project choices`, `Minimum shippable experience and feature reduction`.

Retro scientific workstation: “ORBIT ORGANIZER 3000™,” “Now with 37% fewer collisions!” Gloob declares: “IT MAKES THINGS GO IN CIRCLES! I THINK THAT'S SCIENCE.”

One cheerful central star, three rings labeled INNER/MIDDLE/OUTER, and an inventory labeled “UNORGANIZED SPACE OBJECTS.” Objects are Button, an enthusiastic button-crater planet; Pompom, a confused fluffy asteroid; and Zippy, an excited teardrop comet. Each has a readable name and distinctive silhouette.

Initial settings are Speed: Normal; Direction: Clockwise; Machine Status: Not started; all three objects in inventory.

Select an object, then an empty ring. Each ring holds one object; all arrangements are valid. An occupied destination gives a friendly request to choose a free ring without displacing either object. Already-placed objects can move to empty rings.

“RETURN TO INVENTORY” returns the selected placed object and frees its ring. If the machine is running, this pauses movement and returns it to editing. There is no automatic swapping.

“START ORBITS!” stays visible but unavailable until all three objects are placed; accompanying text states how many remain. Starting a complete system lights up the workstation, brings the objects to life, shows “COSMIC ORDER: VERIFIED!”, and awards “OFFICIAL ORBIT ARCHITECT.” No particular arrangement or running duration is required.

Global controls offer Slow/Normal/Fast and Clockwise/Counterclockwise. After starting, the primary machine control becomes “PAUSE ORBITS.” Pausing stops movement and changes that control to “RESUME ORBITS.” Resuming continues the existing arrangement without another achievement. Changing speed or direction updates the selected setting immediately and, when running, the movement; it does not restart a paused machine or clear completion. Under reduced motion, the arrangement stays static while operating/paused status, selected settings, start/completion feedback, and all controls remain available.

After earning the sticker, pausing, changing settings, returning objects, and rearranging do not clear completion. Returning an object changes the machine to editing and the primary control back to “START ORBITS!”, unavailable until all three objects are placed again. Once repopulated, starting operates the arrangement again without duplicating the existing award. Navigation preserves arrangement and settings during the visit.

Confirmed “RESET LAB” returns all objects to inventory, restores initial settings, clears lab completion and its sticker, and affects no other department.

**Acceptance criteria**
- Three named objects can occupy three named rings, one per ring, in any arrangement.
- Occupied-ring attempts preserve the arrangement and give a readable explanation.
- Returning an object frees its ring; doing so while running stops movement and permits editing.
- Start cannot activate an incomplete arrangement and explains the missing-object count.
- Starting all three once earns completion immediately, with no timing requirement.
- Speed and direction controls affect the whole system; pause visibly stops ordinary motion.
- Initial and confirmed-reset settings are Normal, Clockwise, Not started, with all objects in inventory.
- The primary control follows START → PAUSE → RESUME → PAUSE for a complete arrangement; resuming preserves placements and awards no duplicate sticker.
- Returning an object while operating stops movement and restores the unavailable START control until all three objects are placed again.
- Reduced-motion users see operating/paused status and the same control transitions while objects remain static.
- Experimentation never revokes the achievement or duplicates it.
- Confirmed reset clears only lab progress and restores initial settings; canceling preserves everything.
- A reduced-motion visitor can earn the same completion without continuous movement.

### Origin Story and Employee Profile

Source: `scope.md > Committed project choices`, `Required foundation`; `context.md > Gloob's official five-point character sheet`.

Three short illustrated scroll scenes, with expressive visual changes and humorous captions:

1. **A Little Void Is Born:** Gloob forms amid a messy nebula and cosmic clutter.
2. **The Great Organization Disaster:** His first organizing attempt swallows seventeen stars and other objects.
3. **Gloob's Cosmic Headquarters:** Determined to improve, he opens his business and invites help.

The story is available naturally after the departments and directly through My Story. It is not a mandatory prelude. No additional story game is required.

The employee profile explicitly presents all five canon fields: Gloob's name; baby-black-hole nature, appearance, and personality; Junior Space Organizer profession and certification dream; origin/journey; and “A place for everything. Preferably not in my tummy.” Funny credentials may use established canon such as three cosmic naps old and Professional Accidental Vacuum.

**Acceptance criteria**
- All three story beats are understandable through illustrations and short captions, including without motion.
- Story scenes do not require completion or timed viewing.
- All five character-sheet fields are visibly readable outside the Easter egg.
- Narrative, profile, and activity dialogue preserve Gloob's friendly, original identity.
- Copy stays concise, targeting the context's roughly 150 words or fewer per section rather than walls of lore.

### Gloob's Secret Snack Drawer

Source: `scope.md > Committed project choices`.

Before discovery, three deliberate activations of the yellow head-star reveal a retro popup titled “GLOOB'S SECRET SNACK DRAWER.” An occasional subtle shimmer or wobble and a playful hover/focus hint suggest something unusual. The hint is supplemental, not required to operate the secret; reduced motion retains a static visual cue and the focus hint. The head-star remains distinct from the tummy rescue, has a generous touch target, and accepts click, tap, Enter, and Space. Contents include seventeen stars, a Wednesday, somebody's left sock, and Gloob's to-do list. A small release action lets an object float away; reduced motion conveys the same outcome without travel animation. This never changes department progress or adds a collectible system.

After discovery, one head-star activation reopens the drawer for the rest of the current page visit. Each reopening restores its objects to their initial arrangement; released objects are not permanent collectibles. Closing preserves department work. Full page reload restores the undiscovered secret and its three-activation requirement.

**Acceptance criteria**
- On a fresh visit, three intentional head-star activations reveal the drawer without timing or pointer-precision demands; after discovery, a single activation reopens it.
- Keyboard and touch users can discover and activate the trigger.
- Click, tap, Enter, and Space all support discovery and reopening; no hover interaction is required.
- Visitors can release an object and perceive the outcome without sound or motion.
- The popup has an obvious close action, supports keyboard dismissal, and returns visitors to the underlying page without losing progress.
- Drawer actions never count as sorting stars or completing another department.
- Each reopening restores released objects; closing or reopening never alters department progress or achievements.
- A full reload returns the secret to undiscovered and requires three activations again.

### Achievements, Completion, and Resets

Source: `scope.md > Completion acknowledgment` (under `Committed project choices`), `Minimum shippable experience and feature reduction`.

“COSMIC EMPLOYEE ACHIEVEMENTS” has three initially faded sticker outlines:

- Stardust: **OFFICIAL STAR SORTER**.
- Lost Moon & Found: **CERTIFIED MOON DETECTIVE**.
- Orbit Organizer: **OFFICIAL ORBIT ARCHITECT**.

Completion colors the matching sticker and adds “APPROVED!” Each department also displays its own status. The full board sits after the departments and before the story. An accessible header indicator reads “DEPARTMENTS COMPLETED: n/3” and links to that board; both locations show the same total. No separate inventory, progression currency, leaderboard, or collectible management is added.

On reaching 3/3, a brief Gloob celebration appears at the department just completed, without a fullscreen modal or forced navigation. Suggested dialogue: “WAIT. YOU ORGANIZED ALL THE THINGS?! THAT'S MORE THAN I'VE EVER ORGANIZED! YOU'RE OFFICIALLY MY FAVORITE EMPLOYEE!!” The achievement board also shows all stickers and a congratulatory message.

Only a confirmed department reset clears that department's earned completion during the visit. Its sticker becomes unearned, the total decreases, and any all-complete acknowledgment returns to incomplete. Other departments are unaffected. Completing the reset department restores its sticker and permits the 3/3 congratulations again. Normal accident replay and lab experimentation never clear achievements. A full reload clears the entire visit, as specified below.

The total counts earned department completions, not currently filled orbit rings. Resetting an already-incomplete department does not decrement the total. Resetting a completed department removes exactly its one contribution, updates both count displays, and removes the all-complete congratulatory state wherever displayed. Accident replay is distinct from re-completing a deliberately reset activity, which can legitimately earn its sticker again.

**Acceptance criteria**
- Each completed department contributes exactly one sticker and one unit to the overall count.
- Completing the third department in any order shows local congratulations and updates the board without blocking exploration.
- Reset confirmation names the affected department and makes clear that its work and sticker will be cleared; cancellation changes nothing.
- Resetting one department from 3/3 yields 2/3 and removes only its sticker and the all-complete message.
- Resetting an unearned department leaves the total unchanged; returning lab objects to inventory after earning its sticker leaves both overall count displays unchanged.
- Re-completing that department restores 3/3 and can celebrate again.
- Replaying or changing an already-completed toy produces no duplicate award.
- A printable certificate or elaborate final badge is not required.

### Accessibility and Responsive Behavior

Source: `scope.md > Shared quality baseline` (under `Committed project choices`), `What "Working" Looks Like`.

Every essential action works through click/tap and keyboard. Selection, destination, progress, error, and completion states have readable labels or other persistent non-color-only feedback. Instructions never depend solely on hover, sound, or motion. Targets are generous; no precise socket or moving-object interception is required. Focus stays visible and follows a sensible reading order; popup/confirmation interactions must permit exit and return to their invoking control.

Reduced motion removes unnecessary spirals, bouncing, wiggling, and continuous orbits while retaining clear expression changes, object placements, settings, stamps, and messages. Decorative clutter frames rather than covers content. Mobile uses a reflowed vertical layout, not a miniature desktop.

**Acceptance criteria**
- A keyboard-only visitor can navigate, skip/replay/rescue, finish all three activities, reset/cancel, and open/use/close the drawer.
- A touchscreen visitor can perform the same actions without dragging or hovering.
- At phone and tablet sizes, labels and controls remain readable and reachable without clipped essential content.
- Errors, selection, and completion remain distinguishable without color or animation.
- Reduced-motion settings preserve all achievable outcomes and never require watching continuous movement.
- No animation traps navigation or requires rapid or precisely timed input.

## States and Boundaries

Source: `scope.md > The Core Loop`, `The POC Boundary`, and the interview's shared interaction rules.

- **Fresh visit:** Introduction available; Stardust 0/6; Moon cases 0/3; lab inventory full, Normal speed, Clockwise direction, Not started and incomplete; all achievement slots unearned; overall 0/3; Snack Drawer undiscovered.
- **Same-page exploration:** Successful placements, solved cases, lab arrangement/settings, and earned achievements survive navigation. No save action is needed.
- **Interrupted introduction:** Explicit navigation, skipping, or starting another activity dismisses temporary rescue states and returns the unplaced crown star to normal sorting. Existing credit survives. Ordinary scrolling permits continuing the stable rescue step later.
- **Wrong input:** Wrong star chart, wrong planet, and occupied orbit explain the issue without losing work, consuming attempts, or imposing a timer.
- **Practice replay:** Clearly identified; cannot duplicate actual stars, placements, stickers, or completion.
- **Post-completion play:** Completed work stays visible. Lab editing may make the current arrangement incomplete while retaining its previously earned achievement until reset.
- **Department reset:** Requires confirmation; clears that department's activity and award only. Updates shared completion consistently.
- **Full reload:** Begins a fresh visit, clearing all project progress, arrangements, settings, achievements, acknowledgment, temporary interaction states, and Snack Drawer discovery. Lab defaults and the three-activation secret requirement return. No committed cross-reload persistence.
- **Optional audio absent:** Every instruction and outcome still works. If sound is added later, it requires a conspicuous functioning mute/unmute control and no unexpected autoplay.

## Product Decisions

- One scrolling headquarters with department identities — preserves a coherent fictional workplace and straightforward navigation.
- Projects links to a compact directory without duplicate activities; Achievements and the compact header count link to the board between departments and story — keeps navigation and progress discoverable.
- Core early-web styling, not optional polish — character ownership should be visible even without effects.
- One consistent hand-drawn character language — stronger identity within the available art budget than many elaborate unrelated illustrations.
- Visitor-triggered accident and one-boop rescue — agency and humor without a timing challenge or automatic gate.
- Rescue placement counts toward the real six stars — avoids a repetitive tutorial.
- Dismiss unstable introductory states on deliberate departure — keeps the workspace predictable; ordinary scrolling remains harmless.
- Practice replay and confirmed project reset are separate — protects earned work while allowing experimentation.
- Star categories use symbols and labels; moon cases use visible descriptive clues — distinct activities with accessible recognition and deduction.
- Planet activation immediately attempts the active case; second-clue inspection is optional and there is no separate help system — keeps the detective activity short and forgiving.
- All orbit arrangements are valid; first complete activation earns success — creative ownership rather than a physics puzzle.
- Return-to-inventory replaces automatic swapping — makes rearrangement possible without complicated placement rules.
- Normal/Clockwise are lab defaults; one primary START/PAUSE/RESUME control reflects operating status — makes experimentation predictable without changing earned completion.
- Three lightweight shared sticker slots and local final thanks — visible accomplishment without an intrusive ending or extra progression system.
- Reset clears only the affected earned achievement; lab experimentation does not — current-run completion is deliberate and predictable.
- Full reload starts fresh — no persistence service or saved-session requirements in the MVP.
- The Snack Drawer requires three activations only until discovered during a visit, then one to reopen; contents reset on reopening — rewards discovery without adding collectibles or persistent inventory.

## What We're Building

Source: `scope.md > Minimum shippable experience and feature reduction`, `Delivery constraint and priority`.

The minimum release contains the expressive Gloob and early-web headquarters; skippable and progress-safe rescue; six-star Stardust activity; three moon cases; three-object orbital toy; three illustrated origin scenes; five-field profile; accessible Snack Drawer; per-project stickers; shared acknowledgment; responsive and accessible controls; reduced-motion equivalents; replay and deliberate independent resets.

The provisional solo development budget remains 12–16 focused hours with at least three reserved for mobile verification, fixes, deployment, and submission preparation. Deploy a working version early. The fixed deadline remains **19 October 2026, 17:17 IST**.

Submission readiness includes a live public website, public GitHub repository with eligible build-window history, short build story, character sheet, and proper credits. Only shipped features may be claimed. No pitch-video requirement is imported from the learning curriculum.

## Deferred From the POC

Source: `scope.md > Later`, `Minimum shippable experience and feature reduction`.

- Sound effects and desktop cursor sparkles follow the complete core; they cannot fund cuts to required behavior.
- Responsive Chaos Mode, printable certificate/elaborate final badge, extra character reactions, and decorative polish remain stretch goals.
- Desktop dragging is optional; click/tap selection remains sufficient.
- Cross-reload persistence is not part of this PRD's MVP behavior.

If time runs short, first remove optional extras; then simplify decoration, dialogue variants, and animation choreography. Keep three short moon cases and limit the orbital toy's adjustable properties if necessary, as allowed by the approved scope. Both global speed and direction are the desired behavior documented here; any use of the one-property fallback must be explicitly recorded rather than silently dropping a documented control. Preserve object counts, distinct activities, character identity, story, profile, Easter egg, acknowledgment, accessibility, and the finishing-time reserve.

## Possible Later Enhancements

Small user-enabled sound effects with an obvious mute control and lightweight desktop stardust can add personality after the core passes review. A printable certificate or deliberately playful responsive transformation may be attempted only if the core and submission are secure. These additions have no required acceptance criteria here and do not guarantee organizer bonus points.

## Non-Goals

Source: `scope.md > Explicitly Cut`.

- Backend services, shared guestbook, global hit counter, accounts, online synchronization — unnecessary infrastructure for the character experience.
- Real gravity/orbital simulation, collision physics, procedural worlds, 3D engines — controlled illustration and motion serve the premise.
- AI conversation system — authored, consistent character reactions are sufficient.
- More objects, levels, mystery chains, per-object scientific properties, or customization tools — keep the three activities compact.
- Currency, leaderboards, collectible inventory, or badge-management screens — progress is three simple department achievements.
- Forced sequence, lengthy opening cinematic, or draggable desktop simulation — preserve free, reliable exploration.
- Punitive errors, precision-only controls, or irreversible mistakes — conflict with the forgiving visitor experience.

## Open Questions

No consequential product decisions remain unresolved from this interview. The four final review decisions are incorporated into their feature sections and acceptance criteria. This document remains a draft pending explicit approval of the final revision.

Minor final dialogue wording, exact idle delay, and decorative timing can be refined later without changing the approved behaviors. No framework, rendering approach, architecture, or implementation design is selected in this document.
