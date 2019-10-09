define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const icon_theme = packages__flutter__src__widgets__actions.src__widgets__icon_theme;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const visibility = packages__flutter__src__widgets__actions.src__widgets__visibility;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const beveled_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__beveled_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const theme$ = packages__flutter__material.src__material__theme;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const animated_icons = packages__flutter__material.src__material__animated_icons;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const backdrop = Object.create(dart.library);
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  let BuildContextAndWidgetToPhysicalShape = () => (BuildContextAndWidgetToPhysicalShape = dart.constFn(dart.fnType(basic.PhysicalShape, [framework.BuildContext, framework.Widget])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "absorbing",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 71,
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
        [_Location_column]: 12,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C6 || CT.C6,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 13,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 13,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 111,
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
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 108,
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
        [_Location_column]: 9,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 56
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 146,
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
        [_Location_column]: 14,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: stack.RelativeRect.prototype,
        [RelativeRect_bottom]: 0,
        [RelativeRect_right]: 0,
        [RelativeRect_top]: 56,
        [RelativeRect_left]: 0
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 35,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 53,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 35,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 53,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 266,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "progress",
        [_Location_column]: 17,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child0",
        [_Location_column]: 17,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child1",
        [_Location_column]: 17,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "progress",
        [_Location_column]: 19,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 17,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 271,
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
        [_Location_column]: 25,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 15,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 15,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "visible",
        [_Location_column]: 17,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maintainState",
        [_Location_column]: 17,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 278,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 277,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipper",
        [_Location_column]: 17,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 17,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 17,
        [_Location_line]: 308,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 307,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "status",
        [_Location_column]: 31,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 304,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 13,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 289,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rect",
        [_Location_column]: 11,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 287,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 19,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragUpdate",
        [_Location_column]: 19,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragEnd",
        [_Location_column]: 19,
        [_Location_line]: 328,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124, C125 || CT.C125, C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 322,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 322,
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
        [_Location_column]: 20,
        [_Location_line]: 321,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rect",
        [_Location_column]: 13,
        [_Location_line]: 320,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 319,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 26,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 340,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C147 || CT.C147,
        [Interval_end]: 0.4,
        [Interval_begin]: 0
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 12,
        [Radius_x]: 12
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C149 || CT.C149,
        [BorderRadius_bottomLeft]: C149 || CT.C149,
        [BorderRadius_topRight]: C150 || CT.C150,
        [BorderRadius_topLeft]: C150 || CT.C150
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 32,
        [Radius_x]: 32
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C149 || CT.C149,
        [BorderRadius_bottomLeft]: C149 || CT.C149,
        [BorderRadius_topRight]: C152 || CT.C152,
        [BorderRadius_topLeft]: C152 || CT.C152
      });
    }
  });
  const _TappableWhileStatusIs_controller = dart.privateName(backdrop, "_TappableWhileStatusIs.controller");
  const _TappableWhileStatusIs_status = dart.privateName(backdrop, "_TappableWhileStatusIs.status");
  const _TappableWhileStatusIs_child = dart.privateName(backdrop, "_TappableWhileStatusIs.child");
  backdrop._TappableWhileStatusIs = class _TappableWhileStatusIs extends framework.StatefulWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new backdrop._TappableWhileStatusIsState.new();
    }
  };
  (backdrop._TappableWhileStatusIs.new = function(status, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[status$] = status;
    this[controller$] = controller;
    this[child$] = child;
    backdrop._TappableWhileStatusIs.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop._TappableWhileStatusIs.prototype;
  dart.addTypeTests(backdrop._TappableWhileStatusIs);
  const controller$ = _TappableWhileStatusIs_controller;
  const status$ = _TappableWhileStatusIs_status;
  const child$ = _TappableWhileStatusIs_child;
  dart.setMethodSignature(backdrop._TappableWhileStatusIs, () => ({
    __proto__: dart.getMethods(backdrop._TappableWhileStatusIs.__proto__),
    createState: dart.fnType(backdrop._TappableWhileStatusIsState, [])
  }));
  dart.setLibraryUri(backdrop._TappableWhileStatusIs, "package:flutter_gallery/gallery/backdrop.dart");
  dart.setFieldSignature(backdrop._TappableWhileStatusIs, () => ({
    __proto__: dart.getFields(backdrop._TappableWhileStatusIs.__proto__),
    controller: dart.finalFieldType(animation_controller.AnimationController),
    status: dart.finalFieldType(animation.AnimationStatus),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _active = dart.privateName(backdrop, "_active");
  const _handleStatusChange = dart.privateName(backdrop, "_handleStatusChange");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  backdrop._TappableWhileStatusIsState = class _TappableWhileStatusIsState extends framework.State$(backdrop._TappableWhileStatusIs) {
    initState() {
      super.initState();
      this.widget.controller.addStatusListener(dart.bind(this, _handleStatusChange));
      this[_active] = dart.equals(this.widget.controller.status, this.widget.status);
    }
    dispose() {
      this.widget.controller.removeStatusListener(dart.bind(this, _handleStatusChange));
      super.dispose();
    }
    [_handleStatusChange](status) {
      let value = dart.equals(this.widget.controller.status, this.widget.status);
      if (!dart.equals(this[_active], value)) {
        this.setState(dart.fn(() => {
          this[_active] = value;
        }, VoidToNull()));
      }
    }
    build(context) {
      return new basic.AbsorbPointer.new({absorbing: !dart.test(this[_active]), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (backdrop._TappableWhileStatusIsState.new = function() {
    this[_active] = null;
    backdrop._TappableWhileStatusIsState.__proto__.new.call(this);
    ;
  }).prototype = backdrop._TappableWhileStatusIsState.prototype;
  dart.addTypeTests(backdrop._TappableWhileStatusIsState);
  dart.setMethodSignature(backdrop._TappableWhileStatusIsState, () => ({
    __proto__: dart.getMethods(backdrop._TappableWhileStatusIsState.__proto__),
    [_handleStatusChange]: dart.fnType(dart.void, [animation.AnimationStatus]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backdrop._TappableWhileStatusIsState, "package:flutter_gallery/gallery/backdrop.dart");
  dart.setFieldSignature(backdrop._TappableWhileStatusIsState, () => ({
    __proto__: dart.getFields(backdrop._TappableWhileStatusIsState.__proto__),
    [_active]: dart.fieldType(core.bool)
  }));
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C4;
  let C6;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C5;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  const _CrossFadeTransition_alignment = dart.privateName(backdrop, "_CrossFadeTransition.alignment");
  const _CrossFadeTransition_child0 = dart.privateName(backdrop, "_CrossFadeTransition.child0");
  const _CrossFadeTransition_child1 = dart.privateName(backdrop, "_CrossFadeTransition.child1");
  backdrop._CrossFadeTransition = class _CrossFadeTransition extends transitions.AnimatedWidget {
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get child0() {
      return this[child0$];
    }
    set child0(value) {
      super.child0 = value;
    }
    get child1() {
      return this[child1$];
    }
    set child1(value) {
      super.child1 = value;
    }
    build(context) {
      let progress = AnimationOfdouble()._check(this.listenable);
      let opacity1 = new animations.CurvedAnimation.new({parent: new animations.ReverseAnimation.new(progress), curve: C5 || CT.C5}).value;
      let opacity2 = new animations.CurvedAnimation.new({parent: progress, curve: C5 || CT.C5}).value;
      return new basic.Stack.new({alignment: this.alignment, children: JSArrayOfWidget().of([new basic.Opacity.new({opacity: opacity1, child: new basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, child: this.child1, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new basic.Opacity.new({opacity: opacity2, child: new basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, child: this.child0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21})]), $creationLocationd_0dea112b090073317d4: C25 || CT.C25});
    }
  };
  (backdrop._CrossFadeTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C4 || CT.C4;
    let progress = opts && 'progress' in opts ? opts.progress : null;
    let child0 = opts && 'child0' in opts ? opts.child0 : null;
    let child1 = opts && 'child1' in opts ? opts.child1 : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alignment$] = alignment;
    this[child0$] = child0;
    this[child1$] = child1;
    backdrop._CrossFadeTransition.__proto__.new.call(this, {key: key, listenable: progress, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop._CrossFadeTransition.prototype;
  dart.addTypeTests(backdrop._CrossFadeTransition);
  const alignment$ = _CrossFadeTransition_alignment;
  const child0$ = _CrossFadeTransition_child0;
  const child1$ = _CrossFadeTransition_child1;
  dart.setMethodSignature(backdrop._CrossFadeTransition, () => ({
    __proto__: dart.getMethods(backdrop._CrossFadeTransition.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backdrop._CrossFadeTransition, "package:flutter_gallery/gallery/backdrop.dart");
  dart.setFieldSignature(backdrop._CrossFadeTransition, () => ({
    __proto__: dart.getFields(backdrop._CrossFadeTransition.__proto__),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    child0: dart.finalFieldType(framework.Widget),
    child1: dart.finalFieldType(framework.Widget)
  }));
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C29;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C37;
  let C36;
  let C35;
  let C40;
  let C41;
  let C42;
  let C39;
  let C38;
  let C45;
  let C44;
  let C43;
  let C48;
  let C49;
  let C47;
  let C46;
  let C52;
  let C53;
  let C51;
  let C50;
  const _BackAppBar_leading = dart.privateName(backdrop, "_BackAppBar.leading");
  const _BackAppBar_title = dart.privateName(backdrop, "_BackAppBar.title");
  const _BackAppBar_trailing = dart.privateName(backdrop, "_BackAppBar.trailing");
  backdrop._BackAppBar = class _BackAppBar extends framework.StatelessWidget {
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get trailing() {
      return this[trailing$];
    }
    set trailing(value) {
      super.trailing = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return icon_theme.IconTheme.merge({data: theme.primaryIconTheme, child: new text.DefaultTextStyle.new({style: theme.primaryTextTheme.title, child: new basic.SizedBox.new({height: 56, child: new basic.Row.new({children: (() => {
                let t0 = JSArrayOfWidget().of([]);
                t0[$add](new container.Container.new({alignment: alignment.Alignment.center, width: 56.0, child: this.leading, $creationLocationd_0dea112b090073317d4: C30 || CT.C30}));
                t0[$add](new basic.Expanded.new({child: this.title, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}));
                if (this.trailing != null) t0[$add](new container.Container.new({alignment: alignment.Alignment.center, width: 56.0, child: this.trailing, $creationLocationd_0dea112b090073317d4: C38 || CT.C38}));
                return t0;
              })(), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50})});
    }
  };
  (backdrop._BackAppBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let leading = opts && 'leading' in opts ? opts.leading : C29 || CT.C29;
    let title = opts && 'title' in opts ? opts.title : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[leading$] = leading;
    this[title$] = title;
    this[trailing$] = trailing;
    if (!(leading != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart", 133, 15, "leading != null");
    if (!(title != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/gallery/backdrop.dart", 133, 40, "title != null");
    backdrop._BackAppBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop._BackAppBar.prototype;
  dart.addTypeTests(backdrop._BackAppBar);
  const leading$ = _BackAppBar_leading;
  const title$ = _BackAppBar_title;
  const trailing$ = _BackAppBar_trailing;
  dart.setMethodSignature(backdrop._BackAppBar, () => ({
    __proto__: dart.getMethods(backdrop._BackAppBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backdrop._BackAppBar, "package:flutter_gallery/gallery/backdrop.dart");
  dart.setFieldSignature(backdrop._BackAppBar, () => ({
    __proto__: dart.getFields(backdrop._BackAppBar.__proto__),
    leading: dart.finalFieldType(framework.Widget),
    title: dart.finalFieldType(framework.Widget),
    trailing: dart.finalFieldType(framework.Widget)
  }));
  const Backdrop_frontAction = dart.privateName(backdrop, "Backdrop.frontAction");
  const Backdrop_frontTitle = dart.privateName(backdrop, "Backdrop.frontTitle");
  const Backdrop_frontLayer = dart.privateName(backdrop, "Backdrop.frontLayer");
  const Backdrop_frontHeading = dart.privateName(backdrop, "Backdrop.frontHeading");
  const Backdrop_backTitle = dart.privateName(backdrop, "Backdrop.backTitle");
  const Backdrop_backLayer = dart.privateName(backdrop, "Backdrop.backLayer");
  backdrop.Backdrop = class Backdrop extends framework.StatefulWidget {
    get frontAction() {
      return this[frontAction$];
    }
    set frontAction(value) {
      super.frontAction = value;
    }
    get frontTitle() {
      return this[frontTitle$];
    }
    set frontTitle(value) {
      super.frontTitle = value;
    }
    get frontLayer() {
      return this[frontLayer$];
    }
    set frontLayer(value) {
      super.frontLayer = value;
    }
    get frontHeading() {
      return this[frontHeading$];
    }
    set frontHeading(value) {
      super.frontHeading = value;
    }
    get backTitle() {
      return this[backTitle$];
    }
    set backTitle(value) {
      super.backTitle = value;
    }
    get backLayer() {
      return this[backLayer$];
    }
    set backLayer(value) {
      super.backLayer = value;
    }
    createState() {
      return new backdrop._BackdropState.new();
    }
  };
  (backdrop.Backdrop.new = function(opts) {
    let frontAction = opts && 'frontAction' in opts ? opts.frontAction : null;
    let frontTitle = opts && 'frontTitle' in opts ? opts.frontTitle : null;
    let frontHeading = opts && 'frontHeading' in opts ? opts.frontHeading : null;
    let frontLayer = opts && 'frontLayer' in opts ? opts.frontLayer : null;
    let backTitle = opts && 'backTitle' in opts ? opts.backTitle : null;
    let backLayer = opts && 'backLayer' in opts ? opts.backLayer : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[frontAction$] = frontAction;
    this[frontTitle$] = frontTitle;
    this[frontHeading$] = frontHeading;
    this[frontLayer$] = frontLayer;
    this[backTitle$] = backTitle;
    this[backLayer$] = backLayer;
    backdrop.Backdrop.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop.Backdrop.prototype;
  dart.addTypeTests(backdrop.Backdrop);
  const frontAction$ = Backdrop_frontAction;
  const frontTitle$ = Backdrop_frontTitle;
  const frontLayer$ = Backdrop_frontLayer;
  const frontHeading$ = Backdrop_frontHeading;
  const backTitle$ = Backdrop_backTitle;
  const backLayer$ = Backdrop_backLayer;
  dart.setMethodSignature(backdrop.Backdrop, () => ({
    __proto__: dart.getMethods(backdrop.Backdrop.__proto__),
    createState: dart.fnType(backdrop._BackdropState, [])
  }));
  dart.setLibraryUri(backdrop.Backdrop, "package:flutter_gallery/gallery/backdrop.dart");
  dart.setFieldSignature(backdrop.Backdrop, () => ({
    __proto__: dart.getFields(backdrop.Backdrop.__proto__),
    frontAction: dart.finalFieldType(framework.Widget),
    frontTitle: dart.finalFieldType(framework.Widget),
    frontLayer: dart.finalFieldType(framework.Widget),
    frontHeading: dart.finalFieldType(framework.Widget),
    backTitle: dart.finalFieldType(framework.Widget),
    backLayer: dart.finalFieldType(framework.Widget)
  }));
  const _backdropKey = dart.privateName(backdrop, "_backdropKey");
  const _controller = dart.privateName(backdrop, "_controller");
  const _frontOpacity = dart.privateName(backdrop, "_frontOpacity");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C54;
  const _backdropHeight = dart.privateName(backdrop, "_backdropHeight");
  const _handleDragUpdate = dart.privateName(backdrop, "_handleDragUpdate");
  const _handleDragEnd = dart.privateName(backdrop, "_handleDragEnd");
  const _toggleFrontLayer = dart.privateName(backdrop, "_toggleFrontLayer");
  const RelativeRect_bottom = dart.privateName(stack, "RelativeRect.bottom");
  const RelativeRect_right = dart.privateName(stack, "RelativeRect.right");
  const RelativeRect_top = dart.privateName(stack, "RelativeRect.top");
  const RelativeRect_left = dart.privateName(stack, "RelativeRect.left");
  let C55;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C63;
  let C61;
  let C60;
  let C66;
  let C67;
  let C68;
  let C69;
  let C65;
  let C64;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C77;
  let C78;
  let C75;
  let C74;
  let C81;
  let C82;
  let C83;
  let C80;
  let C79;
  let C86;
  let C87;
  let C88;
  let C85;
  let C84;
  let C91;
  let C90;
  let C89;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C100;
  let C101;
  let C102;
  let C97;
  let C96;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C110;
  let C111;
  let C108;
  let C107;
  let C114;
  let C115;
  let C116;
  let C113;
  let C112;
  let C119;
  let C120;
  let C118;
  let C117;
  let C123;
  let C124;
  let C125;
  let C126;
  let C127;
  let C122;
  let C121;
  let C130;
  let C131;
  let C129;
  let C128;
  let C134;
  let C133;
  let C132;
  let C137;
  let C138;
  let C136;
  let C135;
  let C141;
  let C142;
  let C140;
  let C139;
  const _buildStack = dart.privateName(backdrop, "_buildStack");
  let C145;
  let C144;
  let C143;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C147;
  let C146;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(backdrop.Backdrop) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(backdrop.Backdrop)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(backdrop.Backdrop));
  backdrop._BackdropState = class _BackdropState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C54 || CT.C54, value: 1.0, vsync: this});
      this[_frontOpacity] = this[_controller].drive(core.double, backdrop._BackdropState._frontOpacityTween);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    get [_backdropHeight]() {
      let renderBox = box.RenderBox._check(this[_backdropKey].currentContext.findRenderObject());
      return math.max(core.double, 0.0, dart.notNull(renderBox.size.height) - 56 - 92);
    }
    [_handleDragUpdate](details) {
      let t2, t1;
      t1 = this[_controller];
      t1.value = dart.notNull(t1.value) - dart.notNull(details.primaryDelta) / dart.notNull((t2 = this[_backdropHeight], t2 == null ? details.primaryDelta : t2));
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
    [_toggleFrontLayer]() {
      let status = this[_controller].status;
      let isOpen = dart.equals(status, animation.AnimationStatus.completed) || dart.equals(status, animation.AnimationStatus.forward);
      this[_controller].fling({velocity: isOpen ? -2.0 : 2.0});
    }
    [_buildStack](context, constraints) {
      let frontRelativeRect = this[_controller].drive(stack.RelativeRect, new transitions.RelativeRectTween.new({begin: new stack.RelativeRect.fromLTRB(0.0, dart.notNull(constraints.biggest.height) - 92, 0.0, 0.0), end: C55 || CT.C55}));
      return new basic.Stack.new({key: this[_backdropKey], children: (() => {
          let t1 = JSArrayOfWidget().of([]);
          t1[$add](new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new backdrop._BackAppBar.new({leading: this.widget.frontAction, title: new backdrop._CrossFadeTransition.new({progress: this[_controller], alignment: alignment.AlignmentDirectional.centerStart, child0: new basic.Semantics.new({namesRoute: true, child: this.widget.frontTitle, $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), child1: new basic.Semantics.new({namesRoute: true, child: this.widget.backTitle, $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), trailing: new icon_button.IconButton.new({onPressed: dart.bind(this, _toggleFrontLayer), tooltip: "Toggle options page", icon: new animated_icons.AnimatedIcon.new({icon: animated_icons.AnimatedIcons.close_menu, progress: this[_controller], $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), new basic.Expanded.new({child: new visibility.Visibility.new({child: this.widget.backLayer, visible: !dart.equals(this[_controller].status, animation.AnimationStatus.completed), maintainState: true, $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89})]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}));
          t1[$add](new transitions.PositionedTransition.new({rect: frontRelativeRect, child: new transitions.AnimatedBuilder.new({animation: this[_controller], builder: dart.fn((context, child) => new basic.PhysicalShape.new({elevation: 12.0, color: theme$.Theme.of(context).canvasColor, clipper: new proxy_box.ShapeBorderClipper.new({shape: new beveled_rectangle_border.BeveledRectangleBorder.new({borderRadius: backdrop._kFrontHeadingBevelRadius.transform(this[_controller].value)})}), clipBehavior: ui.Clip.antiAlias, child: child, $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), BuildContextAndWidgetToPhysicalShape()), child: new backdrop._TappableWhileStatusIs.new(animation.AnimationStatus.completed, {controller: this[_controller], child: new transitions.FadeTransition.new({opacity: this[_frontOpacity], child: this.widget.frontLayer, $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}));
          if (this.widget.frontHeading != null) t1[$add](new transitions.PositionedTransition.new({rect: frontRelativeRect, child: new basic.ExcludeSemantics.new({child: new container.Container.new({alignment: alignment.Alignment.topLeft, child: new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTap: dart.bind(this, _toggleFrontLayer), onVerticalDragUpdate: dart.bind(this, _handleDragUpdate), onVerticalDragEnd: dart.bind(this, _handleDragEnd), child: this.widget.frontHeading, $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}));
          return t1;
        })(), $creationLocationd_0dea112b090073317d4: C139 || CT.C139});
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.bind(this, _buildStack), $creationLocationd_0dea112b090073317d4: C143 || CT.C143});
    }
  };
  (backdrop._BackdropState.new = function() {
    this[_backdropKey] = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Backdrop"});
    this[_controller] = null;
    this[_frontOpacity] = null;
    backdrop._BackdropState.__proto__.new.call(this);
    ;
  }).prototype = backdrop._BackdropState.prototype;
  dart.addTypeTests(backdrop._BackdropState);
  dart.setMethodSignature(backdrop._BackdropState, () => ({
    __proto__: dart.getMethods(backdrop._BackdropState.__proto__),
    [_handleDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    [_handleDragEnd]: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    [_toggleFrontLayer]: dart.fnType(dart.void, []),
    [_buildStack]: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(backdrop._BackdropState, () => ({
    __proto__: dart.getGetters(backdrop._BackdropState.__proto__),
    [_backdropHeight]: core.double
  }));
  dart.setLibraryUri(backdrop._BackdropState, "package:flutter_gallery/gallery/backdrop.dart");
  dart.setFieldSignature(backdrop._BackdropState, () => ({
    __proto__: dart.getFields(backdrop._BackdropState.__proto__),
    [_backdropKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_frontOpacity]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.defineLazy(backdrop._BackdropState, {
    /*backdrop._BackdropState._frontOpacityTween*/get _frontOpacityTween() {
      return new (TweenOfdouble()).new({begin: 0.2, end: 1.0}).chain(new tween.CurveTween.new({curve: C146 || CT.C146}));
    }
  });
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C149;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  let C150;
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C148;
  let C152;
  let C151;
  dart.defineLazy(backdrop, {
    /*backdrop._kFrontHeadingHeight*/get _kFrontHeadingHeight() {
      return 32;
    },
    /*backdrop._kFrontClosedHeight*/get _kFrontClosedHeight() {
      return 92;
    },
    /*backdrop._kBackAppBarHeight*/get _kBackAppBarHeight() {
      return 56;
    },
    /*backdrop._kFrontHeadingBevelRadius*/get _kFrontHeadingBevelRadius() {
      return new implicit_animations.BorderRadiusTween.new({begin: C148 || CT.C148, end: C151 || CT.C151});
    }
  });
  dart.trackLibraries("packages/flutter_gallery/gallery/backdrop", {
    "package:flutter_gallery/gallery/backdrop.dart": backdrop
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["backdrop.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiC4B;;;;;;IACJ;;;;;;IACT;;;;;;;AAGgC;IAA6B;;kDAXnE;QACD;QACC;QACA;;IAHA;IAEA;IACA;AACF,mEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeD,MAAX;AACkD,MAAxD,AAAO,AAAW,mDAAkB;AACe,MAAnD,gBAAmC,YAAzB,AAAO,AAAW,+BAAU,AAAO;IAC/C;;AAI6D,MAA3D,AAAO,AAAW,sDAAqB;AACxB,MAAT;IACR;0BAEyC;AAC5B,kBAAiC,YAAzB,AAAO,AAAW,+BAAU,AAAO;AACtD,uBAAI,eAAW,KAAK;AAGhB,QAFF,cAAS;AACQ,UAAf,gBAAU,KAAK;;;IAGrB;UAG0B;AACxB,YAAO,yCACM,WAAC,uBACL,AAAO;IAElB;;;IA9BK;;;EA+BP;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAW0B;;;;;;IACX;;;;;;IACA;;;;;;UAGa;AACA,gDAAW;AAEtB,qBAAW,AAGtB,4CAFQ,oCAAiB,QAAQ;AAItB,qBAAW,AAGtB,4CAFQ,QAAQ;AAIlB,YAAO,iCACM,0BACO,sBAChB,gCACW,QAAQ,SACV,sCACQ,0BACO,aACb,6HAGX,gCACW,QAAQ,SACV,sCACQ,0BACO,aACb;IAKjB;;;QA9CM;QACC;QACa;QACb;QACA;;IAHA;IAEA;IACA;AACF,iEAAW,GAAG,cAAc,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoD7B;;;;;;IACA;;;;;;IACA;;;;;;UAGa;AACR,kBAAc,gBAAG,OAAO;AACxC,YAAiB,mCACT,AAAM,KAAD,0BACJ,sCACE,AAAM,AAAiB,KAAlB,gCACL,2CAEE;;yBAEH,wCACuB,mCACd,aACA;yBAET,+BACS;AAET,oBAAI,iBAAY,eACd,wCACuB,mCACd,aACA;;;IAOvB;;;QAxCM;QACC;QACU;QACV;;IAFA;IACU;IACV;UACK,OAAO,IAAI;UAAc,KAAK,IAAI;AAAO,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;IAiDvD;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAGmB;IAAgB;;;QAhBzC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;AAND;;EAOJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuBiB,MAAX;AAKL,MAJD,oBAAc,kFAEL,YACA;AAE4C,MAArD,sBAAgB,AAAY,qCAAM;IACpC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;;AAKkB,2CAAY,AAAa,AAAe;AACxD,YAAO,uBAAS,KAA2B,AAAqB,aAA3C,AAAU,AAAK,SAAN;IAChC;wBAEyC;;AAC8C,WAArF;MAAY,WAAM,aAAN,YAA8B,aAArB,AAAQ,OAAD,+BAAiC,kCAAhB,OAAmB,AAAQ,OAAD;IACzE;qBAEmC;AACjC,oBAAI,AAAY,kCAAkC,YAAnB,AAAY,0BAA0B,sCACnE;AAEW,0BAAoD,aAApC,AAAQ,AAAS,AAAgB,OAA1B,6CAA+B;AACnE,UAAI,AAAc,aAAD,GAAG;AACwC,QAA1D,AAAY,mCAAgB,sBAAS,KAAK,CAAC,aAAa;UACrD,KAAI,AAAc,aAAD,GAAG;AACoC,QAA3D,AAAY,mCAAgB,sBAAS,CAAC,KAAK,CAAC,aAAa;;AAEQ,QAAjE,AAAY,mCAAkC,aAAlB,AAAY,2BAAQ,MAAM,CAAC,MAAM;IACjE;;AAGwB,mBAAS,AAAY;AAChC,mBAAgB,AAA6B,YAApC,MAAM,EAAoB,wCAAoB,YAAP,MAAM,EAAoB;AACrC,MAAhD,AAAY,mCAAgB,MAAM,GAAG,CAAC,MAAM;IAC9C;kBAEgC,SAAwB;AACxB,8BAAoB,AAAY,4CAAM,8CAC9C,gCAAS,KAAgC,aAA3B,AAAY,AAAQ,WAAT,uBAAuC,KAAK;AAG3F,YAAO,2BACA;;mBAGH,0CACyC,2CACrB,sBAChB,uCACW,AAAO,gCACT,iDACK,8BACsB,oDACxB,qCAAsB,aAAa,AAAO,yFAC1C,qCAAsB,aAAa,AAAO,mJAE1C,qDACG,mCACF,6BACH,2CACgB,mDACV,8LAIhB,+BACS,sCACE,AAAO,6CACL,AAAY,0BAA0B,qDAChC;mBAMvB,gDACQ,iBAAiB,SAChB,gDACM,4BACF,SAAc,SAAgB,UAC9B,wCACM,aACE,AAAY,gBAAT,OAAO,wBACd,6CACA,uEACS,AAA0B,6CAAU,AAAY,4CAG/C,0BACZ,KAAK,2GAGT,wCACW,kDACJ,0BACL,6CACI,4BACF,AAAO;AAStB,cAAI,AAAO,4BAAgB,eACzB,gDACQ,iBAAiB,SAChB,uCACE,wCACgB,oCACd,oDACqB,mDACnB,0DACe,uDACH,8BACZ,AAAO;;;IAO9B;UAG0B;AACxB,YAAO,0DAAuB;IAChC;;;IAnJgB,qBAAe,oDAAsB;IACjC;IACF;;;EAkJpB;;;;;;;;;;;;;;;;;;;;;;MAhJkC,0CAAkB;YAAG,AAClD,mCADuE,UAAU,YAC3E;;;;;;;;;;;;;;;MA7LE,6BAAoB;;;MACpB,4BAAmB;;;MACnB,2BAAkB;;;MAGA,kCAAyB;YAAG","file":"backdrop.ddc.js"}');
  // Exports:
  return {
    gallery__backdrop: backdrop
  };
});

//# sourceMappingURL=backdrop.ddc.js.map
