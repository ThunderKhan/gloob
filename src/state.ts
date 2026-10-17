export type DepartmentId = 'stardust' | 'moons' | 'orbits';
export type OrbitMode = 'editing' | 'running' | 'paused';
export type Speed = 'slow' | 'normal' | 'fast';
export type Direction = 'clockwise' | 'counterclockwise';
export const stars = [
  { id: 'crown-1', name: 'Pip', chart: 'crown', marking: 'CROWN', glyph: '♛' },
  { id: 'crown-2', name: 'Dot', chart: 'crown', marking: 'CROWN', glyph: '♛' },
  { id: 'mail-1', name: 'Mochi', chart: 'mail', marking: 'CRESCENT', glyph: '☾' },
  { id: 'mail-2', name: 'Postie', chart: 'mail', marking: 'CRESCENT', glyph: '☾' },
  { id: 'route-1', name: 'Zoom', chart: 'route', marking: 'ROCKET', glyph: '➤' },
  { id: 'route-2', name: 'Beep', chart: 'route', marking: 'ROCKET', glyph: '➤' }
] as const;
export type ChartId = 'crown' | 'mail' | 'route';
export const charts: { id: ChartId; name: string; marking: string }[] = [
  { id: 'crown', name: 'Cosmic Crown', marking: 'CROWN ♛' },
  { id: 'mail', name: 'Moon Mail', marking: 'CRESCENT ☾' },
  { id: 'route', name: 'Rocket Route', marking: 'ROCKET ➤' }
];
export const moonCases = [
  { id: 'mimi', planet: 'ringlet' },
  { id: 'nib', planet: 'craggle' },
  { id: 'puddle', planet: 'cloudle' }
] as const;
export const orbitObjectIds = ['button', 'pompom', 'zippy'] as const;
export const orbitRingIds = ['inner', 'middle', 'outer'] as const;
export type OrbitObjectId = typeof orbitObjectIds[number];
export type OrbitRingId = typeof orbitRingIds[number];
export type Progress = {
  stars: string[];
  solvedMoons: string[];
  orbit: {
    assigned: Record<OrbitObjectId, OrbitRingId | null>;
    mode: OrbitMode;
    speed: Speed;
    direction: Direction;
    earned: boolean;
  };
  allCompleteAt: DepartmentId | null;
};
export const initialProgress: Progress = {
  stars: [],
  solvedMoons: [],
  orbit: {
    assigned: { button: null, pompom: null, zippy: null },
    mode: 'editing',
    speed: 'normal',
    direction: 'clockwise',
    earned: false
  },
  allCompleteAt: null
};
export type ProgressAction =
  | { type: 'PLACE_STAR'; starId: string; chartId: ChartId }
  | { type: 'RETURN_MOON'; caseId: string; planetId: string }
  | { type: 'ASSIGN_ORBIT'; objectId: string; ringId: string }
  | { type: 'RETURN_ORBIT_OBJECT'; objectId: string }
  | { type: 'START_ORBITS' } | { type: 'PAUSE_ORBITS' } | { type: 'RESUME_ORBITS' }
  | { type: 'SET_SPEED'; speed: Speed } | { type: 'SET_DIRECTION'; direction: Direction }
  | { type: 'RESET_DEPARTMENT'; department: DepartmentId };
export function selectAchievements(p: Progress) {
  const stardust = p.stars.length === 6;
  const moons = p.solvedMoons.length === 3;
  const orbits = p.orbit.earned;
  return { stardust, moons, orbits, total: Number(stardust) + Number(moons) + Number(orbits) };
}
function finish(before: Progress, next: Progress, source: DepartmentId): Progress {
  if (before === next) return before;
  const prev = selectAchievements(before).total;
  const current = selectAchievements(next).total;
  return { ...next, allCompleteAt: current === 3 && prev < 3 ? source : current < 3 ? null : before.allCompleteAt };
}
export function progressReducer(state: Progress, action: ProgressAction): Progress {
  switch (action.type) {
    case 'PLACE_STAR': {
      const star = stars.find(s => s.id === action.starId);
      if (!star || star.chart !== action.chartId || state.stars.includes(star.id) || state.stars.length >= 6) return state;
      const chartCount = state.stars.filter(id => stars.find(s => s.id === id)?.chart === action.chartId).length;
      if (chartCount >= 2) return state;
      return finish(state, { ...state, stars: [...state.stars, star.id] }, 'stardust');
    }
    case 'RETURN_MOON': {
      const target = moonCases.find(c => c.id === action.caseId);
      if (!target || target.planet !== action.planetId || state.solvedMoons.includes(target.id)) return state;
      return finish(state, { ...state, solvedMoons: [...state.solvedMoons, target.id] }, 'moons');
    }
    case 'ASSIGN_ORBIT': {
      if (!orbitObjectIds.some(id => id === action.objectId) || !orbitRingIds.some(id => id === action.ringId)) return state;
      const occupied = Object.entries(state.orbit.assigned).some(([id, ring]) => id !== action.objectId && ring === action.ringId);
      if (occupied) return state;
      const id = action.objectId as OrbitObjectId, ring = action.ringId as OrbitRingId;
      if (state.orbit.assigned[id] === ring) return state;
      return finish(state, { ...state, orbit: { ...state.orbit, assigned: { ...state.orbit.assigned, [id]: ring }, mode: 'editing' } }, 'orbits');
    }
    case 'RETURN_ORBIT_OBJECT': {
      if (!orbitObjectIds.some(id => id === action.objectId)) return state;
      const id = action.objectId as OrbitObjectId;
      if (state.orbit.assigned[id] === null) return state;
      return finish(state, { ...state, orbit: { ...state.orbit, assigned: { ...state.orbit.assigned, [id]: null }, mode: 'editing' } }, 'orbits');
    }
    case 'START_ORBITS':
      if (state.orbit.mode !== 'editing' || Object.values(state.orbit.assigned).some(x => x === null)) return state;
      return finish(state, { ...state, orbit: { ...state.orbit, mode: 'running', earned: true } }, 'orbits');
    case 'PAUSE_ORBITS':
      return state.orbit.mode === 'running' ? { ...state, orbit: { ...state.orbit, mode: 'paused' } } : state;
    case 'RESUME_ORBITS':
      return state.orbit.mode === 'paused' && Object.values(state.orbit.assigned).every(x => x !== null) ? { ...state, orbit: { ...state.orbit, mode: 'running' } } : state;
    case 'SET_SPEED':
      return ['slow', 'normal', 'fast'].includes(action.speed) && state.orbit.speed !== action.speed ? { ...state, orbit: { ...state.orbit, speed: action.speed } } : state;
    case 'SET_DIRECTION':
      return ['clockwise', 'counterclockwise'].includes(action.direction) && state.orbit.direction !== action.direction ? { ...state, orbit: { ...state.orbit, direction: action.direction } } : state;
    case 'RESET_DEPARTMENT': {
      switch (action.department) {
        case 'stardust': return finish(state, { ...state, stars: [] }, 'stardust');
        case 'moons': return finish(state, { ...state, solvedMoons: [] }, 'moons');
        case 'orbits': return finish(state, { ...state, orbit: {
          assigned: { button: null, pompom: null, zippy: null },
          mode: 'editing', speed: 'normal', direction: 'clockwise', earned: false
        } }, 'orbits');
      }
    }
    default: return state;
  }
}
