import { useEffect, useReducer, useRef, useState } from 'react';
import { initialProgress, progressReducer, selectAchievements } from './state';
import { StardustDepartment } from './components/StardustDepartment';
import { GloobCharacter } from './components/GloobCharacter';
import type { GloobExpression } from './art/GloobArt';

const links = [
  ['Home', '#home'], ['Projects', '#projects'], ['My Story', '#story'],
  ['About Gloob', '#about'], ['Achievements', '#achievements']
] as const;

const departments = [
  { number: '01', name: 'Stardust Sorting Co.', id: 'stardust', label: 'THE VERY IMPORTANT STAR DESK', copy: 'Tiny stars. Big mess. Very official filing.' },
  { number: '02', name: 'Lost Moon & Found', id: 'moons', label: 'THE DETECTIVE BUREAU', copy: 'Reuniting lonely moons with the planets that miss them.' },
  { number: '03', name: 'Orbit Organizer 3000', id: 'orbits', label: 'THE SCIENCE LAB', copy: 'Beautiful orbits, expertly arranged. Please ignore the wobble.' }
];

export function App() {
  const [expression, setExpression] = useState<GloobExpression>('proud');
  const [message, setMessage] = useState('HELLO!! Welcome to my very professional office!');
  const [starTaps, setStarTaps] = useState(0);
  const [progress, dispatch] = useReducer(progressReducer, initialProgress);
  const earned = selectAchievements(progress);
  const [rescuePhase, setRescuePhase] = useState<'ready' | 'demonstrating' | 'boop' | 'released' | 'idle'>('ready');
  const [practice, setPractice] = useState(false);
  const rescueSequence = useRef(0);
  const rescueTimer = useRef<number | null>(null);
  const phaseRef = useRef(rescuePhase);
  phaseRef.current = rescuePhase;
  const timerGuard = useRef<() => void>(() => {});
  function cancelRescue() {
    rescueSequence.current++;
    if (rescueTimer.current !== null) clearTimeout(rescueTimer.current);
    rescueTimer.current = null;
    setRescuePhase('idle');
    setPractice(false);
  }
  timerGuard.current = cancelRescue;
  useEffect(() => {
    const onHashNavigation = () => {
      if (phaseRef.current !== 'idle' && phaseRef.current !== 'ready') timerGuard.current();
    };
    window.addEventListener('hashchange', onHashNavigation);
    return () => {
      window.removeEventListener('hashchange', onHashNavigation);
      rescueSequence.current++;
      if (rescueTimer.current !== null) clearTimeout(rescueTimer.current);
    };
  }, []);
  function beginRescue() {
    cancelRescue();
    const sequence = rescueSequence.current;
    const alreadyPlaced = progress.stars.includes('crown-1');
    setPractice(alreadyPlaced);
    setRescuePhase('demonstrating');
    setExpression('proud');
    setMessage("WATCH THIS! I'VE BEEN PRACTICING!");
    rescueTimer.current = window.setTimeout(() => {
      if (rescueSequence.current !== sequence || phaseRef.current !== 'demonstrating') return;
      setRescuePhase('boop');
      setExpression('panicked');
      setMessage('OH NO. I FILED IT IN MY TUMMY AGAIN. UM... COULD YOU BOOP MY TUMMY?');
    }, 1100);
  }
  function boop() {
    if (phaseRef.current !== 'boop') return;
    setRescuePhase('released');
    setExpression('excited');
    setMessage(practice ? 'JUST PRACTICING!! ALL STARS ACCOUNTED FOR!' : 'PHEW! SELECT THAT CROWN STAR AND PUT IT IN COSMIC CROWN!');
    if (practice) {
      const sequence = rescueSequence.current;
      rescueTimer.current = window.setTimeout(() => {
        if (rescueSequence.current !== sequence || phaseRef.current !== 'released') return;
        setRescuePhase('idle');
        setPractice(false);
      }, 1400);
    }
  }
  function onStarPlaced(starId: string) {
    if (starId === 'crown-1' && phaseRef.current === 'released' && !practice) {
      cancelRescue();
      setExpression('excited');
      setMessage("YOU'RE HIRED! WAIT... CAN YOU HELP WITH THE OTHER FIVE?");
    } else if (progress.stars.length === 5) {
      setExpression('excited');
      setMessage("THIS IS THE MOST ORGANIZED I'VE EVER BEEN!");
    } else {
      setExpression('happy');
      setMessage('EXCELLENT FILING! OUR OFFICE IS ALMOST RESPECTABLE!');
    }
  }

  function wave() {
    setExpression(expression === 'excited' ? 'proud' : 'excited');
    setMessage('YOU WAVED AT ME!! I SHALL FILE THIS UNDER FRIENDSHIP.');
  }
  function headStar() {
    const next = starTaps + 1;
    setStarTaps(next);
    if (next < 3) {
      setExpression('confused');
      setMessage(next === 1 ? 'Huh? Did you touch my star?' : 'IT IS STILL STUCK! ONE MORE TRY?');
    } else {
      setExpression('embarrassed');
      setMessage('YOU FOUND MY SECRET! I HAVE SWALLOWED SOME QUESTIONABLE THINGS.');
    }
  }
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="marquee" aria-hidden="true"><span>✦ OFFICIAL COSMIC HQ ✦ OPEN APPROXIMATELY ALWAYS ✦ PLEASE DO NOT FEED THE BLACK HOLE ✦</span></div>
      <header className="site-header">
        <a className="brand" href="#home"><span className="brand-star">✳</span><span>GLOOB<span className="brand-dot">.OS</span></span></a>
        <nav aria-label="Main navigation">{links.map(([title, target]) => <a key={target} href={target} onClick={cancelRescue}>{title}</a>)}</nav>
        <a className="progress-pill" href="#achievements" onClick={cancelRescue}>DEPARTMENTS COMPLETED: {earned.total}/3</a>
      </header>
      <main id="main">
        <section className="hero section-grid" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="stamp small-stamp">EMPLOYEE #0001 · THE LITTLE VOID</div>
            <p className="eyebrow">✦ WELCOME TO MY EXTREMELY OFFICIAL WEBSITE ✦</p>
            <h1 id="hero-title">HI!! I'M <span>GLOOB!</span></h1>
            <p className="hero-role">Junior Space Organizer.<br/>Professional Accidental Vacuum.</p>
            <p className="hero-description">I keep the universe in order. <em>Sort of.</em> Sometimes things fall into my tummy. BUT I'M GETTING BETTER!!</p>
            <div className="hero-actions">
              <button type="button" className="btn primary" onClick={beginRescue}>WATCH ME ORGANIZE! <span aria-hidden="true">✦</span></button>
              <a className="btn ghost" href="#projects" onClick={cancelRescue}>EXPLORE HQ INSTEAD ↓</a>
            </div>
            <p className="microcopy">★ Please disregard any missing stars. They are being processed.</p>
            {rescuePhase === 'boop' && <button type="button" className="btn boop-button" onClick={boop}>BOOP GLOOB! ✦</button>}
            {(rescuePhase === 'demonstrating' || rescuePhase === 'boop' || rescuePhase === 'released') &&
              <button type="button" className="inline-cancel" onClick={cancelRescue}>SKIP / DISMISS ACCIDENT</button>}
          </div>
          <div className="character-desk">
            <div className="desk-notice notice-top">⭐ EMPLOYEE OF THE MONTH<br/><strong>(self-nominated)</strong></div>
            <div className="little-orbit orbit-one">✦</div>
            <div className="little-orbit orbit-two">✳</div>
            <GloobCharacter expression={expression} onHeadStar={headStar} onTummyBoop={boop}/>
            <div className="speech" role="status">{message}</div>
            <div className="desk-label">NAME: GLOOB · JOB: ORGANIZING(?) · STATUS: TRYING MY BEST</div>
          </div>
        </section>
        <section className="directory paper-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><span className="section-number">01 / THE OFFICE</span><h2 id="projects-title">MY VERY IMPORTANT DEPARTMENTS</h2><p>Three little cosmic businesses. One very underqualified boss.</p></div>
          <div className="directory-grid">
            {departments.map((d) => <a href={'#' + d.id} className="directory-card" key={d.id} onClick={cancelRescue}>
              <span className="directory-num">{d.number}</span><span className="directory-glyph" aria-hidden="true">{d.number === '01' ? '✦' : d.number === '02' ? '☾' : '◎'}</span>
              <span className="directory-name">{d.name}</span><span className="directory-copy">{d.copy}</span>
              <span className="directory-action">VISIT DEPARTMENT ↗</span>
            </a>)}
          </div>
        </section>
        <StardustDepartment
          progress={progress}
          dispatch={dispatch}
          rescuePhase={rescuePhase}
          practice={practice}
          beginRescue={beginRescue}
          dismissRescue={cancelRescue}
          onBoop={boop}
          onStarPlaced={onStarPlaced}
        />
        <section className="department" id="moons" aria-labelledby="moons-title"><div className="retro-window blue-window"><div className="window-top"><span>☾ / DEPARTMENT 002</span><span className="window-dots" aria-hidden="true">● ● ●</span></div><div className="department-body"><div><p className="eyebrow">LOST MOON & FOUND</p><h2 id="moons-title">The Detective Bureau</h2><p>Some moons have wandered away from their planets. Their case files are being prepared.</p><span className="under-construction">☆ CASE FILES: NEXT BUILD SLICE</span></div><div className="mini-moon" aria-hidden="true">☾</div></div></div></section>
        <section className="department" id="orbits" aria-labelledby="orbits-title"><div className="retro-window purple-window"><div className="window-top"><span>◎ / DEPARTMENT 003</span><span className="window-dots" aria-hidden="true">● ● ●</span></div><div className="department-body"><div><p className="eyebrow">ORBIT ORGANIZER 3000</p><h2 id="orbits-title">The Science Lab</h2><p>I have invented a machine to organize whole solar systems. The manual is only a little bit eaten.</p><span className="under-construction">☆ ORBIT CONTROLS: NEXT BUILD SLICE</span></div><div className="mini-orbits" aria-hidden="true"><i/><i/><i/></div></div></div></section>
        <section className="paper-section achievements" id="achievements" aria-labelledby="achievements-title"><div className="section-heading"><span className="section-number">02 / EMPLOYEE RECORDS</span><h2 id="achievements-title">COSMIC EMPLOYEE ACHIEVEMENTS</h2><p>Three extremely official stamps are waiting for a cosmic assistant.</p></div><div className="stickers"><div className={earned.stardust ? 'earned' : ''}>✦ <span>OFFICIAL STAR SORTER</span></div><div>☾ <span>CERTIFIED MOON DETECTIVE</span></div><div>◎ <span>OFFICIAL ORBIT ARCHITECT</span></div></div><p className="microcopy">{earned.total}/3 DEPARTMENTS COMPLETED · Stardust unlocks its stamp after six valid placements.</p></section>
        <section className="story paper-section" id="story" aria-labelledby="story-title"><div className="section-heading"><span className="section-number">03 / ORIGIN STORY</span><h2 id="story-title">HOW I BECAME VERY PROFESSIONAL</h2></div><div className="story-grid"><article><div className="scene-art">✧ &nbsp; ✦ &nbsp; ✧</div><h3>01. A LITTLE VOID IS BORN</h3><p>A nebula had too much stuff. Then, poof, there was me. I immediately wanted to tidy everything.</p></article><article><div className="scene-art">★ &nbsp; ◉ &nbsp; ✶</div><h3>02. THE GREAT DISASTER</h3><p>I tried organizing seventeen stars. They disappeared. Gravity is a complicated coworker.</p></article><article><div className="scene-art">⌂ &nbsp; ✦ &nbsp; ☆</div><h3>03. THE HEADQUARTERS</h3><p>So I opened an office! The pay is mostly stickers. Would you like to be my assistant?</p></article></div></section>
        <section className="about paper-section" id="about" aria-labelledby="about-title"><div className="section-heading"><span className="section-number">04 / STAFF DOSSIER</span><h2 id="about-title">MEET YOUR BOSS (ME!!)</h2></div><div className="profile-layout"><div className="profile-icon"><GloobCharacter expression="happy" /><span>EMPLOYEE OF THE MONTH ★</span></div><dl><div><dt>NAME</dt><dd>Gloob</dd></div><div><dt>WHAT I AM</dt><dd>A palm-sized baby black hole with a big heart and very grabby gravity.</dd></div><div><dt>WHAT I DO</dt><dd>Junior Space Organizer. Stars, moons, orbits—everything gets a file!</dd></div><div><dt>MY STORY</dt><dd>Born in a messy nebula, swallowed my first constellation, opened Cosmic HQ.</dd></div><div><dt>MY TAGLINE</dt><dd>“A place for everything. Preferably not in my tummy.”</dd></div></dl></div></section>
      </main>
      <footer><p>✦ HANDMADE WITH GRAVITY & QUESTIONABLE ORGANIZATION ✦</p><p>Made for Baby's First Website 2026 · Track 2 · Original Gloob art and code with AI assistance · <a href="https://github.com/ThunderKhan/gloob">Source on GitHub</a></p></footer>
    </div>
  );
}
