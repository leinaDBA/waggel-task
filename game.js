/**
 * this will track the score of the game
 *
 * test file track the game
 *
 * game starts at 0 - 0
 *
 * player A scores: 15 - 0
 * player B scores: 15 - 15

 * player A scores: 30 - 15
 * player B scores: 30 - 30

 * player A scores: 40 - 30
 * player A scores: player A wins
 *
 * player B scores: 40 - 40 = deuce (don't output 40-40)
 * from here a player has to score twice in a row to win
 * every time the opposing player scores the game is reset to two points
 *
 * player A scores: advantage player A
 * */


const game = {
  playerAScore: 0, // 0, 15, 30, 40, deuce, advantage, win
  playerBScore: 0, // 0, 15, 30, 40, deuce, advantage, win

  setFirstPoint(player){
    this[player] = 15;
    return this.getScore();
  },
  setSecondPoint(player){
    this[player] = 30;
    return this.getScore();
  },
  setThirdPoint(player, opponent){
    if(this[opponent] !== 40){
      this[player] = 40;
      return this.getScore();
    }
    this[player] = 'deuce';
    this[opponent] = 'deuce';
    return this.getScore();
  },
  setFourthPoint(player){
    this[player] = 'win';
    return this.getScore();
  },
  setDeucePoint(player, opponent){
    if(this[opponent] === 'advantage'){
      this[player] = 'deuce';
      this[opponent] = 'deuce';
      return this.getScore();
    }
    this[player] = 'advantage';
    return this.getScore();
  },
  setAdvantagePoint(player){
    this[player] = 'win';
    return this.getScore();
  },

  playerAIncrementScore () {
    switch (this.playerAScore) {
      case 0:
        return this.setFirstPoint('playerAScore')
        break;
      case 15:
        return this.setSecondPoint('playerAScore')
        break;
      case 30:
        return this.setThirdPoint('playerAScore', 'playerBScore')
        break;
      case 40:
        return this.setFourthPoint('playerAScore', 'playerBScore')
        break;
      case 'deuce':
        return this.setDeucePoint('playerAScore', 'playerBScore')
        break;
      case 'advantage':
        return this.setAdvantagePoint('playerAScore')
        break;
    }
  },
  playerBIncrementScore () {
    switch (this.playerBScore) {
      case 0:
        return this.setFirstPoint('playerBScore')
        break;
      case 15:
        return this.setSecondPoint('playerBScore')
        break;
      case 30:
        return this.setThirdPoint('playerBScore', 'playerAScore')
        break;
      case 40:
        return this.setFourthPoint('playerBScore', 'playerAScore')
        break;
      case 'deuce':
        return this.setDeucePoint('playerBScore', 'playerAScore')
        break;
      case 'advantage':
        return this.setAdvantagePoint('playerBScore')
        break;
    }
  },

  getScore () {
    if(this.playerAScore === 'deuce' && this.playerBScore === 'deuce'){
      return 'deuce'
    }
    if(this.playerAScore === 'advantage'){
      return 'player A advantage'
    }
    if(this.playerBScore === 'advantage'){
      return 'player B advantage'
    }
    if(this.playerAScore === 'win'){
      return 'player A wins'
    }
    if(this.playerBScore === 'win'){
      return 'player B wins'
    }
    return `${this.playerAScore}-${this.playerBScore}`
  },
}
export default game
