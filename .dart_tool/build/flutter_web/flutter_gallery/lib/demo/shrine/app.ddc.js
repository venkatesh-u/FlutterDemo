define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/material', 'packages/flutter_gallery/demo/shrine/home', 'packages/flutter_gallery/demo/shrine/backdrop', 'packages/flutter_gallery/demo/shrine/model/product', 'packages/flutter_gallery/demo/shrine/category_menu_page', 'packages/flutter/gestures', 'packages/flutter_gallery/demo/shrine/expanding_bottom_sheet', 'packages/flutter_gallery/demo/shrine/login', 'packages/flutter_gallery/demo/shrine/colors', 'packages/flutter_gallery/demo/shrine/supplemental/cut_corners_border', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__material, packages__flutter_gallery__demo__shrine__home, packages__flutter_gallery__demo__shrine__backdrop, packages__flutter_gallery__demo__shrine__model__product, packages__flutter_gallery__demo__shrine__category_menu_page, packages__flutter__gestures, packages__flutter_gallery__demo__shrine__expanding_bottom_sheet, packages__flutter_gallery__demo__shrine__login, packages__flutter_gallery__demo__shrine__colors, packages__flutter_gallery__demo__shrine__supplemental__cut_corners_border, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const app = packages__flutter__material.src__material__app;
  const theme = packages__flutter__material.src__material__theme;
  const page = packages__flutter__material.src__material__page;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const button_theme = packages__flutter__material.src__material__button_theme;
  const color_scheme = packages__flutter__material.src__material__color_scheme;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const home = packages__flutter_gallery__demo__shrine__home.demo__shrine__home;
  const backdrop = packages__flutter_gallery__demo__shrine__backdrop.demo__shrine__backdrop;
  const product = packages__flutter_gallery__demo__shrine__model__product.demo__shrine__model__product;
  const category_menu_page = packages__flutter_gallery__demo__shrine__category_menu_page.demo__shrine__category_menu_page;
  const ticker = packages__flutter__gestures.src__scheduler__ticker;
  const expanding_bottom_sheet = packages__flutter_gallery__demo__shrine__expanding_bottom_sheet.demo__shrine__expanding_bottom_sheet;
  const login = packages__flutter_gallery__demo__shrine__login.demo__shrine__login;
  const colors = packages__flutter_gallery__demo__shrine__colors.demo__shrine__colors;
  const cut_corners_border = packages__flutter_gallery__demo__shrine__supplemental__cut_corners_border.demo__shrine__supplemental__cut_corners_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const app$ = Object.create(dart.library);
  let VoidToTickerFuture = () => (VoidToTickerFuture = dart.constFn(dart.fnType(ticker.TickerFuture, [])))();
  let RouteSettingsToRoute = () => (RouteSettingsToRoute = dart.constFn(dart.fnType(navigator.Route, [navigator.RouteSettings])))();
  let MaterialPageRouteOfvoid = () => (MaterialPageRouteOfvoid = dart.constFn(page.MaterialPageRoute$(dart.void)))();
  let BuildContextToLoginPage = () => (BuildContextToLoginPage = dart.constFn(dart.fnType(login.LoginPage, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 450000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: product.Category.prototype,
        [_name]: "Category.all",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: home.ProductPage.prototype,
        [Widget_key]: null,
        [ProductPage_category]: C2 || CT.C2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onCategoryTap",
        [_Location_column]: 39,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/app.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
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
        [Text_data]: "SHRINE"
      });
    },
    get C7() {
      return C7 = dart.const({
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
        [Text_data]: "MENU"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontLayer",
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backLayer",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontTitle",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backTitle",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/app.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hideController",
        [_Location_column]: 52,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/app.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backdrop",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandingBottomSheet",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/app.dart"
      });
    },
    get C22() {
      return C22 = dart.fn(app$._getRoute, RouteSettingsToRoute());
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialRoute",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateRoute",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/app.dart"
      });
    },
    get C31() {
      return C31 = dart.constList([], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/app.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name$]: "Brightness.light",
        index: 1
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294966266.0
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282657581.0
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4291101483.0
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294896358.0
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294892496.0
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: color_scheme.ColorScheme.prototype,
        [ColorScheme_brightness]: C34 || CT.C34,
        [ColorScheme_onError]: C35 || CT.C35,
        [ColorScheme_onBackground]: C36 || CT.C36,
        [ColorScheme_onSurface]: C36 || CT.C36,
        [ColorScheme_onSecondary]: C36 || CT.C36,
        [ColorScheme_onPrimary]: C36 || CT.C36,
        [ColorScheme_error]: C37 || CT.C37,
        [ColorScheme_background]: C38 || CT.C38,
        [ColorScheme_surface]: C35 || CT.C35,
        [ColorScheme_secondaryVariant]: C36 || CT.C36,
        [ColorScheme_secondary]: C39 || CT.C39,
        [ColorScheme_primaryVariant]: C36 || CT.C36,
        [ColorScheme_primary]: C40 || CT.C40
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: button_theme.ButtonBarLayoutBehavior.prototype,
        [_name$0]: "ButtonBarLayoutBehavior.padded",
        index: 1
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: button_theme.ButtonTextTheme.prototype,
        [_name$0]: "ButtonTextTheme.normal",
        index: 0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: button_theme.ButtonThemeData.prototype,
        [ButtonThemeData__materialTapTargetSize]: null,
        [ButtonThemeData_colorScheme]: C33 || CT.C33,
        [ButtonThemeData__splashColor]: null,
        [ButtonThemeData__highlightColor]: null,
        [ButtonThemeData__hoverColor]: null,
        [ButtonThemeData__focusColor]: null,
        [ButtonThemeData__disabledColor]: null,
        [ButtonThemeData__buttonColor]: null,
        [ButtonThemeData_alignedDropdown]: false,
        [ButtonThemeData__shape]: null,
        [ButtonThemeData__padding]: null,
        [ButtonThemeData_layoutBehavior]: C41 || CT.C41,
        [ButtonThemeData_textTheme]: C42 || CT.C42,
        [ButtonThemeData_height]: 36,
        [ButtonThemeData_minWidth]: 88
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$1]: "BorderStyle.none",
        index: 0
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C46 || CT.C46,
        [BorderSide_width]: 0,
        [BorderSide_color]: C47 || CT.C47
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 2,
        [Radius_x]: 2
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C49 || CT.C49,
        [BorderRadius_bottomLeft]: C49 || CT.C49,
        [BorderRadius_topRight]: C49 || CT.C49,
        [BorderRadius_topLeft]: C49 || CT.C49
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: cut_corners_border.CutCornersBorder.prototype,
        [InputBorder_borderSide]: C45 || CT.C45,
        [OutlineInputBorder_borderRadius]: C48 || CT.C48,
        [OutlineInputBorder_gapPadding]: 2,
        [CutCornersBorder_cut]: 7
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: input_decorator.InputDecorationTheme.prototype,
        [InputDecorationTheme_alignLabelWithHint]: false,
        [InputDecorationTheme_border]: C44 || CT.C44,
        [InputDecorationTheme_enabledBorder]: null,
        [InputDecorationTheme_disabledBorder]: null,
        [InputDecorationTheme_focusedErrorBorder]: null,
        [InputDecorationTheme_focusedBorder]: null,
        [InputDecorationTheme_errorBorder]: null,
        [InputDecorationTheme_hoverColor]: null,
        [InputDecorationTheme_focusColor]: null,
        [InputDecorationTheme_fillColor]: null,
        [InputDecorationTheme_filled]: false,
        [InputDecorationTheme_counterStyle]: null,
        [InputDecorationTheme_suffixStyle]: null,
        [InputDecorationTheme_prefixStyle]: null,
        [InputDecorationTheme_isCollapsed]: false,
        [InputDecorationTheme_contentPadding]: null,
        [InputDecorationTheme_isDense]: false,
        [InputDecorationTheme_hasFloatingPlaceholder]: true,
        [InputDecorationTheme_errorMaxLines]: null,
        [InputDecorationTheme_errorStyle]: null,
        [InputDecorationTheme_hintStyle]: null,
        [InputDecorationTheme_helperStyle]: null,
        [InputDecorationTheme_labelStyle]: null
      });
    }
  });
  app$.ShrineApp = class ShrineApp extends framework.StatefulWidget {
    createState() {
      return new app$._ShrineAppState.new();
    }
  };
  (app$.ShrineApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    app$.ShrineApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app$.ShrineApp.prototype;
  dart.addTypeTests(app$.ShrineApp);
  dart.setMethodSignature(app$.ShrineApp, () => ({
    __proto__: dart.getMethods(app$.ShrineApp.__proto__),
    createState: dart.fnType(app$._ShrineAppState, [])
  }));
  dart.setLibraryUri(app$.ShrineApp, "package:flutter_gallery/demo/shrine/app.dart");
  const _controller = dart.privateName(app$, "_controller");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const _name = dart.privateName(product, "_name");
  let C2;
  const ProductPage_category = dart.privateName(home, "ProductPage.category");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C4;
  let C3;
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
  let C6;
  let C7;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C9;
  let C8;
  let C17;
  let C16;
  let C15;
  let C20;
  let C21;
  let C19;
  let C18;
  let C22;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C24;
  let C23;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(app$.ShrineApp) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(app$.ShrineApp)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(app$.ShrineApp));
  app$._ShrineAppState = class _ShrineAppState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({vsync: this, duration: C0 || CT.C0, value: 1.0});
    }
    build(context) {
      return new app.MaterialApp.new({title: "Shrine", home: new home.HomePage.new({backdrop: new backdrop.Backdrop.new({frontLayer: C1 || CT.C1, backLayer: new category_menu_page.CategoryMenuPage.new({onCategoryTap: dart.fn(() => this[_controller].forward(), VoidToTickerFuture()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), frontTitle: C6 || CT.C6, backTitle: C7 || CT.C7, controller: this[_controller], $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), expandingBottomSheet: new expanding_bottom_sheet.ExpandingBottomSheet.new({hideController: this[_controller], $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), initialRoute: "/login", onGenerateRoute: C22 || CT.C22, theme: app$._kShrineTheme.copyWith({platform: theme.Theme.of(context).platform}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (app$._ShrineAppState.new = function() {
    this[_controller] = null;
    app$._ShrineAppState.__proto__.new.call(this);
    ;
  }).prototype = app$._ShrineAppState.prototype;
  dart.addTypeTests(app$._ShrineAppState);
  dart.setMethodSignature(app$._ShrineAppState, () => ({
    __proto__: dart.getMethods(app$._ShrineAppState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(app$._ShrineAppState, "package:flutter_gallery/demo/shrine/app.dart");
  dart.setFieldSignature(app$._ShrineAppState, () => ({
    __proto__: dart.getFields(app$._ShrineAppState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController)
  }));
  let C31;
  let C30;
  const ButtonThemeData__materialTapTargetSize = dart.privateName(button_theme, "ButtonThemeData._materialTapTargetSize");
  const _name$ = dart.privateName(ui, "_name");
  let C34;
  const ColorScheme_brightness = dart.privateName(color_scheme, "ColorScheme.brightness");
  const Color__value = dart.privateName(ui, "Color._value");
  let C35;
  const ColorScheme_onError = dart.privateName(color_scheme, "ColorScheme.onError");
  let C36;
  const ColorScheme_onBackground = dart.privateName(color_scheme, "ColorScheme.onBackground");
  const ColorScheme_onSurface = dart.privateName(color_scheme, "ColorScheme.onSurface");
  const ColorScheme_onSecondary = dart.privateName(color_scheme, "ColorScheme.onSecondary");
  const ColorScheme_onPrimary = dart.privateName(color_scheme, "ColorScheme.onPrimary");
  let C37;
  const ColorScheme_error = dart.privateName(color_scheme, "ColorScheme.error");
  let C38;
  const ColorScheme_background = dart.privateName(color_scheme, "ColorScheme.background");
  const ColorScheme_surface = dart.privateName(color_scheme, "ColorScheme.surface");
  const ColorScheme_secondaryVariant = dart.privateName(color_scheme, "ColorScheme.secondaryVariant");
  let C39;
  const ColorScheme_secondary = dart.privateName(color_scheme, "ColorScheme.secondary");
  const ColorScheme_primaryVariant = dart.privateName(color_scheme, "ColorScheme.primaryVariant");
  let C40;
  const ColorScheme_primary = dart.privateName(color_scheme, "ColorScheme.primary");
  let C33;
  const ButtonThemeData_colorScheme = dart.privateName(button_theme, "ButtonThemeData.colorScheme");
  const ButtonThemeData__splashColor = dart.privateName(button_theme, "ButtonThemeData._splashColor");
  const ButtonThemeData__highlightColor = dart.privateName(button_theme, "ButtonThemeData._highlightColor");
  const ButtonThemeData__hoverColor = dart.privateName(button_theme, "ButtonThemeData._hoverColor");
  const ButtonThemeData__focusColor = dart.privateName(button_theme, "ButtonThemeData._focusColor");
  const ButtonThemeData__disabledColor = dart.privateName(button_theme, "ButtonThemeData._disabledColor");
  const ButtonThemeData__buttonColor = dart.privateName(button_theme, "ButtonThemeData._buttonColor");
  const ButtonThemeData_alignedDropdown = dart.privateName(button_theme, "ButtonThemeData.alignedDropdown");
  const ButtonThemeData__shape = dart.privateName(button_theme, "ButtonThemeData._shape");
  const ButtonThemeData__padding = dart.privateName(button_theme, "ButtonThemeData._padding");
  const _name$0 = dart.privateName(button_theme, "_name");
  let C41;
  const ButtonThemeData_layoutBehavior = dart.privateName(button_theme, "ButtonThemeData.layoutBehavior");
  let C42;
  const ButtonThemeData_textTheme = dart.privateName(button_theme, "ButtonThemeData.textTheme");
  const ButtonThemeData_height = dart.privateName(button_theme, "ButtonThemeData.height");
  const ButtonThemeData_minWidth = dart.privateName(button_theme, "ButtonThemeData.minWidth");
  let C32;
  const InputDecorationTheme_alignLabelWithHint = dart.privateName(input_decorator, "InputDecorationTheme.alignLabelWithHint");
  const _name$1 = dart.privateName(borders, "_name");
  let C46;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  let C47;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C45;
  const InputBorder_borderSide = dart.privateName(input_border, "InputBorder.borderSide");
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C49;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C48;
  const OutlineInputBorder_borderRadius = dart.privateName(input_border, "OutlineInputBorder.borderRadius");
  const OutlineInputBorder_gapPadding = dart.privateName(input_border, "OutlineInputBorder.gapPadding");
  const CutCornersBorder_cut = dart.privateName(cut_corners_border, "CutCornersBorder.cut");
  let C44;
  const InputDecorationTheme_border = dart.privateName(input_decorator, "InputDecorationTheme.border");
  const InputDecorationTheme_enabledBorder = dart.privateName(input_decorator, "InputDecorationTheme.enabledBorder");
  const InputDecorationTheme_disabledBorder = dart.privateName(input_decorator, "InputDecorationTheme.disabledBorder");
  const InputDecorationTheme_focusedErrorBorder = dart.privateName(input_decorator, "InputDecorationTheme.focusedErrorBorder");
  const InputDecorationTheme_focusedBorder = dart.privateName(input_decorator, "InputDecorationTheme.focusedBorder");
  const InputDecorationTheme_errorBorder = dart.privateName(input_decorator, "InputDecorationTheme.errorBorder");
  const InputDecorationTheme_hoverColor = dart.privateName(input_decorator, "InputDecorationTheme.hoverColor");
  const InputDecorationTheme_focusColor = dart.privateName(input_decorator, "InputDecorationTheme.focusColor");
  const InputDecorationTheme_fillColor = dart.privateName(input_decorator, "InputDecorationTheme.fillColor");
  const InputDecorationTheme_filled = dart.privateName(input_decorator, "InputDecorationTheme.filled");
  const InputDecorationTheme_counterStyle = dart.privateName(input_decorator, "InputDecorationTheme.counterStyle");
  const InputDecorationTheme_suffixStyle = dart.privateName(input_decorator, "InputDecorationTheme.suffixStyle");
  const InputDecorationTheme_prefixStyle = dart.privateName(input_decorator, "InputDecorationTheme.prefixStyle");
  const InputDecorationTheme_isCollapsed = dart.privateName(input_decorator, "InputDecorationTheme.isCollapsed");
  const InputDecorationTheme_contentPadding = dart.privateName(input_decorator, "InputDecorationTheme.contentPadding");
  const InputDecorationTheme_isDense = dart.privateName(input_decorator, "InputDecorationTheme.isDense");
  const InputDecorationTheme_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecorationTheme.hasFloatingPlaceholder");
  const InputDecorationTheme_errorMaxLines = dart.privateName(input_decorator, "InputDecorationTheme.errorMaxLines");
  const InputDecorationTheme_errorStyle = dart.privateName(input_decorator, "InputDecorationTheme.errorStyle");
  const InputDecorationTheme_hintStyle = dart.privateName(input_decorator, "InputDecorationTheme.hintStyle");
  const InputDecorationTheme_helperStyle = dart.privateName(input_decorator, "InputDecorationTheme.helperStyle");
  const InputDecorationTheme_labelStyle = dart.privateName(input_decorator, "InputDecorationTheme.labelStyle");
  let C43;
  app$._getRoute = function _getRoute(settings) {
    if (settings.name !== "/login") {
      return null;
    }
    return new (MaterialPageRouteOfvoid()).new({settings: settings, builder: dart.fn(context => new login.LoginPage.new({$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), BuildContextToLoginPage()), fullscreenDialog: true});
  };
  app$._customIconTheme = function _customIconTheme(original) {
    return original.copyWith({color: colors.kShrineBrown900});
  };
  app$._buildShrineTheme = function _buildShrineTheme() {
    let base = theme_data.ThemeData.light();
    return base.copyWith({colorScheme: app$.kShrineColorScheme, accentColor: colors.kShrineBrown900, primaryColor: colors.kShrinePink100, buttonColor: colors.kShrinePink100, scaffoldBackgroundColor: colors.kShrineBackgroundWhite, cardColor: colors.kShrineBackgroundWhite, textSelectionColor: colors.kShrinePink100, errorColor: colors.kShrineErrorRed, buttonTheme: C32 || CT.C32, primaryIconTheme: app$._customIconTheme(base.iconTheme), inputDecorationTheme: C43 || CT.C43, textTheme: app$._buildShrineTextTheme(base.textTheme), primaryTextTheme: app$._buildShrineTextTheme(base.primaryTextTheme), accentTextTheme: app$._buildShrineTextTheme(base.accentTextTheme), iconTheme: app$._customIconTheme(base.iconTheme)});
  };
  app$._buildShrineTextTheme = function _buildShrineTextTheme(base) {
    return base.copyWith({headline: base.headline.copyWith({fontWeight: ui.FontWeight.w500}), title: base.title.copyWith({fontSize: 18.0}), caption: base.caption.copyWith({fontWeight: ui.FontWeight.w400, fontSize: 14.0}), body2: base.body2.copyWith({fontWeight: ui.FontWeight.w500, fontSize: 16.0}), button: base.button.copyWith({fontWeight: ui.FontWeight.w500, fontSize: 14.0})}).apply({fontFamily: "Raleway", displayColor: colors.kShrineBrown900, bodyColor: colors.kShrineBrown900});
  };
  dart.defineLazy(app$, {
    /*app$._kShrineTheme*/get _kShrineTheme() {
      return app$._buildShrineTheme();
    },
    /*app$.kShrineColorScheme*/get kShrineColorScheme() {
      return C33 || CT.C33;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/app", {
    "package:flutter_gallery/demo/shrine/app.dart": app$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0BmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASqB,MAAX;AAKL,MAJD,oBAAc,yDACL,oCAEA;IAEX;UAG0B;AACxB,YAAO,iCACE,gBACD,iCACM,+DAEG,4DAAgC,cAAM,AAAY,wKAGjD,gGAEQ,qEAAqC,mJAE/C,iDAIP,AAAc,uCAAyB,AAAY,eAAT,OAAO;IAE5D;;;IAhCoB;;;EAiCtB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sCAEuC;AACrC,QAAI,AAAS,QAAD,UAAS;AACnB,YAAO;;AAGT,UAAO,gDACK,QAAQ,WACT,QAAc,WAAY,gIACjB;EAEtB;oDAI6C;AAC3C,UAAO,AAAS,SAAD,kBAAiB;EAClC;;AAGkB,eAAiB;AACjC,UAAO,AAAK,KAAD,wBACI,sCACA,sCACC,oCACD,gDACY,0CACd,mDACS,mCACR,sEAKM,sBAAiB,AAAK,IAAD,6DAE5B,2BAAsB,AAAK,IAAD,+BACnB,2BAAsB,AAAK,IAAD,qCAC3B,2BAAsB,AAAK,IAAD,8BAChC,sBAAiB,AAAK,IAAD;EAEpC;8DAE0C;AACxC,UAAO,AAAK,AAMV,KANS,qBACC,AAAK,AAAS,IAAV,gCAA0C,6BACjD,AAAK,AAAM,IAAP,2BAA0B,iBAC5B,AAAK,AAAQ,IAAT,+BAAyC,8BAAgB,eAC/D,AAAK,AAAM,IAAP,6BAAuC,8BAAgB,gBAC1D,AAAK,AAAO,IAAR,8BAAwC,8BAAgB,4BAExD,yBACE,mCACH;EAEf;;MA1CgB,kBAAa;YAAG;;MA4Cd,uBAAkB","file":"app.ddc.js"}');
  // Exports:
  return {
    demo__shrine__app: app$
  };
});

//# sourceMappingURL=app.ddc.js.map
