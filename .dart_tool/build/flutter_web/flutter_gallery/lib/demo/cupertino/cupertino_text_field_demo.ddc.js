define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/cupertino/action_sheet', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__cupertino__action_sheet, packages__flutter__src__gestures__arena, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const text_field = packages__flutter__src__cupertino__action_sheet.src__cupertino__text_field;
  const colors = packages__flutter__src__cupertino__action_sheet.src__cupertino__colors;
  const button = packages__flutter__src__cupertino__action_sheet.src__cupertino__button;
  const page_scaffold = packages__flutter__src__cupertino__action_sheet.src__cupertino__page_scaffold;
  const nav_bar = packages__flutter__src__cupertino__action_sheet.src__cupertino__nav_bar;
  const scrollbar = packages__flutter__src__cupertino__action_sheet.src__cupertino__scrollbar;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const recognizer = packages__flutter__src__gestures__arena.src__gestures__recognizer;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const cupertino_text_field_demo = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [Padding_padding]: C1 || CT.C1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "cupertino_icons",
        [IconData_fontFamily]: "CupertinoIcons",
        [IconData_codePoint]: 62310
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C3 || CT.C3,
        [Icon_size]: 21,
        [Icon_icon]: C4 || CT.C4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 2,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 2
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minSize",
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "placeholder",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "prefix",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "suffix",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "suffixMode",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 2,
        [Radius_x]: 2
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: editable_text.ToolbarOptions.prototype,
        [ToolbarOptions_selectAll]: true,
        [ToolbarOptions_paste]: true,
        [ToolbarOptions_cut]: true,
        [ToolbarOptions_copy]: true
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name$]: "TextAlign.start",
        index: 4
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$0]: "TextCapitalization.words",
        index: 0
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 0
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: text_field.OverlayVisibilityMode.prototype,
        [_name$1]: "OverlayVisibilityMode.editing",
        index: 1
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: text_field.OverlayVisibilityMode.prototype,
        [_name$1]: "OverlayVisibilityMode.always",
        index: 3
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293256682.0
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "cupertino_icons",
        [IconData_fontFamily]: "CupertinoIcons",
        [IconData_codePoint]: 62590
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C42 || CT.C42,
        [Icon_size]: 28,
        [Icon_icon]: C43 || CT.C43
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 2
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4290953922.0
      });
    },
    get C44() {
      return C44 = dart.const({
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
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C45 || CT.C45,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C46 || CT.C46,
        [TextStyle_inherit]: true
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 6,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 6
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$2]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$3]: "BorderStyle.none",
        index: 0
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C52 || CT.C52,
        [BorderSide_width]: 0,
        [BorderSide_color]: C53 || CT.C53
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$3]: "BorderStyle.solid",
        index: 1
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4285887861.0
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4288256409.0
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color__value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C57 || CT.C57,
        [CupertinoDynamicColor_highContrastElevatedColor]: C58 || CT.C58,
        [CupertinoDynamicColor_darkElevatedColor]: C57 || CT.C57,
        [CupertinoDynamicColor_elevatedColor]: C58 || CT.C58,
        [CupertinoDynamicColor_darkHighContrastColor]: C57 || CT.C57,
        [CupertinoDynamicColor_highContrastColor]: C58 || CT.C58,
        [CupertinoDynamicColor_darkColor]: C57 || CT.C57,
        [CupertinoDynamicColor_color]: C58 || CT.C58,
        [CupertinoDynamicColor__effectiveColor]: C58 || CT.C58
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C55 || CT.C55,
        [BorderSide_width]: 0,
        [BorderSide_color]: C56 || CT.C56
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C51 || CT.C51,
        [Border_bottom]: C54 || CT.C54,
        [Border_right]: C51 || CT.C51,
        [Border_top]: C51 || CT.C51
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C49 || CT.C49,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: C50 || CT.C50,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: text_field.CupertinoTextField.prototype,
        [Widget_key]: null,
        [CupertinoTextField_onTap]: null,
        [CupertinoTextField_scrollPhysics]: null,
        [CupertinoTextField_scrollController]: null,
        [CupertinoTextField_dragStartBehavior]: C32 || CT.C32,
        [CupertinoTextField_enableInteractiveSelection]: true,
        [CupertinoTextField_scrollPadding]: C33 || CT.C33,
        [CupertinoTextField_keyboardAppearance]: null,
        [CupertinoTextField_cursorColor]: null,
        [CupertinoTextField_cursorRadius]: C34 || CT.C34,
        [CupertinoTextField_cursorWidth]: 2,
        [CupertinoTextField_enabled]: null,
        [CupertinoTextField_inputFormatters]: null,
        [CupertinoTextField_onSubmitted]: null,
        [CupertinoTextField_onEditingComplete]: null,
        [CupertinoTextField_onChanged]: null,
        [CupertinoTextField_maxLengthEnforced]: true,
        [CupertinoTextField_maxLength]: null,
        [CupertinoTextField_expands]: false,
        [CupertinoTextField_minLines]: null,
        [CupertinoTextField_maxLines]: 1,
        [CupertinoTextField_autocorrect]: false,
        [CupertinoTextField_obscureText]: false,
        [CupertinoTextField_autofocus]: false,
        [CupertinoTextField_showCursor]: null,
        [CupertinoTextField_readOnly]: false,
        [CupertinoTextField_textAlignVertical]: null,
        [CupertinoTextField_toolbarOptions]: C35 || CT.C35,
        [CupertinoTextField_textAlign]: C36 || CT.C36,
        [CupertinoTextField_strutStyle]: null,
        [CupertinoTextField_style]: null,
        [CupertinoTextField_textCapitalization]: C37 || CT.C37,
        [CupertinoTextField_textInputAction]: null,
        [CupertinoTextField_keyboardType]: C38 || CT.C38,
        [CupertinoTextField_clearButtonMode]: C39 || CT.C39,
        [CupertinoTextField_suffixMode]: C40 || CT.C40,
        [CupertinoTextField_suffix]: null,
        [CupertinoTextField_prefixMode]: C40 || CT.C40,
        [CupertinoTextField_prefix]: C41 || CT.C41,
        [CupertinoTextField_placeholderStyle]: C44 || CT.C44,
        [CupertinoTextField_placeholder]: "Name",
        [CupertinoTextField_padding]: C47 || CT.C47,
        [CupertinoTextField_decoration]: C48 || CT.C48,
        [CupertinoTextField_focusNode]: null,
        [CupertinoTextField_controller]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$0]: "TextCapitalization.none",
        index: 3
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 5
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "cupertino_icons",
        [IconData_fontFamily]: "CupertinoIcons",
        [IconData_codePoint]: 62499
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C42 || CT.C42,
        [Icon_size]: 28,
        [Icon_icon]: C63 || CT.C63
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: text_field.CupertinoTextField.prototype,
        [Widget_key]: null,
        [CupertinoTextField_onTap]: null,
        [CupertinoTextField_scrollPhysics]: null,
        [CupertinoTextField_scrollController]: null,
        [CupertinoTextField_dragStartBehavior]: C32 || CT.C32,
        [CupertinoTextField_enableInteractiveSelection]: true,
        [CupertinoTextField_scrollPadding]: C33 || CT.C33,
        [CupertinoTextField_keyboardAppearance]: null,
        [CupertinoTextField_cursorColor]: null,
        [CupertinoTextField_cursorRadius]: C34 || CT.C34,
        [CupertinoTextField_cursorWidth]: 2,
        [CupertinoTextField_enabled]: null,
        [CupertinoTextField_inputFormatters]: null,
        [CupertinoTextField_onSubmitted]: null,
        [CupertinoTextField_onEditingComplete]: null,
        [CupertinoTextField_onChanged]: null,
        [CupertinoTextField_maxLengthEnforced]: true,
        [CupertinoTextField_maxLength]: null,
        [CupertinoTextField_expands]: false,
        [CupertinoTextField_minLines]: null,
        [CupertinoTextField_maxLines]: 1,
        [CupertinoTextField_autocorrect]: false,
        [CupertinoTextField_obscureText]: false,
        [CupertinoTextField_autofocus]: false,
        [CupertinoTextField_showCursor]: null,
        [CupertinoTextField_readOnly]: false,
        [CupertinoTextField_textAlignVertical]: null,
        [CupertinoTextField_toolbarOptions]: C35 || CT.C35,
        [CupertinoTextField_textAlign]: C36 || CT.C36,
        [CupertinoTextField_strutStyle]: null,
        [CupertinoTextField_style]: null,
        [CupertinoTextField_textCapitalization]: C60 || CT.C60,
        [CupertinoTextField_textInputAction]: null,
        [CupertinoTextField_keyboardType]: C61 || CT.C61,
        [CupertinoTextField_clearButtonMode]: C39 || CT.C39,
        [CupertinoTextField_suffixMode]: C40 || CT.C40,
        [CupertinoTextField_suffix]: null,
        [CupertinoTextField_prefixMode]: C40 || CT.C40,
        [CupertinoTextField_prefix]: C62 || CT.C62,
        [CupertinoTextField_placeholderStyle]: C44 || CT.C44,
        [CupertinoTextField_placeholder]: "Email",
        [CupertinoTextField_padding]: C47 || CT.C47,
        [CupertinoTextField_decoration]: C48 || CT.C48,
        [CupertinoTextField_focusNode]: null,
        [CupertinoTextField_controller]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "cupertino_icons",
        [IconData_fontFamily]: "CupertinoIcons",
        [IconData_codePoint]: 62550
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C42 || CT.C42,
        [Icon_size]: 28,
        [Icon_icon]: C65 || CT.C65
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "prefix",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clearButtonMode",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "placeholder",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: editable_text.ToolbarOptions.prototype,
        [ToolbarOptions_selectAll]: true,
        [ToolbarOptions_paste]: true,
        [ToolbarOptions_cut]: false,
        [ToolbarOptions_copy]: false
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: false,
        [TextInputType_signed]: false,
        [TextInputType_index]: 2
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "cupertino_icons",
        [IconData_fontFamily]: "CupertinoIcons",
        [IconData_codePoint]: 62665
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C42 || CT.C42,
        [Icon_size]: 28,
        [Icon_icon]: C79 || CT.C79
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: text_field.CupertinoTextField.prototype,
        [Widget_key]: null,
        [CupertinoTextField_onTap]: null,
        [CupertinoTextField_scrollPhysics]: null,
        [CupertinoTextField_scrollController]: null,
        [CupertinoTextField_dragStartBehavior]: C32 || CT.C32,
        [CupertinoTextField_enableInteractiveSelection]: true,
        [CupertinoTextField_scrollPadding]: C33 || CT.C33,
        [CupertinoTextField_keyboardAppearance]: null,
        [CupertinoTextField_cursorColor]: null,
        [CupertinoTextField_cursorRadius]: C34 || CT.C34,
        [CupertinoTextField_cursorWidth]: 2,
        [CupertinoTextField_enabled]: null,
        [CupertinoTextField_inputFormatters]: null,
        [CupertinoTextField_onSubmitted]: null,
        [CupertinoTextField_onEditingComplete]: null,
        [CupertinoTextField_onChanged]: null,
        [CupertinoTextField_maxLengthEnforced]: true,
        [CupertinoTextField_maxLength]: null,
        [CupertinoTextField_expands]: false,
        [CupertinoTextField_minLines]: null,
        [CupertinoTextField_maxLines]: 1,
        [CupertinoTextField_autocorrect]: false,
        [CupertinoTextField_obscureText]: true,
        [CupertinoTextField_autofocus]: false,
        [CupertinoTextField_showCursor]: null,
        [CupertinoTextField_readOnly]: false,
        [CupertinoTextField_textAlignVertical]: null,
        [CupertinoTextField_toolbarOptions]: C76 || CT.C76,
        [CupertinoTextField_textAlign]: C36 || CT.C36,
        [CupertinoTextField_strutStyle]: null,
        [CupertinoTextField_style]: null,
        [CupertinoTextField_textCapitalization]: C60 || CT.C60,
        [CupertinoTextField_textInputAction]: null,
        [CupertinoTextField_keyboardType]: C77 || CT.C77,
        [CupertinoTextField_clearButtonMode]: C39 || CT.C39,
        [CupertinoTextField_suffixMode]: C40 || CT.C40,
        [CupertinoTextField_suffix]: null,
        [CupertinoTextField_prefixMode]: C40 || CT.C40,
        [CupertinoTextField_prefix]: C78 || CT.C78,
        [CupertinoTextField_placeholderStyle]: C44 || CT.C44,
        [CupertinoTextField_placeholder]: "Create a PIN",
        [CupertinoTextField_padding]: C47 || CT.C47,
        [CupertinoTextField_decoration]: C48 || CT.C48,
        [CupertinoTextField_focusNode]: null,
        [CupertinoTextField_controller]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "cupertino_icons",
        [IconData_fontFamily]: "CupertinoIcons",
        [IconData_codePoint]: 62607
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C42 || CT.C42,
        [Icon_size]: 28,
        [Icon_icon]: C81 || CT.C81
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "prefix",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 7,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
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
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C53 || CT.C53,
        [TextStyle_inherit]: false
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: nav_bar._HeroTag.prototype,
        [_HeroTag_navigator]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 1291845632
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C55 || CT.C55,
        [BorderSide_width]: 0,
        [BorderSide_color]: C94 || CT.C94
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C51 || CT.C51,
        [Border_bottom]: C93 || CT.C93,
        [Border_right]: C51 || CT.C51,
        [Border_top]: C51 || CT.C51
      });
    },
    get C95() {
      return C95 = dart.const({
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
        [Text_data]: "Text Fields"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: nav_bar.CupertinoNavigationBar.prototype,
        [Widget_key]: null,
        [CupertinoNavigationBar_heroTag]: C91 || CT.C91,
        [CupertinoNavigationBar_transitionBetweenRoutes]: true,
        [CupertinoNavigationBar_actionsForegroundColor]: null,
        [CupertinoNavigationBar_border]: C92 || CT.C92,
        [CupertinoNavigationBar_padding]: null,
        [CupertinoNavigationBar_backgroundColor]: null,
        [CupertinoNavigationBar_trailing]: null,
        [CupertinoNavigationBar_middle]: C95 || CT.C95,
        [CupertinoNavigationBar_previousPageTitle]: "Cupertino",
        [CupertinoNavigationBar_automaticallyImplyMiddle]: true,
        [CupertinoNavigationBar_automaticallyImplyLeading]: true,
        [CupertinoNavigationBar_leading]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 32,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 32,
        [EdgeInsets_left]: 16
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "navigationBar",
        [_Location_column]: 9,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart"
      });
    }
  });
  cupertino_text_field_demo.CupertinoTextFieldDemo = class CupertinoTextFieldDemo extends framework.StatefulWidget {
    createState() {
      return new cupertino_text_field_demo._CupertinoTextFieldDemoState.new();
    }
  };
  (cupertino_text_field_demo.CupertinoTextFieldDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    cupertino_text_field_demo.CupertinoTextFieldDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cupertino_text_field_demo.CupertinoTextFieldDemo.prototype;
  dart.addTypeTests(cupertino_text_field_demo.CupertinoTextFieldDemo);
  dart.setMethodSignature(cupertino_text_field_demo.CupertinoTextFieldDemo, () => ({
    __proto__: dart.getMethods(cupertino_text_field_demo.CupertinoTextFieldDemo.__proto__),
    createState: dart.fnType(cupertino_text_field_demo._CupertinoTextFieldDemoState, [])
  }));
  dart.setLibraryUri(cupertino_text_field_demo.CupertinoTextFieldDemo, "package:flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart");
  dart.defineLazy(cupertino_text_field_demo.CupertinoTextFieldDemo, {
    /*cupertino_text_field_demo.CupertinoTextFieldDemo.routeName*/get routeName() {
      return "/cupertino/text_fields";
    }
  });
  const _chatTextController = dart.privateName(cupertino_text_field_demo, "_chatTextController");
  const _locationTextController = dart.privateName(cupertino_text_field_demo, "_locationTextController");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C1;
  const Padding_padding = dart.privateName(basic, "Padding.padding");
  let C0;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Color__value = dart.privateName(ui, "Color._value");
  let C3;
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C4;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C2;
  let C5;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C7;
  let C6;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C19;
  let C18;
  const _buildChatTextField = dart.privateName(cupertino_text_field_demo, "_buildChatTextField");
  const CupertinoTextField_onTap = dart.privateName(text_field, "CupertinoTextField.onTap");
  const CupertinoTextField_scrollPhysics = dart.privateName(text_field, "CupertinoTextField.scrollPhysics");
  const CupertinoTextField_scrollController = dart.privateName(text_field, "CupertinoTextField.scrollController");
  const _name = dart.privateName(recognizer, "_name");
  let C32;
  const CupertinoTextField_dragStartBehavior = dart.privateName(text_field, "CupertinoTextField.dragStartBehavior");
  const CupertinoTextField_enableInteractiveSelection = dart.privateName(text_field, "CupertinoTextField.enableInteractiveSelection");
  let C33;
  const CupertinoTextField_scrollPadding = dart.privateName(text_field, "CupertinoTextField.scrollPadding");
  const CupertinoTextField_keyboardAppearance = dart.privateName(text_field, "CupertinoTextField.keyboardAppearance");
  const CupertinoTextField_cursorColor = dart.privateName(text_field, "CupertinoTextField.cursorColor");
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C34;
  const CupertinoTextField_cursorRadius = dart.privateName(text_field, "CupertinoTextField.cursorRadius");
  const CupertinoTextField_cursorWidth = dart.privateName(text_field, "CupertinoTextField.cursorWidth");
  const CupertinoTextField_enabled = dart.privateName(text_field, "CupertinoTextField.enabled");
  const CupertinoTextField_inputFormatters = dart.privateName(text_field, "CupertinoTextField.inputFormatters");
  const CupertinoTextField_onSubmitted = dart.privateName(text_field, "CupertinoTextField.onSubmitted");
  const CupertinoTextField_onEditingComplete = dart.privateName(text_field, "CupertinoTextField.onEditingComplete");
  const CupertinoTextField_onChanged = dart.privateName(text_field, "CupertinoTextField.onChanged");
  const CupertinoTextField_maxLengthEnforced = dart.privateName(text_field, "CupertinoTextField.maxLengthEnforced");
  const CupertinoTextField_maxLength = dart.privateName(text_field, "CupertinoTextField.maxLength");
  const CupertinoTextField_expands = dart.privateName(text_field, "CupertinoTextField.expands");
  const CupertinoTextField_minLines = dart.privateName(text_field, "CupertinoTextField.minLines");
  const CupertinoTextField_maxLines = dart.privateName(text_field, "CupertinoTextField.maxLines");
  const CupertinoTextField_autocorrect = dart.privateName(text_field, "CupertinoTextField.autocorrect");
  const CupertinoTextField_obscureText = dart.privateName(text_field, "CupertinoTextField.obscureText");
  const CupertinoTextField_autofocus = dart.privateName(text_field, "CupertinoTextField.autofocus");
  const CupertinoTextField_showCursor = dart.privateName(text_field, "CupertinoTextField.showCursor");
  const CupertinoTextField_readOnly = dart.privateName(text_field, "CupertinoTextField.readOnly");
  const CupertinoTextField_textAlignVertical = dart.privateName(text_field, "CupertinoTextField.textAlignVertical");
  const ToolbarOptions_selectAll = dart.privateName(editable_text, "ToolbarOptions.selectAll");
  const ToolbarOptions_paste = dart.privateName(editable_text, "ToolbarOptions.paste");
  const ToolbarOptions_cut = dart.privateName(editable_text, "ToolbarOptions.cut");
  const ToolbarOptions_copy = dart.privateName(editable_text, "ToolbarOptions.copy");
  let C35;
  const CupertinoTextField_toolbarOptions = dart.privateName(text_field, "CupertinoTextField.toolbarOptions");
  const _name$ = dart.privateName(ui, "_name");
  let C36;
  const CupertinoTextField_textAlign = dart.privateName(text_field, "CupertinoTextField.textAlign");
  const CupertinoTextField_strutStyle = dart.privateName(text_field, "CupertinoTextField.strutStyle");
  const CupertinoTextField_style = dart.privateName(text_field, "CupertinoTextField.style");
  const _name$0 = dart.privateName(text_input, "_name");
  let C37;
  const CupertinoTextField_textCapitalization = dart.privateName(text_field, "CupertinoTextField.textCapitalization");
  const CupertinoTextField_textInputAction = dart.privateName(text_field, "CupertinoTextField.textInputAction");
  const TextInputType_decimal = dart.privateName(text_input, "TextInputType.decimal");
  const TextInputType_signed = dart.privateName(text_input, "TextInputType.signed");
  const TextInputType_index = dart.privateName(text_input, "TextInputType.index");
  let C38;
  const CupertinoTextField_keyboardType = dart.privateName(text_field, "CupertinoTextField.keyboardType");
  const _name$1 = dart.privateName(text_field, "_name");
  let C39;
  const CupertinoTextField_clearButtonMode = dart.privateName(text_field, "CupertinoTextField.clearButtonMode");
  let C40;
  const CupertinoTextField_suffixMode = dart.privateName(text_field, "CupertinoTextField.suffixMode");
  const CupertinoTextField_suffix = dart.privateName(text_field, "CupertinoTextField.suffix");
  const CupertinoTextField_prefixMode = dart.privateName(text_field, "CupertinoTextField.prefixMode");
  let C42;
  let C43;
  let C41;
  const CupertinoTextField_prefix = dart.privateName(text_field, "CupertinoTextField.prefix");
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
  let C45;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  let C46;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C44;
  const CupertinoTextField_placeholderStyle = dart.privateName(text_field, "CupertinoTextField.placeholderStyle");
  const CupertinoTextField_placeholder = dart.privateName(text_field, "CupertinoTextField.placeholder");
  let C47;
  const CupertinoTextField_padding = dart.privateName(text_field, "CupertinoTextField.padding");
  const _name$2 = dart.privateName(box_border, "_name");
  let C49;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const _name$3 = dart.privateName(borders, "_name");
  let C52;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  let C53;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C51;
  const Border_left = dart.privateName(box_border, "Border.left");
  let C55;
  let C57;
  const CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  let C58;
  const CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastElevatedColor");
  const CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkElevatedColor");
  const CupertinoDynamicColor_elevatedColor = dart.privateName(colors, "CupertinoDynamicColor.elevatedColor");
  const CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastColor");
  const CupertinoDynamicColor_highContrastColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastColor");
  const CupertinoDynamicColor_darkColor = dart.privateName(colors, "CupertinoDynamicColor.darkColor");
  const CupertinoDynamicColor_color = dart.privateName(colors, "CupertinoDynamicColor.color");
  const CupertinoDynamicColor__effectiveColor = dart.privateName(colors, "CupertinoDynamicColor._effectiveColor");
  let C56;
  let C54;
  const Border_bottom = dart.privateName(box_border, "Border.bottom");
  const Border_right = dart.privateName(box_border, "Border.right");
  const Border_top = dart.privateName(box_border, "Border.top");
  let C50;
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C48;
  const CupertinoTextField_decoration = dart.privateName(text_field, "CupertinoTextField.decoration");
  const CupertinoTextField_focusNode = dart.privateName(text_field, "CupertinoTextField.focusNode");
  const CupertinoTextField_controller = dart.privateName(text_field, "CupertinoTextField.controller");
  let C31;
  const _buildNameField = dart.privateName(cupertino_text_field_demo, "_buildNameField");
  let C60;
  let C61;
  let C63;
  let C62;
  let C59;
  const _buildEmailField = dart.privateName(cupertino_text_field_demo, "_buildEmailField");
  let C65;
  let C64;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C74;
  let C67;
  let C66;
  const _buildLocationField = dart.privateName(cupertino_text_field_demo, "_buildLocationField");
  let C76;
  let C77;
  let C79;
  let C78;
  let C75;
  const _buildPinField = dart.privateName(cupertino_text_field_demo, "_buildPinField");
  let C81;
  let C80;
  let C84;
  let C85;
  let C86;
  let C87;
  let C88;
  let C83;
  let C82;
  const _buildTagsField = dart.privateName(cupertino_text_field_demo, "_buildTagsField");
  let C89;
  const _HeroTag_navigator = dart.privateName(nav_bar, "_HeroTag.navigator");
  let C91;
  const CupertinoNavigationBar_heroTag = dart.privateName(nav_bar, "CupertinoNavigationBar.heroTag");
  const CupertinoNavigationBar_transitionBetweenRoutes = dart.privateName(nav_bar, "CupertinoNavigationBar.transitionBetweenRoutes");
  const CupertinoNavigationBar_actionsForegroundColor = dart.privateName(nav_bar, "CupertinoNavigationBar.actionsForegroundColor");
  let C94;
  let C93;
  let C92;
  const CupertinoNavigationBar_border = dart.privateName(nav_bar, "CupertinoNavigationBar.border");
  const CupertinoNavigationBar_padding = dart.privateName(nav_bar, "CupertinoNavigationBar.padding");
  const CupertinoNavigationBar_backgroundColor = dart.privateName(nav_bar, "CupertinoNavigationBar.backgroundColor");
  const CupertinoNavigationBar_trailing = dart.privateName(nav_bar, "CupertinoNavigationBar.trailing");
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
  let C95;
  const CupertinoNavigationBar_middle = dart.privateName(nav_bar, "CupertinoNavigationBar.middle");
  const CupertinoNavigationBar_previousPageTitle = dart.privateName(nav_bar, "CupertinoNavigationBar.previousPageTitle");
  const CupertinoNavigationBar_automaticallyImplyMiddle = dart.privateName(nav_bar, "CupertinoNavigationBar.automaticallyImplyMiddle");
  const CupertinoNavigationBar_automaticallyImplyLeading = dart.privateName(nav_bar, "CupertinoNavigationBar.automaticallyImplyLeading");
  const CupertinoNavigationBar_leading = dart.privateName(nav_bar, "CupertinoNavigationBar.leading");
  let C90;
  let C96;
  let C99;
  let C98;
  let C97;
  let C102;
  let C103;
  let C101;
  let C100;
  let C106;
  let C107;
  let C105;
  let C104;
  let C110;
  let C109;
  let C108;
  let C113;
  let C112;
  let C111;
  let C116;
  let C117;
  let C115;
  let C114;
  let C120;
  let C121;
  let C119;
  let C118;
  cupertino_text_field_demo._CupertinoTextFieldDemoState = class _CupertinoTextFieldDemoState extends framework.State$(cupertino_text_field_demo.CupertinoTextFieldDemo) {
    initState() {
      super.initState();
      this[_chatTextController] = new editable_text.TextEditingController.new();
      this[_locationTextController] = new editable_text.TextEditingController.new({text: "Montreal, Canada"});
    }
    [_buildChatTextField]() {
      return new text_field.CupertinoTextField.new({controller: this[_chatTextController], textCapitalization: text_input.TextCapitalization.sentences, placeholder: "Text Message", decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 0.0, color: colors.CupertinoColors.inactiveGray}), borderRadius: new border_radius.BorderRadius.circular(15.0)}), maxLines: null, keyboardType: text_input.TextInputType.multiline, prefix: C0 || CT.C0, suffix: new basic.Padding.new({padding: C1 || CT.C1, child: new button.CupertinoButton.new({color: colors.CupertinoColors.activeGreen, minSize: 0.0, child: C2 || CT.C2, padding: C5 || CT.C5, borderRadius: new border_radius.BorderRadius.circular(15.0), onPressed: dart.fn(() => this.setState(dart.fn(() => this[_chatTextController].clear(), VoidTovoid())), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), autofocus: true, suffixMode: text_field.OverlayVisibilityMode.editing, onSubmitted: dart.fn(text => this.setState(dart.fn(() => this[_chatTextController].clear(), VoidTovoid())), StringTovoid()), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
    }
    [_buildNameField]() {
      return C31 || CT.C31;
    }
    [_buildEmailField]() {
      return C59 || CT.C59;
    }
    [_buildLocationField]() {
      return new text_field.CupertinoTextField.new({controller: this[_locationTextController], prefix: C64 || CT.C64, padding: C47 || CT.C47, clearButtonMode: text_field.OverlayVisibilityMode.editing, textCapitalization: text_input.TextCapitalization.words, decoration: C48 || CT.C48, placeholder: "Location", $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
    }
    [_buildPinField]() {
      return C75 || CT.C75;
    }
    [_buildTagsField]() {
      return new text_field.CupertinoTextField.new({controller: new editable_text.TextEditingController.new({text: "colleague, reading club"}), prefix: C80 || CT.C80, enabled: false, padding: C47 || CT.C47, decoration: C48 || CT.C48, $creationLocationd_0dea112b090073317d4: C82 || CT.C82});
    }
    build(context) {
      return new text.DefaultTextStyle.new({style: C89 || CT.C89, child: new page_scaffold.CupertinoPageScaffold.new({navigationBar: C90 || CT.C90, child: new scrollbar.CupertinoScrollbar.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C96 || CT.C96, child: new basic.Column.new({children: JSArrayOfWidget().of([this[_buildNameField](), this[_buildEmailField](), this[_buildLocationField](), this[_buildPinField](), this[_buildTagsField]()]), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), new basic.Padding.new({padding: C96 || CT.C96, child: this[_buildChatTextField](), $creationLocationd_0dea112b090073317d4: C104 || CT.C104})]), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118});
    }
  };
  (cupertino_text_field_demo._CupertinoTextFieldDemoState.new = function() {
    this[_chatTextController] = null;
    this[_locationTextController] = null;
    cupertino_text_field_demo._CupertinoTextFieldDemoState.__proto__.new.call(this);
    ;
  }).prototype = cupertino_text_field_demo._CupertinoTextFieldDemoState.prototype;
  dart.addTypeTests(cupertino_text_field_demo._CupertinoTextFieldDemoState);
  dart.setMethodSignature(cupertino_text_field_demo._CupertinoTextFieldDemoState, () => ({
    __proto__: dart.getMethods(cupertino_text_field_demo._CupertinoTextFieldDemoState.__proto__),
    [_buildChatTextField]: dart.fnType(framework.Widget, []),
    [_buildNameField]: dart.fnType(framework.Widget, []),
    [_buildEmailField]: dart.fnType(framework.Widget, []),
    [_buildLocationField]: dart.fnType(framework.Widget, []),
    [_buildPinField]: dart.fnType(framework.Widget, []),
    [_buildTagsField]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(cupertino_text_field_demo._CupertinoTextFieldDemoState, "package:flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart");
  dart.setFieldSignature(cupertino_text_field_demo._CupertinoTextFieldDemoState, () => ({
    __proto__: dart.getFields(cupertino_text_field_demo._CupertinoTextFieldDemoState.__proto__),
    [_chatTextController]: dart.fieldType(editable_text.TextEditingController),
    [_locationTextController]: dart.fieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/cupertino/cupertino_text_field_demo", {
    "package:flutter_gallery/demo/cupertino/cupertino_text_field_demo.dart": cupertino_text_field_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cupertino_text_field_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWI,YAAO;IACT;;;;;;EACF;;;;;;;;MANsB,0DAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcV,MAAX;AACuC,MAA7C,4BAAsB;AACmD,MAAzE,gCAA0B,mDAA4B;IACxD;;AAGE,YAAO,oDACO,+CAC2B,sDAC1B,4BACD,8CACK,8BACN,YACgB,qDAEE,wCAAS,mBAE5B,oBACkB,iEAEpB,oDAEC,uCACkB,6CACd,6DAOkB,wCAAS,kBACzB,cAAK,cAAS,cAAK,AAAoB,6LAG3C,kBACuB,uDACrB,QAAQ,QAAQ,cAAS,cAAK,AAAoB;IAEnE;;AAGE;IAeF;;AAGE;IAeF;;AAGE,YAAO,oDACO,+FAO2B,8DACA,6EAI1B;IAEjB;;AAGE;IAgBF;;AAGE,YAAO,oDACO,mDAA4B,6DAM/B;IAMb;UAG0B;AACxB,YAAO,6DAOE,kFAQE,6CACE,wCACa,sBAChB,sDAES,gCACa,sBAChB,yBACA,0BACA,6BACA,wBACA,+IAIN,sDAES;IAOrB;;;IAhLsB;IACA;;;EAgLxB","file":"cupertino_text_field_demo.ddc.js"}');
  // Exports:
  return {
    demo__cupertino__cupertino_text_field_demo: cupertino_text_field_demo
  };
});

//# sourceMappingURL=cupertino_text_field_demo.ddc.js.map
