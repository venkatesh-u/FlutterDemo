define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__material.src__material__colors;
  const theme = packages__flutter__material.src__material__theme;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const tab_controller = packages__flutter__material.src__material__tab_controller;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const tabs = packages__flutter__material.src__material__tabs;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const colors_demo = Object.create(dart.library);
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $toUpperCase = dartx.toUpperCase;
  const $map = dartx.map;
  const $add = dartx.add;
  const $length = dartx.length;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let intToDefaultTextStyle = () => (intToDefaultTextStyle = dart.constFn(dart.fnType(text.DefaultTextStyle, [core.int])))();
  let PaletteToTab = () => (PaletteToTab = dart.constFn(dart.fnType(tabs.Tab, [colors_demo.Palette])))();
  let PaletteToPaletteTabView = () => (PaletteToPaletteTabView = dart.constFn(dart.fnType(colors_demo.PaletteTabView, [colors_demo.Palette])))();
  let JSArrayOfPalette = () => (JSArrayOfPalette = dart.constFn(_interceptors.JSArray$(colors_demo.Palette)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 74,
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
        [_Location_column]: 18,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 32,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 46,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 34,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 48,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "prefix",
        [_Location_column]: 77,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemExtent",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.constList([50, 100, 200, 300, 400, 500, 600, 700, 800, 900], core.int);
    },
    get C52() {
      return C52 = dart.constList([100, 200, 400, 700], core.int);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Colors"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 67,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isScrollable",
        [_Location_column]: 13,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 13,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colors",
        [_Location_column]: 35,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 7,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart"
      });
    }
  });
  const Palette_name = dart.privateName(colors_demo, "Palette.name");
  const Palette_primary = dart.privateName(colors_demo, "Palette.primary");
  const Palette_accent = dart.privateName(colors_demo, "Palette.accent");
  const Palette_threshold = dart.privateName(colors_demo, "Palette.threshold");
  colors_demo.Palette = class Palette extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get accent() {
      return this[accent$];
    }
    set accent(value) {
      super.accent = value;
    }
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    get isValid() {
      return this.name != null && this.primary != null && this.threshold != null;
    }
  };
  (colors_demo.Palette.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let accent = opts && 'accent' in opts ? opts.accent : null;
    let threshold = opts && 'threshold' in opts ? opts.threshold : 900;
    this[name$] = name;
    this[primary$] = primary;
    this[accent$] = accent;
    this[threshold$] = threshold;
    ;
  }).prototype = colors_demo.Palette.prototype;
  dart.addTypeTests(colors_demo.Palette);
  const name$ = Palette_name;
  const primary$ = Palette_primary;
  const accent$ = Palette_accent;
  const threshold$ = Palette_threshold;
  dart.setGetterSignature(colors_demo.Palette, () => ({
    __proto__: dart.getGetters(colors_demo.Palette.__proto__),
    isValid: core.bool
  }));
  dart.setLibraryUri(colors_demo.Palette, "package:flutter_gallery/demo/colors_demo.dart");
  dart.setFieldSignature(colors_demo.Palette, () => ({
    __proto__: dart.getFields(colors_demo.Palette.__proto__),
    name: dart.finalFieldType(core.String),
    primary: dart.finalFieldType(colors.MaterialColor),
    accent: dart.finalFieldType(colors.MaterialAccentColor),
    threshold: dart.finalFieldType(core.int)
  }));
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C2;
  let C1;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C15;
  let C16;
  let C13;
  let C12;
  let C19;
  let C20;
  let C21;
  let C22;
  let C18;
  let C17;
  let C25;
  let C26;
  let C24;
  let C23;
  const ColorItem_index = dart.privateName(colors_demo, "ColorItem.index");
  const ColorItem_color = dart.privateName(colors_demo, "ColorItem.color");
  const ColorItem_prefix = dart.privateName(colors_demo, "ColorItem.prefix");
  colors_demo.ColorItem = class ColorItem extends framework.StatelessWidget {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get prefix() {
      return this[prefix$];
    }
    set prefix(value) {
      super.prefix = value;
    }
    colorString() {
      return "#" + this.color.value[$toRadixString](16)[$padLeft](8, "0")[$toUpperCase]();
    }
    build(context) {
      return new basic.Semantics.new({container: true, child: new container.Container.new({height: 48, padding: C0 || CT.C0, color: this.color, child: new safe_area.SafeArea.new({top: false, bottom: false, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new(dart.str(this.prefix) + dart.str(this.index), {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new text.Text.new(this.colorString(), {$creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (colors_demo.ColorItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let prefix = opts && 'prefix' in opts ? opts.prefix : "";
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[index$] = index;
    this[color$] = color;
    this[prefix$] = prefix;
    if (!(index != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart", 49, 15, "index != null");
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart", 50, 15, "color != null");
    if (!(prefix != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart", 51, 15, "prefix != null");
    colors_demo.ColorItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = colors_demo.ColorItem.prototype;
  dart.addTypeTests(colors_demo.ColorItem);
  const index$ = ColorItem_index;
  const color$ = ColorItem_color;
  const prefix$ = ColorItem_prefix;
  dart.setMethodSignature(colors_demo.ColorItem, () => ({
    __proto__: dart.getMethods(colors_demo.ColorItem.__proto__),
    colorString: dart.fnType(core.String, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(colors_demo.ColorItem, "package:flutter_gallery/demo/colors_demo.dart");
  dart.setFieldSignature(colors_demo.ColorItem, () => ({
    __proto__: dart.getFields(colors_demo.ColorItem.__proto__),
    index: dart.finalFieldType(core.int),
    color: dart.finalFieldType(ui.Color),
    prefix: dart.finalFieldType(core.String)
  }));
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C49;
  let C48;
  const PaletteTabView_colors = dart.privateName(colors_demo, "PaletteTabView.colors");
  let C51;
  let C52;
  colors_demo.PaletteTabView = class PaletteTabView extends framework.StatelessWidget {
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    build(context) {
      let textTheme = theme.Theme.of(context).textTheme;
      let whiteTextStyle = textTheme.body1.copyWith({color: colors.Colors.white});
      let blackTextStyle = textTheme.body1.copyWith({color: colors.Colors.black});
      return new scrollbar.Scrollbar.new({child: new scroll_view.ListView.new({itemExtent: 48, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            for (let t1 of colors_demo.PaletteTabView.primaryKeys[$map](framework.Widget, dart.fn(index => new text.DefaultTextStyle.new({style: dart.notNull(index) > dart.notNull(this.colors.threshold) ? whiteTextStyle : blackTextStyle, child: new colors_demo.ColorItem.new({index: index, color: this.colors.primary._get(index), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), intToDefaultTextStyle())))
              t0[$add](t1);
            if (this.colors.accent != null) for (let t2 of colors_demo.PaletteTabView.accentKeys[$map](framework.Widget, dart.fn(index => new text.DefaultTextStyle.new({style: dart.notNull(index) > dart.notNull(this.colors.threshold) ? whiteTextStyle : blackTextStyle, child: new colors_demo.ColorItem.new({index: index, color: this.colors.accent._get(index), prefix: "A", $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), intToDefaultTextStyle())))
              t0[$add](t2);
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48});
    }
  };
  (colors_demo.PaletteTabView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[colors$] = colors;
    if (!(colors != null && dart.test(colors.isValid))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/colors_demo.dart", 89, 15, "colors != null && colors.isValid");
    colors_demo.PaletteTabView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = colors_demo.PaletteTabView.prototype;
  dart.addTypeTests(colors_demo.PaletteTabView);
  const colors$ = PaletteTabView_colors;
  dart.setMethodSignature(colors_demo.PaletteTabView, () => ({
    __proto__: dart.getMethods(colors_demo.PaletteTabView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(colors_demo.PaletteTabView, "package:flutter_gallery/demo/colors_demo.dart");
  dart.setFieldSignature(colors_demo.PaletteTabView, () => ({
    __proto__: dart.getFields(colors_demo.PaletteTabView.__proto__),
    colors: dart.finalFieldType(colors_demo.Palette)
  }));
  dart.defineLazy(colors_demo.PaletteTabView, {
    /*colors_demo.PaletteTabView.primaryKeys*/get primaryKeys() {
      return C51 || CT.C51;
    },
    /*colors_demo.PaletteTabView.accentKeys*/get accentKeys() {
      return C52 || CT.C52;
    }
  });
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C53;
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C65;
  let C62;
  let C61;
  let C68;
  let C67;
  let C66;
  let C71;
  let C70;
  let C69;
  let C74;
  let C75;
  let C73;
  let C72;
  let C78;
  let C79;
  let C77;
  let C76;
  colors_demo.ColorsDemo = class ColorsDemo extends framework.StatelessWidget {
    build(context) {
      return new tab_controller.DefaultTabController.new({length: colors_demo.allPalettes[$length], child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({elevation: 0.0, title: C53 || CT.C53, bottom: new tabs.TabBar.new({isScrollable: true, tabs: colors_demo.allPalettes[$map](framework.Widget, dart.fn(swatch => new tabs.Tab.new({text: swatch.name, $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), PaletteToTab()))[$toList](), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), body: new tabs.TabBarView.new({children: colors_demo.allPalettes[$map](framework.Widget, dart.fn(colors => new colors_demo.PaletteTabView.new({colors: colors, $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), PaletteToPaletteTabView()))[$toList](), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
    }
  };
  (colors_demo.ColorsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    colors_demo.ColorsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = colors_demo.ColorsDemo.prototype;
  dart.addTypeTests(colors_demo.ColorsDemo);
  dart.setMethodSignature(colors_demo.ColorsDemo, () => ({
    __proto__: dart.getMethods(colors_demo.ColorsDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(colors_demo.ColorsDemo, "package:flutter_gallery/demo/colors_demo.dart");
  dart.defineLazy(colors_demo.ColorsDemo, {
    /*colors_demo.ColorsDemo.routeName*/get routeName() {
      return "/colors";
    }
  });
  dart.defineLazy(colors_demo, {
    /*colors_demo.kColorItemHeight*/get kColorItemHeight() {
      return 48;
    },
    /*colors_demo.allPalettes*/get allPalettes() {
      return JSArrayOfPalette().of([new colors_demo.Palette.new({name: "RED", primary: colors.Colors.red, accent: colors.Colors.redAccent, threshold: 300}), new colors_demo.Palette.new({name: "PINK", primary: colors.Colors.pink, accent: colors.Colors.pinkAccent, threshold: 200}), new colors_demo.Palette.new({name: "PURPLE", primary: colors.Colors.purple, accent: colors.Colors.purpleAccent, threshold: 200}), new colors_demo.Palette.new({name: "DEEP PURPLE", primary: colors.Colors.deepPurple, accent: colors.Colors.deepPurpleAccent, threshold: 200}), new colors_demo.Palette.new({name: "INDIGO", primary: colors.Colors.indigo, accent: colors.Colors.indigoAccent, threshold: 200}), new colors_demo.Palette.new({name: "BLUE", primary: colors.Colors.blue, accent: colors.Colors.blueAccent, threshold: 400}), new colors_demo.Palette.new({name: "LIGHT BLUE", primary: colors.Colors.lightBlue, accent: colors.Colors.lightBlueAccent, threshold: 500}), new colors_demo.Palette.new({name: "CYAN", primary: colors.Colors.cyan, accent: colors.Colors.cyanAccent, threshold: 600}), new colors_demo.Palette.new({name: "TEAL", primary: colors.Colors.teal, accent: colors.Colors.tealAccent, threshold: 400}), new colors_demo.Palette.new({name: "GREEN", primary: colors.Colors.green, accent: colors.Colors.greenAccent, threshold: 500}), new colors_demo.Palette.new({name: "LIGHT GREEN", primary: colors.Colors.lightGreen, accent: colors.Colors.lightGreenAccent, threshold: 600}), new colors_demo.Palette.new({name: "LIME", primary: colors.Colors.lime, accent: colors.Colors.limeAccent, threshold: 800}), new colors_demo.Palette.new({name: "YELLOW", primary: colors.Colors.yellow, accent: colors.Colors.yellowAccent}), new colors_demo.Palette.new({name: "AMBER", primary: colors.Colors.amber, accent: colors.Colors.amberAccent}), new colors_demo.Palette.new({name: "ORANGE", primary: colors.Colors.orange, accent: colors.Colors.orangeAccent, threshold: 700}), new colors_demo.Palette.new({name: "DEEP ORANGE", primary: colors.Colors.deepOrange, accent: colors.Colors.deepOrangeAccent, threshold: 400}), new colors_demo.Palette.new({name: "BROWN", primary: colors.Colors.brown, threshold: 200}), new colors_demo.Palette.new({name: "GREY", primary: colors.Colors.grey, threshold: 500}), new colors_demo.Palette.new({name: "BLUE GREY", primary: colors.Colors.blueGrey, threshold: 500})]);
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/colors_demo", {
    "package:flutter_gallery/demo/colors_demo.dart": colors_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["colors_demo.dart"],"names":[],"mappings":"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","file":"colors_demo.ddc.js"}');
  // Exports:
  return {
    demo__colors_demo: colors_demo
  };
});

//# sourceMappingURL=colors_demo.ddc.js.map
