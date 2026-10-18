import { useId } from 'react';

export type DepartmentKind = 'stardust' | 'moons' | 'orbits';
type DepartmentProps = { kind: DepartmentKind };

export function DepartmentIllustration({ kind }: DepartmentProps) {
  const uid = useId().replace(/:/g, '');
  if (kind === 'stardust') return (
    <svg viewBox="0 0 250 165" aria-hidden="true" className="door-art">
      <path d="M33 139 L33 27 Q33 18 43 18 H174 Q182 18 182 27 V139" fill="#77578d" stroke="#3d2b50" strokeWidth="6"/>
      <rect x="44" y="29" width="126" height="98" rx="5" fill="#f6d0e0" stroke="#412c57" strokeWidth="4"/>
      <rect x="54" y="42" width="105" height="15" rx="5" fill="#a889b3" stroke="#442e55" strokeWidth="3"/>
      <rect x="54" y="64" width="105" height="17" rx="4" fill="#ffe8b7" stroke="#442e55" strokeWidth="3"/>
      <rect x="54" y="89" width="105" height="25" rx="4" fill="#ffe8b7" stroke="#442e55" strokeWidth="3"/>
      <path d="M102 66 l4 5 6-5 0 11 -10 0z M105 90 l8 7 -8 7 -8 -7z" fill="#ca8a58"/>
      <rect x="87" y="128" width="42" height="8" rx="4" fill="#ffd46f" stroke="#442e55" strokeWidth="3"/>
      <g transform="rotate(-15 183 49)"><path d="M188 21 L195 38 L212 44 L195 50 L189 68 L180 51 L163 44 L181 39Z" fill="#ffda68" stroke="#68466a" strokeWidth="4"/></g>
      <path d="M20 145 Q123 139 225 145" stroke="#3d2b50" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M200 98 l8 -22 8 22 -8 22z" fill="#f6e9ae" stroke="#825c8b" strokeWidth="3"/>
    </svg>
  );
  if (kind === 'moons') return (
    <svg viewBox="0 0 250 165" aria-hidden="true" className="door-art">
      <path d="M24 148 L24 40 Q24 24 40 24 H199 Q215 24 215 40 V148" fill="#6f98b4" stroke="#33435e" strokeWidth="6"/>
      <rect x="36" y="37" width="166" height="99" rx="5" fill="#e1f4e9" stroke="#33435e" strokeWidth="4"/>
      <path d="M61 51 l52 9 -6 62 -53 -12z" fill="#fff1d7" stroke="#33435e" strokeWidth="3" transform="rotate(-8 80 80)"/>
      <path d="M133 47 l49 2 -3 63 -51 1z" fill="#f5d1d5" stroke="#33435e" strokeWidth="3" transform="rotate(8 152 80)"/>
      <circle cx="88" cy="77" r="17" fill="#f4d479" stroke="#795880" strokeWidth="3"/>
      <circle cx="94" cy="70" r="16" fill="#fff1d7"/>
      <circle cx="153" cy="75" r="15" fill="#d3a6d6" stroke="#795880" strokeWidth="3"/>
      <path d="M147 96 Q156 101 166 93" fill="none" stroke="#76546a" strokeWidth="3"/>
      <g transform="translate(183 97) rotate(28)"><circle r="14" fill="#ffd36d" stroke="#4f355b" strokeWidth="4"/><path d="M10 10 L32 34" stroke="#4f355b" strokeWidth="8"/></g>
      <path d="M18 150 H226" stroke="#33435e" strokeWidth="7" strokeLinecap="round"/>
      <rect x="94" y="132" width="44" height="17" rx="4" fill="#efb7bd" stroke="#33435e" strokeWidth="3"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 250 165" aria-hidden="true" className="door-art">
      <defs><radialGradient id={'orbitalCore'+uid}><stop stopColor="#fff5c2"/><stop offset="1" stopColor="#f0aa67"/></radialGradient></defs>
      <path d="M24 149 L31 45 Q32 29 48 29 H201 Q214 29 216 44 L227 149Z" fill="#8265a5" stroke="#40304e" strokeWidth="6"/>
      <rect x="42" y="40" width="168" height="94" rx="9" fill="#342845" stroke="#392745" strokeWidth="3"/>
      <g fill="none" stroke="#b9a9e6" strokeWidth="2.7"><ellipse cx="124" cy="87" rx="81" ry="29" transform="rotate(-17 124 87)"/><ellipse cx="124" cy="87" rx="57" ry="23" transform="rotate(22 124 87)"/><ellipse cx="124" cy="87" rx="39" ry="14"/></g>
      <circle cx="124" cy="86" r="17" fill={'url(#orbitalCore'+uid+')'} stroke="#f5c96d" strokeWidth="4"/>
      <circle cx="60" cy="73" r="10" fill="#f0aebb" stroke="#f5d8ea" strokeWidth="3"/>
      <circle cx="172" cy="115" r="8" fill="#b8dfdf"/>
      <path d="M179 57 q14 -17 22 -11 q-13 5 -14 19Z" fill="#ffda80"/>
      <rect x="62" y="134" width="126" height="18" rx="5" fill="#e6c4ec" stroke="#40304e" strokeWidth="4"/>
      <circle cx="78" cy="143" r="4" fill="#f9a38d"/><circle cx="95" cy="143" r="4" fill="#ffd970"/><circle cx="112" cy="143" r="4" fill="#9bcfc1"/>
    </svg>
  );
}

type StorySceneProps = { scene: 1 | 2 | 3 };

export function StoryScene({ scene }: StorySceneProps) {
  return (
    <svg viewBox="0 0 320 180" className="story-illustration" aria-hidden="true">
      <defs>
        <linearGradient id={'storysky'+scene} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8063aa"/><stop offset="1" stopColor="#d6b5d7"/></linearGradient>
      </defs>
      <rect width="320" height="180" rx="12" fill={'url(#storysky'+scene+')'}/>
      <g fill="#fff1cc" opacity=".9">
        <circle cx="40" cy="42" r="3"/><circle cx="278" cy="31" r="4"/><circle cx="246" cy="122" r="2"/>
        <path d="M100 17 v16 m-8 -8 h16 M292 91 v16 m-8 -8 h16" stroke="#ffe7a7" strokeWidth="3" fill="none"/>
      </g>
      {scene === 1 && <g>
        <ellipse cx="144" cy="97" rx="118" ry="61" fill="#f8c5d5" opacity=".27"/>
        <ellipse cx="144" cy="102" rx="87" ry="38" fill="#bedadf" opacity=".35" transform="rotate(-18 144 102)"/>
        <path d="M170 54 C212 43 240 82 238 111 C233 151 206 154 177 151 C136 152 124 117 129 92 C132 72 147 58 170 54Z" fill="#442d5b" stroke="#2c1c3b" strokeWidth="5"/>
        <ellipse cx="166" cy="95" rx="13" ry="18" fill="#fff1d8"/><ellipse cx="204" cy="95" rx="13" ry="18" fill="#fff1d8"/>
        <circle cx="170" cy="98" r="5" fill="#302139"/><circle cx="208" cy="98" r="5" fill="#302139"/>
        <path d="M178 123 q10 9 19 -2" fill="none" stroke="#23152c" strokeWidth="4" strokeLinecap="round"/>
        <path d="M57 113 l5 -15 5 15 15 5 -15 5 -5 15 -5 -15 -15 -5Z" fill="#ffda71"/>
        <path d="M266 58 l4 -11 4 11 11 4 -11 4 -4 11 -4 -11 -11 -4Z" fill="#ffdf8b"/>
      </g>}
      {scene === 2 && <g>
        <ellipse cx="151" cy="93" rx="93" ry="60" fill="#443059" stroke="#2d213c" strokeWidth="5"/>
        <ellipse cx="123" cy="78" rx="16" ry="19" fill="#fff0db"/><ellipse cx="181" cy="78" rx="16" ry="19" fill="#fff0db"/>
        <circle cx="125" cy="82" r="6" fill="#291c37"/><circle cx="184" cy="82" r="6" fill="#291c37"/>
        <path d="M138 109 Q150 88 164 111 Q172 139 151 143 Q131 138 138 109" fill="#291d39" stroke="#21152c" strokeWidth="3"/>
        {[[45,67],[76,40],[280,83],[261,134],[65,142],[231,36]].map(([x,y],i)=><path key={i} d="M0 -11 L4 -4 L12 -3 L6 4 L8 12 L0 8 L-8 12 L-6 4 L-12 -3 L-4 -4Z" transform={'translate('+x+' '+y+') rotate('+i*14+')'} fill="#ffdf7d" stroke="#9e677c" strokeWidth="2"/>)}
        <path d="M31 104 Q72 91 104 94 M238 92 Q269 84 295 109" stroke="#f7d79f" strokeWidth="3" strokeDasharray="6 8" fill="none"/>
      </g>}
      {scene === 3 && <g>
        <path d="M48 145 V63 L155 18 L259 63 V145Z" fill="#fff0d4" stroke="#463052" strokeWidth="5" strokeLinejoin="round"/>
        <path d="M47 64 L155 18 L260 64" stroke="#f0a3ba" strokeWidth="12" fill="none" strokeLinejoin="round"/>
        <rect x="123" y="85" width="67" height="60" rx="5" fill="#baa0d6" stroke="#463052" strokeWidth="5"/>
        <rect x="66" y="85" width="39" height="37" rx="5" fill="#c6e2db" stroke="#463052" strokeWidth="4"/>
        <rect x="209" y="85" width="33" height="37" rx="5" fill="#c6e2db" stroke="#463052" strokeWidth="4"/>
        <rect x="96" y="46" width="119" height="23" rx="5" fill="#ffe080" stroke="#463052" strokeWidth="4"/>
        <path d="M114 56 H197" stroke="#986c77" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="157" cy="116" r="18" fill="#49305a"/>
        <ellipse cx="150" cy="112" rx="5" ry="7" fill="#fff1df"/><ellipse cx="165" cy="112" rx="5" ry="7" fill="#fff1df"/>
        <path d="M150 126 q7 5 13 0" stroke="#fff1df" strokeWidth="2" fill="none"/>
        <path d="M25 147 H296" stroke="#463052" strokeWidth="6" strokeLinecap="round"/>
        <path d="M271 74 l4 -10 4 10 10 4 -10 4 -4 10 -4 -10 -10 -4Z" fill="#ffdc74"/>
      </g>}
    </svg>
  );
}
