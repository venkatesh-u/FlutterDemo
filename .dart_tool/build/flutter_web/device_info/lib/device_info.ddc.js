define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const device_info = Object.create(dart.library);
  const $_get = dartx._get;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/device_info"
      });
    }
  });
  const _cachedAndroidDeviceInfo = dart.privateName(device_info, "_cachedAndroidDeviceInfo");
  const _cachedIosDeviceInfo = dart.privateName(device_info, "_cachedIosDeviceInfo");
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  device_info.DeviceInfoPlugin = class DeviceInfoPlugin extends core.Object {
    get androidInfo() {
      return async.async(device_info.AndroidDeviceInfo, (function* androidInfo() {
        let t0;
        t0 = this[_cachedAndroidDeviceInfo];
        return t0 == null ? this[_cachedAndroidDeviceInfo] = device_info.AndroidDeviceInfo._fromMap(yield device_info.DeviceInfoPlugin.channel.invokeMapMethod(core.String, dart.dynamic, "getAndroidDeviceInfo")) : t0;
      }).bind(this));
    }
    get iosInfo() {
      return async.async(device_info.IosDeviceInfo, (function* iosInfo() {
        let t0;
        t0 = this[_cachedIosDeviceInfo];
        return t0 == null ? this[_cachedIosDeviceInfo] = device_info.IosDeviceInfo._fromMap(yield device_info.DeviceInfoPlugin.channel.invokeMapMethod(core.String, dart.dynamic, "getIosDeviceInfo")) : t0;
      }).bind(this));
    }
  };
  (device_info.DeviceInfoPlugin.new = function() {
    this[_cachedAndroidDeviceInfo] = null;
    this[_cachedIosDeviceInfo] = null;
    ;
  }).prototype = device_info.DeviceInfoPlugin.prototype;
  dart.addTypeTests(device_info.DeviceInfoPlugin);
  dart.setGetterSignature(device_info.DeviceInfoPlugin, () => ({
    __proto__: dart.getGetters(device_info.DeviceInfoPlugin.__proto__),
    androidInfo: async.Future$(device_info.AndroidDeviceInfo),
    iosInfo: async.Future$(device_info.IosDeviceInfo)
  }));
  dart.setLibraryUri(device_info.DeviceInfoPlugin, "package:device_info/device_info.dart");
  dart.setFieldSignature(device_info.DeviceInfoPlugin, () => ({
    __proto__: dart.getFields(device_info.DeviceInfoPlugin.__proto__),
    [_cachedAndroidDeviceInfo]: dart.fieldType(device_info.AndroidDeviceInfo),
    [_cachedIosDeviceInfo]: dart.fieldType(device_info.IosDeviceInfo)
  }));
  dart.defineLazy(device_info.DeviceInfoPlugin, {
    /*device_info.DeviceInfoPlugin.channel*/get channel() {
      return C0 || CT.C0;
    }
  });
  const AndroidDeviceInfo_version = dart.privateName(device_info, "AndroidDeviceInfo.version");
  const AndroidDeviceInfo_board = dart.privateName(device_info, "AndroidDeviceInfo.board");
  const AndroidDeviceInfo_bootloader = dart.privateName(device_info, "AndroidDeviceInfo.bootloader");
  const AndroidDeviceInfo_brand = dart.privateName(device_info, "AndroidDeviceInfo.brand");
  const AndroidDeviceInfo_device = dart.privateName(device_info, "AndroidDeviceInfo.device");
  const AndroidDeviceInfo_display = dart.privateName(device_info, "AndroidDeviceInfo.display");
  const AndroidDeviceInfo_fingerprint = dart.privateName(device_info, "AndroidDeviceInfo.fingerprint");
  const AndroidDeviceInfo_hardware = dart.privateName(device_info, "AndroidDeviceInfo.hardware");
  const AndroidDeviceInfo_host = dart.privateName(device_info, "AndroidDeviceInfo.host");
  const AndroidDeviceInfo_id = dart.privateName(device_info, "AndroidDeviceInfo.id");
  const AndroidDeviceInfo_manufacturer = dart.privateName(device_info, "AndroidDeviceInfo.manufacturer");
  const AndroidDeviceInfo_model = dart.privateName(device_info, "AndroidDeviceInfo.model");
  const AndroidDeviceInfo_product = dart.privateName(device_info, "AndroidDeviceInfo.product");
  const AndroidDeviceInfo_supported32BitAbis = dart.privateName(device_info, "AndroidDeviceInfo.supported32BitAbis");
  const AndroidDeviceInfo_supported64BitAbis = dart.privateName(device_info, "AndroidDeviceInfo.supported64BitAbis");
  const AndroidDeviceInfo_supportedAbis = dart.privateName(device_info, "AndroidDeviceInfo.supportedAbis");
  const AndroidDeviceInfo_tags = dart.privateName(device_info, "AndroidDeviceInfo.tags");
  const AndroidDeviceInfo_type = dart.privateName(device_info, "AndroidDeviceInfo.type");
  const AndroidDeviceInfo_isPhysicalDevice = dart.privateName(device_info, "AndroidDeviceInfo.isPhysicalDevice");
  const AndroidDeviceInfo_androidId = dart.privateName(device_info, "AndroidDeviceInfo.androidId");
  device_info.AndroidDeviceInfo = class AndroidDeviceInfo extends core.Object {
    get version() {
      return this[version$];
    }
    set version(value) {
      super.version = value;
    }
    get board() {
      return this[board$];
    }
    set board(value) {
      super.board = value;
    }
    get bootloader() {
      return this[bootloader$];
    }
    set bootloader(value) {
      super.bootloader = value;
    }
    get brand() {
      return this[brand$];
    }
    set brand(value) {
      super.brand = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
    get display() {
      return this[display$];
    }
    set display(value) {
      super.display = value;
    }
    get fingerprint() {
      return this[fingerprint$];
    }
    set fingerprint(value) {
      super.fingerprint = value;
    }
    get hardware() {
      return this[hardware$];
    }
    set hardware(value) {
      super.hardware = value;
    }
    get host() {
      return this[host$];
    }
    set host(value) {
      super.host = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get manufacturer() {
      return this[manufacturer$];
    }
    set manufacturer(value) {
      super.manufacturer = value;
    }
    get model() {
      return this[model$];
    }
    set model(value) {
      super.model = value;
    }
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    get supported32BitAbis() {
      return this[supported32BitAbis$];
    }
    set supported32BitAbis(value) {
      super.supported32BitAbis = value;
    }
    get supported64BitAbis() {
      return this[supported64BitAbis$];
    }
    set supported64BitAbis(value) {
      super.supported64BitAbis = value;
    }
    get supportedAbis() {
      return this[supportedAbis$];
    }
    set supportedAbis(value) {
      super.supportedAbis = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      super.tags = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get isPhysicalDevice() {
      return this[isPhysicalDevice$];
    }
    set isPhysicalDevice(value) {
      super.isPhysicalDevice = value;
    }
    get androidId() {
      return this[androidId$];
    }
    set androidId(value) {
      super.androidId = value;
    }
    static _fromMap(map) {
      let t0;
      return new device_info.AndroidDeviceInfo.__({version: device_info.AndroidBuildVersion._fromMap(MapOfString$dynamic()._check((t0 = map[$_get]("version"), t0 == null ? null : dart.dgsend(t0, [core.String, dart.dynamic], 'cast', [])))), board: core.String._check(map[$_get]("board")), bootloader: core.String._check(map[$_get]("bootloader")), brand: core.String._check(map[$_get]("brand")), device: core.String._check(map[$_get]("device")), display: core.String._check(map[$_get]("display")), fingerprint: core.String._check(map[$_get]("fingerprint")), hardware: core.String._check(map[$_get]("hardware")), host: core.String._check(map[$_get]("host")), id: core.String._check(map[$_get]("id")), manufacturer: core.String._check(map[$_get]("manufacturer")), model: core.String._check(map[$_get]("model")), product: core.String._check(map[$_get]("product")), supported32BitAbis: device_info.AndroidDeviceInfo._fromList(map[$_get]("supported32BitAbis")), supported64BitAbis: device_info.AndroidDeviceInfo._fromList(map[$_get]("supported64BitAbis")), supportedAbis: device_info.AndroidDeviceInfo._fromList(map[$_get]("supportedAbis")), tags: core.String._check(map[$_get]("tags")), type: core.String._check(map[$_get]("type")), isPhysicalDevice: core.bool._check(map[$_get]("isPhysicalDevice")), androidId: core.String._check(map[$_get]("androidId"))});
    }
    static _fromList(message) {
      let list = core.List._check(message);
      return ListOfString().from(list);
    }
  };
  (device_info.AndroidDeviceInfo.__ = function(opts) {
    let version = opts && 'version' in opts ? opts.version : null;
    let board = opts && 'board' in opts ? opts.board : null;
    let bootloader = opts && 'bootloader' in opts ? opts.bootloader : null;
    let brand = opts && 'brand' in opts ? opts.brand : null;
    let device = opts && 'device' in opts ? opts.device : null;
    let display = opts && 'display' in opts ? opts.display : null;
    let fingerprint = opts && 'fingerprint' in opts ? opts.fingerprint : null;
    let hardware = opts && 'hardware' in opts ? opts.hardware : null;
    let host = opts && 'host' in opts ? opts.host : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let manufacturer = opts && 'manufacturer' in opts ? opts.manufacturer : null;
    let model = opts && 'model' in opts ? opts.model : null;
    let product = opts && 'product' in opts ? opts.product : null;
    let supported32BitAbis = opts && 'supported32BitAbis' in opts ? opts.supported32BitAbis : null;
    let supported64BitAbis = opts && 'supported64BitAbis' in opts ? opts.supported64BitAbis : null;
    let supportedAbis = opts && 'supportedAbis' in opts ? opts.supportedAbis : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let isPhysicalDevice = opts && 'isPhysicalDevice' in opts ? opts.isPhysicalDevice : null;
    let androidId = opts && 'androidId' in opts ? opts.androidId : null;
    this[version$] = version;
    this[board$] = board;
    this[bootloader$] = bootloader;
    this[brand$] = brand;
    this[device$] = device;
    this[display$] = display;
    this[fingerprint$] = fingerprint;
    this[hardware$] = hardware;
    this[host$] = host;
    this[id$] = id;
    this[manufacturer$] = manufacturer;
    this[model$] = model;
    this[product$] = product;
    this[tags$] = tags;
    this[type$] = type;
    this[isPhysicalDevice$] = isPhysicalDevice;
    this[androidId$] = androidId;
    this[supported32BitAbis$] = ListOfString().unmodifiable(supported32BitAbis);
    this[supported64BitAbis$] = ListOfString().unmodifiable(supported64BitAbis);
    this[supportedAbis$] = ListOfString().unmodifiable(supportedAbis);
    ;
  }).prototype = device_info.AndroidDeviceInfo.prototype;
  dart.addTypeTests(device_info.AndroidDeviceInfo);
  const version$ = AndroidDeviceInfo_version;
  const board$ = AndroidDeviceInfo_board;
  const bootloader$ = AndroidDeviceInfo_bootloader;
  const brand$ = AndroidDeviceInfo_brand;
  const device$ = AndroidDeviceInfo_device;
  const display$ = AndroidDeviceInfo_display;
  const fingerprint$ = AndroidDeviceInfo_fingerprint;
  const hardware$ = AndroidDeviceInfo_hardware;
  const host$ = AndroidDeviceInfo_host;
  const id$ = AndroidDeviceInfo_id;
  const manufacturer$ = AndroidDeviceInfo_manufacturer;
  const model$ = AndroidDeviceInfo_model;
  const product$ = AndroidDeviceInfo_product;
  const supported32BitAbis$ = AndroidDeviceInfo_supported32BitAbis;
  const supported64BitAbis$ = AndroidDeviceInfo_supported64BitAbis;
  const supportedAbis$ = AndroidDeviceInfo_supportedAbis;
  const tags$ = AndroidDeviceInfo_tags;
  const type$ = AndroidDeviceInfo_type;
  const isPhysicalDevice$ = AndroidDeviceInfo_isPhysicalDevice;
  const androidId$ = AndroidDeviceInfo_androidId;
  dart.setLibraryUri(device_info.AndroidDeviceInfo, "package:device_info/device_info.dart");
  dart.setFieldSignature(device_info.AndroidDeviceInfo, () => ({
    __proto__: dart.getFields(device_info.AndroidDeviceInfo.__proto__),
    version: dart.finalFieldType(device_info.AndroidBuildVersion),
    board: dart.finalFieldType(core.String),
    bootloader: dart.finalFieldType(core.String),
    brand: dart.finalFieldType(core.String),
    device: dart.finalFieldType(core.String),
    display: dart.finalFieldType(core.String),
    fingerprint: dart.finalFieldType(core.String),
    hardware: dart.finalFieldType(core.String),
    host: dart.finalFieldType(core.String),
    id: dart.finalFieldType(core.String),
    manufacturer: dart.finalFieldType(core.String),
    model: dart.finalFieldType(core.String),
    product: dart.finalFieldType(core.String),
    supported32BitAbis: dart.finalFieldType(core.List$(core.String)),
    supported64BitAbis: dart.finalFieldType(core.List$(core.String)),
    supportedAbis: dart.finalFieldType(core.List$(core.String)),
    tags: dart.finalFieldType(core.String),
    type: dart.finalFieldType(core.String),
    isPhysicalDevice: dart.finalFieldType(core.bool),
    androidId: dart.finalFieldType(core.String)
  }));
  const AndroidBuildVersion_baseOS = dart.privateName(device_info, "AndroidBuildVersion.baseOS");
  const AndroidBuildVersion_codename = dart.privateName(device_info, "AndroidBuildVersion.codename");
  const AndroidBuildVersion_incremental = dart.privateName(device_info, "AndroidBuildVersion.incremental");
  const AndroidBuildVersion_previewSdkInt = dart.privateName(device_info, "AndroidBuildVersion.previewSdkInt");
  const AndroidBuildVersion_release = dart.privateName(device_info, "AndroidBuildVersion.release");
  const AndroidBuildVersion_sdkInt = dart.privateName(device_info, "AndroidBuildVersion.sdkInt");
  const AndroidBuildVersion_securityPatch = dart.privateName(device_info, "AndroidBuildVersion.securityPatch");
  device_info.AndroidBuildVersion = class AndroidBuildVersion extends core.Object {
    get baseOS() {
      return this[baseOS$];
    }
    set baseOS(value) {
      super.baseOS = value;
    }
    get codename() {
      return this[codename$];
    }
    set codename(value) {
      super.codename = value;
    }
    get incremental() {
      return this[incremental$];
    }
    set incremental(value) {
      super.incremental = value;
    }
    get previewSdkInt() {
      return this[previewSdkInt$];
    }
    set previewSdkInt(value) {
      super.previewSdkInt = value;
    }
    get release() {
      return this[release$];
    }
    set release(value) {
      super.release = value;
    }
    get sdkInt() {
      return this[sdkInt$];
    }
    set sdkInt(value) {
      super.sdkInt = value;
    }
    get securityPatch() {
      return this[securityPatch$];
    }
    set securityPatch(value) {
      super.securityPatch = value;
    }
    static _fromMap(map) {
      return new device_info.AndroidBuildVersion.__({baseOS: core.String._check(map[$_get]("baseOS")), codename: core.String._check(map[$_get]("codename")), incremental: core.String._check(map[$_get]("incremental")), previewSdkInt: core.int._check(map[$_get]("previewSdkInt")), release: core.String._check(map[$_get]("release")), sdkInt: core.int._check(map[$_get]("sdkInt")), securityPatch: core.String._check(map[$_get]("securityPatch"))});
    }
  };
  (device_info.AndroidBuildVersion.__ = function(opts) {
    let baseOS = opts && 'baseOS' in opts ? opts.baseOS : null;
    let codename = opts && 'codename' in opts ? opts.codename : null;
    let incremental = opts && 'incremental' in opts ? opts.incremental : null;
    let previewSdkInt = opts && 'previewSdkInt' in opts ? opts.previewSdkInt : null;
    let release = opts && 'release' in opts ? opts.release : null;
    let sdkInt = opts && 'sdkInt' in opts ? opts.sdkInt : null;
    let securityPatch = opts && 'securityPatch' in opts ? opts.securityPatch : null;
    this[baseOS$] = baseOS;
    this[codename$] = codename;
    this[incremental$] = incremental;
    this[previewSdkInt$] = previewSdkInt;
    this[release$] = release;
    this[sdkInt$] = sdkInt;
    this[securityPatch$] = securityPatch;
    ;
  }).prototype = device_info.AndroidBuildVersion.prototype;
  dart.addTypeTests(device_info.AndroidBuildVersion);
  const baseOS$ = AndroidBuildVersion_baseOS;
  const codename$ = AndroidBuildVersion_codename;
  const incremental$ = AndroidBuildVersion_incremental;
  const previewSdkInt$ = AndroidBuildVersion_previewSdkInt;
  const release$ = AndroidBuildVersion_release;
  const sdkInt$ = AndroidBuildVersion_sdkInt;
  const securityPatch$ = AndroidBuildVersion_securityPatch;
  dart.setLibraryUri(device_info.AndroidBuildVersion, "package:device_info/device_info.dart");
  dart.setFieldSignature(device_info.AndroidBuildVersion, () => ({
    __proto__: dart.getFields(device_info.AndroidBuildVersion.__proto__),
    baseOS: dart.finalFieldType(core.String),
    codename: dart.finalFieldType(core.String),
    incremental: dart.finalFieldType(core.String),
    previewSdkInt: dart.finalFieldType(core.int),
    release: dart.finalFieldType(core.String),
    sdkInt: dart.finalFieldType(core.int),
    securityPatch: dart.finalFieldType(core.String)
  }));
  const IosDeviceInfo_name = dart.privateName(device_info, "IosDeviceInfo.name");
  const IosDeviceInfo_systemName = dart.privateName(device_info, "IosDeviceInfo.systemName");
  const IosDeviceInfo_systemVersion = dart.privateName(device_info, "IosDeviceInfo.systemVersion");
  const IosDeviceInfo_model = dart.privateName(device_info, "IosDeviceInfo.model");
  const IosDeviceInfo_localizedModel = dart.privateName(device_info, "IosDeviceInfo.localizedModel");
  const IosDeviceInfo_identifierForVendor = dart.privateName(device_info, "IosDeviceInfo.identifierForVendor");
  const IosDeviceInfo_isPhysicalDevice = dart.privateName(device_info, "IosDeviceInfo.isPhysicalDevice");
  const IosDeviceInfo_utsname = dart.privateName(device_info, "IosDeviceInfo.utsname");
  device_info.IosDeviceInfo = class IosDeviceInfo extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get systemName() {
      return this[systemName$];
    }
    set systemName(value) {
      super.systemName = value;
    }
    get systemVersion() {
      return this[systemVersion$];
    }
    set systemVersion(value) {
      super.systemVersion = value;
    }
    get model() {
      return this[model$0];
    }
    set model(value) {
      super.model = value;
    }
    get localizedModel() {
      return this[localizedModel$];
    }
    set localizedModel(value) {
      super.localizedModel = value;
    }
    get identifierForVendor() {
      return this[identifierForVendor$];
    }
    set identifierForVendor(value) {
      super.identifierForVendor = value;
    }
    get isPhysicalDevice() {
      return this[isPhysicalDevice$0];
    }
    set isPhysicalDevice(value) {
      super.isPhysicalDevice = value;
    }
    get utsname() {
      return this[utsname$];
    }
    set utsname(value) {
      super.utsname = value;
    }
    static _fromMap(map) {
      let t0;
      return new device_info.IosDeviceInfo.__({name: core.String._check(map[$_get]("name")), systemName: core.String._check(map[$_get]("systemName")), systemVersion: core.String._check(map[$_get]("systemVersion")), model: core.String._check(map[$_get]("model")), localizedModel: core.String._check(map[$_get]("localizedModel")), identifierForVendor: core.String._check(map[$_get]("identifierForVendor")), isPhysicalDevice: dart.equals(map[$_get]("isPhysicalDevice"), "true"), utsname: device_info.IosUtsname._fromMap(MapOfString$dynamic()._check((t0 = map[$_get]("utsname"), t0 == null ? null : dart.dgsend(t0, [core.String, dart.dynamic], 'cast', []))))});
    }
  };
  (device_info.IosDeviceInfo.__ = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let systemName = opts && 'systemName' in opts ? opts.systemName : null;
    let systemVersion = opts && 'systemVersion' in opts ? opts.systemVersion : null;
    let model = opts && 'model' in opts ? opts.model : null;
    let localizedModel = opts && 'localizedModel' in opts ? opts.localizedModel : null;
    let identifierForVendor = opts && 'identifierForVendor' in opts ? opts.identifierForVendor : null;
    let isPhysicalDevice = opts && 'isPhysicalDevice' in opts ? opts.isPhysicalDevice : null;
    let utsname = opts && 'utsname' in opts ? opts.utsname : null;
    this[name$] = name;
    this[systemName$] = systemName;
    this[systemVersion$] = systemVersion;
    this[model$0] = model;
    this[localizedModel$] = localizedModel;
    this[identifierForVendor$] = identifierForVendor;
    this[isPhysicalDevice$0] = isPhysicalDevice;
    this[utsname$] = utsname;
    ;
  }).prototype = device_info.IosDeviceInfo.prototype;
  dart.addTypeTests(device_info.IosDeviceInfo);
  const name$ = IosDeviceInfo_name;
  const systemName$ = IosDeviceInfo_systemName;
  const systemVersion$ = IosDeviceInfo_systemVersion;
  const model$0 = IosDeviceInfo_model;
  const localizedModel$ = IosDeviceInfo_localizedModel;
  const identifierForVendor$ = IosDeviceInfo_identifierForVendor;
  const isPhysicalDevice$0 = IosDeviceInfo_isPhysicalDevice;
  const utsname$ = IosDeviceInfo_utsname;
  dart.setLibraryUri(device_info.IosDeviceInfo, "package:device_info/device_info.dart");
  dart.setFieldSignature(device_info.IosDeviceInfo, () => ({
    __proto__: dart.getFields(device_info.IosDeviceInfo.__proto__),
    name: dart.finalFieldType(core.String),
    systemName: dart.finalFieldType(core.String),
    systemVersion: dart.finalFieldType(core.String),
    model: dart.finalFieldType(core.String),
    localizedModel: dart.finalFieldType(core.String),
    identifierForVendor: dart.finalFieldType(core.String),
    isPhysicalDevice: dart.finalFieldType(core.bool),
    utsname: dart.finalFieldType(device_info.IosUtsname)
  }));
  const IosUtsname_sysname = dart.privateName(device_info, "IosUtsname.sysname");
  const IosUtsname_nodename = dart.privateName(device_info, "IosUtsname.nodename");
  const IosUtsname_release = dart.privateName(device_info, "IosUtsname.release");
  const IosUtsname_version = dart.privateName(device_info, "IosUtsname.version");
  const IosUtsname_machine = dart.privateName(device_info, "IosUtsname.machine");
  device_info.IosUtsname = class IosUtsname extends core.Object {
    get sysname() {
      return this[sysname$];
    }
    set sysname(value) {
      super.sysname = value;
    }
    get nodename() {
      return this[nodename$];
    }
    set nodename(value) {
      super.nodename = value;
    }
    get release() {
      return this[release$0];
    }
    set release(value) {
      super.release = value;
    }
    get version() {
      return this[version$0];
    }
    set version(value) {
      super.version = value;
    }
    get machine() {
      return this[machine$];
    }
    set machine(value) {
      super.machine = value;
    }
    static _fromMap(map) {
      return new device_info.IosUtsname.__({sysname: core.String._check(map[$_get]("sysname")), nodename: core.String._check(map[$_get]("nodename")), release: core.String._check(map[$_get]("release")), version: core.String._check(map[$_get]("version")), machine: core.String._check(map[$_get]("machine"))});
    }
  };
  (device_info.IosUtsname.__ = function(opts) {
    let sysname = opts && 'sysname' in opts ? opts.sysname : null;
    let nodename = opts && 'nodename' in opts ? opts.nodename : null;
    let release = opts && 'release' in opts ? opts.release : null;
    let version = opts && 'version' in opts ? opts.version : null;
    let machine = opts && 'machine' in opts ? opts.machine : null;
    this[sysname$] = sysname;
    this[nodename$] = nodename;
    this[release$0] = release;
    this[version$0] = version;
    this[machine$] = machine;
    ;
  }).prototype = device_info.IosUtsname.prototype;
  dart.addTypeTests(device_info.IosUtsname);
  const sysname$ = IosUtsname_sysname;
  const nodename$ = IosUtsname_nodename;
  const release$0 = IosUtsname_release;
  const version$0 = IosUtsname_version;
  const machine$ = IosUtsname_machine;
  dart.setLibraryUri(device_info.IosUtsname, "package:device_info/device_info.dart");
  dart.setFieldSignature(device_info.IosUtsname, () => ({
    __proto__: dart.getFields(device_info.IosUtsname.__proto__),
    sysname: dart.finalFieldType(core.String),
    nodename: dart.finalFieldType(core.String),
    release: dart.finalFieldType(core.String),
    version: dart.finalFieldType(core.String),
    machine: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/device_info/device_info", {
    "package:device_info/device_info.dart": device_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["device_info.dart"],"names":[],"mappings":"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","file":"device_info.ddc.js"}');
  // Exports:
  return {
    device_info: device_info
  };
});

//# sourceMappingURL=device_info.ddc.js.map
