class Board {
  constructor(rows) {
    this.rows = rows;
  }

  width() {
    return this.rows[0].length
  }

  height() {
    return this.rows.length
  }

  step() {
    var nextRows = [];
    for (var y = 0; y < this.height(); y++) {
      nextRows[y] = []
      for (var x = 0; x < this.width(); x++) {
        console.log(x, y);
 
        if (this.isAlive(x, y) == 1) {
          // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
          if (this.countLive(x, y) < 2) {
            nextRows[y][x] = 0;
          }

          // Any live cell with two or three live neighbours lives on to the next generation.
           if (this.countLive(x, y) == 2 || this.countLive(x, y) == 3 ) {
            nextRows[y][x] = 1;
           }
          // Any live cell with more than three live neighbours dies, as if by overpopulation.
          if (this.countLive(x, y) > 3) {
            nextRows[y][x] = 0;
          }
        } else {
          // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction. 
          if (this.countLive(x, y) == 3) {
            nextRows[y][x] = 1;
          } else {
            nextRows[y][x] = 0;
          }
        }
      }
    }
    this.rows = nextRows;
  }
  
  isAlive(x, y) {
    if (x < 0 || x >= this.width()) 
      return 0
    if (y < 0 || y >= this.height())
      return 0 

    return this.rows[y][x];
  }
  
  countLive(x, y) {
    var rowAddition = this.isAlive(x, y-1) + 
        this.isAlive(x, y+1) + 
        this.isAlive(x-1, y-1) + 
        this.isAlive(x-1, y) + 
        this.isAlive(x-1, y+1) + 
        this.isAlive(x+1, y-1) + 
        this.isAlive(x+1, y) + 
        this.isAlive(x+1, y+1)
    
  console.log(rowAddition);
    return rowAddition;
  }
}



module.exports = Board;


