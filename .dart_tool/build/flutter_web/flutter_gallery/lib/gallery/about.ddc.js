define(['dart_sdk', 'packages/flutter/src/gestures/arena', 'packages/url_launcher/url_launcher', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__gestures__arena, packages__url_launcher__url_launcher, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const url_launcher = packages__url_launcher__url_launcher.url_launcher;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const flutter_logo = packages__flutter__src__painting___network_image_web.src__painting__flutter_logo;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const theme = packages__flutter__material.src__material__theme;
  const about = packages__flutter__material.src__material__about;
  const flutter_logo$ = packages__flutter__material.src__material__flutter_logo;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const about$ = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 750000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: flutter_logo.FlutterLogoStyle.prototype,
        [_name]: "FlutterLogoStyle.markOnly",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4284572001.0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: flutter_logo$.FlutterLogo.prototype,
        [Widget_key]: null,
        [FlutterLogo_curve]: C1 || CT.C1,
        [FlutterLogo_duration]: C2 || CT.C2,
        [FlutterLogo_style]: C3 || CT.C3,
        [FlutterLogo_textColor]: C4 || CT.C4,
        [FlutterLogo_colors]: null,
        [FlutterLogo_size]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 24,
        [EdgeInsets_left]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/about.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 48,
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
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/about.dart"
      });
    }
  });
  about$._LinkTextSpan = class _LinkTextSpan extends text_span.TextSpan {};
  (about$._LinkTextSpan.new = function(opts) {
    let t0, t0$;
    let style = opts && 'style' in opts ? opts.style : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let text = opts && 'text' in opts ? opts.text : null;
    about$._LinkTextSpan.__proto__.new.call(this, {style: style, text: (t0 = text, t0 == null ? url : t0), recognizer: (t0$ = new tap.TapGestureRecognizer.new(), t0$.onTap = dart.fn(() => {
        url_launcher.launch(url, {forceSafariVC: false});
      }, VoidToNull()), t0$)});
    ;
  }).prototype = about$._LinkTextSpan.prototype;
  dart.addTypeTests(about$._LinkTextSpan);
  dart.setLibraryUri(about$._LinkTextSpan, "package:flutter_gallery/gallery/about.dart");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C1;
  const FlutterLogo_curve = dart.privateName(flutter_logo$, "FlutterLogo.curve");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C2;
  const FlutterLogo_duration = dart.privateName(flutter_logo$, "FlutterLogo.duration");
  const _name = dart.privateName(flutter_logo, "_name");
  let C3;
  const FlutterLogo_style = dart.privateName(flutter_logo$, "FlutterLogo.style");
  const Color__value = dart.privateName(ui, "Color._value");
  let C4;
  const FlutterLogo_textColor = dart.privateName(flutter_logo$, "FlutterLogo.textColor");
  const FlutterLogo_colors = dart.privateName(flutter_logo$, "FlutterLogo.colors");
  const FlutterLogo_size = dart.privateName(flutter_logo$, "FlutterLogo.size");
  let C0;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C5;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  about$.showGalleryAboutDialog = function showGalleryAboutDialog(context) {
    let themeData = theme.Theme.of(context);
    let aboutTextStyle = themeData.textTheme.body2;
    let linkStyle = themeData.textTheme.body2.copyWith({color: themeData.accentColor});
    about.showAboutDialog({context: context, applicationVersion: "January 2019", applicationIcon: C0 || CT.C0, applicationLegalese: "© 2019 The Chromium Authors", children: JSArrayOfWidget().of([new basic.Padding.new({padding: C5 || CT.C5, child: new basic.RichText.new({text: new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({style: aboutTextStyle, text: "Flutter is an open-source project to help developers " + "build high-performance, high-fidelity, mobile apps for " + (dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.iOS) ? "multiple platforms" : "iOS and Android") + " " + "from a single codebase. This design lab is a playground " + "and showcase of Flutter's many widgets, behaviors, " + "animations, layouts, and more. Learn more about Flutter at "}), new about$._LinkTextSpan.new({style: linkStyle, url: "https://flutter.dev"}), new text_span.TextSpan.new({style: aboutTextStyle, text: ".\n\nTo see the source code for this app, please visit the "}), new about$._LinkTextSpan.new({style: linkStyle, url: "https://goo.gl/iv1p4G", text: "flutter github repo"}), new text_span.TextSpan.new({style: aboutTextStyle, text: "."})])}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9})])});
  };
  dart.trackLibraries("packages/flutter_gallery/gallery/about", {
    "package:flutter_gallery/gallery/about.dart": about$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["about.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAyB4B;QAAc;QAAY;AAAU,0DACrD,KAAK,SACD,KAAL,IAAI,QAAJ,OAAQ,GAAG,2BACL,oCAAwB,YAAQ;AACT,QAAjC,oBAAO,GAAG,kBAAiB;;;EAE9B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kEAGsC;AACvB,oBAAkB,eAAG,OAAO;AAC5B,yBAAiB,AAAU,AAAU,SAAX;AAC1B,oBAAY,AAAU,AAAU,AAAM,SAAjB,kCAAiC,AAAU,SAAD;AA4C9E,IA1CD,gCACW,OAAO,sBACI,mEAEC,yCACH,sBAChB,oDAES,8BACC,sCACgB,wBAClB,mCACS,cAAc,QACf,0DACA,6DACyB,YAAtB,gCAAwC,+BAAM,uBAAuB,qBAAkB,MAC1F,6DACA,wDACA,iEAER,qCACS,SAAS,OACX,yBAEP,mCACS,cAAc,QACf,iEAER,qCACS,SAAS,OACX,+BACC,yBAER,mCACS,cAAc,QACf;EAQtB","file":"about.ddc.js"}');
  // Exports:
  return {
    gallery__about: about$
  };
});

//# sourceMappingURL=about.ddc.js.map
