define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scales = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: scales.GalleryTextScaleValue.prototype,
        [GalleryTextScaleValue_label]: "System Default",
        [GalleryTextScaleValue_scale]: null
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: scales.GalleryTextScaleValue.prototype,
        [GalleryTextScaleValue_label]: "Small",
        [GalleryTextScaleValue_scale]: 0.8
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: scales.GalleryTextScaleValue.prototype,
        [GalleryTextScaleValue_label]: "Normal",
        [GalleryTextScaleValue_scale]: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: scales.GalleryTextScaleValue.prototype,
        [GalleryTextScaleValue_label]: "Large",
        [GalleryTextScaleValue_scale]: 1.3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: scales.GalleryTextScaleValue.prototype,
        [GalleryTextScaleValue_label]: "Huge",
        [GalleryTextScaleValue_scale]: 2
      });
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], scales.GalleryTextScaleValue);
    }
  });
  const GalleryTextScaleValue_scale = dart.privateName(scales, "GalleryTextScaleValue.scale");
  const GalleryTextScaleValue_label = dart.privateName(scales, "GalleryTextScaleValue.label");
  scales.GalleryTextScaleValue = class GalleryTextScaleValue extends core.Object {
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = scales.GalleryTextScaleValue._check(other);
      return this.scale == typedOther.scale && this.label == typedOther.label;
    }
    get hashCode() {
      return ui.hashValues(this.scale, this.label);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.label) + ")";
    }
  };
  (scales.GalleryTextScaleValue.new = function(scale, label) {
    this[scale$] = scale;
    this[label$] = label;
    ;
  }).prototype = scales.GalleryTextScaleValue.prototype;
  dart.addTypeTests(scales.GalleryTextScaleValue);
  const scale$ = GalleryTextScaleValue_scale;
  const label$ = GalleryTextScaleValue_label;
  dart.setLibraryUri(scales.GalleryTextScaleValue, "package:flutter_gallery/gallery/scales.dart");
  dart.setFieldSignature(scales.GalleryTextScaleValue, () => ({
    __proto__: dart.getFields(scales.GalleryTextScaleValue.__proto__),
    scale: dart.finalFieldType(core.double),
    label: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(scales.GalleryTextScaleValue, ['_equals', 'toString']);
  dart.defineExtensionAccessors(scales.GalleryTextScaleValue, ['hashCode']);
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C0;
  dart.defineLazy(scales, {
    /*scales.kAllGalleryTextScaleValues*/get kAllGalleryTextScaleValues() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/gallery/scales", {
    "package:flutter_gallery/gallery/scales.dart": scales
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scales.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACA;;;;;;;UAGY;AACvB,uBAAI,oBAAqB,iBAAN,KAAK,IACtB,MAAO;AACmB,2DAAa,KAAK;AAC9C,YAAO,AAAM,AAAoB,eAAjB,AAAW,UAAD,UAAU,AAAM,cAAG,AAAW,UAAD;IACzD;;AAGoB,2BAAW,YAAO;IAAM;;AAI1C,YAA6B,UAApB,sBAAW,eAAE,cAAK;IAC7B;;+CAnBiC,OAAY;IAAZ;IAAY;;EAAM;;;;;;;;;;;;;;;;;;;MAuBnB,iCAA0B","file":"scales.ddc.js"}');
  // Exports:
  return {
    gallery__scales: scales
  };
});

//# sourceMappingURL=scales.ddc.js.map
