define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme = packages__flutter__material.src__material__theme;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const snack_bar = packages__flutter__material.src__material__snack_bar;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const flexible_space_bar = packages__flutter__material.src__material__flexible_space_bar;
  const icons = packages__flutter__material.src__material__icons;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const sliver = packages__flutter__src__widgets__actions.src__widgets__sliver;
  const annotated_region = packages__flutter__src__widgets__actions.src__widgets__annotated_region;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const system_chrome = packages__flutter__src__gestures__arena.src__services__system_chrome;
  const contacts_demo = Object.create(dart.library);
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $map = dartx.map;
  const $add = dartx.add;
  const $last = dartx.last;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringToText = () => (StringToText = dart.constFn(dart.fnType(text.Text, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let PopupMenuButtonOfAppBarBehavior = () => (PopupMenuButtonOfAppBarBehavior = dart.constFn(popup_menu.PopupMenuButton$(contacts_demo.AppBarBehavior)))();
  let AppBarBehaviorToNull = () => (AppBarBehaviorToNull = dart.constFn(dart.fnType(core.Null, [contacts_demo.AppBarBehavior])))();
  let PopupMenuItemOfAppBarBehavior = () => (PopupMenuItemOfAppBarBehavior = dart.constFn(popup_menu.PopupMenuItem$(contacts_demo.AppBarBehavior)))();
  let JSArrayOfPopupMenuItemOfAppBarBehavior = () => (JSArrayOfPopupMenuItemOfAppBarBehavior = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfAppBarBehavior())))();
  let ListOfPopupMenuItemOfAppBarBehavior = () => (ListOfPopupMenuItemOfAppBarBehavior = dart.constFn(core.List$(PopupMenuItemOfAppBarBehavior())))();
  let BuildContextToListOfPopupMenuItemOfAppBarBehavior = () => (BuildContextToListOfPopupMenuItemOfAppBarBehavior = dart.constFn(dart.fnType(ListOfPopupMenuItemOfAppBarBehavior(), [framework.BuildContext])))();
  let AnnotatedRegionOfSystemUiOverlayStyle = () => (AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(annotated_region.AnnotatedRegion$(system_chrome.SystemUiOverlayStyle)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 24,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 24,
        [EdgeInsets_left]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 35,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 33,
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
        [_Location_column]: 15,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 38,
        [_Location_line]: 35,
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
        [_Location_column]: 31,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 24,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 22,
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
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 91,
        [_Location_line]: 67,
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
        [_Location_column]: 86,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 36,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 64,
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
        [_Location_column]: 13,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 30,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 58,
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
        [_Location_column]: 12,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: contacts_demo.AppBarBehavior.prototype,
        [_name$]: "AppBarBehavior.normal",
        index: 0
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: contacts_demo.AppBarBehavior.prototype,
        [_name$]: "AppBarBehavior.pinned",
        index: 1
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: contacts_demo.AppBarBehavior.prototype,
        [_name$]: "AppBarBehavior.floating",
        index: 2
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: contacts_demo.AppBarBehavior.prototype,
        [_name$]: "AppBarBehavior.snapping",
        index: 3
      });
    },
    get C76() {
      return C76 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], contacts_demo.AppBarBehavior);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57680
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C78 || CT.C78
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C81() {
      return C81 = dart.const({
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
        [Text_data]: "Editing isn't supported in this screen."
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C81 || CT.C81
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 19,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
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
        [Text_data]: "App bar scrolls away"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: PopupMenuItemOfAppBarBehavior().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C88 || CT.C88,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C72 || CT.C72
      });
    },
    get C90() {
      return C90 = dart.const({
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
        [Text_data]: "App bar stays put"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: PopupMenuItemOfAppBarBehavior().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C90 || CT.C90,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C73 || CT.C73
      });
    },
    get C92() {
      return C92 = dart.const({
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
        [Text_data]: "App bar floats"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: PopupMenuItemOfAppBarBehavior().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C92 || CT.C92,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C74 || CT.C74
      });
    },
    get C94() {
      return C94 = dart.const({
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
        [Text_data]: "App bar snaps"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: PopupMenuItemOfAppBarBehavior().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C94 || CT.C94,
        [PopupMenuItem_textStyle]: null,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C75 || CT.C75
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 136,
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
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
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
        [Text_data]: "Ali Connors"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 23,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: proxy_box.DecorationPosition.prototype,
        [_name]: "DecorationPosition.background",
        index: 0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$0]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 1610612736
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 0
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], ui.Color);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: ui.TileMode.prototype,
        [_name$1]: "TileMode.clamp",
        index: 0
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -0.4,
        [Alignment_x]: 0
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 0
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_stops]: null,
        [Gradient_colors]: C111 || CT.C111,
        [LinearGradient_tileMode]: C114 || CT.C114,
        [LinearGradient_end]: C115 || CT.C115,
        [LinearGradient_begin]: C116 || CT.C116
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C109 || CT.C109,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: C110 || CT.C110,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: container.DecoratedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [DecoratedBox_position]: C107 || CT.C107,
        [DecoratedBox_decoration]: C108 || CT.C108
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 19,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 160,
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
        [_Location_column]: 29,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 17,
        [_Location_line]: 158,
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
        [_Location_column]: 30,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandedHeight",
        [_Location_column]: 15,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pinned",
        [_Location_column]: 15,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floating",
        [_Location_column]: 15,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "snap",
        [_Location_column]: 15,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 15,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flexibleSpace",
        [_Location_column]: 15,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
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
        [Text_data]: "Pretend that this opened your SMS application."
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C134 || CT.C134
      });
    },
    get C135() {
      return C135 = dart.constList(["(650) 555-1234", "Mobile"], core.String);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 25,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 25,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
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
        [Text_data]: "A messaging app appears."
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C143 || CT.C143
      });
    },
    get C144() {
      return C144 = dart.constList(["(323) 555-6789", "Work"], core.String);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 25,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 25,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148, C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
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
        [Text_data]: "Imagine if you will, a messaging application."
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C152 || CT.C152
      });
    },
    get C153() {
      return C153 = dart.constList(["(650) 555-6789", "Home"], core.String);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 25,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 25,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157, C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 215,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
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
        [Text_data]: "Here, your e-mail application would open."
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C169 || CT.C169
      });
    },
    get C170() {
      return C170 = dart.constList(["ali_connors@example.com", "Personal"], core.String);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 23,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174, C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
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
        [Text_data]: "Summon your favorite e-mail application here."
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C178 || CT.C178
      });
    },
    get C179() {
      return C179 = dart.constList(["aliconnors@example.com", "Work"], core.String);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 23,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183, C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 247,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 231,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
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
        [Text_data]: "This would show a map of San Francisco."
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C191 || CT.C191
      });
    },
    get C192() {
      return C192 = dart.constList(["2000 Main Street", "San Francisco, CA", "Home"], core.String);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 23,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.constList([C195 || CT.C195, C196 || CT.C196, C197 || CT.C197, C198 || CT.C198], widget_inspector._Location);
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C194 || CT.C194,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
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
        [Text_data]: "This would show a map of Mountain View."
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C200 || CT.C200
      });
    },
    get C201() {
      return C201 = dart.constList(["1600 Amphitheater Parkway", "Mountain View, CA", "Work"], core.String);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 23,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.constList([C204 || CT.C204, C205 || CT.C205, C206 || CT.C206, C207 || CT.C207], widget_inspector._Location);
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C203 || CT.C203,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C209() {
      return C209 = dart.const({
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
        [Text_data]: "This would also show a map, if this was not a demo."
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C80 || CT.C80,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C209 || CT.C209
      });
    },
    get C210() {
      return C210 = dart.constList(["126 Severyns Ave", "Mountain View, CA", "Jet Travel"], core.String);
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 23,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 301,
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
        [_Location_column]: 21,
        [_Location_line]: 293,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219, C220 || CT.C220], widget_inspector._Location);
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C218 || CT.C218,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C221() {
      return C221 = dart.constList(["Birthday", "January 9th, 1989"], core.String);
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224], widget_inspector._Location);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C223 || CT.C223,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C225() {
      return C225 = dart.constList(["Wedding anniversary", "June 21st, 2014"], core.String);
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 319,
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
        [_Location_column]: 21,
        [_Location_line]: 318,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C229() {
      return C229 = dart.constList(["First day in office", "January 20th, 2015"], core.String);
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C231 || CT.C231,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C233() {
      return C233 = dart.constList(["Last day in office", "August 9th, 2018"], core.String);
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lines",
        [_Location_column]: 23,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.constList([C236 || CT.C236], widget_inspector._Location);
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C235 || CT.C235,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 330,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 311,
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
        [_Location_column]: 17,
        [_Location_line]: 309,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 15,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243], widget_inspector._Location);
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 11,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.constList([C246 || CT.C246], widget_inspector._Location);
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C245 || CT.C245,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.constList([C249 || CT.C249, C250 || CT.C250], widget_inspector._Location);
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C248 || CT.C248,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.constList([C253 || CT.C253, C254 || CT.C254], widget_inspector._Location);
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C252 || CT.C252,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart"
      });
    }
  });
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C3;
  let C2;
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  let C13;
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C25;
  let C22;
  let C21;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  const _ContactCategory_icon = dart.privateName(contacts_demo, "_ContactCategory.icon");
  const _ContactCategory_children = dart.privateName(contacts_demo, "_ContactCategory.children");
  contacts_demo._ContactCategory = class _ContactCategory extends framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    build(context) {
      let themeData = theme.Theme.of(context);
      return new container.Container.new({padding: C0 || CT.C0, decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({color: themeData.dividerColor})})}), child: new text.DefaultTextStyle.new({style: theme.Theme.of(context).textTheme.subhead, child: new safe_area.SafeArea.new({top: false, bottom: false, child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({padding: C1 || CT.C1, width: 72.0, child: new icon.Icon.new(this.icon, {color: themeData.primaryColor, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new basic.Expanded.new({child: new basic.Column.new({children: this.children, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
  };
  (contacts_demo._ContactCategory.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[children$] = children;
    contacts_demo._ContactCategory.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = contacts_demo._ContactCategory.prototype;
  dart.addTypeTests(contacts_demo._ContactCategory);
  const icon$ = _ContactCategory_icon;
  const children$ = _ContactCategory_children;
  dart.setMethodSignature(contacts_demo._ContactCategory, () => ({
    __proto__: dart.getMethods(contacts_demo._ContactCategory.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(contacts_demo._ContactCategory, "package:flutter_gallery/demo/contacts_demo.dart");
  dart.setFieldSignature(contacts_demo._ContactCategory, () => ({
    __proto__: dart.getFields(contacts_demo._ContactCategory.__proto__),
    icon: dart.finalFieldType(icon_data.IconData),
    children: dart.finalFieldType(core.List$(framework.Widget))
  }));
  let C37;
  let C36;
  let C35;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C47;
  let C46;
  let C51;
  let C50;
  let C49;
  let C54;
  let C55;
  let C56;
  let C53;
  let C52;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C70;
  let C69;
  const _ContactItem_icon = dart.privateName(contacts_demo, "_ContactItem.icon");
  const _ContactItem_lines = dart.privateName(contacts_demo, "_ContactItem.lines");
  const _ContactItem_tooltip = dart.privateName(contacts_demo, "_ContactItem.tooltip");
  const _ContactItem_onPressed = dart.privateName(contacts_demo, "_ContactItem.onPressed");
  contacts_demo._ContactItem = class _ContactItem extends framework.StatelessWidget {
    get icon() {
      return this[icon$0];
    }
    set icon(value) {
      super.icon = value;
    }
    get lines() {
      return this[lines$];
    }
    set lines(value) {
      super.lines = value;
    }
    get tooltip() {
      return this[tooltip$];
    }
    set tooltip(value) {
      super.tooltip = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    build(context) {
      let themeData = theme.Theme.of(context);
      return new basic.MergeSemantics.new({child: new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: (() => {
              let t0 = JSArrayOfWidget().of([]);
              t0[$add](new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
                    let t1 = JSArrayOfWidget().of([]);
                    for (let t2 of this.lines[$sublist](0, dart.notNull(this.lines[$length]) - 1)[$map](framework.Widget, dart.fn(line => new text.Text.new(line, {$creationLocationd_0dea112b090073317d4: C35 || CT.C35}), StringToText())))
                      t1[$add](t2);
                    t1[$add](new text.Text.new(this.lines[$last], {style: themeData.textTheme.caption, $creationLocationd_0dea112b090073317d4: C38 || CT.C38}));
                    return t1;
                  })(), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}));
              if (this.icon != null) t0[$add](new basic.SizedBox.new({width: 72.0, child: new icon_button.IconButton.new({icon: new icon.Icon.new(this.icon, {$creationLocationd_0dea112b090073317d4: C49 || CT.C49}), color: themeData.primaryColor, onPressed: this.onPressed, $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}));
              return t0;
            })(), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69});
    }
  };
  (contacts_demo._ContactItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let lines = opts && 'lines' in opts ? opts.lines : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$0] = icon;
    this[lines$] = lines;
    this[tooltip$] = tooltip;
    this[onPressed$] = onPressed;
    if (!(dart.notNull(lines[$length]) > 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/contacts_demo.dart", 46, 14, "lines.length > 1");
    contacts_demo._ContactItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = contacts_demo._ContactItem.prototype;
  dart.addTypeTests(contacts_demo._ContactItem);
  const icon$0 = _ContactItem_icon;
  const lines$ = _ContactItem_lines;
  const tooltip$ = _ContactItem_tooltip;
  const onPressed$ = _ContactItem_onPressed;
  dart.setMethodSignature(contacts_demo._ContactItem, () => ({
    __proto__: dart.getMethods(contacts_demo._ContactItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(contacts_demo._ContactItem, "package:flutter_gallery/demo/contacts_demo.dart");
  dart.setFieldSignature(contacts_demo._ContactItem, () => ({
    __proto__: dart.getFields(contacts_demo._ContactItem.__proto__),
    icon: dart.finalFieldType(icon_data.IconData),
    lines: dart.finalFieldType(core.List$(core.String)),
    tooltip: dart.finalFieldType(core.String),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  contacts_demo.ContactsDemo = class ContactsDemo extends framework.StatefulWidget {
    createState() {
      return new contacts_demo.ContactsDemoState.new();
    }
  };
  (contacts_demo.ContactsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    contacts_demo.ContactsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = contacts_demo.ContactsDemo.prototype;
  dart.addTypeTests(contacts_demo.ContactsDemo);
  dart.setMethodSignature(contacts_demo.ContactsDemo, () => ({
    __proto__: dart.getMethods(contacts_demo.ContactsDemo.__proto__),
    createState: dart.fnType(contacts_demo.ContactsDemoState, [])
  }));
  dart.setLibraryUri(contacts_demo.ContactsDemo, "package:flutter_gallery/demo/contacts_demo.dart");
  dart.defineLazy(contacts_demo.ContactsDemo, {
    /*contacts_demo.ContactsDemo.routeName*/get routeName() {
      return "/contacts";
    }
  });
  const _name$ = dart.privateName(contacts_demo, "_name");
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  contacts_demo.AppBarBehavior = class AppBarBehavior extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (contacts_demo.AppBarBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = contacts_demo.AppBarBehavior.prototype;
  dart.addTypeTests(contacts_demo.AppBarBehavior);
  dart.setLibraryUri(contacts_demo.AppBarBehavior, "package:flutter_gallery/demo/contacts_demo.dart");
  dart.setFieldSignature(contacts_demo.AppBarBehavior, () => ({
    __proto__: dart.getFields(contacts_demo.AppBarBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(contacts_demo.AppBarBehavior, ['toString']);
  contacts_demo.AppBarBehavior.normal = C72 || CT.C72;
  contacts_demo.AppBarBehavior.pinned = C73 || CT.C73;
  contacts_demo.AppBarBehavior.floating = C74 || CT.C74;
  contacts_demo.AppBarBehavior.snapping = C75 || CT.C75;
  contacts_demo.AppBarBehavior.values = C76 || CT.C76;
  const _appBarHeight = dart.privateName(contacts_demo, "_appBarHeight");
  const _appBarBehavior = dart.privateName(contacts_demo, "_appBarBehavior");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C78;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C77;
  const SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C80;
  const SnackBar_duration = dart.privateName(snack_bar, "SnackBar.duration");
  const SnackBar_action = dart.privateName(snack_bar, "SnackBar.action");
  const SnackBar_behavior = dart.privateName(snack_bar, "SnackBar.behavior");
  const SnackBar_shape = dart.privateName(snack_bar, "SnackBar.shape");
  const SnackBar_elevation = dart.privateName(snack_bar, "SnackBar.elevation");
  const SnackBar_backgroundColor = dart.privateName(snack_bar, "SnackBar.backgroundColor");
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
  let C81;
  const SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  let C79;
  let C84;
  let C85;
  let C86;
  let C83;
  let C82;
  let C88;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_textStyle = dart.privateName(popup_menu, "PopupMenuItem.textStyle");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C87;
  let C90;
  let C89;
  let C92;
  let C91;
  let C94;
  let C93;
  let C97;
  let C98;
  let C96;
  let C95;
  let C99;
  let C102;
  let C103;
  let C104;
  let C105;
  let C101;
  let C100;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const _name = dart.privateName(proxy_box, "_name");
  let C107;
  const DecoratedBox_position = dart.privateName(container, "DecoratedBox.position");
  const _name$0 = dart.privateName(box_border, "_name");
  let C109;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  const Color__value = dart.privateName(ui, "Color._value");
  let C112;
  let C113;
  let C111;
  const Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  const _name$1 = dart.privateName(ui, "_name");
  let C114;
  const LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C115;
  const LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  let C116;
  const LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  let C110;
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C108;
  const DecoratedBox_decoration = dart.privateName(container, "DecoratedBox.decoration");
  let C106;
  let C119;
  let C120;
  let C118;
  let C117;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C128;
  let C129;
  let C130;
  let C131;
  let C132;
  let C126;
  let C125;
  let C134;
  let C133;
  let C135;
  let C138;
  let C139;
  let C140;
  let C141;
  let C137;
  let C136;
  let C143;
  let C142;
  let C144;
  let C147;
  let C148;
  let C149;
  let C150;
  let C146;
  let C145;
  let C152;
  let C151;
  let C153;
  let C156;
  let C157;
  let C158;
  let C159;
  let C155;
  let C154;
  let C162;
  let C163;
  let C161;
  let C160;
  let C166;
  let C167;
  let C165;
  let C164;
  let C169;
  let C168;
  let C170;
  let C173;
  let C174;
  let C175;
  let C176;
  let C172;
  let C171;
  let C178;
  let C177;
  let C179;
  let C182;
  let C183;
  let C184;
  let C185;
  let C181;
  let C180;
  let C188;
  let C189;
  let C187;
  let C186;
  let C191;
  let C190;
  let C192;
  let C195;
  let C196;
  let C197;
  let C198;
  let C194;
  let C193;
  let C200;
  let C199;
  let C201;
  let C204;
  let C205;
  let C206;
  let C207;
  let C203;
  let C202;
  let C209;
  let C208;
  let C210;
  let C213;
  let C214;
  let C215;
  let C216;
  let C212;
  let C211;
  let C219;
  let C220;
  let C218;
  let C217;
  let C221;
  let C224;
  let C223;
  let C222;
  let C225;
  let C228;
  let C227;
  let C226;
  let C229;
  let C232;
  let C231;
  let C230;
  let C233;
  let C236;
  let C235;
  let C234;
  let C239;
  let C240;
  let C238;
  let C237;
  let C243;
  let C242;
  let C241;
  let C246;
  let C245;
  let C244;
  let C249;
  let C250;
  let C248;
  let C247;
  let C253;
  let C254;
  let C252;
  let C251;
  contacts_demo.ContactsDemoState = class ContactsDemoState extends framework.State$(contacts_demo.ContactsDemo) {
    build(context) {
      return new theme.Theme.new({data: theme_data.ThemeData.new({brightness: ui.Brightness.light, primarySwatch: colors.Colors.indigo, platform: theme.Theme.of(context).platform}), child: new scaffold.Scaffold.new({key: contacts_demo.ContactsDemoState._scaffoldKey, body: new scroll_view.CustomScrollView.new({slivers: JSArrayOfWidget().of([new app_bar.SliverAppBar.new({expandedHeight: this[_appBarHeight], pinned: dart.equals(this[_appBarBehavior], contacts_demo.AppBarBehavior.pinned), floating: dart.equals(this[_appBarBehavior], contacts_demo.AppBarBehavior.floating) || dart.equals(this[_appBarBehavior], contacts_demo.AppBarBehavior.snapping), snap: dart.equals(this[_appBarBehavior], contacts_demo.AppBarBehavior.snapping), actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C77 || CT.C77, tooltip: "Edit", onPressed: dart.fn(() => {
                      contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C79 || CT.C79);
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), new (PopupMenuButtonOfAppBarBehavior()).new({onSelected: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this[_appBarBehavior] = value;
                      }, VoidToNull()));
                    }, AppBarBehaviorToNull()), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfAppBarBehavior().of([C87 || CT.C87, C89 || CT.C89, C91 || CT.C91, C93 || CT.C93]), BuildContextToListOfPopupMenuItemOfAppBarBehavior()), $creationLocationd_0dea112b090073317d4: C95 || CT.C95})]), flexibleSpace: new flexible_space_bar.FlexibleSpaceBar.new({title: C99 || CT.C99, background: new basic.Stack.new({fit: stack.StackFit.expand, children: JSArrayOfWidget().of([new image.Image.asset("people/ali_landscape.png", {package: "flutter_gallery_assets", fit: box_fit.BoxFit.cover, height: this[_appBarHeight], $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), C106 || CT.C106]), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), new sliver.SliverList.new({delegate: new sliver.SliverChildListDelegate.new(JSArrayOfWidget().of([new (AnnotatedRegionOfSystemUiOverlayStyle()).new({value: system_chrome.SystemUiOverlayStyle.dark, child: new contacts_demo._ContactCategory.new({icon: icons.Icons.call, children: JSArrayOfWidget().of([new contacts_demo._ContactItem.new({icon: icons.Icons.message, tooltip: "Send message", onPressed: dart.fn(() => {
                            contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C133 || CT.C133);
                          }, VoidToNull()), lines: C135 || CT.C135, $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), new contacts_demo._ContactItem.new({icon: icons.Icons.message, tooltip: "Send message", onPressed: dart.fn(() => {
                            contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C142 || CT.C142);
                          }, VoidToNull()), lines: C144 || CT.C144, $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), new contacts_demo._ContactItem.new({icon: icons.Icons.message, tooltip: "Send message", onPressed: dart.fn(() => {
                            contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C151 || CT.C151);
                          }, VoidToNull()), lines: C153 || CT.C153, $creationLocationd_0dea112b090073317d4: C154 || CT.C154})]), $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164}), new contacts_demo._ContactCategory.new({icon: icons.Icons.contact_mail, children: JSArrayOfWidget().of([new contacts_demo._ContactItem.new({icon: icons.Icons.email, tooltip: "Send personal e-mail", onPressed: dart.fn(() => {
                          contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C168 || CT.C168);
                        }, VoidToNull()), lines: C170 || CT.C170, $creationLocationd_0dea112b090073317d4: C171 || CT.C171}), new contacts_demo._ContactItem.new({icon: icons.Icons.email, tooltip: "Send work e-mail", onPressed: dart.fn(() => {
                          contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C177 || CT.C177);
                        }, VoidToNull()), lines: C179 || CT.C179, $creationLocationd_0dea112b090073317d4: C180 || CT.C180})]), $creationLocationd_0dea112b090073317d4: C186 || CT.C186}), new contacts_demo._ContactCategory.new({icon: icons.Icons.location_on, children: JSArrayOfWidget().of([new contacts_demo._ContactItem.new({icon: icons.Icons.map, tooltip: "Open map", onPressed: dart.fn(() => {
                          contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C190 || CT.C190);
                        }, VoidToNull()), lines: C192 || CT.C192, $creationLocationd_0dea112b090073317d4: C193 || CT.C193}), new contacts_demo._ContactItem.new({icon: icons.Icons.map, tooltip: "Open map", onPressed: dart.fn(() => {
                          contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C199 || CT.C199);
                        }, VoidToNull()), lines: C201 || CT.C201, $creationLocationd_0dea112b090073317d4: C202 || CT.C202}), new contacts_demo._ContactItem.new({icon: icons.Icons.map, tooltip: "Open map", onPressed: dart.fn(() => {
                          contacts_demo.ContactsDemoState._scaffoldKey.currentState.showSnackBar(C208 || CT.C208);
                        }, VoidToNull()), lines: C210 || CT.C210, $creationLocationd_0dea112b090073317d4: C211 || CT.C211})]), $creationLocationd_0dea112b090073317d4: C217 || CT.C217}), new contacts_demo._ContactCategory.new({icon: icons.Icons.today, children: JSArrayOfWidget().of([new contacts_demo._ContactItem.new({lines: C221 || CT.C221, $creationLocationd_0dea112b090073317d4: C222 || CT.C222}), new contacts_demo._ContactItem.new({lines: C225 || CT.C225, $creationLocationd_0dea112b090073317d4: C226 || CT.C226}), new contacts_demo._ContactItem.new({lines: C229 || CT.C229, $creationLocationd_0dea112b090073317d4: C230 || CT.C230}), new contacts_demo._ContactItem.new({lines: C233 || CT.C233, $creationLocationd_0dea112b090073317d4: C234 || CT.C234})]), $creationLocationd_0dea112b090073317d4: C237 || CT.C237})])), $creationLocationd_0dea112b090073317d4: C241 || CT.C241})]), $creationLocationd_0dea112b090073317d4: C244 || CT.C244}), $creationLocationd_0dea112b090073317d4: C247 || CT.C247}), $creationLocationd_0dea112b090073317d4: C251 || CT.C251});
    }
  };
  (contacts_demo.ContactsDemoState.new = function() {
    this[_appBarHeight] = 256.0;
    this[_appBarBehavior] = contacts_demo.AppBarBehavior.pinned;
    contacts_demo.ContactsDemoState.__proto__.new.call(this);
    ;
  }).prototype = contacts_demo.ContactsDemoState.prototype;
  dart.addTypeTests(contacts_demo.ContactsDemoState);
  dart.setMethodSignature(contacts_demo.ContactsDemoState, () => ({
    __proto__: dart.getMethods(contacts_demo.ContactsDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(contacts_demo.ContactsDemoState, "package:flutter_gallery/demo/contacts_demo.dart");
  dart.setFieldSignature(contacts_demo.ContactsDemoState, () => ({
    __proto__: dart.getFields(contacts_demo.ContactsDemoState.__proto__),
    [_appBarHeight]: dart.finalFieldType(core.double),
    [_appBarBehavior]: dart.fieldType(contacts_demo.AppBarBehavior)
  }));
  dart.defineLazy(contacts_demo.ContactsDemoState, {
    /*contacts_demo.ContactsDemoState._scaffoldKey*/get _scaffoldKey() {
      return GlobalKeyOfScaffoldState().new();
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/contacts_demo", {
    "package:flutter_gallery/demo/contacts_demo.dart": contacts_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["contacts_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUiB;;;;;;IACI;;;;;;UAGO;AACR,sBAAkB,eAAG,OAAO;AAC5C,YAAO,gEAEO,8CACF,mCAAe,mCAAkB,AAAU,SAAD,4BAE7C,sCACQ,AAAY,AAAU,eAAnB,OAAO,4BAChB,iCACA,eACG,cACD,uCACkC,yCACrB,sBAChB,0DAES,aACA,kBAAK,mBAAa,AAAU,SAAD,6HAEpC,+BAAgB,gCAAiB;IAM7C;;;QAhC6B;QAAU;QAAW;;IAAX;IAAW;AAAc,kEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwChE;;;;;;IACI;;;;;;IACN;;;;;;IACM;;;;;;UAGO;AACR,sBAAkB,eAAG,OAAO;AAC5C,YAAO,sCACE,oDAEE,sCACgC;;uBAEnC,+BACS,0CACkC;;kCAElC,AAAM,AAA6B,sBAArB,GAAgB,aAAb,AAAM,uBAAS,2BAAe,QAAQ,QAAS,kBAAK,IAAI;;6BAC5E,kBAAK,AAAM,2BAAa,AAAU,AAAU,SAAX;;;AAIvC,kBAAI,aAAQ,eACV,+BACS,aACA,sCACC,kBAAK,4EACJ,AAAU,SAAD,0BACL;;;IAO3B;;;QAxCyB;QAAU;QAAW;QAAY;QAAc;;IAArC;IAAW;IAAY;IAAc;UAChD,aAAb,AAAM,KAAD,aAAU;AACtB,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;AA6CgB;IAAmB;;;;;;EACxD;;;;;;;;MAJsB,oCAAS;;;;;;;;;;;;;IAM0B;;sDAApD;;;;EAAoD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS7B;AACxB,YAAO,4BACC,sCACmB,oCACD,gCACN,AAAY,eAAT,OAAO,qBAErB,gCACA,oDACC,+CACa,sBACf,8CACkB,6BACQ,YAAhB,uBAAkC,gDAChB,AAA2B,YAA3C,uBAAkC,0CAA4B,YAAhB,uBAAkC,8CACpE,YAAhB,uBAAkC,iDACvB,sBACf,8DAEW,mBACE;AAGP,sBAFF,AAAa,AAAa;+FAK9B,yDACc,QAAgB;AAGxB,sBAFF,cAAS;AACgB,wBAAvB,wBAAkB,KAAK;;6DAGd,QAAc,WAA2C,2OAoB3D,+EAED,0BACI,iCACI,sBACV,sBACJ,sCACS,+BACG,8BACJ,oRAiBlB,qCACY,uCAAgC,sBACxC,0DAC8B,gDACrB,8CACO,4BACM,sBAChB,0CACc,8BACH,2BACE;AAGP,4BAFF,AAAa,AAAa;+HAS9B,0CACc,8BACH,2BACE;AAGP,4BAFF,AAAa,AAAa;+HAS9B,0CACc,8BACH,2BACE;AAGP,4BAFF,AAAa,AAAa;uPAYpC,8CACc,oCACM,sBAChB,0CACc,4BACH,mCACE;AAGP,0BAFF,AAAa,AAAa;6HAS9B,0CACc,4BACH,+BACE;AAGP,0BAFF,AAAa,AAAa;0LAWlC,8CACc,mCACM,sBAChB,0CACc,0BACH,uBACE;AAGP,0BAFF,AAAa,AAAa;6HAU9B,0CACc,0BACH,uBACE;AAGP,0BAFF,AAAa,AAAa;6HAU9B,0CACc,0BACH,uBACE;AAGP,0BAFF,AAAa,AAAa;0LAYlC,8CACc,6BACM,sBAChB,uHAMA,uHAMA,uHAMA;IAclB;;;IArPa,sBAAgB;IAEd,wBAAiC;;;EAoPlD;;;;;;;;;;;;;MAvPwC,4CAAY;YAAG","file":"contacts_demo.ddc.js"}');
  // Exports:
  return {
    demo__contacts_demo: contacts_demo
  };
});

//# sourceMappingURL=contacts_demo.ddc.js.map
