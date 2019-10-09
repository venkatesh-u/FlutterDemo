define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_gallery/gallery/app'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_gallery__gallery__app) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const app = packages__flutter_gallery__gallery__app.gallery__app;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: app.GalleryApp.prototype,
        [Widget_key]: null,
        [GalleryApp_testMode]: false,
        [GalleryApp_onSendFeedback]: null,
        [GalleryApp_enableOffscreenLayersCheckerboard]: true,
        [GalleryApp_enableRasterCacheImagesCheckerboard]: true,
        [GalleryApp_enablePerformanceOverlay]: true,
        [GalleryApp_updateUrlFetcher]: null
      });
    }
  });
  const Widget_key = dart.privateName(framework, "Widget.key");
  const GalleryApp_testMode = dart.privateName(app, "GalleryApp.testMode");
  const GalleryApp_onSendFeedback = dart.privateName(app, "GalleryApp.onSendFeedback");
  const GalleryApp_enableOffscreenLayersCheckerboard = dart.privateName(app, "GalleryApp.enableOffscreenLayersCheckerboard");
  const GalleryApp_enableRasterCacheImagesCheckerboard = dart.privateName(app, "GalleryApp.enableRasterCacheImagesCheckerboard");
  const GalleryApp_enablePerformanceOverlay = dart.privateName(app, "GalleryApp.enablePerformanceOverlay");
  const GalleryApp_updateUrlFetcher = dart.privateName(app, "GalleryApp.updateUrlFetcher");
  let C0;
  main.main = function main$() {
    binding.runApp(C0 || CT.C0);
  };
  dart.trackLibraries("packages/flutter_gallery/main", {
    "package:flutter_gallery/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAY4B,IAA1B;EACF","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
