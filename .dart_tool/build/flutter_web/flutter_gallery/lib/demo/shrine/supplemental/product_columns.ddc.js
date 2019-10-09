define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/demo/shrine/supplemental/product_card', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_gallery/demo/shrine/model/product'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__demo__shrine__supplemental__product_card, packages__flutter__src__rendering__animated_size, packages__flutter_gallery__demo__shrine__model__product) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const product_card = packages__flutter_gallery__demo__shrine__supplemental__product_card.demo__shrine__supplemental__product_card;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const product = packages__flutter_gallery__demo__shrine__model__product.demo__shrine__model__product;
  const product_columns = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndBoxConstraintsToListView = () => (BuildContextAndBoxConstraintsToListView = dart.constFn(dart.fnType(scroll_view.ListView, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: scroll_physics.ClampingScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 0,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 28
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "imageAspectRatio",
        [_Location_column]: 19,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 19,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 46,
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
        [_Location_column]: 11,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 44,
        [SizedBox_width]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 28,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "imageAspectRatio",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 26,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 40,
        [SizedBox_width]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 11,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reverse",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart"
      });
    }
  });
  const ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  let C0;
  const EdgeInsetsDirectional_bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  const EdgeInsetsDirectional_end = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  const EdgeInsetsDirectional_top = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  const EdgeInsetsDirectional_start = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C3;
  let C2;
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C13;
  let C14;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C28;
  let C27;
  const TwoProductCardColumn_bottom = dart.privateName(product_columns, "TwoProductCardColumn.bottom");
  const TwoProductCardColumn_top = dart.privateName(product_columns, "TwoProductCardColumn.top");
  product_columns.TwoProductCardColumn = class TwoProductCardColumn extends framework.StatelessWidget {
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let heightOfCards = (dart.notNull(constraints.biggest.height) - 44) / 2.0;
          let availableHeightForImages = heightOfCards - 65;
          let imageAspectRatio = availableHeightForImages >= 0.0 ? dart.notNull(constraints.biggest.width) / availableHeightForImages : 49.0 / 33.0;
          return new scroll_view.ListView.new({physics: C0 || CT.C0, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C1 || CT.C1, child: this.top != null ? new product_card.ProductCard.new({imageAspectRatio: imageAspectRatio, product: this.top, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}) : new basic.SizedBox.new({height: heightOfCards > 0 ? heightOfCards : 44, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), C13 || CT.C13, new basic.Padding.new({padding: C14 || CT.C14, child: new product_card.ProductCard.new({imageAspectRatio: imageAspectRatio, product: this.bottom, $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19})]), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
        }, BuildContextAndBoxConstraintsToListView()), $creationLocationd_0dea112b090073317d4: C27 || CT.C27});
    }
  };
  (product_columns.TwoProductCardColumn.new = function(opts) {
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[bottom$] = bottom;
    this[top$] = top;
    if (!(bottom != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_columns.dart", 24, 15, "bottom != null");
    product_columns.TwoProductCardColumn.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_columns.TwoProductCardColumn.prototype;
  dart.addTypeTests(product_columns.TwoProductCardColumn);
  const bottom$ = TwoProductCardColumn_bottom;
  const top$ = TwoProductCardColumn_top;
  dart.setMethodSignature(product_columns.TwoProductCardColumn, () => ({
    __proto__: dart.getMethods(product_columns.TwoProductCardColumn.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(product_columns.TwoProductCardColumn, "package:flutter_gallery/demo/shrine/supplemental/product_columns.dart");
  dart.setFieldSignature(product_columns.TwoProductCardColumn, () => ({
    __proto__: dart.getFields(product_columns.TwoProductCardColumn.__proto__),
    bottom: dart.finalFieldType(product.Product),
    top: dart.finalFieldType(product.Product)
  }));
  let C30;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C38;
  let C35;
  let C34;
  const OneProductCardColumn_product = dart.privateName(product_columns, "OneProductCardColumn.product");
  product_columns.OneProductCardColumn = class OneProductCardColumn extends framework.StatelessWidget {
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    build(context) {
      return new scroll_view.ListView.new({physics: C0 || CT.C0, reverse: true, children: JSArrayOfWidget().of([C30 || CT.C30, new product_card.ProductCard.new({product: this.product, $creationLocationd_0dea112b090073317d4: C31 || CT.C31})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34});
    }
  };
  (product_columns.OneProductCardColumn.new = function(opts) {
    let product = opts && 'product' in opts ? opts.product : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[product$] = product;
    product_columns.OneProductCardColumn.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_columns.OneProductCardColumn.prototype;
  dart.addTypeTests(product_columns.OneProductCardColumn);
  const product$ = OneProductCardColumn_product;
  dart.setMethodSignature(product_columns.OneProductCardColumn, () => ({
    __proto__: dart.getMethods(product_columns.OneProductCardColumn.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(product_columns.OneProductCardColumn, "package:flutter_gallery/demo/shrine/supplemental/product_columns.dart");
  dart.setFieldSignature(product_columns.OneProductCardColumn, () => ({
    __proto__: dart.getFields(product_columns.OneProductCardColumn.__proto__),
    product: dart.finalFieldType(product.Product)
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/supplemental/product_columns", {
    "package:flutter_gallery/demo/shrine/supplemental/product_columns.dart": product_columns
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product_columns.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyBgB;;;;;;IAAQ;;;;;;UAGI;AACxB,YAAO,gDAAuB,SAAc,SAAwB;AAGrD,8BAA4D,CAAhB,aAA3B,AAAY,AAAQ,WAAT,yBAAkC;AAC9D,yCAA2B,AAAc,aAAD;AAGxC,iCAAmB,AAAyB,wBAAD,IAAI,MAC9B,aAA1B,AAAY,AAAQ,WAAT,kBAAiB,wBAAwB,GACpD,AAAK,OAAE;AAEX,gBAAO,+DAEa,sBAChB,oDAES,AACL,YADY,OACV,oDACoB,gBAAgB,WACzB,kEAEX,gCACU,AAAc,aAAD,GAAG,IAAI,aAAa,oIAIjD,sDAES,oDACa,gBAAgB,WACzB;;IAMrB;;;QA5CiB;QACV;;IADU;IACV;UACK,MAAM,IAAI;AAHhB;;EAGqB;;;;;;;;;;;;;;;;;;;;;;;;;IAgDb;;;;;;UAGY;AACxB,YAAO,8DAEI,gBACS,qCAIhB,2CACW;IAIjB;;;QAlBiC;;;AAA3B;;EAAoC","file":"product_columns.ddc.js"}');
  // Exports:
  return {
    demo__shrine__supplemental__product_columns: product_columns
  };
});

//# sourceMappingURL=product_columns.ddc.js.map
