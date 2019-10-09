define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/animation/animation', 'packages/video_player/video_player', 'packages/flutter/src/rendering/animated_size', 'packages/connectivity/connectivity', 'packages/device_info/device_info'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__animation__animation, packages__video_player__video_player, packages__flutter__src__rendering__animated_size, packages__connectivity__connectivity, packages__device_info__device_info) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const heroes = packages__flutter__src__widgets__actions.src__widgets__heroes;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const colors = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const card = packages__flutter__material.src__material__card;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const snack_bar = packages__flutter__material.src__material__snack_bar;
  const colors$ = packages__flutter__material.src__material__colors;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const video_player = packages__video_player__video_player.video_player;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const connectivity$ = packages__connectivity__connectivity.connectivity;
  const device_info = packages__device_info__device_info.device_info;
  const video_demo = Object.create(dart.library);
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let PageRouteBuilderOfvoid = () => (PageRouteBuilderOfvoid = dart.constFn(pages.PageRouteBuilder$(dart.void)))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let _AsyncStarImplOfConnectivityResult = () => (_AsyncStarImplOfConnectivityResult = dart.constFn(async._AsyncStarImpl$(connectivity$.ConnectivityResult)))();
  let ConnectivityResultToNull = () => (ConnectivityResultToNull = dart.constFn(dart.fnType(core.Null, [connectivity$.ConnectivityResult])))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VideoPlayerControllerAndStringToFutureOfvoid = () => (VideoPlayerControllerAndStringToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [video_player.VideoPlayerController, core.String])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 30
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 39,
        [_Location_line]: 27,
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
        [_Location_column]: 20,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 13,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 25,
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
        [_Location_column]: 16,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 23,
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
        [_Location_column]: 14,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 22,
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
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 35,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 44,
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
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 40,
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
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 39,
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
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 81,
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
        [_Location_column]: 29,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 42,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 79,
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
        [_Location_column]: 14,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 33,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 28,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C75 || CT.C75,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C76 || CT.C76
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 37,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57396
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 100,
        [Icon_icon]: C87 || CT.C87
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: video_demo.FadeAnimation.prototype,
        [Widget_key]: null,
        [FadeAnimation_duration]: C85 || CT.C85,
        [FadeAnimation_child]: C86 || CT.C86
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57399
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 100,
        [Icon_icon]: C90 || CT.C90
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: video_demo.FadeAnimation.prototype,
        [Widget_key]: null,
        [FadeAnimation_duration]: C85 || CT.C85,
        [FadeAnimation_child]: C89 || CT.C89
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 179,
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
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 16,
        [_Location_line]: 196,
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
        [_Location_column]: 9,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 7,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 258,
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
        [_Location_column]: 11,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
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
        [_Location_column]: 11,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294962158.0
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294954450.0
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293892762.0
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293227379.0
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293874512.0
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294198070.0
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293212469.0
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292030255.0
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4291176488.0
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4290190364.0
      });
    },
    get C112() {
      return C112 = dart.constMap(core.int, ui.Color, [50, C113 || CT.C113, 100, C114 || CT.C114, 200, C115 || CT.C115, 300, C116 || CT.C116, 400, C117 || CT.C117, 500, C118 || CT.C118, 600, C119 || CT.C119, 700, C120 || CT.C120, 800, C121 || CT.C121, 900, C122 || CT.C122]);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: colors$.MaterialColor.prototype,
        [Color__value]: 4294198070.0,
        [ColorSwatch__swatch]: C112 || CT.C112
      });
    },
    get C124() {
      return C124 = dart.const({
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
        [Text_data]: "To load the videos you must have an active network connection"
      });
    },
    get C125() {
      return C125 = dart.const({
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
        [Text_data]: "No network"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: C124 || CT.C124,
        [ListTile_title]: C125 || CT.C125,
        [ListTile_leading]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C110 || CT.C110,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: C111 || CT.C111,
        [SnackBar_content]: C123 || CT.C123
      });
    },
    get C126() {
      return C126 = dart.const({
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
        [Text_data]: "Videos"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 404,
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
        [_Location_column]: 15,
        [_Location_line]: 403,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 21,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 21,
        [_Location_line]: 413,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 414,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 411,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 21,
        [_Location_line]: 417,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 21,
        [_Location_line]: 418,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 419,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 416,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 409,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 409,
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
        [_Location_column]: 20,
        [_Location_line]: 408,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 408,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "connectedCompleter",
        [_Location_column]: 13,
        [_Location_line]: 424,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scaffoldKey",
        [_Location_column]: 13,
        [_Location_line]: 425,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 407,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
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
        [Text_data]: "Video playback not supported on the iOS Simulator."
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C152 || CT.C152,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C76 || CT.C76
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 402,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 403,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 406,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 401,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/video_demo.dart"
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
  let C2;
  let C1;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  const _buildInlineVideo = dart.privateName(video_demo, "_buildInlineVideo");
  let C21;
  let C20;
  let C19;
  let C24;
  let C23;
  let C22;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C37;
  let C36;
  let C41;
  let C42;
  let C40;
  let C39;
  const _buildFullScreenVideo = dart.privateName(video_demo, "_buildFullScreenVideo");
  let C45;
  let C44;
  let C43;
  let C48;
  let C47;
  let C46;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C58;
  let C57;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C67;
  let C64;
  let C63;
  const VideoCard_controller = dart.privateName(video_demo, "VideoCard.controller");
  const VideoCard_title = dart.privateName(video_demo, "VideoCard.title");
  const VideoCard_subtitle = dart.privateName(video_demo, "VideoCard.subtitle");
  video_demo.VideoCard = class VideoCard extends framework.StatelessWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      super.subtitle = value;
    }
    [_buildInlineVideo]() {
      return new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Center.new({child: new basic.AspectRatio.new({aspectRatio: 3 / 2, child: new heroes.Hero.new({tag: this.controller, child: new video_demo.VideoPlayerLoading.new(this.controller, {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
    [_buildFullScreenVideo]() {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), body: new basic.Center.new({child: new basic.AspectRatio.new({aspectRatio: 3 / 2, child: new heroes.Hero.new({tag: this.controller, child: new video_demo.VideoPlayPause.new(this.controller, {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39});
    }
    build(context) {
      const fullScreenRoutePageBuilder = (context, animation, secondaryAnimation) => {
        return this[_buildFullScreenVideo]();
      };
      dart.fn(fullScreenRoutePageBuilder, BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget());
      const pushFullScreenWidget = () => {
        let route = new (PageRouteBuilderOfvoid()).new({settings: new navigator.RouteSettings.new({name: this.title, isInitialRoute: false}), pageBuilder: fullScreenRoutePageBuilder});
        route.completed.then(core.Null, dart.fn(value => {
          this.controller.setVolume(0.0);
        }, voidToNull()));
        this.controller.setVolume(1.0);
        navigator.Navigator.of(context).push(dart.void, route);
      };
      dart.fn(pushFullScreenWidget, VoidTovoid());
      return new safe_area.SafeArea.new({top: false, bottom: false, child: new card.Card.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new list_tile.ListTile.new({title: new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C43 || CT.C43}), subtitle: new text.Text.new(this.subtitle, {$creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new gesture_detector.GestureDetector.new({onTap: pushFullScreenWidget, child: this[_buildInlineVideo](), $creationLocationd_0dea112b090073317d4: C53 || CT.C53})]), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63});
    }
  };
  (video_demo.VideoCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[title$] = title;
    this[subtitle$] = subtitle;
    video_demo.VideoCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_demo.VideoCard.prototype;
  dart.addTypeTests(video_demo.VideoCard);
  const controller$ = VideoCard_controller;
  const title$ = VideoCard_title;
  const subtitle$ = VideoCard_subtitle;
  dart.setMethodSignature(video_demo.VideoCard, () => ({
    __proto__: dart.getMethods(video_demo.VideoCard.__proto__),
    [_buildInlineVideo]: dart.fnType(framework.Widget, []),
    [_buildFullScreenVideo]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(video_demo.VideoCard, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo.VideoCard, () => ({
    __proto__: dart.getFields(video_demo.VideoCard.__proto__),
    controller: dart.finalFieldType(video_player.VideoPlayerController),
    title: dart.finalFieldType(core.String),
    subtitle: dart.finalFieldType(core.String)
  }));
  const VideoPlayerLoading_controller = dart.privateName(video_demo, "VideoPlayerLoading.controller");
  video_demo.VideoPlayerLoading = class VideoPlayerLoading extends framework.StatefulWidget {
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new video_demo._VideoPlayerLoadingState.new();
    }
  };
  (video_demo.VideoPlayerLoading.new = function(controller, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$0] = controller;
    video_demo.VideoPlayerLoading.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_demo.VideoPlayerLoading.prototype;
  dart.addTypeTests(video_demo.VideoPlayerLoading);
  const controller$0 = VideoPlayerLoading_controller;
  dart.setMethodSignature(video_demo.VideoPlayerLoading, () => ({
    __proto__: dart.getMethods(video_demo.VideoPlayerLoading.__proto__),
    createState: dart.fnType(video_demo._VideoPlayerLoadingState, [])
  }));
  dart.setLibraryUri(video_demo.VideoPlayerLoading, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo.VideoPlayerLoading, () => ({
    __proto__: dart.getFields(video_demo.VideoPlayerLoading.__proto__),
    controller: dart.finalFieldType(video_player.VideoPlayerController)
  }));
  const _initialized = dart.privateName(video_demo, "_initialized");
  let C70;
  let C69;
  let C68;
  let C73;
  let C72;
  let C71;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  const ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  const ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  const ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  const ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  const CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  let C75;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  const Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C76;
  const Align_alignment = dart.privateName(basic, "Align.alignment");
  let C74;
  let C79;
  let C80;
  let C78;
  let C77;
  video_demo._VideoPlayerLoadingState = class _VideoPlayerLoadingState extends framework.State$(video_demo.VideoPlayerLoading) {
    initState() {
      super.initState();
      this[_initialized] = this.widget.controller.value.initialized;
      this.widget.controller.addListener(dart.fn(() => {
        if (!dart.test(this.mounted)) {
          return;
        }
        let controllerInitialized = this.widget.controller.value.initialized;
        if (!dart.equals(this[_initialized], controllerInitialized)) {
          this.setState(dart.fn(() => {
            this[_initialized] = controllerInitialized;
          }, VoidToNull()));
        }
      }, VoidToNull()));
    }
    build(context) {
      if (dart.test(this[_initialized])) {
        return new video_player.VideoPlayer.new(this.widget.controller, {$creationLocationd_0dea112b090073317d4: C68 || CT.C68});
      }
      return new basic.Stack.new({children: JSArrayOfWidget().of([new video_player.VideoPlayer.new(this.widget.controller, {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), C74 || CT.C74]), fit: stack.StackFit.expand, $creationLocationd_0dea112b090073317d4: C77 || CT.C77});
    }
  };
  (video_demo._VideoPlayerLoadingState.new = function() {
    this[_initialized] = null;
    video_demo._VideoPlayerLoadingState.__proto__.new.call(this);
    ;
  }).prototype = video_demo._VideoPlayerLoadingState.prototype;
  dart.addTypeTests(video_demo._VideoPlayerLoadingState);
  dart.setMethodSignature(video_demo._VideoPlayerLoadingState, () => ({
    __proto__: dart.getMethods(video_demo._VideoPlayerLoadingState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(video_demo._VideoPlayerLoadingState, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo._VideoPlayerLoadingState, () => ({
    __proto__: dart.getFields(video_demo._VideoPlayerLoadingState.__proto__),
    [_initialized]: dart.fieldType(core.bool)
  }));
  const VideoPlayPause_controller = dart.privateName(video_demo, "VideoPlayPause.controller");
  video_demo.VideoPlayPause = class VideoPlayPause extends framework.StatefulWidget {
    get controller() {
      return this[controller$1];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new video_demo._VideoPlayPauseState.new();
    }
  };
  (video_demo.VideoPlayPause.new = function(controller, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$1] = controller;
    video_demo.VideoPlayPause.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_demo.VideoPlayPause.prototype;
  dart.addTypeTests(video_demo.VideoPlayPause);
  const controller$1 = VideoPlayPause_controller;
  dart.setMethodSignature(video_demo.VideoPlayPause, () => ({
    __proto__: dart.getMethods(video_demo.VideoPlayPause.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(video_demo.VideoPlayPause, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo.VideoPlayPause, () => ({
    __proto__: dart.getFields(video_demo.VideoPlayPause.__proto__),
    controller: dart.finalFieldType(video_player.VideoPlayerController)
  }));
  let C83;
  let C82;
  let C81;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C85;
  const FadeAnimation_duration = dart.privateName(video_demo, "FadeAnimation.duration");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C87;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C86;
  const FadeAnimation_child = dart.privateName(video_demo, "FadeAnimation.child");
  let C84;
  let C90;
  let C89;
  let C88;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C96;
  let C95;
  let C100;
  let C101;
  let C102;
  let C99;
  let C98;
  video_demo._VideoPlayPauseState = class _VideoPlayPauseState extends framework.State$(video_demo.VideoPlayPause) {
    get controller() {
      return this.widget.controller;
    }
    initState() {
      super.initState();
      this.controller.addListener(this.listener);
    }
    deactivate() {
      this.controller.removeListener(this.listener);
      super.deactivate();
    }
    build(context) {
      return new basic.Stack.new({alignment: alignment.Alignment.bottomCenter, fit: stack.StackFit.expand, children: JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({child: new video_demo.VideoPlayerLoading.new(this.controller, {$creationLocationd_0dea112b090073317d4: C81 || CT.C81}), onTap: dart.fn(() => {
              if (!dart.test(this.controller.value.initialized)) {
                return;
              }
              if (dart.test(this.controller.value.isPlaying)) {
                this.imageFadeAnimation = C84 || CT.C84;
                this.controller.pause();
              } else {
                this.imageFadeAnimation = C88 || CT.C88;
                this.controller.play();
              }
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), new basic.Center.new({child: this.imageFadeAnimation, $creationLocationd_0dea112b090073317d4: C95 || CT.C95})]), $creationLocationd_0dea112b090073317d4: C98 || CT.C98});
    }
  };
  (video_demo._VideoPlayPauseState.new = function() {
    this.imageFadeAnimation = null;
    this.listener = null;
    video_demo._VideoPlayPauseState.__proto__.new.call(this);
    this.listener = dart.fn(() => {
      if (dart.test(this.mounted)) this.setState(dart.fn(() => {
      }, VoidToNull()));
    }, VoidToNull());
  }).prototype = video_demo._VideoPlayPauseState.prototype;
  dart.addTypeTests(video_demo._VideoPlayPauseState);
  dart.setMethodSignature(video_demo._VideoPlayPauseState, () => ({
    __proto__: dart.getMethods(video_demo._VideoPlayPauseState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(video_demo._VideoPlayPauseState, () => ({
    __proto__: dart.getGetters(video_demo._VideoPlayPauseState.__proto__),
    controller: video_player.VideoPlayerController
  }));
  dart.setLibraryUri(video_demo._VideoPlayPauseState, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo._VideoPlayPauseState, () => ({
    __proto__: dart.getFields(video_demo._VideoPlayPauseState.__proto__),
    imageFadeAnimation: dart.fieldType(video_demo.FadeAnimation),
    listener: dart.fieldType(dart.fnType(dart.void, []))
  }));
  video_demo.FadeAnimation = class FadeAnimation extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    createState() {
      return new video_demo._FadeAnimationState.new();
    }
  };
  (video_demo.FadeAnimation.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let duration = opts && 'duration' in opts ? opts.duration : C85 || CT.C85;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[duration$] = duration;
    video_demo.FadeAnimation.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_demo.FadeAnimation.prototype;
  dart.addTypeTests(video_demo.FadeAnimation);
  const child$ = FadeAnimation_child;
  const duration$ = FadeAnimation_duration;
  dart.setMethodSignature(video_demo.FadeAnimation, () => ({
    __proto__: dart.getMethods(video_demo.FadeAnimation.__proto__),
    createState: dart.fnType(video_demo._FadeAnimationState, [])
  }));
  dart.setLibraryUri(video_demo.FadeAnimation, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo.FadeAnimation, () => ({
    __proto__: dart.getFields(video_demo.FadeAnimation.__proto__),
    child: dart.finalFieldType(framework.Widget),
    duration: dart.finalFieldType(core.Duration)
  }));
  let C105;
  let C106;
  let C104;
  let C103;
  let C108;
  let C107;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(video_demo.FadeAnimation) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(video_demo.FadeAnimation)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(video_demo.FadeAnimation));
  video_demo._FadeAnimationState = class _FadeAnimationState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this.animationController = new animation_controller.AnimationController.new({duration: this.widget.duration, vsync: this});
      this.animationController.addListener(dart.fn(() => {
        if (dart.test(this.mounted)) {
          this.setState(dart.fn(() => {
          }, VoidToNull()));
        }
      }, VoidToNull()));
      this.animationController.forward({from: 0.0});
    }
    deactivate() {
      this.animationController.stop();
      super.deactivate();
    }
    didUpdateWidget(oldWidget) {
      video_demo.FadeAnimation._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(oldWidget.child, this.widget.child)) {
        this.animationController.forward({from: 0.0});
      }
    }
    dispose() {
      this.animationController.dispose();
      super.dispose();
    }
    build(context) {
      return dart.test(this.animationController.isAnimating) ? new basic.Opacity.new({opacity: 1.0 - dart.notNull(this.animationController.value), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C103 || CT.C103}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C107 || CT.C107});
    }
  };
  (video_demo._FadeAnimationState.new = function() {
    this.animationController = null;
    video_demo._FadeAnimationState.__proto__.new.call(this);
    ;
  }).prototype = video_demo._FadeAnimationState.prototype;
  dart.addTypeTests(video_demo._FadeAnimationState);
  dart.setMethodSignature(video_demo._FadeAnimationState, () => ({
    __proto__: dart.getMethods(video_demo._FadeAnimationState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(video_demo._FadeAnimationState, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo._FadeAnimationState, () => ({
    __proto__: dart.getFields(video_demo._FadeAnimationState.__proto__),
    animationController: dart.fieldType(animation_controller.AnimationController)
  }));
  const ConnectivityOverlay_child = dart.privateName(video_demo, "ConnectivityOverlay.child");
  const ConnectivityOverlay_connectedCompleter = dart.privateName(video_demo, "ConnectivityOverlay.connectedCompleter");
  const ConnectivityOverlay_scaffoldKey = dart.privateName(video_demo, "ConnectivityOverlay.scaffoldKey");
  video_demo.ConnectivityOverlay = class ConnectivityOverlay extends framework.StatefulWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get connectedCompleter() {
      return this[connectedCompleter$];
    }
    set connectedCompleter(value) {
      super.connectedCompleter = value;
    }
    get scaffoldKey() {
      return this[scaffoldKey$];
    }
    set scaffoldKey(value) {
      super.scaffoldKey = value;
    }
    createState() {
      return new video_demo._ConnectivityOverlayState.new();
    }
  };
  (video_demo.ConnectivityOverlay.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let connectedCompleter = opts && 'connectedCompleter' in opts ? opts.connectedCompleter : null;
    let scaffoldKey = opts && 'scaffoldKey' in opts ? opts.scaffoldKey : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$0] = child;
    this[connectedCompleter$] = connectedCompleter;
    this[scaffoldKey$] = scaffoldKey;
    video_demo.ConnectivityOverlay.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_demo.ConnectivityOverlay.prototype;
  dart.addTypeTests(video_demo.ConnectivityOverlay);
  const child$0 = ConnectivityOverlay_child;
  const connectedCompleter$ = ConnectivityOverlay_connectedCompleter;
  const scaffoldKey$ = ConnectivityOverlay_scaffoldKey;
  dart.setMethodSignature(video_demo.ConnectivityOverlay, () => ({
    __proto__: dart.getMethods(video_demo.ConnectivityOverlay.__proto__),
    createState: dart.fnType(video_demo._ConnectivityOverlayState, [])
  }));
  dart.setLibraryUri(video_demo.ConnectivityOverlay, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo.ConnectivityOverlay, () => ({
    __proto__: dart.getFields(video_demo.ConnectivityOverlay.__proto__),
    child: dart.finalFieldType(framework.Widget),
    connectedCompleter: dart.finalFieldType(async.Completer$(dart.void)),
    scaffoldKey: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState))
  }));
  const SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  let C110;
  const SnackBar_duration = dart.privateName(snack_bar, "SnackBar.duration");
  const SnackBar_action = dart.privateName(snack_bar, "SnackBar.action");
  const SnackBar_behavior = dart.privateName(snack_bar, "SnackBar.behavior");
  const SnackBar_shape = dart.privateName(snack_bar, "SnackBar.shape");
  const SnackBar_elevation = dart.privateName(snack_bar, "SnackBar.elevation");
  const Color__value = dart.privateName(ui, "Color._value");
  let C113;
  let C114;
  let C115;
  let C116;
  let C117;
  let C118;
  let C119;
  let C120;
  let C121;
  let C122;
  let C112;
  const ColorSwatch__swatch = dart.privateName(colors, "ColorSwatch._swatch");
  let C111;
  const SnackBar_backgroundColor = dart.privateName(snack_bar, "SnackBar.backgroundColor");
  const ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  const ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  const ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  const ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  const ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  const ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  const ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  const ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
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
  let C124;
  const ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  let C125;
  const ListTile_title = dart.privateName(list_tile, "ListTile.title");
  const ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  let C123;
  const SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  let C109;
  video_demo._ConnectivityOverlayState = class _ConnectivityOverlayState extends framework.State$(video_demo.ConnectivityOverlay) {
    connectivityStream() {
      return new (_AsyncStarImplOfConnectivityResult()).new(function* connectivityStream(stream) {
        let connectivity = connectivity$.Connectivity.new();
        let previousResult = (yield connectivity.checkConnectivity());
        if (stream.add(previousResult)) return;
        yield;
        let iter = async.StreamIterator.new(connectivity.onConnectivityChanged);
        try {
          while (yield iter.moveNext()) {
            let result = iter.current;
            {
              if (!dart.equals(result, previousResult)) {
                if (stream.add(result)) return;
                yield;
                previousResult = result;
              }
            }
          }
        } finally {
          yield iter.cancel();
        }
      }).stream;
    }
    initState() {
      super.initState();
      this.connectivitySubscription = this.connectivityStream().listen(dart.fn(connectivityResult => {
        if (!dart.test(this.mounted)) {
          return;
        }
        if (dart.equals(connectivityResult, connectivity$.ConnectivityResult.none)) {
          this.widget.scaffoldKey.currentState.showSnackBar(snack_bar.SnackBar._check(video_demo._ConnectivityOverlayState.errorSnackBar));
        } else {
          if (!dart.test(this.widget.connectedCompleter.isCompleted)) {
            this.widget.connectedCompleter.complete(null);
          }
        }
      }, ConnectivityResultToNull()));
    }
    dispose() {
      this.connectivitySubscription.cancel();
      super.dispose();
    }
    build(context) {
      return this.widget.child;
    }
  };
  (video_demo._ConnectivityOverlayState.new = function() {
    this.connectivitySubscription = null;
    this.connected = true;
    video_demo._ConnectivityOverlayState.__proto__.new.call(this);
    ;
  }).prototype = video_demo._ConnectivityOverlayState.prototype;
  dart.addTypeTests(video_demo._ConnectivityOverlayState);
  dart.setMethodSignature(video_demo._ConnectivityOverlayState, () => ({
    __proto__: dart.getMethods(video_demo._ConnectivityOverlayState.__proto__),
    connectivityStream: dart.fnType(async.Stream$(connectivity$.ConnectivityResult), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(video_demo._ConnectivityOverlayState, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo._ConnectivityOverlayState, () => ({
    __proto__: dart.getFields(video_demo._ConnectivityOverlayState.__proto__),
    connectivitySubscription: dart.fieldType(async.StreamSubscription$(connectivity$.ConnectivityResult)),
    connected: dart.fieldType(core.bool)
  }));
  dart.defineLazy(video_demo._ConnectivityOverlayState, {
    /*video_demo._ConnectivityOverlayState.errorSnackBar*/get errorSnackBar() {
      return C109 || CT.C109;
    }
  });
  video_demo.VideoDemo = class VideoDemo extends framework.StatefulWidget {
    createState() {
      return new video_demo._VideoDemoState.new();
    }
  };
  (video_demo.VideoDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    video_demo.VideoDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_demo.VideoDemo.prototype;
  dart.addTypeTests(video_demo.VideoDemo);
  dart.setMethodSignature(video_demo.VideoDemo, () => ({
    __proto__: dart.getMethods(video_demo.VideoDemo.__proto__),
    createState: dart.fnType(video_demo._VideoDemoState, [])
  }));
  dart.setLibraryUri(video_demo.VideoDemo, "package:flutter_gallery/demo/video_demo.dart");
  dart.defineLazy(video_demo.VideoDemo, {
    /*video_demo.VideoDemo.routeName*/get routeName() {
      return "/video";
    }
  });
  let C126;
  let C129;
  let C128;
  let C127;
  let C132;
  let C133;
  let C134;
  let C131;
  let C130;
  let C137;
  let C138;
  let C139;
  let C136;
  let C135;
  let C142;
  let C141;
  let C140;
  let C145;
  let C144;
  let C143;
  let C148;
  let C149;
  let C150;
  let C147;
  let C146;
  let C152;
  let C151;
  let C155;
  let C156;
  let C157;
  let C154;
  let C153;
  const State_SingleTickerProviderStateMixin$36$ = class State_SingleTickerProviderStateMixin extends framework.State$(video_demo.VideoDemo) {};
  (State_SingleTickerProviderStateMixin$36$.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(video_demo.VideoDemo)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$, ticker_provider.SingleTickerProviderStateMixin$(video_demo.VideoDemo));
  video_demo._VideoDemoState = class _VideoDemoState extends State_SingleTickerProviderStateMixin$36$ {
    initState() {
      super.initState();
      const initController = (controller, name) => {
        return async.async(dart.void, (function* initController() {
          core.print("> VideoDemo initController \"" + dart.str(name) + "\" " + (dart.test(this.isDisposed) ? "DISPOSED" : ""));
          controller.setLooping(true);
          controller.setVolume(0.0);
          controller.play();
          yield this.connectedCompleter.future;
          yield controller.initialize();
          if (dart.test(this.mounted)) {
            core.print("< VideoDemo initController \"" + dart.str(name) + "\" done " + (dart.test(this.isDisposed) ? "DISPOSED" : ""));
            this.setState(dart.fn(() => {
            }, VoidToNull()));
          }
        }).bind(this));
      };
      dart.fn(initController, VideoPlayerControllerAndStringToFutureOfvoid());
      initController(this.butterflyController, "butterfly");
      initController(this.beeController, "bee");
      video_demo.isIOSSimulator().then(dart.void, dart.fn(result => {
        this.isSupported = !dart.test(result);
      }, boolToNull()));
    }
    dispose() {
      core.print("> VideoDemo dispose");
      this.isDisposed = true;
      this.butterflyController.dispose();
      this.beeController.dispose();
      core.print("< VideoDemo dispose");
      super.dispose();
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this.scaffoldKey, appBar: new app_bar.AppBar.new({title: C126 || CT.C126, $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), body: dart.test(this.isSupported) ? new video_demo.ConnectivityOverlay.new({child: new scrollbar.Scrollbar.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new video_demo.VideoCard.new({title: "Butterfly", subtitle: "… flutters by", controller: this.butterflyController, $creationLocationd_0dea112b090073317d4: C130 || CT.C130}), new video_demo.VideoCard.new({title: "Bee", subtitle: "… gently buzzing", controller: this.beeController, $creationLocationd_0dea112b090073317d4: C135 || CT.C135})]), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), connectedCompleter: this.connectedCompleter, scaffoldKey: this.scaffoldKey, $creationLocationd_0dea112b090073317d4: C146 || CT.C146}) : C151 || CT.C151, $creationLocationd_0dea112b090073317d4: C153 || CT.C153});
    }
  };
  (video_demo._VideoDemoState.new = function() {
    this.butterflyController = new video_player.VideoPlayerController.asset("videos/butterfly.mp4", {package: "flutter_gallery_assets"});
    this.beeController = new video_player.VideoPlayerController.network(video_demo._VideoDemoState.beeUri);
    this.scaffoldKey = GlobalKeyOfScaffoldState().new();
    this.connectedCompleter = CompleterOfvoid().new();
    this.isSupported = true;
    this.isDisposed = false;
    video_demo._VideoDemoState.__proto__.new.call(this);
    ;
  }).prototype = video_demo._VideoDemoState.prototype;
  dart.addTypeTests(video_demo._VideoDemoState);
  dart.setMethodSignature(video_demo._VideoDemoState, () => ({
    __proto__: dart.getMethods(video_demo._VideoDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(video_demo._VideoDemoState, "package:flutter_gallery/demo/video_demo.dart");
  dart.setFieldSignature(video_demo._VideoDemoState, () => ({
    __proto__: dart.getFields(video_demo._VideoDemoState.__proto__),
    butterflyController: dart.finalFieldType(video_player.VideoPlayerController),
    beeController: dart.finalFieldType(video_player.VideoPlayerController),
    scaffoldKey: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    connectedCompleter: dart.finalFieldType(async.Completer$(dart.void)),
    isSupported: dart.fieldType(core.bool),
    isDisposed: dart.fieldType(core.bool)
  }));
  dart.defineLazy(video_demo._VideoDemoState, {
    /*video_demo._VideoDemoState.beeUri*/get beeUri() {
      return "https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4";
    }
  });
  video_demo.isIOSSimulator = function isIOSSimulator() {
    return async.async(core.bool, function* isIOSSimulator() {
      return dart.test(io.Platform.isIOS) && !dart.test((yield video_demo.deviceInfoPlugin.iosInfo).isPhysicalDevice);
    });
  };
  dart.defineLazy(video_demo, {
    /*video_demo.deviceInfoPlugin*/get deviceInfoPlugin() {
      return new device_info.DeviceInfoPlugin.new();
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/video_demo", {
    "package:flutter_gallery/demo/video_demo.dart": video_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["video_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"video_demo.ddc.js"}');
  // Exports:
  return {
    demo__video_demo: video_demo
  };
});

//# sourceMappingURL=video_demo.ddc.js.map
