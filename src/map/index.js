import { DISPLAY } from '../constants/display';

// import Arena from './arena';

/**
 * Map
 *
 */
export default class Map {
  constructor(width = DISPLAY.W / DISPLAY.TILE_S,
              height = DISPLAY.H / DISPLAY.TILE_S) {
    console.log('%c Empty Map Constructor ', `background: yellow; color: #202020;`);

    this.width = width;
    this.height = height;
    this.map = [];

    // Construct 2d-Array -> map[x][y]
    for (let i = 0; i < this.width; i++) {
      this.map[i] = [];
      for (let j = 0; j < this.height; j++) {
        this.map[i][j] = 0; // Initialize with Zero
      }
    }

    return this.map;
  }

}
