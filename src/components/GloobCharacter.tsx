import { useRef, useState, type PointerEvent } from 'react';
import { GloobArt, type GloobExpression } from '../art/GloobArt';

type Props = {
  expression?: GloobExpression;
  onHeadStar?: () => void;
  onTummyBoop?: () => void;
  className?: string;
};

export function GloobCharacter({ expression = 'happy', onHeadStar, onTummyBoop, className = '' }: Props) {
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  function point(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.current = requestAnimationFrame(() => {
      setPupil({ x: Math.max(-5, Math.min(5, x * 10)), y: Math.max(-4, Math.min(4, y * 8)) });
      frame.current = null;
    });
  }
  function reset() {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    setPupil({ x: 0, y: 0 });
  }
  return (
    <div className={'gloob-wrap ' + className} onPointerMove={point} onPointerLeave={reset}>
      <GloobArt className="gloob-art" expression={expression} pupilX={pupil.x} pupilY={pupil.y} />
      {onHeadStar && <button type="button" className="character-hotspot headstar-target" onClick={onHeadStar} aria-label="Tap the yellow star stuck on Gloob's head" title="Why is that star stuck there?"><span className="sr-only">Tap Gloob's yellow head star</span></button>}
      {onTummyBoop && <button type="button" className="character-hotspot tummy-target" onClick={onTummyBoop} aria-label="Boop Gloob's tummy"><span className="sr-only">Boop Gloob's tummy</span></button>}
    </div>
  );
}
