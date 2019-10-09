define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const example_code_parser = Object.create(dart.library);
  const $_get = dartx._get;
  const $split = dartx.split;
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  const $trim = dartx.trim;
  const $join = dartx.join;
  const $_set = dartx._set;
  const $trimRight = dartx.trimRight;
  const $add = dartx.add;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  example_code_parser.getExampleCode = function getExampleCode(tag, bundle) {
    return async.async(core.String, function* getExampleCode() {
      if (example_code_parser._exampleCode == null) yield example_code_parser._parseExampleCode(bundle);
      return example_code_parser._exampleCode[$_get](tag);
    });
  };
  example_code_parser._parseExampleCode = function _parseExampleCode(bundle) {
    return async.async(dart.void, function* _parseExampleCode() {
      let t0;
      let code = (t0 = (yield bundle.loadString("lib/gallery/example_code.dart")), t0 == null ? "// lib/gallery/example_code.dart not found\n" : t0);
      example_code_parser._exampleCode = new (IdentityMapOfString$String()).new();
      let lines = code[$split]("\n");
      let codeBlock = null;
      let codeTag = null;
      for (let line of lines) {
        if (codeBlock == null) {
          if (line[$startsWith]("// START ")) {
            codeBlock = JSArrayOfString().of([]);
            codeTag = line[$substring]("// START ".length)[$trim]();
          } else {
          }
        } else {
          if (line[$startsWith]("// END")) {
            example_code_parser._exampleCode[$_set](codeTag, codeBlock[$join]("\n"));
            codeBlock = null;
            codeTag = null;
          } else {
            codeBlock[$add](line[$trimRight]());
          }
        }
      }
    });
  };
  dart.defineLazy(example_code_parser, {
    /*example_code_parser._kStartTag*/get _kStartTag() {
      return "// START ";
    },
    /*example_code_parser._kEndTag*/get _kEndTag() {
      return "// END";
    },
    /*example_code_parser._exampleCode*/get _exampleCode() {
      return null;
    },
    set _exampleCode(_) {}
  });
  dart.trackLibraries("packages/flutter_gallery/gallery/example_code_parser", {
    "package:flutter_gallery/gallery/example_code_parser.dart": example_code_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["example_code_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;+DAaqC,KAAiB;AAAzB;AAC3B,UAAI,AAAa,oCAAG,MAClB,AAA+B,MAAzB,sCAAkB,MAAM;AAChC,YAAO,AAAY,yCAAC,GAAG;IACzB;;qEAE2C;AAAb;;AACf,kBAAgE,MAAzD,MAAM,AAAO,MAAD,YAAY,yCAAxB,OAClB;AAC+B,MAAjC,mCAA+B;AAEZ,kBAAQ,AAAK,IAAD,SAAO;AAEzB;AACN;AAEP,eAAY,OAAQ,MAAK;AACvB,YAAI,AAAU,SAAD,IAAI;AAEf,cAAI,AAAK,IAAD;AAEgB,YAAtB,YAAoB;AAC8B,YAAlD,UAAU,AAAK,AAA6B,IAA9B,aAAsB;;;;AAMtC,cAAI,AAAK,IAAD;AAEsC,YAA5C,AAAY,wCAAC,OAAO,EAAI,AAAU,SAAD,QAAM;AACvB,YAAhB,YAAY;AACE,YAAd,UAAU;;AAKqB,YAA/B,AAAU,SAAD,OAAK,AAAK,IAAD;;;;IAI1B;;;MA9Ca,8BAAU;;;MACV,4BAAQ;;;MAED,gCAAY","file":"example_code_parser.ddc.js"}');
  // Exports:
  return {
    gallery__example_code_parser: example_code_parser
  };
});

//# sourceMappingURL=example_code_parser.ddc.js.map
