define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/demo/transformations/transformations_demo_color_picker', 'packages/flutter_gallery/demo/transformations/transformations_demo_board'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__demo__transformations__transformations_demo_color_picker, packages__flutter_gallery__demo__transformations__transformations_demo_board) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const transformations_demo_color_picker = packages__flutter_gallery__demo__transformations__transformations_demo_color_picker.demo__transformations__transformations_demo_color_picker;
  const transformations_demo_board = packages__flutter_gallery__demo__transformations__transformations_demo_board.demo__transformations__transformations_demo_board;
  const transformations_demo_edit_board_point = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C1 || CT.C1,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_edit_board_point.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colors",
        [_Location_column]: 11,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedColor",
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onColorSelection",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_edit_board_point.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_edit_board_point.dart"
      });
    }
  });
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C1;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C6;
  let C3;
  let C2;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C15;
  let C13;
  let C12;
  const EditBoardPoint_boardPoint = dart.privateName(transformations_demo_edit_board_point, "EditBoardPoint.boardPoint");
  const EditBoardPoint_onColorSelection = dart.privateName(transformations_demo_edit_board_point, "EditBoardPoint.onColorSelection");
  transformations_demo_edit_board_point.EditBoardPoint = class EditBoardPoint extends framework.StatelessWidget {
    get boardPoint() {
      return this[boardPoint$];
    }
    set boardPoint(value) {
      super.boardPoint = value;
    }
    get onColorSelection() {
      return this[onColorSelection$];
    }
    set onColorSelection(value) {
      super.onColorSelection = value;
    }
    build(context) {
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new text.Text.new(dart.str(this.boardPoint.q) + ", " + dart.str(this.boardPoint.r), {textAlign: ui.TextAlign.right, style: C0 || CT.C0, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), new transformations_demo_color_picker.ColorPicker.new({colors: transformations_demo_board.boardPointColors, selectedColor: this.boardPoint.color, onColorSelection: this.onColorSelection, $creationLocationd_0dea112b090073317d4: C7 || CT.C7})]), $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
  };
  (transformations_demo_edit_board_point.EditBoardPoint.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let boardPoint = opts && 'boardPoint' in opts ? opts.boardPoint : null;
    let onColorSelection = opts && 'onColorSelection' in opts ? opts.onColorSelection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[boardPoint$] = boardPoint;
    this[onColorSelection$] = onColorSelection;
    if (!(boardPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_edit_board_point.dart", 12, 15, "boardPoint != null");
    transformations_demo_edit_board_point.EditBoardPoint.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = transformations_demo_edit_board_point.EditBoardPoint.prototype;
  dart.addTypeTests(transformations_demo_edit_board_point.EditBoardPoint);
  const boardPoint$ = EditBoardPoint_boardPoint;
  const onColorSelection$ = EditBoardPoint_onColorSelection;
  dart.setMethodSignature(transformations_demo_edit_board_point.EditBoardPoint, () => ({
    __proto__: dart.getMethods(transformations_demo_edit_board_point.EditBoardPoint.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(transformations_demo_edit_board_point.EditBoardPoint, "package:flutter_gallery/demo/transformations/transformations_demo_edit_board_point.dart");
  dart.setFieldSignature(transformations_demo_edit_board_point.EditBoardPoint, () => ({
    __proto__: dart.getFields(transformations_demo_edit_board_point.EditBoardPoint.__proto__),
    boardPoint: dart.finalFieldType(transformations_demo_board.BoardPoint),
    onColorSelection: dart.finalFieldType(dart.fnType(dart.void, [ui.Color]))
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/transformations/transformations_demo_edit_board_point", {
    "package:flutter_gallery/demo/transformations/transformations_demo_edit_board_point.dart": transformations_demo_edit_board_point
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["transformations_demo_edit_board_point.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcmB;;;;;;IACS;;;;;;UAGC;AACzB,YAAO,2CACkC,2CACrB,sBAChB,kBACoC,SAA/B,AAAW,qBAAE,gBAAI,AAAW,gCACV,+FAGvB,+DACU,4DACO,AAAW,yCACR;IAI1B;;;QA1BM;QACW;QACV;;IADU;IACV;UACK,UAAU,IAAI;AACrB,wFAAW,GAAG;;EAAC","file":"transformations_demo_edit_board_point.ddc.js"}');
  // Exports:
  return {
    demo__transformations__transformations_demo_edit_board_point: transformations_demo_edit_board_point
  };
});

//# sourceMappingURL=transformations_demo_edit_board_point.ddc.js.map
