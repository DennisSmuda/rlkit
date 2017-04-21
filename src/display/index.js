import { DISPLAY } from '../constants/display';

import Cell from './cell';
console.log(DISPLAY);

/**
 * Display Class
 */
export default class Display {
  /**
   * Display Constructor
   * @type {[Display]}
   */
  constructor(width = DISPLAY.W, height = DISPLAY.H, tileSize = DISPLAY.TILE_S, bg = DISPLAY.BG, fg = DISPLAY.FG) {
    console.log('%c RLK Display!', `background: ${bg}; color: ${fg}`);
    this.foreground = fg;
    this.background = bg;
    this.cells = [];

    this.setupCanvas(width, height, tileSize);
    this.setupTiles(tileSize);

    this.fillBackground();
    this.draw();
    // this.drawText();
  }

  setupTiles(tileSize) {
    this.tileSize = tileSize;
    this.numRows = this.canvasWidth / tileSize;
    this.numCols = this.canvasHeight / tileSize;

    for (let j = 0; j < this.numRows; j++) {
      this.cells[j] = [];
      for (let i = 0; i < this.numCols; i++) {
        this.cells[j][i] = new Cell(i, j, this.tileSize);
      }
    }
  }

  draw() {
    for (let j = 0; j < this.numRows; j++) {
      for (let i = 0; i < this.numCols; i++) {
        this.cells[j][i].draw(this.context);
      }
    }
  }

  clear() {
    this.context.clearRect(0, 0, this.canvasHeight, this.canvasHeight);
  }

  setupCanvas(width, height, tileSize) {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.canvas.width = width;
    this.canvas.height = height;
    // TODO: Doubled scale only for retina displays
    this.context.scale(2, 2);
    this.context.font = `${tileSize}px Fira Mono`;
  }

  fillBackground(color = this.background) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.fill();
  }

  drawText(color = this.foreground) {
    this.context.fillStyle = color;
    this.context.fillText('@', 0, 10);
    this.context.fillText('1', 10, 10);
    this.context.fill();
  }
}
