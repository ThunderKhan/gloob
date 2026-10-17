import { describe, expect, it } from 'vitest';
import { initialProgress, progressReducer, selectAchievements, type Progress } from './state';
const act = (s: Progress, starId: string, chartId: 'crown' | 'mail' | 'route') =>
  progressReducer(s, { type: 'PLACE_STAR', starId, chartId });
describe('authoritative progress', () => {
  it('counts valid placements exactly once', () => {
    const once = act(initialProgress, 'crown-1', 'crown');
    expect(once.stars).toEqual(['crown-1']);
    expect(act(once, 'crown-1', 'crown')).toBe(once);
    expect(act(once, 'mail-1', 'crown')).toBe(once);
  });
  it('finishes stardust from six distinct matches', () => {
    let state = initialProgress;
    for (const [id, chart] of [['crown-1','crown'],['crown-2','crown'],['mail-1','mail'],['mail-2','mail'],['route-1','route'],['route-2','route']] as const) state=act(state,id,chart);
    expect(state.stars).toHaveLength(6);
    expect(selectAchievements(state)).toMatchObject({ stardust: true, total: 1 });
    state = progressReducer(state, { type:'RESET_DEPARTMENT', department:'stardust' });
    expect(selectAchievements(state).stardust).toBe(false);
  });
  it('rejects wrong moon destinations and duplicates', () => {
    const wrong = progressReducer(initialProgress, { type:'RETURN_MOON', caseId:'mimi', planetId:'cloudle' });
    expect(wrong).toBe(initialProgress);
    const solved = progressReducer(wrong, { type:'RETURN_MOON', caseId:'mimi', planetId:'ringlet' });
    expect(progressReducer(solved, { type:'RETURN_MOON', caseId:'mimi', planetId:'ringlet' })).toBe(solved);
    expect(solved.solvedMoons).toEqual(['mimi']);
  });
  it('retains earned orbit completion during rearrangement, until reset', () => {
    let state = initialProgress;
    for (const [objectId,ringId] of [['button','inner'],['pompom','middle'],['zippy','outer']] as const) state=progressReducer(state,{type:'ASSIGN_ORBIT',objectId,ringId});
    state=progressReducer(state,{type:'START_ORBITS'});
    expect(state.orbit.earned).toBe(true);
    state=progressReducer(state,{type:'RETURN_ORBIT_OBJECT',objectId:'button'});
    expect(state.orbit.mode).toBe('editing');
    expect(selectAchievements(state).orbits).toBe(true);
    state=progressReducer(state,{type:'RESET_DEPARTMENT',department:'orbits'});
    expect(state.orbit.earned).toBe(false);
  });
  it('derives 3/3 and decreases once after a completed department reset', () => {
    let s = initialProgress;
    for (const [id,chart] of [['crown-1','crown'],['crown-2','crown'],['mail-1','mail'],['mail-2','mail'],['route-1','route'],['route-2','route']] as const) s=act(s,id,chart);
    for (const [caseId,planetId] of [['mimi','ringlet'],['nib','craggle'],['puddle','cloudle']] as const) s=progressReducer(s,{type:'RETURN_MOON',caseId,planetId});
    for (const [objectId,ringId] of [['button','inner'],['pompom','middle'],['zippy','outer']] as const) s=progressReducer(s,{type:'ASSIGN_ORBIT',objectId,ringId});
    s=progressReducer(s,{type:'START_ORBITS'});
    expect(selectAchievements(s).total).toBe(3);
    expect(s.allCompleteAt).toBe('orbits');
    s=progressReducer(s,{type:'RESET_DEPARTMENT', department:'moons'});
    expect(selectAchievements(s).total).toBe(2);
    expect(s.allCompleteAt).toBeNull();
    s=progressReducer(s,{type:'RESET_DEPARTMENT',department:'moons'});
    expect(selectAchievements(s).total).toBe(2);
  });
});
