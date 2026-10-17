import { useEffect, useState, type Dispatch } from 'react';
import { charts, stars, type ChartId, type Progress, type ProgressAction } from '../state';

type RescuePhase = 'ready' | 'demonstrating' | 'boop' | 'released' | 'idle';
type Props = {
  progress: Progress; dispatch: Dispatch<ProgressAction>;
  rescuePhase: RescuePhase; practice: boolean;
  beginRescue: () => void; dismissRescue: () => void; onBoop: () => void;
  onStarPlaced: (starId: string) => void;
};

export function StardustDepartment({ progress, dispatch, rescuePhase, practice, beginRescue, dismissRescue, onBoop, onStarPlaced }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("Pick a loose star, then choose the chart with the matching symbol!");
  const isSortingBlocked = rescuePhase === 'demonstrating' || rescuePhase === 'boop';
  useEffect(() => {
    if (rescuePhase === 'demonstrating') setSelected(null);
  }, [rescuePhase]);
  const available = stars.filter(star => !progress.stars.includes(star.id) && !(isSortingBlocked && star.id === 'crown-1'));
  function place(chartId: ChartId) {
    if (!selected) {
      setFeedback('PICK A STAR FIRST! Even very official filing requires paperwork.');
      return;
    }
    if (isSortingBlocked && selected === 'crown-1') {
      setFeedback("GLOOB HAS THAT CROWN STAR IN HIS TUMMY! Boop him first or skip the accident.");
      return;
    }
    const star = stars.find(s => s.id === selected);
    const alreadyFull = progress.stars.filter(id => stars.find(s => s.id === id)?.chart === chartId).length >= 2;
    if (!star || star.chart !== chartId) {
      setFeedback('PLEASE CONSULT MY VERY PROFESSIONAL LABELS. That is the wrong chart!');
      return;
    }
    if (alreadyFull) {
      setFeedback('That constellation is already approved. Choose an empty chart!');
      return;
    }
    if (progress.stars.includes(selected)) return;
    dispatch({ type: 'PLACE_STAR', starId: selected, chartId });
    setSelected(null);
    setFeedback(progress.stars.length === 5 ? 'ALL SIX STARS FILED! THIS IS THE MOST ORGANIZED I HAVE EVER BEEN!' : 'CONSTELLATION FILING SUCCESSFUL! SO PROFESSIONAL!');
    onStarPlaced(star.id);
  }
  function reset() {
    if (!window.confirm('Start Stardust Sorting over? This clears only the six star placements and its sticker.')) return;
    dismissRescue();
    dispatch({ type: 'RESET_DEPARTMENT', department: 'stardust' });
    setSelected(null);
    setFeedback('Official star records cleared. All six stars are ready for filing!');
  }
  return (
    <section className="department" id="stardust" aria-labelledby="stardust-title">
      <div className="retro-window">
        <div className="window-top"><span>✦ / DEPARTMENT 001 / STARDUST SORTING CO.</span><span className="window-dots" aria-hidden="true">● ● ●</span></div>
        <div className="stardust-workbench">
          <div className="stardust-top"><div><p className="eyebrow">THE VERY IMPORTANT STAR DESK</p><h2 id="stardust-title">Help Me Sort The Stars!</h2></div><span className="status-chip">STARS FILED: {progress.stars.length}/6</span></div>
          <p className="workbench-note">Six cosmic employees have escaped their folders! Match each star's printed symbol to the correct two-star chart. No dragging required.</p>
          <div className="rescue-strip">
            <strong>✦ GLOOB'S ACCIDENTAL STAR SNACK</strong>
            {rescuePhase === 'ready' && <button type="button" className="btn primary" onClick={beginRescue}>WATCH ME ORGANIZE!</button>}
            {rescuePhase === 'demonstrating' && <span role="status">Gloob is showing off his sorting skills...</span>}
            {rescuePhase === 'boop' && <button type="button" className="btn primary" onClick={onBoop}>BOOP GLOOB! (one boop)</button>}
            {rescuePhase === 'released' && <span role="status">{practice ? 'PRACTICE STAR! Progress stays untouched.' : 'Crown star rescued! Now select it and file it into Cosmic Crown.'}</span>}
            {rescuePhase === 'idle' && <button type="button" className="btn ghost" onClick={beginRescue}>REPLAY GLOOB'S OOPS!</button>}
            {(rescuePhase === 'ready' || rescuePhase === 'demonstrating' || rescuePhase === 'boop' || rescuePhase === 'released') && <button type="button" className="reset-link" onClick={dismissRescue}>SKIP / DISMISS</button>}
          </div>
          <div className="workbench-grid">
            <div className="star-tray">
              <h3>UNFILED STARS ({available.length})</h3>
              <div className="star-buttons" role="group" aria-label="Choose an unfiled star">
                {available.map(star => <button key={star.id} type="button" className={'star-button ' + (selected === star.id ? 'selected' : '')} aria-pressed={selected === star.id} onClick={() => {setSelected(star.id);setFeedback(star.marking + ' STAR SELECTED. Now pick its chart!');}}>
                  <span aria-hidden="true" className="star-drawing">✦</span><strong>{star.name}</strong><span>{star.glyph} {star.marking}</span>
                </button>)}
              </div>
              {available.length === 0 && <p>EVERY STAR HAS A HOME. WHAT A DAY!!</p>}
            </div>
            <div className="chart-board" role="group" aria-label="Choose a constellation chart">
              {charts.map(chart => {
                const filled = progress.stars.filter(id => stars.find(s => s.id === id)?.chart === chart.id).length;
                return <button type="button" key={chart.id} className={'chart-button ' + (filled === 2 ? 'finished' : '')} onClick={() => place(chart.id)}>
                  <span><span className="chart-name">{chart.name}</span><span className="chart-hint">MATCH: {chart.marking} · {filled}/2 FILED</span></span>
                  <span className="chart-sockets" aria-hidden="true">{[0,1].map(i => <span key={i} className={'star-socket ' + (i < filled ? 'filled' : '')}>{i < filled ? '✦' : '·'}</span>)}</span>
                  {filled === 2 && <span className="approved-stamp">✓ CONSTELLATION APPROVED!</span>}
                </button>;
              })}
            </div>
          </div>
          <p className="workbench-feedback" role="status" aria-live="polite">{feedback}</p>
          {progress.stars.length === 6 && <div className="status-chip">✦ OFFICIAL STAR SORTER — ACHIEVEMENT UNLOCKED!</div>}
          <div><button type="button" className="reset-link" onClick={reset}>START SORTING OVER (confirmation required)</button></div>
        </div>
      </div>
    </section>
  );
}
