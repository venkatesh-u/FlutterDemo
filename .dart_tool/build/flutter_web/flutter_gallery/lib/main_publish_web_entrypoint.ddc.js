define(['dart_sdk', 'packages/flutter_gallery/main_publish'], function(dart_sdk, packages__flutter_gallery__main_publish) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const main_publish = packages__flutter_gallery__main_publish.main_publish;
  const main_publish_web_entrypoint = Object.create(dart.library);
  const CT = Object.create(null);
  main_publish_web_entrypoint.main = function main() {
    return async.async(dart.void, function* main() {
      if (true) {
        yield ui.webOnlyInitializePlatform();
      }
      main_publish.main();
    });
  };
  dart.trackLibraries("packages/flutter_gallery/main_publish_web_entrypoint", {
    "package:flutter_gallery/main_publish_web_entrypoint.dart": main_publish_web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main_publish_web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;AAIiB;AACf,UAAI;AACkC,QAApC,MAAM;;AAES,MAAjB;IACF","file":"main_publish_web_entrypoint.ddc.js"}');
  // Exports:
  return {
    main_publish_web_entrypoint: main_publish_web_entrypoint
  };
});

//# sourceMappingURL=main_publish_web_entrypoint.ddc.js.map
