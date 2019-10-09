define(['dart_sdk', 'packages/flutter_gallery/demo/shrine/model/product', 'packages/flutter_gallery/demo/shrine/model/products_repository', 'packages/scoped_model/scoped_model'], function(dart_sdk, packages__flutter_gallery__demo__shrine__model__product, packages__flutter_gallery__demo__shrine__model__products_repository, packages__scoped_model__scoped_model) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const product = packages__flutter_gallery__demo__shrine__model__product.demo__shrine__model__product;
  const products_repository = packages__flutter_gallery__demo__shrine__model__products_repository.demo__shrine__model__products_repository;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const app_state_model = Object.create(dart.library);
  const $values = dartx.values;
  const $fold = dartx.fold;
  const $keys = dartx.keys;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $firstWhere = dartx.firstWhere;
  const $clear = dartx.clear;
  let IdentityMapOfint$int = () => (IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))();
  let LinkedHashMapOfint$int = () => (LinkedHashMapOfint$int = dart.constFn(collection.LinkedHashMap$(core.int, core.int)))();
  let intAndintToint = () => (intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let doubleAndintTodouble = () => (doubleAndintTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.int])))();
  let numAndintTonum = () => (numAndintTonum = dart.constFn(dart.fnType(core.num, [core.num, core.int])))();
  let JSArrayOfProduct = () => (JSArrayOfProduct = dart.constFn(_interceptors.JSArray$(product.Product)))();
  let ListOfProduct = () => (ListOfProduct = dart.constFn(core.List$(product.Product)))();
  let ProductTobool = () => (ProductTobool = dart.constFn(dart.fnType(core.bool, [product.Product])))();
  const CT = Object.create(null);
  const _availableProducts = dart.privateName(app_state_model, "_availableProducts");
  const _selectedCategory = dart.privateName(app_state_model, "_selectedCategory");
  const _productsInCart = dart.privateName(app_state_model, "_productsInCart");
  app_state_model.AppStateModel = class AppStateModel extends scoped_model.Model {
    get productsInCart() {
      return LinkedHashMapOfint$int().from(this[_productsInCart]);
    }
    get totalCartQuantity() {
      return this[_productsInCart][$values][$fold](core.int, 0, dart.fn((v, e) => dart.notNull(v) + dart.notNull(e), intAndintToint()));
    }
    get selectedCategory() {
      return this[_selectedCategory];
    }
    get subtotalCost() {
      return this[_productsInCart][$keys][$map](core.int, dart.fn(id => dart.notNull(this[_availableProducts][$_get](id).price) * dart.notNull(this[_productsInCart][$_get](id)), intToint()))[$fold](core.double, 0.0, dart.fn((sum, e) => dart.notNull(sum) + dart.notNull(e), doubleAndintTodouble()));
    }
    get shippingCost() {
      return dart.notNull(app_state_model._shippingCostPerItem) * dart.notNull(this[_productsInCart][$values][$fold](core.num, 0.0, dart.fn((sum, e) => dart.notNull(sum) + dart.notNull(e), numAndintTonum())));
    }
    get tax() {
      return dart.notNull(this.subtotalCost) * dart.notNull(app_state_model._salesTaxRate);
    }
    get totalCost() {
      return dart.notNull(this.subtotalCost) + dart.notNull(this.shippingCost) + dart.notNull(this.tax);
    }
    getProducts() {
      if (this[_availableProducts] == null) {
        return JSArrayOfProduct().of([]);
      }
      if (dart.equals(this[_selectedCategory], product.Category.all)) {
        return ListOfProduct().from(this[_availableProducts]);
      } else {
        return this[_availableProducts][$where](dart.fn(p => dart.equals(p.category, this[_selectedCategory]), ProductTobool()))[$toList]();
      }
    }
    addProductToCart(productId) {
      let t1, t0;
      if (!dart.test(this[_productsInCart][$containsKey](productId))) {
        this[_productsInCart][$_set](productId, 1);
      } else {
        t0 = this[_productsInCart];
        t1 = productId;
        t0[$_set](t1, dart.notNull(t0[$_get](t1)) + 1);
      }
      this.notifyListeners();
    }
    removeItemFromCart(productId) {
      let t1, t0;
      if (dart.test(this[_productsInCart][$containsKey](productId))) {
        if (this[_productsInCart][$_get](productId) === 1) {
          this[_productsInCart][$remove](productId);
        } else {
          t0 = this[_productsInCart];
          t1 = productId;
          t0[$_set](t1, dart.notNull(t0[$_get](t1)) - 1);
        }
      }
      this.notifyListeners();
    }
    getProductById(id) {
      return this[_availableProducts][$firstWhere](dart.fn(p => p.id == id, ProductTobool()));
    }
    clearCart() {
      this[_productsInCart][$clear]();
      this.notifyListeners();
    }
    loadProducts() {
      this[_availableProducts] = products_repository.ProductsRepository.loadProducts(product.Category.all);
      this.notifyListeners();
    }
    setCategory(newCategory) {
      this[_selectedCategory] = newCategory;
      this.notifyListeners();
    }
    toString() {
      return "AppStateModel(totalCost: " + dart.str(this.totalCost) + ")";
    }
  };
  (app_state_model.AppStateModel.new = function() {
    this[_availableProducts] = null;
    this[_selectedCategory] = product.Category.all;
    this[_productsInCart] = new (IdentityMapOfint$int()).new();
    app_state_model.AppStateModel.__proto__.new.call(this);
    ;
  }).prototype = app_state_model.AppStateModel.prototype;
  dart.addTypeTests(app_state_model.AppStateModel);
  dart.setMethodSignature(app_state_model.AppStateModel, () => ({
    __proto__: dart.getMethods(app_state_model.AppStateModel.__proto__),
    getProducts: dart.fnType(core.List$(product.Product), []),
    addProductToCart: dart.fnType(dart.void, [core.int]),
    removeItemFromCart: dart.fnType(dart.void, [core.int]),
    getProductById: dart.fnType(product.Product, [core.int]),
    clearCart: dart.fnType(dart.void, []),
    loadProducts: dart.fnType(dart.void, []),
    setCategory: dart.fnType(dart.void, [product.Category])
  }));
  dart.setGetterSignature(app_state_model.AppStateModel, () => ({
    __proto__: dart.getGetters(app_state_model.AppStateModel.__proto__),
    productsInCart: core.Map$(core.int, core.int),
    totalCartQuantity: core.int,
    selectedCategory: product.Category,
    subtotalCost: core.double,
    shippingCost: core.double,
    tax: core.double,
    totalCost: core.double
  }));
  dart.setLibraryUri(app_state_model.AppStateModel, "package:flutter_gallery/demo/shrine/model/app_state_model.dart");
  dart.setFieldSignature(app_state_model.AppStateModel, () => ({
    __proto__: dart.getFields(app_state_model.AppStateModel.__proto__),
    [_availableProducts]: dart.fieldType(core.List$(product.Product)),
    [_selectedCategory]: dart.fieldType(product.Category),
    [_productsInCart]: dart.finalFieldType(core.Map$(core.int, core.int))
  }));
  dart.defineExtensionMethods(app_state_model.AppStateModel, ['toString']);
  dart.defineLazy(app_state_model, {
    /*app_state_model._salesTaxRate*/get _salesTaxRate() {
      return 0.06;
    },
    set _salesTaxRate(_) {},
    /*app_state_model._shippingCostPerItem*/get _shippingCostPerItem() {
      return 7.0;
    },
    set _shippingCostPerItem(_) {}
  });
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/model/app_state_model", {
    "package:flutter_gallery/demo/shrine/model/app_state_model.dart": app_state_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_state_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgCsC,YAAH,+BAAsB;IAAgB;;AAG1C,YAAA,AAAgB,AAAO,iDAAK,GAAG,SAAK,GAAO,MAAQ,aAAF,CAAC,iBAAG,CAAC;IAAC;;AAEnD;IAAiB;;AAIhD,YAAO,AAAgB,AACpB,AACA,8CADI,QAAK,MAAoC,aAA7B,AAAkB,AAAK,gCAAJ,EAAE,wBAAU,AAAe,6BAAC,EAAE,qCAC5D,KAAK,SAAQ,KAAS,MAAU,aAAJ,GAAG,iBAAG,CAAC;IAC7C;;AAIE,YAA4B,cAArB,qDAAuB,AAAgB,AAAO,gDAAK,KAAK,SAAK,KAAS,MAAU,aAAJ,GAAG,iBAAG,CAAC;IAC5F;;AAGkB,YAAa,cAAb,kCAAe;IAAa;;AAGtB,YAAa,AAAe,cAA5B,kCAAe,kCAAe;IAAG;;AAIvD,UAAI,AAAmB,4BAAG;AACxB,cAAgB;;AAGlB,UAAsB,YAAlB,yBAA8B;AAChC,oCAA0B;;AAE1B,cAAO,AACJ,AACA,kCADM,QAAS,KAAiB,YAAX,AAAE,CAAD,WAAa;;IAG1C;qBAG0B;;AACxB,qBAAK,AAAgB,oCAAY,SAAS;AACV,QAA9B,AAAe,6BAAC,SAAS,EAAI;;AAED,aAA5B;aAAgB,SAAS;QAAV,cAAW,aAAX,iBAAW;;AAGX,MAAjB;IACF;uBAG4B;;AAC1B,oBAAI,AAAgB,oCAAY,SAAS;AACvC,YAAI,AAAe,AAAY,6BAAX,SAAS,MAAK;AACC,UAAjC,AAAgB,+BAAO,SAAS;;AAEJ,eAA5B;eAAgB,SAAS;UAAV,cAAW,aAAX,iBAAW;;;AAIb,MAAjB;IACF;mBAG2B;AACzB,YAAO,AAAmB,uCAAW,QAAS,KAAM,AAAE,AAAG,CAAJ,OAAO,EAAE;IAChE;;AAIyB,MAAvB,AAAgB;AACC,MAAjB;IACF;;AAIoE,MAAlE,2BAAwC,oDAAsB;AAC7C,MAAjB;IACF;gBAE0B;AACO,MAA/B,0BAAoB,WAAW;AACd,MAAjB;IACF;;AAIE,YAAO,AAAsC,wCAAX,kBAAS;IAC7C;;;IAjGc;IAGL,0BAA6B;IAGlB,wBAA4B;;;EA4FlD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAvGO,6BAAa;YAAG;;;MAChB,oCAAoB;YAAG","file":"app_state_model.ddc.js"}');
  // Exports:
  return {
    demo__shrine__model__app_state_model: app_state_model
  };
});

//# sourceMappingURL=app_state_model.ddc.js.map
