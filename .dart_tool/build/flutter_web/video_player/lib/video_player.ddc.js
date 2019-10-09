define(['dart_sdk', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__gestures__arena, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const texture = packages__flutter__src__widgets__actions.src__widgets__texture;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const box$ = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const colors = packages__flutter__material.src__material__colors;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const video_player = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $join = dartx.join;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $clamp = dartx.clamp;
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicToDurationRange = () => (dynamicToDurationRange = dart.constFn(dart.fnType(video_player.DurationRange, [dart.dynamic])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let TimerToFutureOfNull = () => (TimerToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [async.Timer])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let OffsetTovoid = () => (OffsetTovoid = dart.constFn(dart.fnType(dart.void, [ui.Offset])))();
  let DragStartDetailsToNull = () => (DragStartDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragStartDetails])))();
  let DragUpdateDetailsToNull = () => (DragUpdateDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragUpdateDetails])))();
  let DragEndDetailsToNull = () => (DragEndDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragEndDetails])))();
  let TapDownDetailsToNull = () => (TapDownDetailsToNull = dart.constFn(dart.fnType(core.Null, [tap.TapDownDetails])))();
  let AlwaysStoppedAnimationOfColor = () => (AlwaysStoppedAnimationOfColor = dart.constFn(animations.AlwaysStoppedAnimation$(ui.Color)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: video_player.VideoFormat.prototype,
        [_name$]: "VideoFormat.dash",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: video_player.VideoFormat.prototype,
        [_name$]: "VideoFormat.hls",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: video_player.VideoFormat.prototype,
        [_name$]: "VideoFormat.ss",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: video_player.VideoFormat.prototype,
        [_name$]: "VideoFormat.other",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], video_player.VideoFormat);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C6() {
      return C6 = dart.constList([], video_player.DurationRange);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: video_player.DataSourceType.prototype,
        [_name$]: "DataSourceType.asset",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: video_player.DataSourceType.prototype,
        [_name$]: "DataSourceType.network",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: video_player.DataSourceType.prototype,
        [_name$]: "DataSourceType.file",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], video_player.DataSourceType);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C12() {
      return C12 = dart.constMap(video_player.VideoFormat, core.String, [C2 || CT.C2, "ss", C1 || CT.C1, "hls", C0 || CT.C0, "dash", C3 || CT.C3, "other"]);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.paused",
        index: 2
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.resumed",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.constList([], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 501,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textureId",
        [_Location_column]: 55,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 501,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 3003056128.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 858927816
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 2143865032
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 546,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 547,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragStart",
        [_Location_column]: 7,
        [_Location_line]: 548,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragUpdate",
        [_Location_column]: 7,
        [_Location_line]: 557,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragEnd",
        [_Location_column]: 7,
        [_Location_line]: 563,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapDown",
        [_Location_column]: 7,
        [_Location_line]: 568,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 545,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 5,
        [EdgeInsets_left]: 0
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 13,
        [_Location_line]: 649,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 13,
        [_Location_line]: 650,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 651,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 648,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 13,
        [_Location_line]: 654,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 13,
        [_Location_line]: 655,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 656,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 653,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 9,
        [_Location_line]: 646,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 647,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 645,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 9,
        [_Location_line]: 662,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 9,
        [_Location_line]: 663,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 664,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 661,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 668,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 669,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 667,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 673,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 674,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 672,
        [_Location_file]: "org-dartlang-app:///packages/video_player/video_player.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C61 || CT.C61
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C60 || CT.C60,
        [MethodChannel_name]: "flutter.io/videoPlayer"
      });
    }
  });
  const DurationRange_start = dart.privateName(video_player, "DurationRange.start");
  const DurationRange_end = dart.privateName(video_player, "DurationRange.end");
  video_player.DurationRange = class DurationRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    startFraction(duration) {
      return dart.notNull(this.start.inMilliseconds) / dart.notNull(duration.inMilliseconds);
    }
    endFraction(duration) {
      return dart.notNull(this.end.inMilliseconds) / dart.notNull(duration.inMilliseconds);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(start: " + dart.str(this.start) + ", end: " + dart.str(this.end) + ")";
    }
  };
  (video_player.DurationRange.new = function(start, end) {
    this[start$] = start;
    this[end$] = end;
    ;
  }).prototype = video_player.DurationRange.prototype;
  dart.addTypeTests(video_player.DurationRange);
  const start$ = DurationRange_start;
  const end$ = DurationRange_end;
  dart.setMethodSignature(video_player.DurationRange, () => ({
    __proto__: dart.getMethods(video_player.DurationRange.__proto__),
    startFraction: dart.fnType(core.double, [core.Duration]),
    endFraction: dart.fnType(core.double, [core.Duration])
  }));
  dart.setLibraryUri(video_player.DurationRange, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player.DurationRange, () => ({
    __proto__: dart.getFields(video_player.DurationRange.__proto__),
    start: dart.finalFieldType(core.Duration),
    end: dart.finalFieldType(core.Duration)
  }));
  dart.defineExtensionMethods(video_player.DurationRange, ['toString']);
  const _name$ = dart.privateName(video_player, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  video_player.VideoFormat = class VideoFormat extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (video_player.VideoFormat.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = video_player.VideoFormat.prototype;
  dart.addTypeTests(video_player.VideoFormat);
  dart.setLibraryUri(video_player.VideoFormat, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player.VideoFormat, () => ({
    __proto__: dart.getFields(video_player.VideoFormat.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(video_player.VideoFormat, ['toString']);
  video_player.VideoFormat.dash = C0 || CT.C0;
  video_player.VideoFormat.hls = C1 || CT.C1;
  video_player.VideoFormat.ss = C2 || CT.C2;
  video_player.VideoFormat.other = C3 || CT.C3;
  video_player.VideoFormat.values = C4 || CT.C4;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C5;
  let C6;
  const VideoPlayerValue_duration = dart.privateName(video_player, "VideoPlayerValue.duration");
  const VideoPlayerValue_position = dart.privateName(video_player, "VideoPlayerValue.position");
  const VideoPlayerValue_buffered = dart.privateName(video_player, "VideoPlayerValue.buffered");
  const VideoPlayerValue_isPlaying = dart.privateName(video_player, "VideoPlayerValue.isPlaying");
  const VideoPlayerValue_isLooping = dart.privateName(video_player, "VideoPlayerValue.isLooping");
  const VideoPlayerValue_isBuffering = dart.privateName(video_player, "VideoPlayerValue.isBuffering");
  const VideoPlayerValue_volume = dart.privateName(video_player, "VideoPlayerValue.volume");
  const VideoPlayerValue_errorDescription = dart.privateName(video_player, "VideoPlayerValue.errorDescription");
  const VideoPlayerValue_size = dart.privateName(video_player, "VideoPlayerValue.size");
  video_player.VideoPlayerValue = class VideoPlayerValue extends core.Object {
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get buffered() {
      return this[buffered$];
    }
    set buffered(value) {
      super.buffered = value;
    }
    get isPlaying() {
      return this[isPlaying$];
    }
    set isPlaying(value) {
      super.isPlaying = value;
    }
    get isLooping() {
      return this[isLooping$];
    }
    set isLooping(value) {
      super.isLooping = value;
    }
    get isBuffering() {
      return this[isBuffering$];
    }
    set isBuffering(value) {
      super.isBuffering = value;
    }
    get volume() {
      return this[volume$];
    }
    set volume(value) {
      super.volume = value;
    }
    get errorDescription() {
      return this[errorDescription$];
    }
    set errorDescription(value) {
      super.errorDescription = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get initialized() {
      return this.duration != null;
    }
    get hasError() {
      return this.errorDescription != null;
    }
    get aspectRatio() {
      return this.size != null ? dart.notNull(this.size.width) / dart.notNull(this.size.height) : 1.0;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let buffered = opts && 'buffered' in opts ? opts.buffered : null;
      let isPlaying = opts && 'isPlaying' in opts ? opts.isPlaying : null;
      let isLooping = opts && 'isLooping' in opts ? opts.isLooping : null;
      let isBuffering = opts && 'isBuffering' in opts ? opts.isBuffering : null;
      let volume = opts && 'volume' in opts ? opts.volume : null;
      let errorDescription = opts && 'errorDescription' in opts ? opts.errorDescription : null;
      return new video_player.VideoPlayerValue.new({duration: (t0 = duration, t0 == null ? this.duration : t0), size: (t0$ = size, t0$ == null ? this.size : t0$), position: (t0$0 = position, t0$0 == null ? this.position : t0$0), buffered: (t0$1 = buffered, t0$1 == null ? this.buffered : t0$1), isPlaying: (t0$2 = isPlaying, t0$2 == null ? this.isPlaying : t0$2), isLooping: (t0$3 = isLooping, t0$3 == null ? this.isLooping : t0$3), isBuffering: (t0$4 = isBuffering, t0$4 == null ? this.isBuffering : t0$4), volume: (t0$5 = volume, t0$5 == null ? this.volume : t0$5), errorDescription: (t0$6 = errorDescription, t0$6 == null ? this.errorDescription : t0$6)});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + "duration: " + dart.str(this.duration) + ", " + "size: " + dart.str(this.size) + ", " + "position: " + dart.str(this.position) + ", " + "buffered: [" + dart.str(this.buffered[$join](", ")) + "], " + "isPlaying: " + dart.str(this.isPlaying) + ", " + "isLooping: " + dart.str(this.isLooping) + ", " + "isBuffering: " + dart.str(this.isBuffering) + "volume: " + dart.str(this.volume) + ", " + "errorDescription: " + dart.str(this.errorDescription) + ")";
    }
  };
  (video_player.VideoPlayerValue.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let buffered = opts && 'buffered' in opts ? opts.buffered : C6 || CT.C6;
    let isPlaying = opts && 'isPlaying' in opts ? opts.isPlaying : false;
    let isLooping = opts && 'isLooping' in opts ? opts.isLooping : false;
    let isBuffering = opts && 'isBuffering' in opts ? opts.isBuffering : false;
    let volume = opts && 'volume' in opts ? opts.volume : 1;
    let errorDescription = opts && 'errorDescription' in opts ? opts.errorDescription : null;
    this[duration$] = duration;
    this[size$] = size;
    this[position$] = position;
    this[buffered$] = buffered;
    this[isPlaying$] = isPlaying;
    this[isLooping$] = isLooping;
    this[isBuffering$] = isBuffering;
    this[volume$] = volume;
    this[errorDescription$] = errorDescription;
    ;
  }).prototype = video_player.VideoPlayerValue.prototype;
  (video_player.VideoPlayerValue.uninitialized = function() {
    video_player.VideoPlayerValue.new.call(this, {duration: null});
  }).prototype = video_player.VideoPlayerValue.prototype;
  (video_player.VideoPlayerValue.erroneous = function(errorDescription) {
    video_player.VideoPlayerValue.new.call(this, {duration: null, errorDescription: errorDescription});
  }).prototype = video_player.VideoPlayerValue.prototype;
  dart.addTypeTests(video_player.VideoPlayerValue);
  const duration$ = VideoPlayerValue_duration;
  const position$ = VideoPlayerValue_position;
  const buffered$ = VideoPlayerValue_buffered;
  const isPlaying$ = VideoPlayerValue_isPlaying;
  const isLooping$ = VideoPlayerValue_isLooping;
  const isBuffering$ = VideoPlayerValue_isBuffering;
  const volume$ = VideoPlayerValue_volume;
  const errorDescription$ = VideoPlayerValue_errorDescription;
  const size$ = VideoPlayerValue_size;
  dart.setMethodSignature(video_player.VideoPlayerValue, () => ({
    __proto__: dart.getMethods(video_player.VideoPlayerValue.__proto__),
    copyWith: dart.fnType(video_player.VideoPlayerValue, [], {buffered: core.List$(video_player.DurationRange), duration: core.Duration, errorDescription: core.String, isBuffering: core.bool, isLooping: core.bool, isPlaying: core.bool, position: core.Duration, size: ui.Size, volume: core.double})
  }));
  dart.setGetterSignature(video_player.VideoPlayerValue, () => ({
    __proto__: dart.getGetters(video_player.VideoPlayerValue.__proto__),
    initialized: core.bool,
    hasError: core.bool,
    aspectRatio: core.double
  }));
  dart.setLibraryUri(video_player.VideoPlayerValue, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player.VideoPlayerValue, () => ({
    __proto__: dart.getFields(video_player.VideoPlayerValue.__proto__),
    duration: dart.finalFieldType(core.Duration),
    position: dart.finalFieldType(core.Duration),
    buffered: dart.finalFieldType(core.List$(video_player.DurationRange)),
    isPlaying: dart.finalFieldType(core.bool),
    isLooping: dart.finalFieldType(core.bool),
    isBuffering: dart.finalFieldType(core.bool),
    volume: dart.finalFieldType(core.double),
    errorDescription: dart.finalFieldType(core.String),
    size: dart.finalFieldType(ui.Size)
  }));
  dart.defineExtensionMethods(video_player.VideoPlayerValue, ['toString']);
  let C7;
  let C8;
  let C9;
  let C10;
  video_player.DataSourceType = class DataSourceType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (video_player.DataSourceType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = video_player.DataSourceType.prototype;
  dart.addTypeTests(video_player.DataSourceType);
  dart.setLibraryUri(video_player.DataSourceType, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player.DataSourceType, () => ({
    __proto__: dart.getFields(video_player.DataSourceType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(video_player.DataSourceType, ['toString']);
  video_player.DataSourceType.asset = C7 || CT.C7;
  video_player.DataSourceType.network = C8 || CT.C8;
  video_player.DataSourceType.file = C9 || CT.C9;
  video_player.DataSourceType.values = C10 || CT.C10;
  const _textureId = dart.privateName(video_player, "_textureId");
  const _timer = dart.privateName(video_player, "_timer");
  const _isDisposed = dart.privateName(video_player, "_isDisposed");
  const _creatingCompleter = dart.privateName(video_player, "_creatingCompleter");
  const _eventSubscription = dart.privateName(video_player, "_eventSubscription");
  const _lifeCycleObserver = dart.privateName(video_player, "_lifeCycleObserver");
  const _applyLooping = dart.privateName(video_player, "_applyLooping");
  const _applyVolume = dart.privateName(video_player, "_applyVolume");
  const _applyPlayPause = dart.privateName(video_player, "_applyPlayPause");
  const _eventChannelFor = dart.privateName(video_player, "_eventChannelFor");
  let C11;
  const VideoPlayerController_dataSource = dart.privateName(video_player, "VideoPlayerController.dataSource");
  const VideoPlayerController_formatHint = dart.privateName(video_player, "VideoPlayerController.formatHint");
  const VideoPlayerController_dataSourceType = dart.privateName(video_player, "VideoPlayerController.dataSourceType");
  const VideoPlayerController_package = dart.privateName(video_player, "VideoPlayerController.package");
  let C12;
  const dispose = Symbol("dispose");
  video_player.VideoPlayerController = class VideoPlayerController extends change_notifier.ValueNotifier$(video_player.VideoPlayerValue) {
    get dataSource() {
      return this[dataSource$];
    }
    set dataSource(value) {
      super.dataSource = value;
    }
    get formatHint() {
      return this[formatHint$];
    }
    set formatHint(value) {
      super.formatHint = value;
    }
    get dataSourceType() {
      return this[dataSourceType];
    }
    set dataSourceType(value) {
      super.dataSourceType = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get textureId() {
      return this[_textureId];
    }
    initialize() {
      return async.async(dart.void, (function* initialize() {
        this[_lifeCycleObserver] = new video_player._VideoAppLifeCycleObserver.new(this);
        this[_lifeCycleObserver].initialize();
        this[_creatingCompleter] = CompleterOfvoid().new();
        let dataSourceDescription = null;
        switch (this.dataSourceType) {
          case C7 || CT.C7:
          {
            dataSourceDescription = new (IdentityMapOfString$dynamic()).from(["asset", this.dataSource, "package", this.package]);
            break;
          }
          case C8 || CT.C8:
          {
            dataSourceDescription = new (IdentityMapOfString$dynamic()).from(["uri", this.dataSource]);
            break;
          }
          case C9 || CT.C9:
          {
            dataSourceDescription = new (IdentityMapOfString$dynamic()).from(["uri", this.dataSource, "formatHint", video_player.VideoPlayerController._videoFormatStringMap[$_get](this.formatHint)]);
          }
        }
        let response = (yield video_player._channel.invokeMapMethod(core.String, dart.dynamic, "create", dataSourceDescription));
        this[_textureId] = core.int._check(response[$_get]("textureId"));
        this[_creatingCompleter].complete(null);
        let initializingCompleter = CompleterOfvoid().new();
        function toDurationRange(value) {
          let pair = core.List._check(value);
          return new video_player.DurationRange.new(new core.Duration.new({milliseconds: core.int._check(pair[$_get](0))}), new core.Duration.new({milliseconds: core.int._check(pair[$_get](1))}));
        }
        dart.fn(toDurationRange, dynamicToDurationRange());
        const eventListener = event => {
          let t0, t0$, t0$0, t0$1, t0$2;
          if (dart.test(this[_isDisposed])) {
            return;
          }
          let map = core.Map._check(event);
          switch (map[$_get]("event")) {
            case "initialized":
            {
              this.value = this.value.copyWith({duration: new core.Duration.new({milliseconds: core.int._check(map[$_get]("duration"))}), size: new ui.Size.new(core.double._check((t0$ = (t0 = map[$_get]("width"), t0 == null ? null : dart.dsend(t0, 'toDouble', [])), t0$ == null ? 0.0 : t0$)), core.double._check((t0$1 = (t0$0 = map[$_get]("height"), t0$0 == null ? null : dart.dsend(t0$0, 'toDouble', [])), t0$1 == null ? 0.0 : t0$1)))});
              initializingCompleter.complete(null);
              this[_applyLooping]();
              this[_applyVolume]();
              this[_applyPlayPause]();
              break;
            }
            case "completed":
            {
              this.value = this.value.copyWith({isPlaying: false, position: this.value.duration});
              t0$2 = this[_timer];
              t0$2 == null ? null : t0$2.cancel();
              break;
            }
            case "bufferingUpdate":
            {
              let values = core.List._check(map[$_get]("values"));
              this.value = this.value.copyWith({buffered: values[$map](video_player.DurationRange, toDurationRange)[$toList]()});
              break;
            }
            case "bufferingStart":
            {
              this.value = this.value.copyWith({isBuffering: true});
              break;
            }
            case "bufferingEnd":
            {
              this.value = this.value.copyWith({isBuffering: false});
              break;
            }
          }
        };
        dart.fn(eventListener, dynamicTovoid());
        const errorListener = obj => {
          let t0;
          let e = message_codec.PlatformException._check(obj);
          this.value = new video_player.VideoPlayerValue.erroneous(e.message);
          t0 = this[_timer];
          t0 == null ? null : t0.cancel();
        };
        dart.fn(errorListener, ObjectTovoid());
        this[_eventSubscription] = this[_eventChannelFor](this[_textureId]).receiveBroadcastStream().listen(eventListener, {onError: errorListener});
        return initializingCompleter.future;
      }).bind(this));
    }
    [_eventChannelFor](textureId) {
      return new platform_channel.EventChannel.new("flutter.io/videoPlayer/videoEvents" + dart.str(textureId));
    }
    dispose() {
      return async.async(dart.void, (function* dispose$() {
        let t0, t0$;
        if (this[_creatingCompleter] != null) {
          yield this[_creatingCompleter].future;
          if (!dart.test(this[_isDisposed])) {
            this[_isDisposed] = true;
            t0 = this[_timer];
            t0 == null ? null : t0.cancel();
            yield (t0$ = this[_eventSubscription], t0$ == null ? null : t0$.cancel());
            yield video_player._channel.invokeMethod(dart.void, "dispose", new (IdentityMapOfString$dynamic()).from(["textureId", this[_textureId]]));
          }
          this[_lifeCycleObserver].dispose();
        }
        this[_isDisposed] = true;
        this[dispose]();
      }).bind(this));
    }
    play() {
      return async.async(dart.void, (function* play() {
        this.value = this.value.copyWith({isPlaying: true});
        yield this[_applyPlayPause]();
      }).bind(this));
    }
    setLooping(looping) {
      return async.async(dart.void, (function* setLooping() {
        this.value = this.value.copyWith({isLooping: looping});
        yield this[_applyLooping]();
      }).bind(this));
    }
    pause() {
      return async.async(dart.void, (function* pause() {
        this.value = this.value.copyWith({isPlaying: false});
        yield this[_applyPlayPause]();
      }).bind(this));
    }
    [_applyLooping]() {
      return async.async(dart.void, (function* _applyLooping() {
        if (!dart.test(this.value.initialized) || dart.test(this[_isDisposed])) {
          return;
        }
        video_player._channel.invokeMethod(dart.void, "setLooping", new (IdentityMapOfString$dynamic()).from(["textureId", this[_textureId], "looping", this.value.isLooping]));
      }).bind(this));
    }
    [_applyPlayPause]() {
      return async.async(dart.void, (function* _applyPlayPause() {
        let t0;
        if (!dart.test(this.value.initialized) || dart.test(this[_isDisposed])) {
          return;
        }
        if (dart.test(this.value.isPlaying)) {
          yield video_player._channel.invokeMethod(dart.void, "play", new (IdentityMapOfString$dynamic()).from(["textureId", this[_textureId]]));
          this[_timer] = async.Timer.periodic(C11 || CT.C11, dart.fn(timer => async.async(core.Null, (function*() {
            if (dart.test(this[_isDisposed])) {
              return;
            }
            let newPosition = (yield this.position);
            if (dart.test(this[_isDisposed])) {
              return;
            }
            this.value = this.value.copyWith({position: newPosition});
          }).bind(this)), TimerToFutureOfNull()));
        } else {
          t0 = this[_timer];
          t0 == null ? null : t0.cancel();
          yield video_player._channel.invokeMethod(dart.void, "pause", new (IdentityMapOfString$dynamic()).from(["textureId", this[_textureId]]));
        }
      }).bind(this));
    }
    [_applyVolume]() {
      return async.async(dart.void, (function* _applyVolume() {
        if (!dart.test(this.value.initialized) || dart.test(this[_isDisposed])) {
          return;
        }
        yield video_player._channel.invokeMethod(dart.void, "setVolume", new (IdentityMapOfString$dynamic()).from(["textureId", this[_textureId], "volume", this.value.volume]));
      }).bind(this));
    }
    get position() {
      return async.async(core.Duration, (function* position() {
        if (dart.test(this[_isDisposed])) {
          return null;
        }
        return new core.Duration.new({milliseconds: (yield video_player._channel.invokeMethod(core.int, "position", new (IdentityMapOfString$dynamic()).from(["textureId", this[_textureId]])))});
      }).bind(this));
    }
    seekTo(moment) {
      return async.async(dart.void, (function* seekTo() {
        if (dart.test(this[_isDisposed])) {
          return;
        }
        if (dart.test(moment['>'](this.value.duration))) {
          moment = this.value.duration;
        } else if (dart.test(moment['<'](C5 || CT.C5))) {
          moment = C5 || CT.C5;
        }
        yield video_player._channel.invokeMethod(dart.void, "seekTo", new (IdentityMapOfString$dynamic()).from(["textureId", this[_textureId], "location", moment.inMilliseconds]));
        this.value = this.value.copyWith({position: moment});
      }).bind(this));
    }
    setVolume(volume) {
      return async.async(dart.void, (function* setVolume() {
        this.value = this.value.copyWith({volume: volume[$clamp](0.0, 1.0)});
        yield this[_applyVolume]();
      }).bind(this));
    }
    [dispose]() {
      return super.dispose();
    }
  };
  (video_player.VideoPlayerController.asset = function(dataSource, opts) {
    let $package = opts && 'package' in opts ? opts.package : null;
    this[_textureId] = null;
    this[_timer] = null;
    this[_isDisposed] = false;
    this[_creatingCompleter] = null;
    this[_eventSubscription] = null;
    this[_lifeCycleObserver] = null;
    this[dataSource$] = dataSource;
    this[package$] = $package;
    this[dataSourceType] = video_player.DataSourceType.asset;
    this[formatHint$] = null;
    video_player.VideoPlayerController.__proto__.new.call(this, new video_player.VideoPlayerValue.new({duration: null}));
    ;
  }).prototype = video_player.VideoPlayerController.prototype;
  (video_player.VideoPlayerController.network = function(dataSource, opts) {
    let formatHint = opts && 'formatHint' in opts ? opts.formatHint : null;
    this[_textureId] = null;
    this[_timer] = null;
    this[_isDisposed] = false;
    this[_creatingCompleter] = null;
    this[_eventSubscription] = null;
    this[_lifeCycleObserver] = null;
    this[dataSource$] = dataSource;
    this[formatHint$] = formatHint;
    this[dataSourceType] = video_player.DataSourceType.network;
    this[package$] = null;
    video_player.VideoPlayerController.__proto__.new.call(this, new video_player.VideoPlayerValue.new({duration: null}));
    ;
  }).prototype = video_player.VideoPlayerController.prototype;
  (video_player.VideoPlayerController.file = function(file) {
    this[_textureId] = null;
    this[_timer] = null;
    this[_isDisposed] = false;
    this[_creatingCompleter] = null;
    this[_eventSubscription] = null;
    this[_lifeCycleObserver] = null;
    this[dataSource$] = "file://" + dart.str(file.path);
    this[dataSourceType] = video_player.DataSourceType.file;
    this[package$] = null;
    this[formatHint$] = null;
    video_player.VideoPlayerController.__proto__.new.call(this, new video_player.VideoPlayerValue.new({duration: null}));
    ;
  }).prototype = video_player.VideoPlayerController.prototype;
  dart.addTypeTests(video_player.VideoPlayerController);
  const dataSource$ = VideoPlayerController_dataSource;
  const formatHint$ = VideoPlayerController_formatHint;
  const dataSourceType = VideoPlayerController_dataSourceType;
  const package$ = VideoPlayerController_package;
  dart.setMethodSignature(video_player.VideoPlayerController, () => ({
    __proto__: dart.getMethods(video_player.VideoPlayerController.__proto__),
    initialize: dart.fnType(async.Future$(dart.void), []),
    [_eventChannelFor]: dart.fnType(platform_channel.EventChannel, [core.int]),
    dispose: dart.fnType(async.Future$(dart.void), []),
    play: dart.fnType(async.Future$(dart.void), []),
    setLooping: dart.fnType(async.Future$(dart.void), [core.bool]),
    pause: dart.fnType(async.Future$(dart.void), []),
    [_applyLooping]: dart.fnType(async.Future$(dart.void), []),
    [_applyPlayPause]: dart.fnType(async.Future$(dart.void), []),
    [_applyVolume]: dart.fnType(async.Future$(dart.void), []),
    seekTo: dart.fnType(async.Future$(dart.void), [core.Duration]),
    setVolume: dart.fnType(async.Future$(dart.void), [core.double])
  }));
  dart.setGetterSignature(video_player.VideoPlayerController, () => ({
    __proto__: dart.getGetters(video_player.VideoPlayerController.__proto__),
    textureId: core.int,
    position: async.Future$(core.Duration)
  }));
  dart.setLibraryUri(video_player.VideoPlayerController, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player.VideoPlayerController, () => ({
    __proto__: dart.getFields(video_player.VideoPlayerController.__proto__),
    [_textureId]: dart.fieldType(core.int),
    dataSource: dart.finalFieldType(core.String),
    formatHint: dart.finalFieldType(video_player.VideoFormat),
    dataSourceType: dart.finalFieldType(video_player.DataSourceType),
    package: dart.finalFieldType(core.String),
    [_timer]: dart.fieldType(async.Timer),
    [_isDisposed]: dart.fieldType(core.bool),
    [_creatingCompleter]: dart.fieldType(async.Completer$(dart.void)),
    [_eventSubscription]: dart.fieldType(async.StreamSubscription),
    [_lifeCycleObserver]: dart.fieldType(video_player._VideoAppLifeCycleObserver)
  }));
  dart.defineLazy(video_player.VideoPlayerController, {
    /*video_player.VideoPlayerController._videoFormatStringMap*/get _videoFormatStringMap() {
      return C12 || CT.C12;
    }
  });
  const _wasPlayingBeforePause = dart.privateName(video_player, "_wasPlayingBeforePause");
  const _controller$ = dart.privateName(video_player, "_controller");
  const _name = dart.privateName(ui, "_name");
  let C13;
  let C14;
  const Object_WidgetsBindingObserver$36 = class Object_WidgetsBindingObserver extends core.Object {};
  (Object_WidgetsBindingObserver$36.new = function() {
  }).prototype = Object_WidgetsBindingObserver$36.prototype;
  dart.applyMixin(Object_WidgetsBindingObserver$36, binding.WidgetsBindingObserver);
  video_player._VideoAppLifeCycleObserver = class _VideoAppLifeCycleObserver extends Object_WidgetsBindingObserver$36 {
    initialize() {
      binding.WidgetsBinding.instance.addObserver(this);
    }
    didChangeAppLifecycleState(state) {
      switch (state) {
        case C13 || CT.C13:
        {
          this[_wasPlayingBeforePause] = this[_controller$].value.isPlaying;
          this[_controller$].pause();
          break;
        }
        case C14 || CT.C14:
        {
          if (dart.test(this[_wasPlayingBeforePause])) {
            this[_controller$].play();
          }
          break;
        }
        default:
      }
    }
    dispose() {
      binding.WidgetsBinding.instance.removeObserver(this);
    }
  };
  (video_player._VideoAppLifeCycleObserver.new = function(_controller) {
    this[_wasPlayingBeforePause] = false;
    this[_controller$] = _controller;
    ;
  }).prototype = video_player._VideoAppLifeCycleObserver.prototype;
  dart.addTypeTests(video_player._VideoAppLifeCycleObserver);
  dart.setMethodSignature(video_player._VideoAppLifeCycleObserver, () => ({
    __proto__: dart.getMethods(video_player._VideoAppLifeCycleObserver.__proto__),
    initialize: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(video_player._VideoAppLifeCycleObserver, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player._VideoAppLifeCycleObserver, () => ({
    __proto__: dart.getFields(video_player._VideoAppLifeCycleObserver.__proto__),
    [_wasPlayingBeforePause]: dart.fieldType(core.bool),
    [_controller$]: dart.finalFieldType(video_player.VideoPlayerController)
  }));
  const VideoPlayer_controller = dart.privateName(video_player, "VideoPlayer.controller");
  video_player.VideoPlayer = class VideoPlayer extends framework.StatefulWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new video_player._VideoPlayerState.new();
    }
  };
  (video_player.VideoPlayer.new = function(controller, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    video_player.VideoPlayer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_player.VideoPlayer.prototype;
  dart.addTypeTests(video_player.VideoPlayer);
  const controller$ = VideoPlayer_controller;
  dart.setMethodSignature(video_player.VideoPlayer, () => ({
    __proto__: dart.getMethods(video_player.VideoPlayer.__proto__),
    createState: dart.fnType(video_player._VideoPlayerState, [])
  }));
  dart.setLibraryUri(video_player.VideoPlayer, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player.VideoPlayer, () => ({
    __proto__: dart.getFields(video_player.VideoPlayer.__proto__),
    controller: dart.finalFieldType(video_player.VideoPlayerController)
  }));
  const _listener = dart.privateName(video_player, "_listener");
  let C16;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C15;
  let C19;
  let C18;
  let C17;
  video_player._VideoPlayerState = class _VideoPlayerState extends framework.State$(video_player.VideoPlayer) {
    initState() {
      super.initState();
      this[_textureId] = this.widget.controller.textureId;
      this.widget.controller.addListener(this[_listener]);
    }
    didUpdateWidget(oldWidget) {
      video_player.VideoPlayer._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      oldWidget.controller.removeListener(this[_listener]);
      this[_textureId] = this.widget.controller.textureId;
      this.widget.controller.addListener(this[_listener]);
    }
    deactivate() {
      super.deactivate();
      this.widget.controller.removeListener(this[_listener]);
    }
    build(context) {
      return this[_textureId] == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}) : new texture.Texture.new({textureId: this[_textureId], $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
  };
  (video_player._VideoPlayerState.new = function() {
    this[_listener] = null;
    this[_textureId] = null;
    video_player._VideoPlayerState.__proto__.new.call(this);
    this[_listener] = dart.fn(() => {
      let newTextureId = this.widget.controller.textureId;
      if (newTextureId != this[_textureId]) {
        this.setState(dart.fn(() => {
          this[_textureId] = newTextureId;
        }, VoidToNull()));
      }
    }, VoidToNull());
  }).prototype = video_player._VideoPlayerState.prototype;
  dart.addTypeTests(video_player._VideoPlayerState);
  dart.setMethodSignature(video_player._VideoPlayerState, () => ({
    __proto__: dart.getMethods(video_player._VideoPlayerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(video_player._VideoPlayerState, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player._VideoPlayerState, () => ({
    __proto__: dart.getFields(video_player._VideoPlayerState.__proto__),
    [_listener]: dart.fieldType(dart.fnType(dart.void, [])),
    [_textureId]: dart.fieldType(core.int)
  }));
  const Color__value = dart.privateName(ui, "Color._value");
  let C20;
  let C21;
  let C22;
  const VideoProgressColors_playedColor = dart.privateName(video_player, "VideoProgressColors.playedColor");
  const VideoProgressColors_bufferedColor = dart.privateName(video_player, "VideoProgressColors.bufferedColor");
  const VideoProgressColors_backgroundColor = dart.privateName(video_player, "VideoProgressColors.backgroundColor");
  video_player.VideoProgressColors = class VideoProgressColors extends core.Object {
    get playedColor() {
      return this[playedColor$];
    }
    set playedColor(value) {
      super.playedColor = value;
    }
    get bufferedColor() {
      return this[bufferedColor$];
    }
    set bufferedColor(value) {
      super.bufferedColor = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
  };
  (video_player.VideoProgressColors.new = function(opts) {
    let playedColor = opts && 'playedColor' in opts ? opts.playedColor : C20 || CT.C20;
    let bufferedColor = opts && 'bufferedColor' in opts ? opts.bufferedColor : C21 || CT.C21;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C22 || CT.C22;
    this[playedColor$] = playedColor;
    this[bufferedColor$] = bufferedColor;
    this[backgroundColor$] = backgroundColor;
    ;
  }).prototype = video_player.VideoProgressColors.prototype;
  dart.addTypeTests(video_player.VideoProgressColors);
  const playedColor$ = VideoProgressColors_playedColor;
  const bufferedColor$ = VideoProgressColors_bufferedColor;
  const backgroundColor$ = VideoProgressColors_backgroundColor;
  dart.setLibraryUri(video_player.VideoProgressColors, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player.VideoProgressColors, () => ({
    __proto__: dart.getFields(video_player.VideoProgressColors.__proto__),
    playedColor: dart.finalFieldType(ui.Color),
    bufferedColor: dart.finalFieldType(ui.Color),
    backgroundColor: dart.finalFieldType(ui.Color)
  }));
  video_player._VideoScrubber = class _VideoScrubber extends framework.StatefulWidget {
    createState() {
      return new video_player._VideoScrubberState.new();
    }
  };
  (video_player._VideoScrubber.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.child = child;
    this.controller = controller;
    video_player._VideoScrubber.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_player._VideoScrubber.prototype;
  dart.addTypeTests(video_player._VideoScrubber);
  dart.setMethodSignature(video_player._VideoScrubber, () => ({
    __proto__: dart.getMethods(video_player._VideoScrubber.__proto__),
    createState: dart.fnType(video_player._VideoScrubberState, [])
  }));
  dart.setLibraryUri(video_player._VideoScrubber, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player._VideoScrubber, () => ({
    __proto__: dart.getFields(video_player._VideoScrubber.__proto__),
    child: dart.finalFieldType(framework.Widget),
    controller: dart.finalFieldType(video_player.VideoPlayerController)
  }));
  const _controllerWasPlaying = dart.privateName(video_player, "_controllerWasPlaying");
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C24;
  let C23;
  video_player._VideoScrubberState = class _VideoScrubberState extends framework.State$(video_player._VideoScrubber) {
    get controller() {
      return this.widget.controller;
    }
    build(context) {
      const seekToRelativePosition = globalPosition => {
        let box = box$.RenderBox._check(context.findRenderObject());
        let tapPos = box.globalToLocal(globalPosition);
        let relative = dart.notNull(tapPos.dx) / dart.notNull(box.size.width);
        let position = this.controller.value.duration['*'](relative);
        this.controller.seekTo(position);
      };
      dart.fn(seekToRelativePosition, OffsetTovoid());
      return new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, child: this.widget.child, onHorizontalDragStart: dart.fn(details => {
          if (!dart.test(this.controller.value.initialized)) {
            return;
          }
          this[_controllerWasPlaying] = this.controller.value.isPlaying;
          if (dart.test(this[_controllerWasPlaying])) {
            this.controller.pause();
          }
        }, DragStartDetailsToNull()), onHorizontalDragUpdate: dart.fn(details => {
          if (!dart.test(this.controller.value.initialized)) {
            return;
          }
          seekToRelativePosition(details.globalPosition);
        }, DragUpdateDetailsToNull()), onHorizontalDragEnd: dart.fn(details => {
          if (dart.test(this[_controllerWasPlaying])) {
            this.controller.play();
          }
        }, DragEndDetailsToNull()), onTapDown: dart.fn(details => {
          if (!dart.test(this.controller.value.initialized)) {
            return;
          }
          seekToRelativePosition(details.globalPosition);
        }, TapDownDetailsToNull()), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (video_player._VideoScrubberState.new = function() {
    this[_controllerWasPlaying] = false;
    video_player._VideoScrubberState.__proto__.new.call(this);
    ;
  }).prototype = video_player._VideoScrubberState.prototype;
  dart.addTypeTests(video_player._VideoScrubberState);
  dart.setMethodSignature(video_player._VideoScrubberState, () => ({
    __proto__: dart.getMethods(video_player._VideoScrubberState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(video_player._VideoScrubberState, () => ({
    __proto__: dart.getGetters(video_player._VideoScrubberState.__proto__),
    controller: video_player.VideoPlayerController
  }));
  dart.setLibraryUri(video_player._VideoScrubberState, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player._VideoScrubberState, () => ({
    __proto__: dart.getFields(video_player._VideoScrubberState.__proto__),
    [_controllerWasPlaying]: dart.fieldType(core.bool)
  }));
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C31;
  const VideoProgressIndicator_controller = dart.privateName(video_player, "VideoProgressIndicator.controller");
  const VideoProgressIndicator_colors = dart.privateName(video_player, "VideoProgressIndicator.colors");
  const VideoProgressIndicator_allowScrubbing = dart.privateName(video_player, "VideoProgressIndicator.allowScrubbing");
  const VideoProgressIndicator_padding = dart.privateName(video_player, "VideoProgressIndicator.padding");
  video_player.VideoProgressIndicator = class VideoProgressIndicator extends framework.StatefulWidget {
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    get allowScrubbing() {
      return this[allowScrubbing$];
    }
    set allowScrubbing(value) {
      super.allowScrubbing = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    createState() {
      return new video_player._VideoProgressIndicatorState.new();
    }
  };
  (video_player.VideoProgressIndicator.new = function(controller, opts) {
    let t0;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let allowScrubbing = opts && 'allowScrubbing' in opts ? opts.allowScrubbing : null;
    let padding = opts && 'padding' in opts ? opts.padding : C31 || CT.C31;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$0] = controller;
    this[allowScrubbing$] = allowScrubbing;
    this[padding$] = padding;
    this[colors$] = (t0 = colors, t0 == null ? new video_player.VideoProgressColors.new() : t0);
    video_player.VideoProgressIndicator.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = video_player.VideoProgressIndicator.prototype;
  dart.addTypeTests(video_player.VideoProgressIndicator);
  const controller$0 = VideoProgressIndicator_controller;
  const colors$ = VideoProgressIndicator_colors;
  const allowScrubbing$ = VideoProgressIndicator_allowScrubbing;
  const padding$ = VideoProgressIndicator_padding;
  dart.setMethodSignature(video_player.VideoProgressIndicator, () => ({
    __proto__: dart.getMethods(video_player.VideoProgressIndicator.__proto__),
    createState: dart.fnType(video_player._VideoProgressIndicatorState, [])
  }));
  dart.setLibraryUri(video_player.VideoProgressIndicator, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player.VideoProgressIndicator, () => ({
    __proto__: dart.getFields(video_player.VideoProgressIndicator.__proto__),
    controller: dart.finalFieldType(video_player.VideoPlayerController),
    colors: dart.finalFieldType(video_player.VideoProgressColors),
    allowScrubbing: dart.finalFieldType(core.bool),
    padding: dart.finalFieldType(edge_insets.EdgeInsets)
  }));
  let C34;
  let C35;
  let C36;
  let C33;
  let C32;
  let C39;
  let C40;
  let C41;
  let C38;
  let C37;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C49;
  let C50;
  let C47;
  let C46;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  video_player._VideoProgressIndicatorState = class _VideoProgressIndicatorState extends framework.State$(video_player.VideoProgressIndicator) {
    get controller() {
      return this.widget.controller;
    }
    get colors() {
      return this.widget.colors;
    }
    initState() {
      super.initState();
      this.controller.addListener(this.listener);
    }
    deactivate() {
      this.controller.removeListener(this.listener);
      super.deactivate();
    }
    build(context) {
      let progressIndicator = null;
      if (dart.test(this.controller.value.initialized)) {
        let duration = this.controller.value.duration.inMilliseconds;
        let position = this.controller.value.position.inMilliseconds;
        let maxBuffering = 0;
        for (let range of this.controller.value.buffered) {
          let end = range.end.inMilliseconds;
          if (dart.notNull(end) > dart.notNull(maxBuffering)) {
            maxBuffering = end;
          }
        }
        progressIndicator = new basic.Stack.new({fit: stack.StackFit.passthrough, children: JSArrayOfWidget().of([new progress_indicator.LinearProgressIndicator.new({value: dart.notNull(maxBuffering) / dart.notNull(duration), valueColor: new (AlwaysStoppedAnimationOfColor()).new(this.colors.bufferedColor), backgroundColor: this.colors.backgroundColor, $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new progress_indicator.LinearProgressIndicator.new({value: dart.notNull(position) / dart.notNull(duration), valueColor: new (AlwaysStoppedAnimationOfColor()).new(this.colors.playedColor), backgroundColor: colors.Colors.transparent, $creationLocationd_0dea112b090073317d4: C37 || CT.C37})]), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
      } else {
        progressIndicator = new progress_indicator.LinearProgressIndicator.new({value: null, valueColor: new (AlwaysStoppedAnimationOfColor()).new(this.colors.playedColor), backgroundColor: this.colors.backgroundColor, $creationLocationd_0dea112b090073317d4: C46 || CT.C46});
      }
      let paddedProgressIndicator = new basic.Padding.new({padding: this.widget.padding, child: progressIndicator, $creationLocationd_0dea112b090073317d4: C51 || CT.C51});
      if (dart.test(this.widget.allowScrubbing)) {
        return new video_player._VideoScrubber.new({child: paddedProgressIndicator, controller: this.controller, $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
      } else {
        return paddedProgressIndicator;
      }
    }
  };
  (video_player._VideoProgressIndicatorState.new = function() {
    this.listener = null;
    video_player._VideoProgressIndicatorState.__proto__.new.call(this);
    this.listener = dart.fn(() => {
      if (!dart.test(this.mounted)) {
        return;
      }
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }, VoidToNull());
  }).prototype = video_player._VideoProgressIndicatorState.prototype;
  dart.addTypeTests(video_player._VideoProgressIndicatorState);
  dart.setMethodSignature(video_player._VideoProgressIndicatorState, () => ({
    __proto__: dart.getMethods(video_player._VideoProgressIndicatorState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(video_player._VideoProgressIndicatorState, () => ({
    __proto__: dart.getGetters(video_player._VideoProgressIndicatorState.__proto__),
    controller: video_player.VideoPlayerController,
    colors: video_player.VideoProgressColors
  }));
  dart.setLibraryUri(video_player._VideoProgressIndicatorState, "package:video_player/video_player.dart");
  dart.setFieldSignature(video_player._VideoProgressIndicatorState, () => ({
    __proto__: dart.getFields(video_player._VideoProgressIndicatorState.__proto__),
    listener: dart.fieldType(dart.fnType(dart.void, []))
  }));
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C61;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C60;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C59;
  dart.defineLazy(video_player, {
    /*video_player._channel*/get _channel() {
      let t0;
      return t0 = C59 || CT.C59, t0.invokeMethod(dart.void, "init"), t0;
    }
  });
  dart.trackLibraries("packages/video_player/video_player", {
    "package:video_player/video_player.dart": video_player
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["video_player.dart"],"names":[],"mappings":"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","file":"video_player.ddc.js"}');
  // Exports:
  return {
    video_player: video_player
  };
});

//# sourceMappingURL=video_player.ddc.js.map
