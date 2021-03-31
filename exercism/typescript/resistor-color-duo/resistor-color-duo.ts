export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present');
    }
    this.colors = colors;
  }
  value = (): number => {
    let result: string = '';
    this.colors.map(color => {
      if (color === 'black') {
        result += '0';
      }
      else if (color === 'brown') {
        result += '1';
      }
      else if (color === 'red') {
        result += '2';
      }
      else if (color === 'orange') {
        result += '3';
      }
      else if (color === 'yellow') {
        result += '4';
      }
      else if (color === 'green') {
        result += '5';
      }
      else if (color === 'blue') {
        result += '6';
      }
      else if (color === 'violet') {
        result += '7';
      }
      else if (color === 'grey') {
        result += '8';
      }
      else if (color === 'white') {
        result += '9';
      }
    })
    return Number.parseInt(result.substring(0, 2));
  }
}
