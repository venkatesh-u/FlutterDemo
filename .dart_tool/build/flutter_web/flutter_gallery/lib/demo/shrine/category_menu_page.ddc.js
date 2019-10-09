define(['dart_sdk', 'packages/flutter/material', 'packages/scoped_model/scoped_model', 'packages/flutter_gallery/demo/shrine/model/app_state_model', 'packages/flutter/src/widgets/actions', 'packages/flutter_gallery/demo/shrine/colors', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_gallery/demo/shrine/model/product'], function(dart_sdk, packages__flutter__material, packages__scoped_model__scoped_model, packages__flutter_gallery__demo__shrine__model__app_state_model, packages__flutter__src__widgets__actions, packages__flutter_gallery__demo__shrine__colors, packages__flutter__src__painting___network_image_web, packages__flutter_gallery__demo__shrine__model__product) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme$ = packages__flutter__material.src__material__theme;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const app_state_model = packages__flutter_gallery__demo__shrine__model__app_state_model.demo__shrine__model__app_state_model;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const colors = packages__flutter_gallery__demo__shrine__colors.demo__shrine__colors;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const product = packages__flutter_gallery__demo__shrine__model__product.demo__shrine__model__product;
  const category_menu_page = Object.create(dart.library);
  const $replaceAll = dartx.replaceAll;
  const $toUpperCase = dartx.toUpperCase;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let ScopedModelDescendantOfAppStateModel = () => (ScopedModelDescendantOfAppStateModel = dart.constFn(scoped_model.ScopedModelDescendant$(app_state_model.AppStateModel)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndWidgetAndAppStateModelToGestureDetector = () => (BuildContextAndWidgetAndAppStateModelToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [framework.BuildContext, framework.Widget, app_state_model.AppStateModel])))();
  let CategoryToWidget = () => (CategoryToWidget = dart.constFn(dart.fnType(framework.Widget, [product.Category])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 23,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 14,
        [SizedBox_width]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 61,
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
        [_Location_column]: 17,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 40,
        [EdgeInsets_left]: 0
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/shrine/category_menu_page.dart"
      });
    }
  });
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C5;
  let C2;
  let C1;
  let C6;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C13;
  let C12;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C15;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C30;
  let C29;
  const _buildCategory = dart.privateName(category_menu_page, "_buildCategory");
  let C32;
  let C35;
  let C34;
  let C33;
  let C38;
  let C39;
  let C40;
  let C37;
  let C36;
  let C43;
  let C42;
  let C41;
  const CategoryMenuPage_onCategoryTap = dart.privateName(category_menu_page, "CategoryMenuPage.onCategoryTap");
  category_menu_page.CategoryMenuPage = class CategoryMenuPage extends framework.StatelessWidget {
    get onCategoryTap() {
      return this[onCategoryTap$];
    }
    set onCategoryTap(value) {
      super.onCategoryTap = value;
    }
    [_buildCategory](category, context) {
      let categoryString = dart.toString(category)[$replaceAll]("Category.", "")[$toUpperCase]();
      let theme = theme$.Theme.of(context);
      return new (ScopedModelDescendantOfAppStateModel()).new({builder: dart.fn((context, child, model) => new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
            model.setCategory(category);
            if (this.onCategoryTap != null) {
              this.onCategoryTap();
            }
          }, VoidToNull()), child: dart.equals(model.selectedCategory, category) ? new basic.Column.new({children: JSArrayOfWidget().of([C0 || CT.C0, new text.Text.new(categoryString, {style: theme.textTheme.body2, textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), C6 || CT.C6, new container.Container.new({width: 70.0, height: 2.0, color: colors.kShrinePink400, $creationLocationd_0dea112b090073317d4: C7 || CT.C7})]), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}) : new basic.Padding.new({padding: C15 || CT.C15, child: new text.Text.new(categoryString, {style: theme.textTheme.body2.copyWith({color: colors.kShrineBrown900.withAlpha(153)}), textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), BuildContextAndWidgetAndAppStateModelToGestureDetector()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    build(context) {
      return new basic.Center.new({child: new container.Container.new({padding: C32 || CT.C32, color: colors.kShrinePink100, child: new scroll_view.ListView.new({children: product.Category.values[$map](framework.Widget, dart.fn(c => this[_buildCategory](c, context), CategoryToWidget()))[$toList](), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
  };
  (category_menu_page.CategoryMenuPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onCategoryTap = opts && 'onCategoryTap' in opts ? opts.onCategoryTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onCategoryTap$] = onCategoryTap;
    category_menu_page.CategoryMenuPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = category_menu_page.CategoryMenuPage.prototype;
  dart.addTypeTests(category_menu_page.CategoryMenuPage);
  const onCategoryTap$ = CategoryMenuPage_onCategoryTap;
  dart.setMethodSignature(category_menu_page.CategoryMenuPage, () => ({
    __proto__: dart.getMethods(category_menu_page.CategoryMenuPage.__proto__),
    [_buildCategory]: dart.fnType(framework.Widget, [product.Category, framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(category_menu_page.CategoryMenuPage, "package:flutter_gallery/demo/shrine/category_menu_page.dart");
  dart.setFieldSignature(category_menu_page.CategoryMenuPage, () => ({
    __proto__: dart.getFields(category_menu_page.CategoryMenuPage.__proto__),
    onCategoryTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/shrine/category_menu_page", {
    "package:flutter_gallery/demo/shrine/category_menu_page.dart": category_menu_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["category_menu_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2BqB;;;;;;qBAEY,UAAuB;AACvC,2BAA0B,AAAW,AAA4B,cAAhD,QAAQ,eAAuB,aAAa;AAC1D,kBAAc,gBAAG,OAAO;AACxC,YAAO,4DACI,SAAc,SAAgB,OAAqB,UACxD,iDACS;AACsB,YAA3B,AAAM,KAAD,aAAa,QAAQ;AAC1B,gBAAI,sBAAiB;AACJ,cAAf;;mCAG0B,YAAvB,AAAM,KAAD,mBAAqB,QAAQ,IACrC,gCACoB,mCAEhB,kBACE,cAAc,UACP,AAAM,AAAU,KAAX,6BACS,yFAGvB,oCACS,cACC,YACD,0IAIb,sDAES,kBACL,cAAc,UACP,AAAM,AAAU,AAAM,KAAjB,kCACH,AAAgB,iCAAU,mBAEd;IAKvC;UAG0B;AACxB,YAAO,8BACE,4DAEE,8BACA,wCACc,AAAO,AAAgD,gDAA5C,QAAU,KAAM,qBAAe,CAAC,EAAE,OAAO;IAI/E;;;QA5DM;QACC;;;AACF,uEAAW,GAAG;;EAAC","file":"category_menu_page.ddc.js"}');
  // Exports:
  return {
    demo__shrine__category_menu_page: category_menu_page
  };
});

//# sourceMappingURL=category_menu_page.ddc.js.map
