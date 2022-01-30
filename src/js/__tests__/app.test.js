import Team from '../app';

const bowman = {
  health: 100,
  type: 'Bowman',
  level: 1,
  attack: 10,
  defence: 20,
};

const daemon = {
  health: 100,
  type: 'Daemon',
  level: 1,
  attack: 10,
  defence: 20,
};

const swordsman = {
  health: 100,
  type: 'Swordsman',
  level: 1,
  attack: 10,
  defence: 20,
};

let team;
beforeEach(() => {
  team = new Team();
});

test('should add object', () => {
  team.add(daemon);

  const result = new Set([daemon]);

  expect(team.members).toEqual(result);
});

test('should return Error', () => {
  team.add(bowman);
  expect(() => team.add(bowman)).toThrow();
});

test('should add objects', () => {
  team.addAll(daemon, bowman, swordsman);

  const result = new Set([daemon, bowman, swordsman]);

  expect(team.members).toEqual(result);

  team.addAll(daemon, swordsman, daemon, bowman, swordsman);
  expect(team.members).toEqual(result);
});

test('should return array', () => {
  team.addAll(daemon, swordsman, daemon, bowman, swordsman);

  expect(team.toArray()).toEqual([daemon, swordsman, bowman]);
});
