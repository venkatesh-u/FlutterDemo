define(['dart_sdk', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/demo/animation/widgets', 'packages/flutter_gallery/demo/animation/sections', 'packages/flutter/src/physics/clamped_simulation', 'packages/flutter/material', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__rendering__animated_size, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__demo__animation__widgets, packages__flutter_gallery__demo__animation__sections, packages__flutter__src__physics__clamped_simulation, packages__flutter__material, packages__flutter__src__gestures__arena, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sliver = packages__flutter__src__rendering__animated_size.src__rendering__sliver;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const custom_layout = packages__flutter__src__rendering__animated_size.src__rendering__custom_layout;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const sliver_persistent_header = packages__flutter__src__widgets__actions.src__widgets__sliver_persistent_header;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const scroll_controller = packages__flutter__src__widgets__actions.src__widgets__scroll_controller;
  const page_view = packages__flutter__src__widgets__actions.src__widgets__page_view;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scroll_notification = packages__flutter__src__widgets__actions.src__widgets__scroll_notification;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const notification_listener = packages__flutter__src__widgets__actions.src__widgets__notification_listener;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const icon_theme = packages__flutter__src__widgets__actions.src__widgets__icon_theme;
  const icon_theme_data = packages__flutter__src__widgets__actions.src__widgets__icon_theme_data;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const widgets = packages__flutter_gallery__demo__animation__widgets.demo__animation__widgets;
  const sections = packages__flutter_gallery__demo__animation__sections.demo__animation__sections;
  const spring_simulation = packages__flutter__src__physics__clamped_simulation.src__physics__spring_simulation;
  const simulation = packages__flutter__src__physics__clamped_simulation.src__physics__simulation;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const back_button = packages__flutter__material.src__material__back_button;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const home = Object.create(dart.library);
  const $clamp = dartx.clamp;
  const $length = dartx.length;
  const $toDouble = dartx.toDouble;
  const $abs = dartx.abs;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $_equals = dartx._equals;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let ValueNotifierOfdouble = () => (ValueNotifierOfdouble = dart.constFn(change_notifier.ValueNotifier$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let SectionDetailToSectionDetailView = () => (SectionDetailToSectionDetailView = dart.constFn(dart.fnType(widgets.SectionDetailView, [sections.SectionDetail])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let TapUpDetailsToNull = () => (TapUpDetailsToNull = dart.constFn(dart.fnType(core.Null, [tap.TapUpDetails])))();
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))();
  let ScrollNotificationTobool = () => (ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))();
  let SectionToColumn = () => (SectionToColumn = dart.constFn(dart.fnType(basic.Column, [sections.Section])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C3() {
      return C3 = dart.constList([], framework.Widget);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "section",
        [_Location_column]: 11,
        [_Location_line]: 328,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 11,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 327,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 9,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 327,
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
        [_Location_line]: 325,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 339,
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
        [_Location_column]: 16,
        [_Location_line]: 338,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 9,
        [_Location_line]: 337,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 338,
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
        [_Location_column]: 20,
        [_Location_line]: 336,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 7,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 352,
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
        [_Location_line]: 344,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 26,
        [_Location_line]: 358,
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
        [_Location_column]: 12,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: scroll_physics.NeverScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 441,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 441,
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
        [_Location_column]: 12,
        [_Location_line]: 439,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: page_view.PageScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "detail",
        [_Location_column]: 32,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 496,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "section",
        [_Location_column]: 30,
        [_Location_line]: 508,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 508,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 11,
        [_Location_line]: 507,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 508,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 11,
        [_Location_line]: 509,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 506,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 9,
        [_Location_line]: 505,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 506,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 504,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sectionIndex",
        [_Location_column]: 15,
        [_Location_line]: 525,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sections",
        [_Location_column]: 15,
        [_Location_line]: 526,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedIndex",
        [_Location_column]: 15,
        [_Location_line]: 527,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minHeight",
        [_Location_column]: 15,
        [_Location_line]: 528,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "midHeight",
        [_Location_column]: 15,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxHeight",
        [_Location_column]: 15,
        [_Location_line]: 530,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sectionCards",
        [_Location_column]: 15,
        [_Location_line]: 531,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 524,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 524,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 523,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 522,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 523,
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
        [_Location_line]: 521,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxHeight",
        [_Location_column]: 19,
        [_Location_line]: 562,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollFactor",
        [_Location_column]: 19,
        [_Location_line]: 563,
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
        [_Location_column]: 17,
        [_Location_line]: 561,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 25,
        [_Location_line]: 576,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 25,
        [_Location_line]: 577,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 578,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 575,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 23,
        [_Location_line]: 572,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 575,
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
        [_Location_column]: 28,
        [_Location_line]: 571,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pinned",
        [_Location_column]: 19,
        [_Location_line]: 567,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 19,
        [_Location_line]: 568,
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
        [_Location_column]: 17,
        [_Location_line]: 566,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 595,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 596,
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
        [_Location_column]: 34,
        [_Location_line]: 594,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 25,
        [_Location_line]: 592,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 593,
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
        [_Location_column]: 30,
        [_Location_line]: 591,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 23,
        [_Location_line]: 588,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 591,
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
        [_Location_column]: 28,
        [_Location_line]: 587,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 586,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 587,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 585,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 585,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 584,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 557,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 15,
        [_Location_line]: 558,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 15,
        [_Location_line]: 559,
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
        [_Location_column]: 20,
        [_Location_line]: 556,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 13,
        [_Location_line]: 553,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 556,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 552,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: icon_theme_data.IconThemeData.prototype,
        [IconThemeData_size]: null,
        [IconThemeData__opacity]: null,
        [IconThemeData_color]: C113 || CT.C113
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: back_button.BackButtonIcon.prototype,
        [Widget_key]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 615,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 19,
        [_Location_line]: 616,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 617,
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
        [_Location_column]: 24,
        [_Location_line]: 614,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 17,
        [_Location_line]: 612,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 17,
        [_Location_line]: 613,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 614,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 611,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 610,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 611,
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
        [_Location_line]: 609,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 607,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 13,
        [_Location_line]: 608,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 609,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 606,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 551,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 550,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 550,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 549,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4281677410.0
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 400000
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    }
  });
  const _maxHeight = dart.privateName(home, "_maxHeight");
  const _scrollFactor = dart.privateName(home, "_scrollFactor");
  home._RenderStatusBarPaddingSliver = class _RenderStatusBarPaddingSliver extends sliver.RenderSliver {
    get maxHeight() {
      return this[_maxHeight];
    }
    set maxHeight(value) {
      if (!(this.maxHeight != null && dart.notNull(this.maxHeight) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 46, 12, "maxHeight != null && maxHeight >= 0.0");
      if (this[_maxHeight] == value) return;
      this[_maxHeight] = value;
      this.markNeedsLayout();
    }
    get scrollFactor() {
      return this[_scrollFactor];
    }
    set scrollFactor(value) {
      if (!(this.scrollFactor != null && dart.notNull(this.scrollFactor) >= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 58, 12, "scrollFactor != null && scrollFactor >= 1.0");
      if (this[_scrollFactor] == value) return;
      this[_scrollFactor] = value;
      this.markNeedsLayout();
    }
    performLayout() {
      let height = (dart.notNull(this.maxHeight) - dart.notNull(this.constraints.scrollOffset) / dart.notNull(this.scrollFactor))[$clamp](0.0, this.maxHeight);
      this.geometry = new sliver.SliverGeometry.new({paintExtent: math.min(core.double, height, this.constraints.remainingPaintExtent), scrollExtent: this.maxHeight, maxPaintExtent: this.maxHeight});
    }
  };
  (home._RenderStatusBarPaddingSliver.new = function(opts) {
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
    let scrollFactor = opts && 'scrollFactor' in opts ? opts.scrollFactor : null;
    if (!(maxHeight != null && dart.notNull(maxHeight) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 37, 15, "maxHeight != null && maxHeight >= 0.0");
    if (!(scrollFactor != null && dart.notNull(scrollFactor) >= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 38, 15, "scrollFactor != null && scrollFactor >= 1.0");
    this[_maxHeight] = maxHeight;
    this[_scrollFactor] = scrollFactor;
    home._RenderStatusBarPaddingSliver.__proto__.new.call(this);
    ;
  }).prototype = home._RenderStatusBarPaddingSliver.prototype;
  dart.addTypeTests(home._RenderStatusBarPaddingSliver);
  dart.setMethodSignature(home._RenderStatusBarPaddingSliver, () => ({
    __proto__: dart.getMethods(home._RenderStatusBarPaddingSliver.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(home._RenderStatusBarPaddingSliver, () => ({
    __proto__: dart.getGetters(home._RenderStatusBarPaddingSliver.__proto__),
    maxHeight: core.double,
    scrollFactor: core.double
  }));
  dart.setSetterSignature(home._RenderStatusBarPaddingSliver, () => ({
    __proto__: dart.getSetters(home._RenderStatusBarPaddingSliver.__proto__),
    maxHeight: core.double,
    scrollFactor: core.double
  }));
  dart.setLibraryUri(home._RenderStatusBarPaddingSliver, "package:flutter_gallery/demo/animation/home.dart");
  dart.setFieldSignature(home._RenderStatusBarPaddingSliver, () => ({
    __proto__: dart.getFields(home._RenderStatusBarPaddingSliver.__proto__),
    [_maxHeight]: dart.fieldType(core.double),
    [_scrollFactor]: dart.fieldType(core.double)
  }));
  const _StatusBarPaddingSliver_maxHeight = dart.privateName(home, "_StatusBarPaddingSliver.maxHeight");
  const _StatusBarPaddingSliver_scrollFactor = dart.privateName(home, "_StatusBarPaddingSliver.scrollFactor");
  home._StatusBarPaddingSliver = class _StatusBarPaddingSliver extends framework.SingleChildRenderObjectWidget {
    get maxHeight() {
      return this[maxHeight$];
    }
    set maxHeight(value) {
      super.maxHeight = value;
    }
    get scrollFactor() {
      return this[scrollFactor$];
    }
    set scrollFactor(value) {
      super.scrollFactor = value;
    }
    createRenderObject(context) {
      return new home._RenderStatusBarPaddingSliver.new({maxHeight: this.maxHeight, scrollFactor: this.scrollFactor});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      home._RenderStatusBarPaddingSliver._check(renderObject);
      t0 = renderObject;
      t0.maxHeight = this.maxHeight;
      t0.scrollFactor = this.scrollFactor;
      t0;
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new diagnostics.DoubleProperty.new("maxHeight", this.maxHeight));
      description.add(new diagnostics.DoubleProperty.new("scrollFactor", this.scrollFactor));
    }
  };
  (home._StatusBarPaddingSliver.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
    let scrollFactor = opts && 'scrollFactor' in opts ? opts.scrollFactor : 5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[maxHeight$] = maxHeight;
    this[scrollFactor$] = scrollFactor;
    if (!(maxHeight != null && dart.notNull(maxHeight) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 81, 15, "maxHeight != null && maxHeight >= 0.0");
    if (!(scrollFactor != null && dart.notNull(scrollFactor) >= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 82, 15, "scrollFactor != null && scrollFactor >= 1.0");
    home._StatusBarPaddingSliver.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home._StatusBarPaddingSliver.prototype;
  dart.addTypeTests(home._StatusBarPaddingSliver);
  const maxHeight$ = _StatusBarPaddingSliver_maxHeight;
  const scrollFactor$ = _StatusBarPaddingSliver_scrollFactor;
  dart.setMethodSignature(home._StatusBarPaddingSliver, () => ({
    __proto__: dart.getMethods(home._StatusBarPaddingSliver.__proto__),
    createRenderObject: dart.fnType(home._RenderStatusBarPaddingSliver, [framework.BuildContext])
  }));
  dart.setLibraryUri(home._StatusBarPaddingSliver, "package:flutter_gallery/demo/animation/home.dart");
  dart.setFieldSignature(home._StatusBarPaddingSliver, () => ({
    __proto__: dart.getFields(home._StatusBarPaddingSliver.__proto__),
    maxHeight: dart.finalFieldType(core.double),
    scrollFactor: dart.finalFieldType(core.double)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  home._SliverAppBarDelegate = class _SliverAppBarDelegate extends sliver_persistent_header.SliverPersistentHeaderDelegate {
    get minExtent() {
      return this.minHeight;
    }
    get maxExtent() {
      return math.max(core.double, this.maxHeight, this.minHeight);
    }
    build(context, shrinkOffset, overlapsContent) {
      return new basic.SizedBox.expand({child: this.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    shouldRebuild(oldDelegate) {
      home._SliverAppBarDelegate._check(oldDelegate);
      return this.maxHeight != oldDelegate.maxHeight || this.minHeight != oldDelegate.minHeight || !dart.equals(this.child, oldDelegate.child);
    }
    toString() {
      return "_SliverAppBarDelegate";
    }
  };
  (home._SliverAppBarDelegate.new = function(opts) {
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.child = child;
    home._SliverAppBarDelegate.__proto__.new.call(this);
    ;
  }).prototype = home._SliverAppBarDelegate.prototype;
  dart.addTypeTests(home._SliverAppBarDelegate);
  dart.setMethodSignature(home._SliverAppBarDelegate, () => ({
    __proto__: dart.getMethods(home._SliverAppBarDelegate.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, core.double, core.bool]),
    shouldRebuild: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(home._SliverAppBarDelegate, () => ({
    __proto__: dart.getGetters(home._SliverAppBarDelegate.__proto__),
    minExtent: core.double,
    maxExtent: core.double
  }));
  dart.setLibraryUri(home._SliverAppBarDelegate, "package:flutter_gallery/demo/animation/home.dart");
  dart.setFieldSignature(home._SliverAppBarDelegate, () => ({
    __proto__: dart.getFields(home._SliverAppBarDelegate.__proto__),
    minHeight: dart.finalFieldType(core.double),
    maxHeight: dart.finalFieldType(core.double),
    child: dart.finalFieldType(framework.Widget)
  }));
  dart.defineExtensionMethods(home._SliverAppBarDelegate, ['toString']);
  const _interpolateRect = dart.privateName(home, "_interpolateRect");
  const _interpolatePoint = dart.privateName(home, "_interpolatePoint");
  home._AllSectionsLayout = class _AllSectionsLayout extends custom_layout.MultiChildLayoutDelegate {
    [_interpolateRect](begin, end) {
      return ui.Rect.lerp(begin, end, this.tColumnToRow);
    }
    [_interpolatePoint](begin, end) {
      return ui.Offset.lerp(begin, end, this.tColumnToRow);
    }
    performLayout(size) {
      let columnCardX = dart.notNull(size.width) / 5.0;
      let columnCardWidth = dart.notNull(size.width) - columnCardX;
      let columnCardHeight = dart.notNull(size.height) / dart.notNull(this.cardCount);
      let rowCardWidth = size.width;
      let offset = this.translation.alongSize(size);
      let columnCardY = 0.0;
      let rowCardX = -(dart.notNull(this.selectedIndex) * dart.notNull(rowCardWidth));
      let columnTitleX = dart.notNull(size.width) / 10.0;
      let rowTitleWidth = dart.notNull(size.width) * ((1 + dart.notNull(this.tCollapsed)) / 2.25);
      let rowTitleX = (dart.notNull(size.width) - rowTitleWidth) / 2.0 - dart.notNull(this.selectedIndex) * rowTitleWidth;
      let rowIndicatorWidth = 40 + (1.0 - dart.notNull(this.tCollapsed)) * (rowTitleWidth - 40);
      let rowIndicatorX = (dart.notNull(size.width) - rowIndicatorWidth) / 2.0 - dart.notNull(this.selectedIndex) * rowIndicatorWidth;
      for (let index = 0; index < dart.notNull(this.cardCount); index = index + 1) {
        let columnCardRect = new ui.Rect.fromLTWH(columnCardX, columnCardY, columnCardWidth, columnCardHeight);
        let rowCardRect = new ui.Rect.fromLTWH(rowCardX, 0.0, rowCardWidth, size.height);
        let cardRect = this[_interpolateRect](columnCardRect, rowCardRect).shift(offset);
        let cardId = "card" + dart.str(index);
        if (dart.test(this.hasChild(cardId))) {
          this.layoutChild(cardId, new box.BoxConstraints.tight(cardRect.size));
          this.positionChild(cardId, cardRect.topLeft);
        }
        let titleSize = this.layoutChild("title" + dart.str(index), new box.BoxConstraints.loose(cardRect.size));
        let columnTitleY = dart.notNull(columnCardRect.centerLeft.dy) - dart.notNull(titleSize.height) / 2.0;
        let rowTitleY = dart.notNull(rowCardRect.centerLeft.dy) - dart.notNull(titleSize.height) / 2.0;
        let centeredRowTitleX = rowTitleX + (rowTitleWidth - dart.notNull(titleSize.width)) / 2.0;
        let columnTitleOrigin = new ui.Offset.new(columnTitleX, columnTitleY);
        let rowTitleOrigin = new ui.Offset.new(centeredRowTitleX, rowTitleY);
        let titleOrigin = this[_interpolatePoint](columnTitleOrigin, rowTitleOrigin);
        this.positionChild("title" + dart.str(index), titleOrigin['+'](offset));
        let indicatorSize = this.layoutChild("indicator" + dart.str(index), new box.BoxConstraints.loose(cardRect.size));
        let columnIndicatorX = dart.notNull(cardRect.centerRight.dx) - dart.notNull(indicatorSize.width) - 16.0;
        let columnIndicatorY = dart.notNull(cardRect.bottomRight.dy) - dart.notNull(indicatorSize.height) - 16.0;
        let columnIndicatorOrigin = new ui.Offset.new(columnIndicatorX, columnIndicatorY);
        let titleRect = new ui.Rect.fromPoints(titleOrigin, titleSize.bottomRight(titleOrigin));
        let centeredRowIndicatorX = rowIndicatorX + (rowIndicatorWidth - dart.notNull(indicatorSize.width)) / 2.0;
        let rowIndicatorY = dart.notNull(titleRect.bottomCenter.dy) + 16.0;
        let rowIndicatorOrigin = new ui.Offset.new(centeredRowIndicatorX, rowIndicatorY);
        let indicatorOrigin = this[_interpolatePoint](columnIndicatorOrigin, rowIndicatorOrigin);
        this.positionChild("indicator" + dart.str(index), indicatorOrigin['+'](offset));
        columnCardY = columnCardY + columnCardHeight;
        rowCardX = rowCardX + dart.notNull(rowCardWidth);
        rowTitleX = rowTitleX + rowTitleWidth;
        rowIndicatorX = rowIndicatorX + rowIndicatorWidth;
      }
    }
    shouldRelayout(oldDelegate) {
      home._AllSectionsLayout._check(oldDelegate);
      return this.tColumnToRow != oldDelegate.tColumnToRow || this.cardCount != oldDelegate.cardCount || this.selectedIndex != oldDelegate.selectedIndex;
    }
  };
  (home._AllSectionsLayout.new = function(opts) {
    let translation = opts && 'translation' in opts ? opts.translation : null;
    let tColumnToRow = opts && 'tColumnToRow' in opts ? opts.tColumnToRow : null;
    let tCollapsed = opts && 'tCollapsed' in opts ? opts.tCollapsed : null;
    let cardCount = opts && 'cardCount' in opts ? opts.cardCount : null;
    let selectedIndex = opts && 'selectedIndex' in opts ? opts.selectedIndex : null;
    this.translation = translation;
    this.tColumnToRow = tColumnToRow;
    this.tCollapsed = tCollapsed;
    this.cardCount = cardCount;
    this.selectedIndex = selectedIndex;
    home._AllSectionsLayout.__proto__.new.call(this);
    ;
  }).prototype = home._AllSectionsLayout.prototype;
  dart.addTypeTests(home._AllSectionsLayout);
  dart.setMethodSignature(home._AllSectionsLayout, () => ({
    __proto__: dart.getMethods(home._AllSectionsLayout.__proto__),
    [_interpolateRect]: dart.fnType(ui.Rect, [ui.Rect, ui.Rect]),
    [_interpolatePoint]: dart.fnType(ui.Offset, [ui.Offset, ui.Offset]),
    performLayout: dart.fnType(dart.void, [ui.Size]),
    shouldRelayout: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(home._AllSectionsLayout, "package:flutter_gallery/demo/animation/home.dart");
  dart.setFieldSignature(home._AllSectionsLayout, () => ({
    __proto__: dart.getFields(home._AllSectionsLayout.__proto__),
    translation: dart.finalFieldType(alignment.Alignment),
    tColumnToRow: dart.finalFieldType(core.double),
    tCollapsed: dart.finalFieldType(core.double),
    cardCount: dart.finalFieldType(core.int),
    selectedIndex: dart.finalFieldType(core.double)
  }));
  let C3;
  const _selectedIndexDelta = dart.privateName(home, "_selectedIndexDelta");
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
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
  const _build = dart.privateName(home, "_build");
  let C26;
  let C25;
  let C24;
  home._AllSectionsView = class _AllSectionsView extends transitions.AnimatedWidget {
    [_selectedIndexDelta](index) {
      return (index[$toDouble]() - dart.notNull(this.selectedIndex.value))[$abs]()[$clamp](0.0, 1.0);
    }
    [_build](context, constraints) {
      let size = constraints.biggest;
      let tColumnToRow = 1.0 - ((dart.notNull(size.height) - dart.notNull(this.midHeight)) / (dart.notNull(this.maxHeight) - dart.notNull(this.midHeight)))[$clamp](0.0, 1.0);
      let tCollapsed = 1.0 - ((dart.notNull(size.height) - dart.notNull(this.minHeight)) / (dart.notNull(this.midHeight) - dart.notNull(this.minHeight)))[$clamp](0.0, 1.0);
      const _indicatorOpacity = index => {
        return 1.0 - dart.notNull(this[_selectedIndexDelta](index)) * 0.5;
      };
      dart.fn(_indicatorOpacity, intTodouble());
      const _titleOpacity = index => {
        return 1.0 - dart.notNull(this[_selectedIndexDelta](index)) * tColumnToRow * 0.5;
      };
      dart.fn(_titleOpacity, intTodouble());
      const _titleScale = index => {
        return 1.0 - dart.notNull(this[_selectedIndexDelta](index)) * tColumnToRow * 0.15;
      };
      dart.fn(_titleScale, intTodouble());
      let children = ListOfWidget().from(this.sectionCards);
      for (let index = 0; index < dart.notNull(this.sections[$length]); index = index + 1) {
        let section = this.sections[$_get](index);
        children[$add](new basic.LayoutId.new({id: "title" + dart.str(index), child: new widgets.SectionTitle.new({section: section, scale: _titleScale(index), opacity: _titleOpacity(index), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}));
      }
      for (let index = 0; index < dart.notNull(this.sections[$length]); index = index + 1) {
        children[$add](new basic.LayoutId.new({id: "indicator" + dart.str(index), child: new widgets.SectionIndicator.new({opacity: _indicatorOpacity(index), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}));
      }
      return new basic.CustomMultiChildLayout.new({delegate: new home._AllSectionsLayout.new({translation: new alignment.Alignment.new((dart.notNull(this.selectedIndex.value) - dart.notNull(this.sectionIndex)) * 2.0 - 1.0, -1.0), tColumnToRow: tColumnToRow, tCollapsed: tCollapsed, cardCount: this.sections[$length], selectedIndex: this.selectedIndex.value}), children: children, $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.bind(this, _build), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
  };
  (home._AllSectionsView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let sectionIndex = opts && 'sectionIndex' in opts ? opts.sectionIndex : null;
    let sections = opts && 'sections' in opts ? opts.sections : null;
    let selectedIndex = opts && 'selectedIndex' in opts ? opts.selectedIndex : null;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
    let midHeight = opts && 'midHeight' in opts ? opts.midHeight : null;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
    let sectionCards = opts && 'sectionCards' in opts ? opts.sectionCards : C3 || CT.C3;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.sectionIndex = sectionIndex;
    this.sections = sections;
    this.selectedIndex = selectedIndex;
    this.minHeight = minHeight;
    this.midHeight = midHeight;
    this.maxHeight = maxHeight;
    this.sectionCards = sectionCards;
    if (!(sections != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 271, 15, "sections != null");
    if (!(sectionCards != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 272, 15, "sectionCards != null");
    if (!(sectionCards[$length] == sections[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 273, 15, "sectionCards.length == sections.length");
    if (!(dart.notNull(sectionIndex) >= 0 && dart.notNull(sectionIndex) < dart.notNull(sections[$length]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 274, 15, "sectionIndex >= 0 && sectionIndex < sections.length");
    if (!(selectedIndex != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 275, 15, "selectedIndex != null");
    if (!(dart.notNull(selectedIndex.value) >= 0.0 && dart.notNull(selectedIndex.value) < sections[$length][$toDouble]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 276, 15, "selectedIndex.value >= 0.0 && selectedIndex.value < sections.length.toDouble()");
    home._AllSectionsView.__proto__.new.call(this, {key: key, listenable: selectedIndex, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home._AllSectionsView.prototype;
  dart.addTypeTests(home._AllSectionsView);
  dart.setMethodSignature(home._AllSectionsView, () => ({
    __proto__: dart.getMethods(home._AllSectionsView.__proto__),
    [_selectedIndexDelta]: dart.fnType(core.double, [core.int]),
    [_build]: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home._AllSectionsView, "package:flutter_gallery/demo/animation/home.dart");
  dart.setFieldSignature(home._AllSectionsView, () => ({
    __proto__: dart.getFields(home._AllSectionsView.__proto__),
    sectionIndex: dart.finalFieldType(core.int),
    sections: dart.finalFieldType(core.List$(sections.Section)),
    selectedIndex: dart.finalFieldType(change_notifier.ValueNotifier$(core.double)),
    minHeight: dart.finalFieldType(core.double),
    midHeight: dart.finalFieldType(core.double),
    maxHeight: dart.finalFieldType(core.double),
    sectionCards: dart.finalFieldType(core.List$(framework.Widget))
  }));
  const _toMidScrollOffsetSimulation = dart.privateName(home, "_toMidScrollOffsetSimulation");
  const _toZeroScrollOffsetSimulation = dart.privateName(home, "_toZeroScrollOffsetSimulation");
  const _SnappingScrollPhysics_midScrollOffset = dart.privateName(home, "_SnappingScrollPhysics.midScrollOffset");
  home._SnappingScrollPhysics = class _SnappingScrollPhysics extends scroll_physics.ClampingScrollPhysics {
    get midScrollOffset() {
      return this[midScrollOffset$];
    }
    set midScrollOffset(value) {
      super.midScrollOffset = value;
    }
    applyTo(ancestor) {
      return new home._SnappingScrollPhysics.new({parent: this.buildParent(ancestor), midScrollOffset: this.midScrollOffset});
    }
    [_toMidScrollOffsetSimulation](offset, dragVelocity) {
      let velocity = math.max(core.double, dragVelocity, this.minFlingVelocity);
      return new spring_simulation.ScrollSpringSimulation.new(this.spring, offset, this.midScrollOffset, velocity, {tolerance: this.tolerance});
    }
    [_toZeroScrollOffsetSimulation](offset, dragVelocity) {
      let velocity = math.max(core.double, dragVelocity, this.minFlingVelocity);
      return new spring_simulation.ScrollSpringSimulation.new(this.spring, offset, 0.0, velocity, {tolerance: this.tolerance});
    }
    createBallisticSimulation(position, dragVelocity) {
      let simulation = super.createBallisticSimulation(position, dragVelocity);
      let offset = position.pixels;
      if (simulation != null) {
        let simulationEnd = simulation.x(1 / 0);
        if (dart.notNull(simulationEnd) >= dart.notNull(this.midScrollOffset)) return simulation;
        if (dart.notNull(dragVelocity) > 0.0) return this[_toMidScrollOffsetSimulation](offset, dragVelocity);
        if (dart.notNull(dragVelocity) < 0.0) return this[_toZeroScrollOffsetSimulation](offset, dragVelocity);
      } else {
        let snapThreshold = dart.notNull(this.midScrollOffset) / 2.0;
        if (dart.notNull(offset) >= snapThreshold && dart.notNull(offset) < dart.notNull(this.midScrollOffset)) return this[_toMidScrollOffsetSimulation](offset, dragVelocity);
        if (dart.notNull(offset) > 0.0 && dart.notNull(offset) < snapThreshold) return this[_toZeroScrollOffsetSimulation](offset, dragVelocity);
      }
      return simulation;
    }
  };
  (home._SnappingScrollPhysics.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let midScrollOffset = opts && 'midScrollOffset' in opts ? opts.midScrollOffset : null;
    this[midScrollOffset$] = midScrollOffset;
    if (!(midScrollOffset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/animation/home.dart", 369, 15, "midScrollOffset != null");
    home._SnappingScrollPhysics.__proto__.new.call(this, {parent: parent});
    ;
  }).prototype = home._SnappingScrollPhysics.prototype;
  dart.addTypeTests(home._SnappingScrollPhysics);
  const midScrollOffset$ = _SnappingScrollPhysics_midScrollOffset;
  dart.setMethodSignature(home._SnappingScrollPhysics, () => ({
    __proto__: dart.getMethods(home._SnappingScrollPhysics.__proto__),
    applyTo: dart.fnType(home._SnappingScrollPhysics, [scroll_physics.ScrollPhysics]),
    [_toMidScrollOffsetSimulation]: dart.fnType(simulation.Simulation, [core.double, core.double]),
    [_toZeroScrollOffsetSimulation]: dart.fnType(simulation.Simulation, [core.double, core.double])
  }));
  dart.setLibraryUri(home._SnappingScrollPhysics, "package:flutter_gallery/demo/animation/home.dart");
  dart.setFieldSignature(home._SnappingScrollPhysics, () => ({
    __proto__: dart.getFields(home._SnappingScrollPhysics.__proto__),
    midScrollOffset: dart.finalFieldType(core.double)
  }));
  home.AnimationDemoHome = class AnimationDemoHome extends framework.StatefulWidget {
    createState() {
      return new home._AnimationDemoHomeState.new();
    }
  };
  (home.AnimationDemoHome.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.AnimationDemoHome.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.AnimationDemoHome.prototype;
  dart.addTypeTests(home.AnimationDemoHome);
  dart.setMethodSignature(home.AnimationDemoHome, () => ({
    __proto__: dart.getMethods(home.AnimationDemoHome.__proto__),
    createState: dart.fnType(home._AnimationDemoHomeState, [])
  }));
  dart.setLibraryUri(home.AnimationDemoHome, "package:flutter_gallery/demo/animation/home.dart");
  dart.defineLazy(home.AnimationDemoHome, {
    /*home.AnimationDemoHome.routeName*/get routeName() {
      return "/animation";
    }
  });
  const _scrollController = dart.privateName(home, "_scrollController");
  const _headingPageController = dart.privateName(home, "_headingPageController");
  const _detailsPageController = dart.privateName(home, "_detailsPageController");
  const _headingScrollPhysics = dart.privateName(home, "_headingScrollPhysics");
  const ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  let C27;
  const _buildBody = dart.privateName(home, "_buildBody");
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C32;
  let C31;
  const _handleBackButton = dart.privateName(home, "_handleBackButton");
  let C35;
  const _handleScrollNotification = dart.privateName(home, "_handleScrollNotification");
  const _maybeScroll = dart.privateName(home, "_maybeScroll");
  const _handlePageNotification = dart.privateName(home, "_handlePageNotification");
  let C38;
  let C37;
  let C36;
  const _detailItemsFor = dart.privateName(home, "_detailItemsFor");
  let C41;
  let C40;
  let C39;
  let C44;
  let C45;
  let C46;
  let C43;
  let C42;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C52;
  let C51;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C64;
  let C63;
  const _allHeadingItems = dart.privateName(home, "_allHeadingItems");
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C74;
  let C75;
  let C72;
  let C71;
  let C78;
  let C79;
  let C77;
  let C76;
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
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C97;
  let C96;
  let C102;
  let C101;
  let C100;
  let C105;
  let C106;
  let C107;
  let C104;
  let C103;
  let C110;
  let C111;
  let C109;
  let C108;
  const IconThemeData_size = dart.privateName(icon_theme_data, "IconThemeData.size");
  const IconThemeData__opacity = dart.privateName(icon_theme_data, "IconThemeData._opacity");
  const Color__value = dart.privateName(ui, "Color._value");
  let C113;
  const IconThemeData_color = dart.privateName(icon_theme_data, "IconThemeData.color");
  let C112;
  const Widget_key = dart.privateName(framework, "Widget.key");
  let C114;
  let C117;
  let C118;
  let C119;
  let C116;
  let C115;
  let C122;
  let C123;
  let C124;
  let C121;
  let C120;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C132;
  let C133;
  let C130;
  let C129;
  let C136;
  let C135;
  let C134;
  let C139;
  let C138;
  let C137;
  home._AnimationDemoHomeState = class _AnimationDemoHomeState extends framework.State$(home.AnimationDemoHome) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: home._kAppBackgroundColor, body: new basic.Builder.new({builder: dart.bind(this, _buildBody), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
    }
    [_handleBackButton](midScrollOffset) {
      if (dart.notNull(this[_scrollController].offset) >= dart.notNull(midScrollOffset))
        this[_scrollController].animateTo(0.0, {curve: home._kScrollCurve, duration: home._kScrollDuration});
      else
        navigator.Navigator.maybePop(core.Object, this.context);
    }
    [_handleScrollNotification](notification, midScrollOffset) {
      if (notification.depth === 0 && scroll_notification.ScrollUpdateNotification.is(notification)) {
        let physics = dart.notNull(this[_scrollController].position.pixels) >= dart.notNull(midScrollOffset) ? C35 || CT.C35 : C27 || CT.C27;
        if (!physics[$_equals](this[_headingScrollPhysics])) {
          this.setState(dart.fn(() => {
            this[_headingScrollPhysics] = physics;
          }, VoidToNull()));
        }
      }
      return false;
    }
    [_maybeScroll](midScrollOffset, pageIndex, xOffset) {
      if (dart.notNull(this[_scrollController].offset) < dart.notNull(midScrollOffset)) {
        this[_headingPageController].animateToPage(pageIndex, {curve: home._kScrollCurve, duration: home._kScrollDuration});
        this[_scrollController].animateTo(midScrollOffset, {curve: home._kScrollCurve, duration: home._kScrollDuration});
      } else {
        let centerX = dart.notNull(this[_headingPageController].position.viewportDimension) / 2.0;
        let newPageIndex = dart.notNull(xOffset) > centerX ? dart.notNull(pageIndex) + 1 : dart.notNull(pageIndex) - 1;
        this[_headingPageController].animateToPage(newPageIndex, {curve: home._kScrollCurve, duration: home._kScrollDuration});
      }
    }
    [_handlePageNotification](notification, leader, follower) {
      if (notification.depth === 0 && scroll_notification.ScrollUpdateNotification.is(notification)) {
        this.selectedIndex.value = leader.page;
        if (follower.page != leader.page) follower.position.jumpToWithoutSettling(leader.position.pixels);
      }
      return false;
    }
    [_detailItemsFor](section) {
      let detailItems = section.details[$map](framework.Widget, dart.fn(detail => new widgets.SectionDetailView.new({detail: detail, $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), SectionDetailToSectionDetailView()));
      return list_tile.ListTile.divideTiles({context: this.context, tiles: detailItems});
    }
    [_allHeadingItems](maxHeight, midScrollOffset) {
      let sectionCards = JSArrayOfWidget().of([]);
      for (let index = 0; index < dart.notNull(sections.allSections[$length]); index = index + 1) {
        sectionCards[$add](new basic.LayoutId.new({id: "card" + dart.str(index), child: new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, child: new widgets.SectionCard.new({section: sections.allSections[$_get](index), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), onTapUp: dart.fn(details => {
              let xOffset = details.globalPosition.dx;
              this.setState(dart.fn(() => {
                this[_maybeScroll](midScrollOffset, index, xOffset);
              }, VoidToNull()));
            }, TapUpDetailsToNull()), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}));
      }
      let headings = JSArrayOfWidget().of([]);
      for (let index = 0; index < dart.notNull(sections.allSections[$length]); index = index + 1) {
        headings[$add](new container.Container.new({color: home._kAppBackgroundColor, child: new basic.ClipRect.new({child: new home._AllSectionsView.new({sectionIndex: index, sections: sections.allSections, selectedIndex: this.selectedIndex, minHeight: 90, midHeight: 256, maxHeight: maxHeight, sectionCards: sectionCards, $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}));
      }
      return headings;
    }
    [_buildBody](context) {
      let mediaQueryData = media_query.MediaQuery.of(context);
      let statusBarHeight = mediaQueryData.padding.top;
      let screenHeight = mediaQueryData.size.height;
      let appBarMaxHeight = dart.notNull(screenHeight) - dart.notNull(statusBarHeight);
      let appBarMidScrollOffset = dart.notNull(statusBarHeight) + appBarMaxHeight - 256;
      return new basic.SizedBox.expand({child: new basic.Stack.new({children: JSArrayOfWidget().of([new (NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => this[_handleScrollNotification](notification, appBarMidScrollOffset), ScrollNotificationTobool()), child: new scroll_view.CustomScrollView.new({controller: this[_scrollController], physics: new home._SnappingScrollPhysics.new({midScrollOffset: appBarMidScrollOffset}), slivers: JSArrayOfWidget().of([new home._StatusBarPaddingSliver.new({maxHeight: statusBarHeight, scrollFactor: 7.0, $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), new sliver_persistent_header.SliverPersistentHeader.new({pinned: true, delegate: new home._SliverAppBarDelegate.new({minHeight: 90, maxHeight: appBarMaxHeight, child: new (NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => this[_handlePageNotification](notification, this[_headingPageController], this[_detailsPageController]), ScrollNotificationTobool()), child: new page_view.PageView.new({physics: this[_headingScrollPhysics], controller: this[_headingPageController], children: ListOfWidget()._check(this[_allHeadingItems](appBarMaxHeight, appBarMidScrollOffset)), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76})}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), new basic.SliverToBoxAdapter.new({child: new basic.SizedBox.new({height: 610.0, child: new (NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => this[_handlePageNotification](notification, this[_detailsPageController], this[_headingPageController]), ScrollNotificationTobool()), child: new page_view.PageView.new({controller: this[_detailsPageController], children: sections.allSections[$map](framework.Widget, dart.fn(section => new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: this[_detailItemsFor](section)[$toList](), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), SectionToColumn()))[$toList](), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100})]), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), new basic.Positioned.new({top: statusBarHeight, left: 0.0, child: new icon_theme.IconTheme.new({data: C112 || CT.C112, child: new safe_area.SafeArea.new({top: false, bottom: false, child: new icon_button.IconButton.new({icon: C114 || CT.C114, tooltip: "Back", onPressed: dart.fn(() => {
                      this[_handleBackButton](appBarMidScrollOffset);
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129})]), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), $creationLocationd_0dea112b090073317d4: C137 || CT.C137});
    }
  };
  (home._AnimationDemoHomeState.new = function() {
    this[_scrollController] = new scroll_controller.ScrollController.new();
    this[_headingPageController] = new page_view.PageController.new();
    this[_detailsPageController] = new page_view.PageController.new();
    this[_headingScrollPhysics] = C27 || CT.C27;
    this.selectedIndex = new (ValueNotifierOfdouble()).new(0.0);
    home._AnimationDemoHomeState.__proto__.new.call(this);
    ;
  }).prototype = home._AnimationDemoHomeState.prototype;
  dart.addTypeTests(home._AnimationDemoHomeState);
  dart.setMethodSignature(home._AnimationDemoHomeState, () => ({
    __proto__: dart.getMethods(home._AnimationDemoHomeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_handleBackButton]: dart.fnType(dart.void, [core.double]),
    [_handleScrollNotification]: dart.fnType(core.bool, [scroll_notification.ScrollNotification, core.double]),
    [_maybeScroll]: dart.fnType(dart.void, [core.double, core.int, core.double]),
    [_handlePageNotification]: dart.fnType(core.bool, [scroll_notification.ScrollNotification, page_view.PageController, page_view.PageController]),
    [_detailItemsFor]: dart.fnType(core.Iterable$(framework.Widget), [sections.Section]),
    [_allHeadingItems]: dart.fnType(core.Iterable$(framework.Widget), [core.double, core.double]),
    [_buildBody]: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home._AnimationDemoHomeState, "package:flutter_gallery/demo/animation/home.dart");
  dart.setFieldSignature(home._AnimationDemoHomeState, () => ({
    __proto__: dart.getFields(home._AnimationDemoHomeState.__proto__),
    [_scrollController]: dart.finalFieldType(scroll_controller.ScrollController),
    [_headingPageController]: dart.finalFieldType(page_view.PageController),
    [_detailsPageController]: dart.finalFieldType(page_view.PageController),
    [_headingScrollPhysics]: dart.fieldType(scroll_physics.ScrollPhysics),
    selectedIndex: dart.fieldType(change_notifier.ValueNotifier$(core.double))
  }));
  let C140;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C141;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C142;
  dart.defineLazy(home, {
    /*home._kAppBackgroundColor*/get _kAppBackgroundColor() {
      return C140 || CT.C140;
    },
    /*home._kScrollDuration*/get _kScrollDuration() {
      return C141 || CT.C141;
    },
    /*home._kScrollCurve*/get _kScrollCurve() {
      return C142 || CT.C142;
    },
    /*home._kAppBarMinHeight*/get _kAppBarMinHeight() {
      return 90;
    },
    /*home._kAppBarMidHeight*/get _kAppBarMidHeight() {
      return 256;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/animation/home", {
    "package:flutter_gallery/demo/animation/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"home.ddc.js"}');
  // Exports:
  return {
    demo__animation__home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
