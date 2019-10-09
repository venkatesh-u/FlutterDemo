define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/gestures/arena', 'packages/vector_math/vector_math_64', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/animation/animation', 'packages/flutter_gallery/demo/transformations/transformations_demo_inertial_motion'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__gestures__arena, packages__vector_math__vector_math_64, packages__flutter__src__rendering__animated_size, packages__flutter__src__animation__animation, packages__flutter_gallery__demo__transformations__transformations_demo_inertial_motion) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const scale$ = packages__flutter__src__gestures__arena.src__gestures__scale;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const transformations_demo_inertial_motion = packages__flutter_gallery__demo__transformations__transformations_demo_inertial_motion.demo__transformations__transformations_demo_inertial_motion;
  const transformations_demo_gesture_transformable = Object.create(dart.library);
  const $clamp = dartx.clamp;
  const $abs = dartx.abs;
  const $toInt = dartx.toInt;
  let TapDownDetailsToNull = () => (TapDownDetailsToNull = dart.constFn(dart.fnType(core.Null, [tap.TapDownDetails])))();
  let TapUpDetailsToNull = () => (TapUpDetailsToNull = dart.constFn(dart.fnType(core.Null, [tap.TapUpDetails])))();
  let DragDownDetailsToNull = () => (DragDownDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragDownDetails])))();
  let DragStartDetailsToNull = () => (DragStartDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragStartDetails])))();
  let DragUpdateDetailsToNull = () => (DragUpdateDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragUpdateDetails])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: transformations_demo_gesture_transformable._GestureType.prototype,
        [_name$]: "_GestureType.translate",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: transformations_demo_gesture_transformable._GestureType.prototype,
        [_name$]: "_GestureType.scale",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: transformations_demo_gesture_transformable._GestureType.prototype,
        [_name$]: "_GestureType.rotate",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], transformations_demo_gesture_transformable._GestureType);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 11,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 291,
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
        [_Location_line]: 289,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 287,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapDown",
        [_Location_column]: 7,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 7,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapCancel",
        [_Location_column]: 7,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDoubleTap",
        [_Location_column]: 7,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLongPress",
        [_Location_column]: 7,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLongPressUp",
        [_Location_column]: 7,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragDown",
        [_Location_column]: 7,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragStart",
        [_Location_column]: 7,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragUpdate",
        [_Location_column]: 7,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragEnd",
        [_Location_column]: 7,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragCancel",
        [_Location_column]: 7,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragDown",
        [_Location_column]: 7,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragStart",
        [_Location_column]: 7,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragUpdate",
        [_Location_column]: 7,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragEnd",
        [_Location_column]: 7,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragCancel",
        [_Location_column]: 7,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanDown",
        [_Location_column]: 7,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanStart",
        [_Location_column]: 7,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanUpdate",
        [_Location_column]: 7,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanEnd",
        [_Location_column]: 7,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanCancel",
        [_Location_column]: 7,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleEnd",
        [_Location_column]: 7,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleStart",
        [_Location_column]: 7,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleUpdate",
        [_Location_column]: 7,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 216,
        [_Location_file]: "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 400000
      });
    }
  });
  const GestureTransformable_child = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.child");
  const GestureTransformable_size = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.size");
  const GestureTransformable_reset = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.reset");
  const GestureTransformable_onTapDown = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onTapDown");
  const GestureTransformable_onTapUp = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onTapUp");
  const GestureTransformable_onTap = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onTap");
  const GestureTransformable_onTapCancel = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onTapCancel");
  const GestureTransformable_onDoubleTap = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onDoubleTap");
  const GestureTransformable_onLongPress = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onLongPress");
  const GestureTransformable_onLongPressUp = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onLongPressUp");
  const GestureTransformable_onVerticalDragDown = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onVerticalDragDown");
  const GestureTransformable_onVerticalDragStart = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onVerticalDragStart");
  const GestureTransformable_onVerticalDragUpdate = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onVerticalDragUpdate");
  const GestureTransformable_onVerticalDragEnd = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onVerticalDragEnd");
  const GestureTransformable_onVerticalDragCancel = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onVerticalDragCancel");
  const GestureTransformable_onHorizontalDragDown = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onHorizontalDragDown");
  const GestureTransformable_onHorizontalDragStart = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onHorizontalDragStart");
  const GestureTransformable_onHorizontalDragUpdate = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onHorizontalDragUpdate");
  const GestureTransformable_onHorizontalDragEnd = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onHorizontalDragEnd");
  const GestureTransformable_onHorizontalDragCancel = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onHorizontalDragCancel");
  const GestureTransformable_onPanDown = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onPanDown");
  const GestureTransformable_onPanStart = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onPanStart");
  const GestureTransformable_onPanUpdate = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onPanUpdate");
  const GestureTransformable_onPanEnd = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onPanEnd");
  const GestureTransformable_onPanCancel = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onPanCancel");
  const GestureTransformable_onResetEnd = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onResetEnd");
  const GestureTransformable_onScaleStart = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onScaleStart");
  const GestureTransformable_onScaleUpdate = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onScaleUpdate");
  const GestureTransformable_onScaleEnd = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.onScaleEnd");
  const GestureTransformable_maxScale = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.maxScale");
  const GestureTransformable_minScale = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.minScale");
  const GestureTransformable_boundaryRect = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.boundaryRect");
  const GestureTransformable_disableTranslation = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.disableTranslation");
  const GestureTransformable_disableScale = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.disableScale");
  const GestureTransformable_disableRotation = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.disableRotation");
  const GestureTransformable_initialTranslation = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.initialTranslation");
  const GestureTransformable_initialScale = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.initialScale");
  const GestureTransformable_initialRotation = dart.privateName(transformations_demo_gesture_transformable, "GestureTransformable.initialRotation");
  transformations_demo_gesture_transformable.GestureTransformable = class GestureTransformable extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get reset() {
      return this[reset$];
    }
    set reset(value) {
      super.reset = value;
    }
    get onTapDown() {
      return this[onTapDown$];
    }
    set onTapDown(value) {
      super.onTapDown = value;
    }
    get onTapUp() {
      return this[onTapUp$];
    }
    set onTapUp(value) {
      super.onTapUp = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onTapCancel() {
      return this[onTapCancel$];
    }
    set onTapCancel(value) {
      super.onTapCancel = value;
    }
    get onDoubleTap() {
      return this[onDoubleTap$];
    }
    set onDoubleTap(value) {
      super.onDoubleTap = value;
    }
    get onLongPress() {
      return this[onLongPress$];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get onLongPressUp() {
      return this[onLongPressUp$];
    }
    set onLongPressUp(value) {
      super.onLongPressUp = value;
    }
    get onVerticalDragDown() {
      return this[onVerticalDragDown$];
    }
    set onVerticalDragDown(value) {
      super.onVerticalDragDown = value;
    }
    get onVerticalDragStart() {
      return this[onVerticalDragStart$];
    }
    set onVerticalDragStart(value) {
      super.onVerticalDragStart = value;
    }
    get onVerticalDragUpdate() {
      return this[onVerticalDragUpdate$];
    }
    set onVerticalDragUpdate(value) {
      super.onVerticalDragUpdate = value;
    }
    get onVerticalDragEnd() {
      return this[onVerticalDragEnd$];
    }
    set onVerticalDragEnd(value) {
      super.onVerticalDragEnd = value;
    }
    get onVerticalDragCancel() {
      return this[onVerticalDragCancel$];
    }
    set onVerticalDragCancel(value) {
      super.onVerticalDragCancel = value;
    }
    get onHorizontalDragDown() {
      return this[onHorizontalDragDown$];
    }
    set onHorizontalDragDown(value) {
      super.onHorizontalDragDown = value;
    }
    get onHorizontalDragStart() {
      return this[onHorizontalDragStart$];
    }
    set onHorizontalDragStart(value) {
      super.onHorizontalDragStart = value;
    }
    get onHorizontalDragUpdate() {
      return this[onHorizontalDragUpdate$];
    }
    set onHorizontalDragUpdate(value) {
      super.onHorizontalDragUpdate = value;
    }
    get onHorizontalDragEnd() {
      return this[onHorizontalDragEnd$];
    }
    set onHorizontalDragEnd(value) {
      super.onHorizontalDragEnd = value;
    }
    get onHorizontalDragCancel() {
      return this[onHorizontalDragCancel$];
    }
    set onHorizontalDragCancel(value) {
      super.onHorizontalDragCancel = value;
    }
    get onPanDown() {
      return this[onPanDown$];
    }
    set onPanDown(value) {
      super.onPanDown = value;
    }
    get onPanStart() {
      return this[onPanStart$];
    }
    set onPanStart(value) {
      super.onPanStart = value;
    }
    get onPanUpdate() {
      return this[onPanUpdate$];
    }
    set onPanUpdate(value) {
      super.onPanUpdate = value;
    }
    get onPanEnd() {
      return this[onPanEnd$];
    }
    set onPanEnd(value) {
      super.onPanEnd = value;
    }
    get onPanCancel() {
      return this[onPanCancel$];
    }
    set onPanCancel(value) {
      super.onPanCancel = value;
    }
    get onResetEnd() {
      return this[onResetEnd$];
    }
    set onResetEnd(value) {
      super.onResetEnd = value;
    }
    get onScaleStart() {
      return this[onScaleStart$];
    }
    set onScaleStart(value) {
      super.onScaleStart = value;
    }
    get onScaleUpdate() {
      return this[onScaleUpdate$];
    }
    set onScaleUpdate(value) {
      super.onScaleUpdate = value;
    }
    get onScaleEnd() {
      return this[onScaleEnd$];
    }
    set onScaleEnd(value) {
      super.onScaleEnd = value;
    }
    get maxScale() {
      return this[maxScale$];
    }
    set maxScale(value) {
      super.maxScale = value;
    }
    get minScale() {
      return this[minScale$];
    }
    set minScale(value) {
      super.minScale = value;
    }
    get boundaryRect() {
      return this[boundaryRect$];
    }
    set boundaryRect(value) {
      super.boundaryRect = value;
    }
    get disableTranslation() {
      return this[disableTranslation$];
    }
    set disableTranslation(value) {
      super.disableTranslation = value;
    }
    get disableScale() {
      return this[disableScale$];
    }
    set disableScale(value) {
      super.disableScale = value;
    }
    get disableRotation() {
      return this[disableRotation$];
    }
    set disableRotation(value) {
      super.disableRotation = value;
    }
    get initialTranslation() {
      return this[initialTranslation$];
    }
    set initialTranslation(value) {
      super.initialTranslation = value;
    }
    get initialScale() {
      return this[initialScale$];
    }
    set initialScale(value) {
      super.initialScale = value;
    }
    get initialRotation() {
      return this[initialRotation$];
    }
    set initialRotation(value) {
      super.initialRotation = value;
    }
    createState() {
      return new transformations_demo_gesture_transformable._GestureTransformableState.new();
    }
  };
  (transformations_demo_gesture_transformable.GestureTransformable.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let maxScale = opts && 'maxScale' in opts ? opts.maxScale : 2.5;
    let minScale = opts && 'minScale' in opts ? opts.minScale : 0.8;
    let boundaryRect = opts && 'boundaryRect' in opts ? opts.boundaryRect : null;
    let initialTranslation = opts && 'initialTranslation' in opts ? opts.initialTranslation : null;
    let initialScale = opts && 'initialScale' in opts ? opts.initialScale : null;
    let initialRotation = opts && 'initialRotation' in opts ? opts.initialRotation : null;
    let disableTranslation = opts && 'disableTranslation' in opts ? opts.disableTranslation : false;
    let disableScale = opts && 'disableScale' in opts ? opts.disableScale : false;
    let disableRotation = opts && 'disableRotation' in opts ? opts.disableRotation : false;
    let reset = opts && 'reset' in opts ? opts.reset : false;
    let onTapDown = opts && 'onTapDown' in opts ? opts.onTapDown : null;
    let onTapUp = opts && 'onTapUp' in opts ? opts.onTapUp : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onTapCancel = opts && 'onTapCancel' in opts ? opts.onTapCancel : null;
    let onDoubleTap = opts && 'onDoubleTap' in opts ? opts.onDoubleTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onLongPressUp = opts && 'onLongPressUp' in opts ? opts.onLongPressUp : null;
    let onVerticalDragDown = opts && 'onVerticalDragDown' in opts ? opts.onVerticalDragDown : null;
    let onVerticalDragStart = opts && 'onVerticalDragStart' in opts ? opts.onVerticalDragStart : null;
    let onVerticalDragUpdate = opts && 'onVerticalDragUpdate' in opts ? opts.onVerticalDragUpdate : null;
    let onVerticalDragEnd = opts && 'onVerticalDragEnd' in opts ? opts.onVerticalDragEnd : null;
    let onVerticalDragCancel = opts && 'onVerticalDragCancel' in opts ? opts.onVerticalDragCancel : null;
    let onHorizontalDragDown = opts && 'onHorizontalDragDown' in opts ? opts.onHorizontalDragDown : null;
    let onHorizontalDragStart = opts && 'onHorizontalDragStart' in opts ? opts.onHorizontalDragStart : null;
    let onHorizontalDragUpdate = opts && 'onHorizontalDragUpdate' in opts ? opts.onHorizontalDragUpdate : null;
    let onHorizontalDragEnd = opts && 'onHorizontalDragEnd' in opts ? opts.onHorizontalDragEnd : null;
    let onHorizontalDragCancel = opts && 'onHorizontalDragCancel' in opts ? opts.onHorizontalDragCancel : null;
    let onPanDown = opts && 'onPanDown' in opts ? opts.onPanDown : null;
    let onPanStart = opts && 'onPanStart' in opts ? opts.onPanStart : null;
    let onPanUpdate = opts && 'onPanUpdate' in opts ? opts.onPanUpdate : null;
    let onPanEnd = opts && 'onPanEnd' in opts ? opts.onPanEnd : null;
    let onPanCancel = opts && 'onPanCancel' in opts ? opts.onPanCancel : null;
    let onResetEnd = opts && 'onResetEnd' in opts ? opts.onResetEnd : null;
    let onScaleStart = opts && 'onScaleStart' in opts ? opts.onScaleStart : null;
    let onScaleUpdate = opts && 'onScaleUpdate' in opts ? opts.onScaleUpdate : null;
    let onScaleEnd = opts && 'onScaleEnd' in opts ? opts.onScaleEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[size$] = size;
    this[maxScale$] = maxScale;
    this[minScale$] = minScale;
    this[boundaryRect$] = boundaryRect;
    this[initialTranslation$] = initialTranslation;
    this[initialScale$] = initialScale;
    this[initialRotation$] = initialRotation;
    this[disableTranslation$] = disableTranslation;
    this[disableScale$] = disableScale;
    this[disableRotation$] = disableRotation;
    this[reset$] = reset;
    this[onTapDown$] = onTapDown;
    this[onTapUp$] = onTapUp;
    this[onTap$] = onTap;
    this[onTapCancel$] = onTapCancel;
    this[onDoubleTap$] = onDoubleTap;
    this[onLongPress$] = onLongPress;
    this[onLongPressUp$] = onLongPressUp;
    this[onVerticalDragDown$] = onVerticalDragDown;
    this[onVerticalDragStart$] = onVerticalDragStart;
    this[onVerticalDragUpdate$] = onVerticalDragUpdate;
    this[onVerticalDragEnd$] = onVerticalDragEnd;
    this[onVerticalDragCancel$] = onVerticalDragCancel;
    this[onHorizontalDragDown$] = onHorizontalDragDown;
    this[onHorizontalDragStart$] = onHorizontalDragStart;
    this[onHorizontalDragUpdate$] = onHorizontalDragUpdate;
    this[onHorizontalDragEnd$] = onHorizontalDragEnd;
    this[onHorizontalDragCancel$] = onHorizontalDragCancel;
    this[onPanDown$] = onPanDown;
    this[onPanStart$] = onPanStart;
    this[onPanUpdate$] = onPanUpdate;
    this[onPanEnd$] = onPanEnd;
    this[onPanCancel$] = onPanCancel;
    this[onResetEnd$] = onResetEnd;
    this[onScaleStart$] = onScaleStart;
    this[onScaleUpdate$] = onScaleUpdate;
    this[onScaleEnd$] = onScaleEnd;
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 70, 15, "child != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 71, 15, "size != null");
    if (!(minScale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 72, 15, "minScale != null");
    if (!(dart.notNull(minScale) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 73, 15, "minScale > 0");
    if (!(disableTranslation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 74, 15, "disableTranslation != null");
    if (!(disableScale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 75, 15, "disableScale != null");
    if (!(disableRotation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 76, 15, "disableRotation != null");
    if (!(reset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 77, 15, "reset != null");
    if (!(!dart.test(reset) || onResetEnd != null)) dart.assertFailed("Must implement onResetEnd to use reset.", "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 79, 10, "!reset || onResetEnd != null");
    transformations_demo_gesture_transformable.GestureTransformable.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = transformations_demo_gesture_transformable.GestureTransformable.prototype;
  dart.addTypeTests(transformations_demo_gesture_transformable.GestureTransformable);
  const child$ = GestureTransformable_child;
  const size$ = GestureTransformable_size;
  const reset$ = GestureTransformable_reset;
  const onTapDown$ = GestureTransformable_onTapDown;
  const onTapUp$ = GestureTransformable_onTapUp;
  const onTap$ = GestureTransformable_onTap;
  const onTapCancel$ = GestureTransformable_onTapCancel;
  const onDoubleTap$ = GestureTransformable_onDoubleTap;
  const onLongPress$ = GestureTransformable_onLongPress;
  const onLongPressUp$ = GestureTransformable_onLongPressUp;
  const onVerticalDragDown$ = GestureTransformable_onVerticalDragDown;
  const onVerticalDragStart$ = GestureTransformable_onVerticalDragStart;
  const onVerticalDragUpdate$ = GestureTransformable_onVerticalDragUpdate;
  const onVerticalDragEnd$ = GestureTransformable_onVerticalDragEnd;
  const onVerticalDragCancel$ = GestureTransformable_onVerticalDragCancel;
  const onHorizontalDragDown$ = GestureTransformable_onHorizontalDragDown;
  const onHorizontalDragStart$ = GestureTransformable_onHorizontalDragStart;
  const onHorizontalDragUpdate$ = GestureTransformable_onHorizontalDragUpdate;
  const onHorizontalDragEnd$ = GestureTransformable_onHorizontalDragEnd;
  const onHorizontalDragCancel$ = GestureTransformable_onHorizontalDragCancel;
  const onPanDown$ = GestureTransformable_onPanDown;
  const onPanStart$ = GestureTransformable_onPanStart;
  const onPanUpdate$ = GestureTransformable_onPanUpdate;
  const onPanEnd$ = GestureTransformable_onPanEnd;
  const onPanCancel$ = GestureTransformable_onPanCancel;
  const onResetEnd$ = GestureTransformable_onResetEnd;
  const onScaleStart$ = GestureTransformable_onScaleStart;
  const onScaleUpdate$ = GestureTransformable_onScaleUpdate;
  const onScaleEnd$ = GestureTransformable_onScaleEnd;
  const maxScale$ = GestureTransformable_maxScale;
  const minScale$ = GestureTransformable_minScale;
  const boundaryRect$ = GestureTransformable_boundaryRect;
  const disableTranslation$ = GestureTransformable_disableTranslation;
  const disableScale$ = GestureTransformable_disableScale;
  const disableRotation$ = GestureTransformable_disableRotation;
  const initialTranslation$ = GestureTransformable_initialTranslation;
  const initialScale$ = GestureTransformable_initialScale;
  const initialRotation$ = GestureTransformable_initialRotation;
  dart.setMethodSignature(transformations_demo_gesture_transformable.GestureTransformable, () => ({
    __proto__: dart.getMethods(transformations_demo_gesture_transformable.GestureTransformable.__proto__),
    createState: dart.fnType(transformations_demo_gesture_transformable._GestureTransformableState, [])
  }));
  dart.setLibraryUri(transformations_demo_gesture_transformable.GestureTransformable, "package:flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart");
  dart.setFieldSignature(transformations_demo_gesture_transformable.GestureTransformable, () => ({
    __proto__: dart.getFields(transformations_demo_gesture_transformable.GestureTransformable.__proto__),
    child: dart.finalFieldType(framework.Widget),
    size: dart.finalFieldType(ui.Size),
    reset: dart.finalFieldType(core.bool),
    onTapDown: dart.finalFieldType(dart.fnType(dart.void, [tap.TapDownDetails])),
    onTapUp: dart.finalFieldType(dart.fnType(dart.void, [tap.TapUpDetails])),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onTapCancel: dart.finalFieldType(dart.fnType(dart.void, [])),
    onDoubleTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onLongPress: dart.finalFieldType(dart.fnType(dart.void, [])),
    onLongPressUp: dart.finalFieldType(dart.fnType(dart.void, [])),
    onVerticalDragDown: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragDownDetails])),
    onVerticalDragStart: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragStartDetails])),
    onVerticalDragUpdate: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onVerticalDragEnd: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragEndDetails])),
    onVerticalDragCancel: dart.finalFieldType(dart.fnType(dart.void, [])),
    onHorizontalDragDown: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragDownDetails])),
    onHorizontalDragStart: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragStartDetails])),
    onHorizontalDragUpdate: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onHorizontalDragEnd: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragEndDetails])),
    onHorizontalDragCancel: dart.finalFieldType(dart.fnType(dart.void, [])),
    onPanDown: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragDownDetails])),
    onPanStart: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragStartDetails])),
    onPanUpdate: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onPanEnd: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragEndDetails])),
    onPanCancel: dart.finalFieldType(dart.fnType(dart.void, [])),
    onResetEnd: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScaleStart: dart.finalFieldType(dart.fnType(dart.void, [scale$.ScaleStartDetails])),
    onScaleUpdate: dart.finalFieldType(dart.fnType(dart.void, [scale$.ScaleUpdateDetails])),
    onScaleEnd: dart.finalFieldType(dart.fnType(dart.void, [scale$.ScaleEndDetails])),
    maxScale: dart.finalFieldType(core.double),
    minScale: dart.finalFieldType(core.double),
    boundaryRect: dart.finalFieldType(ui.Rect),
    disableTranslation: dart.finalFieldType(core.bool),
    disableScale: dart.finalFieldType(core.bool),
    disableRotation: dart.finalFieldType(core.bool),
    initialTranslation: dart.finalFieldType(ui.Offset),
    initialScale: dart.finalFieldType(core.double),
    initialRotation: dart.finalFieldType(core.double)
  }));
  const _name$ = dart.privateName(transformations_demo_gesture_transformable, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  transformations_demo_gesture_transformable._GestureType = class _GestureType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (transformations_demo_gesture_transformable._GestureType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = transformations_demo_gesture_transformable._GestureType.prototype;
  dart.addTypeTests(transformations_demo_gesture_transformable._GestureType);
  dart.setLibraryUri(transformations_demo_gesture_transformable._GestureType, "package:flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart");
  dart.setFieldSignature(transformations_demo_gesture_transformable._GestureType, () => ({
    __proto__: dart.getFields(transformations_demo_gesture_transformable._GestureType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(transformations_demo_gesture_transformable._GestureType, ['toString']);
  transformations_demo_gesture_transformable._GestureType.translate = C0 || CT.C0;
  transformations_demo_gesture_transformable._GestureType.scale = C1 || CT.C1;
  transformations_demo_gesture_transformable._GestureType.rotate = C2 || CT.C2;
  transformations_demo_gesture_transformable._GestureType.values = C3 || CT.C3;
  const _animation = dart.privateName(transformations_demo_gesture_transformable, "_animation");
  const _controller = dart.privateName(transformations_demo_gesture_transformable, "_controller");
  const _animationReset = dart.privateName(transformations_demo_gesture_transformable, "_animationReset");
  const _controllerReset = dart.privateName(transformations_demo_gesture_transformable, "_controllerReset");
  const _translateFromScene = dart.privateName(transformations_demo_gesture_transformable, "_translateFromScene");
  const _scaleStart = dart.privateName(transformations_demo_gesture_transformable, "_scaleStart");
  const _rotationStart = dart.privateName(transformations_demo_gesture_transformable, "_rotationStart");
  const _boundaryRect = dart.privateName(transformations_demo_gesture_transformable, "_boundaryRect");
  const _transform = dart.privateName(transformations_demo_gesture_transformable, "_transform");
  const _currentRotation = dart.privateName(transformations_demo_gesture_transformable, "_currentRotation");
  const _initialTransform = dart.privateName(transformations_demo_gesture_transformable, "_initialTransform");
  const _animateResetInitialize = dart.privateName(transformations_demo_gesture_transformable, "_animateResetInitialize");
  const _animateResetStop = dart.privateName(transformations_demo_gesture_transformable, "_animateResetStop");
  const _onScaleEnd = dart.privateName(transformations_demo_gesture_transformable, "_onScaleEnd");
  const _onScaleStart = dart.privateName(transformations_demo_gesture_transformable, "_onScaleStart");
  const _onScaleUpdate = dart.privateName(transformations_demo_gesture_transformable, "_onScaleUpdate");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C17;
  let C16;
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C45;
  const _onAnimate = dart.privateName(transformations_demo_gesture_transformable, "_onAnimate");
  const _onAnimateReset = dart.privateName(transformations_demo_gesture_transformable, "_onAnimateReset");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C46;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(transformations_demo_gesture_transformable.GestureTransformable) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(transformations_demo_gesture_transformable.GestureTransformable)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(transformations_demo_gesture_transformable.GestureTransformable));
  transformations_demo_gesture_transformable._GestureTransformableState = class _GestureTransformableState extends State_TickerProviderStateMixin$36 {
    get [_initialTransform]() {
      let matrix = vector_math_64.Matrix4.identity();
      if (this.widget.initialTranslation != null) {
        matrix = this.matrixTranslate(matrix, this.widget.initialTranslation);
      }
      if (this.widget.initialScale != null) {
        matrix = this.matrixScale(matrix, this.widget.initialScale);
      }
      if (this.widget.initialRotation != null) {
        matrix = this.matrixRotate(matrix, this.widget.initialRotation, ui.Offset.zero);
      }
      return matrix;
    }
    static fromViewport(viewportPoint, transform) {
      let inverseMatrix = vector_math_64.Matrix4.inverted(transform);
      let untransformed = inverseMatrix.transform3(vector_math_64.Vector3.new(viewportPoint.dx, viewportPoint.dy, 0.0));
      return new ui.Offset.new(untransformed.x, untransformed.y);
    }
    static getOffset(context) {
      let renderObject = box.RenderBox._check(context.findRenderObject());
      return renderObject.localToGlobal(ui.Offset.zero);
    }
    initState() {
      let t0;
      super.initState();
      this[_boundaryRect] = (t0 = this.widget.boundaryRect, t0 == null ? ui.Offset.zero['&'](this.widget.size) : t0);
      this[_transform] = this[_initialTransform];
      this[_controller] = new animation_controller.AnimationController.new({vsync: this});
      this[_controllerReset] = new animation_controller.AnimationController.new({vsync: this});
      if (dart.test(this.widget.reset)) {
        this[_animateResetInitialize]();
      }
    }
    didUpdateWidget(oldWidget) {
      transformations_demo_gesture_transformable.GestureTransformable._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (dart.test(this.widget.reset) && !dart.test(oldWidget.reset) && this[_animationReset] == null) {
        this[_animateResetInitialize]();
      } else if (!dart.test(this.widget.reset) && dart.test(oldWidget.reset) && this[_animationReset] != null) {
        this[_animateResetStop]();
      }
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTapDown: this.widget.onTapDown == null ? null : dart.fn(details => {
          this.widget.onTapDown(new tap.TapDownDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, TapDownDetailsToNull()), onTapUp: this.widget.onTapUp == null ? null : dart.fn(details => {
          this.widget.onTapUp(new tap.TapUpDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, TapUpDetailsToNull()), onTap: this.widget.onTap, onTapCancel: this.widget.onTapCancel, onDoubleTap: this.widget.onDoubleTap, onLongPress: this.widget.onLongPress, onLongPressUp: this.widget.onLongPressUp, onVerticalDragDown: this.widget.onVerticalDragDown == null ? null : dart.fn(details => {
          this.widget.onVerticalDragDown(new drag_details.DragDownDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragDownDetailsToNull()), onVerticalDragStart: this.widget.onVerticalDragStart == null ? null : dart.fn(details => {
          this.widget.onVerticalDragStart(new drag_details.DragStartDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragStartDetailsToNull()), onVerticalDragUpdate: this.widget.onVerticalDragUpdate == null ? null : dart.fn(details => {
          this.widget.onVerticalDragUpdate(new drag_details.DragUpdateDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragUpdateDetailsToNull()), onVerticalDragEnd: this.widget.onVerticalDragEnd, onVerticalDragCancel: this.widget.onVerticalDragCancel, onHorizontalDragDown: this.widget.onHorizontalDragDown == null ? null : dart.fn(details => {
          this.widget.onHorizontalDragDown(new drag_details.DragDownDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragDownDetailsToNull()), onHorizontalDragStart: this.widget.onHorizontalDragStart == null ? null : dart.fn(details => {
          this.widget.onHorizontalDragStart(new drag_details.DragStartDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragStartDetailsToNull()), onHorizontalDragUpdate: this.widget.onHorizontalDragUpdate == null ? null : dart.fn(details => {
          this.widget.onHorizontalDragUpdate(new drag_details.DragUpdateDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragUpdateDetailsToNull()), onHorizontalDragEnd: this.widget.onHorizontalDragEnd, onHorizontalDragCancel: this.widget.onHorizontalDragCancel, onPanDown: this.widget.onPanDown == null ? null : dart.fn(details => {
          this.widget.onPanDown(new drag_details.DragDownDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragDownDetailsToNull()), onPanStart: this.widget.onPanStart == null ? null : dart.fn(details => {
          this.widget.onPanStart(new drag_details.DragStartDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragStartDetailsToNull()), onPanUpdate: this.widget.onPanUpdate == null ? null : dart.fn(details => {
          this.widget.onPanUpdate(new drag_details.DragUpdateDetails.new({globalPosition: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.globalPosition['-'](transformations_demo_gesture_transformable._GestureTransformableState.getOffset(context)), this[_transform])}));
        }, DragUpdateDetailsToNull()), onPanEnd: this.widget.onPanEnd, onPanCancel: this.widget.onPanCancel, onScaleEnd: dart.bind(this, _onScaleEnd), onScaleStart: dart.bind(this, _onScaleStart), onScaleUpdate: dart.bind(this, _onScaleUpdate), child: new basic.ClipRect.new({child: new basic.Transform.new({transform: this[_transform], child: new container.Container.new({child: this.widget.child, height: this.widget.size.height, width: this.widget.size.width, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
    matrixTranslate(matrix, translation) {
      let t0;
      if (dart.test(this.widget.disableTranslation) || dart.equals(translation, ui.Offset.zero)) {
        return matrix;
      }
      let scale = this[_transform].getMaxScaleOnAxis();
      let scaledSize = this.widget.size['/'](scale);
      let viewportBoundaries = new ui.Rect.fromLTRB(this[_boundaryRect].left, this[_boundaryRect].top, dart.notNull(this[_boundaryRect].right) - dart.notNull(scaledSize.width), dart.notNull(this[_boundaryRect].bottom) - dart.notNull(scaledSize.height));
      let translationBoundaries = new ui.Rect.fromLTRB(-dart.notNull(scale) * dart.notNull(viewportBoundaries.right), -dart.notNull(scale) * dart.notNull(viewportBoundaries.bottom), -dart.notNull(scale) * dart.notNull(viewportBoundaries.left), -dart.notNull(scale) * dart.notNull(viewportBoundaries.top));
      let nextMatrix = (t0 = matrix.clone(), t0.translate(translation.dx, translation.dy), t0);
      let nextTranslationVector = nextMatrix.getTranslation();
      let nextTranslation = new ui.Offset.new(nextTranslationVector.x, nextTranslationVector.y);
      let inBoundaries = translationBoundaries.contains(new ui.Offset.new(nextTranslation.dx, nextTranslation.dy));
      if (!dart.test(inBoundaries)) {
        return matrix;
      }
      return nextMatrix;
    }
    matrixScale(matrix, scale) {
      let t0;
      if (dart.test(this.widget.disableScale) || scale === 1) {
        return matrix;
      }
      if (!(scale !== 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart", 352, 12, "scale != 0");
      let tl = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(C45 || CT.C45, this[_transform]);
      let tr = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(new ui.Offset.new(this.widget.size.width, 0.0), this[_transform]);
      let bl = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(new ui.Offset.new(0.0, this.widget.size.height), this[_transform]);
      let br = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(new ui.Offset.new(this.widget.size.width, this.widget.size.height), this[_transform]);
      if (!dart.test(this[_boundaryRect].contains(tl)) || !dart.test(this[_boundaryRect].contains(tr)) || !dart.test(this[_boundaryRect].contains(bl)) || !dart.test(this[_boundaryRect].contains(br))) {
        return matrix;
      }
      let currentScale = this[_transform].getMaxScaleOnAxis();
      let totalScale = dart.notNull(currentScale) * dart.notNull(scale);
      let clampedTotalScale = totalScale[$clamp](this.widget.minScale, this.widget.maxScale);
      let clampedScale = clampedTotalScale / dart.notNull(currentScale);
      t0 = matrix;
      t0.scale(clampedScale);
      return t0;
    }
    matrixRotate(matrix, rotation, focalPoint) {
      let t0;
      if (dart.test(this.widget.disableRotation) || rotation === 0) {
        return matrix;
      }
      let focalPointScene = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(focalPoint, matrix);
      t0 = matrix;
      t0.translate(focalPointScene.dx, focalPointScene.dy);
      t0.rotateZ(-dart.notNull(rotation));
      t0.translate(-dart.notNull(focalPointScene.dx), -dart.notNull(focalPointScene.dy));
      return t0;
    }
    [_onScaleStart](details) {
      let t0;
      if (this.widget.onScaleStart != null) {
        this.widget.onScaleStart(details);
      }
      if (dart.test(this[_controller].isAnimating)) {
        this[_controller].stop();
        this[_controller].reset();
        t0 = this[_animation];
        t0 == null ? null : t0.removeListener(dart.bind(this, _onAnimate));
        this[_animation] = null;
      }
      if (dart.test(this[_controllerReset].isAnimating)) {
        this[_animateResetStop]();
      }
      this.gestureType = null;
      this.setState(dart.fn(() => {
        this[_scaleStart] = this[_transform].getMaxScaleOnAxis();
        this[_translateFromScene] = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.focalPoint, this[_transform]);
        this[_rotationStart] = this[_currentRotation];
      }, VoidToNull()));
    }
    [_onScaleUpdate](details) {
      let scale = this[_transform].getMaxScaleOnAxis();
      if (this.widget.onScaleUpdate != null) {
        this.widget.onScaleUpdate(new scale$.ScaleUpdateDetails.new({focalPoint: transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.focalPoint, this[_transform]), scale: details.scale, rotation: details.rotation}));
      }
      let focalPointScene = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.focalPoint, this[_transform]);
      if (this.gestureType == null) {
        if ((dart.notNull(details.scale) - 1)[$abs]() > details.rotation[$abs]()) {
          this.gestureType = transformations_demo_gesture_transformable._GestureType.scale;
        } else if (details.rotation !== 0) {
          this.gestureType = transformations_demo_gesture_transformable._GestureType.rotate;
        } else {
          this.gestureType = transformations_demo_gesture_transformable._GestureType.translate;
        }
      }
      this.setState(dart.fn(() => {
        if (dart.equals(this.gestureType, transformations_demo_gesture_transformable._GestureType.scale) && this[_scaleStart] != null) {
          let desiredScale = dart.notNull(this[_scaleStart]) * dart.notNull(details.scale);
          let scaleChange = desiredScale / dart.notNull(scale);
          this[_transform] = this.matrixScale(this[_transform], scaleChange);
          scale = this[_transform].getMaxScaleOnAxis();
          let focalPointSceneNext = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.focalPoint, this[_transform]);
          this[_transform] = this.matrixTranslate(this[_transform], focalPointSceneNext['-'](focalPointScene));
        } else if (dart.equals(this.gestureType, transformations_demo_gesture_transformable._GestureType.rotate) && details.rotation !== 0.0) {
          let desiredRotation = dart.notNull(this[_rotationStart]) + dart.notNull(details.rotation);
          this[_transform] = this.matrixRotate(this[_transform], dart.notNull(this[_currentRotation]) - desiredRotation, details.focalPoint);
          this[_currentRotation] = desiredRotation;
        } else if (this[_translateFromScene] != null && details.scale === 1.0) {
          let translationChange = focalPointScene['-'](this[_translateFromScene]);
          this[_transform] = this.matrixTranslate(this[_transform], translationChange);
          this[_translateFromScene] = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(details.focalPoint, this[_transform]);
        }
      }, VoidToNull()));
    }
    [_onScaleEnd](details) {
      let t0;
      if (this.widget.onScaleEnd != null) {
        this.widget.onScaleEnd(details);
      }
      this.setState(dart.fn(() => {
        this[_scaleStart] = null;
        this[_rotationStart] = null;
        this[_translateFromScene] = null;
      }, VoidToNull()));
      t0 = this[_animation];
      t0 == null ? null : t0.removeListener(dart.bind(this, _onAnimate));
      this[_controller].reset();
      let velocityTotal = details.velocity.pixelsPerSecond.dx[$abs]() + details.velocity.pixelsPerSecond.dy[$abs]();
      if (velocityTotal === 0) {
        return;
      }
      let translationVector = this[_transform].getTranslation();
      let translation = new ui.Offset.new(translationVector.x, translationVector.y);
      let inertialMotion = new transformations_demo_inertial_motion.InertialMotion.new(details.velocity, translation);
      this[_animation] = new (TweenOfOffset()).new({begin: translation, end: inertialMotion.finalPosition}).animate(this[_controller]);
      this[_controller].duration = new core.Duration.new({milliseconds: inertialMotion.duration[$toInt]()});
      this[_animation].addListener(dart.bind(this, _onAnimate));
      this[_controller].fling();
    }
    [_onAnimate]() {
      let t0;
      this.setState(dart.fn(() => {
        let translationVector = this[_transform].getTranslation();
        let translation = new ui.Offset.new(translationVector.x, translationVector.y);
        let translationScene = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(translation, this[_transform]);
        let animationScene = transformations_demo_gesture_transformable._GestureTransformableState.fromViewport(this[_animation].value, this[_transform]);
        let translationChangeScene = animationScene['-'](translationScene);
        this[_transform] = this.matrixTranslate(this[_transform], translationChangeScene);
      }, VoidToNull()));
      if (!dart.test(this[_controller].isAnimating)) {
        t0 = this[_animation];
        t0 == null ? null : t0.removeListener(dart.bind(this, _onAnimate));
        this[_animation] = null;
        this[_controller].reset();
      }
    }
    [_onAnimateReset]() {
      let t0;
      this.setState(dart.fn(() => {
        this[_transform] = this[_animationReset].value;
      }, VoidToNull()));
      if (!dart.test(this[_controllerReset].isAnimating)) {
        t0 = this[_animationReset];
        t0 == null ? null : t0.removeListener(dart.bind(this, _onAnimateReset));
        this[_animationReset] = null;
        this[_controllerReset].reset();
        this.widget.onResetEnd();
      }
    }
    [_animateResetInitialize]() {
      this[_controllerReset].reset();
      this[_animationReset] = new implicit_animations.Matrix4Tween.new({begin: this[_transform], end: this[_initialTransform]}).animate(this[_controllerReset]);
      this[_controllerReset].duration = C46 || CT.C46;
      this[_animationReset].addListener(dart.bind(this, _onAnimateReset));
      this[_controllerReset].forward();
    }
    [_animateResetStop]() {
      let t0;
      this[_controllerReset].stop();
      t0 = this[_animationReset];
      t0 == null ? null : t0.removeListener(dart.bind(this, _onAnimateReset));
      this[_animationReset] = null;
      this[_controllerReset].reset();
      this.widget.onResetEnd();
    }
    dispose() {
      this[_controller].dispose();
      this[_controllerReset].dispose();
      super.dispose();
    }
  };
  (transformations_demo_gesture_transformable._GestureTransformableState.new = function() {
    this[_animation] = null;
    this[_controller] = null;
    this[_animationReset] = null;
    this[_controllerReset] = null;
    this[_translateFromScene] = null;
    this[_scaleStart] = null;
    this[_rotationStart] = 0.0;
    this[_boundaryRect] = null;
    this[_transform] = vector_math_64.Matrix4.identity();
    this[_currentRotation] = 0.0;
    this.gestureType = null;
    transformations_demo_gesture_transformable._GestureTransformableState.__proto__.new.call(this);
    ;
  }).prototype = transformations_demo_gesture_transformable._GestureTransformableState.prototype;
  dart.addTypeTests(transformations_demo_gesture_transformable._GestureTransformableState);
  dart.setMethodSignature(transformations_demo_gesture_transformable._GestureTransformableState, () => ({
    __proto__: dart.getMethods(transformations_demo_gesture_transformable._GestureTransformableState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    matrixTranslate: dart.fnType(vector_math_64.Matrix4, [vector_math_64.Matrix4, ui.Offset]),
    matrixScale: dart.fnType(vector_math_64.Matrix4, [vector_math_64.Matrix4, core.double]),
    matrixRotate: dart.fnType(vector_math_64.Matrix4, [vector_math_64.Matrix4, core.double, ui.Offset]),
    [_onScaleStart]: dart.fnType(dart.void, [scale$.ScaleStartDetails]),
    [_onScaleUpdate]: dart.fnType(dart.void, [scale$.ScaleUpdateDetails]),
    [_onScaleEnd]: dart.fnType(dart.void, [scale$.ScaleEndDetails]),
    [_onAnimate]: dart.fnType(dart.void, []),
    [_onAnimateReset]: dart.fnType(dart.void, []),
    [_animateResetInitialize]: dart.fnType(dart.void, []),
    [_animateResetStop]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(transformations_demo_gesture_transformable._GestureTransformableState, () => ({
    __proto__: dart.getGetters(transformations_demo_gesture_transformable._GestureTransformableState.__proto__),
    [_initialTransform]: vector_math_64.Matrix4
  }));
  dart.setLibraryUri(transformations_demo_gesture_transformable._GestureTransformableState, "package:flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart");
  dart.setFieldSignature(transformations_demo_gesture_transformable._GestureTransformableState, () => ({
    __proto__: dart.getFields(transformations_demo_gesture_transformable._GestureTransformableState.__proto__),
    [_animation]: dart.fieldType(animation.Animation$(ui.Offset)),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animationReset]: dart.fieldType(animation.Animation$(vector_math_64.Matrix4)),
    [_controllerReset]: dart.fieldType(animation_controller.AnimationController),
    [_translateFromScene]: dart.fieldType(ui.Offset),
    [_scaleStart]: dart.fieldType(core.double),
    [_rotationStart]: dart.fieldType(core.double),
    [_boundaryRect]: dart.fieldType(ui.Rect),
    [_transform]: dart.fieldType(vector_math_64.Matrix4),
    [_currentRotation]: dart.fieldType(core.double),
    gestureType: dart.fieldType(transformations_demo_gesture_transformable._GestureType)
  }));
  dart.trackLibraries("packages/flutter_gallery/demo/transformations/transformations_demo_gesture_transformable", {
    "package:flutter_gallery/demo/transformations/transformations_demo_gesture_transformable.dart": transformations_demo_gesture_transformable
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["transformations_demo_gesture_transformable.dart"],"names":[],"mappings":"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","file":"transformations_demo_gesture_transformable.ddc.js"}');
  // Exports:
  return {
    demo__transformations__transformations_demo_gesture_transformable: transformations_demo_gesture_transformable
  };
});

//# sourceMappingURL=transformations_demo_gesture_transformable.ddc.js.map
