define(['dart_sdk', 'packages/vector_math/vector_math', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__vector_math__vector_math, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vector_math = packages__vector_math__vector_math.vector_math;
  const velocity_tracker = packages__flutter__src__gestures__arena.src__gestures__velocity_tracker;
  const transformations_demo_inertial_motion = Object.create(dart.library);
  const $toInt = dartx.toInt;
  const $abs = dartx.abs;
  const CT = Object.create(null);
  const _initialVelocity = dart.privateName(transformations_demo_inertial_motion, "_initialVelocity");
  const _initialPosition = dart.privateName(transformations_demo_inertial_motion, "_initialPosition");
  const _getPositionAt = dart.privateName(transformations_demo_inertial_motion, "_getPositionAt");
  const _acceleration = dart.privateName(transformations_demo_inertial_motion, "_acceleration");
  const _getPosition = dart.privateName(transformations_demo_inertial_motion, "_getPosition");
  const InertialMotion__initialVelocity = dart.privateName(transformations_demo_inertial_motion, "InertialMotion._initialVelocity");
  const InertialMotion__initialPosition = dart.privateName(transformations_demo_inertial_motion, "InertialMotion._initialPosition");
  transformations_demo_inertial_motion.InertialMotion = class InertialMotion extends core.Object {
    get [_initialVelocity]() {
      return this[_initialVelocity$];
    }
    set [_initialVelocity](value) {
      super[_initialVelocity] = value;
    }
    get [_initialPosition]() {
      return this[_initialPosition$];
    }
    set [_initialPosition](value) {
      super[_initialPosition] = value;
    }
    get finalPosition() {
      return this[_getPositionAt](new core.Duration.new({milliseconds: this.duration[$toInt]()}));
    }
    get duration() {
      return (dart.notNull(this[_initialVelocity].pixelsPerSecond.dx) / 1000 / dart.notNull(this[_acceleration].x))[$abs]();
    }
    get [_acceleration]() {
      let velocityTotal = this[_initialVelocity].pixelsPerSecond.dx[$abs]() + this[_initialVelocity].pixelsPerSecond.dy[$abs]();
      let vRatioX = dart.notNull(this[_initialVelocity].pixelsPerSecond.dx) / velocityTotal;
      let vRatioY = dart.notNull(this[_initialVelocity].pixelsPerSecond.dy) / velocityTotal;
      return vector_math.Vector2.new(0.01 * vRatioX, 0.01 * vRatioY);
    }
    [_getPositionAt](time) {
      let xf = this[_getPosition]({r0: this[_initialPosition].dx, v0: dart.notNull(this[_initialVelocity].pixelsPerSecond.dx) / 1000, t: time.inMilliseconds, a: this[_acceleration].x});
      let yf = this[_getPosition]({r0: this[_initialPosition].dy, v0: dart.notNull(this[_initialVelocity].pixelsPerSecond.dy) / 1000, t: time.inMilliseconds, a: this[_acceleration].y});
      return new ui.Offset.new(xf, yf);
    }
    [_getPosition](opts) {
      let r0 = opts && 'r0' in opts ? opts.r0 : null;
      let v0 = opts && 'v0' in opts ? opts.v0 : null;
      let t = opts && 't' in opts ? opts.t : null;
      let a = opts && 'a' in opts ? opts.a : null;
      let stopTime = (dart.notNull(v0) / dart.notNull(a))[$abs]();
      if (dart.notNull(t) > stopTime) {
        t = stopTime[$toInt]();
      }
      return dart.notNull(r0) + dart.notNull(v0) * dart.notNull(t) + 0.5 * dart.notNull(a) * math.pow(t, 2);
    }
  };
  (transformations_demo_inertial_motion.InertialMotion.new = function(_initialVelocity, _initialPosition) {
    this[_initialVelocity$] = _initialVelocity;
    this[_initialPosition$] = _initialPosition;
    ;
  }).prototype = transformations_demo_inertial_motion.InertialMotion.prototype;
  dart.addTypeTests(transformations_demo_inertial_motion.InertialMotion);
  const _initialVelocity$ = InertialMotion__initialVelocity;
  const _initialPosition$ = InertialMotion__initialPosition;
  dart.setMethodSignature(transformations_demo_inertial_motion.InertialMotion, () => ({
    __proto__: dart.getMethods(transformations_demo_inertial_motion.InertialMotion.__proto__),
    [_getPositionAt]: dart.fnType(ui.Offset, [core.Duration]),
    [_getPosition]: dart.fnType(core.double, [], {a: core.double, r0: core.double, t: core.int, v0: core.double})
  }));
  dart.setGetterSignature(transformations_demo_inertial_motion.InertialMotion, () => ({
    __proto__: dart.getGetters(transformations_demo_inertial_motion.InertialMotion.__proto__),
    finalPosition: ui.Offset,
    duration: core.double,
    [_acceleration]: vector_math.Vector2
  }));
  dart.setLibraryUri(transformations_demo_inertial_motion.InertialMotion, "package:flutter_gallery/demo/transformations/transformations_demo_inertial_motion.dart");
  dart.setFieldSignature(transformations_demo_inertial_motion.InertialMotion, () => ({
    __proto__: dart.getFields(transformations_demo_inertial_motion.InertialMotion.__proto__),
    [_initialVelocity]: dart.finalFieldType(velocity_tracker.Velocity),
    [_initialPosition]: dart.finalFieldType(ui.Offset)
  }));
  dart.defineLazy(transformations_demo_inertial_motion.InertialMotion, {
    /*transformations_demo_inertial_motion.InertialMotion._kFrictionalAcceleration*/get _kFrictionalAcceleration() {
      return 0.01;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/transformations/transformations_demo_inertial_motion", {
    "package:flutter_gallery/demo/transformations/transformations_demo_inertial_motion.dart": transformations_demo_inertial_motion
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["transformations_demo_inertial_motion.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAaiB;;;;;;IACF;;;;;;;AAIX,YAAO,sBAAe,qCAAuB,AAAS;IACxD;;AAIE,YAAsE,EAA1B,AAAO,aAA3C,AAAiB,AAAgB,6CAAK,oBAAO,AAAc;IACrE;;AAKe,0BAAgB,AAAiB,AAAgB,AAAG,AAC/D,oDAAE,AAAiB,AAAgB,AAAG;AAC3B,oBAA8C,aAApC,AAAiB,AAAgB,6CAAK,aAAa;AAC7D,oBAA8C,aAApC,AAAiB,AAAgB,6CAAK,aAAa;AAC1E,YAAO,yBACoB,OAAE,OAAO,EACT,OAAE,OAAO;IAEtC;qBAG+B;AAChB,eAAK,wBACZ,AAAiB,+BACmB,aAApC,AAAiB,AAAgB,6CAAK,SACvC,AAAK,IAAD,oBACJ,AAAc;AAEN,eAAK,wBACZ,AAAiB,+BACmB,aAApC,AAAiB,AAAgB,6CAAK,SACvC,AAAK,IAAD,oBACJ,AAAc;AAEnB,YAAO,mBAAO,EAAE,EAAE,EAAE;IACtB;;UAI4B;UAAW;UAAQ;UAAU;AAE1C,qBAAoB,CAAL,aAAH,EAAE,iBAAG,CAAC;AAC/B,UAAM,aAAF,CAAC,IAAG,QAAQ;AACM,QAApB,IAAI,AAAS,QAAD;;AAGd,YAAU,AAAS,cAAZ,EAAE,IAAM,aAAH,EAAE,iBAAG,CAAC,IAAG,AAAI,AAAI,mBAAF,CAAC,IAAG,SAAI,CAAC,EAAE;IACxC;;sEAxD0B,kBAAuB;IAAvB;IAAuB;;EAAiB;;;;;;;;;;;;;;;;;;;;;;MAE9C,4EAAwB","file":"transformations_demo_inertial_motion.ddc.js"}');
  // Exports:
  return {
    demo__transformations__transformations_demo_inertial_motion: transformations_demo_inertial_motion
  };
});

//# sourceMappingURL=transformations_demo_inertial_motion.ddc.js.map
