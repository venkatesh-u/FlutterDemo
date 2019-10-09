define(['dart_sdk', 'packages/flutter_gallery/demo/shrine/app', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter_gallery__demo__shrine__app, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter_gallery__demo__shrine__app.demo__shrine__app;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const shrine_demo = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine_demo.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  shrine_demo.ShrineDemo = class ShrineDemo extends framework.StatelessWidget {
    build(context) {
      return new app.ShrineApp.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (shrine_demo.ShrineDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    shrine_demo.ShrineDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_demo.ShrineDemo.prototype;
  dart.addTypeTests(shrine_demo.ShrineDemo);
  dart.setMethodSignature(shrine_demo.ShrineDemo, () => ({
    __proto__: dart.getMethods(shrine_demo.ShrineDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_demo.ShrineDemo, "package:flutter_gallery/demo/shrine_demo.dart");
  dart.defineLazy(shrine_demo.ShrineDemo, {
    /*shrine_demo.ShrineDemo.routeName*/get routeName() {
      return "/shrine";
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/shrine_demo", {
    "package:flutter_gallery/demo/shrine_demo.dart": shrine_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shrine_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AAAY;IAAW;;;QAL1B;;AAAS,0DAAW,GAAG;;EAAC;;;;;;;;MAE3B,gCAAS","file":"shrine_demo.ddc.js"}');
  // Exports:
  return {
    demo__shrine_demo: shrine_demo
  };
});

//# sourceMappingURL=shrine_demo.ddc.js.map
