/**
 * Tile Class
 * -> Extends Glyph
 */
export default class Cell {

  constructor(x, y, size) {
    // console.log('cell at', x, y);
    this.tileSize = size;
    this.x = x;
    this.y = y;
  }

  draw(context) {
    context.fillStyle = '#ffffff';
    context.fillText('1', this.x * this.tileSize, this.y * this.tileSize);
    context.fill();
  }

}
