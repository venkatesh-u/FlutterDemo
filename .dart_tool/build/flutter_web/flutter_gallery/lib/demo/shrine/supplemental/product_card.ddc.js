define(['dart_sdk', 'packages/intl/intl', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/scoped_model/scoped_model', 'packages/flutter_gallery/demo/shrine/model/app_state_model', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_gallery/demo/shrine/model/product'], function(dart_sdk, packages__intl__intl, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__scoped_model__scoped_model, packages__flutter_gallery__demo__shrine__model__app_state_model, packages__flutter__src__rendering__animated_size, packages__flutter_gallery__demo__shrine__model__product) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  const localizations = packages__flutter__src__widgets__actions.src__widgets__localizations;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const theme$ = packages__flutter__material.src__material__theme;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const app_state_model = packages__flutter_gallery__demo__shrine__model__app_state_model.demo__shrine__model__app_state_model;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const product = packages__flutter_gallery__demo__shrine__model__product.demo__shrine__model__product;
  const product_card = Object.create(dart.library);
  let ScopedModelDescendantOfAppStateModel = () => (ScopedModelDescendantOfAppStateModel = dart.constFn(scoped_model.ScopedModelDescendant$(app_state_model.AppStateModel)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextAndWidgetAndAppStateModelToGestureDetector = () => (BuildContextAndWidgetAndAppStateModelToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [framework.BuildContext, framework.Widget, app_state_model.AppStateModel])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 63,
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
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 23,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 23,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 23,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 4,
        [SizedBox_width]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59476
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C42 || CT.C42
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C41 || CT.C41,
        [Padding_padding]: C43 || CT.C43
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C14;
  let C13;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C20;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C29;
  let C26;
  let C25;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C42;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C41;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C43;
  const Padding_padding = dart.privateName(basic, "Padding.padding");
  let C40;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C48;
  let C47;
  const ProductCard_imageAspectRatio = dart.privateName(product_card, "ProductCard.imageAspectRatio");
  const ProductCard_product = dart.privateName(product_card, "ProductCard.product");
  product_card.ProductCard = class ProductCard extends framework.StatelessWidget {
    get imageAspectRatio() {
      return this[imageAspectRatio$];
    }
    set imageAspectRatio(value) {
      super.imageAspectRatio = value;
    }
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    build(context) {
      let formatter = intl.NumberFormat.simpleCurrency({decimalDigits: 0, locale: dart.toString(localizations.Localizations.localeOf(context))});
      let theme = theme$.Theme.of(context);
      let imageWidget = new image.Image.asset(this.product.assetName, {package: this.product.assetPackage, fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      return new (ScopedModelDescendantOfAppStateModel()).new({builder: dart.fn((context, child, model) => new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
            model.addProductToCart(this.product.id);
          }, VoidToNull()), child: child, $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), BuildContextAndWidgetAndAppStateModelToGestureDetector()), child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.AspectRatio.new({aspectRatio: this.imageAspectRatio, child: imageWidget, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new basic.SizedBox.new({height: 65 * dart.notNull(media_query.MediaQuery.of(context).textScaleFactor), width: 121.0, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.end, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new(this.product == null ? "" : this.product.name, {style: theme.textTheme.button, softWrap: false, overflow: paragraph.TextOverflow.ellipsis, maxLines: 1, $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), C20 || CT.C20, new text.Text.new(this.product == null ? "" : formatter.format(this.product.price), {style: theme.textTheme.caption, $creationLocationd_0dea112b090073317d4: C21 || CT.C21})]), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30})]), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), C40 || CT.C40]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
  };
  (product_card.ProductCard.new = function(opts) {
    let imageAspectRatio = opts && 'imageAspectRatio' in opts ? opts.imageAspectRatio : 0.673469387755102;
    let product = opts && 'product' in opts ? opts.product : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[imageAspectRatio$] = imageAspectRatio;
    this[product$] = product;
    if (!(imageAspectRatio == null || dart.notNull(imageAspectRatio) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/shrine/supplemental/product_card.dart", 24, 16, "imageAspectRatio == null || imageAspectRatio > 0");
    product_card.ProductCard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_card.ProductCard.prototype;
  dart.addTypeTests(product_card.ProductCard);
  const imageAspectRatio$ = ProductCard_imageAspectRatio;
  const product$ = ProductCard_product;
  dart.setMethodSignature(product_card.ProductCard, () => ({
    __proto__: dart.getMethods(product_card.ProductCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(product_card.ProductCard, "package:flutter_gallery/demo/shrine/supplemental/product_card.dart");
  dart.setFieldSignature(product_card.ProductCard, () => ({
    __proto__: dart.getFields(product_card.ProductCard.__proto__),
    imageAspectRatio: dart.finalFieldType(core.double),
    product: dart.finalFieldType(product.Product)
  }));
  dart.defineLazy(product_card.ProductCard, {
    /*product_card.ProductCard.kTextBoxHeight*/get kTextBoxHeight() {
      return 65;
    }
  });
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/supplemental/product_card", {
    "package:flutter_gallery/demo/shrine/supplemental/product_card.dart": product_card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product_card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyBe;;;;;;IACC;;;;;;UAKY;AACL,sBAAyB,iDAC3B,WACyB,cAAlB,qCAAS,OAAO;AAGxB,kBAAc,gBAAG,OAAO;AAE5B,wBAAoB,sBAC9B,AAAQ,kCACC,AAAQ,gCACL;AAGd,YAAO,4DACI,SAAc,SAAgB,OAAqB,UACnD,iDACE;AAC6B,YAAlC,AAAM,KAAD,kBAAkB,AAAQ;mCAE1B,KAAK,2HAGT,+BACa,sBAChB,yCACuC,mDACE,0CACrB,sBAChB,wCACe,8BACN,WAAW,yDAEpB,gCACyB,kBAAa,AAAY,0BAAT,OAAO,2BACvC,cACA,yCACgC,gDACE,0CACrB,sBAChB,kBACE,AAAQ,gBAAG,OAAO,KAAK,AAAQ,2BACxB,AAAM,AAAU,KAAX,6BACF,iBACa,2CACb,2EAGZ,kBACE,AAAQ,gBAAG,OAAO,KAAK,AAAU,SAAD,QAAQ,AAAQ,6BACzC,AAAM,AAAU,KAAX;IAchC;;;QAzEyB;QAAiC;;IAAjC;IAAiC;UAC7C,AAAiB,AAAQ,gBAAT,IAAI,QAAyB,aAAjB,gBAAgB,IAAG;AADtD;;EACwD;;;;;;;;;;;;;;;MAK1C,uCAAc","file":"product_card.ddc.js"}');
  // Exports:
  return {
    demo__shrine__supplemental__product_card: product_card
  };
});

//# sourceMappingURL=product_card.ddc.js.map
