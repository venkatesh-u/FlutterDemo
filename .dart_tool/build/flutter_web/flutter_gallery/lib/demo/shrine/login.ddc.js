define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/demo/shrine/colors'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__demo__shrine__colors) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const back_button = packages__flutter__material.src__material__back_button;
  const material_localizations = packages__flutter__material.src__material__material_localizations;
  const theme = packages__flutter__material.src__material__theme;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const button_bar = packages__flutter__material.src__material__button_bar;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const beveled_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__beveled_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const shape_decoration = packages__flutter__src__painting___network_image_web.src__painting__shape_decoration;
  const colors$ = packages__flutter_gallery__demo__shrine__colors.demo__shrine__colors;
  const login = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: back_button.BackButtonIcon.prototype,
        [Widget_key]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 44,
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
        [_Location_column]: 18,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "brightness",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 24
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 80,
        [SizedBox_width]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 29,
        [_Location_line]: 59,
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
        [_Location_column]: 23,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 63,
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
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 58,
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
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 120,
        [SizedBox_width]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Username",
        [InputDecoration_icon]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 19,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 72,
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
        [_Location_column]: 22,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 12,
        [SizedBox_width]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Password",
        [InputDecoration_icon]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 19,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 85,
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
        [_Location_column]: 22,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 83,
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
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
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
        [Text_data]: "CANCEL"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 7,
        [Radius_x]: 7
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C56 || CT.C56,
        [BorderRadius_bottomLeft]: C56 || CT.C56,
        [BorderRadius_topRight]: C56 || CT.C56,
        [BorderRadius_topLeft]: C56 || CT.C56
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C58 || CT.C58,
        [BorderSide_width]: 0,
        [BorderSide_color]: C59 || CT.C59
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: beveled_rectangle_border.BeveledRectangleBorder.prototype,
        [BeveledRectangleBorder_borderRadius]: C55 || CT.C55,
        [BeveledRectangleBorder_side]: C57 || CT.C57
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
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
        [Text_data]: "NEXT"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 96,
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
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 94,
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
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 55,
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
        [_Location_column]: 16,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 53,
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
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282657581.0
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C92 || CT.C92,
        [BorderSide_width]: 0.5,
        [BorderSide_color]: C93 || CT.C93
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: beveled_rectangle_border.BeveledRectangleBorder.prototype,
        [BeveledRectangleBorder_borderRadius]: C55 || CT.C55,
        [BeveledRectangleBorder_side]: C91 || CT.C91
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: shape_decoration.ShapeDecoration.prototype,
        [ShapeDecoration_shape]: C90 || CT.C90,
        [ShapeDecoration_shadows]: null,
        [ShapeDecoration_image]: null,
        [ShapeDecoration_gradient]: null,
        [ShapeDecoration_color]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/login.dart"
      });
    }
  });
  login.LoginPage = class LoginPage extends framework.StatefulWidget {
    createState() {
      return new login._LoginPageState.new();
    }
  };
  (login.LoginPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login.LoginPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login.LoginPage.prototype;
  dart.addTypeTests(login.LoginPage);
  dart.setMethodSignature(login.LoginPage, () => ({
    __proto__: dart.getMethods(login.LoginPage.__proto__),
    createState: dart.fnType(login._LoginPageState, [])
  }));
  dart.setLibraryUri(login.LoginPage, "package:flutter_gallery/demo/shrine/login.dart");
  const _usernameController = dart.privateName(login, "_usernameController");
  const _passwordController = dart.privateName(login, "_passwordController");
  const Widget_key = dart.privateName(framework, "Widget.key");
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
  let C8;
  let C9;
  let C10;
  let C11;
  let C7;
  let C6;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C12;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C13;
  let C16;
  let C15;
  let C14;
  let C17;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C23;
  let C22;
  let C25;
  const InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  const InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  const InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  const InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  const InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  const InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  const InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  const InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  const InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  const InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  const InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  const InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  const InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  const InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  const InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  const InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  const InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  const InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  const InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  const InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  const InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  const InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  const InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  const InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  const InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  const InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  const InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  const InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  const InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  const InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  const InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  const InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  const InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  const InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  const InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  const InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  const InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  const InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  const InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  let C26;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C36;
  let C35;
  let C39;
  let C40;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C50;
  let C49;
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
  let C53;
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C56;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C55;
  const BeveledRectangleBorder_borderRadius = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.borderRadius");
  const _name = dart.privateName(borders, "_name");
  let C58;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C59;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C57;
  const BeveledRectangleBorder_side = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.side");
  let C54;
  let C62;
  let C63;
  let C64;
  let C61;
  let C60;
  let C65;
  let C68;
  let C69;
  let C70;
  let C71;
  let C67;
  let C66;
  let C74;
  let C73;
  let C72;
  let C77;
  let C76;
  let C75;
  let C80;
  let C81;
  let C79;
  let C78;
  let C84;
  let C83;
  let C82;
  let C87;
  let C88;
  let C86;
  let C85;
  let C92;
  let C93;
  let C91;
  let C90;
  const ShapeDecoration_shape = dart.privateName(shape_decoration, "ShapeDecoration.shape");
  const ShapeDecoration_shadows = dart.privateName(shape_decoration, "ShapeDecoration.shadows");
  const ShapeDecoration_image = dart.privateName(shape_decoration, "ShapeDecoration.image");
  const ShapeDecoration_gradient = dart.privateName(shape_decoration, "ShapeDecoration.gradient");
  const ShapeDecoration_color = dart.privateName(shape_decoration, "ShapeDecoration.color");
  let C89;
  login._LoginPageState = class _LoginPageState extends framework.State$(login.LoginPage) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({elevation: 0.0, backgroundColor: colors.Colors.white, brightness: ui.Brightness.light, leading: new icon_button.IconButton.new({icon: C0 || CT.C0, tooltip: material_localizations.MaterialLocalizations.of(context).backButtonTooltip, onPressed: dart.fn(() => {
              navigator.Navigator.of(context, {rootNavigator: true}).pop(core.Object);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), body: new safe_area.SafeArea.new({child: new scroll_view.ListView.new({padding: C12 || CT.C12, children: JSArrayOfWidget().of([C13 || CT.C13, new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset("packages/shrine_images/diamond.png", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), C17 || CT.C17, new text.Text.new("SHRINE", {style: theme.Theme.of(context).textTheme.headline, $creationLocationd_0dea112b090073317d4: C18 || CT.C18})]), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), C25 || CT.C25, new login.PrimaryColorOverride.new({color: colors$.kShrineBrown900, child: new container.Container.new({decoration: login._LoginPageState._decoration, child: new text_field.TextField.new({controller: this[_usernameController], decoration: C26 || CT.C26, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), C39 || CT.C39, new login.PrimaryColorOverride.new({color: colors$.kShrineBrown900, child: new container.Container.new({decoration: login._LoginPageState._decoration, child: new text_field.TextField.new({controller: this[_passwordController], decoration: C40 || CT.C40, $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new basic.Wrap.new({children: JSArrayOfWidget().of([new button_bar.ButtonBar.new({children: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: C53 || CT.C53, shape: C54 || CT.C54, onPressed: dart.fn(() => {
                          navigator.Navigator.of(context, {rootNavigator: true}).pop(core.Object);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new raised_button.RaisedButton.new({child: C65 || CT.C65, elevation: 8.0, shape: C54 || CT.C54, onPressed: dart.fn(() => {
                          navigator.Navigator.pop(core.Object, context);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C66 || CT.C66})]), $creationLocationd_0dea112b090073317d4: C72 || CT.C72})]), $creationLocationd_0dea112b090073317d4: C75 || CT.C75})]), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C85 || CT.C85});
    }
  };
  (login._LoginPageState.new = function() {
    this[_usernameController] = new editable_text.TextEditingController.new();
    this[_passwordController] = new editable_text.TextEditingController.new();
    login._LoginPageState.__proto__.new.call(this);
    ;
  }).prototype = login._LoginPageState.prototype;
  dart.addTypeTests(login._LoginPageState);
  dart.setMethodSignature(login._LoginPageState, () => ({
    __proto__: dart.getMethods(login._LoginPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login._LoginPageState, "package:flutter_gallery/demo/shrine/login.dart");
  dart.setFieldSignature(login._LoginPageState, () => ({
    __proto__: dart.getFields(login._LoginPageState.__proto__),
    [_usernameController]: dart.finalFieldType(editable_text.TextEditingController),
    [_passwordController]: dart.finalFieldType(editable_text.TextEditingController)
  }));
  dart.defineLazy(login._LoginPageState, {
    /*login._LoginPageState._decoration*/get _decoration() {
      return C89 || CT.C89;
    }
  });
  let C96;
  let C97;
  let C95;
  let C94;
  const PrimaryColorOverride_color = dart.privateName(login, "PrimaryColorOverride.color");
  const PrimaryColorOverride_child = dart.privateName(login, "PrimaryColorOverride.child");
  login.PrimaryColorOverride = class PrimaryColorOverride extends framework.StatelessWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new theme.Theme.new({child: this.child, data: theme.Theme.of(context).copyWith({primaryColor: this.color}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94});
    }
  };
  (login.PrimaryColorOverride.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[child$] = child;
    login.PrimaryColorOverride.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login.PrimaryColorOverride.prototype;
  dart.addTypeTests(login.PrimaryColorOverride);
  const color$ = PrimaryColorOverride_color;
  const child$ = PrimaryColorOverride_child;
  dart.setMethodSignature(login.PrimaryColorOverride, () => ({
    __proto__: dart.getMethods(login.PrimaryColorOverride.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login.PrimaryColorOverride, "package:flutter_gallery/demo/shrine/login.dart");
  dart.setFieldSignature(login.PrimaryColorOverride, () => ({
    __proto__: dart.getFields(login.PrimaryColorOverride.__proto__),
    color: dart.finalFieldType(ui.Color),
    child: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/login", {
    "package:flutter_gallery/demo/shrine/login.dart": login
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AACxB,YAAO,oCACG,mCACK,sBACa,iCACD,8BACd,4DAEwB,AAAY,gDAAT,OAAO,gCAC9B;AAIuC,cAAtC,AAAiC,uBAA9B,OAAO,kBAAiB;kJAIrC,mCACG,gEAEa,qCAEhB,gCACoB,sBACV,sBAAM,+GAEZ,kBACE,kBACa,AAAY,AAAU,eAAnB,OAAO,yJAK7B,2CACS,gCACA,yCACO,0CACL,0CACO,gPAQlB,2CACS,gCACA,yCACO,0CACL,0CACO,iOAOlB,8BACoB,sBAChB,wCACoB,sBAChB,uFAKa;AAKuC,0BAAtC,AAAiC,uBAA9B,OAAO,kBAAiB;mGAGzC,qEAEa,sCAIA;AACa,0BAAZ,qCAAI,OAAO;;IAW3C;;;IAvG4B,4BAAsB;IACtB,4BAAsB;;;EAuGpD;;;;;;;;;;;;;MAtG+B,iCAAW;;;;;;;;;;;IA2G5B;;;;;;IACC;;;;;;UAGa;AACxB,YAAO,6BACE,kBACK,AAAY,eAAT,OAAO,0BAAyB;IAEnD;;;QAXgC;QAAU;QAAY;;IAAZ;IAAY;AAAU,8DAAW,GAAG;;EAAC","file":"login.ddc.js"}');
  // Exports:
  return {
    demo__shrine__login: login
  };
});

//# sourceMappingURL=login.ddc.js.map
