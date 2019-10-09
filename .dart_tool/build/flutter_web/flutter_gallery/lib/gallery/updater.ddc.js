define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/url_launcher/url_launcher'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__url_launcher__url_launcher) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const dialog = packages__flutter__material.src__material__dialog;
  const theme$ = packages__flutter__material.src__material__theme;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const url_launcher = packages__url_launcher__url_launcher.url_launcher;
  const updater = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 86400000000.0
      });
    },
    get C1() {
      return C1 = dart.const({
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
        [Text_data]: "Update Flutter Gallery?"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 54,
        [_Location_line]: 55,
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
        [_Location_column]: 16,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/updater.dart"
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
        [Text_data]: "NO THANKS"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/updater.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
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
        [Text_data]: "UPDATE"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/updater.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 7,
        [_Location_line]: 56,
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
        [_Location_column]: 12,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/gallery/updater.dart"
      });
    }
  });
  const Updater_updateUrlFetcher = dart.privateName(updater, "Updater.updateUrlFetcher");
  const Updater_child = dart.privateName(updater, "Updater.child");
  updater.Updater = class Updater extends framework.StatefulWidget {
    get updateUrlFetcher() {
      return this[updateUrlFetcher$];
    }
    set updateUrlFetcher(value) {
      super.updateUrlFetcher = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new updater.UpdaterState.new();
    }
  };
  (updater.Updater.new = function(opts) {
    let updateUrlFetcher = opts && 'updateUrlFetcher' in opts ? opts.updateUrlFetcher : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[updateUrlFetcher$] = updateUrlFetcher;
    this[child$] = child;
    if (!(updateUrlFetcher != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/gallery/updater.dart", 15, 14, "updateUrlFetcher != null");
    updater.Updater.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = updater.Updater.prototype;
  dart.addTypeTests(updater.Updater);
  const updateUrlFetcher$ = Updater_updateUrlFetcher;
  const child$ = Updater_child;
  dart.setMethodSignature(updater.Updater, () => ({
    __proto__: dart.getMethods(updater.Updater.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(updater.Updater, "package:flutter_gallery/gallery/updater.dart");
  dart.setFieldSignature(updater.Updater, () => ({
    __proto__: dart.getFields(updater.Updater.__proto__),
    updateUrlFetcher: dart.finalFieldType(dart.fnType(async.Future$(core.String), [])),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _checkForUpdates = dart.privateName(updater, "_checkForUpdates");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const _buildDialog = dart.privateName(updater, "_buildDialog");
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
  let C6;
  let C9;
  let C10;
  let C8;
  let C7;
  let C11;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  updater.UpdaterState = class UpdaterState extends framework.State$(updater.Updater) {
    initState() {
      super.initState();
      this[_checkForUpdates]();
    }
    [_checkForUpdates]() {
      return async.async(dart.void, (function* _checkForUpdates() {
        if (updater.UpdaterState._lastUpdateCheck != null && dart.test(new core.DateTime.now().difference(updater.UpdaterState._lastUpdateCheck)['<'](C0 || CT.C0))) {
          return;
        }
        updater.UpdaterState._lastUpdateCheck = new core.DateTime.now();
        let updateUrl = (yield this.widget.updateUrlFetcher());
        if (updateUrl != null) {
          let wantsUpdate = (yield dialog.showDialog(core.bool, {context: this.context, builder: dart.bind(this, _buildDialog)}));
          if (wantsUpdate != null && dart.test(wantsUpdate)) url_launcher.launch(updateUrl);
        }
      }).bind(this));
    }
    [_buildDialog](context) {
      let theme = theme$.Theme.of(context);
      let dialogTextStyle = theme.textTheme.subhead.copyWith({color: theme.textTheme.caption.color});
      return new dialog.AlertDialog.new({title: C1 || CT.C1, content: new text.Text.new("A newer version is available.", {style: dialogTextStyle, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: C6 || CT.C6, onPressed: dart.fn(() => {
              navigator.Navigator.pop(core.bool, context, false);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new flat_button.FlatButton.new({child: C11 || CT.C11, onPressed: dart.fn(() => {
              navigator.Navigator.pop(core.bool, context, true);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C12 || CT.C12})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
    build(context) {
      return this.widget.child;
    }
  };
  (updater.UpdaterState.new = function() {
    updater.UpdaterState.__proto__.new.call(this);
    ;
  }).prototype = updater.UpdaterState.prototype;
  dart.addTypeTests(updater.UpdaterState);
  dart.setMethodSignature(updater.UpdaterState, () => ({
    __proto__: dart.getMethods(updater.UpdaterState.__proto__),
    [_checkForUpdates]: dart.fnType(async.Future$(dart.void), []),
    [_buildDialog]: dart.fnType(framework.Widget, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(updater.UpdaterState, "package:flutter_gallery/gallery/updater.dart");
  dart.defineLazy(updater.UpdaterState, {
    /*updater.UpdaterState._lastUpdateCheck*/get _lastUpdateCheck() {
      return null;
    },
    set _lastUpdateCheck(_) {}
  });
  dart.trackLibraries("packages/flutter_gallery/gallery/updater", {
    "package:flutter_gallery/gallery/updater.dart": updater
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["updater.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiByB;;;;;;IACV;;;;;;;AAGU;IAAc;;;QARN;QAAuB;QAAW;;IAAlC;IAAuB;UAC3C,gBAAgB,IAAI;AAC3B,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYA,MAAX;AACY,MAAlB;IACF;;AAG6B;AAE3B,YAAI,yCAAoB,kBACX,AAAM,AAA6B,mCAAlB;AAC5B;;AAE+B,QAAjC,wCAA4B;AAEf,yBAAY,MAAM,AAAO;AACtC,YAAI,SAAS,IAAI;AACJ,6BAAc,MAAM,uCAA0B,iCAAkB;AAC3E,cAAI,WAAW,IAAI,kBAAQ,WAAW,GACpC,AAAiB,oBAAV,SAAS;;MAEtB;;mBAEiC;AACf,kBAAc,gBAAG,OAAO;AACxB,4BACZ,AAAM,AAAU,AAAQ,KAAnB,oCAAmC,AAAM,AAAU,AAAQ,KAAnB;AACjD,YAAO,0DAEI,kBAAK,yCAAwC,eAAe,kEACpD,sBACf,+DAEa;AACoB,cAAnB,mCAAI,OAAO,EAAE;qFAG3B,iEAEa;AACmB,cAAlB,mCAAI,OAAO,EAAE;;IAKjC;UAG0B;AAAY,YAAA,AAAO;IAAK;;;;;EACpD;;;;;;;;;;MA3CkB,qCAAgB","file":"updater.ddc.js"}');
  // Exports:
  return {
    gallery__updater: updater
  };
});

//# sourceMappingURL=updater.ddc.js.map
