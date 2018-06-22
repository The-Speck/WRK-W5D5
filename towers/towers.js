class Game {
  constructor (completionCallback) {
    this.towers = [[3, 2, 1], [], []];
    
    this.run(completionCallback);
  }
  
  
  promptMove() {
    console.log(this.towers);
    reader.question("Mov from wat? ", (startTowerIdx) => {
      startTowerIdx = parseInt(startTowerIdx);
      
      reader.question("Mov to wat? ", (endTowerIdx) => {
        endTowerIdx = parseInt(endTowerIdx);
        
        this.move(startTowerIdx, endTowerIdx);
      });
    }); 
  }
  
  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.towers[startTowerIdx].length > 0 &&
        ( this.towers[endTowerIdx].length === 0 ||
          this.towers[startTowerIdx].slice(-1)[0] < 
          this.towers[endTowerIdx].slice(-1)[0])) {
          return true ;
        } else {
          return false;
        }
  }
  
  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      console.log(this.towers);
      return true;
    } else {
      console.log("TRY TRY AGAIN");
      this.promptMove();
      return false;
    }
  }
  
  isWon() {
    const tempArray = this.towers.slice(1, this.towers.length);
     
    for (let i = 0; i < tempArray.length; i++){
      if (tempArray[i].length === 3) { 
        return true;
      }
    }
    return false;
  }
  
  run(completionCallback) {
    this.promptMove();
    
    if (!this.isWon()) {
      this.run(completionCallback);
    } else {
      completionCallback();
      reader.close();
    }
  }
}

const readline = require('readline');

let reader = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

const game = new Game(() => { console.log("Congrats you won!");}); 
