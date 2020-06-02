class Statistics {
  constructor() {
    this.gameResults = [
      {
        win: true,
        bid: 2
      },
      {
        win: false,
        bid: 30
      },
      {
        win: true,
        bid: 20
      }
    ]
  }
    addGameToStatistics(win, bid){
      let gameResult = {
        win,
        bid
      }
      this.gameResults.push(gameResult)
    }

    showGameStatistics() {
      let games = this.gameResults.length;
      let wins = this.gameResults.filter(result => result.win)
      let losses = this.gameResults.filter(result => !result.win)
      console.log(games, wins, losses)
      return [games, wins, losses]
    }
  }

  const stats = new Statistics()
