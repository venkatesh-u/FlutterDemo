define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme$ = packages__flutter__material.src__material__theme;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const card = packages__flutter__material.src__material__card;
  const material = packages__flutter__material.src__material__material;
  const tooltip = packages__flutter__material.src__material__tooltip;
  const divider = packages__flutter__material.src__material__divider;
  const colors = packages__flutter__material.src__material__colors;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const animated_icons = packages__flutter__material.src__material__animated_icons;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const page_storage = packages__flutter__src__widgets__actions.src__widgets__page_storage;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const backdrop_demo = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $_get = dartx._get;
  let PageStorageKeyOfCategory = () => (PageStorageKeyOfCategory = dart.constFn(page_storage.PageStorageKey$(backdrop_demo.Category)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringToColumn = () => (StringToColumn = dart.constFn(dart.fnType(basic.Column, [core.String])))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let CategoryToMaterial = () => (CategoryToMaterial = dart.constFn(dart.fnType(material.Material, [backdrop_demo.Category])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 64,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 64
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 25,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 25,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 25,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 132,
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
        [_Location_column]: 32,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 117,
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
        [_Location_column]: 15,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 24,
        [SizedBox_width]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 115,
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
        [_Location_column]: 18,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 16,
        [Radius_x]: 16
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C41 || CT.C41,
        [BorderRadius_bottomLeft]: C41 || CT.C41,
        [BorderRadius_topRight]: C42 || CT.C42,
        [BorderRadius_topLeft]: C42 || CT.C42
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 0,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 16
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "message",
        [_Location_column]: 19,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 191,
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
        [_Location_column]: 24,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 13,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragUpdate",
        [_Location_column]: 13,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragEnd",
        [_Location_column]: 13,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 1
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 20,
        [_Location_line]: 197,
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
        [_Location_column]: 11,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 177,
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
        [_Location_column]: 14,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 7,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 7,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C79 || CT.C79,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C80() {
      return C80 = dart.const({
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
        [Text_data]: "Select a Category"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
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
        [Text_data]: "Asset Viewer"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 227,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 7,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 7,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: stack.RelativeRect.prototype,
        [RelativeRect_bottom]: 0,
        [RelativeRect_right]: 0,
        [RelativeRect_top]: 0,
        [RelativeRect_left]: 0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C103 || CT.C103,
        [BorderRadius_bottomLeft]: C103 || CT.C103,
        [BorderRadius_topRight]: C103 || CT.C103,
        [BorderRadius_topLeft]: C103 || CT.C103
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C105 || CT.C105,
        [BorderSide_width]: 0,
        [BorderSide_color]: C106 || CT.C106
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [RoundedRectangleBorder_borderRadius]: C102 || CT.C102,
        [RoundedRectangleBorder_side]: C104 || CT.C104
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 346,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 11,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 345,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 338,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 368,
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
        [_Location_column]: 22,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 366,
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
        [_Location_column]: 20,
        [_Location_line]: 364,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconColor",
        [_Location_column]: 13,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 13,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedColor",
        [_Location_column]: 13,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 360,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 378,
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
        [_Location_column]: 22,
        [_Location_line]: 378,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "category",
        [_Location_column]: 35,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 379,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragUpdate",
        [_Location_column]: 15,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragEnd",
        [_Location_column]: 15,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144, C145 || CT.C145, C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rect",
        [_Location_column]: 13,
        [_Location_line]: 373,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 372,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157, C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C156 || CT.C156,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listenable",
        [_Location_column]: 11,
        [_Location_line]: 393,
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
        [_Location_column]: 16,
        [_Location_line]: 392,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticLabel",
        [_Location_column]: 15,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "progress",
        [_Location_column]: 15,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165, C166 || CT.C166, C167 || CT.C167], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 398,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 397,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 398,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170, C171 || CT.C171], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 396,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 390,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 406,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 406,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 389,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/material/backdrop_demo.dart"
      });
    },
    get C186() {
      return C186 = dart.constList(["products/belt.png", "products/earrings.png", "products/backpack.png", "products/hat.png", "products/scarf.png", "products/sunnies.png"], core.String);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: backdrop_demo.Category.prototype,
        [Category_assets]: C186 || CT.C186,
        [Category_title]: "Accessories"
      });
    },
    get C188() {
      return C188 = dart.constList(["products/backpack.png", "products/cup.png", "products/napkins.png", "products/top.png"], core.String);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: backdrop_demo.Category.prototype,
        [Category_assets]: C188 || CT.C188,
        [Category_title]: "Blue"
      });
    },
    get C190() {
      return C190 = dart.constList(["products/jacket.png", "products/jumper.png", "products/scarf.png", "products/sweater.png", "products/sweats.png"], core.String);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: backdrop_demo.Category.prototype,
        [Category_assets]: C190 || CT.C190,
        [Category_title]: "Cold Weather"
      });
    },
    get C192() {
      return C192 = dart.constList(["products/cup.png", "products/napkins.png", "products/planters.png", "products/table.png", "products/teaset.png"], core.String);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: backdrop_demo.Category.prototype,
        [Category_assets]: C192 || CT.C192,
        [Category_title]: "Home"
      });
    },
    get C194() {
      return C194 = dart.constList(["products/jumper.png", "products/shirt.png", "products/sweater.png", "products/top.png"], core.String);
    },
    get C193() {
      return C193 = dart.const({
        __proto__: backdrop_demo.Category.prototype,
        [Category_assets]: C194 || CT.C194,
        [Category_title]: "Tops"
      });
    },
    get C196() {
      return C196 = dart.constList(["products/backpack.png", "products/belt.png", "products/cup.png", "products/dress.png", "products/earrings.png", "products/flatwear.png", "products/hat.png", "products/jacket.png", "products/jumper.png", "products/napkins.png", "products/planters.png", "products/scarf.png", "products/shirt.png", "products/sunnies.png", "products/sweater.png", "products/sweats.png", "products/table.png", "products/teaset.png", "products/top.png"], core.String);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: backdrop_demo.Category.prototype,
        [Category_assets]: C196 || CT.C196,
        [Category_title]: "Everything"
      });
    },
    get C184() {
      return C184 = dart.constList([C185 || CT.C185, C187 || CT.C187, C189 || CT.C189, C191 || CT.C191, C193 || CT.C193, C195 || CT.C195], backdrop_demo.Category);
    }
  });
  const Category_title = dart.privateName(backdrop_demo, "Category.title");
  const Category_assets = dart.privateName(backdrop_demo, "Category.assets");
  backdrop_demo.Category = class Category extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get assets() {
      return this[assets$];
    }
    set assets(value) {
      super.assets = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(\"" + dart.str(this.title) + "\")";
    }
  };
  (backdrop_demo.Category.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let assets = opts && 'assets' in opts ? opts.assets : null;
    this[title$] = title;
    this[assets$] = assets;
    ;
  }).prototype = backdrop_demo.Category.prototype;
  dart.addTypeTests(backdrop_demo.Category);
  const title$ = Category_title;
  const assets$ = Category_assets;
  dart.setLibraryUri(backdrop_demo.Category, "package:flutter_gallery/demo/material/backdrop_demo.dart");
  dart.setFieldSignature(backdrop_demo.Category, () => ({
    __proto__: dart.getFields(backdrop_demo.Category.__proto__),
    title: dart.finalFieldType(core.String),
    assets: dart.finalFieldType(core.List$(core.String))
  }));
  dart.defineExtensionMethods(backdrop_demo.Category, ['toString']);
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
  let C5;
  let C2;
  let C1;
  let C6;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C23;
  let C20;
  let C19;
  let C26;
  let C25;
  let C24;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C27;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C35;
  let C36;
  let C33;
  let C32;
  let C39;
  let C38;
  let C37;
  const CategoryView_category = dart.privateName(backdrop_demo, "CategoryView.category");
  backdrop_demo.CategoryView = class CategoryView extends framework.StatelessWidget {
    get category() {
      return this[category$];
    }
    set category(value) {
      super.category = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new scrollbar.Scrollbar.new({child: new scroll_view.ListView.new({key: new (PageStorageKeyOfCategory()).new(this.category), padding: C0 || CT.C0, children: this.category.assets[$map](framework.Widget, dart.fn(asset => new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new card.Card.new({child: new container.Container.new({width: 144.0, alignment: alignment.Alignment.center, child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset(asset, {package: "flutter_gallery_assets", fit: box_fit.BoxFit.contain, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new container.Container.new({padding: C6 || CT.C6, alignment: alignment.AlignmentDirectional.center, child: new text.Text.new(asset, {style: theme.textTheme.caption, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), C27 || CT.C27]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), StringToColumn()))[$toList](), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
    }
  };
  (backdrop_demo.CategoryView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let category = opts && 'category' in opts ? opts.category : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[category$] = category;
    backdrop_demo.CategoryView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop_demo.CategoryView.prototype;
  dart.addTypeTests(backdrop_demo.CategoryView);
  const category$ = CategoryView_category;
  dart.setMethodSignature(backdrop_demo.CategoryView, () => ({
    __proto__: dart.getMethods(backdrop_demo.CategoryView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backdrop_demo.CategoryView, "package:flutter_gallery/demo/material/backdrop_demo.dart");
  dart.setFieldSignature(backdrop_demo.CategoryView, () => ({
    __proto__: dart.getFields(backdrop_demo.CategoryView.__proto__),
    category: dart.finalFieldType(backdrop_demo.Category)
  }));
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C41;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  let C42;
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C40;
  const EdgeInsetsDirectional_bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  const EdgeInsetsDirectional_end = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  const EdgeInsetsDirectional_top = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  const EdgeInsetsDirectional_start = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  let C43;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C55;
  let C56;
  let C57;
  let C53;
  let C52;
  let C60;
  let C61;
  let C62;
  let C63;
  let C64;
  let C59;
  let C58;
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_thickness = dart.privateName(divider, "Divider.thickness");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C65;
  let C68;
  let C67;
  let C66;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C77;
  let C74;
  let C73;
  const BackdropPanel_onTap = dart.privateName(backdrop_demo, "BackdropPanel.onTap");
  const BackdropPanel_onVerticalDragUpdate = dart.privateName(backdrop_demo, "BackdropPanel.onVerticalDragUpdate");
  const BackdropPanel_onVerticalDragEnd = dart.privateName(backdrop_demo, "BackdropPanel.onVerticalDragEnd");
  const BackdropPanel_title = dart.privateName(backdrop_demo, "BackdropPanel.title");
  const BackdropPanel_child = dart.privateName(backdrop_demo, "BackdropPanel.child");
  backdrop_demo.BackdropPanel = class BackdropPanel extends framework.StatelessWidget {
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onVerticalDragUpdate() {
      return this[onVerticalDragUpdate$];
    }
    set onVerticalDragUpdate(value) {
      super.onVerticalDragUpdate = value;
    }
    get onVerticalDragEnd() {
      return this[onVerticalDragEnd$];
    }
    set onVerticalDragEnd(value) {
      super.onVerticalDragEnd = value;
    }
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new material.Material.new({elevation: 2.0, borderRadius: C40 || CT.C40, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onVerticalDragUpdate: this.onVerticalDragUpdate, onVerticalDragEnd: this.onVerticalDragEnd, onTap: this.onTap, child: new container.Container.new({height: 48.0, padding: C43 || CT.C43, alignment: alignment.AlignmentDirectional.centerStart, child: new text.DefaultTextStyle.new({style: theme.textTheme.subhead, child: new tooltip.Tooltip.new({message: "Tap to dismiss", child: this.title, $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), C65 || CT.C65, new basic.Expanded.new({child: this.child, $creationLocationd_0dea112b090073317d4: C66 || CT.C66})]), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73});
    }
  };
  (backdrop_demo.BackdropPanel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onVerticalDragUpdate = opts && 'onVerticalDragUpdate' in opts ? opts.onVerticalDragUpdate : null;
    let onVerticalDragEnd = opts && 'onVerticalDragEnd' in opts ? opts.onVerticalDragEnd : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onTap$] = onTap;
    this[onVerticalDragUpdate$] = onVerticalDragUpdate;
    this[onVerticalDragEnd$] = onVerticalDragEnd;
    this[title$0] = title;
    this[child$] = child;
    backdrop_demo.BackdropPanel.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop_demo.BackdropPanel.prototype;
  dart.addTypeTests(backdrop_demo.BackdropPanel);
  const onTap$ = BackdropPanel_onTap;
  const onVerticalDragUpdate$ = BackdropPanel_onVerticalDragUpdate;
  const onVerticalDragEnd$ = BackdropPanel_onVerticalDragEnd;
  const title$0 = BackdropPanel_title;
  const child$ = BackdropPanel_child;
  dart.setMethodSignature(backdrop_demo.BackdropPanel, () => ({
    __proto__: dart.getMethods(backdrop_demo.BackdropPanel.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backdrop_demo.BackdropPanel, "package:flutter_gallery/demo/material/backdrop_demo.dart");
  dart.setFieldSignature(backdrop_demo.BackdropPanel, () => ({
    __proto__: dart.getFields(backdrop_demo.BackdropPanel.__proto__),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onVerticalDragUpdate: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onVerticalDragEnd: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragEndDetails])),
    title: dart.finalFieldType(framework.Widget),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C79;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C78;
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
  let C80;
  let C83;
  let C84;
  let C82;
  let C81;
  let C85;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C91;
  let C90;
  let C95;
  let C96;
  let C97;
  let C98;
  let C94;
  let C93;
  backdrop_demo.BackdropTitle = class BackdropTitle extends transitions.AnimatedWidget {
    build(context) {
      let animation = AnimationOfdouble()._check(this.listenable);
      return new text.DefaultTextStyle.new({style: theme$.Theme.of(context).primaryTextTheme.title, softWrap: false, overflow: paragraph.TextOverflow.ellipsis, child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Opacity.new({opacity: new animations.CurvedAnimation.new({parent: new animations.ReverseAnimation.new(animation), curve: C78 || CT.C78}).value, child: C80 || CT.C80, $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new basic.Opacity.new({opacity: new animations.CurvedAnimation.new({parent: animation, curve: C78 || CT.C78}).value, child: C85 || CT.C85, $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93});
    }
  };
  (backdrop_demo.BackdropTitle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let listenable = opts && 'listenable' in opts ? opts.listenable : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    backdrop_demo.BackdropTitle.__proto__.new.call(this, {key: key, listenable: listenable, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop_demo.BackdropTitle.prototype;
  dart.addTypeTests(backdrop_demo.BackdropTitle);
  dart.setMethodSignature(backdrop_demo.BackdropTitle, () => ({
    __proto__: dart.getMethods(backdrop_demo.BackdropTitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backdrop_demo.BackdropTitle, "package:flutter_gallery/demo/material/backdrop_demo.dart");
  backdrop_demo.BackdropDemo = class BackdropDemo extends framework.StatefulWidget {
    createState() {
      return new backdrop_demo._BackdropDemoState.new();
    }
  };
  (backdrop_demo.BackdropDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    backdrop_demo.BackdropDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop_demo.BackdropDemo.prototype;
  dart.addTypeTests(backdrop_demo.BackdropDemo);
  dart.setMethodSignature(backdrop_demo.BackdropDemo, () => ({
    __proto__: dart.getMethods(backdrop_demo.BackdropDemo.__proto__),
    createState: dart.fnType(backdrop_demo._BackdropDemoState, [])
  }));
  dart.setLibraryUri(backdrop_demo.BackdropDemo, "package:flutter_gallery/demo/material/backdrop_demo.dart");
  dart.defineLazy(backdrop_demo.BackdropDemo, {
    /*backdrop_demo.BackdropDemo.routeName*/get routeName() {
      return "/material/backdrop";
    }
  });
  const _backdropKey = dart.privateName(backdrop_demo, "_backdropKey");
  const _controller = dart.privateName(backdrop_demo, "_controller");
  const _category = dart.privateName(backdrop_demo, "_category");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C99;
  const _changeCategory = dart.privateName(backdrop_demo, "_changeCategory");
  const _backdropPanelVisible = dart.privateName(backdrop_demo, "_backdropPanelVisible");
  const _toggleBackdropPanelVisibility = dart.privateName(backdrop_demo, "_toggleBackdropPanelVisibility");
  const _backdropHeight = dart.privateName(backdrop_demo, "_backdropHeight");
  const _handleDragUpdate = dart.privateName(backdrop_demo, "_handleDragUpdate");
  const _handleDragEnd = dart.privateName(backdrop_demo, "_handleDragEnd");
  const RelativeRect_bottom = dart.privateName(stack, "RelativeRect.bottom");
  const RelativeRect_right = dart.privateName(stack, "RelativeRect.right");
  const RelativeRect_top = dart.privateName(stack, "RelativeRect.top");
  const RelativeRect_left = dart.privateName(stack, "RelativeRect.left");
  let C100;
  let C103;
  let C102;
  const RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  const _name = dart.privateName(borders, "_name");
  let C105;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C106;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C104;
  const RoundedRectangleBorder_side = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.side");
  let C101;
  let C109;
  let C108;
  let C107;
  let C112;
  let C113;
  let C114;
  let C111;
  let C110;
  let C117;
  let C118;
  let C119;
  let C116;
  let C115;
  let C120;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C132;
  let C133;
  let C134;
  let C130;
  let C129;
  let C137;
  let C136;
  let C135;
  let C140;
  let C139;
  let C138;
  let C143;
  let C144;
  let C145;
  let C146;
  let C147;
  let C142;
  let C141;
  let C150;
  let C151;
  let C149;
  let C148;
  let C154;
  let C153;
  let C152;
  let C157;
  let C158;
  let C159;
  let C156;
  let C155;
  const _buildStack = dart.privateName(backdrop_demo, "_buildStack");
  let C162;
  let C161;
  let C160;
  let C165;
  let C166;
  let C167;
  let C164;
  let C163;
  let C170;
  let C171;
  let C169;
  let C168;
  let C174;
  let C175;
  let C176;
  let C173;
  let C172;
  let C179;
  let C178;
  let C177;
  let C182;
  let C183;
  let C181;
  let C180;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(backdrop_demo.BackdropDemo) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(backdrop_demo.BackdropDemo)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(backdrop_demo.BackdropDemo));
  backdrop_demo._BackdropDemoState = class _BackdropDemoState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C99 || CT.C99, value: 1.0, vsync: this});
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_changeCategory](category) {
      this.setState(dart.fn(() => {
        this[_category] = category;
        this[_controller].fling({velocity: 2.0});
      }, VoidToNull()));
    }
    get [_backdropPanelVisible]() {
      let status = this[_controller].status;
      return dart.equals(status, animation.AnimationStatus.completed) || dart.equals(status, animation.AnimationStatus.forward);
    }
    [_toggleBackdropPanelVisibility]() {
      this[_controller].fling({velocity: dart.test(this[_backdropPanelVisible]) ? -2.0 : 2.0});
    }
    get [_backdropHeight]() {
      let renderBox = box.RenderBox._check(this[_backdropKey].currentContext.findRenderObject());
      return renderBox.size.height;
    }
    [_handleDragUpdate](details) {
      let t1, t0;
      if (dart.test(this[_controller].isAnimating) || dart.equals(this[_controller].status, animation.AnimationStatus.completed)) return;
      t0 = this[_controller];
      t0.value = dart.notNull(t0.value) - dart.notNull(details.primaryDelta) / dart.notNull((t1 = this[_backdropHeight], t1 == null ? details.primaryDelta : t1));
    }
    [_handleDragEnd](details) {
      if (dart.test(this[_controller].isAnimating) || dart.equals(this[_controller].status, animation.AnimationStatus.completed)) return;
      let flingVelocity = dart.notNull(details.velocity.pixelsPerSecond.dy) / dart.notNull(this[_backdropHeight]);
      if (flingVelocity < 0.0)
        this[_controller].fling({velocity: math.max(core.double, 2.0, -flingVelocity)});
      else if (flingVelocity > 0.0)
        this[_controller].fling({velocity: math.min(core.double, -2.0, -flingVelocity)});
      else
        this[_controller].fling({velocity: dart.notNull(this[_controller].value) < 0.5 ? -2.0 : 2.0});
    }
    [_buildStack](context, constraints) {
      let panelSize = constraints.biggest;
      let panelTop = dart.notNull(panelSize.height) - 48;
      let panelAnimation = this[_controller].drive(stack.RelativeRect, new transitions.RelativeRectTween.new({begin: new stack.RelativeRect.fromLTRB(0.0, panelTop - dart.notNull(media_query.MediaQuery.of(context).padding.bottom), 0.0, panelTop - dart.notNull(panelSize.height)), end: C100 || CT.C100}));
      let theme = theme$.Theme.of(context);
      let backdropItems = backdrop_demo.allCategories[$map](framework.Widget, dart.fn(category => {
        let selected = dart.equals(category, this[_category]);
        return new material.Material.new({shape: C101 || CT.C101, color: selected ? colors.Colors.white.withOpacity(0.25) : colors.Colors.transparent, child: new list_tile.ListTile.new({title: new text.Text.new(category.title, {$creationLocationd_0dea112b090073317d4: C107 || CT.C107}), selected: selected, onTap: dart.fn(() => {
              this[_changeCategory](category);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115});
      }, CategoryToMaterial()))[$toList]();
      return new container.Container.new({key: this[_backdropKey], color: theme.primaryColor, child: new basic.Stack.new({children: JSArrayOfWidget().of([new list_tile.ListTileTheme.new({iconColor: theme.primaryIconTheme.color, textColor: theme.primaryTextTheme.title.color.withOpacity(0.6), selectedColor: theme.primaryTextTheme.title.color, child: new basic.Padding.new({padding: C120 || CT.C120, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: backdropItems, $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), new transitions.PositionedTransition.new({rect: panelAnimation, child: new backdrop_demo.BackdropPanel.new({onTap: dart.bind(this, _toggleBackdropPanelVisibility), onVerticalDragUpdate: dart.bind(this, _handleDragUpdate), onVerticalDragEnd: dart.bind(this, _handleDragEnd), title: new text.Text.new(this[_category].title, {$creationLocationd_0dea112b090073317d4: C135 || CT.C135}), child: new backdrop_demo.CategoryView.new({category: this[_category], $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148})]), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), $creationLocationd_0dea112b090073317d4: C155 || CT.C155});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({elevation: 0.0, title: new backdrop_demo.BackdropTitle.new({listenable: this[_controller].view, $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), actions: JSArrayOfWidget().of([new icon_button.IconButton.new({onPressed: dart.bind(this, _toggleBackdropPanelVisibility), icon: new animated_icons.AnimatedIcon.new({icon: animated_icons.AnimatedIcons.close_menu, semanticLabel: "close", progress: this[_controller].view, $creationLocationd_0dea112b090073317d4: C163 || CT.C163}), $creationLocationd_0dea112b090073317d4: C168 || CT.C168})]), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), body: new layout_builder.LayoutBuilder.new({builder: dart.bind(this, _buildStack), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), $creationLocationd_0dea112b090073317d4: C180 || CT.C180});
    }
  };
  (backdrop_demo._BackdropDemoState.new = function() {
    this[_backdropKey] = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Backdrop"});
    this[_controller] = null;
    this[_category] = backdrop_demo.allCategories[$_get](0);
    backdrop_demo._BackdropDemoState.__proto__.new.call(this);
    ;
  }).prototype = backdrop_demo._BackdropDemoState.prototype;
  dart.addTypeTests(backdrop_demo._BackdropDemoState);
  dart.setMethodSignature(backdrop_demo._BackdropDemoState, () => ({
    __proto__: dart.getMethods(backdrop_demo._BackdropDemoState.__proto__),
    [_changeCategory]: dart.fnType(dart.void, [backdrop_demo.Category]),
    [_toggleBackdropPanelVisibility]: dart.fnType(dart.void, []),
    [_handleDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    [_handleDragEnd]: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    [_buildStack]: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(backdrop_demo._BackdropDemoState, () => ({
    __proto__: dart.getGetters(backdrop_demo._BackdropDemoState.__proto__),
    [_backdropPanelVisible]: core.bool,
    [_backdropHeight]: core.double
  }));
  dart.setLibraryUri(backdrop_demo._BackdropDemoState, "package:flutter_gallery/demo/material/backdrop_demo.dart");
  dart.setFieldSignature(backdrop_demo._BackdropDemoState, () => ({
    __proto__: dart.getFields(backdrop_demo._BackdropDemoState.__proto__),
    [_backdropKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_category]: dart.fieldType(backdrop_demo.Category)
  }));
  let C186;
  let C185;
  let C188;
  let C187;
  let C190;
  let C189;
  let C192;
  let C191;
  let C194;
  let C193;
  let C196;
  let C195;
  let C184;
  dart.defineLazy(backdrop_demo, {
    /*backdrop_demo.allCategories*/get allCategories() {
      return C184 || CT.C184;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/material/backdrop_demo", {
    "package:flutter_gallery/demo/material/backdrop_demo.dart": backdrop_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["backdrop_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAce;;;;;;IACM;;;;;;;AAEE,YAAwB,UAAtB,sBAAW,iBAAG,cAAK;IAAG;;;QAJvB;QAAY;IAAZ;IAAY;;EAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsF5B;;;;;;UAGW;AACR,kBAAc,gBAAG,OAAO;AACxC,YAAO,qCACE,mCACA,qCAAyB,gDAKpB,AAAS,AAAO,AA8BvB,6CA9BmC,QAAQ,SACrC,0CACkC,2CACrB,sBAChB,0BACS,oCACE,kBACc,mCACd,gCACa,sBACV,sBACJ,KAAK,YACI,+BACG,+EAEd,8DAEkC,8CACzB,kBACL,KAAK,UACE,AAAM,AAAU,KAAX;IAapC;;;QA/CyB;QAAU;;;AAAc,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8D7C;;;;;;IACa;;;;;;IACH;;;;;;IAChB;;;;;;IACA;;;;;;UAGa;AACR,kBAAc,gBAAG,OAAO;AACxC,YAAO,uCACM,yCAKJ,0CACkC,2CACrB,sBAChB,oDAC4B,wDACJ,8CACH,+BACZ,mBACA,qCACG,yCAEwB,mDACzB,sCACE,AAAM,AAAU,KAAX,2BACL,kCACI,yBACF,+PAMf,+BAAgB;IAIxB;;;QAjDM;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACF,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAsDM;AACA,iDAAY;AACpC,YAAO,uCACQ,AAAY,AAAiB,gBAA1B,OAAO,oCACb,iBACa,wCAChB,+BACa,sBAChB,gCACW,AAGP,4CAFQ,oCAAiB,SAAS,gHAKtC,gCACW,AAGP,4CAFQ,SAAS;IAQ7B;;;QA9BM;QACO;;AACR,+DAAW,GAAG,cAAc,UAAU;;EAAC;;;;;;;;;AAoCR;IAAoB;;;;;;EAC1D;;;;;;;;MAJsB,oCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaV,MAAX;AAKL,MAJD,oBAAc,kFAEL,YACA;IAEX;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;sBAE8B;AAI1B,MAHF,cAAS;AACa,QAApB,kBAAY,QAAQ;AACY,QAAhC,AAAY,mCAAgB;;IAEhC;;AAGwB,mBAAS,AAAY;AAC3C,YAAc,AAA6B,aAApC,MAAM,EAAoB,wCAAoB,YAAP,MAAM,EAAoB;IAC1E;;AAGiE,MAA/D,AAAY,6CAAgB,+BAAwB,CAAC,MAAM;IAC7D;;AAGkB,2CAAY,AAAa,AAAe;AACxD,YAAO,AAAU,AAAK,UAAN;IAClB;wBAKyC;;AACvC,oBAAI,AAAY,kCAAkC,YAAnB,AAAY,0BAA0B,sCACnE;AAEmF,WAArF;MAAY,WAAM,aAAN,YAA8B,aAArB,AAAQ,OAAD,+BAAiC,kCAAhB,OAAmB,AAAQ,OAAD;IACzE;qBAEmC;AACjC,oBAAI,AAAY,kCAAkC,YAAnB,AAAY,0BAA0B,sCACnE;AAEW,0BAAoD,aAApC,AAAQ,AAAS,AAAgB,OAA1B,6CAA+B;AACnE,UAAI,AAAc,aAAD,GAAG;AACwC,QAA1D,AAAY,mCAAgB,sBAAS,KAAK,CAAC,aAAa;UACrD,KAAI,AAAc,aAAD,GAAG;AACoC,QAA3D,AAAY,mCAAgB,sBAAS,CAAC,KAAK,CAAC,aAAa;;AAEQ,QAAjE,AAAY,mCAAkC,aAAlB,AAAY,2BAAQ,MAAM,CAAC,MAAM;IACjE;kBAOgC,SAAwB;AAE3C,sBAAY,AAAY,WAAD;AACrB,qBAA4B,aAAjB,AAAU,SAAD;AAEH,2BAAiB,AAAY,4CACzD,8CACsB,gCAClB,KACA,AAAS,QAAD,gBAAc,AAAY,AAAQ,0BAAjB,OAAO,mBAChC,KACA,AAAS,QAAD,gBAAG,AAAU,SAAD;AAMV,kBAAc,gBAAG,OAAO;AACrB,0BAAgB,AAAc,AAiB9C,oDAjB0D,QAAU;AAC1D,uBAAoB,YAAT,QAAQ,EAAI;AAClC,cAAO,2DAIE,QAAQ,GACJ,AAAM,gCAAY,QAClB,kCACJ,mCACE,kBAAK,AAAS,QAAD,8EACV,QAAQ,SACX;AACoB,cAAzB,sBAAgB,QAAQ;;;AAMhC,YAAO,mCACA,2BACE,AAAM,KAAD,sBACL,+BACa,sBAChB,4CACa,AAAM,AAAiB,KAAlB,oCACL,AAAM,AAAiB,AAAM,AAAM,KAA9B,0CAA0C,qBAC3C,AAAM,AAAiB,AAAM,KAAxB,sCACb,wDAEE,0CACkC,2CAC7B,aAAa,mLAI7B,gDACQ,cAAc,SACb,sDACE,uEACe,uDACH,8BACZ,kBAAK,AAAU,0FACf,8CAAuB;IAM1C;UAG0B;AACxB,YAAO,oCACG,mCACK,YACJ,iDACO,AAAY,4FAET,sBACf,qDACa,6CACL,2CACgB,wDACL,mBACL,AAAY,iNAKxB,yDACK;IAGf;;;IAjKgB,qBAAe,oDAAsB;IACjC;IACX,kBAAY,AAAa,mCAAC;;;EAgKrC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtYqB,2BAAa","file":"backdrop_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__backdrop_demo: backdrop_demo
  };
});

//# sourceMappingURL=backdrop_demo.ddc.js.map
