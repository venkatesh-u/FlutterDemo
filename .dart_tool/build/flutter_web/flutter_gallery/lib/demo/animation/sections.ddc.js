define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sections = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  let JSArrayOfSection = () => (JSArrayOfSection = dart.constFn(_interceptors.JSArray$(sections.Section)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282081167.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4286736084.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294531927.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294157894.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: sections.SectionDetail.prototype,
        [SectionDetail_imageAssetPackage]: "flutter_gallery_assets",
        [SectionDetail_imageAsset]: "products/sunnies.png",
        [SectionDetail_subtitle]: "3K views - 5 days",
        [SectionDetail_title]: "Flutter enables interactive animation"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: sections.SectionDetail.prototype,
        [SectionDetail_imageAssetPackage]: "flutter_gallery_assets",
        [SectionDetail_imageAsset]: "products/sunnies.png",
        [SectionDetail_subtitle]: null,
        [SectionDetail_title]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: sections.SectionDetail.prototype,
        [SectionDetail_imageAssetPackage]: "flutter_gallery_assets",
        [SectionDetail_imageAsset]: "products/table.png",
        [SectionDetail_subtitle]: "3K views - 5 days",
        [SectionDetail_title]: "Flutter enables interactive animation"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: sections.SectionDetail.prototype,
        [SectionDetail_imageAssetPackage]: "flutter_gallery_assets",
        [SectionDetail_imageAsset]: "products/table.png",
        [SectionDetail_subtitle]: null,
        [SectionDetail_title]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: sections.SectionDetail.prototype,
        [SectionDetail_imageAssetPackage]: "flutter_gallery_assets",
        [SectionDetail_imageAsset]: "products/earrings.png",
        [SectionDetail_subtitle]: "3K views - 5 days",
        [SectionDetail_title]: "Flutter enables interactive animation"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: sections.SectionDetail.prototype,
        [SectionDetail_imageAssetPackage]: "flutter_gallery_assets",
        [SectionDetail_imageAsset]: "products/earrings.png",
        [SectionDetail_subtitle]: null,
        [SectionDetail_title]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: sections.SectionDetail.prototype,
        [SectionDetail_imageAssetPackage]: "flutter_gallery_assets",
        [SectionDetail_imageAsset]: "products/hat.png",
        [SectionDetail_subtitle]: "3K views - 5 days",
        [SectionDetail_title]: "Flutter enables interactive animation"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: sections.SectionDetail.prototype,
        [SectionDetail_imageAssetPackage]: "flutter_gallery_assets",
        [SectionDetail_imageAsset]: "products/hat.png",
        [SectionDetail_subtitle]: null,
        [SectionDetail_title]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C4 || CT.C4, C5 || CT.C5, C4 || CT.C4, C4 || CT.C4, C4 || CT.C4, C4 || CT.C4], sections.SectionDetail);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: sections.Section.prototype,
        [Section_details]: C13 || CT.C13,
        [Section_rightColor]: C0 || CT.C0,
        [Section_leftColor]: C1 || CT.C1,
        [Section_backgroundAssetPackage]: "flutter_gallery_assets",
        [Section_backgroundAsset]: "products/sunnies.png",
        [Section_title]: "SUNGLASSES"
      });
    },
    get C15() {
      return C15 = dart.constList([C6 || CT.C6, C7 || CT.C7, C6 || CT.C6, C6 || CT.C6, C6 || CT.C6, C6 || CT.C6], sections.SectionDetail);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: sections.Section.prototype,
        [Section_details]: C15 || CT.C15,
        [Section_rightColor]: C1 || CT.C1,
        [Section_leftColor]: C2 || CT.C2,
        [Section_backgroundAssetPackage]: "flutter_gallery_assets",
        [Section_backgroundAsset]: "products/table.png",
        [Section_title]: "FURNITURE"
      });
    },
    get C17() {
      return C17 = dart.constList([C8 || CT.C8, C9 || CT.C9, C8 || CT.C8, C8 || CT.C8, C8 || CT.C8, C8 || CT.C8], sections.SectionDetail);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: sections.Section.prototype,
        [Section_details]: C17 || CT.C17,
        [Section_rightColor]: C2 || CT.C2,
        [Section_leftColor]: C3 || CT.C3,
        [Section_backgroundAssetPackage]: "flutter_gallery_assets",
        [Section_backgroundAsset]: "products/earrings.png",
        [Section_title]: "JEWELRY"
      });
    },
    get C19() {
      return C19 = dart.constList([C10 || CT.C10, C11 || CT.C11, C10 || CT.C10, C10 || CT.C10, C10 || CT.C10, C10 || CT.C10], sections.SectionDetail);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: sections.Section.prototype,
        [Section_details]: C19 || CT.C19,
        [Section_rightColor]: C2 || CT.C2,
        [Section_leftColor]: C20 || CT.C20,
        [Section_backgroundAssetPackage]: "flutter_gallery_assets",
        [Section_backgroundAsset]: "products/hat.png",
        [Section_title]: "HEADWEAR"
      });
    }
  });
  const SectionDetail_title = dart.privateName(sections, "SectionDetail.title");
  const SectionDetail_subtitle = dart.privateName(sections, "SectionDetail.subtitle");
  const SectionDetail_imageAsset = dart.privateName(sections, "SectionDetail.imageAsset");
  const SectionDetail_imageAssetPackage = dart.privateName(sections, "SectionDetail.imageAssetPackage");
  sections.SectionDetail = class SectionDetail extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      super.subtitle = value;
    }
    get imageAsset() {
      return this[imageAsset$];
    }
    set imageAsset(value) {
      super.imageAsset = value;
    }
    get imageAssetPackage() {
      return this[imageAssetPackage$];
    }
    set imageAssetPackage(value) {
      super.imageAssetPackage = value;
    }
  };
  (sections.SectionDetail.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let imageAsset = opts && 'imageAsset' in opts ? opts.imageAsset : null;
    let imageAssetPackage = opts && 'imageAssetPackage' in opts ? opts.imageAssetPackage : null;
    this[title$] = title;
    this[subtitle$] = subtitle;
    this[imageAsset$] = imageAsset;
    this[imageAssetPackage$] = imageAssetPackage;
    ;
  }).prototype = sections.SectionDetail.prototype;
  dart.addTypeTests(sections.SectionDetail);
  const title$ = SectionDetail_title;
  const subtitle$ = SectionDetail_subtitle;
  const imageAsset$ = SectionDetail_imageAsset;
  const imageAssetPackage$ = SectionDetail_imageAssetPackage;
  dart.setLibraryUri(sections.SectionDetail, "package:flutter_gallery/demo/animation/sections.dart");
  dart.setFieldSignature(sections.SectionDetail, () => ({
    __proto__: dart.getFields(sections.SectionDetail.__proto__),
    title: dart.finalFieldType(core.String),
    subtitle: dart.finalFieldType(core.String),
    imageAsset: dart.finalFieldType(core.String),
    imageAssetPackage: dart.finalFieldType(core.String)
  }));
  const Section_title = dart.privateName(sections, "Section.title");
  const Section_backgroundAsset = dart.privateName(sections, "Section.backgroundAsset");
  const Section_backgroundAssetPackage = dart.privateName(sections, "Section.backgroundAssetPackage");
  const Section_leftColor = dart.privateName(sections, "Section.leftColor");
  const Section_rightColor = dart.privateName(sections, "Section.rightColor");
  const Section_details = dart.privateName(sections, "Section.details");
  sections.Section = class Section extends core.Object {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get backgroundAsset() {
      return this[backgroundAsset$];
    }
    set backgroundAsset(value) {
      super.backgroundAsset = value;
    }
    get backgroundAssetPackage() {
      return this[backgroundAssetPackage$];
    }
    set backgroundAssetPackage(value) {
      super.backgroundAssetPackage = value;
    }
    get leftColor() {
      return this[leftColor$];
    }
    set leftColor(value) {
      super.leftColor = value;
    }
    get rightColor() {
      return this[rightColor$];
    }
    set rightColor(value) {
      super.rightColor = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!sections.Section.is(other)) return false;
      let otherSection = sections.Section._check(other);
      return this.title == otherSection.title;
    }
    get hashCode() {
      return dart.hashCode(this.title);
    }
  };
  (sections.Section.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let backgroundAsset = opts && 'backgroundAsset' in opts ? opts.backgroundAsset : null;
    let backgroundAssetPackage = opts && 'backgroundAssetPackage' in opts ? opts.backgroundAssetPackage : null;
    let leftColor = opts && 'leftColor' in opts ? opts.leftColor : null;
    let rightColor = opts && 'rightColor' in opts ? opts.rightColor : null;
    let details = opts && 'details' in opts ? opts.details : null;
    this[title$0] = title;
    this[backgroundAsset$] = backgroundAsset;
    this[backgroundAssetPackage$] = backgroundAssetPackage;
    this[leftColor$] = leftColor;
    this[rightColor$] = rightColor;
    this[details$] = details;
    ;
  }).prototype = sections.Section.prototype;
  dart.addTypeTests(sections.Section);
  const title$0 = Section_title;
  const backgroundAsset$ = Section_backgroundAsset;
  const backgroundAssetPackage$ = Section_backgroundAssetPackage;
  const leftColor$ = Section_leftColor;
  const rightColor$ = Section_rightColor;
  const details$ = Section_details;
  dart.setMethodSignature(sections.Section, () => ({
    __proto__: dart.getMethods(sections.Section.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(sections.Section, "package:flutter_gallery/demo/animation/sections.dart");
  dart.setFieldSignature(sections.Section, () => ({
    __proto__: dart.getFields(sections.Section.__proto__),
    title: dart.finalFieldType(core.String),
    backgroundAsset: dart.finalFieldType(core.String),
    backgroundAssetPackage: dart.finalFieldType(core.String),
    leftColor: dart.finalFieldType(ui.Color),
    rightColor: dart.finalFieldType(ui.Color),
    details: dart.finalFieldType(core.List$(sections.SectionDetail))
  }));
  dart.defineExtensionMethods(sections.Section, ['_equals']);
  dart.defineExtensionAccessors(sections.Section, ['hashCode']);
  const Color__value = dart.privateName(ui, "Color._value");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C13;
  let C12;
  let C15;
  let C14;
  let C17;
  let C16;
  let C19;
  let C20;
  let C18;
  dart.defineLazy(sections, {
    /*sections._mariner*/get _mariner() {
      return C0 || CT.C0;
    },
    /*sections._mediumPurple*/get _mediumPurple() {
      return C1 || CT.C1;
    },
    /*sections._tomato*/get _tomato() {
      return C2 || CT.C2;
    },
    /*sections._mySin*/get _mySin() {
      return C3 || CT.C3;
    },
    /*sections._kGalleryAssetsPackage*/get _kGalleryAssetsPackage() {
      return "flutter_gallery_assets";
    },
    /*sections._eyeglassesDetail*/get _eyeglassesDetail() {
      return C4 || CT.C4;
    },
    /*sections._eyeglassesImageDetail*/get _eyeglassesImageDetail() {
      return C5 || CT.C5;
    },
    /*sections._seatingDetail*/get _seatingDetail() {
      return C6 || CT.C6;
    },
    /*sections._seatingImageDetail*/get _seatingImageDetail() {
      return C7 || CT.C7;
    },
    /*sections._decorationDetail*/get _decorationDetail() {
      return C8 || CT.C8;
    },
    /*sections._decorationImageDetail*/get _decorationImageDetail() {
      return C9 || CT.C9;
    },
    /*sections._protectionDetail*/get _protectionDetail() {
      return C10 || CT.C10;
    },
    /*sections._protectionImageDetail*/get _protectionImageDetail() {
      return C11 || CT.C11;
    },
    /*sections.allSections*/get allSections() {
      return JSArrayOfSection().of([C12 || CT.C12, C14 || CT.C14, C16 || CT.C16, C18 || CT.C18]);
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/animation/sections", {
    "package:flutter_gallery/demo/animation/sections.dart": sections
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sections.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QARN;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;IAgBW;;;;;;IACA;;;;;;IACA;;;;;;IACD;;;;;;IACA;;;;;;IACc;;;;;;;UAGH;AACrB,WAAU,oBAAN,KAAK,GACP,MAAO;AACK,iDAAe,KAAK;AAClC,YAAO,AAAM,eAAG,AAAa,YAAD;IAC9B;;AAGoB,YAAM,eAAN;IAAc;;;QAvB3B;QACA;QACA;QACA;QACA;QACA;IALA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA5BQ,iBAAQ;;;MACR,sBAAa;;;MACb,gBAAO;;;MACP,eAAM;;;MAEL,+BAAsB;;;MA+Cf,0BAAiB;;;MAOjB,+BAAsB;;;MAKtB,uBAAc;;;MAOd,4BAAmB;;;MAKnB,0BAAiB;;;MAOjB,+BAAsB;;;MAKtB,0BAAiB;;;MAOjB,+BAAsB;;;MAKtB,oBAAW;YAAY","file":"sections.ddc.js"}');
  // Exports:
  return {
    demo__animation__sections: sections
  };
});

//# sourceMappingURL=sections.ddc.js.map
