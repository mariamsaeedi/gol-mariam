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
    // TODO
  }
}

module.exports = Board;
