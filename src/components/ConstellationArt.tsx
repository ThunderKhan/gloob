import type { ChartId } from '../state';

type Props = { chart: ChartId; filled: number };
const paths: Record<ChartId, [number, number, number, number, number, number]> = {
  crown: [19, 78, 61, 38, 101, 78],
  mail: [22, 63, 65, 29, 106, 65],
  route: [17, 77, 72, 27, 111, 68]
};

export function ConstellationArt({ chart, filled }: Props) {
  const [ax,ay,bx,by,cx,cy] = paths[chart];
  return (
    <svg viewBox="0 0 128 105" className={'constellation-art constellation-' + chart + (filled === 2 ? ' constellation-finished' : '')} aria-hidden="true">
      <g fill="#fff7e6" stroke="#d2b89e" strokeWidth="1.4"><rect x="3" y="3" width="122" height="99" rx="10"/></g>
      <g stroke="#9b86ac" strokeWidth="2.2" strokeDasharray={filled === 2 ? undefined : '3 5'} fill="none" opacity={filled === 2 ? 1 : .55}>
        <path d={'M'+ax+' '+ay+' L'+bx+' '+by+' L'+cx+' '+cy}/>
        {chart === 'crown' && <path d={'M'+ax+' '+ay+' L'+cx+' '+cy}/>}
      </g>
      <g fill="#e8dadf" stroke="#b3a0b8" strokeWidth="1"><circle cx={ax} cy={ay} r="6"/><circle cx={bx} cy={by} r="6"/><circle cx={cx} cy={cy} r="6"/></g>
      {filled >= 1 && <g className="filed-point" transform={'translate('+ax+' '+ay+')'}><path d="M0 -12 L4 -5 L12 0 L4 5 L0 12 L-4 5 L-12 0 L-4 -5Z" fill="#ffdc6e" stroke="#bc8745" strokeWidth="2"/></g>}
      {filled >= 2 && <g className="filed-point" transform={'translate('+cx+' '+cy+')'}><path d="M0 -12 L4 -5 L12 0 L4 5 L0 12 L-4 5 L-12 0 L-4 -5Z" fill="#ffdc6e" stroke="#bc8745" strokeWidth="2"/></g>}
      {chart === 'crown' && <path d="M45 78 l8 -17 12 11 12 -11 7 17Z" fill="#f5bf86" stroke="#855e78" strokeWidth="2.5" strokeLinejoin="round" opacity=".75"/>}
      {chart === 'mail' && <g transform="translate(47 59)" opacity=".65"><rect width="38" height="25" rx="4" fill="#a9cfcd" stroke="#5f8d9d" strokeWidth="2"/><path d="M0 2 L19 14 L38 2" fill="none" stroke="#5f8d9d" strokeWidth="2"/></g>}
      {chart === 'route' && <path d="M47 79 l13 -21 9 8 15 -9 -11 25 -8 -9Z" fill="#a7bcdb" stroke="#6e7398" strokeWidth="2.5" opacity=".8"/>}
    </svg>
  );
}

export function StarTokenArt({ marking }: { marking: 'CROWN' | 'CRESCENT' | 'ROCKET' }) {
  return (
    <svg viewBox="0 0 90 82" className="star-token-art" aria-hidden="true">
      <path d="M45 3 L55 27 L82 28 L62 46 L69 74 L45 60 L21 74 L28 46 L8 28 L35 27Z" fill="#ffda79" stroke="#8a617c" strokeWidth="4" strokeLinejoin="round"/>
      <circle cx="45" cy="43" r="14" fill="#fff3d1" opacity=".82"/>
      {marking === 'CROWN' && <path d="M34 51 L33 37 L40 43 L45 33 L50 43 L57 37 L56 51Z" fill="#8c5b81" stroke="#5a3f60" strokeWidth="2" strokeLinejoin="round" />}
      {marking === 'CRESCENT' && <path d="M48 33 a11 11 0 1 0 11 16 a9 9 0 0 1 -11 -16Z" fill="#865e93"/>}
      {marking === 'ROCKET' && <g transform="rotate(35 45 43)"><path d="M45 28 Q56 39 50 53 L40 53 Q34 39 45 28Z" fill="#7a8eaf" stroke="#665777" strokeWidth="2"/><circle cx="45" cy="41" r="3" fill="#fff3d1"/><path d="M42 53 l3 8 3 -8" fill="#f2a18f"/></g>}
    </svg>
  );
}
