define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter_gallery/gallery/scales', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/gallery/about'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter_gallery__gallery__scales, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__gallery__about) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const scales = packages__flutter_gallery__gallery__scales.gallery__scales;
  const app = packages__flutter__material.src__material__app;
  const theme$ = packages__flutter__material.src__material__theme;
  const $switch = packages__flutter__material.src__material__switch;
  const colors = packages__flutter__material.src__material__colors;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const divider = packages__flutter__material.src__material__divider;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon_theme = packages__flutter__src__widgets__actions.src__widgets__icon_theme;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const about = packages__flutter_gallery__gallery__about.gallery__about;
  const options$ = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $add = dartx.add;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let PopupMenuButtonOfThemeMode = () => (PopupMenuButtonOfThemeMode = dart.constFn(popup_menu.PopupMenuButton$(app.ThemeMode)))();
  let PopupMenuItemOfThemeMode = () => (PopupMenuItemOfThemeMode = dart.constFn(popup_menu.PopupMenuItem$(app.ThemeMode)))();
  let ThemeModeToPopupMenuItemOfThemeMode = () => (ThemeModeToPopupMenuItemOfThemeMode = dart.constFn(dart.fnType(PopupMenuItemOfThemeMode(), [app.ThemeMode])))();
  let ListOfPopupMenuItemOfThemeMode = () => (ListOfPopupMenuItemOfThemeMode = dart.constFn(core.List$(PopupMenuItemOfThemeMode())))();
  let BuildContextToListOfPopupMenuItemOfThemeMode = () => (BuildContextToListOfPopupMenuItemOfThemeMode = dart.constFn(dart.fnType(ListOfPopupMenuItemOfThemeMode(), [framework.BuildContext])))();
  let ThemeModeToNull = () => (ThemeModeToNull = dart.constFn(dart.fnType(core.Null, [app.ThemeMode])))();
  let LinkedMapOfThemeMode$String = () => (LinkedMapOfThemeMode$String = dart.constFn(_js_helper.LinkedMap$(app.ThemeMode, core.String)))();
  let PopupMenuButtonOfGalleryTextScaleValue = () => (PopupMenuButtonOfGalleryTextScaleValue = dart.constFn(popup_menu.PopupMenuButton$(scales.GalleryTextScaleValue)))();
  let PopupMenuItemOfGalleryTextScaleValue = () => (PopupMenuItemOfGalleryTextScaleValue = dart.constFn(popup_menu.PopupMenuItem$(scales.GalleryTextScaleValue)))();
  let GalleryTextScaleValueToPopupMenuItemOfGalleryTextScaleValue = () => (GalleryTextScaleValueToPopupMenuItemOfGalleryTextScaleValue = dart.constFn(dart.fnType(PopupMenuItemOfGalleryTextScaleValue(), [scales.GalleryTextScaleValue])))();
  let ListOfPopupMenuItemOfGalleryTextScaleValue = () => (ListOfPopupMenuItemOfGalleryTextScaleValue = dart.constFn(core.List$(PopupMenuItemOfGalleryTextScaleValue())))();
  let BuildContextToListOfPopupMenuItemOfGalleryTextScaleValue = () => (BuildContextToListOfPopupMenuItemOfGalleryTextScaleValue = dart.constFn(dart.fnType(ListOfPopupMenuItemOfGalleryTextScaleValue(), [framework.BuildContext])))();
  let GalleryTextScaleValueToNull = () => (GalleryTextScaleValueToNull = dart.constFn(dart.fnType(core.Null, [scales.GalleryTextScaleValue])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let PopupMenuButtonOfTargetPlatform = () => (PopupMenuButtonOfTargetPlatform = dart.constFn(popup_menu.PopupMenuButton$(platform.TargetPlatform)))();
  let PopupMenuItemOfTargetPlatform = () => (PopupMenuItemOfTargetPlatform = dart.constFn(popup_menu.PopupMenuItem$(platform.TargetPlatform)))();
  let TargetPlatformToPopupMenuItemOfTargetPlatform = () => (TargetPlatformToPopupMenuItemOfTargetPlatform = dart.constFn(dart.fnType(PopupMenuItemOfTargetPlatform(), [platform.TargetPlatform])))();
  let ListOfPopupMenuItemOfTargetPlatform = () => (ListOfPopupMenuItemOfTargetPlatform = dart.constFn(core.List$(PopupMenuItemOfTargetPlatform())))();
  let BuildContextToListOfPopupMenuItemOfTargetPlatform = () => (BuildContextToListOfPopupMenuItemOfTargetPlatform = dart.constFn(dart.fnType(ListOfPopupMenuItemOfTargetPlatform(), [framework.BuildContext])))();
  let TargetPlatformToNull = () => (TargetPlatformToNull = dart.constFn(dart.fnType(core.Null, [platform.TargetPlatform])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 108,
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
        [_Location_column]: 18,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 20,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4281978621.0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 13,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 13,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 13,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 13,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeTrackColor",
        [_Location_column]: 13,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 130,
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
        [_Location_column]: 14,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 129,
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
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 175,
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
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 173,
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
        [_Location_column]: 12,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "header",
        [_Location_column]: 11,
        [_Location_line]: 197,
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
        [_Location_column]: 16,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
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
        [Text_data]: "Theme"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 53,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 228,
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
        [_Location_column]: 17,
        [_Location_line]: 226,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 221,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 16,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 0
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58821
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C87 || CT.C87
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 241,
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
        [_Location_column]: 24,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialValue",
        [_Location_column]: 13,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 233,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
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
        [Text_data]: "Text size"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 53,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 275,
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
        [_Location_column]: 17,
        [_Location_line]: 273,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 287,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 285,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 280,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 267,
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
        [_Location_column]: 14,
        [_Location_line]: 266,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 266,
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
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: ValueKeyOfString().prototype,
        [ValueKey_value]: "text_direction"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchKey",
        [_Location_column]: 7,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143, C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 311,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: ValueKeyOfString().prototype,
        [ValueKey_value]: "slow_motion"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 24,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 337,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchKey",
        [_Location_column]: 7,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150, C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 334,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.android",
        index: 0
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C156() {
      return C156 = dart.const({
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
        [Text_data]: "Platform mechanics"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 20,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 378,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 392,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 390,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 386,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178, C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 385,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 372,
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
        [_Location_column]: 14,
        [_Location_line]: 371,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 371,
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
        [_Location_column]: 12,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C187() {
      return C187 = dart.constList([], framework.Widget);
    },
    get C188() {
      return C188 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: options$._Heading.prototype,
        [Widget_key]: null,
        [_Heading_text]: "Diagnostics"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193, C194 || CT.C194], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 432,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198, C199 || CT.C199], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 440,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 449,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 450,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 451,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203, C204 || CT.C204], widget_inspector._Location);
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C201 || CT.C201,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 448,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 124,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: options$._Heading.prototype,
        [Widget_key]: null,
        [_Heading_text]: "Display"
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 26,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 35,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.constList([C209 || CT.C209, C210 || CT.C210], widget_inspector._Location);
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C208 || CT.C208,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 468,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 32,
        [_Location_line]: 469,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 41,
        [_Location_line]: 469,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213, C214 || CT.C214], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 469,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 30,
        [_Location_line]: 470,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 39,
        [_Location_line]: 470,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.constList([C217 || CT.C217, C218 || CT.C218], widget_inspector._Location);
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C216 || CT.C216,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 470,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 29,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 38,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222], widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 471,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: options$._Heading.prototype,
        [Widget_key]: null,
        [_Heading_text]: "Platform mechanics"
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 25,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 34,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.constList([C226 || CT.C226, C227 || CT.C227], widget_inspector._Location);
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 474,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: options$._Heading.prototype,
        [Widget_key]: null,
        [_Heading_text]: "Flutter gallery"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 23,
        [_Location_line]: 478,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 48,
        [_Location_line]: 478,
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
        [_Location_column]: 11,
        [_Location_line]: 478,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 23,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 40,
        [_Location_line]: 481,
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
        [_Location_column]: 11,
        [_Location_line]: 481,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239, C240 || CT.C240], widget_inspector._Location);
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C238 || CT.C238,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 463,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243, C244 || CT.C244], widget_inspector._Location);
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 462,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 0,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 56
      });
    }
  });
  const _name = dart.privateName(ui, "_name");
  let C0;
  const GalleryOptions_themeMode = dart.privateName(options$, "GalleryOptions.themeMode");
  const GalleryOptions_textScaleFactor = dart.privateName(options$, "GalleryOptions.textScaleFactor");
  const GalleryOptions_textDirection = dart.privateName(options$, "GalleryOptions.textDirection");
  const GalleryOptions_timeDilation = dart.privateName(options$, "GalleryOptions.timeDilation");
  const GalleryOptions_platform = dart.privateName(options$, "GalleryOptions.platform");
  const GalleryOptions_showPerformanceOverlay = dart.privateName(options$, "GalleryOptions.showPerformanceOverlay");
  const GalleryOptions_showRasterCacheImagesCheckerboard = dart.privateName(options$, "GalleryOptions.showRasterCacheImagesCheckerboard");
  const GalleryOptions_showOffscreenLayersCheckerboard = dart.privateName(options$, "GalleryOptions.showOffscreenLayersCheckerboard");
  options$.GalleryOptions = class GalleryOptions extends core.Object {
    get themeMode() {
      return this[themeMode$];
    }
    set themeMode(value) {
      super.themeMode = value;
    }
    get textScaleFactor() {
      return this[textScaleFactor$];
    }
    set textScaleFactor(value) {
      super.textScaleFactor = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get timeDilation() {
      return this[timeDilation$];
    }
    set timeDilation(value) {
      super.timeDilation = value;
    }
    get platform() {
      return this[platform$];
    }
    set platform(value) {
      super.platform = value;
    }
    get showPerformanceOverlay() {
      return this[showPerformanceOverlay$];
    }
    set showPerformanceOverlay(value) {
      super.showPerformanceOverlay = value;
    }
    get showRasterCacheImagesCheckerboard() {
      return this[showRasterCacheImagesCheckerboard$];
    }
    set showRasterCacheImagesCheckerboard(value) {
      super.showRasterCacheImagesCheckerboard = value;
    }
    get showOffscreenLayersCheckerboard() {
      return this[showOffscreenLayersCheckerboard$];
    }
    set showOffscreenLayersCheckerboard(value) {
      super.showOffscreenLayersCheckerboard = value;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let themeMode = opts && 'themeMode' in opts ? opts.themeMode : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let timeDilation = opts && 'timeDilation' in opts ? opts.timeDilation : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : null;
      let showRasterCacheImagesCheckerboard = opts && 'showRasterCacheImagesCheckerboard' in opts ? opts.showRasterCacheImagesCheckerboard : null;
      let showOffscreenLayersCheckerboard = opts && 'showOffscreenLayersCheckerboard' in opts ? opts.showOffscreenLayersCheckerboard : null;
      return new options$.GalleryOptions.new({themeMode: (t0 = themeMode, t0 == null ? this.themeMode : t0), textScaleFactor: (t0$ = textScaleFactor, t0$ == null ? this.textScaleFactor : t0$), textDirection: (t0$0 = textDirection, t0$0 == null ? this.textDirection : t0$0), timeDilation: (t0$1 = timeDilation, t0$1 == null ? this.timeDilation : t0$1), platform: (t0$2 = platform, t0$2 == null ? this.platform : t0$2), showPerformanceOverlay: (t0$3 = showPerformanceOverlay, t0$3 == null ? this.showPerformanceOverlay : t0$3), showOffscreenLayersCheckerboard: (t0$4 = showOffscreenLayersCheckerboard, t0$4 == null ? this.showOffscreenLayersCheckerboard : t0$4), showRasterCacheImagesCheckerboard: (t0$5 = showRasterCacheImagesCheckerboard, t0$5 == null ? this.showRasterCacheImagesCheckerboard : t0$5)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = options$.GalleryOptions._check(other);
      return dart.equals(this.themeMode, typedOther.themeMode) && dart.equals(this.textScaleFactor, typedOther.textScaleFactor) && dart.equals(this.textDirection, typedOther.textDirection) && dart.equals(this.platform, typedOther.platform) && dart.equals(this.showPerformanceOverlay, typedOther.showPerformanceOverlay) && dart.equals(this.showRasterCacheImagesCheckerboard, typedOther.showRasterCacheImagesCheckerboard) && dart.equals(this.showOffscreenLayersCheckerboard, typedOther.showRasterCacheImagesCheckerboard);
    }
    get hashCode() {
      return ui.hashValues(this.themeMode, this.textScaleFactor, this.textDirection, this.timeDilation, this.platform, this.showPerformanceOverlay, this.showRasterCacheImagesCheckerboard, this.showOffscreenLayersCheckerboard);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.themeMode) + ")";
    }
  };
  (options$.GalleryOptions.new = function(opts) {
    let themeMode = opts && 'themeMode' in opts ? opts.themeMode : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : C0 || CT.C0;
    let timeDilation = opts && 'timeDilation' in opts ? opts.timeDilation : 1;
    let platform = opts && 'platform' in opts ? opts.platform : null;
    let showOffscreenLayersCheckerboard = opts && 'showOffscreenLayersCheckerboard' in opts ? opts.showOffscreenLayersCheckerboard : false;
    let showRasterCacheImagesCheckerboard = opts && 'showRasterCacheImagesCheckerboard' in opts ? opts.showRasterCacheImagesCheckerboard : false;
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
    this[themeMode$] = themeMode;
    this[textScaleFactor$] = textScaleFactor;
    this[textDirection$] = textDirection;
    this[timeDilation$] = timeDilation;
    this[platform$] = platform;
    this[showOffscreenLayersCheckerboard$] = showOffscreenLayersCheckerboard;
    this[showRasterCacheImagesCheckerboard$] = showRasterCacheImagesCheckerboard;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    ;
  }).prototype = options$.GalleryOptions.prototype;
  dart.addTypeTests(options$.GalleryOptions);
  const themeMode$ = GalleryOptions_themeMode;
  const textScaleFactor$ = GalleryOptions_textScaleFactor;
  const textDirection$ = GalleryOptions_textDirection;
  const timeDilation$ = GalleryOptions_timeDilation;
  const platform$ = GalleryOptions_platform;
  const showPerformanceOverlay$ = GalleryOptions_showPerformanceOverlay;
  const showRasterCacheImagesCheckerboard$ = GalleryOptions_showRasterCacheImagesCheckerboard;
  const showOffscreenLayersCheckerboard$ = GalleryOptions_showOffscreenLayersCheckerboard;
  dart.setMethodSignature(options$.GalleryOptions, () => ({
    __proto__: dart.getMethods(options$.GalleryOptions.__proto__),
    copyWith: dart.fnType(options$.GalleryOptions, [], {platform: platform.TargetPlatform, showOffscreenLayersCheckerboard: core.bool, showPerformanceOverlay: core.bool, showRasterCacheImagesCheckerboard: core.bool, textDirection: ui.TextDirection, textScaleFactor: scales.GalleryTextScaleValue, themeMode: app.ThemeMode, timeDilation: core.double})
  }));
  dart.setLibraryUri(options$.GalleryOptions, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$.GalleryOptions, () => ({
    __proto__: dart.getFields(options$.GalleryOptions.__proto__),
    themeMode: dart.finalFieldType(app.ThemeMode),
    textScaleFactor: dart.finalFieldType(scales.GalleryTextScaleValue),
    textDirection: dart.finalFieldType(ui.TextDirection),
    timeDilation: dart.finalFieldType(core.double),
    platform: dart.finalFieldType(platform.TargetPlatform),
    showPerformanceOverlay: dart.finalFieldType(core.bool),
    showRasterCacheImagesCheckerboard: dart.finalFieldType(core.bool),
    showOffscreenLayersCheckerboard: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(options$.GalleryOptions, ['_equals', 'toString']);
  dart.defineExtensionAccessors(options$.GalleryOptions, ['hashCode']);
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
  let C9;
  let C10;
  let C6;
  let C5;
  let C13;
  let C14;
  let C15;
  let C16;
  let C12;
  let C11;
  let C19;
  let C18;
  let C17;
  const _OptionsItem_child = dart.privateName(options$, "_OptionsItem.child");
  options$._OptionsItem = class _OptionsItem extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let textScaleFactor = media_query.MediaQuery.textScaleFactorOf(context);
      return new basic.MergeSemantics.new({child: new container.Container.new({constraints: new box.BoxConstraints.new({minHeight: 48 * dart.notNull(textScaleFactor)}), padding: options$._kItemPadding, alignment: alignment.AlignmentDirectional.centerStart, child: new text.DefaultTextStyle.new({style: text.DefaultTextStyle.of(context).style, maxLines: 2, overflow: paragraph.TextOverflow.fade, child: new icon_theme.IconTheme.new({data: theme$.Theme.of(context).primaryIconTheme, child: this.child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
  };
  (options$._OptionsItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    options$._OptionsItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._OptionsItem.prototype;
  dart.addTypeTests(options$._OptionsItem);
  const child$ = _OptionsItem_child;
  dart.setMethodSignature(options$._OptionsItem, () => ({
    __proto__: dart.getMethods(options$._OptionsItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._OptionsItem, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._OptionsItem, () => ({
    __proto__: dart.getFields(options$._OptionsItem.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  const Color__value = dart.privateName(ui, "Color._value");
  let C26;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C28;
  let C27;
  let C36;
  let C35;
  let C34;
  let C39;
  let C38;
  let C37;
  const _BooleanItem_title = dart.privateName(options$, "_BooleanItem.title");
  const _BooleanItem_value = dart.privateName(options$, "_BooleanItem.value");
  const _BooleanItem_onChanged = dart.privateName(options$, "_BooleanItem.onChanged");
  const _BooleanItem_switchKey = dart.privateName(options$, "_BooleanItem.switchKey");
  options$._BooleanItem = class _BooleanItem extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get switchKey() {
      return this[switchKey$];
    }
    set switchKey(value) {
      super.switchKey = value;
    }
    build(context) {
      let isDark = dart.equals(theme$.Theme.of(context).brightness, ui.Brightness.dark);
      return new options$._OptionsItem.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new $switch.Switch.new({key: this.switchKey, value: this.value, onChanged: this.onChanged, activeColor: C26 || CT.C26, activeTrackColor: isDark ? colors.Colors.white30 : colors.Colors.black26, $creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
    }
  };
  (options$._BooleanItem.new = function(title, value, onChanged, opts) {
    let switchKey = opts && 'switchKey' in opts ? opts.switchKey : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[value$] = value;
    this[onChanged$] = onChanged;
    this[switchKey$] = switchKey;
    options$._BooleanItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._BooleanItem.prototype;
  dart.addTypeTests(options$._BooleanItem);
  const title$ = _BooleanItem_title;
  const value$ = _BooleanItem_value;
  const onChanged$ = _BooleanItem_onChanged;
  const switchKey$ = _BooleanItem_switchKey;
  dart.setMethodSignature(options$._BooleanItem, () => ({
    __proto__: dart.getMethods(options$._BooleanItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._BooleanItem, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._BooleanItem, () => ({
    __proto__: dart.getFields(options$._BooleanItem.__proto__),
    title: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.bool),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    switchKey: dart.finalFieldType(key.Key)
  }));
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C48;
  let C47;
  const _ActionItem_text = dart.privateName(options$, "_ActionItem.text");
  const _ActionItem_onTap = dart.privateName(options$, "_ActionItem.onTap");
  options$._ActionItem = class _ActionItem extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    build(context) {
      return new options$._OptionsItem.new({child: new options$._FlatButton.new({onPressed: this.onTap, child: new text.Text.new(this.text, {$creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
  };
  (options$._ActionItem.new = function(text, onTap, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onTap$] = onTap;
    options$._ActionItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._ActionItem.prototype;
  dart.addTypeTests(options$._ActionItem);
  const text$ = _ActionItem_text;
  const onTap$ = _ActionItem_onTap;
  dart.setMethodSignature(options$._ActionItem, () => ({
    __proto__: dart.getMethods(options$._ActionItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._ActionItem, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._ActionItem, () => ({
    __proto__: dart.getFields(options$._ActionItem.__proto__),
    text: dart.finalFieldType(core.String),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  const _FlatButton_onPressed = dart.privateName(options$, "_FlatButton.onPressed");
  const _FlatButton_child = dart.privateName(options$, "_FlatButton.child");
  options$._FlatButton = class _FlatButton extends framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new flat_button.FlatButton.new({padding: edge_insets.EdgeInsets.zero, onPressed: this.onPressed, child: new text.DefaultTextStyle.new({style: theme$.Theme.of(context).primaryTextTheme.subhead, child: this.child, $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54});
    }
  };
  (options$._FlatButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[child$0] = child;
    options$._FlatButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._FlatButton.prototype;
  dart.addTypeTests(options$._FlatButton);
  const onPressed$ = _FlatButton_onPressed;
  const child$0 = _FlatButton_child;
  dart.setMethodSignature(options$._FlatButton, () => ({
    __proto__: dart.getMethods(options$._FlatButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._FlatButton, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._FlatButton, () => ({
    __proto__: dart.getFields(options$._FlatButton.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C71;
  let C70;
  const _Heading_text = dart.privateName(options$, "_Heading.text");
  options$._Heading = class _Heading extends framework.StatelessWidget {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new options$._OptionsItem.new({child: new text.DefaultTextStyle.new({style: theme.textTheme.body1.copyWith({fontFamily: "GoogleSans", color: theme.accentColor}), child: new basic.Semantics.new({child: new text.Text.new(this.text, {$creationLocationd_0dea112b090073317d4: C59 || CT.C59}), header: true, $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70});
    }
  };
  (options$._Heading.new = function(text, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$0] = text;
    options$._Heading.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._Heading.prototype;
  dart.addTypeTests(options$._Heading);
  const text$0 = _Heading_text;
  dart.setMethodSignature(options$._Heading, () => ({
    __proto__: dart.getMethods(options$._Heading.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._Heading, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._Heading, () => ({
    __proto__: dart.getFields(options$._Heading.__proto__),
    text: dart.finalFieldType(core.String)
  }));
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
  let C73;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C81;
  let C79;
  let C78;
  let C84;
  let C83;
  let C82;
  const EdgeInsetsDirectional_bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  const EdgeInsetsDirectional_end = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  const EdgeInsetsDirectional_top = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  const EdgeInsetsDirectional_start = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  let C85;
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
  let C90;
  let C89;
  let C88;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C99;
  let C100;
  let C101;
  let C96;
  let C95;
  let C104;
  let C103;
  let C102;
  let C107;
  let C106;
  let C105;
  const _ThemeModeItem_options = dart.privateName(options$, "_ThemeModeItem.options");
  const _ThemeModeItem_onOptionsChanged = dart.privateName(options$, "_ThemeModeItem.onOptionsChanged");
  options$._ThemeModeItem = class _ThemeModeItem extends framework.StatelessWidget {
    get options() {
      return this[options$0];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    build(context) {
      return new options$._OptionsItem.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([C73 || CT.C73, new text.Text.new(dart.str(options$._ThemeModeItem.modeLabels[$_get](this.options.themeMode)), {style: theme$.Theme.of(context).primaryTextTheme.body1, $creationLocationd_0dea112b090073317d4: C74 || CT.C74})]), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), new (PopupMenuButtonOfThemeMode()).new({padding: C85 || CT.C85, icon: C86 || CT.C86, initialValue: this.options.themeMode, itemBuilder: dart.fn(context => app.ThemeMode.values[$map](PopupMenuItemOfThemeMode(), dart.fn(mode => new (PopupMenuItemOfThemeMode()).new({value: mode, child: new text.Text.new(options$._ThemeModeItem.modeLabels[$_get](mode), {$creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), ThemeModeToPopupMenuItemOfThemeMode()))[$toList](), BuildContextToListOfPopupMenuItemOfThemeMode()), onSelected: dart.fn(mode => {
                this.onOptionsChanged(this.options.copyWith({themeMode: mode}));
              }, ThemeModeToNull()), $creationLocationd_0dea112b090073317d4: C95 || CT.C95})]), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105});
    }
  };
  (options$._ThemeModeItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$0] = options;
    this[onOptionsChanged$] = onOptionsChanged;
    options$._ThemeModeItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._ThemeModeItem.prototype;
  dart.addTypeTests(options$._ThemeModeItem);
  const options$0 = _ThemeModeItem_options;
  const onOptionsChanged$ = _ThemeModeItem_onOptionsChanged;
  dart.setMethodSignature(options$._ThemeModeItem, () => ({
    __proto__: dart.getMethods(options$._ThemeModeItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._ThemeModeItem, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._ThemeModeItem, () => ({
    __proto__: dart.getFields(options$._ThemeModeItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  dart.defineLazy(options$._ThemeModeItem, {
    /*options$._ThemeModeItem.modeLabels*/get modeLabels() {
      return new (LinkedMapOfThemeMode$String()).from([app.ThemeMode.system, "System Default", app.ThemeMode.light, "Light", app.ThemeMode.dark, "Dark"]);
    }
  });
  let C108;
  let C111;
  let C112;
  let C110;
  let C109;
  let C115;
  let C116;
  let C114;
  let C113;
  let C119;
  let C118;
  let C117;
  let C122;
  let C121;
  let C120;
  let C125;
  let C126;
  let C124;
  let C123;
  let C129;
  let C130;
  let C131;
  let C132;
  let C128;
  let C127;
  let C135;
  let C134;
  let C133;
  let C138;
  let C137;
  let C136;
  const _TextScaleFactorItem_options = dart.privateName(options$, "_TextScaleFactorItem.options");
  const _TextScaleFactorItem_onOptionsChanged = dart.privateName(options$, "_TextScaleFactorItem.onOptionsChanged");
  options$._TextScaleFactorItem = class _TextScaleFactorItem extends framework.StatelessWidget {
    get options() {
      return this[options$1];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$0];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    build(context) {
      return new options$._OptionsItem.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([C108 || CT.C108, new text.Text.new(dart.str(this.options.textScaleFactor.label), {style: theme$.Theme.of(context).primaryTextTheme.body1, $creationLocationd_0dea112b090073317d4: C109 || CT.C109})]), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), new (PopupMenuButtonOfGalleryTextScaleValue()).new({padding: C85 || CT.C85, icon: C86 || CT.C86, itemBuilder: dart.fn(context => scales.kAllGalleryTextScaleValues[$map](PopupMenuItemOfGalleryTextScaleValue(), dart.fn(scaleValue => new (PopupMenuItemOfGalleryTextScaleValue()).new({value: scaleValue, child: new text.Text.new(scaleValue.label, {$creationLocationd_0dea112b090073317d4: C120 || CT.C120}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), GalleryTextScaleValueToPopupMenuItemOfGalleryTextScaleValue()))[$toList](), BuildContextToListOfPopupMenuItemOfGalleryTextScaleValue()), onSelected: dart.fn(scaleValue => {
                this.onOptionsChanged(this.options.copyWith({textScaleFactor: scaleValue}));
              }, GalleryTextScaleValueToNull()), $creationLocationd_0dea112b090073317d4: C127 || CT.C127})]), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136});
    }
  };
  (options$._TextScaleFactorItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$1] = options;
    this[onOptionsChanged$0] = onOptionsChanged;
    options$._TextScaleFactorItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._TextScaleFactorItem.prototype;
  dart.addTypeTests(options$._TextScaleFactorItem);
  const options$1 = _TextScaleFactorItem_options;
  const onOptionsChanged$0 = _TextScaleFactorItem_onOptionsChanged;
  dart.setMethodSignature(options$._TextScaleFactorItem, () => ({
    __proto__: dart.getMethods(options$._TextScaleFactorItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._TextScaleFactorItem, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._TextScaleFactorItem, () => ({
    __proto__: dart.getFields(options$._TextScaleFactorItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  const ValueKey_value = dart.privateName(key, "ValueKey.value");
  let C139;
  let C142;
  let C143;
  let C144;
  let C145;
  let C141;
  let C140;
  const _TextDirectionItem_options = dart.privateName(options$, "_TextDirectionItem.options");
  const _TextDirectionItem_onOptionsChanged = dart.privateName(options$, "_TextDirectionItem.onOptionsChanged");
  options$._TextDirectionItem = class _TextDirectionItem extends framework.StatelessWidget {
    get options() {
      return this[options$2];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$1];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    build(context) {
      return new options$._BooleanItem.new("Force RTL", dart.equals(this.options.textDirection, ui.TextDirection.rtl), dart.fn(value => {
        this.onOptionsChanged(this.options.copyWith({textDirection: dart.test(value) ? ui.TextDirection.rtl : ui.TextDirection.ltr}));
      }, boolToNull()), {switchKey: C139 || CT.C139, $creationLocationd_0dea112b090073317d4: C140 || CT.C140});
    }
  };
  (options$._TextDirectionItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$2] = options;
    this[onOptionsChanged$1] = onOptionsChanged;
    options$._TextDirectionItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._TextDirectionItem.prototype;
  dart.addTypeTests(options$._TextDirectionItem);
  const options$2 = _TextDirectionItem_options;
  const onOptionsChanged$1 = _TextDirectionItem_onOptionsChanged;
  dart.setMethodSignature(options$._TextDirectionItem, () => ({
    __proto__: dart.getMethods(options$._TextDirectionItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._TextDirectionItem, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._TextDirectionItem, () => ({
    __proto__: dart.getFields(options$._TextDirectionItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  let C146;
  let C149;
  let C150;
  let C151;
  let C152;
  let C148;
  let C147;
  const _TimeDilationItem_options = dart.privateName(options$, "_TimeDilationItem.options");
  const _TimeDilationItem_onOptionsChanged = dart.privateName(options$, "_TimeDilationItem.onOptionsChanged");
  options$._TimeDilationItem = class _TimeDilationItem extends framework.StatelessWidget {
    get options() {
      return this[options$3];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$2];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    build(context) {
      return new options$._BooleanItem.new("Slow motion", this.options.timeDilation !== 1.0, dart.fn(value => {
        this.onOptionsChanged(this.options.copyWith({timeDilation: dart.test(value) ? 20.0 : 1.0}));
      }, boolToNull()), {switchKey: C146 || CT.C146, $creationLocationd_0dea112b090073317d4: C147 || CT.C147});
    }
  };
  (options$._TimeDilationItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$3] = options;
    this[onOptionsChanged$2] = onOptionsChanged;
    options$._TimeDilationItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._TimeDilationItem.prototype;
  dart.addTypeTests(options$._TimeDilationItem);
  const options$3 = _TimeDilationItem_options;
  const onOptionsChanged$2 = _TimeDilationItem_onOptionsChanged;
  dart.setMethodSignature(options$._TimeDilationItem, () => ({
    __proto__: dart.getMethods(options$._TimeDilationItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._TimeDilationItem, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._TimeDilationItem, () => ({
    __proto__: dart.getFields(options$._TimeDilationItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  const _name$ = dart.privateName(platform, "_name");
  let C153;
  let C154;
  let C155;
  const _platformLabel = dart.privateName(options$, "_platformLabel");
  let C156;
  let C159;
  let C160;
  let C158;
  let C157;
  let C163;
  let C164;
  let C162;
  let C161;
  let C167;
  let C166;
  let C165;
  let C170;
  let C169;
  let C168;
  let C173;
  let C174;
  let C172;
  let C171;
  let C177;
  let C178;
  let C179;
  let C180;
  let C176;
  let C175;
  let C183;
  let C182;
  let C181;
  let C186;
  let C185;
  let C184;
  const _PlatformItem_options = dart.privateName(options$, "_PlatformItem.options");
  const _PlatformItem_onOptionsChanged = dart.privateName(options$, "_PlatformItem.onOptionsChanged");
  options$._PlatformItem = class _PlatformItem extends framework.StatelessWidget {
    get options() {
      return this[options$4];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$3];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    [_platformLabel](platform) {
      switch (platform) {
        case C153 || CT.C153:
        {
          return "Mountain View";
        }
        case C154 || CT.C154:
        {
          return "Fuchsia";
        }
        case C155 || CT.C155:
        {
          return "Cupertino";
        }
      }
      if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/gallery/options.dart", 364, 12, "false");
      return null;
    }
    build(context) {
      return new options$._OptionsItem.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([C156 || CT.C156, new text.Text.new(dart.str(this[_platformLabel](this.options.platform)), {style: theme$.Theme.of(context).primaryTextTheme.body1, $creationLocationd_0dea112b090073317d4: C157 || CT.C157})]), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), new (PopupMenuButtonOfTargetPlatform()).new({padding: C85 || CT.C85, icon: C86 || CT.C86, itemBuilder: dart.fn(context => platform.TargetPlatform.values[$map](PopupMenuItemOfTargetPlatform(), dart.fn(platform => new (PopupMenuItemOfTargetPlatform()).new({value: platform, child: new text.Text.new(this[_platformLabel](platform), {$creationLocationd_0dea112b090073317d4: C168 || CT.C168}), $creationLocationd_0dea112b090073317d4: C171 || CT.C171}), TargetPlatformToPopupMenuItemOfTargetPlatform()))[$toList](), BuildContextToListOfPopupMenuItemOfTargetPlatform()), onSelected: dart.fn(platform => {
                this.onOptionsChanged(this.options.copyWith({platform: platform}));
              }, TargetPlatformToNull()), $creationLocationd_0dea112b090073317d4: C175 || CT.C175})]), $creationLocationd_0dea112b090073317d4: C181 || CT.C181}), $creationLocationd_0dea112b090073317d4: C184 || CT.C184});
    }
  };
  (options$._PlatformItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$4] = options;
    this[onOptionsChanged$3] = onOptionsChanged;
    options$._PlatformItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._PlatformItem.prototype;
  dart.addTypeTests(options$._PlatformItem);
  const options$4 = _PlatformItem_options;
  const onOptionsChanged$3 = _PlatformItem_onOptionsChanged;
  dart.setMethodSignature(options$._PlatformItem, () => ({
    __proto__: dart.getMethods(options$._PlatformItem.__proto__),
    [_platformLabel]: dart.fnType(core.String, [platform.TargetPlatform]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._PlatformItem, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$._PlatformItem, () => ({
    __proto__: dart.getFields(options$._PlatformItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  let C187;
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_thickness = dart.privateName(divider, "Divider.thickness");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C188;
  let C189;
  let C192;
  let C193;
  let C194;
  let C191;
  let C190;
  let C197;
  let C198;
  let C199;
  let C196;
  let C195;
  let C202;
  let C203;
  let C204;
  let C201;
  let C200;
  const _enabledDiagnosticItems = dart.privateName(options$, "_enabledDiagnosticItems");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C205;
  let C206;
  let C209;
  let C210;
  let C208;
  let C207;
  let C213;
  let C214;
  let C212;
  let C211;
  let C217;
  let C218;
  let C216;
  let C215;
  let C221;
  let C222;
  let C220;
  let C219;
  let C223;
  let C226;
  let C227;
  let C225;
  let C224;
  let C228;
  let C231;
  let C232;
  let C230;
  let C229;
  let C235;
  let C236;
  let C234;
  let C233;
  let C239;
  let C240;
  let C238;
  let C237;
  let C243;
  let C244;
  let C242;
  let C241;
  const GalleryOptionsPage_options = dart.privateName(options$, "GalleryOptionsPage.options");
  const GalleryOptionsPage_onOptionsChanged = dart.privateName(options$, "GalleryOptionsPage.onOptionsChanged");
  const GalleryOptionsPage_onSendFeedback = dart.privateName(options$, "GalleryOptionsPage.onSendFeedback");
  options$.GalleryOptionsPage = class GalleryOptionsPage extends framework.StatelessWidget {
    get options() {
      return this[options$5];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$4];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    get onSendFeedback() {
      return this[onSendFeedback$];
    }
    set onSendFeedback(value) {
      super.onSendFeedback = value;
    }
    [_enabledDiagnosticItems]() {
      if (this.options.showOffscreenLayersCheckerboard == null && this.options.showRasterCacheImagesCheckerboard == null && this.options.showPerformanceOverlay == null) return C187 || CT.C187;
      return (() => {
        let t0 = JSArrayOfWidget().of([]);
        t0[$add](C188 || CT.C188);
        t0[$add](C189 || CT.C189);
        if (this.options.showOffscreenLayersCheckerboard != null) t0[$add](new options$._BooleanItem.new("Highlight offscreen layers", this.options.showOffscreenLayersCheckerboard, dart.fn(value => {
          this.onOptionsChanged(this.options.copyWith({showOffscreenLayersCheckerboard: value}));
        }, boolToNull()), {$creationLocationd_0dea112b090073317d4: C190 || CT.C190}));
        if (this.options.showRasterCacheImagesCheckerboard != null) t0[$add](new options$._BooleanItem.new("Highlight raster cache images", this.options.showRasterCacheImagesCheckerboard, dart.fn(value => {
          this.onOptionsChanged(this.options.copyWith({showRasterCacheImagesCheckerboard: value}));
        }, boolToNull()), {$creationLocationd_0dea112b090073317d4: C195 || CT.C195}));
        if (this.options.showPerformanceOverlay != null) t0[$add](new options$._BooleanItem.new("Show performance overlay", this.options.showPerformanceOverlay, dart.fn(value => {
          this.onOptionsChanged(this.options.copyWith({showPerformanceOverlay: value}));
        }, boolToNull()), {$creationLocationd_0dea112b090073317d4: C200 || CT.C200}));
        return t0;
      })();
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new text.DefaultTextStyle.new({style: theme.primaryTextTheme.subhead, child: new scroll_view.ListView.new({padding: C205 || CT.C205, children: (() => {
            let t1 = JSArrayOfWidget().of([]);
            t1[$add](C206 || CT.C206);
            t1[$add](new options$._ThemeModeItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C207 || CT.C207}));
            t1[$add](new options$._TextScaleFactorItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C211 || CT.C211}));
            t1[$add](new options$._TextDirectionItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C215 || CT.C215}));
            t1[$add](new options$._TimeDilationItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C219 || CT.C219}));
            t1[$add](C188 || CT.C188);
            t1[$add](C223 || CT.C223);
            t1[$add](new options$._PlatformItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C224 || CT.C224}));
            for (let t2 of this[_enabledDiagnosticItems]())
              t1[$add](t2);
            t1[$add](C188 || CT.C188);
            t1[$add](C228 || CT.C228);
            t1[$add](new options$._ActionItem.new("About Flutter Gallery", dart.fn(() => {
              about.showGalleryAboutDialog(context);
            }, VoidToNull()), {$creationLocationd_0dea112b090073317d4: C229 || CT.C229}));
            t1[$add](new options$._ActionItem.new("Send feedback", this.onSendFeedback, {$creationLocationd_0dea112b090073317d4: C233 || CT.C233}));
            return t1;
          })(), $creationLocationd_0dea112b090073317d4: C237 || CT.C237}), $creationLocationd_0dea112b090073317d4: C241 || CT.C241});
    }
  };
  (options$.GalleryOptionsPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let onOptionsChanged = opts && 'onOptionsChanged' in opts ? opts.onOptionsChanged : null;
    let onSendFeedback = opts && 'onSendFeedback' in opts ? opts.onSendFeedback : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$5] = options;
    this[onOptionsChanged$4] = onOptionsChanged;
    this[onSendFeedback$] = onSendFeedback;
    options$.GalleryOptionsPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$.GalleryOptionsPage.prototype;
  dart.addTypeTests(options$.GalleryOptionsPage);
  const options$5 = GalleryOptionsPage_options;
  const onOptionsChanged$4 = GalleryOptionsPage_onOptionsChanged;
  const onSendFeedback$ = GalleryOptionsPage_onSendFeedback;
  dart.setMethodSignature(options$.GalleryOptionsPage, () => ({
    __proto__: dart.getMethods(options$.GalleryOptionsPage.__proto__),
    [_enabledDiagnosticItems]: dart.fnType(core.List$(framework.Widget), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$.GalleryOptionsPage, "package:flutter_gallery/gallery/options.dart");
  dart.setFieldSignature(options$.GalleryOptionsPage, () => ({
    __proto__: dart.getFields(options$.GalleryOptionsPage.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions])),
    onSendFeedback: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  let C245;
  dart.defineLazy(options$, {
    /*options$._kItemHeight*/get _kItemHeight() {
      return 48;
    },
    /*options$._kItemPadding*/get _kItemPadding() {
      return C245 || CT.C245;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/gallery/options", {
    "package:flutter_gallery/gallery/options.dart": options$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"options.ddc.js"}');
  // Exports:
  return {
    gallery__options: options$
  };
});

//# sourceMappingURL=options.ddc.js.map
