define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/animation/animation', 'packages/flutter/src/painting/_network_image_web', 'packages/scoped_model/scoped_model', 'packages/flutter_gallery/demo/shrine/model/app_state_model', 'packages/flutter/material', 'packages/flutter_gallery/demo/shrine/colors', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_gallery/demo/shrine/model/product', 'packages/intl/intl'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__animation__animation, packages__flutter__src__painting___network_image_web, packages__scoped_model__scoped_model, packages__flutter_gallery__demo__shrine__model__app_state_model, packages__flutter__material, packages__flutter_gallery__demo__shrine__colors, packages__flutter__src__gestures__arena, packages__flutter__src__rendering__animated_size, packages__flutter_gallery__demo__shrine__model__product, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const animated_size = packages__flutter__src__widgets__actions.src__widgets__animated_size;
  const will_pop_scope = packages__flutter__src__widgets__actions.src__widgets__will_pop_scope;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const animated_list = packages__flutter__src__widgets__actions.src__widgets__animated_list;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const localizations = packages__flutter__src__widgets__actions.src__widgets__localizations;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const tween_sequence = packages__flutter__src__animation__animation.src__animation__tween_sequence;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const beveled_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__beveled_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const fractional_offset = packages__flutter__src__painting___network_image_web.src__painting__fractional_offset;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const app_state_model = packages__flutter_gallery__demo__shrine__model__app_state_model.demo__shrine__model__app_state_model;
  const material = packages__flutter__material.src__material__material;
  const theme = packages__flutter__material.src__material__theme;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const divider = packages__flutter__material.src__material__divider;
  const colors = packages__flutter_gallery__demo__shrine__colors.demo__shrine__colors;
  const system_navigator = packages__flutter__src__gestures__arena.src__services__system_navigator;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const product = packages__flutter_gallery__demo__shrine__model__product.demo__shrine__model__product;
  const intl = packages__intl__intl.intl;
  const expanding_bottom_sheet = Object.create(dart.library);
  const shopping_cart = Object.create(dart.library);
  const $length = dartx.length;
  const $keys = dartx.keys;
  const $toList = dartx.toList;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $insert = dartx.insert;
  const $indexOf = dartx.indexOf;
  const $removeAt = dartx.removeAt;
  const $map = dartx.map;
  let TypeMatcherOf_ExpandingBottomSheetState = () => (TypeMatcherOf_ExpandingBottomSheetState = dart.constFn(framework.TypeMatcher$(expanding_bottom_sheet._ExpandingBottomSheetState)))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let ScopedModelDescendantOfAppStateModel = () => (ScopedModelDescendantOfAppStateModel = dart.constFn(scoped_model.ScopedModelDescendant$(app_state_model.AppStateModel)))();
  let BuildContextAndWidgetAndAppStateModelToAnimatedBuilder = () => (BuildContextAndWidgetAndAppStateModelToAnimatedBuilder = dart.constFn(dart.fnType(transitions.AnimatedBuilder, [framework.BuildContext, framework.Widget, app_state_model.AppStateModel])))();
  let GlobalKeyOfAnimatedListState = () => (GlobalKeyOfAnimatedListState = dart.constFn(framework.GlobalKey$(animated_list.AnimatedListState)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let LinkedHashSetOfint = () => (LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))();
  let BuildContextAndWidgetAndAppStateModelToWidget = () => (BuildContextAndWidgetAndAppStateModelToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, app_state_model.AppStateModel])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intToShoppingCartRow = () => (intToShoppingCartRow = dart.constFn(dart.fnType(shopping_cart.ShoppingCartRow, [core.int])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextAndWidgetAndAppStateModelToStack = () => (BuildContextAndWidgetAndAppStateModelToStack = dart.constFn(dart.fnType(basic.Stack, [framework.BuildContext, framework.Widget, app_state_model.AppStateModel])))();
  let ValueKeyOfint = () => (ValueKeyOfint = dart.constFn(key.ValueKey$(core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: TypeMatcherOf_ExpandingBottomSheetState().prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C3 || CT.C3,
        [Interval_end]: 0.3,
        [Interval_begin]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 0.87,
        [Interval_begin]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 1,
        [Interval_begin]: 0.434
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 0.3,
        [Interval_begin]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 0.766,
        [Interval_begin]: 0.532
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 0.6,
        [Interval_begin]: 0.3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 1,
        [Interval_begin]: 0.766
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 8,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 20
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 8,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 32
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59596
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C14 || CT.C14
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 225000
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 19,
        [_Location_line]: 300,
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
        [_Location_column]: 17,
        [_Location_line]: 297,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 0
      });
    },
    get C23() {
      return C23 = dart.constList([], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 307,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 302,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 309,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 293,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 9,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 321,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 320,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 321,
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
        [_Location_column]: 12,
        [_Location_line]: 319,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animationDuration",
        [_Location_column]: 11,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 11,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 355,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 348,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 345,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "button",
        [_Location_column]: 7,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 7,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0.379146
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 377,
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
        [_Location_column]: 12,
        [_Location_line]: 375,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 19,
        [_Location_line]: 413,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 411,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 15,
        [_Location_line]: 410,
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
        [_Location_column]: 20,
        [_Location_line]: 409,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 13,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 408,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 409,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 406,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 11,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 405,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 406,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 403,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onWillPop",
        [_Location_column]: 9,
        [_Location_line]: 402,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 403,
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
        [_Location_column]: 14,
        [_Location_line]: 401,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 7,
        [_Location_line]: 397,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 7,
        [_Location_line]: 398,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vsync",
        [_Location_column]: 7,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 395,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 29,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacityAnimation",
        [_Location_column]: 40,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 51,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 458,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C109 || CT.C109,
        [Interval_end]: 1,
        [Interval_begin]: 0.33
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 1,
        [Interval_begin]: 0.33
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 29,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacityAnimation",
        [_Location_column]: 44,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 53,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 474,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: scroll_physics.NeverScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 514,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 7,
        [_Location_line]: 515,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 7,
        [_Location_line]: 516,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialItemCount",
        [_Location_column]: 7,
        [_Location_line]: 517,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 7,
        [_Location_line]: 518,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 7,
        [_Location_line]: 519,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120, C121 || CT.C121, C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 513,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 527,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 526,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 554,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 38,
        [_Location_line]: 561,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 562,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 560,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 560,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 559,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 570,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 569,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 10,
        [Radius_x]: 10
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C140 || CT.C140,
        [BorderRadius_bottomLeft]: C140 || CT.C140,
        [BorderRadius_topRight]: C140 || CT.C140,
        [BorderRadius_topLeft]: C140 || CT.C140
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 589,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 590,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 591,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 11,
        [_Location_line]: 601,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145, C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 588,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 9,
        [_Location_line]: 587,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 588,
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
        [_Location_column]: 14,
        [_Location_line]: 586,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 585,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 586,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 584,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.464,
        [Cubic_c]: 0.757,
        [Cubic_b]: 0,
        [Cubic_a]: 0.548
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.41,
        [Cubic_b]: 0.94,
        [Cubic_a]: 0.23
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "quantity",
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160, C161 || CT.C161, C162 || CT.C162], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58131
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C164 || CT.C164
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 31,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 31,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 16
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 66,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 43,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.constList([C190 || CT.C190], widget_inspector._Location);
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C189 || CT.C189,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 100,
        [SizedBox_width]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 7,
        [Radius_x]: 7
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C197 || CT.C197,
        [BorderRadius_bottomLeft]: C197 || CT.C197,
        [BorderRadius_topRight]: C197 || CT.C197,
        [BorderRadius_topLeft]: C197 || CT.C197
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C199 || CT.C199,
        [BorderSide_width]: 0,
        [BorderSide_color]: C200 || CT.C200
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: beveled_rectangle_border.BeveledRectangleBorder.prototype,
        [BeveledRectangleBorder_borderRadius]: C196 || CT.C196,
        [BeveledRectangleBorder_side]: C198 || CT.C198
      });
    },
    get C202() {
      return C202 = dart.const({
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
        [Text_data]: "CLEAR CART"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 0
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C202 || CT.C202,
        [Padding_padding]: C203 || CT.C203
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207, C208 || CT.C208, C209 || CT.C209, C210 || CT.C210], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 21,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 21,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 21,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213, C214 || CT.C214, C215 || CT.C215, C216 || CT.C216], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219], widget_inspector._Location);
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C218 || CT.C218,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.constList([C225 || CT.C225], widget_inspector._Location);
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C224 || CT.C224,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228], widget_inspector._Location);
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231, C232 || CT.C232], widget_inspector._Location);
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C230 || CT.C230,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 60
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C236() {
      return C236 = dart.const({
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
        [Text_data]: "TOTAL"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: flex.FlexFit.prototype,
        [_name$]: "FlexFit.tight",
        index: 0
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget_key]: null,
        [ProxyWidget_child]: C236 || CT.C236,
        [Flexible_fit]: C237 || CT.C237,
        [Flexible_flex]: 1
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240, C241 || CT.C241], widget_inspector._Location);
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C239 || CT.C239,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.constList([C244 || CT.C244, C245 || CT.C245], widget_inspector._Location);
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C243 || CT.C243,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C247() {
      return C247 = dart.const({
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
        [Text_data]: "Subtotal:"
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget_key]: null,
        [ProxyWidget_child]: C247 || CT.C247,
        [Flexible_fit]: C237 || CT.C237,
        [Flexible_flex]: 1
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.constList([C250 || CT.C250, C251 || CT.C251], widget_inspector._Location);
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C249 || CT.C249,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.constList([C254 || CT.C254], widget_inspector._Location);
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C253 || CT.C253,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 4,
        [SizedBox_width]: null
      });
    },
    get C257() {
      return C257 = dart.const({
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
        [Text_data]: "Shipping:"
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget_key]: null,
        [ProxyWidget_child]: C257 || CT.C257,
        [Flexible_fit]: C237 || CT.C237,
        [Flexible_flex]: 1
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.constList([C260 || CT.C260, C261 || CT.C261], widget_inspector._Location);
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C259 || CT.C259,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.constList([C264 || CT.C264], widget_inspector._Location);
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C263 || CT.C263,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
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
        [Text_data]: "Tax:"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget_key]: null,
        [ProxyWidget_child]: C266 || CT.C266,
        [Flexible_fit]: C237 || CT.C237,
        [Flexible_flex]: 1
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269, C270 || CT.C270], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.constList([C273 || CT.C273], widget_inspector._Location);
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C272 || CT.C272,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.constList([C276 || CT.C276], widget_inspector._Location);
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C275 || CT.C275,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.constList([C279 || CT.C279, C280 || CT.C280], widget_inspector._Location);
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C278 || CT.C278,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C282() {
      return C282 = dart.constList([C283 || CT.C283], widget_inspector._Location);
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C282 || CT.C282,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286], widget_inspector._Location);
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C285 || CT.C285,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57693
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C289 || CT.C289
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C291() {
      return C291 = dart.constList([C292 || CT.C292, C293 || CT.C293], widget_inspector._Location);
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C291 || CT.C291,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.constList([C296 || CT.C296, C297 || CT.C297], widget_inspector._Location);
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C295 || CT.C295,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 33,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 25,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 25,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.constList([C300 || CT.C300, C301 || CT.C301, C302 || CT.C302, C303 || CT.C303, C304 || CT.C304], widget_inspector._Location);
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C299 || CT.C299,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 233,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 68,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.constList([C307 || CT.C307], widget_inspector._Location);
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C306 || CT.C306,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 248,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.constList([C310 || CT.C310], widget_inspector._Location);
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C309 || CT.C309,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 247,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 76,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313], widget_inspector._Location);
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C312 || CT.C312,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 250,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C315() {
      return C315 = dart.constList([C316 || CT.C316], widget_inspector._Location);
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C315 || CT.C315,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.constList([C319 || CT.C319, C320 || CT.C320], widget_inspector._Location);
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C318 || CT.C318,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.constList([C323 || CT.C323, C324 || CT.C324], widget_inspector._Location);
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C322 || CT.C322,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 242,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.constList([C327 || CT.C327], widget_inspector._Location);
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C326 || CT.C326,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.constList([C330 || CT.C330, C331 || CT.C331], widget_inspector._Location);
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C329 || CT.C329,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282657581.0
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: C333 || CT.C333,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 10
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.constList([C336 || CT.C336], widget_inspector._Location);
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C335 || CT.C335,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.constList([C339 || CT.C339, C340 || CT.C340], widget_inspector._Location);
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C338 || CT.C338,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 226,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.constList([C343 || CT.C343], widget_inspector._Location);
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C342 || CT.C342,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C345() {
      return C345 = dart.constList([C346 || CT.C346, C347 || CT.C347, C348 || CT.C348], widget_inspector._Location);
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C345 || CT.C345,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.constList([C351 || CT.C351, C352 || CT.C352], widget_inspector._Location);
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C350 || CT.C350,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/shopping_cart.dart"
      });
    }
  });
  let C0;
  const ExpandingBottomSheet_hideController = dart.privateName(expanding_bottom_sheet, "ExpandingBottomSheet.hideController");
  expanding_bottom_sheet.ExpandingBottomSheet = class ExpandingBottomSheet extends framework.StatefulWidget {
    get hideController() {
      return this[hideController$];
    }
    set hideController(value) {
      super.hideController = value;
    }
    createState() {
      return new expanding_bottom_sheet._ExpandingBottomSheetState.new();
    }
    static of(context, opts) {
      let isNullOk = opts && 'isNullOk' in opts ? opts.isNullOk : false;
      if (!(isNullOk != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart", 51, 12, "isNullOk != null");
      if (!(context != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart", 52, 12, "context != null");
      let result = expanding_bottom_sheet._ExpandingBottomSheetState._check(context.ancestorStateOfType(C0 || CT.C0));
      if (dart.test(isNullOk) || result != null) {
        return result;
      }
      dart.throw(assertions.FlutterError.new("ExpandingBottomSheet.of() called with a context that does not contain a ExpandingBottomSheet.\n"));
    }
  };
  (expanding_bottom_sheet.ExpandingBottomSheet.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let hideController = opts && 'hideController' in opts ? opts.hideController : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[hideController$] = hideController;
    if (!(hideController != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart", 42, 16, "hideController != null");
    expanding_bottom_sheet.ExpandingBottomSheet.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = expanding_bottom_sheet.ExpandingBottomSheet.prototype;
  dart.addTypeTests(expanding_bottom_sheet.ExpandingBottomSheet);
  const hideController$ = ExpandingBottomSheet_hideController;
  dart.setMethodSignature(expanding_bottom_sheet.ExpandingBottomSheet, () => ({
    __proto__: dart.getMethods(expanding_bottom_sheet.ExpandingBottomSheet.__proto__),
    createState: dart.fnType(expanding_bottom_sheet._ExpandingBottomSheetState, [])
  }));
  dart.setLibraryUri(expanding_bottom_sheet.ExpandingBottomSheet, "package:flutter_gallery/demo/shrine/expanding_bottom_sheet.dart");
  dart.setFieldSignature(expanding_bottom_sheet.ExpandingBottomSheet, () => ({
    __proto__: dart.getFields(expanding_bottom_sheet.ExpandingBottomSheet.__proto__),
    hideController: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _expandingBottomSheetKey = dart.privateName(expanding_bottom_sheet, "_expandingBottomSheetKey");
  const _width = dart.privateName(expanding_bottom_sheet, "_width");
  const _controller = dart.privateName(expanding_bottom_sheet, "_controller");
  const _widthAnimation = dart.privateName(expanding_bottom_sheet, "_widthAnimation");
  const _heightAnimation = dart.privateName(expanding_bottom_sheet, "_heightAnimation");
  const _thumbnailOpacityAnimation = dart.privateName(expanding_bottom_sheet, "_thumbnailOpacityAnimation");
  const _cartOpacityAnimation = dart.privateName(expanding_bottom_sheet, "_cartOpacityAnimation");
  const _shapeAnimation = dart.privateName(expanding_bottom_sheet, "_shapeAnimation");
  const _slideAnimation = dart.privateName(expanding_bottom_sheet, "_slideAnimation");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C1;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C3;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C2;
  let C5;
  let C4;
  const _getWidthAnimation = dart.privateName(expanding_bottom_sheet, "_getWidthAnimation");
  let C6;
  const _getHeightAnimation = dart.privateName(expanding_bottom_sheet, "_getHeightAnimation");
  const _getShapeAnimation = dart.privateName(expanding_bottom_sheet, "_getShapeAnimation");
  let C7;
  let C8;
  const _getThumbnailOpacityAnimation = dart.privateName(expanding_bottom_sheet, "_getThumbnailOpacityAnimation");
  let C9;
  let C10;
  const _getCartOpacityAnimation = dart.privateName(expanding_bottom_sheet, "_getCartOpacityAnimation");
  const _widthFor = dart.privateName(expanding_bottom_sheet, "_widthFor");
  const _isOpen = dart.privateName(expanding_bottom_sheet, "_isOpen");
  const EdgeInsetsDirectional_bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  const EdgeInsetsDirectional_end = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  const EdgeInsetsDirectional_top = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  const EdgeInsetsDirectional_start = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  let C11;
  let C12;
  const _cartPaddingFor = dart.privateName(expanding_bottom_sheet, "_cartPaddingFor");
  const _cartIsVisible = dart.privateName(expanding_bottom_sheet, "_cartIsVisible");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C14;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C13;
  let C15;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C21;
  let C23;
  let C22;
  let C26;
  let C27;
  let C28;
  let C29;
  let C25;
  let C24;
  let C30;
  let C33;
  let C32;
  let C31;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C42;
  let C41;
  const _buildThumbnails = dart.privateName(expanding_bottom_sheet, "_buildThumbnails");
  let C44;
  let C47;
  let C48;
  let C46;
  let C45;
  const _buildShoppingCartPage = dart.privateName(expanding_bottom_sheet, "_buildShoppingCartPage");
  let C49;
  let C52;
  let C53;
  let C54;
  let C55;
  let C56;
  let C51;
  let C50;
  let C59;
  let C60;
  let C61;
  let C58;
  let C57;
  let C64;
  let C65;
  let C66;
  let C63;
  let C62;
  const _buildCart = dart.privateName(expanding_bottom_sheet, "_buildCart");
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C67;
  let C68;
  let C69;
  let C72;
  let C73;
  let C71;
  let C70;
  const _buildSlideAnimation = dart.privateName(expanding_bottom_sheet, "_buildSlideAnimation");
  const _onWillPop = dart.privateName(expanding_bottom_sheet, "_onWillPop");
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
  let C88;
  let C89;
  let C90;
  let C87;
  let C86;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C99;
  let C100;
  let C101;
  let C102;
  let C96;
  let C95;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(expanding_bottom_sheet.ExpandingBottomSheet) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(expanding_bottom_sheet.ExpandingBottomSheet)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(expanding_bottom_sheet.ExpandingBottomSheet));
  expanding_bottom_sheet._ExpandingBottomSheetState = class _ExpandingBottomSheetState extends State_TickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C1 || CT.C1, vsync: this});
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_getWidthAnimation](screenWidth) {
      if (dart.equals(this[_controller].status, animation.AnimationStatus.forward)) {
        return new (TweenOfdouble()).new({begin: this[_width], end: screenWidth}).animate(new animations.CurvedAnimation.new({parent: this[_controller].view, curve: C2 || CT.C2}));
      } else {
        return expanding_bottom_sheet._getEmphasizedEasingAnimation(core.double, {begin: this[_width], peak: expanding_bottom_sheet._getPeakPoint({begin: this[_width], end: screenWidth}), end: screenWidth, isForward: false, parent: new animations.CurvedAnimation.new({parent: this[_controller].view, curve: C4 || CT.C4})});
      }
    }
    [_getHeightAnimation](screenHeight) {
      if (dart.equals(this[_controller].status, animation.AnimationStatus.forward)) {
        return expanding_bottom_sheet._getEmphasizedEasingAnimation(core.double, {begin: 56, peak: 56 + (dart.notNull(screenHeight) - 56) * 0.379146, end: screenHeight, isForward: true, parent: this[_controller].view});
      } else {
        return new (TweenOfdouble()).new({begin: 56, end: screenHeight}).animate(new animations.CurvedAnimation.new({parent: this[_controller].view, curve: C6 || CT.C6, reverseCurve: new curves.Interval.new(0.434, 1.0, {curve: curves.Curves.fastOutSlowIn.flipped})}));
      }
    }
    [_getShapeAnimation]() {
      if (dart.equals(this[_controller].status, animation.AnimationStatus.forward)) {
        return new (TweenOfdouble()).new({begin: 24, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller].view, curve: C2 || CT.C2}));
      } else {
        return expanding_bottom_sheet._getEmphasizedEasingAnimation(core.double, {begin: 24, peak: expanding_bottom_sheet._getPeakPoint({begin: 24, end: 0.0}), end: 0.0, isForward: false, parent: this[_controller].view});
      }
    }
    [_getThumbnailOpacityAnimation]() {
      return new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller].view, curve: dart.equals(this[_controller].status, animation.AnimationStatus.forward) ? C7 || CT.C7 : C8 || CT.C8}));
    }
    [_getCartOpacityAnimation]() {
      return new animations.CurvedAnimation.new({parent: this[_controller].view, curve: dart.equals(this[_controller].status, animation.AnimationStatus.forward) ? C9 || CT.C9 : C10 || CT.C10});
    }
    [_widthFor](numProducts) {
      switch (numProducts) {
        case 0:
        {
          return 64;
        }
        case 1:
        {
          return 136.0;
        }
        case 2:
        {
          return 192.0;
        }
        case 3:
        {
          return 248.0;
        }
        default:
        {
          return 278.0;
        }
      }
    }
    get [_isOpen]() {
      let status = this[_controller].status;
      return dart.equals(status, animation.AnimationStatus.completed) || dart.equals(status, animation.AnimationStatus.forward);
    }
    open() {
      if (!dart.test(this[_isOpen])) {
        this[_controller].forward();
      }
    }
    close() {
      if (dart.test(this[_isOpen])) {
        this[_controller].reverse();
      }
    }
    [_cartPaddingFor](numProducts) {
      return numProducts === 0 ? C11 || CT.C11 : C12 || CT.C12;
    }
    get [_cartIsVisible]() {
      return this[_thumbnailOpacityAnimation].value === 0.0;
    }
    [_buildThumbnails](numProducts) {
      return new basic.ExcludeSemantics.new({child: new basic.Opacity.new({opacity: this[_thumbnailOpacityAnimation].value, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new implicit_animations.AnimatedPadding.new({padding: this[_cartPaddingFor](numProducts), child: C13 || CT.C13, duration: C15 || CT.C15, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new container.Container.new({width: dart.notNull(numProducts) > 3 ? dart.notNull(this[_width]) - 94.0 : dart.notNull(this[_width]) - 64.0, height: 56, padding: C21 || CT.C21, child: new expanding_bottom_sheet.ProductThumbnailRow.new({$creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new expanding_bottom_sheet.ExtraProductsNumber.new({$creationLocationd_0dea112b090073317d4: C30 || CT.C30})]), $creationLocationd_0dea112b090073317d4: C31 || CT.C31})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
    [_buildShoppingCartPage]() {
      return new basic.Opacity.new({opacity: this[_cartOpacityAnimation].value, child: new shopping_cart.ShoppingCartPage.new({$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45});
    }
    [_buildCart](context, child) {
      let model = scoped_model.ScopedModel.of(app_state_model.AppStateModel, context);
      let numProducts = model.productsInCart[$keys][$length];
      let totalCartQuantity = model.totalCartQuantity;
      let screenSize = media_query.MediaQuery.of(context).size;
      let screenWidth = screenSize.width;
      let screenHeight = screenSize.height;
      this[_width] = this[_widthFor](numProducts);
      this[_widthAnimation] = this[_getWidthAnimation](screenWidth);
      this[_heightAnimation] = this[_getHeightAnimation](screenHeight);
      this[_shapeAnimation] = this[_getShapeAnimation]();
      this[_thumbnailOpacityAnimation] = this[_getThumbnailOpacityAnimation]();
      this[_cartOpacityAnimation] = this[_getCartOpacityAnimation]();
      return new basic.Semantics.new({button: true, value: "Shopping cart, " + dart.str(totalCartQuantity) + " items", child: new container.Container.new({width: this[_widthAnimation].value, height: this[_heightAnimation].value, child: new material.Material.new({animationDuration: C49 || CT.C49, shape: new beveled_rectangle_border.BeveledRectangleBorder.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(this[_shapeAnimation].value)})}), elevation: 4.0, color: colors.kShrinePink50, child: dart.test(this[_cartIsVisible]) ? this[_buildShoppingCartPage]() : this[_buildThumbnails](numProducts), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
    }
    [_buildSlideAnimation](context, child) {
      this[_slideAnimation] = expanding_bottom_sheet._getEmphasizedEasingAnimation(ui.Offset, {begin: C67 || CT.C67, peak: C68 || CT.C68, end: C69 || CT.C69, isForward: dart.equals(this.widget.hideController.status, animation.AnimationStatus.forward), parent: this.widget.hideController});
      return new transitions.SlideTransition.new({position: this[_slideAnimation], child: child, $creationLocationd_0dea112b090073317d4: C70 || CT.C70});
    }
    [_onWillPop]() {
      return async.async(core.bool, (function* _onWillPop() {
        if (!dart.test(this[_isOpen])) {
          yield system_navigator.SystemNavigator.pop();
          return true;
        }
        this.close();
        return true;
      }).bind(this));
    }
    build(context) {
      return new animated_size.AnimatedSize.new({key: this[_expandingBottomSheetKey], duration: C15 || CT.C15, curve: curves.Curves.easeInOut, vsync: this, alignment: fractional_offset.FractionalOffset.topLeft, child: new will_pop_scope.WillPopScope.new({onWillPop: dart.bind(this, _onWillPop), child: new transitions.AnimatedBuilder.new({animation: this.widget.hideController, builder: dart.bind(this, _buildSlideAnimation), child: new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTap: dart.bind(this, 'open'), child: new (ScopedModelDescendantOfAppStateModel()).new({builder: dart.fn((context, child, model) => new transitions.AnimatedBuilder.new({builder: dart.bind(this, _buildCart), animation: this[_controller], $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), BuildContextAndWidgetAndAppStateModelToAnimatedBuilder()), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
    }
  };
  (expanding_bottom_sheet._ExpandingBottomSheetState.new = function() {
    this[_expandingBottomSheetKey] = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Expanding bottom sheet"});
    this[_width] = 64;
    this[_controller] = null;
    this[_widthAnimation] = null;
    this[_heightAnimation] = null;
    this[_thumbnailOpacityAnimation] = null;
    this[_cartOpacityAnimation] = null;
    this[_shapeAnimation] = null;
    this[_slideAnimation] = null;
    expanding_bottom_sheet._ExpandingBottomSheetState.__proto__.new.call(this);
    ;
  }).prototype = expanding_bottom_sheet._ExpandingBottomSheetState.prototype;
  dart.addTypeTests(expanding_bottom_sheet._ExpandingBottomSheetState);
  dart.setMethodSignature(expanding_bottom_sheet._ExpandingBottomSheetState, () => ({
    __proto__: dart.getMethods(expanding_bottom_sheet._ExpandingBottomSheetState.__proto__),
    [_getWidthAnimation]: dart.fnType(animation.Animation$(core.double), [core.double]),
    [_getHeightAnimation]: dart.fnType(animation.Animation$(core.double), [core.double]),
    [_getShapeAnimation]: dart.fnType(animation.Animation$(core.double), []),
    [_getThumbnailOpacityAnimation]: dart.fnType(animation.Animation$(core.double), []),
    [_getCartOpacityAnimation]: dart.fnType(animation.Animation$(core.double), []),
    [_widthFor]: dart.fnType(core.double, [core.int]),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    [_cartPaddingFor]: dart.fnType(edge_insets.EdgeInsetsDirectional, [core.int]),
    [_buildThumbnails]: dart.fnType(framework.Widget, [core.int]),
    [_buildShoppingCartPage]: dart.fnType(framework.Widget, []),
    [_buildCart]: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget]),
    [_buildSlideAnimation]: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget]),
    [_onWillPop]: dart.fnType(async.Future$(core.bool), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(expanding_bottom_sheet._ExpandingBottomSheetState, () => ({
    __proto__: dart.getGetters(expanding_bottom_sheet._ExpandingBottomSheetState.__proto__),
    [_isOpen]: core.bool,
    [_cartIsVisible]: core.bool
  }));
  dart.setLibraryUri(expanding_bottom_sheet._ExpandingBottomSheetState, "package:flutter_gallery/demo/shrine/expanding_bottom_sheet.dart");
  dart.setFieldSignature(expanding_bottom_sheet._ExpandingBottomSheetState, () => ({
    __proto__: dart.getFields(expanding_bottom_sheet._ExpandingBottomSheetState.__proto__),
    [_expandingBottomSheetKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_width]: dart.fieldType(core.double),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_widthAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_heightAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_thumbnailOpacityAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_cartOpacityAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_shapeAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_slideAnimation]: dart.fieldType(animation.Animation$(ui.Offset))
  }));
  expanding_bottom_sheet.ProductThumbnailRow = class ProductThumbnailRow extends framework.StatefulWidget {
    createState() {
      return new expanding_bottom_sheet._ProductThumbnailRowState.new();
    }
  };
  (expanding_bottom_sheet.ProductThumbnailRow.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    expanding_bottom_sheet.ProductThumbnailRow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = expanding_bottom_sheet.ProductThumbnailRow.prototype;
  dart.addTypeTests(expanding_bottom_sheet.ProductThumbnailRow);
  dart.setMethodSignature(expanding_bottom_sheet.ProductThumbnailRow, () => ({
    __proto__: dart.getMethods(expanding_bottom_sheet.ProductThumbnailRow.__proto__),
    createState: dart.fnType(expanding_bottom_sheet._ProductThumbnailRowState, [])
  }));
  dart.setLibraryUri(expanding_bottom_sheet.ProductThumbnailRow, "package:flutter_gallery/demo/shrine/expanding_bottom_sheet.dart");
  const _listKey = dart.privateName(expanding_bottom_sheet, "_listKey");
  const _list = dart.privateName(expanding_bottom_sheet, "_list");
  const _internalList = dart.privateName(expanding_bottom_sheet, "_internalList");
  const _buildRemovedThumbnail = dart.privateName(expanding_bottom_sheet, "_buildRemovedThumbnail");
  const _productWithId = dart.privateName(expanding_bottom_sheet, "_productWithId");
  let C105;
  let C106;
  let C107;
  let C104;
  let C103;
  let C109;
  let C108;
  let C110;
  let C113;
  let C114;
  let C115;
  let C112;
  let C111;
  const _buildThumbnail = dart.privateName(expanding_bottom_sheet, "_buildThumbnail");
  const _updateLists = dart.privateName(expanding_bottom_sheet, "_updateLists");
  const ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  let C116;
  let C119;
  let C120;
  let C121;
  let C122;
  let C123;
  let C124;
  let C118;
  let C117;
  const _buildAnimatedList = dart.privateName(expanding_bottom_sheet, "_buildAnimatedList");
  let C127;
  let C126;
  let C125;
  expanding_bottom_sheet._ProductThumbnailRowState = class _ProductThumbnailRowState extends framework.State$(expanding_bottom_sheet.ProductThumbnailRow) {
    initState() {
      super.initState();
      this[_list] = new expanding_bottom_sheet._ListModel.new({listKey: this[_listKey], initialItems: scoped_model.ScopedModel.of(app_state_model.AppStateModel, this.context).productsInCart[$keys][$toList](), removedItemBuilder: dart.bind(this, _buildRemovedThumbnail)});
      this[_internalList] = ListOfint().from(this[_list].list);
    }
    [_productWithId](productId) {
      let model = scoped_model.ScopedModel.of(app_state_model.AppStateModel, this.context);
      let product = model.getProductById(productId);
      if (!(product != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart", 453, 12, "product != null");
      return product;
    }
    [_buildRemovedThumbnail](item, context, animation) {
      return new expanding_bottom_sheet.ProductThumbnail.new(animation, animation, this[_productWithId](item), {$creationLocationd_0dea112b090073317d4: C103 || CT.C103});
    }
    [_buildThumbnail](context, index, animation) {
      let thumbnailSize = new (TweenOfdouble()).new({begin: 0.8, end: 1.0}).animate(new animations.CurvedAnimation.new({curve: C108 || CT.C108, parent: animation}));
      let opacity = new animations.CurvedAnimation.new({curve: C110 || CT.C110, parent: animation});
      return new expanding_bottom_sheet.ProductThumbnail.new(thumbnailSize, opacity, this[_productWithId](this[_list]._get(index)), {$creationLocationd_0dea112b090073317d4: C111 || CT.C111});
    }
    [_updateLists]() {
      this[_internalList] = scoped_model.ScopedModel.of(app_state_model.AppStateModel, this.context).productsInCart[$keys][$toList]();
      let internalSet = LinkedHashSetOfint().from(this[_internalList]);
      let listSet = LinkedHashSetOfint().from(this[_list].list);
      let difference = internalSet.difference(listSet);
      if (dart.test(difference[$isEmpty])) {
        return;
      }
      for (let product of difference) {
        if (dart.notNull(this[_internalList][$length]) < dart.notNull(this[_list].length)) {
          this[_list].remove(product);
        } else if (dart.notNull(this[_internalList][$length]) > dart.notNull(this[_list].length)) {
          this[_list].add(product);
        }
      }
      while (this[_internalList][$length] != this[_list].length) {
        let index = 0;
        while (dart.test(this[_internalList][$isNotEmpty]) && dart.notNull(this[_list].length) > 0 && index < dart.notNull(this[_internalList][$length]) && index < dart.notNull(this[_list].length) && this[_internalList][$_get](index) == this[_list]._get(index)) {
          index = index + 1;
        }
      }
    }
    [_buildAnimatedList]() {
      return new animated_list.AnimatedList.new({key: this[_listKey], shrinkWrap: true, itemBuilder: dart.bind(this, _buildThumbnail), initialItemCount: this[_list].length, scrollDirection: basic_types.Axis.horizontal, physics: C116 || CT.C116, $creationLocationd_0dea112b090073317d4: C117 || CT.C117});
    }
    build(context) {
      this[_updateLists]();
      return new (ScopedModelDescendantOfAppStateModel()).new({builder: dart.fn((context, child, model) => this[_buildAnimatedList](), BuildContextAndWidgetAndAppStateModelToWidget()), $creationLocationd_0dea112b090073317d4: C125 || CT.C125});
    }
  };
  (expanding_bottom_sheet._ProductThumbnailRowState.new = function() {
    this[_listKey] = GlobalKeyOfAnimatedListState().new();
    this[_list] = null;
    this[_internalList] = null;
    expanding_bottom_sheet._ProductThumbnailRowState.__proto__.new.call(this);
    ;
  }).prototype = expanding_bottom_sheet._ProductThumbnailRowState.prototype;
  dart.addTypeTests(expanding_bottom_sheet._ProductThumbnailRowState);
  dart.setMethodSignature(expanding_bottom_sheet._ProductThumbnailRowState, () => ({
    __proto__: dart.getMethods(expanding_bottom_sheet._ProductThumbnailRowState.__proto__),
    [_productWithId]: dart.fnType(product.Product, [core.int]),
    [_buildRemovedThumbnail]: dart.fnType(framework.Widget, [core.int, framework.BuildContext, animation.Animation$(core.double)]),
    [_buildThumbnail]: dart.fnType(framework.Widget, [framework.BuildContext, core.int, animation.Animation$(core.double)]),
    [_updateLists]: dart.fnType(dart.void, []),
    [_buildAnimatedList]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(expanding_bottom_sheet._ProductThumbnailRowState, "package:flutter_gallery/demo/shrine/expanding_bottom_sheet.dart");
  dart.setFieldSignature(expanding_bottom_sheet._ProductThumbnailRowState, () => ({
    __proto__: dart.getFields(expanding_bottom_sheet._ProductThumbnailRowState.__proto__),
    [_listKey]: dart.finalFieldType(framework.GlobalKey$(animated_list.AnimatedListState)),
    [_list]: dart.fieldType(expanding_bottom_sheet._ListModel),
    [_internalList]: dart.fieldType(core.List$(core.int))
  }));
  const _calculateOverflow = dart.privateName(expanding_bottom_sheet, "_calculateOverflow");
  let C128;
  let C131;
  let C132;
  let C130;
  let C129;
  let C135;
  let C134;
  let C133;
  const _buildOverflow = dart.privateName(expanding_bottom_sheet, "_buildOverflow");
  let C138;
  let C137;
  let C136;
  expanding_bottom_sheet.ExtraProductsNumber = class ExtraProductsNumber extends framework.StatelessWidget {
    [_calculateOverflow](model) {
      let productMap = model.productsInCart;
      let products = productMap[$keys][$toList]();
      let overflow = 0;
      let numProducts = products[$length];
      if (dart.notNull(numProducts) > 3) {
        for (let i = 3; i < dart.notNull(numProducts); i = i + 1) {
          overflow = overflow + dart.notNull(productMap[$_get](products[$_get](i)));
        }
      }
      return overflow;
    }
    [_buildOverflow](model, context) {
      if (dart.notNull(model.productsInCart[$length]) <= 3) return new container.Container.new({$creationLocationd_0dea112b090073317d4: C128 || CT.C128});
      let numOverflowProducts = this[_calculateOverflow](model);
      let displayedOverflowProducts = dart.notNull(numOverflowProducts) <= 99 ? numOverflowProducts : 99;
      return new container.Container.new({child: new text.Text.new("+" + dart.str(displayedOverflowProducts), {style: theme.Theme.of(context).primaryTextTheme.button, $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), $creationLocationd_0dea112b090073317d4: C133 || CT.C133});
    }
    build(context) {
      return new (ScopedModelDescendantOfAppStateModel()).new({builder: dart.fn((builder, child, model) => this[_buildOverflow](model, context), BuildContextAndWidgetAndAppStateModelToWidget()), $creationLocationd_0dea112b090073317d4: C136 || CT.C136});
    }
  };
  (expanding_bottom_sheet.ExtraProductsNumber.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    expanding_bottom_sheet.ExtraProductsNumber.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = expanding_bottom_sheet.ExtraProductsNumber.prototype;
  dart.addTypeTests(expanding_bottom_sheet.ExtraProductsNumber);
  dart.setMethodSignature(expanding_bottom_sheet.ExtraProductsNumber, () => ({
    __proto__: dart.getMethods(expanding_bottom_sheet.ExtraProductsNumber.__proto__),
    [_calculateOverflow]: dart.fnType(core.int, [app_state_model.AppStateModel]),
    [_buildOverflow]: dart.fnType(framework.Widget, [app_state_model.AppStateModel, framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(expanding_bottom_sheet.ExtraProductsNumber, "package:flutter_gallery/demo/shrine/expanding_bottom_sheet.dart");
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C140;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C139;
  let C141;
  let C144;
  let C145;
  let C146;
  let C147;
  let C143;
  let C142;
  let C150;
  let C151;
  let C149;
  let C148;
  let C154;
  let C155;
  let C153;
  let C152;
  const ProductThumbnail_animation = dart.privateName(expanding_bottom_sheet, "ProductThumbnail.animation");
  const ProductThumbnail_opacityAnimation = dart.privateName(expanding_bottom_sheet, "ProductThumbnail.opacityAnimation");
  const ProductThumbnail_product = dart.privateName(expanding_bottom_sheet, "ProductThumbnail.product");
  expanding_bottom_sheet.ProductThumbnail = class ProductThumbnail extends framework.StatelessWidget {
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    get opacityAnimation() {
      return this[opacityAnimation$];
    }
    set opacityAnimation(value) {
      super.opacityAnimation = value;
    }
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    build(context) {
      return new transitions.FadeTransition.new({opacity: this.opacityAnimation, child: new transitions.ScaleTransition.new({scale: this.animation, child: new container.Container.new({width: 40.0, height: 40.0, decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new image_provider.ExactAssetImage.new(this.product.assetName, {package: this.product.assetPackage}), fit: box_fit.BoxFit.cover}), borderRadius: C139 || CT.C139}), margin: C141 || CT.C141, $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152});
    }
  };
  (expanding_bottom_sheet.ProductThumbnail.new = function(animation, opacityAnimation, product, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[animation$] = animation;
    this[opacityAnimation$] = opacityAnimation;
    this[product$] = product;
    expanding_bottom_sheet.ProductThumbnail.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = expanding_bottom_sheet.ProductThumbnail.prototype;
  dart.addTypeTests(expanding_bottom_sheet.ProductThumbnail);
  const animation$ = ProductThumbnail_animation;
  const opacityAnimation$ = ProductThumbnail_opacityAnimation;
  const product$ = ProductThumbnail_product;
  dart.setMethodSignature(expanding_bottom_sheet.ProductThumbnail, () => ({
    __proto__: dart.getMethods(expanding_bottom_sheet.ProductThumbnail.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(expanding_bottom_sheet.ProductThumbnail, "package:flutter_gallery/demo/shrine/expanding_bottom_sheet.dart");
  dart.setFieldSignature(expanding_bottom_sheet.ProductThumbnail, () => ({
    __proto__: dart.getFields(expanding_bottom_sheet.ProductThumbnail.__proto__),
    animation: dart.finalFieldType(animation.Animation$(core.double)),
    opacityAnimation: dart.finalFieldType(animation.Animation$(core.double)),
    product: dart.finalFieldType(product.Product)
  }));
  const _items = dart.privateName(expanding_bottom_sheet, "_items");
  const _animatedList = dart.privateName(expanding_bottom_sheet, "_animatedList");
  const _insert = dart.privateName(expanding_bottom_sheet, "_insert");
  const _removeAt = dart.privateName(expanding_bottom_sheet, "_removeAt");
  expanding_bottom_sheet._ListModel = class _ListModel extends core.Object {
    get [_animatedList]() {
      return this.listKey.currentState;
    }
    add(product) {
      this[_insert](this[_items][$length], product);
    }
    [_insert](index, item) {
      this[_items][$insert](index, item);
      this[_animatedList].insertItem(index, {duration: C15 || CT.C15});
    }
    remove(product) {
      let index = this[_items][$indexOf](product);
      if (dart.notNull(index) >= 0) {
        this[_removeAt](index);
      }
    }
    [_removeAt](index) {
      let removedItem = this[_items][$removeAt](index);
      if (removedItem != null) {
        this[_animatedList].removeItem(index, dart.fn((context, animation) => framework.Widget._check(dart.dsend(this, 'removedItemBuilder', [removedItem, context, animation])), BuildContextAndAnimationOfdoubleToWidget()));
      }
    }
    get length() {
      return this[_items][$length];
    }
    _get(index) {
      return this[_items][$_get](index);
    }
    indexOf(item) {
      return this[_items][$indexOf](item);
    }
    get list() {
      return this[_items];
    }
  };
  (expanding_bottom_sheet._ListModel.new = function(opts) {
    let t0, t0$;
    let listKey = opts && 'listKey' in opts ? opts.listKey : null;
    let removedItemBuilder = opts && 'removedItemBuilder' in opts ? opts.removedItemBuilder : null;
    let initialItems = opts && 'initialItems' in opts ? opts.initialItems : null;
    this.listKey = listKey;
    this.removedItemBuilder = removedItemBuilder;
    if (!(listKey != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart", 614, 15, "listKey != null");
    if (!(removedItemBuilder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/expanding_bottom_sheet.dart", 615, 15, "removedItemBuilder != null");
    this[_items] = (t0$ = (t0 = initialItems, t0 == null ? null : t0[$toList]()), t0$ == null ? JSArrayOfint().of([]) : t0$);
    ;
  }).prototype = expanding_bottom_sheet._ListModel.prototype;
  dart.addTypeTests(expanding_bottom_sheet._ListModel);
  dart.setMethodSignature(expanding_bottom_sheet._ListModel, () => ({
    __proto__: dart.getMethods(expanding_bottom_sheet._ListModel.__proto__),
    add: dart.fnType(dart.void, [core.int]),
    [_insert]: dart.fnType(dart.void, [core.int, core.int]),
    remove: dart.fnType(dart.void, [core.int]),
    [_removeAt]: dart.fnType(dart.void, [core.int]),
    _get: dart.fnType(core.int, [core.int]),
    indexOf: dart.fnType(core.int, [core.int])
  }));
  dart.setGetterSignature(expanding_bottom_sheet._ListModel, () => ({
    __proto__: dart.getGetters(expanding_bottom_sheet._ListModel.__proto__),
    [_animatedList]: animated_list.AnimatedListState,
    length: core.int,
    list: core.List$(core.int)
  }));
  dart.setLibraryUri(expanding_bottom_sheet._ListModel, "package:flutter_gallery/demo/shrine/expanding_bottom_sheet.dart");
  dart.setFieldSignature(expanding_bottom_sheet._ListModel, () => ({
    __proto__: dart.getFields(expanding_bottom_sheet._ListModel.__proto__),
    listKey: dart.finalFieldType(framework.GlobalKey$(animated_list.AnimatedListState)),
    removedItemBuilder: dart.finalFieldType(dart.dynamic),
    [_items]: dart.finalFieldType(core.List$(core.int))
  }));
  expanding_bottom_sheet._getEmphasizedEasingAnimation = function _getEmphasizedEasingAnimation(T, opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let peak = opts && 'peak' in opts ? opts.peak : null;
    let end = opts && 'end' in opts ? opts.end : null;
    let isForward = opts && 'isForward' in opts ? opts.isForward : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let firstCurve = null;
    let secondCurve = null;
    let firstWeight = null;
    let secondWeight = null;
    if (dart.test(isForward)) {
      firstCurve = expanding_bottom_sheet._kAccelerateCurve;
      secondCurve = expanding_bottom_sheet._kDecelerateCurve;
      firstWeight = 0.24821;
      secondWeight = 1.0 - 0.24821;
    } else {
      firstCurve = expanding_bottom_sheet._kDecelerateCurve.flipped;
      secondCurve = expanding_bottom_sheet._kAccelerateCurve.flipped;
      firstWeight = 1.0 - 0.24821;
      secondWeight = 0.24821;
    }
    return new (tween_sequence.TweenSequence$(T)).new(_interceptors.JSArray$(tween_sequence.TweenSequenceItem$(T)).of([new (tween_sequence.TweenSequenceItem$(T)).new({weight: firstWeight, tween: new (tween.Tween$(T)).new({begin: begin, end: peak}).chain(new tween.CurveTween.new({curve: firstCurve}))}), new (tween_sequence.TweenSequenceItem$(T)).new({weight: secondWeight, tween: new (tween.Tween$(T)).new({begin: peak, end: end}).chain(new tween.CurveTween.new({curve: secondCurve}))})])).animate(parent);
  };
  expanding_bottom_sheet._getPeakPoint = function _getPeakPoint(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    return dart.notNull(begin) + (dart.notNull(end) - dart.notNull(begin)) * 0.379146;
  };
  let C156;
  let C157;
  dart.defineLazy(expanding_bottom_sheet, {
    /*expanding_bottom_sheet._kAccelerateCurve*/get _kAccelerateCurve() {
      return C156 || CT.C156;
    },
    /*expanding_bottom_sheet._kDecelerateCurve*/get _kDecelerateCurve() {
      return C157 || CT.C157;
    },
    /*expanding_bottom_sheet._kPeakVelocityTime*/get _kPeakVelocityTime() {
      return 0.24821;
    },
    /*expanding_bottom_sheet._kPeakVelocityProgress*/get _kPeakVelocityProgress() {
      return 0.379146;
    },
    /*expanding_bottom_sheet._kCartHeight*/get _kCartHeight() {
      return 56;
    },
    /*expanding_bottom_sheet._kCornerRadius*/get _kCornerRadius() {
      return 24;
    },
    /*expanding_bottom_sheet._kWidthForCartIcon*/get _kWidthForCartIcon() {
      return 64;
    }
  });
  shopping_cart.ShoppingCartPage = class ShoppingCartPage extends framework.StatefulWidget {
    createState() {
      return new shopping_cart._ShoppingCartPageState.new();
    }
  };
  (shopping_cart.ShoppingCartPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    shopping_cart.ShoppingCartPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shopping_cart.ShoppingCartPage.prototype;
  dart.addTypeTests(shopping_cart.ShoppingCartPage);
  dart.setMethodSignature(shopping_cart.ShoppingCartPage, () => ({
    __proto__: dart.getMethods(shopping_cart.ShoppingCartPage.__proto__),
    createState: dart.fnType(shopping_cart._ShoppingCartPageState, [])
  }));
  dart.setLibraryUri(shopping_cart.ShoppingCartPage, "package:flutter_gallery/demo/shrine/shopping_cart.dart");
  let C160;
  let C161;
  let C162;
  let C159;
  let C158;
  const _createShoppingCartRows = dart.privateName(shopping_cart, "_createShoppingCartRows");
  let C164;
  let C163;
  let C167;
  let C168;
  let C166;
  let C165;
  let C171;
  let C172;
  let C170;
  let C169;
  let C175;
  let C176;
  let C174;
  let C173;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C177;
  let C180;
  let C179;
  let C178;
  let C183;
  let C182;
  let C181;
  let C184;
  let C187;
  let C186;
  let C185;
  let C190;
  let C189;
  let C188;
  let C191;
  let C194;
  let C193;
  let C192;
  let C197;
  let C196;
  const BeveledRectangleBorder_borderRadius = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.borderRadius");
  const _name = dart.privateName(borders, "_name");
  let C199;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C200;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C198;
  const BeveledRectangleBorder_side = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.side");
  let C195;
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
  let C202;
  let C203;
  const Padding_padding = dart.privateName(basic, "Padding.padding");
  let C201;
  let C206;
  let C207;
  let C208;
  let C209;
  let C210;
  let C205;
  let C204;
  let C213;
  let C214;
  let C215;
  let C216;
  let C212;
  let C211;
  let C219;
  let C218;
  let C217;
  let C222;
  let C221;
  let C220;
  let C225;
  let C224;
  let C223;
  let C228;
  let C227;
  let C226;
  let C231;
  let C232;
  let C230;
  let C229;
  shopping_cart._ShoppingCartPageState = class _ShoppingCartPageState extends framework.State$(shopping_cart.ShoppingCartPage) {
    [_createShoppingCartRows](model) {
      return model.productsInCart[$keys][$map](shopping_cart.ShoppingCartRow, dart.fn(id => new shopping_cart.ShoppingCartRow.new({product: model.getProductById(id), quantity: model.productsInCart[$_get](id), onPressed: dart.fn(() => {
          model.removeItemFromCart(id);
        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), intToShoppingCartRow()))[$toList]();
    }
    build(context) {
      let localTheme = theme.Theme.of(context);
      return new scaffold.Scaffold.new({backgroundColor: colors.kShrinePink50, body: new safe_area.SafeArea.new({child: new container.Container.new({child: new (ScopedModelDescendantOfAppStateModel()).new({builder: dart.fn((context, child, model) => new basic.Stack.new({children: JSArrayOfWidget().of([new scroll_view.ListView.new({children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 60, child: new icon_button.IconButton.new({icon: C163 || CT.C163, onPressed: dart.fn(() => expanding_bottom_sheet.ExpandingBottomSheet.of(context).close(), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169}), new text.Text.new("CART", {style: localTheme.textTheme.subhead.copyWith({fontWeight: ui.FontWeight.w600}), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), C177 || CT.C177, new text.Text.new(dart.str(model.totalCartQuantity) + " ITEMS", {$creationLocationd_0dea112b090073317d4: C178 || CT.C178})]), $creationLocationd_0dea112b090073317d4: C181 || CT.C181}), C184 || CT.C184, new basic.Column.new({children: this[_createShoppingCartRows](model), $creationLocationd_0dea112b090073317d4: C185 || CT.C185}), new shopping_cart.ShoppingCartSummary.new({model: model, $creationLocationd_0dea112b090073317d4: C188 || CT.C188}), C191 || CT.C191]), $creationLocationd_0dea112b090073317d4: C192 || CT.C192}), new basic.Positioned.new({bottom: 16.0, left: 16.0, right: 16.0, child: new raised_button.RaisedButton.new({shape: C195 || CT.C195, color: colors.kShrinePink100, splashColor: colors.kShrineBrown600, child: C201 || CT.C201, onPressed: dart.fn(() => {
                        model.clearCart();
                        expanding_bottom_sheet.ExpandingBottomSheet.of(context).close();
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), $creationLocationd_0dea112b090073317d4: C211 || CT.C211})]), $creationLocationd_0dea112b090073317d4: C217 || CT.C217}), BuildContextAndWidgetAndAppStateModelToStack()), $creationLocationd_0dea112b090073317d4: C220 || CT.C220}), $creationLocationd_0dea112b090073317d4: C223 || CT.C223}), $creationLocationd_0dea112b090073317d4: C226 || CT.C226}), $creationLocationd_0dea112b090073317d4: C229 || CT.C229});
    }
  };
  (shopping_cart._ShoppingCartPageState.new = function() {
    shopping_cart._ShoppingCartPageState.__proto__.new.call(this);
    ;
  }).prototype = shopping_cart._ShoppingCartPageState.prototype;
  dart.addTypeTests(shopping_cart._ShoppingCartPageState);
  dart.setMethodSignature(shopping_cart._ShoppingCartPageState, () => ({
    __proto__: dart.getMethods(shopping_cart._ShoppingCartPageState.__proto__),
    [_createShoppingCartRows]: dart.fnType(core.List$(framework.Widget), [app_state_model.AppStateModel]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shopping_cart._ShoppingCartPageState, "package:flutter_gallery/demo/shrine/shopping_cart.dart");
  let C233;
  let C234;
  let C236;
  const ProxyWidget_child = dart.privateName(framework, "ProxyWidget.child");
  const _name$ = dart.privateName(flex, "_name");
  let C237;
  const Flexible_fit = dart.privateName(basic, "Flexible.fit");
  const Flexible_flex = dart.privateName(basic, "Flexible.flex");
  let C235;
  let C240;
  let C241;
  let C239;
  let C238;
  let C244;
  let C245;
  let C243;
  let C242;
  let C247;
  let C246;
  let C250;
  let C251;
  let C249;
  let C248;
  let C254;
  let C253;
  let C252;
  let C255;
  let C257;
  let C256;
  let C260;
  let C261;
  let C259;
  let C258;
  let C264;
  let C263;
  let C262;
  let C266;
  let C265;
  let C269;
  let C270;
  let C268;
  let C267;
  let C273;
  let C272;
  let C271;
  let C276;
  let C275;
  let C274;
  let C279;
  let C280;
  let C278;
  let C277;
  let C283;
  let C282;
  let C281;
  let C286;
  let C285;
  let C284;
  const ShoppingCartSummary_model = dart.privateName(shopping_cart, "ShoppingCartSummary.model");
  shopping_cart.ShoppingCartSummary = class ShoppingCartSummary extends framework.StatelessWidget {
    get model() {
      return this[model$];
    }
    set model(value) {
      super.model = value;
    }
    build(context) {
      let smallAmountStyle = theme.Theme.of(context).textTheme.body1.copyWith({color: colors.kShrineBrown600});
      let largeAmountStyle = theme.Theme.of(context).textTheme.display1;
      let formatter = intl.NumberFormat.simpleCurrency({decimalDigits: 2, locale: dart.toString(localizations.Localizations.localeOf(context))});
      return new basic.Row.new({children: JSArrayOfWidget().of([C233 || CT.C233, new basic.Expanded.new({child: new basic.Padding.new({padding: C234 || CT.C234, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([C235 || CT.C235, new text.Text.new(formatter.format(this.model.totalCost), {style: largeAmountStyle, $creationLocationd_0dea112b090073317d4: C238 || CT.C238})]), $creationLocationd_0dea112b090073317d4: C242 || CT.C242}), C184 || CT.C184, new basic.Row.new({children: JSArrayOfWidget().of([C246 || CT.C246, new text.Text.new(formatter.format(this.model.subtotalCost), {style: smallAmountStyle, $creationLocationd_0dea112b090073317d4: C248 || CT.C248})]), $creationLocationd_0dea112b090073317d4: C252 || CT.C252}), C255 || CT.C255, new basic.Row.new({children: JSArrayOfWidget().of([C256 || CT.C256, new text.Text.new(formatter.format(this.model.shippingCost), {style: smallAmountStyle, $creationLocationd_0dea112b090073317d4: C258 || CT.C258})]), $creationLocationd_0dea112b090073317d4: C262 || CT.C262}), C255 || CT.C255, new basic.Row.new({children: JSArrayOfWidget().of([C265 || CT.C265, new text.Text.new(formatter.format(this.model.tax), {style: smallAmountStyle, $creationLocationd_0dea112b090073317d4: C267 || CT.C267})]), $creationLocationd_0dea112b090073317d4: C271 || CT.C271})]), $creationLocationd_0dea112b090073317d4: C274 || CT.C274}), $creationLocationd_0dea112b090073317d4: C277 || CT.C277}), $creationLocationd_0dea112b090073317d4: C281 || CT.C281})]), $creationLocationd_0dea112b090073317d4: C284 || CT.C284});
    }
  };
  (shopping_cart.ShoppingCartSummary.new = function(opts) {
    let model = opts && 'model' in opts ? opts.model : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model$] = model;
    shopping_cart.ShoppingCartSummary.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shopping_cart.ShoppingCartSummary.prototype;
  dart.addTypeTests(shopping_cart.ShoppingCartSummary);
  const model$ = ShoppingCartSummary_model;
  dart.setMethodSignature(shopping_cart.ShoppingCartSummary, () => ({
    __proto__: dart.getMethods(shopping_cart.ShoppingCartSummary.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shopping_cart.ShoppingCartSummary, "package:flutter_gallery/demo/shrine/shopping_cart.dart");
  dart.setFieldSignature(shopping_cart.ShoppingCartSummary, () => ({
    __proto__: dart.getFields(shopping_cart.ShoppingCartSummary.__proto__),
    model: dart.finalFieldType(app_state_model.AppStateModel)
  }));
  let C287;
  let C289;
  let C288;
  let C292;
  let C293;
  let C291;
  let C290;
  let C296;
  let C297;
  let C295;
  let C294;
  let C300;
  let C301;
  let C302;
  let C303;
  let C304;
  let C299;
  let C298;
  let C307;
  let C306;
  let C305;
  let C310;
  let C309;
  let C308;
  let C313;
  let C312;
  let C311;
  let C316;
  let C315;
  let C314;
  let C319;
  let C320;
  let C318;
  let C317;
  let C323;
  let C324;
  let C322;
  let C321;
  let C327;
  let C326;
  let C325;
  let C330;
  let C331;
  let C329;
  let C328;
  let C333;
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_thickness = dart.privateName(divider, "Divider.thickness");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C332;
  let C336;
  let C335;
  let C334;
  let C339;
  let C340;
  let C338;
  let C337;
  let C343;
  let C342;
  let C341;
  let C346;
  let C347;
  let C348;
  let C345;
  let C344;
  let C351;
  let C352;
  let C350;
  let C349;
  const ShoppingCartRow_product = dart.privateName(shopping_cart, "ShoppingCartRow.product");
  const ShoppingCartRow_quantity = dart.privateName(shopping_cart, "ShoppingCartRow.quantity");
  const ShoppingCartRow_onPressed = dart.privateName(shopping_cart, "ShoppingCartRow.onPressed");
  shopping_cart.ShoppingCartRow = class ShoppingCartRow extends framework.StatelessWidget {
    get product() {
      return this[product$0];
    }
    set product(value) {
      super.product = value;
    }
    get quantity() {
      return this[quantity$];
    }
    set quantity(value) {
      super.quantity = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    build(context) {
      let formatter = intl.NumberFormat.simpleCurrency({decimalDigits: 0, locale: dart.toString(localizations.Localizations.localeOf(context))});
      let localTheme = theme.Theme.of(context);
      return new basic.Padding.new({padding: C287 || CT.C287, child: new basic.Row.new({key: new (ValueKeyOfint()).new(this.product.id), crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 60, child: new icon_button.IconButton.new({icon: C288 || CT.C288, onPressed: this.onPressed, $creationLocationd_0dea112b090073317d4: C290 || CT.C290}), $creationLocationd_0dea112b090073317d4: C294 || CT.C294}), new basic.Expanded.new({child: new basic.Padding.new({padding: C234 || CT.C234, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new image.Image.asset(this.product.assetName, {package: this.product.assetPackage, fit: box_fit.BoxFit.cover, width: 75.0, height: 75.0, $creationLocationd_0dea112b090073317d4: C298 || CT.C298}), C177 || CT.C177, new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new text.Text.new("Quantity: " + dart.str(this.quantity), {$creationLocationd_0dea112b090073317d4: C305 || CT.C305}), $creationLocationd_0dea112b090073317d4: C308 || CT.C308}), new text.Text.new("x " + dart.str(formatter.format(this.product.price)), {$creationLocationd_0dea112b090073317d4: C311 || CT.C311})]), $creationLocationd_0dea112b090073317d4: C314 || CT.C314}), new text.Text.new(this.product.name, {style: localTheme.textTheme.subhead.copyWith({fontWeight: ui.FontWeight.w600}), $creationLocationd_0dea112b090073317d4: C317 || CT.C317})]), $creationLocationd_0dea112b090073317d4: C321 || CT.C321}), $creationLocationd_0dea112b090073317d4: C325 || CT.C325})]), $creationLocationd_0dea112b090073317d4: C328 || CT.C328}), C184 || CT.C184, C332 || CT.C332]), $creationLocationd_0dea112b090073317d4: C334 || CT.C334}), $creationLocationd_0dea112b090073317d4: C337 || CT.C337}), $creationLocationd_0dea112b090073317d4: C341 || CT.C341})]), $creationLocationd_0dea112b090073317d4: C344 || CT.C344}), $creationLocationd_0dea112b090073317d4: C349 || CT.C349});
    }
  };
  (shopping_cart.ShoppingCartRow.new = function(opts) {
    let product = opts && 'product' in opts ? opts.product : null;
    let quantity = opts && 'quantity' in opts ? opts.quantity : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[product$0] = product;
    this[quantity$] = quantity;
    this[onPressed$] = onPressed;
    shopping_cart.ShoppingCartRow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shopping_cart.ShoppingCartRow.prototype;
  dart.addTypeTests(shopping_cart.ShoppingCartRow);
  const product$0 = ShoppingCartRow_product;
  const quantity$ = ShoppingCartRow_quantity;
  const onPressed$ = ShoppingCartRow_onPressed;
  dart.setMethodSignature(shopping_cart.ShoppingCartRow, () => ({
    __proto__: dart.getMethods(shopping_cart.ShoppingCartRow.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shopping_cart.ShoppingCartRow, "package:flutter_gallery/demo/shrine/shopping_cart.dart");
  dart.setFieldSignature(shopping_cart.ShoppingCartRow, () => ({
    __proto__: dart.getFields(shopping_cart.ShoppingCartRow.__proto__),
    product: dart.finalFieldType(product.Product),
    quantity: dart.finalFieldType(core.int),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  dart.defineLazy(shopping_cart, {
    /*shopping_cart._leftColumnWidth*/get _leftColumnWidth() {
      return 60;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/expanding_bottom_sheet", {
    "package:flutter_gallery/demo/shrine/expanding_bottom_sheet.dart": expanding_bottom_sheet,
    "package:flutter_gallery/demo/shrine/shopping_cart.dart": shopping_cart
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["expanding_bottom_sheet.dart","shopping_cart.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"expanding_bottom_sheet.ddc.js"}');
  // Exports:
  return {
    demo__shrine__expanding_bottom_sheet: expanding_bottom_sheet,
    demo__shrine__shopping_cart: shopping_cart
  };
});

//# sourceMappingURL=expanding_bottom_sheet.ddc.js.map
