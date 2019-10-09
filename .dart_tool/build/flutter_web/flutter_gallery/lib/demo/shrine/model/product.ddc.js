define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const product = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: product.Category.prototype,
        [_name$]: "Category.all",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: product.Category.prototype,
        [_name$]: "Category.accessories",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: product.Category.prototype,
        [_name$]: "Category.clothing",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: product.Category.prototype,
        [_name$]: "Category.home",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], product.Category);
    }
  });
  const _name$ = dart.privateName(product, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  product.Category = class Category extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (product.Category.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = product.Category.prototype;
  dart.addTypeTests(product.Category);
  dart.setLibraryUri(product.Category, "package:flutter_gallery/demo/shrine/model/product.dart");
  dart.setFieldSignature(product.Category, () => ({
    __proto__: dart.getFields(product.Category.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(product.Category, ['toString']);
  product.Category.all = C0 || CT.C0;
  product.Category.accessories = C1 || CT.C1;
  product.Category.clothing = C2 || CT.C2;
  product.Category.home = C3 || CT.C3;
  product.Category.values = C4 || CT.C4;
  const Product_category = dart.privateName(product, "Product.category");
  const Product_id = dart.privateName(product, "Product.id");
  const Product_isFeatured = dart.privateName(product, "Product.isFeatured");
  const Product_name = dart.privateName(product, "Product.name");
  const Product_price = dart.privateName(product, "Product.price");
  product.Product = class Product extends core.Object {
    get category() {
      return this[category$];
    }
    set category(value) {
      super.category = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get isFeatured() {
      return this[isFeatured$];
    }
    set isFeatured(value) {
      super.isFeatured = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get price() {
      return this[price$];
    }
    set price(value) {
      super.price = value;
    }
    get assetName() {
      return dart.str(this.id) + "-0.jpg";
    }
    get assetPackage() {
      return "shrine_images";
    }
    toString() {
      return dart.str(this.name) + " (id=" + dart.str(this.id) + ")";
    }
  };
  (product.Product.new = function(opts) {
    let category = opts && 'category' in opts ? opts.category : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let isFeatured = opts && 'isFeatured' in opts ? opts.isFeatured : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let price = opts && 'price' in opts ? opts.price : null;
    this[category$] = category;
    this[id$] = id;
    this[isFeatured$] = isFeatured;
    this[name$] = name;
    this[price$] = price;
    if (!(category != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/model/product.dart", 31, 15, "category != null");
    if (!(id != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/model/product.dart", 32, 15, "id != null");
    if (!(isFeatured != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/model/product.dart", 33, 15, "isFeatured != null");
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/model/product.dart", 34, 15, "name != null");
    if (!(price != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/model/product.dart", 35, 15, "price != null");
    ;
  }).prototype = product.Product.prototype;
  dart.addTypeTests(product.Product);
  const category$ = Product_category;
  const id$ = Product_id;
  const isFeatured$ = Product_isFeatured;
  const name$ = Product_name;
  const price$ = Product_price;
  dart.setGetterSignature(product.Product, () => ({
    __proto__: dart.getGetters(product.Product.__proto__),
    assetName: core.String,
    assetPackage: core.String
  }));
  dart.setLibraryUri(product.Product, "package:flutter_gallery/demo/shrine/model/product.dart");
  dart.setFieldSignature(product.Product, () => ({
    __proto__: dart.getFields(product.Product.__proto__),
    category: dart.finalFieldType(product.Category),
    id: dart.finalFieldType(core.int),
    isFeatured: dart.finalFieldType(core.bool),
    name: dart.finalFieldType(core.String),
    price: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(product.Product, ['toString']);
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/model/product", {
    "package:flutter_gallery/demo/shrine/model/product.dart": product
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqBA;;0CALK;;;;EAKL;;;;;;;;;;;;;;;;;;;;IAeiB;;;;;;IACL;;;;;;IACC;;;;;;IACE;;;;;;IACH;;;;;;;AAEc,YAAW,UAAT,WAAE;IAAO;;AACR;IAAe;;AAGrB,YAAgB,UAAd,aAAI,mBAAM,WAAE;IAAE;;;QArBpB;QACA;QACA;QACA;QACA;IAJA;IACA;IACA;IACA;IACA;UACL,QAAQ,IAAI;UACZ,EAAE,IAAI;UACN,UAAU,IAAI;UACd,IAAI,IAAI;UACR,KAAK,IAAI;;EAAK","file":"product.ddc.js"}');
  // Exports:
  return {
    demo__shrine__model__product: product
  };
});

//# sourceMappingURL=product.ddc.js.map
