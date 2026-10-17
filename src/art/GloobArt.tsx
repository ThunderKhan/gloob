import { useId } from 'react';

export type GloobExpression = 'happy' | 'proud' | 'confused' | 'panicked' | 'embarrassed' | 'excited' | 'sleepy';

const expressions: Record<GloobExpression, { eyes: number; mouth: string; brow: string }> = {
  happy: { eyes: 1, mouth: 'M 137 173 Q 160 191 183 173', brow: 'M 126 103 Q 139 96 148 103 M 172 103 Q 185 96 194 103' },
  proud: { eyes: 1, mouth: 'M 143 174 Q 160 179 177 171', brow: 'M 126 99 Q 138 91 150 98 M 170 98 Q 183 91 195 99' },
  confused: { eyes: 1, mouth: 'M 151 181 Q 162 171 171 179', brow: 'M 126 100 L 148 107 M 169 103 Q 184 92 194 100' },
  panicked: { eyes: 1.12, mouth: 'M 148 166 Q 160 155 172 166 Q 185 198 160 201 Q 139 194 148 166', brow: 'M 122 96 L 147 90 M 173 90 L 196 96' },
  embarrassed: { eyes: 0.92, mouth: 'M 148 178 Q 160 170 173 177', brow: 'M 125 100 Q 139 98 149 103 M 172 103 Q 182 98 195 100' },
  excited: { eyes: 1.11, mouth: 'M 137 166 Q 161 210 184 166 Q 168 179 137 166', brow: 'M 120 94 Q 137 85 148 96 M 173 96 Q 188 86 199 95' },
  sleepy: { eyes: 0.38, mouth: 'M 147 177 Q 160 183 173 176', brow: 'M 126 108 Q 139 110 148 107 M 172 107 Q 185 110 195 108' }
};

type Props = { expression?: GloobExpression; className?: string; pupilX?: number; pupilY?: number };

export function GloobArt({ expression = 'happy', className, pupilX = 0, pupilY = 0 }: Props) {
  const uid = useId().replace(/:/g, '');
  const bodyId = 'gloobBody' + uid;
  const ringId = 'gloobRing' + uid;
  const eyeId = 'gloobEye' + uid;
  const p = expressions[expression];
  return (
    <svg className={className} viewBox="0 0 320 320" role="img" aria-label={'Gloob the baby black hole looks ' + expression}>
      <defs>
        <radialGradient id={bodyId} cx="37%" cy="24%" r="86%">
          <stop offset="0%" stopColor="#8060a0" />
          <stop offset="52%" stopColor="#503765" />
          <stop offset="100%" stopColor="#24172f" />
        </radialGradient>
        <linearGradient id={ringId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4affb" />
          <stop offset="43%" stopColor="#faada7" />
          <stop offset="78%" stopColor="#f4d486" />
          <stop offset="100%" stopColor="#a996eb" />
        </linearGradient>
        <radialGradient id={eyeId}>
          <stop offset="0%" stopColor="#fffdf0" />
          <stop offset="100%" stopColor="#f3dfc8" />
        </radialGradient>
      </defs>
      <g className="gloob-ring-back" fill="none" stroke={'url(#' + ringId + ')'} strokeWidth="17" strokeLinecap="round">
        <ellipse cx="160" cy="175" rx="139" ry="56" transform="rotate(-17 160 175)" strokeOpacity=".66" />
      </g>
      <path d="M65 189 Q36 176 32 196 Q29 215 71 229" fill="#4b335e" stroke="#281b38" strokeWidth="5" strokeLinecap="round" />
      <path d="M249 178 Q285 157 294 179 Q299 196 263 216" fill="#4b335e" stroke="#281b38" strokeWidth="5" strokeLinecap="round" />
      <path d="M156 38 C204 27 254 66 271 112 C288 151 287 203 256 244 C227 284 175 286 135 278 C95 283 54 244 46 199 C34 158 51 95 93 64 C111 46 135 43 156 38Z" fill={'url(#' + bodyId + ')'} stroke="#24182f" strokeWidth="6" />
      <g fill="#b6a2d3" opacity=".55">
        <circle cx="92" cy="103" r="3.5" /><circle cx="222" cy="79" r="2.8" />
        <circle cx="245" cy="207" r="3.5" /><circle cx="112" cy="239" r="2.2" />
        <path d="M75 157 l4 -9 4 9 -4 9z" /><path d="M228 233 l3 -7 3 7 -3 7z" />
      </g>
      <path d="M74 211 Q164 244 254 207" stroke="#35223f" fill="none" strokeWidth="7" strokeLinecap="round" opacity=".65" />
      <g transform={'translate(' + pupilX + ' ' + pupilY + ')'}>
        <ellipse cx="126" cy="135" rx="26" ry={31 * p.eyes} fill={'url(#' + eyeId + ')'} />
        <ellipse cx="196" cy="135" rx="26" ry={31 * p.eyes} fill={'url(#' + eyeId + ')'} />
        <ellipse cx="134" cy="141" rx="9" ry={14 * p.eyes} fill="#281934" />
        <ellipse cx="202" cy="141" rx="9" ry={14 * p.eyes} fill="#281934" />
        <circle cx="137" cy="136" r="3.7" fill="#fff" /><circle cx="205" cy="136" r="3.7" fill="#fff" />
      </g>
      <path d={p.brow} stroke="#302039" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d={p.mouth} stroke="#26182d" strokeWidth="5" fill={expression === 'panicked' ? '#381e46' : 'none'} strokeLinecap="round" />
      <g opacity={expression === 'embarrassed' || expression === 'happy' ? 0.8 : 0.3} fill="#f4a9b1">
        <ellipse cx="88" cy="177" rx="17" ry="9" /><ellipse cx="233" cy="177" rx="17" ry="9" />
      </g>
      <path d="M68 213 Q160 257 255 211" stroke="#f3cb71" fill="none" strokeWidth="16" strokeLinecap="round" />
      <path d="M70 215 Q159 259 254 215" stroke="#654d66" fill="none" strokeWidth="6" strokeDasharray="16 12" />
      <rect x="144" y="242" width="35" height="26" rx="6" transform="rotate(-5 161 255)" fill="#ffda69" stroke="#40263e" strokeWidth="5" />
      <circle cx="160" cy="254" r="4" fill="#805477" />
      <g className="gloob-ring-front" fill="none" stroke={'url(#' + ringId + ')'} strokeWidth="16" strokeLinecap="round">
        <path d="M 28 198 C 69 249 233 244 297 155" />
      </g>
      <path d="M237 35 L246 56 L270 60 L251 76 L255 100 L234 88 L213 100 L218 76 L199 60 L224 56Z" fill="#ffdc64" stroke="#8b5b64" strokeWidth="4" strokeLinejoin="round" />
      <path d="M229 60 L235 49 L241 61" stroke="#fff4c2" fill="none" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
