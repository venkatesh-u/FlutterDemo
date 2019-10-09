define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/animation/animation', 'packages/flutter_gallery/demo/shrine/login'], function(dart_sdk, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__animation__animation, packages__flutter_gallery__demo__shrine__login) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material = packages__flutter__material.src__material__material;
  const theme = packages__flutter__material.src__material__theme;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const beveled_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__beveled_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const image_icon = packages__flutter__src__widgets__actions.src__widgets__image_icon;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween_sequence = packages__flutter__src__animation__animation.src__animation__tween_sequence;
  const login = packages__flutter_gallery__demo__shrine__login.demo__shrine__login;
  const backdrop = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TweenSequenceOfRelativeRect = () => (TweenSequenceOfRelativeRect = dart.constFn(tween_sequence.TweenSequence$(stack.RelativeRect)))();
  let TweenSequenceItemOfRelativeRect = () => (TweenSequenceItemOfRelativeRect = dart.constFn(tween_sequence.TweenSequenceItem$(stack.RelativeRect)))();
  let JSArrayOfTweenSequenceItemOfRelativeRect = () => (JSArrayOfTweenSequenceItemOfRelativeRect = dart.constFn(_interceptors.JSArray$(TweenSequenceItemOfRelativeRect())))();
  let MaterialPageRouteOfvoid = () => (MaterialPageRouteOfvoid = dart.constFn(page.MaterialPageRoute$(dart.void)))();
  let BuildContextToLoginPage = () => (BuildContextToLoginPage = dart.constFn(dart.fnType(login.LoginPage, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 46,
        [Radius_x]: 46
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C2 || CT.C2,
        [BorderRadius_bottomLeft]: C2 || CT.C2,
        [BorderRadius_topRight]: C2 || CT.C2,
        [BorderRadius_topLeft]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C5 || CT.C5,
        [BorderSide_width]: 0,
        [BorderSide_color]: C6 || CT.C6
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: beveled_rectangle_border.BeveledRectangleBorder.prototype,
        [BeveledRectangleBorder_borderRadius]: C1 || CT.C1,
        [BeveledRectangleBorder_side]: C4 || CT.C4
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 50,
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
        [_Location_column]: 20,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 48,
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
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 54,
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
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 44,
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
        [_Location_column]: 14,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C29 || CT.C29,
        [Interval_end]: 0.78,
        [Interval_begin]: 0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: image_resolution.AssetImage.prototype,
        [AssetImage_package]: null,
        [AssetImage_bundle]: null,
        [AssetImage_assetName]: "packages/shrine_images/slanted_menu.png"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: image_icon.ImageIcon.prototype,
        [Widget_key]: null,
        [ImageIcon_semanticLabel]: null,
        [ImageIcon_color]: null,
        [ImageIcon_size]: null,
        [ImageIcon_image]: C32 || CT.C32
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: image_resolution.AssetImage.prototype,
        [AssetImage_package]: null,
        [AssetImage_bundle]: null,
        [AssetImage_assetName]: "packages/shrine_images/diamond.png"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: image_icon.ImageIcon.prototype,
        [Widget_key]: null,
        [ImageIcon_semanticLabel]: null,
        [ImageIcon_color]: null,
        [ImageIcon_size]: null,
        [ImageIcon_image]: C39 || CT.C39
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "translation",
        [_Location_column]: 17,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 105,
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
        [_Location_column]: 15,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 95,
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
        [_Location_column]: 18,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C29 || CT.C29,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0.5
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "translation",
        [_Location_column]: 17,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 124,
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
        [_Location_column]: 22,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 15,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: -0.25
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "translation",
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 18,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 281,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rect",
        [_Location_column]: 11,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 281,
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
        [_Location_column]: 9,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 275,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listenable",
        [_Location_column]: 9,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPress",
        [_Location_column]: 9,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontTitle",
        [_Location_column]: 9,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backTitle",
        [_Location_column]: 9,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59574
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "login",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C106 || CT.C106
      });
    },
    get C108() {
      return C108 = dart.constList([], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 74,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 303,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58409
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "login",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C114 || CT.C114
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 74,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "brightness",
        [_Location_column]: 7,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 7,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "titleSpacing",
        [_Location_column]: 7,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 7,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123, C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 325,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 323,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.464,
        [Cubic_c]: 0.757,
        [Cubic_b]: 0,
        [Cubic_a]: 0.548
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.41,
        [Cubic_b]: 0.94,
        [Cubic_a]: 0.23
      });
    }
  });
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C2;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  let C3;
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C1;
  const BeveledRectangleBorder_borderRadius = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.borderRadius");
  const _name = dart.privateName(borders, "_name");
  let C5;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C6;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C4;
  const BeveledRectangleBorder_side = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.side");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
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
  let C20;
  let C19;
  let C25;
  let C26;
  let C27;
  let C24;
  let C23;
  const _FrontLayer_onTap = dart.privateName(backdrop, "_FrontLayer.onTap");
  const _FrontLayer_child = dart.privateName(backdrop, "_FrontLayer.child");
  backdrop._FrontLayer = class _FrontLayer extends framework.StatelessWidget {
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new material.Material.new({elevation: 16.0, shape: C0 || CT.C0, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTap: this.onTap, child: new container.Container.new({height: 40.0, alignment: alignment.AlignmentDirectional.centerStart, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new basic.Expanded.new({child: this.child, $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (backdrop._FrontLayer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onTap$] = onTap;
    this[child$] = child;
    backdrop._FrontLayer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop._FrontLayer.prototype;
  dart.addTypeTests(backdrop._FrontLayer);
  const onTap$ = _FrontLayer_onTap;
  const child$ = _FrontLayer_child;
  dart.setMethodSignature(backdrop._FrontLayer, () => ({
    __proto__: dart.getMethods(backdrop._FrontLayer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backdrop._FrontLayer, "package:flutter_gallery/demo/shrine/backdrop.dart");
  dart.setFieldSignature(backdrop._FrontLayer, () => ({
    __proto__: dart.getFields(backdrop._FrontLayer.__proto__),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C29;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C28;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C30;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const ImageIcon_semanticLabel = dart.privateName(image_icon, "ImageIcon.semanticLabel");
  const ImageIcon_color = dart.privateName(image_icon, "ImageIcon.color");
  const ImageIcon_size = dart.privateName(image_icon, "ImageIcon.size");
  const AssetImage_package = dart.privateName(image_resolution, "AssetImage.package");
  const AssetImage_bundle = dart.privateName(image_resolution, "AssetImage.bundle");
  const AssetImage_assetName = dart.privateName(image_resolution, "AssetImage.assetName");
  let C32;
  const ImageIcon_image = dart.privateName(image_icon, "ImageIcon.image");
  let C31;
  let C35;
  let C36;
  let C34;
  let C33;
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C37;
  let C39;
  let C38;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C51;
  let C48;
  let C47;
  let C54;
  let C55;
  let C53;
  let C52;
  let C56;
  let C57;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C65;
  let C63;
  let C62;
  let C66;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C74;
  let C72;
  let C71;
  let C77;
  let C76;
  let C75;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C85;
  let C86;
  let C82;
  let C81;
  const _BackdropTitle_onPress = dart.privateName(backdrop, "_BackdropTitle.onPress");
  const _BackdropTitle_frontTitle = dart.privateName(backdrop, "_BackdropTitle.frontTitle");
  const _BackdropTitle_backTitle = dart.privateName(backdrop, "_BackdropTitle.backTitle");
  backdrop._BackdropTitle = class _BackdropTitle extends transitions.AnimatedWidget {
    get onPress() {
      return this[onPress$];
    }
    set onPress(value) {
      super.onPress = value;
    }
    get frontTitle() {
      return this[frontTitle$];
    }
    set frontTitle(value) {
      super.frontTitle = value;
    }
    get backTitle() {
      return this[backTitle$];
    }
    set backTitle(value) {
      super.backTitle = value;
    }
    build(context) {
      let animation = new animations.CurvedAnimation.new({parent: AnimationOfdouble()._check(this.listenable), curve: C28 || CT.C28});
      return new text.DefaultTextStyle.new({style: theme.Theme.of(context).primaryTextTheme.title, softWrap: false, overflow: paragraph.TextOverflow.ellipsis, child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 72.0, child: new icon_button.IconButton.new({padding: C30 || CT.C30, onPressed: VoidTovoid()._check(this.onPress), icon: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Opacity.new({opacity: animation.value, child: C31 || CT.C31, $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new basic.FractionalTranslation.new({translation: new (TweenOfOffset()).new({begin: ui.Offset.zero, end: C37 || CT.C37}).evaluate(animation), child: C38 || CT.C38, $creationLocationd_0dea112b090073317d4: C40 || CT.C40})]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Opacity.new({opacity: new animations.CurvedAnimation.new({parent: new animations.ReverseAnimation.new(animation), curve: C56 || CT.C56}).value, child: new basic.FractionalTranslation.new({translation: new (TweenOfOffset()).new({begin: ui.Offset.zero, end: C57 || CT.C57}).evaluate(animation), child: this.backTitle, $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), new basic.Opacity.new({opacity: new animations.CurvedAnimation.new({parent: animation, curve: C56 || CT.C56}).value, child: new basic.FractionalTranslation.new({translation: new (TweenOfOffset()).new({begin: C66 || CT.C66, end: ui.Offset.zero}).evaluate(animation), child: this.frontTitle, $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71})]), $creationLocationd_0dea112b090073317d4: C75 || CT.C75})]), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81});
    }
  };
  (backdrop._BackdropTitle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let listenable = opts && 'listenable' in opts ? opts.listenable : null;
    let onPress = opts && 'onPress' in opts ? opts.onPress : null;
    let frontTitle = opts && 'frontTitle' in opts ? opts.frontTitle : null;
    let backTitle = opts && 'backTitle' in opts ? opts.backTitle : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPress$] = onPress;
    this[frontTitle$] = frontTitle;
    this[backTitle$] = backTitle;
    if (!(frontTitle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart", 69, 15, "frontTitle != null");
    if (!(backTitle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart", 70, 15, "backTitle != null");
    backdrop._BackdropTitle.__proto__.new.call(this, {key: key, listenable: listenable, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop._BackdropTitle.prototype;
  dart.addTypeTests(backdrop._BackdropTitle);
  const onPress$ = _BackdropTitle_onPress;
  const frontTitle$ = _BackdropTitle_frontTitle;
  const backTitle$ = _BackdropTitle_backTitle;
  dart.setMethodSignature(backdrop._BackdropTitle, () => ({
    __proto__: dart.getMethods(backdrop._BackdropTitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backdrop._BackdropTitle, "package:flutter_gallery/demo/shrine/backdrop.dart");
  dart.setFieldSignature(backdrop._BackdropTitle, () => ({
    __proto__: dart.getFields(backdrop._BackdropTitle.__proto__),
    onPress: dart.finalFieldType(core.Function),
    frontTitle: dart.finalFieldType(framework.Widget),
    backTitle: dart.finalFieldType(framework.Widget)
  }));
  const Backdrop_frontLayer = dart.privateName(backdrop, "Backdrop.frontLayer");
  const Backdrop_backLayer = dart.privateName(backdrop, "Backdrop.backLayer");
  const Backdrop_frontTitle = dart.privateName(backdrop, "Backdrop.frontTitle");
  const Backdrop_backTitle = dart.privateName(backdrop, "Backdrop.backTitle");
  const Backdrop_controller = dart.privateName(backdrop, "Backdrop.controller");
  backdrop.Backdrop = class Backdrop extends framework.StatefulWidget {
    get frontLayer() {
      return this[frontLayer$];
    }
    set frontLayer(value) {
      super.frontLayer = value;
    }
    get backLayer() {
      return this[backLayer$];
    }
    set backLayer(value) {
      super.backLayer = value;
    }
    get frontTitle() {
      return this[frontTitle$0];
    }
    set frontTitle(value) {
      super.frontTitle = value;
    }
    get backTitle() {
      return this[backTitle$0];
    }
    set backTitle(value) {
      super.backTitle = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new backdrop._BackdropState.new();
    }
  };
  (backdrop.Backdrop.new = function(opts) {
    let frontLayer = opts && 'frontLayer' in opts ? opts.frontLayer : null;
    let backLayer = opts && 'backLayer' in opts ? opts.backLayer : null;
    let frontTitle = opts && 'frontTitle' in opts ? opts.frontTitle : null;
    let backTitle = opts && 'backTitle' in opts ? opts.backTitle : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[frontLayer$] = frontLayer;
    this[backLayer$] = backLayer;
    this[frontTitle$0] = frontTitle;
    this[backTitle$0] = backTitle;
    this[controller$] = controller;
    if (!(frontLayer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart", 160, 15, "frontLayer != null");
    if (!(backLayer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart", 161, 15, "backLayer != null");
    if (!(frontTitle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart", 162, 15, "frontTitle != null");
    if (!(backTitle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart", 163, 15, "backTitle != null");
    if (!(controller != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/backdrop.dart", 164, 15, "controller != null");
    backdrop.Backdrop.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backdrop.Backdrop.prototype;
  dart.addTypeTests(backdrop.Backdrop);
  const frontLayer$ = Backdrop_frontLayer;
  const backLayer$ = Backdrop_backLayer;
  const frontTitle$0 = Backdrop_frontTitle;
  const backTitle$0 = Backdrop_backTitle;
  const controller$ = Backdrop_controller;
  dart.setMethodSignature(backdrop.Backdrop, () => ({
    __proto__: dart.getMethods(backdrop.Backdrop.__proto__),
    createState: dart.fnType(backdrop._BackdropState, [])
  }));
  dart.setLibraryUri(backdrop.Backdrop, "package:flutter_gallery/demo/shrine/backdrop.dart");
  dart.setFieldSignature(backdrop.Backdrop, () => ({
    __proto__: dart.getFields(backdrop.Backdrop.__proto__),
    frontLayer: dart.finalFieldType(framework.Widget),
    backLayer: dart.finalFieldType(framework.Widget),
    frontTitle: dart.finalFieldType(framework.Widget),
    backTitle: dart.finalFieldType(framework.Widget),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _backdropKey = dart.privateName(backdrop, "_backdropKey");
  const _controller = dart.privateName(backdrop, "_controller");
  const _layerAnimation = dart.privateName(backdrop, "_layerAnimation");
  const _frontLayerVisible = dart.privateName(backdrop, "_frontLayerVisible");
  const _toggleBackdropLayerVisibility = dart.privateName(backdrop, "_toggleBackdropLayerVisibility");
  const _getLayerAnimation = dart.privateName(backdrop, "_getLayerAnimation");
  let C89;
  let C90;
  let C88;
  let C87;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C96;
  let C95;
  const _buildStack = dart.privateName(backdrop, "_buildStack");
  let C101;
  let C102;
  let C103;
  let C104;
  let C100;
  let C99;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C106;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C105;
  let C108;
  let C107;
  let C111;
  let C112;
  let C110;
  let C109;
  let C114;
  let C113;
  let C115;
  let C118;
  let C119;
  let C117;
  let C116;
  let C122;
  let C123;
  let C124;
  let C125;
  let C126;
  let C121;
  let C120;
  let C129;
  let C128;
  let C127;
  let C132;
  let C133;
  let C131;
  let C130;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(backdrop.Backdrop) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(backdrop.Backdrop)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(backdrop.Backdrop));
  backdrop._BackdropState = class _BackdropState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_controller] = this.widget.controller;
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    get [_frontLayerVisible]() {
      let status = this[_controller].status;
      return dart.equals(status, animation.AnimationStatus.completed) || dart.equals(status, animation.AnimationStatus.forward);
    }
    [_toggleBackdropLayerVisibility]() {
      this.setState(dart.fn(() => {
        dart.test(this[_frontLayerVisible]) ? this[_controller].reverse() : this[_controller].forward();
      }, VoidToNull()));
    }
    [_getLayerAnimation](layerSize, layerTop) {
      let firstCurve = null;
      let secondCurve = null;
      let firstWeight = null;
      let secondWeight = null;
      let animation = null;
      if (dart.test(this[_frontLayerVisible])) {
        firstCurve = backdrop._kAccelerateCurve;
        secondCurve = backdrop._kDecelerateCurve;
        firstWeight = 0.24821;
        secondWeight = 1.0 - 0.24821;
        animation = new animations.CurvedAnimation.new({parent: this[_controller].view, curve: C28 || CT.C28});
      } else {
        firstCurve = backdrop._kDecelerateCurve.flipped;
        secondCurve = backdrop._kAccelerateCurve.flipped;
        firstWeight = 1.0 - 0.24821;
        secondWeight = 0.24821;
        animation = this[_controller].view;
      }
      return new (TweenSequenceOfRelativeRect()).new(JSArrayOfTweenSequenceItemOfRelativeRect().of([new (TweenSequenceItemOfRelativeRect()).new({tween: new transitions.RelativeRectTween.new({begin: new stack.RelativeRect.fromLTRB(0.0, layerTop, 0.0, dart.notNull(layerTop) - dart.notNull(layerSize.height)), end: new stack.RelativeRect.fromLTRB(0.0, dart.notNull(layerTop) * 0.379146, 0.0, (dart.notNull(layerTop) - dart.notNull(layerSize.height)) * 0.379146)}).chain(new tween.CurveTween.new({curve: firstCurve})), weight: firstWeight}), new (TweenSequenceItemOfRelativeRect()).new({tween: new transitions.RelativeRectTween.new({begin: new stack.RelativeRect.fromLTRB(0.0, dart.notNull(layerTop) * 0.379146, 0.0, (dart.notNull(layerTop) - dart.notNull(layerSize.height)) * 0.379146), end: stack.RelativeRect.fill}).chain(new tween.CurveTween.new({curve: secondCurve})), weight: secondWeight})])).animate(animation);
    }
    [_buildStack](context, constraints) {
      let layerSize = constraints.biggest;
      let layerTop = dart.notNull(layerSize.height) - 48;
      this[_layerAnimation] = this[_getLayerAnimation](layerSize, layerTop);
      return new basic.Stack.new({key: this[_backdropKey], children: JSArrayOfWidget().of([this.widget.backLayer, new transitions.PositionedTransition.new({rect: this[_layerAnimation], child: new backdrop._FrontLayer.new({onTap: dart.bind(this, _toggleBackdropLayerVisibility), child: this.widget.frontLayer, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91})]), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
    }
    build(context) {
      let appBar = new app_bar.AppBar.new({brightness: ui.Brightness.light, elevation: 0.0, titleSpacing: 0.0, title: new backdrop._BackdropTitle.new({listenable: this[_controller].view, onPress: dart.bind(this, _toggleBackdropLayerVisibility), frontTitle: this.widget.frontTitle, backTitle: this.widget.backTitle, $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C105 || CT.C105, onPressed: dart.fn(() => {
              navigator.Navigator.push(dart.void, context, new (MaterialPageRouteOfvoid()).new({builder: dart.fn(context => new login.LoginPage.new({$creationLocationd_0dea112b090073317d4: C107 || CT.C107}), BuildContextToLoginPage())}));
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), new icon_button.IconButton.new({icon: C113 || CT.C113, onPressed: dart.fn(() => {
              navigator.Navigator.push(dart.void, context, new (MaterialPageRouteOfvoid()).new({builder: dart.fn(context => new login.LoginPage.new({$creationLocationd_0dea112b090073317d4: C115 || CT.C115}), BuildContextToLoginPage())}));
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C116 || CT.C116})]), $creationLocationd_0dea112b090073317d4: C120 || CT.C120});
      return new scaffold.Scaffold.new({appBar: appBar, body: new layout_builder.LayoutBuilder.new({builder: dart.bind(this, _buildStack), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), $creationLocationd_0dea112b090073317d4: C130 || CT.C130});
    }
  };
  (backdrop._BackdropState.new = function() {
    this[_backdropKey] = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Backdrop"});
    this[_controller] = null;
    this[_layerAnimation] = null;
    backdrop._BackdropState.__proto__.new.call(this);
    ;
  }).prototype = backdrop._BackdropState.prototype;
  dart.addTypeTests(backdrop._BackdropState);
  dart.setMethodSignature(backdrop._BackdropState, () => ({
    __proto__: dart.getMethods(backdrop._BackdropState.__proto__),
    [_toggleBackdropLayerVisibility]: dart.fnType(dart.void, []),
    [_getLayerAnimation]: dart.fnType(animation.Animation$(stack.RelativeRect), [ui.Size, core.double]),
    [_buildStack]: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(backdrop._BackdropState, () => ({
    __proto__: dart.getGetters(backdrop._BackdropState.__proto__),
    [_frontLayerVisible]: core.bool
  }));
  dart.setLibraryUri(backdrop._BackdropState, "package:flutter_gallery/demo/shrine/backdrop.dart");
  dart.setFieldSignature(backdrop._BackdropState, () => ({
    __proto__: dart.getFields(backdrop._BackdropState.__proto__),
    [_backdropKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_layerAnimation]: dart.fieldType(animation.Animation$(stack.RelativeRect))
  }));
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C134;
  let C135;
  dart.defineLazy(backdrop, {
    /*backdrop._kAccelerateCurve*/get _kAccelerateCurve() {
      return C134 || CT.C134;
    },
    /*backdrop._kDecelerateCurve*/get _kDecelerateCurve() {
      return C135 || CT.C135;
    },
    /*backdrop._kPeakVelocityTime*/get _kPeakVelocityTime() {
      return 0.24821;
    },
    /*backdrop._kPeakVelocityProgress*/get _kPeakVelocityProgress() {
      return 0.379146;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/backdrop", {
    "package:flutter_gallery/demo/shrine/backdrop.dart": backdrop
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["backdrop.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+BqB;;;;;;IACN;;;;;;UAGa;AACxB,YAAO,uCACM,iCAIJ,0CACkC,2CACrB,sBAChB,oDAC4B,yCACnB,mBACA,qCACG,iBACwB,4JAGpC,+BACS;IAKjB;;;QAhCM;QACC;QACA;;IADA;IACA;AACF,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2CL;;;;;;IACF;;;;;;IACA;;;;;;UAGa;AACA,sBAAY,uEAC1B;AAIV,YAAO,uCACQ,AAAY,AAAiB,eAA1B,OAAO,oCACb,iBACa,wCAChB,6BAAsB,sBAE3B,+BACS,aACA,uFAEM,qBACL,+BAAwB,sBAC5B,gCACW,AAAU,SAAD,uFAGpB,kDACe,AAGX,kCAFc,8CAEL,SAAS,+PAQ5B,+BACoB,sBAChB,gCACW,AAGP,4CAFQ,oCAAiB,SAAS,wCAG7B,kDACQ,AAGX,kCAFc,8CAEL,SAAS,UACb,kIAGX,gCACW,AAGP,4CAFQ,SAAS,uCAGZ,kDACQ,AAGX,sDADY,0BACH,SAAS,UACb;IAOrB;;;QAhFM;QACO;QACN;QACU;QACA;;IAFV;IACU;IACA;UACL,UAAU,IAAI;UACd,SAAS,IAAI;AACpB,2DAAW,GAAG,cAAc,UAAU;;EAAC;;;;;;;;;;;;;;;;;;;;;;IA+F/B;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACa;;;;;;;AAGM;IAAgB;;;QAlB/B;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UACL,UAAU,IAAI;UACd,SAAS,IAAI;UACb,UAAU,IAAI;UACd,SAAS,IAAI;UACb,UAAU,IAAI;AAVpB;;EAUyB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBZ,MAAX;AACyB,MAA/B,oBAAc,AAAO;IACvB;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;;AAGwB,mBAAS,AAAY;AAC3C,YAAc,AAA6B,aAApC,MAAM,EAAoB,wCAAoB,YAAP,MAAM,EAAoB;IAC1E;;AAMI,MAFF,cAAS;AAC2D,kBAAlE,4BAAqB,AAAY,8BAAY,AAAY;;IAE7D;yBAKgD,WAAkB;AAC1D;AACA;AACC;AACA;AACW;AAElB,oBAAI;AAC4B,QAA9B,aAAa;AACkB,QAA/B,cAAc;AACkB,QAAhC;AACuC,QAAvC,eAAe,AAAI;AAIlB,QAHD,YAAY,4CACF,AAAY;;AAKgB,QAAtC,aAAa,AAAkB;AACQ,QAAvC,cAAc,AAAkB;AACM,QAAtC,cAAc,AAAI;AACe,QAAjC;AAC4B,QAA5B,YAAY,AAAY;;AAG1B,YAAO,AAgCL,yCA/BiC,+CAC/B,oDACS,AAaL,8CAZoB,gCAClB,KACA,QAAQ,EACR,KACS,aAAT,QAAQ,iBAAG,AAAU,SAAD,gBAEJ,gCAChB,KACS,aAAT,QAAQ,cACR,KAC8B,CAApB,aAAT,QAAQ,iBAAG,AAAU,SAAD,8BAEjB,iCAAkB,UAAU,aAC5B,WAAW,IAErB,oDACS,AAQL,8CAPoB,gCAClB,KACS,aAAT,QAAQ,cACR,KAC8B,CAApB,aAAT,QAAQ,iBAAG,AAAU,SAAD,4BAEL,gCACZ,iCAAkB,WAAW,aAC7B,YAAY,cAGhB,SAAS;IACrB;kBAEgC,SAAwB;AAE3C,sBAAY,AAAY,WAAD;AACrB,qBAA4B,aAAjB,AAAU,SAAD;AAEwB,MAAzD,wBAAkB,yBAAmB,SAAS,EAAE,QAAQ;AAExD,YAAO,2BACA,8BACa,sBAChB,AAAO,uBACP,gDACQ,8BACC,+CACE,8CACA,AAAO;IAKxB;UAG0B;AACX,mBAAS,oCACG,gCACZ,mBACG,YACP,6CACO,AAAY,2CACf,mDACG,AAAO,mCACR,AAAO,yFAEH,sBACf,kEAEa;AAIR,cAHS,oCACR,OAAO,EACP,8CAAiC,QAAc,WAAY;yFAIjE,kEAEa;AAIR,cAHS,oCACR,OAAO,EACP,8CAAiC,QAAc,WAAY;;AAMrE,YAAO,oCACG,MAAM,QACR,yDACK;IAGf;;;IAxJgB,qBAAe,oDAAsB;IACjC;IACI;;;EAuJ1B;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtTY,0BAAiB;;;MACjB,0BAAiB;;;MAChB,2BAAkB;;;MAClB,+BAAsB","file":"backdrop.ddc.js"}');
  // Exports:
  return {
    demo__shrine__backdrop: backdrop
  };
});

//# sourceMappingURL=backdrop.ddc.js.map
