(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("RLK", [], factory);
	else if(typeof exports === 'object')
		exports["RLK"] = factory();
	else
		root["RLK"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _display = __webpack_require__(3);

var _cell = __webpack_require__(4);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(_display.DISPLAY);

/**
 * Display Class
 */

var Display = function () {
  /**
   * Display Constructor
   * @type {[Display]}
   */
  function Display() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _display.DISPLAY.W;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _display.DISPLAY.H;
    var tileSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _display.DISPLAY.TILE_S;
    var bg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _display.DISPLAY.BG;
    var fg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _display.DISPLAY.FG;

    _classCallCheck(this, Display);

    console.log('%c RLK Display!', 'background: ' + bg + '; color: ' + fg);
    this.foreground = fg;
    this.background = bg;
    this.cells = [];

    this.setupCanvas(width, height, tileSize);
    this.setupTiles(tileSize);

    this.fillBackground();
    this.draw();
    // this.drawText();
  }

  _createClass(Display, [{
    key: 'setupTiles',
    value: function setupTiles(tileSize) {
      this.tileSize = tileSize;
      this.numRows = this.canvasWidth / tileSize;
      this.numCols = this.canvasHeight / tileSize;

      for (var j = 0; j < this.numRows; j++) {
        this.cells[j] = [];
        for (var i = 0; i < this.numCols; i++) {
          this.cells[j][i] = new _cell2.default(i, j, this.tileSize);
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      for (var j = 0; j < this.numRows; j++) {
        for (var i = 0; i < this.numCols; i++) {
          this.cells[j][i].draw(this.context);
        }
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.context.clearRect(0, 0, this.canvasHeight, this.canvasHeight);
    }
  }, {
    key: 'setupCanvas',
    value: function setupCanvas(width, height, tileSize) {
      this.canvas = document.getElementById('canvas');
      this.context = this.canvas.getContext('2d');
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.canvas.width = width;
      this.canvas.height = height;
      // TODO: Doubled scale only for retina displays
      this.context.scale(2, 2);
      this.context.font = tileSize + 'px Fira Mono';
    }
  }, {
    key: 'fillBackground',
    value: function fillBackground() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.background;

      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.context.fill();
    }
  }, {
    key: 'drawText',
    value: function drawText() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.foreground;

      this.context.fillStyle = color;
      this.context.fillText('@', 0, 10);
      this.context.fillText('1', 10, 10);
      this.context.fill();
    }
  }]);

  return Display;
}();

exports.default = Display;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arena = __webpack_require__(5);

var _arena2 = _interopRequireDefault(_arena);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Arena (Map)
 *
 */
var Map = function Map() {
  _classCallCheck(this, Map);

  this.Arena = new _arena2.default();
};

exports.default = Map;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Screen = function Screen() {
  _classCallCheck(this, Screen);

  console.log('%c RLK Screen ', 'background: yellow; color: black');
};

exports.default = Screen;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default values
 * @type {Object}
 */
var DISPLAY = exports.DISPLAY = {
  TILE_S: 10,
  W: 600,
  H: 400,
  BG: '#333333',
  FG: '#afafaf'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Tile Class
 * -> Extends Glyph
 */
var Cell = function () {
  function Cell(x, y, size) {
    _classCallCheck(this, Cell);

    // console.log('cell at', x, y);
    this.tileSize = size;
    this.x = x;
    this.y = y;
  }

  _createClass(Cell, [{
    key: 'draw',
    value: function draw(context) {
      context.fillStyle = '#ffffff';
      context.fillText('1', this.x * this.tileSize, this.y * this.tileSize);
      context.fill();
    }
  }]);

  return Cell;
}();

exports.default = Cell;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arena = function Arena() {
  _classCallCheck(this, Arena);

  console.log("Butz Arena");
};

exports.default = Arena;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _display = __webpack_require__(0);

var _display2 = _interopRequireDefault(_display);

var _screen = __webpack_require__(2);

var _screen2 = _interopRequireDefault(_screen);

var _map = __webpack_require__(1);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RLK Global Object
 * Holds different convenience modules that can be used individually
 * @type {Object}
 */
var RLK = {
  Display: _display2.default,
  Screen: _screen2.default,
  Map: _map2.default
}; /**
    * Top Level Imports
    */
exports.default = RLK;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=RLK.js.map