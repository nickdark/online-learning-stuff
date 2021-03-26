//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.rows = string.split('\n').map((x) => { return x.split(' ').map((x) => { return parseInt(x) }) });
    this.columns = [];
  }

  // get rows() {
  //   return this.rows;
  // }


  get columns() {
    let col = new Array(this.rows[0].length).fill().map(() => []);
    this.rows.map((row) => {
      row.map((number, columnIndex) => {
        col[columnIndex].push(number);
      })
    })
    return col;
  }

  set columns(_array) { }
}

// let newMatrix = new Matrix('1 2\n3 4');
// console.log(newMatrix.rows);
// console.log(newMatrix.columns);
