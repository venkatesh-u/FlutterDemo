define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_gallery/demo/calculator/logic', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_gallery__demo__calculator__logic, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const logic = packages__flutter_gallery__demo__calculator__logic.demo__calculator__logic;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const theme = packages__flutter__material.src__material__theme;
  const divider = packages__flutter__material.src__material__divider;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const home = Object.create(dart.library);
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $removeLast = dartx.removeLast;
  const $clear = dartx.clear;
  let JSArrayOfCalcExpression = () => (JSArrayOfCalcExpression = dart.constFn(_interceptors.JSArray$(logic.CalcExpression)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 32,
        [_Location_line]: 127,
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
        [_Location_column]: 20,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 27,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 121,
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
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
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
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keys",
        [_Location_column]: 34,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keys",
        [_Location_column]: 34,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keys",
        [_Location_column]: 34,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 29,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 44,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calcState",
        [_Location_column]: 34,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 29,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 44,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keys",
        [_Location_column]: 34,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 29,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 49,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 29,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 49,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 29,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 49,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 29,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 44,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 29,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 44,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 231,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 250,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 249,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/calculator/home.dart"
      });
    }
  });
  home.Calculator = class Calculator extends framework.StatefulWidget {
    createState() {
      return new home._CalculatorState.new();
    }
  };
  (home.Calculator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.Calculator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.Calculator.prototype;
  dart.addTypeTests(home.Calculator);
  dart.setMethodSignature(home.Calculator, () => ({
    __proto__: dart.getMethods(home.Calculator.__proto__),
    createState: dart.fnType(home._CalculatorState, [])
  }));
  dart.setLibraryUri(home.Calculator, "package:flutter_gallery/demo/calculator/home.dart");
  const _expressionStack = dart.privateName(home, "_expressionStack");
  const _expression = dart.privateName(home, "_expression");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C8;
  let C7;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_thickness = dart.privateName(divider, "Divider.thickness");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C11;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  home._CalculatorState = class _CalculatorState extends framework.State$(home.Calculator) {
    pushExpression(expression) {
      this[_expressionStack][$add](this[_expression]);
      this[_expression] = expression;
    }
    popCalcExpression() {
      if (dart.test(this[_expressionStack][$isNotEmpty])) {
        this[_expression] = this[_expressionStack][$removeLast]();
      } else {
        this[_expression] = new logic.CalcExpression.empty();
      }
    }
    setResult(resultExpression) {
      this[_expressionStack][$clear]();
      this[_expression] = resultExpression;
    }
    handleNumberTap(n) {
      let expression = this[_expression].appendDigit(n);
      if (expression != null) {
        this.setState(dart.fn(() => {
          this.pushExpression(expression);
        }, VoidToNull()));
      }
    }
    handlePointTap() {
      let expression = this[_expression].appendPoint();
      if (expression != null) {
        this.setState(dart.fn(() => {
          this.pushExpression(expression);
        }, VoidToNull()));
      }
    }
    handlePlusTap() {
      let expression = this[_expression].appendOperation(logic.Operation.Addition);
      if (expression != null) {
        this.setState(dart.fn(() => {
          this.pushExpression(expression);
        }, VoidToNull()));
      }
    }
    handleMinusTap() {
      let expression = this[_expression].appendMinus();
      if (expression != null) {
        this.setState(dart.fn(() => {
          this.pushExpression(expression);
        }, VoidToNull()));
      }
    }
    handleMultTap() {
      let expression = this[_expression].appendOperation(logic.Operation.Multiplication);
      if (expression != null) {
        this.setState(dart.fn(() => {
          this.pushExpression(expression);
        }, VoidToNull()));
      }
    }
    handleDivTap() {
      let expression = this[_expression].appendOperation(logic.Operation.Division);
      if (expression != null) {
        this.setState(dart.fn(() => {
          this.pushExpression(expression);
        }, VoidToNull()));
      }
    }
    handleEqualsTap() {
      let resultExpression = this[_expression].computeResult();
      if (resultExpression != null) {
        this.setState(dart.fn(() => {
          this.setResult(resultExpression);
        }, VoidToNull()));
      }
    }
    handleDelTap() {
      this.setState(dart.fn(() => {
        this.popCalcExpression();
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: theme.Theme.of(context).canvasColor, elevation: 0.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), body: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 2, child: new home.CalcDisplay.new({content: dart.toString(this[_expression]), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), C11 || CT.C11, new basic.Expanded.new({flex: 3, child: new home.KeyPad.new({calcState: this, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (home._CalculatorState.new = function() {
    this[_expressionStack] = JSArrayOfCalcExpression().of([]);
    this[_expression] = new logic.CalcExpression.empty();
    home._CalculatorState.__proto__.new.call(this);
    ;
  }).prototype = home._CalculatorState.prototype;
  dart.addTypeTests(home._CalculatorState);
  dart.setMethodSignature(home._CalculatorState, () => ({
    __proto__: dart.getMethods(home._CalculatorState.__proto__),
    pushExpression: dart.fnType(dart.void, [logic.CalcExpression]),
    popCalcExpression: dart.fnType(dart.void, []),
    setResult: dart.fnType(dart.void, [logic.CalcExpression]),
    handleNumberTap: dart.fnType(dart.void, [core.int]),
    handlePointTap: dart.fnType(dart.void, []),
    handlePlusTap: dart.fnType(dart.void, []),
    handleMinusTap: dart.fnType(dart.void, []),
    handleMultTap: dart.fnType(dart.void, []),
    handleDivTap: dart.fnType(dart.void, []),
    handleEqualsTap: dart.fnType(dart.void, []),
    handleDelTap: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home._CalculatorState, "package:flutter_gallery/demo/calculator/home.dart");
  dart.setFieldSignature(home._CalculatorState, () => ({
    __proto__: dart.getFields(home._CalculatorState.__proto__),
    [_expressionStack]: dart.finalFieldType(core.List$(logic.CalcExpression)),
    [_expression]: dart.fieldType(logic.CalcExpression)
  }));
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
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C27;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C33;
  let C32;
  const CalcDisplay_content = dart.privateName(home, "CalcDisplay.content");
  home.CalcDisplay = class CalcDisplay extends framework.StatelessWidget {
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    build(context) {
      return new basic.Center.new({child: new text.Text.new(this.content, {style: C27 || CT.C27, $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
    }
  };
  (home.CalcDisplay.new = function(opts) {
    let content = opts && 'content' in opts ? opts.content : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[content$] = content;
    home.CalcDisplay.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.CalcDisplay.prototype;
  dart.addTypeTests(home.CalcDisplay);
  const content$ = CalcDisplay_content;
  dart.setMethodSignature(home.CalcDisplay, () => ({
    __proto__: dart.getMethods(home.CalcDisplay.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.CalcDisplay, "package:flutter_gallery/demo/calculator/home.dart");
  dart.setFieldSignature(home.CalcDisplay, () => ({
    __proto__: dart.getFields(home.CalcDisplay.__proto__),
    content: dart.finalFieldType(core.String)
  }));
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C48;
  let C47;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C57;
  let C55;
  let C54;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C63;
  let C62;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C74;
  let C73;
  let C79;
  let C78;
  let C77;
  let C82;
  let C83;
  let C81;
  let C80;
  let C86;
  let C87;
  let C85;
  let C84;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C93;
  let C92;
  let C97;
  let C96;
  let C95;
  let C100;
  let C101;
  let C99;
  let C98;
  let C104;
  let C105;
  let C103;
  let C102;
  let C108;
  let C109;
  let C107;
  let C106;
  let C112;
  let C113;
  let C111;
  let C110;
  let C116;
  let C117;
  let C115;
  let C114;
  let C120;
  let C121;
  let C119;
  let C118;
  let C124;
  let C123;
  let C122;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C130;
  let C129;
  let C134;
  let C133;
  let C132;
  let C137;
  let C136;
  let C135;
  let C140;
  let C141;
  let C139;
  let C138;
  const KeyPad_calcState = dart.privateName(home, "KeyPad.calcState");
  home.KeyPad = class KeyPad extends framework.StatelessWidget {
    get calcState() {
      return this[calcState$];
    }
    set calcState(value) {
      super.calcState = value;
    }
    build(context) {
      let themeData = theme_data.ThemeData.new({primarySwatch: colors.Colors.purple, brightness: ui.Brightness.dark, platform: theme.Theme.of(context).platform});
      return new theme.Theme.new({data: themeData, child: new material.Material.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 3, child: new basic.Column.new({children: JSArrayOfWidget().of([new home.KeyRow.new(JSArrayOfWidget().of([new home.NumberKey.new(7, this.calcState, {$creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new home.NumberKey.new(8, this.calcState, {$creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new home.NumberKey.new(9, this.calcState, {$creationLocationd_0dea112b090073317d4: C43 || CT.C43})]), {$creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new home.KeyRow.new(JSArrayOfWidget().of([new home.NumberKey.new(4, this.calcState, {$creationLocationd_0dea112b090073317d4: C50 || CT.C50}), new home.NumberKey.new(5, this.calcState, {$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), new home.NumberKey.new(6, this.calcState, {$creationLocationd_0dea112b090073317d4: C58 || CT.C58})]), {$creationLocationd_0dea112b090073317d4: C62 || CT.C62}), new home.KeyRow.new(JSArrayOfWidget().of([new home.NumberKey.new(1, this.calcState, {$creationLocationd_0dea112b090073317d4: C65 || CT.C65}), new home.NumberKey.new(2, this.calcState, {$creationLocationd_0dea112b090073317d4: C69 || CT.C69}), new home.NumberKey.new(3, this.calcState, {$creationLocationd_0dea112b090073317d4: C73 || CT.C73})]), {$creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new home.KeyRow.new(JSArrayOfWidget().of([new home.CalcKey.new(".", dart.bind(this.calcState, 'handlePointTap'), {$creationLocationd_0dea112b090073317d4: C80 || CT.C80}), new home.NumberKey.new(0, this.calcState, {$creationLocationd_0dea112b090073317d4: C84 || CT.C84}), new home.CalcKey.new("=", dart.bind(this.calcState, 'handleEqualsTap'), {$creationLocationd_0dea112b090073317d4: C88 || CT.C88})]), {$creationLocationd_0dea112b090073317d4: C92 || CT.C92})]), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), new basic.Expanded.new({child: new material.Material.new({color: themeData.backgroundColor, child: new basic.Column.new({children: JSArrayOfWidget().of([new home.CalcKey.new("⌫", dart.bind(this.calcState, 'handleDelTap'), {$creationLocationd_0dea112b090073317d4: C102 || CT.C102}), new home.CalcKey.new("÷", dart.bind(this.calcState, 'handleDivTap'), {$creationLocationd_0dea112b090073317d4: C106 || CT.C106}), new home.CalcKey.new("×", dart.bind(this.calcState, 'handleMultTap'), {$creationLocationd_0dea112b090073317d4: C110 || CT.C110}), new home.CalcKey.new("-", dart.bind(this.calcState, 'handleMinusTap'), {$creationLocationd_0dea112b090073317d4: C114 || CT.C114}), new home.CalcKey.new("+", dart.bind(this.calcState, 'handlePlusTap'), {$creationLocationd_0dea112b090073317d4: C118 || CT.C118})]), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129})]), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138});
    }
  };
  (home.KeyPad.new = function(opts) {
    let calcState = opts && 'calcState' in opts ? opts.calcState : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[calcState$] = calcState;
    home.KeyPad.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.KeyPad.prototype;
  dart.addTypeTests(home.KeyPad);
  const calcState$ = KeyPad_calcState;
  dart.setMethodSignature(home.KeyPad, () => ({
    __proto__: dart.getMethods(home.KeyPad.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.KeyPad, "package:flutter_gallery/demo/calculator/home.dart");
  dart.setFieldSignature(home.KeyPad, () => ({
    __proto__: dart.getFields(home.KeyPad.__proto__),
    calcState: dart.finalFieldType(home._CalculatorState)
  }));
  let C144;
  let C145;
  let C143;
  let C142;
  let C148;
  let C147;
  let C146;
  const KeyRow_keys = dart.privateName(home, "KeyRow.keys");
  home.KeyRow = class KeyRow extends framework.StatelessWidget {
    get keys() {
      return this[keys$];
    }
    set keys(value) {
      super.keys = value;
    }
    build(context) {
      return new basic.Expanded.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: this.keys, $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), $creationLocationd_0dea112b090073317d4: C146 || CT.C146});
    }
  };
  (home.KeyRow.new = function(keys, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[keys$] = keys;
    home.KeyRow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.KeyRow.prototype;
  dart.addTypeTests(home.KeyRow);
  const keys$ = KeyRow_keys;
  dart.setMethodSignature(home.KeyRow, () => ({
    __proto__: dart.getMethods(home.KeyRow.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.KeyRow, "package:flutter_gallery/demo/calculator/home.dart");
  dart.setFieldSignature(home.KeyRow, () => ({
    __proto__: dart.getFields(home.KeyRow.__proto__),
    keys: dart.finalFieldType(core.List$(framework.Widget))
  }));
  let C151;
  let C152;
  let C150;
  let C149;
  let C155;
  let C154;
  let C153;
  let C158;
  let C159;
  let C157;
  let C156;
  let C162;
  let C161;
  let C160;
  const CalcKey_text = dart.privateName(home, "CalcKey.text");
  const CalcKey_onTap = dart.privateName(home, "CalcKey.onTap");
  home.CalcKey = class CalcKey extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    build(context) {
      let orientation = media_query.MediaQuery.of(context).orientation;
      return new basic.Expanded.new({child: new ink_well.InkResponse.new({onTap: this.onTap, child: new basic.Center.new({child: new text.Text.new(this.text, {style: new text_style.TextStyle.new({fontSize: dart.equals(orientation, media_query.Orientation.portrait) ? 32.0 : 24.0}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C160 || CT.C160});
    }
  };
  (home.CalcKey.new = function(text, onTap, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onTap$] = onTap;
    home.CalcKey.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.CalcKey.prototype;
  dart.addTypeTests(home.CalcKey);
  const text$ = CalcKey_text;
  const onTap$ = CalcKey_onTap;
  dart.setMethodSignature(home.CalcKey, () => ({
    __proto__: dart.getMethods(home.CalcKey.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.CalcKey, "package:flutter_gallery/demo/calculator/home.dart");
  dart.setFieldSignature(home.CalcKey, () => ({
    __proto__: dart.getFields(home.CalcKey.__proto__),
    text: dart.finalFieldType(core.String),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  home.NumberKey = class NumberKey extends home.CalcKey {};
  (home.NumberKey.new = function(value, calcState, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.NumberKey.__proto__.new.call(this, dart.str(value), dart.fn(() => {
      calcState.handleNumberTap(value);
    }, VoidToNull()), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.NumberKey.prototype;
  dart.addTypeTests(home.NumberKey);
  dart.setLibraryUri(home.NumberKey, "package:flutter_gallery/demo/calculator/home.dart");
  dart.trackLibraries("packages/flutter_gallery/demo/calculator/home", {
    "package:flutter_gallery/demo/calculator/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYoC;IAAkB;;;QAH9B;;AAAQ,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAeV;AACA,MAAjC,AAAiB,6BAAI;AACG,MAAxB,oBAAc,UAAU;IAC1B;;AAIE,oBAAI,AAAiB;AACwB,QAA3C,oBAAc,AAAiB;;AAEK,QAApC,oBAA6B;;IAEjC;cAG8B;AACJ,MAAxB,AAAiB;AACa,MAA9B,oBAAc,gBAAgB;IAChC;oBAEyB;AACF,uBAAa,AAAY,8BAAY,CAAC;AAC3D,UAAI,UAAU,IAAI;AAGd,QAFF,cAAS;AACmB,UAA1B,oBAAe,UAAU;;;IAG/B;;AAGuB,uBAAa,AAAY;AAC9C,UAAI,UAAU,IAAI;AAGd,QAFF,cAAS;AACmB,UAA1B,oBAAe,UAAU;;;IAG/B;;AAGuB,uBAAa,AAAY,kCAA0B;AACxE,UAAI,UAAU,IAAI;AAGd,QAFF,cAAS;AACmB,UAA1B,oBAAe,UAAU;;;IAG/B;;AAGuB,uBAAa,AAAY;AAC9C,UAAI,UAAU,IAAI;AAGd,QAFF,cAAS;AACmB,UAA1B,oBAAe,UAAU;;;IAG/B;;AAGuB,uBAAa,AAAY,kCAA0B;AACxE,UAAI,UAAU,IAAI;AAGd,QAFF,cAAS;AACmB,UAA1B,oBAAe,UAAU;;;IAG/B;;AAGuB,uBAAa,AAAY,kCAA0B;AACxE,UAAI,UAAU,IAAI;AAGd,QAFF,cAAS;AACmB,UAA1B,oBAAe,UAAU;;;IAG/B;;AAGuB,6BAAmB,AAAY;AACpD,UAAI,gBAAgB,IAAI;AAGpB,QAFF,cAAS;AACoB,UAA3B,eAAU,gBAAgB;;;IAGhC;;AAKI,MAFF,cAAS;AACY,QAAnB;;IAEJ;UAG0B;AACxB,YAAO,oCACG,yCACiB,AAAY,eAAT,OAAO,0BACtB,kEAEP,0CACmC,2CACrB,sBAEhB,8BACQ,UACC,mCAAiC,cAAZ,iJAG9B,8BACQ,UACC,gCAAkB;IAKnC;;;IArH2B,yBAAmC;IAC/C,oBAA6B;;;EAqH9C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKe;;;;;;UAGa;AACxB,YAAO,8BACE,kBACL;IAIN;;;QAZyB;;;AAAnB;;EAA6B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBZ;;;;;;UAGG;AACR,sBAAY,yCACJ,kCACC,8BACP,AAAY,eAAT,OAAO;AAE5B,YAAO,4BACC,SAAS,SACR,kCACE,6BACa,sBAChB,8BAIQ,UACC,gCACa,sBAChB,oBAAe,sBACb,uBAAU,GAAG,0EACb,uBAAU,GAAG,0EACb,uBAAU,GAAG,sIAEf,oBAAe,sBACb,uBAAU,GAAG,0EACb,uBAAU,GAAG,0EACb,uBAAU,GAAG,sIAEf,oBAAe,sBACb,uBAAU,GAAG,0EACb,uBAAU,GAAG,0EACb,uBAAU,GAAG,sIAEf,oBAAe,sBACb,qBAAQ,KAAe,UAAV,6FACb,uBAAU,GAAG,0EACb,qBAAQ,KAAe,UAAV,8QAKrB,+BACS,kCACE,AAAU,SAAD,yBACT,gCACa,sBAChB,qBAAQ,KAAoB,UAAV,6FAClB,qBAAQ,KAAoB,UAAV,6FAClB,qBAAQ,KAAoB,UAAV,8FAClB,qBAAQ,KAAe,UAAV,+FACb,qBAAQ,KAAe,UAAV;IAS/B;;;QAhEoB;;;AAAd;;EAA0B;;;;;;;;;;;;;;;;;;;;;IAsEb;;;;;;UAGO;AACxB,YAAO,gCACE,sCACgC,yCAC3B;IAGhB;;8BAZkB;;;AAAZ;;EAAiB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBV;;;;;;IACY;;;;;;UAGC;AACN,wBAAyB,AAAY,0BAAT,OAAO;AACrD,YAAO,gCACE,qCACE,mBACA,6BACE,kBACL,mBACO,wCACkB,YAAZ,WAAW,EAAgB,oCAAY,OAAO;IAMrE;;+BArBmB,MAAW;;IAAX;IAAW;AAAxB;;EAA8B;;;;;;;;;;;;;;;iCAyBtB,OAAwB;;AAClC,4CAAc,SAAN,KAAK,GAAG;AACkB,MAAhC,AAAU,SAAD,iBAAiB,KAAK;;;EAC/B","file":"home.ddc.js"}');
  // Exports:
  return {
    demo__calculator__home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
