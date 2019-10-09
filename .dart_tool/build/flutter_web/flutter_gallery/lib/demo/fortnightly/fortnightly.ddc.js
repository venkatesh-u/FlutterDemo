define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const material = packages__flutter__material.src__material__material;
  const theme = packages__flutter__material.src__material__theme;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const beveled_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__beveled_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const fortnightly = Object.create(dart.library);
  const $replaceAll = dartx.replaceAll;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onBackPressed",
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 22,
        [Radius_x]: 22
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C21 || CT.C21,
        [BorderRadius_bottomLeft]: C22 || CT.C22,
        [BorderRadius_topRight]: C22 || CT.C22,
        [BorderRadius_topLeft]: C22 || CT.C22
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C24 || CT.C24,
        [BorderSide_width]: 0,
        [BorderSide_color]: C25 || CT.C25
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: beveled_rectangle_border.BeveledRectangleBorder.prototype,
        [BeveledRectangleBorder_borderRadius]: C20 || CT.C20,
        [BeveledRectangleBorder_side]: C23 || CT.C23
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58820
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C27 || CT.C27
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 12
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 248,
        [BoxConstraints_minHeight]: 248,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 1 / 0
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 19,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 19,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 19,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 98,
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
        [_Location_column]: 15,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 17,
        [SizedBox_width]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 123,
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
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 130,
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
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 136,
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
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 0
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: image_provider.ExactAssetImage.prototype,
        [ExactAssetImage_package]: "flutter_gallery_assets",
        [ExactAssetImage_bundle]: null,
        [ExactAssetImage_scale]: 1,
        [ExactAssetImage_assetName]: "people/square/trevor.png"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: circle_avatar.CircleAvatar.prototype,
        [Widget_key]: null,
        [CircleAvatar_maxRadius]: null,
        [CircleAvatar_minRadius]: null,
        [CircleAvatar_radius]: 20,
        [CircleAvatar_backgroundImage]: C90 || CT.C90,
        [CircleAvatar_foregroundColor]: null,
        [CircleAvatar_backgroundColor]: null,
        [CircleAvatar_child]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 4
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 4
      });
    },
    get C97() {
      return C97 = dart.const({
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
        [TextStyle_fontWeight]: C98 || CT.C98,
        [TextStyle_fontSize]: 18,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Merriweather",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C25 || CT.C25,
        [TextStyle_inherit]: true
      });
    },
    get C96() {
      return C96 = dart.const({
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
        [Text_style]: C97 || CT.C97,
        [Text_textSpan]: null,
        [Text_data]: "Connor Eghan"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 140,
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
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 51,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 169,
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
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 109,
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
        [_Location_column]: 24,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 107,
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
        [_Location_column]: 15,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 9,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 92,
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
        [_Location_column]: 14,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 90,
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
        [_Location_column]: 12,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/fortnightly/fortnightly.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4284900966.0
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C133() {
      return C133 = dart.const({
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
        [TextStyle_fontWeight]: C134 || CT.C134,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "LibreFranklin",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C25 || CT.C25,
        [TextStyle_inherit]: true
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C3;
  let C2;
  let C7;
  let C6;
  let C5;
  let C10;
  let C9;
  let C8;
  let C13;
  let C12;
  let C11;
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  fortnightly.FortnightlyDemo = class FortnightlyDemo extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Fortnightly Demo", theme: fortnightly._fortnightlyTheme, home: new scaffold.Scaffold.new({body: new basic.Stack.new({children: JSArrayOfWidget().of([new fortnightly.FruitPage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new safe_area.SafeArea.new({child: new fortnightly.ShortAppBar.new({onBackPressed: dart.fn(() => {
                    navigator.Navigator.pop(core.Object, context);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
  };
  (fortnightly.FortnightlyDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    fortnightly.FortnightlyDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fortnightly.FortnightlyDemo.prototype;
  dart.addTypeTests(fortnightly.FortnightlyDemo);
  dart.setMethodSignature(fortnightly.FortnightlyDemo, () => ({
    __proto__: dart.getMethods(fortnightly.FortnightlyDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fortnightly.FortnightlyDemo, "package:flutter_gallery/demo/fortnightly/fortnightly.dart");
  dart.defineLazy(fortnightly.FortnightlyDemo, {
    /*fortnightly.FortnightlyDemo.routeName*/get routeName() {
      return "/fortnightly";
    }
  });
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C21;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  let C22;
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C20;
  const BeveledRectangleBorder_borderRadius = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.borderRadius");
  const _name = dart.privateName(borders, "_name");
  let C24;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C25;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C23;
  const BeveledRectangleBorder_side = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.side");
  let C19;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C27;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C26;
  let C30;
  let C31;
  let C32;
  let C29;
  let C28;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C33;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C39;
  let C38;
  let C43;
  let C44;
  let C45;
  let C46;
  let C42;
  let C41;
  let C49;
  let C50;
  let C51;
  let C48;
  let C47;
  const ShortAppBar_onBackPressed = dart.privateName(fortnightly, "ShortAppBar.onBackPressed");
  fortnightly.ShortAppBar = class ShortAppBar extends framework.StatelessWidget {
    get onBackPressed() {
      return this[onBackPressed$];
    }
    set onBackPressed(value) {
      super.onBackPressed = value;
    }
    build(context) {
      return new basic.SizedBox.new({width: 96.0, height: 50.0, child: new material.Material.new({color: theme.Theme.of(context).colorScheme.surface, elevation: 4.0, shape: C19 || CT.C19, child: new basic.Row.new({children: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C26 || CT.C26, tooltip: "Back", onPressed: this.onBackPressed, $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), C33 || CT.C33, new image.Image.asset("logos/fortnightly/fortnightly_logo.png", {package: "flutter_gallery_assets", $creationLocationd_0dea112b090073317d4: C34 || CT.C34})]), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
  };
  (fortnightly.ShortAppBar.new = function(opts) {
    let onBackPressed = opts && 'onBackPressed' in opts ? opts.onBackPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onBackPressed$] = onBackPressed;
    fortnightly.ShortAppBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fortnightly.ShortAppBar.prototype;
  dart.addTypeTests(fortnightly.ShortAppBar);
  const onBackPressed$ = ShortAppBar_onBackPressed;
  dart.setMethodSignature(fortnightly.ShortAppBar, () => ({
    __proto__: dart.getMethods(fortnightly.ShortAppBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fortnightly.ShortAppBar, "package:flutter_gallery/demo/fortnightly/fortnightly.dart");
  dart.setFieldSignature(fortnightly.ShortAppBar, () => ({
    __proto__: dart.getFields(fortnightly.ShortAppBar.__proto__),
    onBackPressed: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  const BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  const BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  const BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  let C52;
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C61;
  let C59;
  let C58;
  let C62;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C63;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C75;
  let C73;
  let C72;
  let C78;
  let C77;
  let C76;
  let C79;
  let C82;
  let C83;
  let C81;
  let C80;
  let C86;
  let C87;
  let C85;
  let C84;
  let C88;
  const CircleAvatar_maxRadius = dart.privateName(circle_avatar, "CircleAvatar.maxRadius");
  const CircleAvatar_minRadius = dart.privateName(circle_avatar, "CircleAvatar.minRadius");
  const CircleAvatar_radius = dart.privateName(circle_avatar, "CircleAvatar.radius");
  const ExactAssetImage_package = dart.privateName(image_provider, "ExactAssetImage.package");
  const ExactAssetImage_bundle = dart.privateName(image_provider, "ExactAssetImage.bundle");
  const ExactAssetImage_scale = dart.privateName(image_provider, "ExactAssetImage.scale");
  const ExactAssetImage_assetName = dart.privateName(image_provider, "ExactAssetImage.assetName");
  let C90;
  const CircleAvatar_backgroundImage = dart.privateName(circle_avatar, "CircleAvatar.backgroundImage");
  const CircleAvatar_foregroundColor = dart.privateName(circle_avatar, "CircleAvatar.foregroundColor");
  const CircleAvatar_backgroundColor = dart.privateName(circle_avatar, "CircleAvatar.backgroundColor");
  const CircleAvatar_child = dart.privateName(circle_avatar, "CircleAvatar.child");
  let C89;
  let C93;
  let C94;
  let C92;
  let C91;
  let C95;
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
  let C98;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C97;
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C96;
  let C101;
  let C100;
  let C99;
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
  let C119;
  let C118;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C130;
  let C129;
  fortnightly.FruitPage = class FruitPage extends framework.StatelessWidget {
    build(context) {
      let textTheme = theme.Theme.of(context).primaryTextTheme;
      return new single_child_scroll_view.SingleChildScrollView.new({child: new safe_area.SafeArea.new({top: false, child: new container.Container.new({color: theme.Theme.of(context).colorScheme.surface, child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({constraints: C52 || CT.C52, child: new image.Image.asset("food/fruits.png", {package: "flutter_gallery_assets", fit: box_fit.BoxFit.fitWidth, $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), C62 || CT.C62, new basic.Padding.new({padding: C63 || CT.C63, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("US", {style: textTheme.overline, $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), new text.Text.new(" ¬ ", {style: textTheme.overline.apply({color: textTheme.display3.color}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), new text.Text.new("CULTURE", {style: textTheme.overline, $creationLocationd_0dea112b090073317d4: C72 || CT.C72})]), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), C79 || CT.C79, new text.Text.new("Quince for Wisdom, Persimmon for Luck, Pomegranate for Love", {style: textTheme.display1, $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), C79 || CT.C79, new text.Text.new("How these crazy fruits sweetened our hearts, relationships," + "and puffed pastries", {style: textTheme.body1, $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), new basic.Padding.new({padding: C88 || CT.C88, child: new basic.Row.new({children: JSArrayOfWidget().of([C89 || CT.C89, C33 || CT.C33, new text.Text.new("by", {style: textTheme.display3, $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), C95 || CT.C95, C96 || CT.C96]), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), new text.Text.new(dart.str(fortnightly.FruitPage.paragraph1) + "\n\n" + dart.str(fortnightly.FruitPage.paragraph2), {style: textTheme.body2, $creationLocationd_0dea112b090073317d4: C106 || CT.C106})]), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114})]), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129});
    }
  };
  (fortnightly.FruitPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    fortnightly.FruitPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fortnightly.FruitPage.prototype;
  dart.addTypeTests(fortnightly.FruitPage);
  dart.setMethodSignature(fortnightly.FruitPage, () => ({
    __proto__: dart.getMethods(fortnightly.FruitPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fortnightly.FruitPage, "package:flutter_gallery/demo/fortnightly/fortnightly.dart");
  dart.defineLazy(fortnightly.FruitPage, {
    /*fortnightly.FruitPage.paragraph1*/get paragraph1() {
      return "Have you ever held a quince? It's strange;\n covered in a fuzz somewhere between peach skin and a spider web. And it's\n hard as soft lumber. You'd be forgiven for thinking it's veneered Larch-wood.\n But inhale the aroma and you'll instantly know you have something wonderful.\n Its scent can fill a room for days. And all this before you've even cooked it.\n"[$replaceAll]("\n", "");
    },
    /*fortnightly.FruitPage.paragraph2*/get paragraph2() {
      return "Pomegranates on the other hand have become\n almost ubiquitous. You can find its juice in any bodega, Walmart, and even some\n gas stations. But at what cost? The pomegranate juice craze of the aughts made\n \"megafarmers\" Lynda and Stewart Resnick billions. Unfortunately, it takes a lot\n of water to make that much pomegranate juice. Water the Resnicks get from their\n majority stake in the Kern Water Bank. How did one family come to hold control\n over water meant for the whole central valley of California? The story will shock you.\n"[$replaceAll]("\n", "");
    }
  });
  let C132;
  let C134;
  let C133;
  fortnightly._buildFortnightlyTheme = function _buildFortnightlyTheme() {
    let base = theme_data.ThemeData.light();
    return base.copyWith({primaryTextTheme: fortnightly._buildTextTheme(base.primaryTextTheme), scaffoldBackgroundColor: colors.Colors.white});
  };
  fortnightly._buildTextTheme = function _buildTextTheme(base) {
    let theme = base.apply({bodyColor: colors.Colors.black});
    theme = theme.apply({displayColor: colors.Colors.black});
    theme = theme.copyWith({display1: base.display1.copyWith({fontFamily: "Merriweather", fontStyle: ui.FontStyle.italic, fontSize: 28.0, fontWeight: ui.FontWeight.w800, color: colors.Colors.black, height: 0.88}), display3: base.display3.copyWith({fontFamily: "LibreFranklin", fontSize: 18.0, fontWeight: ui.FontWeight.w500, color: colors.Colors.black.withAlpha(153)}), headline: base.headline.copyWith({fontWeight: ui.FontWeight.w500}), body1: base.body1.copyWith({fontFamily: "Merriweather", fontSize: 14.0, fontWeight: ui.FontWeight.w300, color: C132 || CT.C132, height: 1.11}), body2: base.body2.copyWith({fontFamily: "Merriweather", fontSize: 16.0, fontWeight: ui.FontWeight.w300, color: C132 || CT.C132, height: 1.4, letterSpacing: 0.25}), overline: C133 || CT.C133});
    return theme;
  };
  dart.defineLazy(fortnightly, {
    /*fortnightly._fortnightlyTheme*/get _fortnightlyTheme() {
      return fortnightly._buildFortnightlyTheme();
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/fortnightly/fortnightly", {
    "package:flutter_gallery/demo/fortnightly/fortnightly.dart": fortnightly
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fortnightly.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,iCACE,2BACA,qCACD,iCACE,+BACc,sBAChB,sFACA,mCACS,gDACU;AACS,oBAAZ,qCAAI,OAAO;;IAQrC;;;;;;EACF;;;;;;;;MAvBsB,qCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4BV;;;;;;UAGO;AACxB,YAAO,gCACE,cACC,aACD,kCACQ,AAAY,AAAY,eAArB,OAAO,kCACZ,kCAIJ,6BACa,sBAChB,8DAEW,mBACE,4FAGP,sBACJ,oDACS;IAMrB;;;QA/ByB;;;AAAnB;;EAAmC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAoDf;AACR,sBAAkB,AAAY,eAAT,OAAO;AAE5C,YAAO,gEACE,iCACA,cACE,oCACQ,AAAY,AAAY,eAArB,OAAO,8BAChB,gCACa,sBAChB,gEAEe,sBACX,6BACS,+BACG,0JAIhB,sDAES,0CACkC,yCACrB,sBAChB,6BACoB,sBAChB,kBACE,cACO,AAAU,SAAD,oEAElB,kBACE,eAEO,AAAU,AAAS,SAAV,wBAAuB,AAAU,AAAS,SAAV,4EAElD,kBACE,mBACO,AAAU,SAAD,8IAKtB,kBACE,uEACO,AAAU,SAAD,mFAGlB,kBACE,gEACI,+BACG,AAAU,SAAD,iEAElB,sDAES,6BACa,oDAShB,kBACE,cACO,AAAU,SAAD,wNAexB,kBAC8B,SAA1B,oCAAU,kBAAK,2CACV,AAAU,SAAD;IAUpC;;;;;;EACF;;;;;;;;MA/GsB,gCAAU;YAAG,AAK/B,yXAAW,MAAM;;MAEC,gCAAU;YAAG,AAO/B,gjBAAW,MAAM;;;;;;;AAsGH,eAAiB;AACjC,UAAO,AAAK,KAAD,6BACS,4BAAgB,AAAK,IAAD,6CACN;EAEpC;yDAEoC;AACxB,gBAAQ,AAAK,IAAD,mBAAyB;AACA,IAA/C,QAAQ,AAAM,KAAD,sBAA4B;AAuCxC,IArCD,QAAQ,AAAM,KAAD,qBACD,AAAK,AAAS,IAAV,gCACA,2BACS,+BACX,kBACa,2BACT,6BACN,kBAEA,AAAK,AAAS,IAAV,gCACA,2BACF,kBACa,2BACT,AAAM,8BAAU,kBAEtB,AAAK,AAAS,IAAV,gCAA0C,6BACjD,AAAK,AAAM,IAAP,6BACG,0BACF,kBACa,oDAEf,eAEH,AAAK,AAAM,IAAP,6BACG,0BACF,kBACa,oDAEf,oBACO;AAUnB,UAAO,MAAK;EACd;;MAtDgB,6BAAiB;YAAG","file":"fortnightly.ddc.js"}');
  // Exports:
  return {
    demo__fortnightly__fortnightly: fortnightly
  };
});

//# sourceMappingURL=fortnightly.ddc.js.map
