define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_gallery/demo/all', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/animation/animation', 'packages/flutter_gallery/gallery/backdrop'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter_gallery__demo__all, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__gestures__arena, packages__flutter__src__animation__animation, packages__flutter_gallery__gallery__backdrop) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const page_storage = packages__flutter__src__widgets__actions.src__widgets__page_storage;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const will_pop_scope = packages__flutter__src__widgets__actions.src__widgets__will_pop_scope;
  const animated_switcher = packages__flutter__src__widgets__actions.src__widgets__animated_switcher;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const banner = packages__flutter__src__widgets__actions.src__widgets__banner;
  const annotated_region = packages__flutter__src__widgets__actions.src__widgets__annotated_region;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const theme$ = packages__flutter__material.src__material__theme;
  const button = packages__flutter__material.src__material__button;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const back_button = packages__flutter__material.src__material__back_button;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const demos = packages__flutter_gallery__demo__all.gallery__demos;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const recognizer = packages__flutter__src__gestures__arena.src__gestures__recognizer;
  const system_chrome = packages__flutter__src__gestures__arena.src__services__system_chrome;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const backdrop = packages__flutter_gallery__gallery__backdrop.gallery__backdrop;
  const home$ = Object.create(dart.library);
  const $toList = dartx.toList;
  const $toDouble = dartx.toDouble;
  const $length = dartx.length;
  const $truncate = dartx.truncate;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $map = dartx.map;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let PageStorageKeyOfString = () => (PageStorageKeyOfString = dart.constFn(page_storage.PageStorageKey$(core.String)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intToSizedBox = () => (intToSizedBox = dart.constFn(dart.fnType(basic.SizedBox, [core.int])))();
  let intToRow = () => (intToRow = dart.constFn(dart.fnType(basic.Row, [core.int])))();
  let BuildContextAndBoxConstraintsToRepaintBoundary = () => (BuildContextAndBoxConstraintsToRepaintBoundary = dart.constFn(dart.fnType(basic.RepaintBoundary, [framework.BuildContext, box.BoxConstraints])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let GalleryDemoTo_DemoItem = () => (GalleryDemoTo_DemoItem = dart.constFn(dart.fnType(home$._DemoItem, [demos.GalleryDemo])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let WidgetAndListOfWidgetToWidget = () => (WidgetAndListOfWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.Widget, ListOfWidget()])))();
  let VoidToGalleryDemoCategory = () => (VoidToGalleryDemoCategory = dart.constFn(dart.fnType(demos.GalleryDemoCategory, [])))();
  let GalleryDemoCategoryToNull = () => (GalleryDemoCategoryToNull = dart.constFn(dart.fnType(core.Null, [demos.GalleryDemoCategory])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let AnnotatedRegionOfSystemUiOverlayStyle = () => (AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(annotated_region.AnnotatedRegion$(system_chrome.SystemUiOverlayStyle)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$]: "ImageRepeat.noRepeat",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: image_resolution.AssetImage.prototype,
        [AssetImage_package]: "flutter_gallery_assets",
        [AssetImage_bundle]: null,
        [AssetImage_assetName]: "logos/flutter_white/logo.png"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: decoration_image.DecorationImage.prototype,
        [DecorationImage_matchTextDirection]: false,
        [DecorationImage_repeat]: C3 || CT.C3,
        [DecorationImage_centerSlice]: null,
        [DecorationImage_alignment]: C4 || CT.C4,
        [DecorationImage_fit]: null,
        [DecorationImage_colorFilter]: null,
        [DecorationImage_image]: C5 || CT.C5
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C1 || CT.C1,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: C2 || CT.C2,
        [BoxDecoration_color]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 27,
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
        [_Location_column]: 12,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 6,
        [EdgeInsets_right]: 6,
        [EdgeInsets_top]: 6,
        [EdgeInsets_left]: 6
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 17,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 73,
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
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 83,
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
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: PageStorageKeyOfString().prototype,
        [ValueKey_value]: "categories"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "category",
        [_Location_column]: 27,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 27,
        [_Location_line]: 150,
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
        [_Location_column]: 32,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 135,
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
        [_Location_column]: 22,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 22,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 17,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 205,
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
        [_Location_column]: 22,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280295716.0
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 215,
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
        [_Location_column]: 19,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4284507243.0
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 222,
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
        [_Location_column]: 21,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 212,
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
        [_Location_column]: 22,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 44
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 7,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 7,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126, C127 || CT.C127, C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: ValueKeyOfString().prototype,
        [ValueKey_value]: "GalleryDemoList"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "demo",
        [_Location_column]: 30,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 259,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 11,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137, C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 9,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 9,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 9,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 9,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143, C144 || CT.C144, C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 249,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 247,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 600000
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C157 || CT.C157,
        [Interval_end]: 1,
        [Interval_begin]: 0.4
      });
    },
    get C158() {
      return C158 = dart.const({
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
        [Text_data]: "Options"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: home$._FlutterLogo.prototype,
        [Widget_key]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: back_button.BackButtonIcon.prototype,
        [Widget_key]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 19,
        [_Location_line]: 353,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 354,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164, C165 || CT.C165], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 351,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 15,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchOutCurve",
        [_Location_column]: 15,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchInCurve",
        [_Location_column]: 15,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169, C170 || CT.C170, C171 || CT.C171], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 345,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
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
        [Text_data]: "Flutter gallery"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 361,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 15,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 357,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 62,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 363,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C183() {
      return C183 = dart.fn(home$._GalleryHomeState._topHomeLayout, WidgetAndListOfWidgetToWidget());
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "category",
        [_Location_column]: 30,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186], widget_inspector._Location);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C185 || CT.C185,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "categories",
        [_Location_column]: 19,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onCategoryTap",
        [_Location_column]: 19,
        [_Location_line]: 373,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 371,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 15,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchOutCurve",
        [_Location_column]: 15,
        [_Location_line]: 366,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchInCurve",
        [_Location_column]: 15,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "layoutBuilder",
        [_Location_column]: 15,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 369,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194, C195 || CT.C195, C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 364,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backTitle",
        [_Location_column]: 13,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backLayer",
        [_Location_column]: 13,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontAction",
        [_Location_column]: 13,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontTitle",
        [_Location_column]: 13,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontHeading",
        [_Location_column]: 13,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontLayer",
        [_Location_column]: 13,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.constList([C200 || CT.C200, C201 || CT.C201, C202 || CT.C202, C203 || CT.C203, C204 || CT.C204, C205 || CT.C205], widget_inspector._Location);
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C199 || CT.C199,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onWillPop",
        [_Location_column]: 11,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.constList([C208 || CT.C208, C209 || CT.C209], widget_inspector._Location);
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C207 || CT.C207,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 333,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 9,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.constList([C212 || CT.C212, C213 || CT.C213], widget_inspector._Location);
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C211 || CT.C211,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 331,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216, C217 || CT.C217, C218 || CT.C218], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 328,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 8
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C220() {
      return C220 = dart.const({
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
        [TextStyle_height]: 1,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C221 || CT.C221,
        [TextStyle_fontSize]: 10.2,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C222 || CT.C222,
        [TextStyle_inherit]: true
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 2696354844.0
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: banner.BannerLocation.prototype,
        [_name$0]: "BannerLocation.topEnd",
        index: 1
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: banner.Banner.prototype,
        [Widget_key]: null,
        [Banner_textStyle]: C220 || CT.C220,
        [Banner_color]: C223 || CT.C223,
        [Banner_layoutDirection]: null,
        [Banner_location]: C224 || CT.C224,
        [Banner_textDirection]: null,
        [Banner_message]: "PREVIEW",
        [Banner_child]: null
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C226 || CT.C226,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 393,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 9,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 391,
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
        [_Location_column]: 14,
        [_Location_line]: 389,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 7,
        [_Location_line]: 405,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.constList([C235 || CT.C235, C236 || CT.C236], widget_inspector._Location);
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C234 || CT.C234,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 403,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart"
      });
    },
    get C237() {
      return C237 = dart.fn(animated_switcher.AnimatedSwitcher.defaultLayoutBuilder, WidgetAndListOfWidgetToWidget());
    },
    get C238() {
      return C238 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278205813.0
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    }
  });
  const _name = dart.privateName(box_border, "_name");
  let C1;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const DecorationImage_matchTextDirection = dart.privateName(decoration_image, "DecorationImage.matchTextDirection");
  const _name$ = dart.privateName(decoration_image, "_name");
  let C3;
  const DecorationImage_repeat = dart.privateName(decoration_image, "DecorationImage.repeat");
  const DecorationImage_centerSlice = dart.privateName(decoration_image, "DecorationImage.centerSlice");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C4;
  const DecorationImage_alignment = dart.privateName(decoration_image, "DecorationImage.alignment");
  const DecorationImage_fit = dart.privateName(decoration_image, "DecorationImage.fit");
  const DecorationImage_colorFilter = dart.privateName(decoration_image, "DecorationImage.colorFilter");
  const AssetImage_package = dart.privateName(image_resolution, "AssetImage.package");
  const AssetImage_bundle = dart.privateName(image_resolution, "AssetImage.bundle");
  const AssetImage_assetName = dart.privateName(image_resolution, "AssetImage.assetName");
  let C5;
  const DecorationImage_image = dart.privateName(decoration_image, "DecorationImage.image");
  let C2;
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  let C13;
  let C12;
  let C11;
  home$._FlutterLogo = class _FlutterLogo extends framework.StatelessWidget {
    build(context) {
      return new basic.Center.new({child: new container.Container.new({width: 34.0, height: 34.0, decoration: C0 || CT.C0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
  };
  (home$._FlutterLogo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home$._FlutterLogo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._FlutterLogo.prototype;
  dart.addTypeTests(home$._FlutterLogo);
  dart.setMethodSignature(home$._FlutterLogo, () => ({
    __proto__: dart.getMethods(home$._FlutterLogo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._FlutterLogo, "package:flutter_gallery/gallery/home.dart");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C14;
  let C17;
  let C18;
  let C19;
  let C16;
  let C15;
  let C22;
  let C23;
  let C21;
  let C20;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C24;
  let C27;
  let C28;
  let C29;
  let C26;
  let C25;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C47;
  let C41;
  let C40;
  let C50;
  let C49;
  let C48;
  const _CategoryItem_category = dart.privateName(home$, "_CategoryItem.category");
  const _CategoryItem_onTap = dart.privateName(home$, "_CategoryItem.onTap");
  home$._CategoryItem = class _CategoryItem extends framework.StatelessWidget {
    get category() {
      return this[category$];
    }
    set category(value) {
      super.category = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let isDark = dart.equals(theme.brightness, ui.Brightness.dark);
      return new basic.RepaintBoundary.new({child: new button.RawMaterialButton.new({padding: edge_insets.EdgeInsets.zero, hoverColor: theme.primaryColor.withOpacity(0.05), splashColor: theme.primaryColor.withOpacity(0.12), highlightColor: colors.Colors.transparent, onPressed: this.onTap, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.end, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C14 || CT.C14, child: new icon.Icon.new(this.category.icon, {size: 60.0, color: isDark ? colors.Colors.white : home$._kFlutterBlue, $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), C24 || CT.C24, new container.Container.new({height: 48.0, alignment: alignment.Alignment.center, child: new text.Text.new(this.category.name, {textAlign: ui.TextAlign.center, style: theme.textTheme.subhead.copyWith({fontFamily: "GoogleSans", color: isDark ? colors.Colors.white : home$._kFlutterBlue}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30})]), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48});
    }
  };
  (home$._CategoryItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let category = opts && 'category' in opts ? opts.category : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[category$] = category;
    this[onTap$] = onTap;
    home$._CategoryItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._CategoryItem.prototype;
  dart.addTypeTests(home$._CategoryItem);
  const category$ = _CategoryItem_category;
  const onTap$ = _CategoryItem_onTap;
  dart.setMethodSignature(home$._CategoryItem, () => ({
    __proto__: dart.getMethods(home$._CategoryItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._CategoryItem, "package:flutter_gallery/gallery/home.dart");
  dart.setFieldSignature(home$._CategoryItem, () => ({
    __proto__: dart.getFields(home$._CategoryItem.__proto__),
    category: dart.finalFieldType(demos.GalleryDemoCategory),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const ValueKey_value = dart.privateName(key, "ValueKey.value");
  let C51;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C59;
  let C60;
  let C57;
  let C56;
  let C63;
  let C62;
  let C61;
  let C66;
  let C67;
  let C68;
  let C65;
  let C64;
  let C71;
  let C70;
  let C69;
  let C74;
  let C73;
  let C72;
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C80;
  let C79;
  const _CategoriesPage_categories = dart.privateName(home$, "_CategoriesPage.categories");
  const _CategoriesPage_onCategoryTap = dart.privateName(home$, "_CategoriesPage.onCategoryTap");
  home$._CategoriesPage = class _CategoriesPage extends framework.StatelessWidget {
    get categories() {
      return this[categories$];
    }
    set categories(value) {
      super.categories = value;
    }
    get onCategoryTap() {
      return this[onCategoryTap$];
    }
    set onCategoryTap(value) {
      super.onCategoryTap = value;
    }
    build(context) {
      let categoriesList = this.categories[$toList]();
      let columnCount = dart.equals(media_query.MediaQuery.of(context).orientation, media_query.Orientation.portrait) ? 2 : 3;
      return new basic.Semantics.new({scopesRoute: true, namesRoute: true, label: "categories", explicitChildNodes: true, child: new single_child_scroll_view.SingleChildScrollView.new({key: C51 || CT.C51, child: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
              let columnWidth = dart.notNull(constraints.biggest.width) / columnCount[$toDouble]();
              let rowHeight = math.min(core.double, 225.0, columnWidth * 0.8888888888888888);
              let rowCount = ((dart.notNull(this.categories[$length]) + columnCount - 1) / columnCount)[$truncate]();
              return new basic.RepaintBoundary.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: ListOfWidget().generate(rowCount, dart.fn(rowIndex => {
                    let columnCountForRow = dart.asInt(rowIndex === rowCount - 1 ? dart.notNull(this.categories[$length]) - columnCount * math.max(core.num, 0, rowCount - 1) : columnCount);
                    return new basic.Row.new({children: ListOfWidget().generate(columnCountForRow, dart.fn(columnIndex => {
                        let index = dart.notNull(rowIndex) * columnCount + dart.notNull(columnIndex);
                        let category = categoriesList[$_get](index);
                        return new basic.SizedBox.new({width: columnWidth, height: rowHeight, child: new home$._CategoryItem.new({category: category, onTap: dart.fn(() => {
                              this.onCategoryTap(category);
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56});
                      }, intToSizedBox())), $creationLocationd_0dea112b090073317d4: C61 || CT.C61});
                  }, intToRow())), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69});
            }, BuildContextAndBoxConstraintsToRepaintBoundary()), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79});
    }
  };
  (home$._CategoriesPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let categories = opts && 'categories' in opts ? opts.categories : null;
    let onCategoryTap = opts && 'onCategoryTap' in opts ? opts.onCategoryTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[categories$] = categories;
    this[onCategoryTap$] = onCategoryTap;
    home$._CategoriesPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._CategoriesPage.prototype;
  dart.addTypeTests(home$._CategoriesPage);
  const categories$ = _CategoriesPage_categories;
  const onCategoryTap$ = _CategoriesPage_onCategoryTap;
  dart.setMethodSignature(home$._CategoriesPage, () => ({
    __proto__: dart.getMethods(home$._CategoriesPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._CategoriesPage, "package:flutter_gallery/gallery/home.dart");
  dart.setFieldSignature(home$._CategoriesPage, () => ({
    __proto__: dart.getFields(home$._CategoriesPage.__proto__),
    categories: dart.finalFieldType(core.Iterable$(demos.GalleryDemoCategory)),
    onCategoryTap: dart.finalFieldType(dart.fnType(dart.void, [demos.GalleryDemoCategory]))
  }));
  const _launchDemo = dart.privateName(home$, "_launchDemo");
  let C88;
  let C89;
  let C90;
  let C87;
  let C86;
  let C93;
  let C94;
  let C95;
  let C96;
  let C92;
  let C91;
  const Color__value = dart.privateName(ui, "Color._value");
  let C97;
  let C100;
  let C101;
  let C99;
  let C98;
  let C102;
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
  let C113;
  let C112;
  let C115;
  let C118;
  let C117;
  let C116;
  let C121;
  let C122;
  let C120;
  let C119;
  let C125;
  let C126;
  let C127;
  let C128;
  let C129;
  let C124;
  let C123;
  const _DemoItem_demo = dart.privateName(home$, "_DemoItem.demo");
  home$._DemoItem = class _DemoItem extends framework.StatelessWidget {
    get demo() {
      return this[demo$];
    }
    set demo(value) {
      super.demo = value;
    }
    [_launchDemo](context) {
      if (this.demo.routeName != null) {
        developer.Timeline.instantSync("Start Transition", {arguments: new (IdentityMapOfString$String()).from(["from", "/", "to", this.demo.routeName])});
        navigator.Navigator.pushNamed(core.Object, context, this.demo.routeName);
      }
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let isDark = dart.equals(theme.brightness, ui.Brightness.dark);
      let textScaleFactor = media_query.MediaQuery.textScaleFactorOf(context);
      return new button.RawMaterialButton.new({padding: edge_insets.EdgeInsets.zero, splashColor: theme.primaryColor.withOpacity(0.12), highlightColor: colors.Colors.transparent, onPressed: dart.fn(() => {
          this[_launchDemo](context);
        }, VoidToNull()), child: new container.Container.new({constraints: new box.BoxConstraints.new({minHeight: 64 * dart.notNull(textScaleFactor)}), child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({width: 56.0, height: 56.0, alignment: alignment.Alignment.center, child: new icon.Icon.new(this.demo.icon, {size: 24.0, color: isDark ? colors.Colors.white : home$._kFlutterBlue, $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), new basic.Expanded.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: (() => {
                    let t0 = JSArrayOfWidget().of([]);
                    t0[$add](new text.Text.new(this.demo.title, {style: theme.textTheme.subhead.copyWith({color: isDark ? colors.Colors.white : C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}));
                    if (this.demo.subtitle != null) t0[$add](new text.Text.new(this.demo.subtitle, {style: theme.textTheme.body1.copyWith({color: isDark ? colors.Colors.white : C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}));
                    return t0;
                  })(), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), C115 || CT.C115]), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123});
    }
  };
  (home$._DemoItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let demo = opts && 'demo' in opts ? opts.demo : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[demo$] = demo;
    home$._DemoItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._DemoItem.prototype;
  dart.addTypeTests(home$._DemoItem);
  const demo$ = _DemoItem_demo;
  dart.setMethodSignature(home$._DemoItem, () => ({
    __proto__: dart.getMethods(home$._DemoItem.__proto__),
    [_launchDemo]: dart.fnType(dart.void, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._DemoItem, "package:flutter_gallery/gallery/home.dart");
  dart.setFieldSignature(home$._DemoItem, () => ({
    __proto__: dart.getFields(home$._DemoItem.__proto__),
    demo: dart.finalFieldType(demos.GalleryDemo)
  }));
  let C130;
  let C133;
  let C132;
  let C131;
  let C136;
  let C137;
  let C138;
  let C139;
  let C135;
  let C134;
  let C142;
  let C143;
  let C144;
  let C145;
  let C146;
  let C141;
  let C140;
  let C149;
  let C150;
  let C148;
  let C147;
  const _DemosPage_category = dart.privateName(home$, "_DemosPage.category");
  home$._DemosPage = class _DemosPage extends framework.StatelessWidget {
    get category() {
      return this[category$0];
    }
    set category(value) {
      super.category = value;
    }
    build(context) {
      let windowBottomPadding = media_query.MediaQuery.of(context).padding.bottom;
      return new basic.KeyedSubtree.new({key: C130 || CT.C130, child: new basic.Semantics.new({scopesRoute: true, namesRoute: true, label: this.category.name, explicitChildNodes: true, child: new scroll_view.ListView.new({dragStartBehavior: recognizer.DragStartBehavior.down, key: new (PageStorageKeyOfString()).new(this.category.name), padding: new edge_insets.EdgeInsets.only({top: 8.0, bottom: windowBottomPadding}), children: demos.kGalleryCategoryToDemos[$_get](this.category)[$map](framework.Widget, dart.fn(demo => new home$._DemoItem.new({demo: demo, $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), GalleryDemoTo_DemoItem()))[$toList](), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), $creationLocationd_0dea112b090073317d4: C147 || CT.C147});
    }
  };
  (home$._DemosPage.new = function(category, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[category$0] = category;
    home$._DemosPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._DemosPage.prototype;
  dart.addTypeTests(home$._DemosPage);
  const category$0 = _DemosPage_category;
  dart.setMethodSignature(home$._DemosPage, () => ({
    __proto__: dart.getMethods(home$._DemosPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._DemosPage, "package:flutter_gallery/gallery/home.dart");
  dart.setFieldSignature(home$._DemosPage, () => ({
    __proto__: dart.getFields(home$._DemosPage.__proto__),
    category: dart.finalFieldType(demos.GalleryDemoCategory)
  }));
  const GalleryHome_optionsPage = dart.privateName(home$, "GalleryHome.optionsPage");
  const GalleryHome_testMode = dart.privateName(home$, "GalleryHome.testMode");
  home$.GalleryHome = class GalleryHome extends framework.StatefulWidget {
    get optionsPage() {
      return this[optionsPage$];
    }
    set optionsPage(value) {
      super.optionsPage = value;
    }
    get testMode() {
      return this[testMode$];
    }
    set testMode(value) {
      super.testMode = value;
    }
    createState() {
      return new home$._GalleryHomeState.new();
    }
  };
  (home$.GalleryHome.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let testMode = opts && 'testMode' in opts ? opts.testMode : false;
    let optionsPage = opts && 'optionsPage' in opts ? opts.optionsPage : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[testMode$] = testMode;
    this[optionsPage$] = optionsPage;
    home$.GalleryHome.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$.GalleryHome.prototype;
  dart.addTypeTests(home$.GalleryHome);
  const optionsPage$ = GalleryHome_optionsPage;
  const testMode$ = GalleryHome_testMode;
  dart.setMethodSignature(home$.GalleryHome, () => ({
    __proto__: dart.getMethods(home$.GalleryHome.__proto__),
    createState: dart.fnType(home$._GalleryHomeState, [])
  }));
  dart.setLibraryUri(home$.GalleryHome, "package:flutter_gallery/gallery/home.dart");
  dart.setFieldSignature(home$.GalleryHome, () => ({
    __proto__: dart.getFields(home$.GalleryHome.__proto__),
    optionsPage: dart.finalFieldType(framework.Widget),
    testMode: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(home$.GalleryHome, {
    /*home$.GalleryHome.showPreviewBanner*/get showPreviewBanner() {
      return true;
    },
    set showPreviewBanner(_) {}
  });
  const _controller = dart.privateName(home$, "_controller");
  const _category = dart.privateName(home$, "_category");
  let C153;
  let C154;
  let C152;
  let C151;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C155;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C157;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C156;
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
  let C158;
  let C159;
  let C160;
  let C163;
  let C164;
  let C165;
  let C162;
  let C161;
  let C168;
  let C169;
  let C170;
  let C171;
  let C167;
  let C166;
  let C172;
  let C175;
  let C174;
  let C173;
  let C178;
  let C179;
  let C177;
  let C176;
  let C182;
  let C181;
  let C180;
  let C183;
  let C186;
  let C185;
  let C184;
  let C189;
  let C190;
  let C188;
  let C187;
  let C193;
  let C194;
  let C195;
  let C196;
  let C197;
  let C192;
  let C191;
  let C200;
  let C201;
  let C202;
  let C203;
  let C204;
  let C205;
  let C199;
  let C198;
  let C208;
  let C209;
  let C207;
  let C206;
  let C212;
  let C213;
  let C211;
  let C210;
  let C216;
  let C217;
  let C218;
  let C215;
  let C214;
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
  let C221;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  let C222;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C220;
  const Banner_textStyle = dart.privateName(banner, "Banner.textStyle");
  let C223;
  const Banner_color = dart.privateName(banner, "Banner.color");
  const Banner_layoutDirection = dart.privateName(banner, "Banner.layoutDirection");
  const _name$0 = dart.privateName(banner, "_name");
  let C224;
  const Banner_location = dart.privateName(banner, "Banner.location");
  const Banner_textDirection = dart.privateName(banner, "Banner.textDirection");
  const Banner_message = dart.privateName(banner, "Banner.message");
  const Banner_child = dart.privateName(banner, "Banner.child");
  let C219;
  let C227;
  let C228;
  let C226;
  let C225;
  let C231;
  let C232;
  let C230;
  let C229;
  let C235;
  let C236;
  let C234;
  let C233;
  let C237;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(home$.GalleryHome) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(home$.GalleryHome)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(home$.GalleryHome));
  home$._GalleryHomeState = class _GalleryHomeState extends State_SingleTickerProviderStateMixin$36 {
    static _topHomeLayout(currentChild, previousChildren) {
      return new basic.Stack.new({children: (() => {
          let t1 = JSArrayOfWidget().of([]);
          for (let t2 of previousChildren)
            t1[$add](t2);
          if (currentChild != null) t1[$add](currentChild);
          return t1;
        })(), alignment: alignment.Alignment.topCenter, $creationLocationd_0dea112b090073317d4: C151 || CT.C151});
    }
    initState() {
      let t3;
      super.initState();
      this[_controller] = (t3 = new animation_controller.AnimationController.new({duration: C155 || CT.C155, debugLabel: "preview banner", vsync: this}), t3.forward(), t3);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let isDark = dart.equals(theme.brightness, ui.Brightness.dark);
      let media = media_query.MediaQuery.of(context);
      let centerHome = dart.equals(media.orientation, media_query.Orientation.portrait) && dart.notNull(media.size.height) < 800.0;
      let switchOutCurve = C156 || CT.C156;
      let switchInCurve = C156 || CT.C156;
      let home = new scaffold.Scaffold.new({key: home$._GalleryHomeState._scaffoldKey, backgroundColor: isDark ? home$._kFlutterBlue : theme.primaryColor, body: new safe_area.SafeArea.new({bottom: false, child: new will_pop_scope.WillPopScope.new({onWillPop: dart.fn(() => {
              if (this[_category] != null) {
                this.setState(dart.fn(() => this[_category] = null, VoidToNull()));
                return FutureOfbool().value(false);
              }
              return FutureOfbool().value(true);
            }, VoidToFutureOfbool()), child: new backdrop.Backdrop.new({backTitle: C158 || CT.C158, backLayer: this.widget.optionsPage, frontAction: new animated_switcher.AnimatedSwitcher.new({duration: home$._kFrontLayerSwitchDuration, switchOutCurve: switchOutCurve, switchInCurve: switchInCurve, child: this[_category] == null ? C159 || CT.C159 : new icon_button.IconButton.new({icon: C160 || CT.C160, tooltip: "Back", onPressed: dart.fn(() => this.setState(dart.fn(() => this[_category] = null, VoidToNull())), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), frontTitle: new animated_switcher.AnimatedSwitcher.new({duration: home$._kFrontLayerSwitchDuration, child: this[_category] == null ? C172 || CT.C172 : new text.Text.new(this[_category].name, {$creationLocationd_0dea112b090073317d4: C173 || CT.C173}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), frontHeading: dart.test(this.widget.testMode) ? null : new container.Container.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C180 || CT.C180}), frontLayer: new animated_switcher.AnimatedSwitcher.new({duration: home$._kFrontLayerSwitchDuration, switchOutCurve: switchOutCurve, switchInCurve: switchInCurve, layoutBuilder: centerHome ? home$._GalleryHomeState._centerHomeLayout : C183 || CT.C183, child: this[_category] != null ? new home$._DemosPage.new(this[_category], {$creationLocationd_0dea112b090073317d4: C184 || CT.C184}) : new home$._CategoriesPage.new({categories: demos.kAllGalleryDemoCategories, onCategoryTap: dart.fn(category => {
                    this.setState(dart.fn(() => this[_category] = category, VoidToGalleryDemoCategory()));
                  }, GalleryDemoCategoryToNull()), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), $creationLocationd_0dea112b090073317d4: C191 || CT.C191}), $creationLocationd_0dea112b090073317d4: C198 || CT.C198}), $creationLocationd_0dea112b090073317d4: C206 || CT.C206}), $creationLocationd_0dea112b090073317d4: C210 || CT.C210}), $creationLocationd_0dea112b090073317d4: C214 || CT.C214});
      if (!dart.test(dart.fn(() => {
        home$.GalleryHome.showPreviewBanner = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/gallery/home.dart", 383, 12, "() {\n      GalleryHome.showPreviewBanner = false;\n      return true;\n    }()");
      if (dart.test(home$.GalleryHome.showPreviewBanner)) {
        home = new basic.Stack.new({fit: stack.StackFit.expand, children: JSArrayOfWidget().of([home, new transitions.FadeTransition.new({opacity: new animations.CurvedAnimation.new({parent: this[_controller], curve: curves.Curves.easeInOut}), child: C219 || CT.C219, $creationLocationd_0dea112b090073317d4: C225 || CT.C225})]), $creationLocationd_0dea112b090073317d4: C229 || CT.C229});
      }
      home = new (AnnotatedRegionOfSystemUiOverlayStyle()).new({child: home, value: system_chrome.SystemUiOverlayStyle.light, $creationLocationd_0dea112b090073317d4: C233 || CT.C233});
      return home;
    }
  };
  (home$._GalleryHomeState.new = function() {
    this[_controller] = null;
    this[_category] = null;
    home$._GalleryHomeState.__proto__.new.call(this);
    ;
  }).prototype = home$._GalleryHomeState.prototype;
  dart.addTypeTests(home$._GalleryHomeState);
  dart.setMethodSignature(home$._GalleryHomeState, () => ({
    __proto__: dart.getMethods(home$._GalleryHomeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._GalleryHomeState, "package:flutter_gallery/gallery/home.dart");
  dart.setFieldSignature(home$._GalleryHomeState, () => ({
    __proto__: dart.getFields(home$._GalleryHomeState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_category]: dart.fieldType(demos.GalleryDemoCategory)
  }));
  dart.defineLazy(home$._GalleryHomeState, {
    /*home$._GalleryHomeState._scaffoldKey*/get _scaffoldKey() {
      return GlobalKeyOfScaffoldState().new();
    },
    /*home$._GalleryHomeState._centerHomeLayout*/get _centerHomeLayout() {
      return C237 || CT.C237;
    }
  });
  let C238;
  let C239;
  dart.defineLazy(home$, {
    /*home$._kGalleryAssetsPackage*/get _kGalleryAssetsPackage() {
      return "flutter_gallery_assets";
    },
    /*home$._kFlutterBlue*/get _kFlutterBlue() {
      return C238 || CT.C238;
    },
    /*home$._kDemoItemHeight*/get _kDemoItemHeight() {
      return 64;
    },
    /*home$._kFrontLayerSwitchDuration*/get _kFrontLayerSwitchDuration() {
      return C239 || CT.C239;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/gallery/home", {
    "package:flutter_gallery/gallery/home.dart": home$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAwB4B;AACxB,YAAO,8BACE,oCACE,cACC;IAWd;;;QAlByB;;AAAS,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4BvB;;;;;;IACP;;;;;;UAGO;AACR,kBAAc,gBAAG,OAAO;AAC7B,mBAA0B,YAAjB,AAAM,KAAD,aAA0B;AAInD,YAAO,uCACE,2CACe,yCACR,AAAM,AAAa,KAAd,0BAA0B,oBAC9B,AAAM,AAAa,KAAd,0BAA0B,uBACrB,sCACZ,mBACJ,yCACgC,gDACE,0CACrB,sBAChB,sDAES,kBACL,AAAS,2BACH,aACC,MAAM,GAAU,sBAAQ,sJAInC,qCACU,iBACa,mCACd,kBACL,AAAS,gCACY,4BACd,AAAM,AAAU,AAAQ,KAAnB,yCACE,qBACL,MAAM,GAAU,sBAAQ;IAQ/C;;;QAnDM;QACC;QACA;;IADA;IACA;AACF,uDAAY,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0De;;;;;;IACI;;;;;;UAGd;AAEQ,2BAAiB,AAAW;AAClD,wBAAkD,YAAxB,AAAY,0BAAT,OAAO,eAA6B,oCAAY,IAAI;AAE3F,YAAO,uCACQ,kBACD,aACL,kCACa,aACb,mFAEE,+CACI,SAAc,SAAwB;AAChC,gCAAwC,aAA1B,AAAY,AAAQ,WAAT,kBAAiB,AAAY,WAAD;AACrD,8BAAY,sBAAS,OAAO,AAAY,WAAD;AAC1C,6BAAiD,EAAnB,AAAc,aAAhC,AAAW,4BAAS,WAAW,GAAG,KAAM,WAAW;AAKzE,oBAAO,uCACE,oCACsB,2CACY,2CAC/B,wBAAwB,QAAQ,EAAE,QAAK;AACnC,uDAAoB,AAAS,QAAD,KAAI,AAAS,QAAD,GAAG,IAC/B,aAAlB,AAAW,4BAAS,AAAY,WAAD,GAAG,mBAAS,GAAG,AAAS,QAAD,GAAG,KACzD,WAAW;AAEf,0BAAO,8BACG,wBAAwB,iBAAiB,EAAE,QAAK;AAC5C,oCAAiB,AAAc,aAAvB,QAAQ,IAAG,WAAW,gBAAG,WAAW;AAC5B,uCAAW,AAAc,cAAA,QAAC,KAAK;AAEzD,8BAAO,gCACE,WAAW,UACV,SAAS,SACV,uCACK,QAAQ,SACX;AACkB,8BAAvB,mBAAc,QAAQ;;;;;IAahD;;;QA/DM;QACC;QACA;;IADA;IACA;AACF,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkEF;;;;;;kBAEY;AAC5B,UAAI,AAAK,uBAAa;AAIlB,QAHO,+BAAY,gCAA+C,yCAClE,QAAQ,KACR,MAAM,AAAK;AAE+B,QAAlC,2CAAU,OAAO,EAAE,AAAK;;IAEtC;UAG0B;AACR,kBAAc,gBAAG,OAAO;AAC7B,mBAA0B,YAAjB,AAAM,KAAD,aAA0B;AACtC,4BAA6B,yCAAkB,OAAO;AACnE,YAAO,4CACe,0CACP,AAAM,AAAa,KAAd,0BAA0B,uBACrB,sCACZ;AACW,UAApB,kBAAY,OAAO;iCAEd,0CACQ,uCAA2C,kBAAE,eAAe,YAClE,6BACa,sBAChB,oCACS,cACC,iBACa,mCACd,kBACL,AAAK,uBACC,aACC,MAAM,GAAU,sBAAQ,uIAGnC,+BACS,yCACgC,mDACE;;6BAErC,kBACE,AAAK,yBACE,AAAM,AAAU,AAAQ,KAAnB,oCACH,MAAM,GAAU;AAG3B,wBAAI,AAAK,sBAAY,eACnB,kBACE,AAAK,4BACE,AAAM,AAAU,AAAM,KAAjB,kCACH,MAAM,GAAU;;;IAW7C;;;QAlEsB;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwE/B;;;;;;UAGA;AAGX,gCAAiC,AAAY,AAAQ,0BAAjB,OAAO;AACxD,YAAO,0DAEE,sCACQ,kBACD,aACL,AAAS,wCACI,aACb,iDACgC,wCAChC,mCAAuB,AAAS,8BACjB,sCAAU,aAAa,mBAAmB,cACpD,AAAuB,AAAW,AAEzC,qCAF+B,uCAAsB,QAAa,QAC5D,+BAAgB,IAAI;IAKrC;;mCA1BsB;;;AAAhB;;EAAyB;;;;;;;;;;;;;;;IAoClB;;;;;;IACF;;;;;;;AAOwB;IAAmB;;;QAbhD;QACC;QACA;;IADA;IACA;AACF,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;MAOR,mCAAiB;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BAWI,cAA2B;AAC7D,YAAO;;wBAEA,iBAAgB;;AACnB,cAAI,YAAY,IAAI,eAAM,YAAY;;yBAEnB;IAEzB;;;AAMmB,MAAX;AAKM,MAJZ,0BAAc,yFAEA,yBACL,QACN;IACL;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACR,kBAAc,gBAAG,OAAO;AAC7B,mBAA0B,YAAjB,AAAM,KAAD,aAA0B;AAC9B,kBAAmB,0BAAG,OAAO;AACvC,uBAA+B,AAAwB,YAA1C,AAAM,KAAD,cAA4B,qCAA8B,aAAlB,AAAM,AAAK,KAAN,gBAAe;AAE7E;AACA;AAEL,iBAAO,gCACP,uDACY,MAAM,GAAG,sBAAgB,AAAM,KAAD,qBACzC,oCACI,cACD,gDACM;AAET,kBAAI,mBAAa;AACiB,gBAAhC,cAAS,cAAM,kBAAY;AAC3B,4CAA0B;;AAE5B,0CAA0B;6CAErB,kEAEM,AAAO,sCACL,sDACD,kDACM,cAAc,iBACf,aAAa,SACrB,AAAU,mBAAG,yBAEhB,gEAES,mBACE,cAAM,cAAS,cAAM,kBAAY,uKAGtC,sDACA,yCACH,AAAU,mBAAG,yBAEhB,kBAAK,AAAU,qKAEP,AAAO,wBAAW,OAAO,qCAAkB,6EAC7C,sDACA,kDACM,cAAc,iBACf,aAAa,iBACb,UAAU,GAAG,oEACrB,AACL,mBADkB,OAChB,yBAAW,8EACX,2CACY,gDACG,QAAqB;AACE,oBAApC,cAAS,cAAM,kBAAY,QAAQ;;AASnD,qBAAO,AAGN;AAFsC,QAAzB,sCAAoB;AAChC,cAAO;;AAGT,oBAAgB;AAab,QAZD,OAAO,0BACS,iCACI,sBAChB,IAAI,EACJ,6CACW,4CAAwB,0BAA2B;;AAYnE,MAHD,OAAO,0DACE,IAAI,SACiB;AAG9B,YAAO,KAAI;IACb;;;IA1HoB;IACA;;;EA0HtB;;;;;;;;;;;;;MA5HwC,oCAAY;YAAG;;MAcV,yCAAiB;;;;;;;MA5RjD,4BAAsB;;;MACvB,mBAAa;;;MACZ,sBAAgB;;;MACd,gCAA0B","file":"home.ddc.js"}');
  // Exports:
  return {
    gallery__home: home$
  };
});

//# sourceMappingURL=home.ddc.js.map
