define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const connectivity = Object.create(dart.library);
  let dynamicToConnectivityResult = () => (dynamicToConnectivityResult = dart.constFn(dart.fnType(connectivity.ConnectivityResult, [dart.dynamic])))();
  let JSArrayOfbool = () => (JSArrayOfbool = dart.constFn(_interceptors.JSArray$(core.bool)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: connectivity.ConnectivityResult.prototype,
        [_name$]: "ConnectivityResult.wifi",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: connectivity.ConnectivityResult.prototype,
        [_name$]: "ConnectivityResult.mobile",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: connectivity.ConnectivityResult.prototype,
        [_name$]: "ConnectivityResult.none",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], connectivity.ConnectivityResult);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C6 || CT.C6
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C5 || CT.C5,
        [MethodChannel_name]: "plugins.flutter.io/connectivity"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: platform_channel.EventChannel.prototype,
        [EventChannel__binaryMessenger]: null,
        [EventChannel_codec]: C5 || CT.C5,
        [EventChannel_name]: "plugins.flutter.io/connectivity_status"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: connectivity.LocationAuthorizationStatus.prototype,
        [_name$]: "LocationAuthorizationStatus.notDetermined",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: connectivity.LocationAuthorizationStatus.prototype,
        [_name$]: "LocationAuthorizationStatus.restricted",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: connectivity.LocationAuthorizationStatus.prototype,
        [_name$]: "LocationAuthorizationStatus.denied",
        index: 2
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: connectivity.LocationAuthorizationStatus.prototype,
        [_name$]: "LocationAuthorizationStatus.authorizedAlways",
        index: 3
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: connectivity.LocationAuthorizationStatus.prototype,
        [_name$]: "LocationAuthorizationStatus.authorizedWhenInUse",
        index: 4
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: connectivity.LocationAuthorizationStatus.prototype,
        [_name$]: "LocationAuthorizationStatus.unknown",
        index: 5
      });
    },
    get C14() {
      return C14 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], connectivity.LocationAuthorizationStatus);
    }
  });
  const _name$ = dart.privateName(connectivity, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  connectivity.ConnectivityResult = class ConnectivityResult extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (connectivity.ConnectivityResult.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = connectivity.ConnectivityResult.prototype;
  dart.addTypeTests(connectivity.ConnectivityResult);
  dart.setLibraryUri(connectivity.ConnectivityResult, "package:connectivity/connectivity.dart");
  dart.setFieldSignature(connectivity.ConnectivityResult, () => ({
    __proto__: dart.getFields(connectivity.ConnectivityResult.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(connectivity.ConnectivityResult, ['toString']);
  connectivity.ConnectivityResult.wifi = C0 || CT.C0;
  connectivity.ConnectivityResult.mobile = C1 || CT.C1;
  connectivity.ConnectivityResult.none = C2 || CT.C2;
  connectivity.ConnectivityResult.values = C3 || CT.C3;
  const _onConnectivityChanged = dart.privateName(connectivity, "_onConnectivityChanged");
  const _convertLocationStatusString = dart.privateName(connectivity, "_convertLocationStatusString");
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C6;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C5;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C4;
  const EventChannel__binaryMessenger = dart.privateName(platform_channel, "EventChannel._binaryMessenger");
  const EventChannel_codec = dart.privateName(platform_channel, "EventChannel.codec");
  const EventChannel_name = dart.privateName(platform_channel, "EventChannel.name");
  let C7;
  connectivity.Connectivity = class Connectivity extends core.Object {
    static new() {
      if (connectivity.Connectivity._singleton == null) {
        connectivity.Connectivity._singleton = new connectivity.Connectivity.__();
      }
      return connectivity.Connectivity._singleton;
    }
    get onConnectivityChanged() {
      if (this[_onConnectivityChanged] == null) {
        this[_onConnectivityChanged] = connectivity.Connectivity.eventChannel.receiveBroadcastStream().map(connectivity.ConnectivityResult, dart.fn(event => connectivity._parseConnectivityResult(core.String._check(event)), dynamicToConnectivityResult()));
      }
      return this[_onConnectivityChanged];
    }
    checkConnectivity() {
      return async.async(connectivity.ConnectivityResult, function* checkConnectivity() {
        let result = (yield connectivity.Connectivity.methodChannel.invokeMethod(core.String, "check"));
        return connectivity._parseConnectivityResult(result);
      });
    }
    getWifiName() {
      return async.async(core.String, function* getWifiName() {
        let wifiName = (yield connectivity.Connectivity.methodChannel.invokeMethod(core.String, "wifiName"));
        if (wifiName === "<unknown ssid>") wifiName = null;
        return wifiName;
      });
    }
    getWifiBSSID() {
      return async.async(core.String, function* getWifiBSSID() {
        return yield connectivity.Connectivity.methodChannel.invokeMethod(core.String, "wifiBSSID");
      });
    }
    getWifiIP() {
      return async.async(core.String, function* getWifiIP() {
        return yield connectivity.Connectivity.methodChannel.invokeMethod(core.String, "wifiIPAddress");
      });
    }
    requestLocationServiceAuthorization(opts) {
      let requestAlwaysLocationUsage = opts && 'requestAlwaysLocationUsage' in opts ? opts.requestAlwaysLocationUsage : false;
      return async.async(connectivity.LocationAuthorizationStatus, (function* requestLocationServiceAuthorization() {
        if (!!dart.test(io.Platform.isAndroid)) dart.assertFailed(null, "org-dartlang-app:///packages/connectivity/connectivity.dart", 149, 12, "ssert(!Platform.isA");
        let result = (yield connectivity.Connectivity.methodChannel.invokeMethod(core.String, "requestLocationServiceAuthorization", JSArrayOfbool().of([requestAlwaysLocationUsage])));
        return this[_convertLocationStatusString](result);
      }).bind(this));
    }
    getLocationServiceAuthorization() {
      return async.async(connectivity.LocationAuthorizationStatus, (function* getLocationServiceAuthorization() {
        if (!!dart.test(io.Platform.isAndroid)) dart.assertFailed(null, "org-dartlang-app:///packages/connectivity/connectivity.dart", 194, 12, " assert(!Platform.i");
        let result = (yield connectivity.Connectivity.methodChannel.invokeMethod(core.String, "getLocationServiceAuthorization"));
        return this[_convertLocationStatusString](result);
      }).bind(this));
    }
    [_convertLocationStatusString](result) {
      switch (result) {
        case "notDetermined":
        {
          return connectivity.LocationAuthorizationStatus.notDetermined;
        }
        case "restricted":
        {
          return connectivity.LocationAuthorizationStatus.restricted;
        }
        case "denied":
        {
          return connectivity.LocationAuthorizationStatus.denied;
        }
        case "authorizedAlways":
        {
          return connectivity.LocationAuthorizationStatus.authorizedAlways;
        }
        case "authorizedWhenInUse":
        {
          return connectivity.LocationAuthorizationStatus.authorizedWhenInUse;
        }
        default:
        {
          return connectivity.LocationAuthorizationStatus.unknown;
        }
      }
    }
  };
  (connectivity.Connectivity.__ = function() {
    this[_onConnectivityChanged] = null;
    ;
  }).prototype = connectivity.Connectivity.prototype;
  dart.addTypeTests(connectivity.Connectivity);
  dart.setMethodSignature(connectivity.Connectivity, () => ({
    __proto__: dart.getMethods(connectivity.Connectivity.__proto__),
    checkConnectivity: dart.fnType(async.Future$(connectivity.ConnectivityResult), []),
    getWifiName: dart.fnType(async.Future$(core.String), []),
    getWifiBSSID: dart.fnType(async.Future$(core.String), []),
    getWifiIP: dart.fnType(async.Future$(core.String), []),
    requestLocationServiceAuthorization: dart.fnType(async.Future$(connectivity.LocationAuthorizationStatus), [], {requestAlwaysLocationUsage: core.bool}),
    getLocationServiceAuthorization: dart.fnType(async.Future$(connectivity.LocationAuthorizationStatus), []),
    [_convertLocationStatusString]: dart.fnType(connectivity.LocationAuthorizationStatus, [core.String])
  }));
  dart.setGetterSignature(connectivity.Connectivity, () => ({
    __proto__: dart.getGetters(connectivity.Connectivity.__proto__),
    onConnectivityChanged: async.Stream$(connectivity.ConnectivityResult)
  }));
  dart.setLibraryUri(connectivity.Connectivity, "package:connectivity/connectivity.dart");
  dart.setFieldSignature(connectivity.Connectivity, () => ({
    __proto__: dart.getFields(connectivity.Connectivity.__proto__),
    [_onConnectivityChanged]: dart.fieldType(async.Stream$(connectivity.ConnectivityResult))
  }));
  dart.defineLazy(connectivity.Connectivity, {
    /*connectivity.Connectivity._singleton*/get _singleton() {
      return null;
    },
    set _singleton(_) {},
    /*connectivity.Connectivity.methodChannel*/get methodChannel() {
      return C4 || CT.C4;
    },
    /*connectivity.Connectivity.eventChannel*/get eventChannel() {
      return C7 || CT.C7;
    }
  });
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  connectivity.LocationAuthorizationStatus = class LocationAuthorizationStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (connectivity.LocationAuthorizationStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = connectivity.LocationAuthorizationStatus.prototype;
  dart.addTypeTests(connectivity.LocationAuthorizationStatus);
  dart.setLibraryUri(connectivity.LocationAuthorizationStatus, "package:connectivity/connectivity.dart");
  dart.setFieldSignature(connectivity.LocationAuthorizationStatus, () => ({
    __proto__: dart.getFields(connectivity.LocationAuthorizationStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(connectivity.LocationAuthorizationStatus, ['toString']);
  connectivity.LocationAuthorizationStatus.notDetermined = C8 || CT.C8;
  connectivity.LocationAuthorizationStatus.restricted = C9 || CT.C9;
  connectivity.LocationAuthorizationStatus.denied = C10 || CT.C10;
  connectivity.LocationAuthorizationStatus.authorizedAlways = C11 || CT.C11;
  connectivity.LocationAuthorizationStatus.authorizedWhenInUse = C12 || CT.C12;
  connectivity.LocationAuthorizationStatus.unknown = C13 || CT.C13;
  connectivity.LocationAuthorizationStatus.values = C14 || CT.C14;
  connectivity._parseConnectivityResult = function _parseConnectivityResult(state) {
    switch (state) {
      case "wifi":
      {
        return connectivity.ConnectivityResult.wifi;
      }
      case "mobile":
      {
        return connectivity.ConnectivityResult.mobile;
      }
      case "none":
      default:
      {
        return connectivity.ConnectivityResult.none;
      }
    }
  };
  dart.trackLibraries("packages/connectivity/connectivity", {
    "package:connectivity/connectivity.dart": connectivity
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["connectivity.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAe6C;;yDAAxC;;;;EAAwC;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUzC,UAAI,AAAW,wCAAG;AACa,QAA7B,uCAA0B;;AAE5B,YAAO;IACT;;AAoBE,UAAI,AAAuB,gCAAG;AAGgC,QAF5D,+BAAyB,AACpB,AACA,qGAAI,QAAS,SAAU,yDAAyB,KAAK;;AAE5D,YAAO;IACT;;AAQ4C;AAC7B,sBAAS,MAAM,AAAc,kEAAqB;AAC/D,cAAO,uCAAyB,MAAM;MACxC;;;AAQ0B;AACjB,wBAAW,MAAM,AAAc,kEAAqB;AAG3D,YAAI,AAAS,QAAD,KAAI,kBAAkB,AAAe,WAAJ;AAC7C,cAAO,SAAQ;MACjB;;;AAQ2B;AACzB,cAAO,OAAM,AAAc,kEAAqB;MAClD;;;AAGwB;AACtB,cAAO,OAAM,AAAc,kEAAqB;MAClD;;;UAmDU;AAD6D;AAGrE,aAAO,WAAU;AACJ,sBAAS,MAAM,AAAc,kEACtC,uCACM,oBAAC,0BAA0B;AACrC,cAAO,oCAA6B,MAAM;MAC5C;;;AAsCmE;AAEjE,aAAO,WAAU;AACJ,sBAAS,MAAM,AACvB,kEAAqB;AAC1B,cAAO,oCAA6B,MAAM;MAC5C;;mCAEgE;AAC9D,cAAQ,MAAM;;;AAEV,gBAAmC;;;;AAEnC,gBAAmC;;;;AAEnC,gBAAmC;;;;AAEnC,gBAAmC;;;;AAEnC,gBAAmC;;;;AAEnC,gBAAmC;;;IAEzC;;;IAnL2B;;EAJX;;;;;;;;;;;;;;;;;;;;;;MAEI,oCAAU;;;;MAKH,uCAAa;;;MAKd,sCAAY;;;;;;;;;;;;;;IA6MxC;;kEAlBK;;;;EAkBL;;;;;;;;;;;;;;;;4EA/BmD;AACjD,YAAQ,KAAK;;;AAET,cAA0B;;;;AAE1B,cAA0B;;;;;AAG1B,cAA0B;;;EAEhC","file":"connectivity.ddc.js"}');
  // Exports:
  return {
    connectivity: connectivity
  };
});

//# sourceMappingURL=connectivity.ddc.js.map
