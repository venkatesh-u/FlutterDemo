define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__material.src__material__colors;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const transformations_demo_board = Object.create(dart.library);
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  const $abs = dartx.abs;
  const $truncate = dartx.truncate;
  const $round = dartx.round;
  const $firstWhere = dartx.firstWhere;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $indexWhere = dartx.indexWhere;
  const $_set = dartx._set;
  const $runtimeType = dartx.runtimeType;
  const $toDouble = dartx.toDouble;
  const $iterator = dartx.iterator;
  const $_get = dartx._get;
  let JSArrayOfOffset = () => (JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))();
  let JSArrayOfBoardPoint = () => (JSArrayOfBoardPoint = dart.constFn(_interceptors.JSArray$(transformations_demo_board.BoardPoint)))();
  let PointOfdouble = () => (PointOfdouble = dart.constFn(math.Point$(core.double)))();
  let BoardPointTobool = () => (BoardPointTobool = dart.constFn(dart.fnType(core.bool, [transformations_demo_board.BoardPoint])))();
  let OffsetToOffset = () => (OffsetToOffset = dart.constFn(dart.fnType(ui.Offset, [ui.Offset])))();
  let ListOfColor = () => (ListOfColor = dart.constFn(core.List$(ui.Color)))();
  let ListOfBoardPoint = () => (ListOfBoardPoint = dart.constFn(core.List$(transformations_demo_board.BoardPoint)))();
  let LinkedHashSetOfColor = () => (LinkedHashSetOfColor = dart.constFn(collection.LinkedHashSet$(ui.Color)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294638330.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294309365.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293848814.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292927712.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292269782.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4290624957.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4288585374.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4285887861.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4284572001.0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282532418.0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4281348144.0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280361249.0
      });
    },
    get C2() {
      return C2 = dart.constMap(core.int, ui.Color, [50, C3 || CT.C3, 100, C4 || CT.C4, 200, C5 || CT.C5, 300, C6 || CT.C6, 350, C7 || CT.C7, 400, C8 || CT.C8, 500, C9 || CT.C9, 600, C10 || CT.C10, 700, C11 || CT.C11, 800, C12 || CT.C12, 850, C13 || CT.C13, 900, C14 || CT.C14]);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color__value]: 4288585374.0,
        [ColorSwatch__swatch]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: transformations_demo_board.BoardPoint.prototype,
        [BoardPoint_color]: C1 || CT.C1,
        [BoardPoint_r]: 0,
        [BoardPoint_q]: 0
      });
    }
  });
  const _boardPoints = dart.privateName(transformations_demo_board, "_boardPoints");
  const _getNextBoardPoint = dart.privateName(transformations_demo_board, "_getNextBoardPoint");
  const _getRRangeForQ = dart.privateName(transformations_demo_board, "_getRRangeForQ");
  const Color__value = dart.privateName(ui, "Color._value");
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C2;
  const ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  let C1;
  const BoardPoint_color = dart.privateName(transformations_demo_board, "BoardPoint.color");
  const BoardPoint_r = dart.privateName(transformations_demo_board, "BoardPoint.r");
  const BoardPoint_q = dart.privateName(transformations_demo_board, "BoardPoint.q");
  let C0;
  const _validateBoardPoint = dart.privateName(transformations_demo_board, "_validateBoardPoint");
  transformations_demo_board.BoardPoint = class BoardPoint extends core.Object {
    get q() {
      return this[q$];
    }
    set q(value) {
      super.q = value;
    }
    get r() {
      return this[r$];
    }
    set r(value) {
      super.r = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    toString() {
      return "BoardPoint(" + dart.str(this.q) + ", " + dart.str(this.r) + ", " + dart.str(this.color) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let boardPoint = transformations_demo_board.BoardPoint._check(other);
      return boardPoint.q == this.q && boardPoint.r == this.r;
    }
    get hashCode() {
      return ui.hashValues(this.q, this.r);
    }
    copyWithColor(nextColor) {
      return new transformations_demo_board.BoardPoint.new(this.q, this.r, {color: nextColor});
    }
    get cubeCoordinates() {
      return vector_math_64.Vector3.new(this.q[$toDouble](), this.r[$toDouble](), (-dart.notNull(this.q) - dart.notNull(this.r))[$toDouble]());
    }
  };
  (transformations_demo_board.BoardPoint.new = function(q, r, opts) {
    let color = opts && 'color' in opts ? opts.color : C1 || CT.C1;
    this[q$] = q;
    this[r$] = r;
    this[color$] = color;
    ;
  }).prototype = transformations_demo_board.BoardPoint.prototype;
  dart.addTypeTests(transformations_demo_board.BoardPoint);
  const q$ = BoardPoint_q;
  const r$ = BoardPoint_r;
  const color$ = BoardPoint_color;
  dart.setMethodSignature(transformations_demo_board.BoardPoint, () => ({
    __proto__: dart.getMethods(transformations_demo_board.BoardPoint.__proto__),
    copyWithColor: dart.fnType(transformations_demo_board.BoardPoint, [ui.Color])
  }));
  dart.setGetterSignature(transformations_demo_board.BoardPoint, () => ({
    __proto__: dart.getGetters(transformations_demo_board.BoardPoint.__proto__),
    cubeCoordinates: vector_math_64.Vector3
  }));
  dart.setLibraryUri(transformations_demo_board.BoardPoint, "package:flutter_gallery/demo/transformations/transformations_demo_board.dart");
  dart.setFieldSignature(transformations_demo_board.BoardPoint, () => ({
    __proto__: dart.getFields(transformations_demo_board.BoardPoint.__proto__),
    q: dart.finalFieldType(core.int),
    r: dart.finalFieldType(core.int),
    color: dart.finalFieldType(ui.Color)
  }));
  dart.defineExtensionMethods(transformations_demo_board.BoardPoint, ['toString', '_equals']);
  dart.defineExtensionAccessors(transformations_demo_board.BoardPoint, ['hashCode']);
  const Board_boardRadius = dart.privateName(transformations_demo_board, "Board.boardRadius");
  const Board_hexagonRadius = dart.privateName(transformations_demo_board, "Board.hexagonRadius");
  const Board_hexagonMargin = dart.privateName(transformations_demo_board, "Board.hexagonMargin");
  const Board_positionsForHexagonAtOrigin = dart.privateName(transformations_demo_board, "Board.positionsForHexagonAtOrigin");
  const Board_selected = dart.privateName(transformations_demo_board, "Board.selected");
  const Object_IterableMixin$36 = class Object_IterableMixin extends core.Object {};
  (Object_IterableMixin$36.new = function() {
  }).prototype = Object_IterableMixin$36.prototype;
  dart.applyMixin(Object_IterableMixin$36, collection.IterableMixin$(transformations_demo_board.BoardPoint));
  transformations_demo_board.Board = class Board extends Object_IterableMixin$36 {
    get boardRadius() {
      return this[boardRadius$];
    }
    set boardRadius(value) {
      super.boardRadius = value;
    }
    get hexagonRadius() {
      return this[hexagonRadius$];
    }
    set hexagonRadius(value) {
      super.hexagonRadius = value;
    }
    get hexagonMargin() {
      return this[hexagonMargin$];
    }
    set hexagonMargin(value) {
      super.hexagonMargin = value;
    }
    get positionsForHexagonAtOrigin() {
      return this[positionsForHexagonAtOrigin];
    }
    set positionsForHexagonAtOrigin(value) {
      super.positionsForHexagonAtOrigin = value;
    }
    get selected() {
      return this[selected$];
    }
    set selected(value) {
      super.selected = value;
    }
    get iterator() {
      return new transformations_demo_board._BoardIterator.new(this[_boardPoints]);
    }
    [_getRRangeForQ](q) {
      let rStart = null;
      let rEnd = null;
      if (dart.notNull(q) <= 0) {
        rStart = -dart.notNull(this.boardRadius) - dart.notNull(q);
        rEnd = this.boardRadius;
      } else {
        rEnd = dart.notNull(this.boardRadius) - dart.notNull(q);
        rStart = -dart.notNull(this.boardRadius);
      }
      return new transformations_demo_board._Range.new(rStart, rEnd);
    }
    [_getNextBoardPoint](boardPoint) {
      if (boardPoint == null) {
        return new transformations_demo_board.BoardPoint.new(-dart.notNull(this.boardRadius), 0);
      }
      let rRange = this[_getRRangeForQ](boardPoint.q);
      if (dart.notNull(boardPoint.q) >= dart.notNull(this.boardRadius) && dart.notNull(boardPoint.r) >= dart.notNull(rRange.max)) {
        return null;
      }
      if (dart.notNull(boardPoint.r) >= dart.notNull(rRange.max)) {
        return new transformations_demo_board.BoardPoint.new(dart.notNull(boardPoint.q) + 1, this[_getRRangeForQ](dart.notNull(boardPoint.q) + 1).min);
      }
      return new transformations_demo_board.BoardPoint.new(boardPoint.q, dart.notNull(boardPoint.r) + 1);
    }
    [_validateBoardPoint](boardPoint) {
      let center = C0 || CT.C0;
      let distanceFromCenter = transformations_demo_board.Board.getDistance(center, boardPoint);
      return dart.notNull(distanceFromCenter) <= dart.notNull(this.boardRadius);
    }
    static getDistance(a, b) {
      let a3 = a.cubeCoordinates;
      let b3 = b.cubeCoordinates;
      return (((dart.notNull(a3.x) - dart.notNull(b3.x))[$abs]() + (dart.notNull(a3.y) - dart.notNull(b3.y))[$abs]() + (dart.notNull(a3.z) - dart.notNull(b3.z))[$abs]()) / 2)[$truncate]();
    }
    pointToBoardPoint(point) {
      let boardPoint = new transformations_demo_board.BoardPoint.new(((math.sqrt(3) / 3 * dart.notNull(point.dx) - 1 / 3 * dart.notNull(point.dy)) / dart.notNull(this.hexagonRadius))[$round](), (2 / 3 * dart.notNull(point.dy) / dart.notNull(this.hexagonRadius))[$round]());
      if (!dart.test(this[_validateBoardPoint](boardPoint))) {
        return null;
      }
      return this[_boardPoints][$firstWhere](dart.fn(boardPointI => boardPointI.q == boardPoint.q && boardPointI.r == boardPoint.r, BoardPointTobool()));
    }
    boardPointToPoint(boardPoint) {
      return new (PointOfdouble()).new(math.sqrt(3) * dart.notNull(this.hexagonRadius) * dart.notNull(boardPoint.q) + math.sqrt(3) / 2 * dart.notNull(this.hexagonRadius) * dart.notNull(boardPoint.r), 1.5 * dart.notNull(this.hexagonRadius) * dart.notNull(boardPoint.r));
    }
    getVerticesForBoardPoint(boardPoint, color) {
      let centerOfHexZeroCenter = this.boardPointToPoint(boardPoint);
      let positions = this.positionsForHexagonAtOrigin[$map](ui.Offset, dart.fn(offset => offset.translate(centerOfHexZeroCenter.x, centerOfHexZeroCenter.y), OffsetToOffset()))[$toList]();
      return ui.Vertices.new(ui.VertexMode.triangleFan, positions, {colors: ListOfColor().filled(positions[$length], color)});
    }
    copyWithSelected(boardPoint) {
      if (dart.equals(this.selected, boardPoint)) {
        return this;
      }
      let nextBoard = new transformations_demo_board.Board.new({boardRadius: this.boardRadius, hexagonRadius: this.hexagonRadius, hexagonMargin: this.hexagonMargin, selected: boardPoint, boardPoints: this[_boardPoints]});
      return nextBoard;
    }
    copyWithBoardPointColor(boardPoint, color) {
      let nextBoardPoint = boardPoint.copyWithColor(color);
      let boardPointIndex = this[_boardPoints][$indexWhere](dart.fn(boardPointI => boardPointI.q == boardPoint.q && boardPointI.r == boardPoint.r, BoardPointTobool()));
      if (dart.equals(this.elementAt(boardPointIndex), boardPoint) && dart.equals(boardPoint.color, color)) {
        return this;
      }
      let nextBoardPoints = ListOfBoardPoint().from(this[_boardPoints]);
      nextBoardPoints[$_set](boardPointIndex, nextBoardPoint);
      let selectedBoardPoint = dart.equals(boardPoint, this.selected) ? nextBoardPoint : this.selected;
      return new transformations_demo_board.Board.new({boardRadius: this.boardRadius, hexagonRadius: this.hexagonRadius, hexagonMargin: this.hexagonMargin, selected: selectedBoardPoint, boardPoints: nextBoardPoints});
    }
  };
  (transformations_demo_board.Board.new = function(opts) {
    let boardRadius = opts && 'boardRadius' in opts ? opts.boardRadius : null;
    let hexagonRadius = opts && 'hexagonRadius' in opts ? opts.hexagonRadius : null;
    let hexagonMargin = opts && 'hexagonMargin' in opts ? opts.hexagonMargin : null;
    let selected = opts && 'selected' in opts ? opts.selected : null;
    let boardPoints = opts && 'boardPoints' in opts ? opts.boardPoints : null;
    this[positionsForHexagonAtOrigin] = JSArrayOfOffset().of([]);
    this[_boardPoints] = JSArrayOfBoardPoint().of([]);
    this[boardRadius$] = boardRadius;
    this[hexagonRadius$] = hexagonRadius;
    this[hexagonMargin$] = hexagonMargin;
    this[selected$] = selected;
    if (!(dart.notNull(boardRadius) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_board.dart", 17, 15, "boardRadius > 0");
    if (!(dart.notNull(hexagonRadius) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_board.dart", 18, 15, "hexagonRadius > 0");
    if (!(dart.notNull(hexagonMargin) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_board.dart", 19, 15, "hexagonMargin >= 0");
    let hexStart = new (PointOfdouble()).new(0.0, -dart.notNull(this.hexagonRadius));
    let hexagonRadiusPadded = dart.notNull(this.hexagonRadius) - dart.notNull(this.hexagonMargin);
    let centerToFlat = math.sqrt(3) / 2 * hexagonRadiusPadded;
    this.positionsForHexagonAtOrigin[$addAll](JSArrayOfOffset().of([new ui.Offset.new(hexStart.x, hexStart.y), new ui.Offset.new(dart.notNull(hexStart.x) + centerToFlat, dart.notNull(hexStart.y) + 0.5 * hexagonRadiusPadded), new ui.Offset.new(dart.notNull(hexStart.x) + centerToFlat, dart.notNull(hexStart.y) + 1.5 * hexagonRadiusPadded), new ui.Offset.new(dart.notNull(hexStart.x) + centerToFlat, dart.notNull(hexStart.y) + 1.5 * hexagonRadiusPadded), new ui.Offset.new(hexStart.x, dart.notNull(hexStart.y) + 2 * hexagonRadiusPadded), new ui.Offset.new(hexStart.x, dart.notNull(hexStart.y) + 2 * hexagonRadiusPadded), new ui.Offset.new(dart.notNull(hexStart.x) - centerToFlat, dart.notNull(hexStart.y) + 1.5 * hexagonRadiusPadded), new ui.Offset.new(dart.notNull(hexStart.x) - centerToFlat, dart.notNull(hexStart.y) + 1.5 * hexagonRadiusPadded), new ui.Offset.new(dart.notNull(hexStart.x) - centerToFlat, dart.notNull(hexStart.y) + 0.5 * hexagonRadiusPadded)]));
    if (boardPoints != null) {
      this[_boardPoints][$addAll](boardPoints);
    } else {
      let boardPoint = this[_getNextBoardPoint](null);
      while (boardPoint != null) {
        this[_boardPoints][$add](boardPoint);
        boardPoint = this[_getNextBoardPoint](boardPoint);
      }
    }
  }).prototype = transformations_demo_board.Board.prototype;
  dart.addTypeTests(transformations_demo_board.Board);
  const boardRadius$ = Board_boardRadius;
  const hexagonRadius$ = Board_hexagonRadius;
  const hexagonMargin$ = Board_hexagonMargin;
  const positionsForHexagonAtOrigin = Board_positionsForHexagonAtOrigin;
  const selected$ = Board_selected;
  dart.setMethodSignature(transformations_demo_board.Board, () => ({
    __proto__: dart.getMethods(transformations_demo_board.Board.__proto__),
    [_getRRangeForQ]: dart.fnType(transformations_demo_board._Range, [core.int]),
    [_getNextBoardPoint]: dart.fnType(transformations_demo_board.BoardPoint, [transformations_demo_board.BoardPoint]),
    [_validateBoardPoint]: dart.fnType(core.bool, [transformations_demo_board.BoardPoint]),
    pointToBoardPoint: dart.fnType(transformations_demo_board.BoardPoint, [ui.Offset]),
    boardPointToPoint: dart.fnType(math.Point$(core.double), [transformations_demo_board.BoardPoint]),
    getVerticesForBoardPoint: dart.fnType(ui.Vertices, [transformations_demo_board.BoardPoint, ui.Color]),
    copyWithSelected: dart.fnType(transformations_demo_board.Board, [transformations_demo_board.BoardPoint]),
    copyWithBoardPointColor: dart.fnType(transformations_demo_board.Board, [transformations_demo_board.BoardPoint, ui.Color])
  }));
  dart.setGetterSignature(transformations_demo_board.Board, () => ({
    __proto__: dart.getGetters(transformations_demo_board.Board.__proto__),
    iterator: core.Iterator$(transformations_demo_board.BoardPoint),
    [$iterator]: core.Iterator$(transformations_demo_board.BoardPoint)
  }));
  dart.setLibraryUri(transformations_demo_board.Board, "package:flutter_gallery/demo/transformations/transformations_demo_board.dart");
  dart.setFieldSignature(transformations_demo_board.Board, () => ({
    __proto__: dart.getFields(transformations_demo_board.Board.__proto__),
    boardRadius: dart.finalFieldType(core.int),
    hexagonRadius: dart.finalFieldType(core.double),
    hexagonMargin: dart.finalFieldType(core.double),
    positionsForHexagonAtOrigin: dart.finalFieldType(core.List$(ui.Offset)),
    selected: dart.finalFieldType(transformations_demo_board.BoardPoint),
    [_boardPoints]: dart.finalFieldType(core.List$(transformations_demo_board.BoardPoint))
  }));
  dart.defineExtensionAccessors(transformations_demo_board.Board, ['iterator']);
  const _BoardIterator_current = dart.privateName(transformations_demo_board, "_BoardIterator.current");
  transformations_demo_board._BoardIterator = class _BoardIterator extends core.Iterator$(transformations_demo_board.BoardPoint) {
    get current() {
      return this[current];
    }
    set current(value) {
      this[current] = value;
    }
    moveNext() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = dart.notNull(this.currentIndex) + 1;
      }
      if (dart.notNull(this.currentIndex) >= dart.notNull(this.boardPoints[$length])) {
        this.current = null;
        return false;
      }
      this.current = this.boardPoints[$_get](this.currentIndex);
      return true;
    }
  };
  (transformations_demo_board._BoardIterator.new = function(boardPoints) {
    this.currentIndex = null;
    this[current] = null;
    this.boardPoints = boardPoints;
    ;
  }).prototype = transformations_demo_board._BoardIterator.prototype;
  dart.addTypeTests(transformations_demo_board._BoardIterator);
  const current = _BoardIterator_current;
  dart.setMethodSignature(transformations_demo_board._BoardIterator, () => ({
    __proto__: dart.getMethods(transformations_demo_board._BoardIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(transformations_demo_board._BoardIterator, "package:flutter_gallery/demo/transformations/transformations_demo_board.dart");
  dart.setFieldSignature(transformations_demo_board._BoardIterator, () => ({
    __proto__: dart.getFields(transformations_demo_board._BoardIterator.__proto__),
    boardPoints: dart.finalFieldType(core.List$(transformations_demo_board.BoardPoint)),
    currentIndex: dart.fieldType(core.int),
    current: dart.fieldType(transformations_demo_board.BoardPoint)
  }));
  const _Range_min = dart.privateName(transformations_demo_board, "_Range.min");
  const _Range_max = dart.privateName(transformations_demo_board, "_Range.max");
  transformations_demo_board._Range = class _Range extends core.Object {
    get min() {
      return this[min$];
    }
    set min(value) {
      super.min = value;
    }
    get max() {
      return this[max$];
    }
    set max(value) {
      super.max = value;
    }
  };
  (transformations_demo_board._Range.new = function(min, max) {
    this[min$] = min;
    this[max$] = max;
    if (!(min != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_board.dart", 230, 14, "min != null");
    if (!(max != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_board.dart", 231, 14, "max != null");
    if (!(dart.notNull(min) <= dart.notNull(max))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_board.dart", 232, 14, "min <= max");
    ;
  }).prototype = transformations_demo_board._Range.prototype;
  dart.addTypeTests(transformations_demo_board._Range);
  const min$ = _Range_min;
  const max$ = _Range_max;
  dart.setLibraryUri(transformations_demo_board._Range, "package:flutter_gallery/demo/transformations/transformations_demo_board.dart");
  dart.setFieldSignature(transformations_demo_board._Range, () => ({
    __proto__: dart.getFields(transformations_demo_board._Range.__proto__),
    min: dart.finalFieldType(core.int),
    max: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(transformations_demo_board, {
    /*transformations_demo_board.boardPointColors*/get boardPointColors() {
      return LinkedHashSetOfColor().from([colors.Colors.grey, colors.Colors.black, colors.Colors.red, colors.Colors.blue]);
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/transformations/transformations_demo_board", {
    "package:flutter_gallery/demo/transformations/transformations_demo_board.dart": transformations_demo_board
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["transformations_demo_board.dart"],"names":[],"mappings":"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","file":"transformations_demo_board.ddc.js"}');
  // Exports:
  return {
    demo__transformations__transformations_demo_board: transformations_demo_board
  };
});

//# sourceMappingURL=transformations_demo_board.ddc.js.map
