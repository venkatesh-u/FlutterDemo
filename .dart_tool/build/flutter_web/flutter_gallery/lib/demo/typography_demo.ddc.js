define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme$ = packages__flutter__material.src__material__theme;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const typography_demo = Object.create(dart.library);
  const $add = dartx.add;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 8
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 42,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 69,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 40,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 67,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 40,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 67,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 40,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 67,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 66,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 36,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 60,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 41,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 67,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 61,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 61,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 38,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 64,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 62,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
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
        [Text_data]: "Typography"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 42,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 9,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart"
      });
    }
  });
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
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C21;
  let C20;
  const TextStyleItem_name = dart.privateName(typography_demo, "TextStyleItem.name");
  const TextStyleItem_style = dart.privateName(typography_demo, "TextStyleItem.style");
  const TextStyleItem_text = dart.privateName(typography_demo, "TextStyleItem.text");
  typography_demo.TextStyleItem = class TextStyleItem extends framework.StatelessWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let nameStyle = theme.textTheme.caption.copyWith({color: theme.textTheme.caption.color});
      return new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 72.0, child: new text.Text.new(this.name, {style: nameStyle, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new basic.Expanded.new({child: new text.Text.new(this.text, {style: this.style.copyWith({height: 1.0}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
    }
  };
  (typography_demo.TextStyleItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[style$] = style;
    this[text$] = text;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart", 13, 15, "name != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart", 14, 15, "style != null");
    if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/typography_demo.dart", 15, 15, "text != null");
    typography_demo.TextStyleItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = typography_demo.TextStyleItem.prototype;
  dart.addTypeTests(typography_demo.TextStyleItem);
  const name$ = TextStyleItem_name;
  const style$ = TextStyleItem_style;
  const text$ = TextStyleItem_text;
  dart.setMethodSignature(typography_demo.TextStyleItem, () => ({
    __proto__: dart.getMethods(typography_demo.TextStyleItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(typography_demo.TextStyleItem, "package:flutter_gallery/demo/typography_demo.dart");
  dart.setFieldSignature(typography_demo.TextStyleItem, () => ({
    __proto__: dart.getFields(typography_demo.TextStyleItem.__proto__),
    name: dart.finalFieldType(core.String),
    style: dart.finalFieldType(text_style.TextStyle),
    text: dart.finalFieldType(core.String)
  }));
  let C26;
  let C27;
  let C28;
  let C25;
  let C24;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  let C36;
  let C37;
  let C38;
  let C35;
  let C34;
  let C41;
  let C42;
  let C43;
  let C40;
  let C39;
  let C46;
  let C47;
  let C48;
  let C45;
  let C44;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  let C61;
  let C62;
  let C63;
  let C60;
  let C59;
  let C66;
  let C67;
  let C68;
  let C65;
  let C64;
  let C71;
  let C72;
  let C73;
  let C70;
  let C69;
  let C76;
  let C77;
  let C78;
  let C75;
  let C74;
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
  let C79;
  let C82;
  let C81;
  let C80;
  let C85;
  let C84;
  let C83;
  let C88;
  let C87;
  let C86;
  let C91;
  let C92;
  let C93;
  let C90;
  let C89;
  let C96;
  let C97;
  let C95;
  let C94;
  typography_demo.TypographyDemo = class TypographyDemo extends framework.StatelessWidget {
    build(context) {
      let textTheme = theme$.Theme.of(context).textTheme;
      let styleItems = (() => {
        let t0 = JSArrayOfWidget().of([]);
        if (dart.notNull(media_query.MediaQuery.of(context).size.width) > 500.0) t0[$add](new typography_demo.TextStyleItem.new({name: "Display 4", style: textTheme.display4, text: "Light 112sp", $creationLocationd_0dea112b090073317d4: C24 || CT.C24}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Display 3", style: textTheme.display3, text: "Regular 56sp", $creationLocationd_0dea112b090073317d4: C29 || CT.C29}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Display 2", style: textTheme.display2, text: "Regular 45sp", $creationLocationd_0dea112b090073317d4: C34 || CT.C34}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Display 1", style: textTheme.display1, text: "Regular 34sp", $creationLocationd_0dea112b090073317d4: C39 || CT.C39}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Headline", style: textTheme.headline, text: "Regular 24sp", $creationLocationd_0dea112b090073317d4: C44 || CT.C44}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Title", style: textTheme.title, text: "Medium 20sp", $creationLocationd_0dea112b090073317d4: C49 || CT.C49}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Subheading", style: textTheme.subhead, text: "Regular 16sp", $creationLocationd_0dea112b090073317d4: C54 || CT.C54}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Body 2", style: textTheme.body2, text: "Medium 14sp", $creationLocationd_0dea112b090073317d4: C59 || CT.C59}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Body 1", style: textTheme.body1, text: "Regular 14sp", $creationLocationd_0dea112b090073317d4: C64 || CT.C64}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Caption", style: textTheme.caption, text: "Regular 12sp", $creationLocationd_0dea112b090073317d4: C69 || CT.C69}));
        t0[$add](new typography_demo.TextStyleItem.new({name: "Button", style: textTheme.button, text: "MEDIUM (ALL CAPS) 14sp", $creationLocationd_0dea112b090073317d4: C74 || CT.C74}));
        return t0;
      })();
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C79 || CT.C79, $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), body: new safe_area.SafeArea.new({top: false, bottom: false, child: new scrollbar.Scrollbar.new({child: new scroll_view.ListView.new({children: styleItems, $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94});
    }
  };
  (typography_demo.TypographyDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    typography_demo.TypographyDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = typography_demo.TypographyDemo.prototype;
  dart.addTypeTests(typography_demo.TypographyDemo);
  dart.setMethodSignature(typography_demo.TypographyDemo, () => ({
    __proto__: dart.getMethods(typography_demo.TypographyDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(typography_demo.TypographyDemo, "package:flutter_gallery/demo/typography_demo.dart");
  dart.defineLazy(typography_demo.TypographyDemo, {
    /*typography_demo.TypographyDemo.routeName*/get routeName() {
      return "/typography";
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/typography_demo", {
    "package:flutter_gallery/demo/typography_demo.dart": typography_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typography_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBe;;;;;;IACG;;;;;;IACH;;;;;;UAGa;AACR,kBAAc,gBAAG,OAAO;AACxB,sBAAY,AAAM,AAAU,AAAQ,KAAnB,oCAAmC,AAAM,AAAU,AAAQ,KAAnB;AACzE,YAAO,qDAEE,uCACkC,yCACrB,sBAChB,+BACS,aACA,kBAAK,mBAAa,SAAS,gHAEpC,+BACS,kBAAK,mBAAa,AAAM,6BAAiB;IAK1D;;;QAhCM;QACW;QACA;QACA;;IAFA;IACA;IACA;UACL,IAAI,IAAI;UACR,KAAK,IAAI;UACT,IAAI,IAAI;AACf,iEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAgCM;AACR,sBAAkB,AAAY,gBAAT,OAAO;AACzB;;AACjB,YAAsC,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,gBACtC,6CAAoB,oBAAoB,AAAU,SAAD,iBAAiB;iBACpE,6CAAoB,oBAAoB,AAAU,SAAD,iBAAiB;iBAClE,6CAAoB,oBAAoB,AAAU,SAAD,iBAAiB;iBAClE,6CAAoB,oBAAoB,AAAU,SAAD,iBAAiB;iBAClE,6CAAoB,mBAAmB,AAAU,SAAD,iBAAiB;iBACjE,6CAAoB,gBAAgB,AAAU,SAAD,cAAc;iBAC3D,6CAAoB,qBAAqB,AAAU,SAAD,gBAAgB;iBAClE,6CAAoB,iBAAiB,AAAU,SAAD,cAAc;iBAC5D,6CAAoB,iBAAiB,AAAU,SAAD,cAAc;iBAC5D,6CAAoB,kBAAkB,AAAU,SAAD,gBAAgB;iBAC/D,6CAAoB,iBAAiB,AAAU,SAAD,eAAe;;;AAG/D,YAAO,oCACG,6GACF,iCACC,eACG,cACD,oCAAiB,wCAAmB,UAAU;IAG3D;;;;;;EACF;;;;;;;;MA7BsB,wCAAS","file":"typography_demo.ddc.js"}');
  // Exports:
  return {
    demo__typography_demo: typography_demo
  };
});

//# sourceMappingURL=typography_demo.ddc.js.map
