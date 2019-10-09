define(['dart_sdk', 'packages/flutter_gallery/demo/shrine/model/product', 'packages/scoped_model/scoped_model', 'packages/flutter_gallery/demo/shrine/model/app_state_model', 'packages/flutter_gallery/demo/shrine/supplemental/asymmetric_view', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/demo/shrine/expanding_bottom_sheet', 'packages/flutter_gallery/demo/shrine/backdrop'], function(dart_sdk, packages__flutter_gallery__demo__shrine__model__product, packages__scoped_model__scoped_model, packages__flutter_gallery__demo__shrine__model__app_state_model, packages__flutter_gallery__demo__shrine__supplemental__asymmetric_view, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__demo__shrine__expanding_bottom_sheet, packages__flutter_gallery__demo__shrine__backdrop) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const product = packages__flutter_gallery__demo__shrine__model__product.demo__shrine__model__product;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const app_state_model = packages__flutter_gallery__demo__shrine__model__app_state_model.demo__shrine__model__app_state_model;
  const asymmetric_view = packages__flutter_gallery__demo__shrine__supplemental__asymmetric_view.demo__shrine__supplemental__asymmetric_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const expanding_bottom_sheet = packages__flutter_gallery__demo__shrine__expanding_bottom_sheet.demo__shrine__expanding_bottom_sheet;
  const backdrop = packages__flutter_gallery__demo__shrine__backdrop.demo__shrine__backdrop;
  const home = Object.create(dart.library);
  let ScopedModelDescendantOfAppStateModel = () => (ScopedModelDescendantOfAppStateModel = dart.constFn(scoped_model.ScopedModelDescendant$(app_state_model.AppStateModel)))();
  let BuildContextAndWidgetAndAppStateModelToAsymmetricView = () => (BuildContextAndWidgetAndAppStateModelToAsymmetricView = dart.constFn(dart.fnType(asymmetric_view.AsymmetricView, [framework.BuildContext, framework.Widget, app_state_model.AppStateModel])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: product.Category.prototype,
        [_name]: "Category.all",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "products",
        [_Location_column]: 31,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/home.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/home.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 44,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/home.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/home.dart"
      });
    }
  });
  const _name = dart.privateName(product, "_name");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C2;
  let C1;
  let C6;
  let C5;
  let C4;
  const ProductPage_category = dart.privateName(home, "ProductPage.category");
  home.ProductPage = class ProductPage extends framework.StatelessWidget {
    get category() {
      return this[category$];
    }
    set category(value) {
      super.category = value;
    }
    build(context) {
      return new (ScopedModelDescendantOfAppStateModel()).new({builder: dart.fn((context, child, model) => new asymmetric_view.AsymmetricView.new({products: model.getProducts(), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), BuildContextAndWidgetAndAppStateModelToAsymmetricView()), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (home.ProductPage.new = function(opts) {
    let category = opts && 'category' in opts ? opts.category : C0 || CT.C0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[category$] = category;
    home.ProductPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.ProductPage.prototype;
  dart.addTypeTests(home.ProductPage);
  const category$ = ProductPage_category;
  dart.setMethodSignature(home.ProductPage, () => ({
    __proto__: dart.getMethods(home.ProductPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.ProductPage, "package:flutter_gallery/demo/shrine/home.dart");
  dart.setFieldSignature(home.ProductPage, () => ({
    __proto__: dart.getFields(home.ProductPage.__proto__),
    category: dart.finalFieldType(product.Category)
  }));
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C12;
  let C11;
  const HomePage_expandingBottomSheet = dart.privateName(home, "HomePage.expandingBottomSheet");
  const HomePage_backdrop = dart.privateName(home, "HomePage.backdrop");
  home.HomePage = class HomePage extends framework.StatelessWidget {
    get expandingBottomSheet() {
      return this[expandingBottomSheet$];
    }
    set expandingBottomSheet(value) {
      super.expandingBottomSheet = value;
    }
    get backdrop() {
      return this[backdrop$];
    }
    set backdrop(value) {
      super.backdrop = value;
    }
    build(context) {
      return new basic.Stack.new({children: JSArrayOfWidget().of([this.backdrop, new basic.Align.new({child: this.expandingBottomSheet, alignment: alignment.Alignment.bottomRight, $creationLocationd_0dea112b090073317d4: C7 || CT.C7})]), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
  };
  (home.HomePage.new = function(opts) {
    let expandingBottomSheet = opts && 'expandingBottomSheet' in opts ? opts.expandingBottomSheet : null;
    let backdrop = opts && 'backdrop' in opts ? opts.backdrop : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[expandingBottomSheet$] = expandingBottomSheet;
    this[backdrop$] = backdrop;
    home.HomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.HomePage.prototype;
  dart.addTypeTests(home.HomePage);
  const expandingBottomSheet$ = HomePage_expandingBottomSheet;
  const backdrop$ = HomePage_backdrop;
  dart.setMethodSignature(home.HomePage, () => ({
    __proto__: dart.getMethods(home.HomePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.HomePage, "package:flutter_gallery/demo/shrine/home.dart");
  dart.setFieldSignature(home.HomePage, () => ({
    __proto__: dart.getFields(home.HomePage.__proto__),
    expandingBottomSheet: dart.finalFieldType(expanding_bottom_sheet.ExpandingBottomSheet),
    backdrop: dart.finalFieldType(backdrop.Backdrop)
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/home", {
    "package:flutter_gallery/demo/shrine/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BiB;;;;;;UAGW;AACxB,YAAO,4DACI,SAAc,SAAgB,OAAqB,UACnD,kDAAyB,AAAM,KAAD;IAE3C;;;QAVwB;;;AAAlB;;EAA2C;;;;;;;;;;;;;;;;;;;;;;IAoBtB;;;;;;IACZ;;;;;;UAGW;AACxB,YAAO,gCACa,sBAChB,eACA,4BAAa,sCAA2C;IAG9D;;;QAhBO;QACA;QACD;;IAFC;IACA;AAEF,iDAAW,GAAG;;EAAC","file":"home.ddc.js"}');
  // Exports:
  return {
    demo__shrine__home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
