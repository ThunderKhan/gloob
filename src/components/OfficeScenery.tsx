export function OfficeScenery() {
  return (
    <div className="office-scenery" aria-hidden="true">
      <div className="office-poster"><span>✷ HQ MEMO #017</span><strong>DO NOT EAT THE PAPERWORK.</strong><small>GLOOB HAS BEEN WARNED.</small></div>
      <div className="office-shelf"><span className="shelf-planet">✦</span><span className="shelf-folder">STARS<br/>A–Z</span><span className="shelf-folder shelf-folder-blue">MOONS<br/>LOST</span><span className="shelf-mug">☕</span></div>
      <div className="office-desk-surface"><span className="desk-doodle">✳</span><span className="desk-tray"><span>★</span> INCOMING</span></div>
    </div>
  );
}

type RescuePhase = 'ready' | 'demonstrating' | 'boop' | 'released' | 'idle';
export function RescueStar({ phase, practice }: { phase: RescuePhase; practice: boolean }) {
  if (phase !== 'demonstrating' && phase !== 'boop' && phase !== 'released') return null;
  return (
    <div className={'rescue-star-track rescue-' + phase} aria-hidden="true">
      <div className="rescue-star-shape"><span>✦</span><small>{practice ? 'PRACTICE' : 'CROWN'}</small></div>
    </div>
  );
}
