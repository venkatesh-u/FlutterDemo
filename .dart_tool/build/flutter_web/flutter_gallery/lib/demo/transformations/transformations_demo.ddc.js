define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_gallery/demo/transformations/transformations_demo_board', 'packages/flutter/material', 'packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/demo/transformations/transformations_demo_edit_board_point', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_gallery__demo__transformations__transformations_demo_board, packages__flutter__material, packages__flutter_gallery__demo__transformations__transformations_demo_gesture_transformable, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__demo__transformations__transformations_demo_edit_board_point, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const transformations_demo_board = packages__flutter_gallery__demo__transformations__transformations_demo_board.demo__transformations__transformations_demo_board;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const dialog = packages__flutter__material.src__material__dialog;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const theme = packages__flutter__material.src__material__theme;
  const bottom_sheet = packages__flutter__material.src__material__bottom_sheet;
  const transformations_demo_gesture_transformable = packages__flutter_gallery__demo__transformations__transformations_demo_gesture_transformable.demo__transformations__transformations_demo_gesture_transformable;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const transformations_demo_edit_board_point = packages__flutter_gallery__demo__transformations__transformations_demo_edit_board_point.demo__transformations__transformations_demo_edit_board_point;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const transformations_demo = Object.create(dart.library);
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndBoxConstraintsToGestureTransformable = () => (BuildContextAndBoxConstraintsToGestureTransformable = dart.constFn(dart.fnType(transformations_demo_gesture_transformable.GestureTransformable, [framework.BuildContext, box.BoxConstraints])))();
  let ColorToNull = () => (ColorToNull = dart.constFn(dart.fnType(core.Null, [ui.Color])))();
  let BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  let BoardPointTovoid = () => (BoardPointTovoid = dart.constFn(dart.fnType(dart.void, [transformations_demo_board.BoardPoint])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
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
        [Text_data]: "2D Tranformations"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59527
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C2 || CT.C2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 15,
        [_Location_line]: 67,
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
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reset",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onResetEnd",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "boundaryRect",
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialTranslation",
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
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
        [Text_data]: "2D Transformations"
      });
    },
    get C34() {
      return C34 = dart.const({
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
        [Text_data]: "Tap to edit hex tiles, and use gestures to move around the scene:\n"
      });
    },
    get C35() {
      return C35 = dart.const({
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
        [Text_data]: "- Drag to pan."
      });
    },
    get C36() {
      return C36 = dart.const({
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
        [Text_data]: "- Pinch to zoom."
      });
    },
    get C37() {
      return C37 = dart.const({
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
        [Text_data]: "- Rotate with two fingers."
      });
    },
    get C38() {
      return C38 = dart.const({
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
        [Text_data]: "\nYou can always press the home button to return to the starting orientation!"
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], framework.Widget);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 94,
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
        [_Location_column]: 16,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
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
        [Text_data]: "OK"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 7,
        [_Location_line]: 102,
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
        [_Location_column]: 12,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59530
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C55 || CT.C55
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 12
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "boardPoint",
        [_Location_column]: 15,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onColorSelection",
        [_Location_column]: 15,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58313
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C74 || CT.C74
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 7,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo.dart"
      });
    }
  });
  transformations_demo.TransformationsDemo = class TransformationsDemo extends framework.StatefulWidget {
    createState() {
      return new transformations_demo._TransformationsDemoState.new();
    }
  };
  (transformations_demo.TransformationsDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    transformations_demo.TransformationsDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = transformations_demo.TransformationsDemo.prototype;
  dart.addTypeTests(transformations_demo.TransformationsDemo);
  dart.setMethodSignature(transformations_demo.TransformationsDemo, () => ({
    __proto__: dart.getMethods(transformations_demo.TransformationsDemo.__proto__),
    createState: dart.fnType(transformations_demo._TransformationsDemoState, [])
  }));
  dart.setLibraryUri(transformations_demo.TransformationsDemo, "package:flutter_gallery/demo/transformations/transformations_demo.dart");
  dart.defineLazy(transformations_demo.TransformationsDemo, {
    /*transformations_demo.TransformationsDemo.routeName*/get routeName() {
      return "/transformations";
    }
  });
  const _reset = dart.privateName(transformations_demo, "_reset");
  const _board = dart.privateName(transformations_demo, "_board");
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
  let C0;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C2;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C13;
  let C12;
  const _onTapUp = dart.privateName(transformations_demo, "_onTapUp");
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C16;
  let C15;
  let C26;
  let C25;
  let C24;
  let C29;
  let C30;
  let C31;
  let C28;
  let C27;
  let C32;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C33;
  let C41;
  let C42;
  let C43;
  let C40;
  let C39;
  let C44;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  let C55;
  let C54;
  let C58;
  let C59;
  let C60;
  let C61;
  let C57;
  let C56;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C62;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C70;
  let C71;
  let C72;
  let C68;
  let C67;
  let C74;
  let C73;
  let C77;
  let C78;
  let C79;
  let C76;
  let C75;
  transformations_demo._TransformationsDemoState = class _TransformationsDemoState extends framework.State$(transformations_demo.TransformationsDemo) {
    build(context) {
      let painter = new transformations_demo.BoardPainter.new({board: this[_board]});
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C0 || CT.C0, actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C1 || CT.C1, tooltip: "Help", onPressed: dart.fn(() => {
                dialog.showDialog(basic.Column, {context: context, builder: dart.fn(context => this.instructionDialog, BuildContextToWidget())});
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3})]), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), body: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
            let size = new ui.Size.new(constraints.maxWidth, constraints.maxHeight);
            let visibleSize = new ui.Size.new(dart.notNull(size.width) * 3, dart.notNull(size.height) * 2);
            return new transformations_demo_gesture_transformable.GestureTransformable.new({reset: this[_reset], onResetEnd: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_reset] = false;
                }, VoidToNull()));
              }, VoidToNull()), child: new basic.CustomPaint.new({painter: painter, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), boundaryRect: new ui.Rect.fromLTWH(-dart.notNull(visibleSize.width) / 2, -dart.notNull(visibleSize.height) / 2, visibleSize.width, visibleSize.height), initialTranslation: new ui.Offset.new(dart.notNull(size.width) / 2, dart.notNull(size.height) / 2), onTapUp: dart.bind(this, _onTapUp), size: size, $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
          }, BuildContextAndBoxConstraintsToGestureTransformable()), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), floatingActionButton: this[_board].selected == null ? this.resetButton : this.editButton, $creationLocationd_0dea112b090073317d4: C27 || CT.C27});
    }
    get instructionDialog() {
      return new dialog.AlertDialog.new({title: C32 || CT.C32, content: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisSize: flex.MainAxisSize.min, children: C33 || CT.C33, $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: C44 || CT.C44, onPressed: dart.fn(() => {
              navigator.Navigator.of(this.context).pop(core.Object);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C45 || CT.C45})]), $creationLocationd_0dea112b090073317d4: C49 || CT.C49});
    }
    get resetButton() {
      return new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
          this.setState(dart.fn(() => {
            this[_reset] = true;
          }, VoidToNull()));
        }, VoidToNull()), tooltip: "Reset Transform", backgroundColor: theme.Theme.of(this.context).primaryColor, child: C54 || CT.C54, $creationLocationd_0dea112b090073317d4: C56 || CT.C56});
    }
    get editButton() {
      return new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
          if (this[_board].selected == null) {
            return;
          }
          bottom_sheet.showModalBottomSheet(framework.Widget, {context: this.context, builder: dart.fn(context => new container.Container.new({width: 1 / 0, height: 150.0, padding: C62 || CT.C62, child: new transformations_demo_edit_board_point.EditBoardPoint.new({boardPoint: this[_board].selected, onColorSelection: dart.fn(color => {
                  this.setState(dart.fn(() => {
                    this[_board] = this[_board].copyWithBoardPointColor(this[_board].selected, color);
                    navigator.Navigator.pop(core.Object, context);
                  }, VoidToNull()));
                }, ColorToNull()), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), BuildContextToContainer())});
        }, VoidToNull()), tooltip: "Edit Tile", child: C73 || CT.C73, $creationLocationd_0dea112b090073317d4: C75 || CT.C75});
    }
    [_onTapUp](details) {
      let scenePoint = details.globalPosition;
      let boardPoint = this[_board].pointToBoardPoint(scenePoint);
      this.setState(dart.fn(() => {
        this[_board] = this[_board].copyWithSelected(boardPoint);
      }, VoidToNull()));
    }
  };
  (transformations_demo._TransformationsDemoState.new = function() {
    this[_reset] = false;
    this[_board] = new transformations_demo_board.Board.new({boardRadius: 8, hexagonRadius: 32, hexagonMargin: 1});
    transformations_demo._TransformationsDemoState.__proto__.new.call(this);
    ;
  }).prototype = transformations_demo._TransformationsDemoState.prototype;
  dart.addTypeTests(transformations_demo._TransformationsDemoState);
  dart.setMethodSignature(transformations_demo._TransformationsDemoState, () => ({
    __proto__: dart.getMethods(transformations_demo._TransformationsDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_onTapUp]: dart.fnType(dart.void, [tap.TapUpDetails])
  }));
  dart.setGetterSignature(transformations_demo._TransformationsDemoState, () => ({
    __proto__: dart.getGetters(transformations_demo._TransformationsDemoState.__proto__),
    instructionDialog: framework.Widget,
    resetButton: floating_action_button.FloatingActionButton,
    editButton: floating_action_button.FloatingActionButton
  }));
  dart.setLibraryUri(transformations_demo._TransformationsDemoState, "package:flutter_gallery/demo/transformations/transformations_demo.dart");
  dart.setFieldSignature(transformations_demo._TransformationsDemoState, () => ({
    __proto__: dart.getFields(transformations_demo._TransformationsDemoState.__proto__),
    [_reset]: dart.fieldType(core.bool),
    [_board]: dart.fieldType(transformations_demo_board.Board)
  }));
  dart.defineLazy(transformations_demo._TransformationsDemoState, {
    /*transformations_demo._TransformationsDemoState._kHexagonRadius*/get _kHexagonRadius() {
      return 32;
    },
    /*transformations_demo._TransformationsDemoState._kHexagonMargin*/get _kHexagonMargin() {
      return 1;
    },
    /*transformations_demo._TransformationsDemoState._kBoardRadius*/get _kBoardRadius() {
      return 8;
    }
  });
  const BoardPainter_board = dart.privateName(transformations_demo, "BoardPainter.board");
  transformations_demo.BoardPainter = class BoardPainter extends custom_paint.CustomPainter {
    get board() {
      return this[board$];
    }
    set board(value) {
      super.board = value;
    }
    paint(canvas, size) {
      const drawBoardPoint = boardPoint => {
        let color = boardPoint.color.withOpacity(dart.equals(this.board.selected, boardPoint) ? 0.2 : 1.0);
        let vertices = this.board.getVerticesForBoardPoint(boardPoint, color);
        canvas.drawVertices(vertices, ui.BlendMode.color, new ui.Paint.new());
      };
      dart.fn(drawBoardPoint, BoardPointTovoid());
      this.board.forEach(drawBoardPoint);
    }
    shouldRepaint(oldDelegate) {
      transformations_demo.BoardPainter._check(oldDelegate);
      return !dart.equals(oldDelegate.board, this.board);
    }
  };
  (transformations_demo.BoardPainter.new = function(opts) {
    let board = opts && 'board' in opts ? opts.board : null;
    this[board$] = board;
    transformations_demo.BoardPainter.__proto__.new.call(this);
    ;
  }).prototype = transformations_demo.BoardPainter.prototype;
  dart.addTypeTests(transformations_demo.BoardPainter);
  const board$ = BoardPainter_board;
  dart.setMethodSignature(transformations_demo.BoardPainter, () => ({
    __proto__: dart.getMethods(transformations_demo.BoardPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(transformations_demo.BoardPainter, "package:flutter_gallery/demo/transformations/transformations_demo.dart");
  dart.setFieldSignature(transformations_demo.BoardPainter, () => ({
    __proto__: dart.getFields(transformations_demo.BoardPainter.__proto__),
    board: dart.finalFieldType(transformations_demo_board.Board)
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/transformations/transformations_demo", {
    "package:flutter_gallery/demo/transformations/transformations_demo.dart": transformations_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["transformations_demo.dart"],"names":[],"mappings":"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","file":"transformations_demo.ddc.js"}');
  // Exports:
  return {
    demo__transformations__transformations_demo: transformations_demo
  };
});

//# sourceMappingURL=transformations_demo.ddc.js.map
