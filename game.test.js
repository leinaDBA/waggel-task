import game from "./game";

describe("game of tennis", () => {
  beforeEach(() => {
    game.playerAScore = 0;
    game.playerBScore = 0;
  });

  it('starts a game at 0-0', () => {
    expect(game.getScore()).toEqual('0-0')
  });

  it('shows 15 for player scoring a first point', () => {
    expect(game.playerAIncrementScore()).toEqual('15-0')
  });

  it('shows 30 for player scoring a second point', () => {
    game.playerAIncrementScore();
    expect(game.playerAIncrementScore()).toEqual('30-0');
  });

  it('shows 40 for player scoring a third point', () => {
    game.playerAIncrementScore();
    game.playerAIncrementScore();
    expect(game.playerAIncrementScore()).toEqual('40-0');
  });

  it('shows win for player scoring a fourth point', () => {
    game.playerAIncrementScore();
    game.playerAIncrementScore();
    game.playerAIncrementScore();
    expect(game.playerAIncrementScore()).toEqual('player A wins');});

  describe('deuce', () => {
    it('shows deuce when both players score three points', () => {
      game.playerAIncrementScore();
      game.playerAIncrementScore();
      game.playerAIncrementScore();

      game.playerBIncrementScore();
      game.playerBIncrementScore();
      expect(game.playerBIncrementScore()).toEqual('deuce');
    });

    it('shows advantage when a player gets a new point after deuce', () => {
      game.playerAIncrementScore();
      game.playerAIncrementScore();
      game.playerAIncrementScore();

      game.playerBIncrementScore();
      game.playerBIncrementScore();
      game.playerBIncrementScore();
      expect(game.playerBIncrementScore()).toEqual('player B advantage');
    });

    it('shows deuce when an opposing player gets a point after advantage', () => {
      game.playerAIncrementScore();
      game.playerAIncrementScore();
      game.playerAIncrementScore();

      game.playerBIncrementScore();
      game.playerBIncrementScore();
      game.playerBIncrementScore();
      game.playerBIncrementScore();
      expect(game.playerAIncrementScore()).toEqual('deuce');
    });

    it('shows win when a player gets two points after deuce', () => {
      game.playerAIncrementScore();
      game.playerAIncrementScore();
      game.playerAIncrementScore();

      game.playerBIncrementScore();
      game.playerBIncrementScore();
      game.playerBIncrementScore();
      game.playerBIncrementScore();
      expect(game.playerBIncrementScore()).toEqual('player B wins');
    });

  })
});
