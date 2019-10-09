define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_gallery/demo/shrine/supplemental/product_columns', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/demo/shrine/model/product'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_gallery__demo__shrine__supplemental__product_columns, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__demo__shrine__model__product) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const product_columns = packages__flutter_gallery__demo__shrine__supplemental__product_columns.demo__shrine__supplemental__product_columns;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const product = packages__flutter_gallery__demo__shrine__model__product.demo__shrine__model__product;
  const asymmetric_view = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $modulo = dartx['%'];
  const $_get = dartx._get;
  const $toList = dartx.toList;
  const $truncate = dartx.truncate;
  const $ceil = dartx.ceil;
  let ListOfContainer = () => (ListOfContainer = dart.constFn(core.List$(container.Container)))();
  let intToContainer = () => (intToContainer = dart.constFn(dart.fnType(container.Container, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], container.Container);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/asymmetric_view.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/asymmetric_view.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/asymmetric_view.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/asymmetric_view.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 44,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 34,
        [EdgeInsets_left]: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: scroll_physics.AlwaysScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 7,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/asymmetric_view.dart"
      });
    }
  });
  let C0;
  const _listItemCount = dart.privateName(asymmetric_view, "_listItemCount");
  const _evenCasesIndex = dart.privateName(asymmetric_view, "_evenCasesIndex");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  const _oddCasesIndex = dart.privateName(asymmetric_view, "_oddCasesIndex");
  let C7;
  let C6;
  let C5;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C8;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C14;
  let C13;
  const _buildColumns = dart.privateName(asymmetric_view, "_buildColumns");
  let C17;
  const ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  let C18;
  let C21;
  let C22;
  let C23;
  let C24;
  let C20;
  let C19;
  const AsymmetricView_products = dart.privateName(asymmetric_view, "AsymmetricView.products");
  asymmetric_view.AsymmetricView = class AsymmetricView extends framework.StatelessWidget {
    get products() {
      return this[products$];
    }
    set products(value) {
      super.products = value;
    }
    [_buildColumns](context) {
      if (this.products == null || dart.test(this.products[$isEmpty])) {
        return C0 || CT.C0;
      }
      return ListOfContainer().generate(this[_listItemCount](this.products[$length]), dart.fn(index => {
        let width = 0.59 * dart.notNull(media_query.MediaQuery.of(context).size.width);
        let column = null;
        if (index[$modulo](2) === 0) {
          let bottom = this[_evenCasesIndex](index);
          column = new product_columns.TwoProductCardColumn.new({bottom: this.products[$_get](bottom), top: dart.notNull(this.products[$length]) - 1 >= dart.notNull(bottom) + 1 ? this.products[$_get](dart.notNull(bottom) + 1) : null, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
          width = width + 32.0;
        } else {
          column = new product_columns.OneProductCardColumn.new({product: this.products[$_get](this[_oddCasesIndex](index)), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
        }
        return new container.Container.new({width: width, child: new basic.Padding.new({padding: C8 || CT.C8, child: column, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
      }, intToContainer()))[$toList]();
    }
    [_evenCasesIndex](input) {
      return (dart.notNull(input) / 2)[$truncate]() * 3;
    }
    [_oddCasesIndex](input) {
      if (!(dart.notNull(input) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/asymmetric_view.dart", 76, 12, "input > 0");
      return (dart.notNull(input) / 2)[$ceil]() * 3 - 1;
    }
    [_listItemCount](totalItems) {
      return totalItems[$modulo](3) === 0 ? (dart.notNull(totalItems) / 3)[$truncate]() * 2 : (dart.notNull(totalItems) / 3)[$ceil]() * 2 - 1;
    }
    build(context) {
      return new scroll_view.ListView.new({scrollDirection: basic_types.Axis.horizontal, padding: C17 || CT.C17, children: this[_buildColumns](context), physics: C18 || CT.C18, $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
    }
  };
  (asymmetric_view.AsymmetricView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let products = opts && 'products' in opts ? opts.products : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[products$] = products;
    asymmetric_view.AsymmetricView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = asymmetric_view.AsymmetricView.prototype;
  dart.addTypeTests(asymmetric_view.AsymmetricView);
  const products$ = AsymmetricView_products;
  dart.setMethodSignature(asymmetric_view.AsymmetricView, () => ({
    __proto__: dart.getMethods(asymmetric_view.AsymmetricView.__proto__),
    [_buildColumns]: dart.fnType(core.List$(container.Container), [framework.BuildContext]),
    [_evenCasesIndex]: dart.fnType(core.int, [core.int]),
    [_oddCasesIndex]: dart.fnType(core.int, [core.int]),
    [_listItemCount]: dart.fnType(core.int, [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(asymmetric_view.AsymmetricView, "package:flutter_gallery/demo/shrine/supplemental/asymmetric_view.dart");
  dart.setFieldSignature(asymmetric_view.AsymmetricView, () => ({
    __proto__: dart.getFields(asymmetric_view.AsymmetricView.__proto__),
    products: dart.finalFieldType(core.List$(product.Product))
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/supplemental/asymmetric_view", {
    "package:flutter_gallery/demo/shrine/supplemental/asymmetric_view.dart": asymmetric_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["asymmetric_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBsB;;;;;;oBAEuB;AACzC,UAAI,AAAS,iBAAG,kBAAQ,AAAS;AAC/B;;AAWF,YAAA,AA0BG,4BA1B6B,qBAAe,AAAS,yBAAS,QAAK;AAC7D,oBAAQ,AAAI,oBAAa,AAAY,AAAK,0BAAd,OAAO;AACnC;AACP,YAAI,AAAM,AAAI,KAAL,UAAG,OAAK;AAEL,uBAAS,sBAAgB,KAAK;AAMvC,UALD,SAAS,sDACC,AAAQ,qBAAC,MAAM,QACF,AAAI,aAApB,AAAS,0BAAS,KAAY,aAAP,MAAM,IAAG,IACjC,AAAQ,qBAAQ,aAAP,MAAM,IAAG,KAClB;AAEO,UAAb,QAAA,AAAM,KAAD,GAAI;;AAKR,UAFD,SAAS,uDACE,AAAQ,qBAAC,qBAAe,KAAK;;AAG1C,cAAO,qCACE,KAAK,SACL,oDAEE,MAAM;;IAIrB;sBAEwB;AAKtB,YAAa,AAAK,eAAX,KAAK,IAAI,kBAAI;IACtB;qBAEuB;AACrB,YAAa,aAAN,KAAK,IAAG;AACf,YAAmB,AAAO,AAAI,EAAhB,aAAN,KAAK,IAAG,cAAY,IAAI;IAClC;qBAEuB;AACrB,YAAQ,AAAW,AAAI,WAAL,UAAG,OAAK,IACX,AAAK,cAAhB,UAAU,IAAI,kBAAI,IACD,AAAO,AAAI,CAAhB,aAAX,UAAU,IAAG,cAAY,IAAI;IACpC;UAG0B;AACxB,YAAO,gDACiB,+DAEZ,oBAAc,OAAO;IAGnC;;;QAzE0B;QAAU;;;AAAa,kEAAW,GAAG;;EAAC","file":"asymmetric_view.ddc.js"}');
  // Exports:
  return {
    demo__shrine__supplemental__asymmetric_view: asymmetric_view
  };
});

//# sourceMappingURL=asymmetric_view.ddc.js.map
