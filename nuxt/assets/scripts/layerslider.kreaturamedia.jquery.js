
/*
	* LayerSlider
	*
	* (c) 2011-2015 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* licenses:				http://codecanyon.net/licenses/
*/



function lsShowNotice(t, e, i) {
  var a;
  "string" == typeof t ? a = jQuery("#" + t) : "object" == typeof t && (a = t);
  var s, o;
  switch (e) {
    case "jquery":
      s = "multiple jQuery issue",
        o = 'It looks like that another plugin or your theme loads an extra copy of the jQuery library causing problems for LayerSlider to show your sliders. <strong>Please navigate on your WordPress admin area to the main page of LayerSlider and enable the "Put JS includes to body" option within the Troubleshooting & Advanced Settings box.</strong>';
      break;
    case "oldjquery":
      s = "old jQuery issue",
        o = "It looks like you are using an old version (" + i + ') of the jQuery library. LayerSlider requires at least version 1.7.0 or newer. Please update jQuery to 1.10.x or higher. Important: Please do not use the jQuery Updater plugin on WordPress and do not update to 2.x version of jQuery because it is not compatible with older browsers like IE 7 & 8. <a href="http://support.kreaturamedia.com/faq/4/layerslider-for-wordpress/#group-13&entry-60">You can read more about updating jQuery by clicking here.</a>'
  }
  a.addClass("ls-error"),
    a.append('<p class="ls-exclam">!</p>'),
    a.append('<p class="ls-error-title">LayerSlider: ' + s + "</p>"),
    a.append('<p class="ls-error-text">' + o + "</p>")
} !
  function (t) {
    if ("undefined" != typeof kmGS) for (var e in kmGS) this[e] = kmGS[e];
    t.fn.layerSlider = function (e) {
      var a = "1.7.0",
        s = t.fn.jquery,
        o = t(this),
        r = function (t, e) {
          for (var i = t.split("."), a = e.split("."), s = 0; s < i.length; ++s) {
            if (a.length == s) return !1;
            if (parseInt(i[s]) != parseInt(a[s])) return parseInt(i[s]) > parseInt(a[s]) ? !1 : !0
          }
          return i.length != a.length ? !0 : !0
        };
      if (r("1.8.0", s) || o.addClass("ls-norotate"), r(a, s)) {
        if ((typeof e).match("object|undefined")) return this.each(function () {
          new i(this, e)
        });
        if ("data" === e) {
          var n = t(this).data("LayerSlider").g;
          if (n) return n
        } else if ("userInitData" === e) {
          var d = t(this).data("LayerSlider").o;
          if (d) return d
        } else {
          if ("defaultInitData" !== e) return this.each(function () {
            var i = t(this).data("LayerSlider");
            if (i) {
              if (!i.g.isAnimating && !i.g.isLoading) if ("number" == typeof e) e > 0 && e < i.g.layersNum + 1 && e != i.g.curLayerIndex && i.change(e);
              else switch (e) {
                case "prev":
                  i.o.cbPrev(i.g),
                    i.prev("clicked");
                  break;
                case "next":
                  i.o.cbNext(i.g),
                    i.next("clicked");
                  break;
                case "start":
                  i.g.autoSlideshow || (i.o.cbStart(i.g), i.g.originalAutoSlideshow = !0, i.start())
              }
              "redraw" === e && i.resize(),
                (i.g.autoSlideshow || !i.g.autoSlideshow && i.g.originalAutoSlideshow) && "stop" == e && (i.o.cbStop(i.g), i.g.originalAutoSlideshow = !1, i.g.curLayer.find('iframe[src*="youtube.com"], iframe[src*="youtu.be"], iframe[src*="player.vimeo"]').each(function () {
                  clearTimeout(t(this).data("videoTimer"))
                }), i.stop()),
                "forceStop" == e && i.forcestop()
            }
          });
          var d = t(this).data("LayerSlider").defaults;
          if (d) return d
        }
      } else lsShowNotice(o, "oldjquery", s)
    };
    var i = function (e, d) {
      var l = this;
      l.$el = t(e).addClass("ls-container"),
        l.$el.data("LayerSlider", l),
        l.load = function () {
          if (l.defaults = i.options, l.o = t.extend({},
            l.defaults, d), l.g = t.extend({},
              i.global), l.lt = t.extend({},
                i.layerTransitions), l.st = t.extend({},
                  i.slideTransitions), l.g.enableCSS3 = t(e).hasClass("ls-norotate") ? !1 : !0, l.g.originalMarkup = t(e).html(), l.g.ie78 && (l.o.lazyLoad = !1), "enabled" === l.o.autoPauseSlideshow && (l.o.autoPauseSlideshow = !0), "disabled" === l.o.autoPauseSlideshow && (l.o.autoPauseSlideshow = !1), "undefined" != typeof layerSliderTransitions && (l.t = t.extend({},
                    layerSliderTransitions)), "undefined" != typeof layerSliderCustomTransitions && (l.ct = t.extend({},
                      layerSliderCustomTransitions)), !l.g.initialized) if (l.g.initialized = !0, t("html").find('meta[content*="WordPress"]').length && (l.g.wpVersion = t("html").find('meta[content*="WordPress"]').attr("content").split("WordPress")[1]), t("html").find('script[src*="layerslider"]').length && -1 != t("html").find('script[src*="layerslider"]').attr("src").indexOf("?") && (l.g.lswpVersion = t("html").find('script[src*="layerslider"]').attr("src").split("?")[1].split("=")[1]), l.o.skin && "" != l.o.skin && l.o.skinsPath && "" != l.o.skinsPath) {
                        t(e).addClass("ls-" + l.o.skin);
                        var a = l.o.skinsPath + l.o.skin + "/skin.css",
                          s = t("head");
                        if (t("head").length || (s = t("body")), t('link[href="' + a + '"]').length) o = t('link[href="' + a + '"]'),
                          l.g.loaded || (l.g.loaded = !0, l.g.t1 = setTimeout(function () {
                            l.init()
                          },
                            150));
                        else if (document.createStyleSheet) {
                          document.createStyleSheet(a);
                          var o = t('link[href="' + a + '"]')
                        } else var o = t('<link rel="stylesheet" href="' + a + '" type="text/css" />').appendTo(s);
                        o.load(function () {
                          l.g.loaded || (l.g.loaded = !0, l.g.t2 = setTimeout(function () {
                            l.init()
                          },
                            150))
                        }),
                          t(window).load(function () {
                            l.g.loaded || (l.g.loaded = !0, l.g.t3 = setTimeout(function () {
                              l.init()
                            },
                              150))
                          }),
                          l.g.t4 = setTimeout(function () {
                            l.g.loaded || (l.g.loaded = !0, l.init())
                          },
                            1e3)
                      } else l.init()
        },
        l.init = function () {
          t(e).prependTo(t(l.o.prependTo)),
            t("html").attr("id") ? t("body").attr("id") || t("body").attr("id", "ls-global") : t("html").attr("id", "ls-global"),
            l.g.isMobile() === !0 && l.o.hideOnMobile === !0 && (t(e).addClass("ls-forcehide"), t(e).closest(".ls-wp-fullwidth-container").addClass("ls-forcehide"));
          var i = function () {
            l.o.hideOnMobile === !0 && l.g.isMobile() === !0 ? (t(e).addClass("ls-forcehide"), t(e).closest(".ls-wp-fullwidth-container").addClass("ls-forcehide"), l.o.autoStart = !1) : t(window).width() < l.o.hideUnder || t(window).width() > l.o.hideOver ? (t(e).addClass("ls-forcehide"), t(e).closest(".ls-wp-fullwidth-container").addClass("ls-forcehide")) : (t(e).removeClass("ls-forcehide"), t(e).closest(".ls-wp-fullwidth-container").removeClass("ls-forcehide"))
          };
          if (t(window).resize(function () {
            i()
          }), i(), l.g.sliderWidth = function () {
            return t(e).width()
          },
            l.g.sliderHeight = function () {
              return t(e).height()
            },
            t(e).find(".ls-layer").removeClass("ls-layer").addClass("ls-slide"), t(e).find('.ls-slide > *[class*="ls-s"]').each(function () {
              var e = t(this).attr("class").split("ls-s")[1].split(" ")[0];
              t(this).removeClass("ls-s" + e).addClass("ls-l" + e)
            }), l.o.firstLayer && (l.o.firstSlide = l.o.firstLayer), l.o.animateFirstLayer === !1 && (l.o.animateFirstSlide = !1), 1 == t(e).find(".ls-slide").length && (l.o.autoStart = !1, l.o.navPrevNext = !1, l.o.navStartStop = !1, l.o.navButtons = !1, l.o.loops = 0, l.o.forceLoopNum = !1, l.o.autoPauseSlideshow = !0, l.o.firstSlide = 1, l.o.thumbnailNavigation = "disabled"), t(e).parent().hasClass("ls-wp-fullwidth-helper") && 0 !== l.o.responsiveUnder && (t(e)[0].style.width = "100%"), l.g.sliderOriginalWidthRU = l.g.sliderOriginalWidth = l.o.width ? "" + l.o.width : t(e)[0].style.width, l.g.sliderOriginalHeight = l.o.height ? "" + l.o.height : t(e)[0].style.height, -1 == l.g.sliderOriginalWidth.indexOf("%") && -1 == l.g.sliderOriginalWidth.indexOf("px") && (l.g.sliderOriginalWidth += "px"), -1 == l.g.sliderOriginalHeight.indexOf("%") && -1 == l.g.sliderOriginalHeight.indexOf("px") && (l.g.sliderOriginalHeight += "px"), l.g.responsiveMode = l.o.responsive && -1 != l.g.sliderOriginalWidth.indexOf("px") && -1 != l.g.sliderOriginalHeight.indexOf("px") ? !0 : !1, l.o.fullScreen === !0 && (l.o.responsiveUnder = 0, l.g.responsiveMode = !0, -1 != l.g.sliderOriginalWidth.indexOf("%") && (l.g.sliderOriginalWidth = parseInt(l.g.sliderOriginalWidth) + "px"), -1 != l.g.sliderOriginalHeight.indexOf("%") && (l.g.sliderOriginalHeight = parseInt(l.g.sliderOriginalHeight) + "px")), t(e).find('*[class*="ls-l"], *[class*="ls-bg"]').each(function () {
              t(this).parent().hasClass("ls-slide") || t(this).insertBefore(t(this).parent())
            }), t(e).find(".ls-slide").each(function () {
              t(this).children(':not([class*="ls-"])').each(function () {
                t(this).remove()
              });
              var e = t("<div>").addClass("ls-gpuhack");
              t(this).find(".ls-bg").length ? e.insertAfter(t(this).find(".ls-bg").eq("0")) : e.prependTo(t(this))
            }), t(e).find('.ls-slide, *[class*="ls-l"]').each(function () {
              if (t(this).data("ls") || t(this).attr("rel") || t(this).attr("style")) {
                if (t(this).data("ls")) var e = t(this).data("ls").toLowerCase().split(";");
                else if (t(this).attr("rel") && -1 != t(this).attr("rel").indexOf(":") && -1 != t(this).attr("rel").indexOf(";")) var e = t(this).attr("rel").toLowerCase().split(";");
                else var e = t(this).attr("style").toLowerCase().split(";");
                for (x = 0; x < e.length; x++) {
                  param = e[x].split(":"),
                    -1 != param[0].indexOf("easing") && (param[1] = l.ieEasing(param[1]));
                  var i = "";
                  param[2] && (i = ":" + t.trim(param[2])),
                    " " != param[0] && "" != param[0] && t(this).data(t.trim(param[0]), t.trim(param[1]) + i)
                }
              }
              l.o.startInViewport === !0 && l.o.autoStart === !0 && (l.o.autoStart = !1, l.g.originalAutoStart = !0);
              var a = t(this);
              a.data("originalLeft", a[0].style.left),
                a.data("originalTop", a[0].style.top),
                t(this).is("a") && t(this).children().length > 0 && (a = t(this).children());
              var s = a.width(),
                o = a.height();
              a[0].style.width && -1 != a[0].style.width.indexOf("%") && (s = a[0].style.width),
                a[0].style.height && -1 != a[0].style.height.indexOf("%") && (o = a[0].style.height),
                a.data("originalWidth", s),
                a.data("originalHeight", o),
                a.data("originalPaddingLeft", a.css("padding-left")),
                a.data("originalPaddingRight", a.css("padding-right")),
                a.data("originalPaddingTop", a.css("padding-top")),
                a.data("originalPaddingBottom", a.css("padding-bottom"));
              var r = "number" == typeof parseFloat(a.css("opacity")) ? Math.round(100 * parseFloat(a.css("opacity"))) / 100 : 1;
              t(this).data("originalOpacity", r),
                -1 == a.css("border-left-width").indexOf("px") ? a.data("originalBorderLeft", a[0].style.borderLeftWidth) : a.data("originalBorderLeft", a.css("border-left-width")),
                -1 == a.css("border-right-width").indexOf("px") ? a.data("originalBorderRight", a[0].style.borderRightWidth) : a.data("originalBorderRight", a.css("border-right-width")),
                -1 == a.css("border-top-width").indexOf("px") ? a.data("originalBorderTop", a[0].style.borderTopWidth) : a.data("originalBorderTop", a.css("border-top-width")),
                -1 == a.css("border-bottom-width").indexOf("px") ? a.data("originalBorderBottom", a[0].style.borderBottomWidth) : a.data("originalBorderBottom", a.css("border-bottom-width")),
                a.data("originalFontSize", a.css("font-size")),
                a.data("originalLineHeight", a.css("line-height"))
            }), document.location.hash) for (var a = 0; a < t(e).find(".ls-slide").length; a++) t(e).find(".ls-slide").eq(a).data("deeplink") == document.location.hash.split("#")[1] && (l.o.firstSlide = a + 1);
          t(e).find('*[class*="ls-linkto-"]').each(function () {
            for (var i = t(this).attr("class").split(" "), a = 0; a < i.length; a++) if (- 1 != i[a].indexOf("ls-linkto-")) {
              var s = parseInt(i[a].split("ls-linkto-")[1]);
              t(this).css({
                cursor: "pointer"
              }).click(function (i) {
                i.preventDefault(),
                  t(e).layerSlider(s)
              })
            }
          }),
            l.g.layersNum = t(e).find(".ls-slide").length,
            l.o.randomSlideshow && l.g.layersNum > 2 ? ("random" == l.o.firstSlide, l.o.twoWaySlideshow = !1) : l.o.randomSlideshow = !1,
            "random" == l.o.firstSlide && (l.o.firstSlide = Math.floor(Math.random() * l.g.layersNum + 1)),
            l.o.fisrtSlide = l.o.fisrtSlide < l.g.layersNum + 1 ? l.o.fisrtSlide : 1,
            l.o.fisrtSlide = l.o.fisrtSlide < 1 ? 1 : l.o.fisrtSlide,
            l.g.nextLoop = 1,
            l.o.animateFirstSlide && (l.g.nextLoop = 0);
          var s = -1 === document.location.href.indexOf("file:") ? "" : "http:",
            o = t(e).find('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
          if (o.length) {
            t("<script>").attr({
              src: s + "//www.youtube.com/iframe_api",
              type: "text/javascript"
            }).appendTo("head"); {
              o.length
            }
            window.onYouTubeIframeAPIReady = function () {
              o.each(function () {
                if (t(this).parent().addClass("ls-video-layer"), t(this).parent('[class*="ls-l"]')) {
                  var e = s,
                    i = t("<div>").addClass("ls-vpcontainer").appendTo(t(this).parent());
                  t("<img>").appendTo(i).addClass("ls-videopreview").attr("alt", "Play video").attr("src", e + "//img.youtube.com/vi/" + t(this).attr("src").split("embed/")[1].split("?")[0] + "/" + l.o.youtubePreview),
                    t("<div>").appendTo(i).addClass("ls-playvideo"),
                    t(this).parent().css({
                      width: t(this).width(),
                      height: t(this).height()
                    }).click(function () {
                      t(this).data("showuntil") > 0 && t(this).data("showUntilTimer") && clearTimeout(t(this).data("showUntilTimer")),
                        l.g.pausedByVideo || (l.g.isAnimating = !0, l.g.paused ? (0 != l.o.autoPauseSlideshow && (l.g.paused = !1), l.g.originalAutoSlideshow = !0) : l.g.originalAutoSlideshow = l.g.autoSlideshow, 0 != l.o.autoPauseSlideshow && l.stop(), l.g.pausedByVideo = !0),
                        e = -1 === t(this).find("iframe").data("videoSrc").indexOf("http") ? s : "",
                        t(this).find("iframe").attr("src", e + t(this).find("iframe").data("videoSrc")),
                        t(this).find(".ls-vpcontainer").delay(l.g.v.d).fadeOut(l.g.v.fo, function () {
                          var e = function (t) {
                            0 === t.data && (l.g.numYouTubeCurSlide += 1, "auto" == l.o.autoPauseSlideshow && 1 == l.g.originalAutoSlideshow && l.g.numYouTubeCurSlide == l.g.curLayer.find('iframe[src*="youtube.com"], iframe[src*="youtu.be"]').length && (l.g.curSlideTime = 1, l.start()))
                          };
                          if ("undefined" !== i) var i = new YT.Player(t(this).parent().find("iframe")[0], {
                            events: {
                              onStateChange: e
                            }
                          });
                          l.g.isAnimating = !1,
                            1 == l.g.resize && l.makeResponsive(l.g.curLayer, function () {
                              l.g.resize = !1
                            })
                        })
                    });
                  var a = "&"; - 1 == t(this).attr("src").indexOf("?") && (a = "?");
                  var o = "&wmode=opaque&html5=1",
                    r = "&enablejsapi=1&version=3"; - 1 == t(this).attr("src").indexOf("autoplay") ? t(this).data("videoSrc", t(this).attr("src") + a + "autoplay=1" + o + r) : t(this).data("videoSrc", t(this).attr("src").replace("autoplay=0", "autoplay=1") + o + r),
                      t(this).data("originalWidth", t(this).attr("width")),
                      t(this).data("originalHeight", t(this).attr("height")),
                      t(this).attr("src", "")
                }
              })
            }
          }
          if (t(e).find('iframe[src*="player.vimeo"]').each(function () {
            if (t(this).parent().addClass("ls-video-layer"), t(this).parent('[class*="ls-l"]')) {
              var e = t(this),
                i = s,
                a = t("<div>").addClass("ls-vpcontainer").appendTo(t(this).parent());
              t.getJSON(i + "//vimeo.com/api/v2/video/" + t(this).attr("src").split("video/")[1].split("?")[0] + ".json?callback=?", function (i) {
                t("<img>").appendTo(a).addClass("ls-videopreview").attr("alt", "Play video").attr("src", i[0].thumbnail_large),
                  e.data("videoDuration", 1e3 * parseInt(i[0].duration)),
                  t("<div>").appendTo(a).addClass("ls-playvideo")
              }),
                t(this).parent().css({
                  width: t(this).width(),
                  height: t(this).height()
                }).click(function () {
                  t(this).data("showuntil") > 0 && t(this).data("showUntilTimer") && clearTimeout(t(this).data("showUntilTimer")),
                    l.g.isAnimating = !0,
                    l.g.paused ? (0 != l.o.autoPauseSlideshow && (l.g.paused = !1), l.g.originalAutoSlideshow = !0) : l.g.originalAutoSlideshow = l.g.autoSlideshow,
                    0 != l.o.autoPauseSlideshow && l.stop(),
                    l.g.pausedByVideo = !0,
                    i = -1 === t(this).find("iframe").data("videoSrc").indexOf("http") ? s : "",
                    t(this).find("iframe").attr("src", i + t(this).find("iframe").data("videoSrc")),
                    t(this).find(".ls-vpcontainer").delay(l.g.v.d).fadeOut(l.g.v.fo, function () {
                      if ("auto" == l.o.autoPauseSlideshow && 1 == l.g.originalAutoSlideshow) {
                        var t = setTimeout(function () {
                          l.start()
                        },
                          e.data("videoDuration") - l.g.v.d);
                        e.data("videoTimer", t)
                      }
                      l.g.isAnimating = !1,
                        1 == l.g.resize && l.makeResponsive(l.g.curLayer, function () {
                          l.g.resize = !1
                        })
                    })
                });
              var o = "&"; - 1 == t(this).attr("src").indexOf("?") && (o = "?");
              var r = "&wmode=opaque"; - 1 == t(this).attr("src").indexOf("autoplay") ? t(this).data("videoSrc", t(this).attr("src") + o + "autoplay=1" + r) : t(this).data("videoSrc", t(this).attr("src").replace("autoplay=0", "autoplay=1") + r),
                t(this).data("originalWidth", t(this).attr("width")),
                t(this).data("originalHeight", t(this).attr("height")),
                t(this).attr("src", "")
            }
          }), t(e).find("video, audio").each(function () {
            var e = "undefined" != typeof t(this).attr("width") ? t(this).attr("width") : "640",
              i = "undefined" != typeof t(this).attr("height") ? t(this).attr("height") : "" + t(this).height(); - 1 === e.indexOf("%") && (e = parseInt(e)),
                -1 === i.indexOf("%") && (i = parseInt(i)),
                "100%" !== e || 0 !== i && "0" !== i && "100%" !== i || (t(this).attr("height", "100%"), i = "auto"),
                t(this).parent().addClass("ls-video-layer").css({
                  width: e,
                  height: i
                }).data({
                  originalWidth: e,
                  originalHeight: i
                });
            t(this);
            t(this).on("ended", function () {
              "auto" === l.o.autoPauseSlideshow && l.g.originalAutoSlideshow === !0 && l.start()
            }),
              t(this).removeAttr("width").removeAttr("height").css({
                width: "100%",
                height: "100%"
              }).click(function (t) {
                l.g.pausedByVideo || (this.paused && t.preventDefault(), this.play(), l.g.isAnimating = !0, l.g.paused ? (l.o.autoPauseSlideshow !== !1 && (l.g.paused = !1), l.g.originalAutoSlideshow = !0) : l.g.originalAutoSlideshow = l.g.autoSlideshow, l.o.autoPauseSlideshow !== !1 && l.stop(), l.g.pausedByVideo = !0, l.g.isAnimating = !1, l.g.resize === !0 && l.makeResponsive(l.g.curLayer, function () {
                  l.g.resize = !1
                }))
              })
          }), l.o.animateFirstSlide && (l.o.firstSlide = l.o.firstSlide - 1 === 0 ? l.g.layersNum : l.o.firstSlide - 1), l.g.curLayerIndex = l.o.firstSlide, l.g.curLayer = t(e).find(".ls-slide:eq(" + (l.g.curLayerIndex - 1) + ")"), t(e).find(".ls-slide").wrapAll('<div class="ls-inner"></div>'), l.o.showBarTimer && (l.g.barTimer = t("<div>").addClass("ls-bar-timer").appendTo(t(e).find(".ls-inner"))), l.o.showCircleTimer && !l.g.ie78 && (l.g.circleTimer = t("<div>").addClass("ls-circle-timer").appendTo(t(e).find(".ls-inner")), l.g.circleTimer.append(t('<div class="ls-ct-left"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div><div class="ls-ct-right"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div><div class="ls-ct-center"></div>'))), l.g.li = t("<div>").css({
            zIndex: -1,
            display: "none"
          }).addClass("ls-loading-container").appendTo(t(e)), t("<div>").addClass("ls-loading-indicator").appendTo(l.g.li), "static" == t(e).css("position") && t(e).css("position", "relative"), t(e).find(".ls-inner").css(l.o.globalBGImage ? {
            backgroundImage: "url(" + l.o.globalBGImage + ")"
          } : {
              backgroundColor: l.o.globalBGColor
            }), "transparent" == l.o.globalBGColor && 0 == l.o.globalBGImage && t(e).find(".ls-inner").css({
              background: "none transparent !important"
            }), t(e).find(".ls-slide img").each(function () {
              if (t(this).removeAttr("width").removeAttr("height"), l.o.imgPreload === !0 && l.o.lazyLoad === !0) {
                if ("string" != typeof t(this).data("src")) {
                  t(this).data("src", t(this).attr("src"));
                  var e = l.o.skinsPath + "../css/blank.gif";
                  t(this).attr("src", e)
                }
              } else "string" == typeof t(this).data("src") && (t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src"))
            }), t(e).find(".ls-slide").on("mouseenter", function (e) {
              l.g.parallaxStartX = e.pageX - t(this).parent().offset().left,
                l.g.parallaxStartY = e.pageY - t(this).parent().offset().top
            }), t(e).find(".ls-slide").on("mousemove", function (e) {
              var i = t(this).parent().offset().left + l.g.parallaxStartX,
                a = t(this).parent().offset().top + l.g.parallaxStartY,
                s = e.pageX - i,
                o = e.pageY - a;
              t(this).find("> *:not(.ls-bg)").each(function () {
                "undefined" != typeof t(this).data("parallaxlevel") && 0 !== parseInt(t(this).data("parallaxlevel")) && t(this).css({
                  marginLeft: -s / 100 * parseInt(t(this).data("parallaxlevel")),
                  marginTop: -o / 100 * parseInt(t(this).data("parallaxlevel"))
                })
              })
            }), t(e).find(".ls-slide").on("mouseleave", function () {
              t(this).find("> *:not(.ls-bg)").each(function () {
                "undefined" != typeof t(this).data("parallaxlevel") && 0 !== parseInt(t(this).data("parallaxlevel")) && TweenLite.to(this, .4, {
                  css: {
                    marginLeft: 0,
                    marginTop: 0
                  }
                })
              })
            }), l.o.navPrevNext && (t('<a class="ls-nav-prev" href="#" />').click(function (i) {
              i.preventDefault(),
                t(e).layerSlider("prev")
            }).appendTo(t(e)), t('<a class="ls-nav-next" href="#" />').click(function (i) {
              i.preventDefault(),
                t(e).layerSlider("next")
            }).appendTo(t(e)), l.o.hoverPrevNext && (t(e).find(".ls-nav-prev, .ls-nav-next").css({
              display: "none"
            }), t(e).hover(function () {
              l.g.forceHideControls || (l.g.ie78 ? t(e).find(".ls-nav-prev, .ls-nav-next").css("display", "block") : t(e).find(".ls-nav-prev, .ls-nav-next").stop(!0, !0).fadeIn(300))
            },
              function () {
                l.g.ie78 ? t(e).find(".ls-nav-prev, .ls-nav-next").css("display", "none") : t(e).find(".ls-nav-prev, .ls-nav-next").stop(!0, !0).fadeOut(300)
              }))), l.o.navStartStop || l.o.navButtons) {
            var r = t('<div class="ls-bottom-nav-wrapper" />').appendTo(t(e));
            if (l.g.bottomWrapper = r, "always" == l.o.thumbnailNavigation && r.addClass("ls-above-thumbnails"), l.o.navButtons && "always" != l.o.thumbnailNavigation) {
              if (t('<span class="ls-bottom-slidebuttons" />').appendTo(t(e).find(".ls-bottom-nav-wrapper")), "hover" == l.o.thumbnailNavigation) var n = t('<div class="ls-thumbnail-hover"><div class="ls-thumbnail-hover-inner"><div class="ls-thumbnail-hover-bg"></div><div class="ls-thumbnail-hover-img"><img></div><span></span></div></div>').appendTo(t(e).find(".ls-bottom-slidebuttons"));
              for (x = 1; x < l.g.layersNum + 1; x++) {
                var d = t('<a href="#" />').appendTo(t(e).find(".ls-bottom-slidebuttons")).click(function (i) {
                  i.preventDefault(),
                    t(e).layerSlider(t(this).index() + 1)
                });
                if ("hover" == l.o.thumbnailNavigation) {
                  t(e).find(".ls-thumbnail-hover, .ls-thumbnail-hover-img").css({
                    width: l.o.tnWidth,
                    height: l.o.tnHeight
                  });
                  var g = t(e).find(".ls-thumbnail-hover"),
                    h = g.find("img").css({
                      height: l.o.tnHeight
                    }),
                    c = t(e).find(".ls-thumbnail-hover-inner").css({
                      visibility: "hidden",
                      display: "block"
                    });
                  d.hover(function () {
                    var i, a = t(e).find(".ls-slide").eq(t(this).index());
                    i = l.o.imgPreload === !0 && l.o.lazyLoad === !0 ? a.find(".ls-tn").length ? a.find(".ls-tn").data("src") : a.find(".ls-videopreview").length ? a.find(".ls-videopreview").data("src") : a.find(".ls-bg").length ? a.find(".ls-bg").data("src") : l.o.skinsPath + l.o.skin + "/nothumb.png" : a.find(".ls-tn").length ? a.find(".ls-tn").attr("src") : a.find(".ls-videopreview").length ? a.find(".ls-videopreview").attr("src") : a.find(".ls-bg").length ? a.find(".ls-bg").attr("src") : l.o.skinsPath + l.o.skin + "/nothumb.png",
                      t(e).find(".ls-thumbnail-hover-img").css({
                        left: parseInt(g.css("padding-left")),
                        top: parseInt(g.css("padding-top"))
                      }),
                      h.load(function () {
                        h.css(0 == t(this).width() ? {
                          position: "relative",
                          margin: "0 auto",
                          left: "auto"
                        } : {
                            position: "absolute",
                            marginLeft: -t(this).width() / 2,
                            left: "50%"
                          })
                      }).attr("src", i),
                      g.css({
                        display: "block"
                      }).stop().animate({
                        left: t(this).position().left + (t(this).width() - g.outerWidth()) / 2
                      },
                        250),
                      c.css({
                        display: "none",
                        visibility: "visible"
                      }).stop().fadeIn(250)
                  },
                    function () {
                      c.stop().fadeOut(250, function () {
                        g.css({
                          visibility: "hidden",
                          display: "block"
                        })
                      })
                    })
                }
              }
              "hover" == l.o.thumbnailNavigation && n.appendTo(t(e).find(".ls-bottom-slidebuttons")),
                t(e).find(".ls-bottom-slidebuttons a:eq(" + (l.o.firstSlide - 1) + ")").addClass("ls-nav-active")
            }
            if (l.o.navStartStop) var u = t('<a class="ls-nav-start" href="#" />').click(function (i) {
              i.preventDefault(),
                t(e).layerSlider("start")
            }).prependTo(t(e).find(".ls-bottom-nav-wrapper")),
              f = t('<a class="ls-nav-stop" href="#" />').click(function (i) {
                i.preventDefault(),
                  t(e).layerSlider("stop")
              }).appendTo(t(e).find(".ls-bottom-nav-wrapper"));
            else "always" != l.o.thumbnailNavigation && (t('<span class="ls-nav-sides ls-nav-sideleft" />').prependTo(t(e).find(".ls-bottom-nav-wrapper")), t('<span class="ls-nav-sides ls-nav-sideright" />').appendTo(t(e).find(".ls-bottom-nav-wrapper")));
            l.o.hoverBottomNav && "always" != l.o.thumbnailNavigation && (r.css({
              display: "none"
            }), t(e).hover(function () {
              l.g.forceHideControls || (l.g.ie78 ? r.css("display", "block") : r.stop(!0, !0).fadeIn(300))
            },
              function () {
                l.g.ie78 ? r.css("display", "none") : r.stop(!0, !0).fadeOut(300)
              }))
          }
          if ("always" == l.o.thumbnailNavigation) {
            l.g.thumbsWrapper = t('<div class="ls-thumbnail-wrapper"></div>').appendTo(t(e));
            var n = t('<div class="ls-thumbnail"><div class="ls-thumbnail-inner"><div class="ls-thumbnail-slide-container"><div class="ls-thumbnail-slide"></div></div></div></div>').appendTo(l.g.thumbsWrapper);
            if (l.g.thumbnails = t(e).find(".ls-thumbnail-slide-container"), "ontouchstart" in window ? l.g.thumbnails.addClass("ls-touchscroll") : l.g.thumbnails.hover(function () {
              t(this).addClass("ls-thumbnail-slide-hover")
            },
              function () {
                t(this).removeClass("ls-thumbnail-slide-hover"),
                  l.scrollThumb()
              }).mousemove(function (e) {
                var i = parseInt(e.pageX - t(this).offset().left) / t(this).width() * (t(this).width() - t(this).find(".ls-thumbnail-slide").width());
                t(this).find(".ls-thumbnail-slide").stop().css({
                  marginLeft: i
                })
              }), t(e).find(".ls-slide").each(function () {
                var i, a = t(this).index() + 1;
                i = l.o.imgPreload === !0 && l.o.lazyLoad === !0 ? t(this).find(".ls-tn").length ? t(this).find(".ls-tn").data("src") : t(this).find(".ls-videopreview").length ? t(this).find(".ls-videopreview").attr("src") : t(this).find(".ls-bg").length ? t(this).find(".ls-bg").data("src") : l.o.skinsPath + l.o.skin + "/nothumb.png" : t(this).find(".ls-tn").length ? t(this).find(".ls-tn").attr("src") : t(this).find(".ls-videopreview").length ? t(this).find(".ls-videopreview").attr("src") : t(this).find(".ls-bg").length ? t(this).find(".ls-bg").attr("src") : l.o.skinsPath + l.o.skin + "/nothumb.png";
                var s = t('<a href="#" class="ls-thumb-' + a + '"><img src="' + i + '"></a>');
                s.appendTo(t(e).find(".ls-thumbnail-slide")),
                  "ontouchstart" in window || s.hover(function () {
                    t(this).children().stop().fadeTo(300, l.o.tnActiveOpacity / 100)
                  },
                    function () {
                      t(this).children().hasClass("ls-thumb-active") || t(this).children().stop().fadeTo(300, l.o.tnInactiveOpacity / 100)
                    }),
                  s.click(function (i) {
                    i.preventDefault(),
                      t(e).layerSlider(a)
                  })
              }), u && f) {
              var p = l.g.bottomWrapper = t('<div class="ls-bottom-nav-wrapper ls-below-thumbnails"></div>').appendTo(t(e));
              u.clone().click(function (i) {
                i.preventDefault(),
                  t(e).layerSlider("start")
              }).appendTo(p),
                f.clone().click(function (i) {
                  i.preventDefault(),
                    t(e).layerSlider("stop")
                }).appendTo(p)
            }
            l.o.hoverBottomNav && (l.g.thumbsWrapper.css("display", "none"), p && (l.g.bottomWrapper = "block" == p.css("display") ? p : t(e).find(".ls-above-thumbnails"), l.g.bottomWrapper.css("display", "none")), t(e).hover(function () {
              t(e).addClass("ls-hover"),
                l.g.forceHideControls || (l.g.ie78 ? (l.g.thumbsWrapper.css("display", "block"), l.g.bottomWrapper && l.g.bottomWrapper.css("display", "block")) : (l.g.thumbsWrapper.stop(!0, !0).fadeIn(300), l.g.bottomWrapper && l.g.bottomWrapper.stop(!0, !0).fadeIn(300)))
            },
              function () {
                t(e).removeClass("ls-hover"),
                  l.g.ie78 ? (l.g.thumbsWrapper.css("display", "none"), l.g.bottomWrapper && l.g.bottomWrapper.css("display", "none")) : (l.g.thumbsWrapper.stop(!0, !0).fadeOut(300), l.g.bottomWrapper && l.g.bottomWrapper.stop(!0, !0).fadeOut(300))
              }))
          }
          l.g.shadow = t('<div class="ls-shadow"></div>').appendTo(t(e)),
            "block" != l.g.shadow.css("display") || l.g.shadow.find("img").length || (l.g.showShadow = function () {
              l.g.shadow.css({
                display: "none",
                visibility: "visible"
              }).fadeIn(500, function () {
                l.g.showShadow = !1
              })
            },
              l.g.shadowImg = t("<img>").attr("src", l.o.skinsPath + l.o.skin + "/shadow.png").appendTo(l.g.shadow), l.g.shadowBtmMod = "number" == typeof parseInt(t(e).css("padding-bottom")) ? parseInt(t(e).css("padding-bottom")) : 0),
            l.resizeShadow(),
            l.o.keybNav && t(e).find(".ls-slide").length > 1 && t("body").bind("keydown", function (t) {
              l.g.isAnimating || l.g.isLoading || (37 == t.which ? (l.o.cbPrev(l.g), l.prev("clicked")) : 39 == t.which && (l.o.cbNext(l.g), l.next("clicked")))
            }),
            "ontouchstart" in window && t(e).find(".ls-slide").length > 1 && l.o.touchNav && (t(e).find(".ls-inner").bind("touchstart", function (t) {
              var e = t.touches ? t.touches : t.originalEvent.touches;
              1 == e.length && (l.g.touchStartX = l.g.touchEndX = e[0].clientX)
            }), t(e).find(".ls-inner").bind("touchmove", function (t) {
              var e = t.touches ? t.touches : t.originalEvent.touches;
              1 == e.length && (l.g.touchEndX = e[0].clientX),
                Math.abs(l.g.touchStartX - l.g.touchEndX) > 45 && t.preventDefault()
            }), t(e).find(".ls-inner").bind("touchend", function () {
              Math.abs(l.g.touchStartX - l.g.touchEndX) > 45 && (l.g.touchStartX - l.g.touchEndX > 0 ? (l.o.cbNext(l.g), t(e).layerSlider("next")) : (l.o.cbPrev(l.g), t(e).layerSlider("prev")))
            })),
            1 == l.o.pauseOnHover && t(e).find(".ls-slide").length > 1 && t(e).find(".ls-inner").hover(function () {
              l.o.cbPause(l.g),
                l.g.autoSlideshow && (l.g.paused = !0, l.stop(), l.g.barTimer && l.g.barTimer.stop(), l.g.circleTimer && l.g.cttl && l.g.cttl.pause(), l.g.pausedSlideTime = (new Date).getTime())
            },
              function () {
                1 == l.g.paused && (l.start(), l.g.paused = !1)
              }),
            l.resizeSlider(),
            l.o.yourLogo && (l.g.yourLogo = t("<img>").addClass("ls-yourlogo").appendTo(t(e)).attr("style", l.o.yourLogoStyle).css({
              visibility: "hidden",
              display: "bock"
            }).load(function () {
              var i = 0;
              l.g.yourLogo || (i = 1e3),
                setTimeout(function () {
                  l.g.yourLogo.data("originalWidth", l.g.yourLogo.width()),
                    l.g.yourLogo.data("originalHeight", l.g.yourLogo.height()),
                    "auto" != l.g.yourLogo.css("left") && l.g.yourLogo.data("originalLeft", l.g.yourLogo[0].style.left),
                    "auto" != l.g.yourLogo.css("right") && l.g.yourLogo.data("originalRight", l.g.yourLogo[0].style.right),
                    "auto" != l.g.yourLogo.css("top") && l.g.yourLogo.data("originalTop", l.g.yourLogo[0].style.top),
                    "auto" != l.g.yourLogo.css("bottom") && l.g.yourLogo.data("originalBottom", l.g.yourLogo[0].style.bottom),
                    0 != l.o.yourLogoLink && t("<a>").appendTo(t(e)).attr("href", l.o.yourLogoLink).attr("target", l.o.yourLogoTarget).css({
                      textDecoration: "none",
                      outline: "none"
                    }).append(l.g.yourLogo),
                    l.g.yourLogo.css({
                      display: "none",
                      visibility: "visible"
                    }),
                    l.resizeYourLogo()
                },
                  i)
            }).attr("src", l.o.yourLogo)),
            t(window).resize(function () {
              l.resize()
            }),
            t(window).on("orientationchange", function () {
              t(window).resize()
            }),
            l.g.showSlider = !0,
            1 == l.o.animateFirstSlide ? (l.o.autoStart ? (l.g.autoSlideshow = !0, t(e).find(".ls-nav-start").addClass("ls-nav-start-active")) : t(e).find(".ls-nav-stop").addClass("ls-nav-stop-active"), l.next()) : "undefined" != typeof l.g.curLayer[0] && l.imgPreload(l.g.curLayer, function () {
              l.g.curLayer.fadeIn(l.o.sliderFadeInDuration, function () {
                l.g.isLoading = !1,
                  t(this).addClass("ls-active"),
                  l.o.autoPlayVideos && t(this).delay(t(this).data("delayin") + 25).queue(function () {
                    t(this).find(".ls-videopreview").click(),
                      t(this).find("video, audio").each(function () {
                        0 !== typeof t(this)[0].currentTime && (t(this)[0].currentTime = 0),
                          t(this).click()
                      }),
                      t(this).dequeue()
                  }),
                  l.g.curLayer.find(' > *[class*="ls-l"]').each(function () {
                    var e = t(this);
                    (!e.hasClass("ls-video-layer") || e.hasClass("ls-video-layer") && l.o.autoPlayVideos === !1) && e.data("showuntil") > 0 && e.data("showUntilTimer", setTimeout(function () {
                      l.sublayerShowUntil(e)
                    },
                      e.data("showuntil")))
                  })
              }),
                l.changeThumb(l.g.curLayerIndex),
                l.o.autoStart ? (l.g.isLoading = !1, l.start()) : t(e).find(".ls-nav-stop").addClass("ls-nav-stop-active")
            }),
            l.o.cbInit(t(e))
        },
        l.resize = function () {
          l.g.resize = !0,
            l.g.isAnimating || (l.makeResponsive(l.g.curLayer, function () {
              l.g.ltContainer && l.g.ltContainer.empty(),
                l.g.resize = !1
            }), l.g.yourLogo && l.resizeYourLogo())
        },
        l.start = function () {
          l.g.autoSlideshow ? "prev" == l.g.prevNext && l.o.twoWaySlideshow ? l.prev() : l.next() : (l.g.autoSlideshow = !0, l.g.isAnimating || l.g.isLoading || l.timer()),
            t(e).find(".ls-nav-start").addClass("ls-nav-start-active"),
            t(e).find(".ls-nav-stop").removeClass("ls-nav-stop-active")
        },
        l.timer = function () {
          if (t(e).find(".ls-active").data("ls")) var i = l.st.slideDelay;
          else var i = l.o.slideDelay;
          var a = t(e).find(".ls-active").data("slidedelay") ? parseInt(t(e).find(".ls-active").data("slidedelay")) : i;
          if (!l.o.animateFirstSlide && !t(e).find(".ls-active").data("slidedelay")) {
            var s = t(e).find(".ls-slide:eq(" + (l.o.firstSlide - 1) + ")").data("slidedelay");
            a = s ? s : i
          }
          if (clearTimeout(l.g.slideTimer), l.g.pausedSlideTime ? (l.g.startSlideTime || (l.g.startSlideTime = (new Date).getTime()), l.g.startSlideTime > l.g.pausedSlideTime && (l.g.pausedSlideTime = (new Date).getTime()), l.g.curSlideTime || (l.g.curSlideTime = a), l.g.curSlideTime -= l.g.pausedSlideTime - l.g.startSlideTime, l.g.pausedSlideTime = !1, l.g.startSlideTime = (new Date).getTime()) : (l.g.curSlideTime = a, l.g.startSlideTime = (new Date).getTime()), l.g.curSlideTime = parseInt(l.g.curSlideTime), l.g.slideTimer = setTimeout(function () {
            l.g.startSlideTime = l.g.pausedSlideTime = l.g.curSlideTime = !1,
              l.start()
          },
            l.g.curSlideTime), l.g.barTimer && l.g.barTimer.animate({
              width: l.g.sliderWidth()
            },
              l.g.curSlideTime, "linear", function () {
                t(this).css({
                  width: 0
                })
              }), l.g.circleTimer) {
            var o = l.g.circleTimer.find(".ls-ct-right .ls-ct-rotate"),
              r = l.g.circleTimer.find(".ls-ct-left .ls-ct-rotate");
            "none" == l.g.circleTimer.css("display") && (o.css({
              rotate: 0
            }), r.css({
              rotate: 0
            }), l.g.circleTimer.fadeIn(350)),
              l.g.cttl ? l.g.cttl.resume() : (l.g.cttl = new TimelineLite, l.g.cttl.add(TweenLite.fromTo(o[0], a / 2e3, {
                rotation: 0
              },
                {
                  ease: Linear.easeNone,
                  rotation: 180,
                  onReverseComplete: function () {
                    l.g.cttl = !1
                  }
                })), l.g.cttl.add(TweenLite.fromTo(r[0], a / 2e3, {
                  rotation: 0
                },
                  {
                    ease: Linear.easeNone,
                    rotation: 180
                  })))
          }
        },
        l.stop = function () {
          l.g.pausedSlideTime = (new Date).getTime(),
            l.g.barTimer && l.g.barTimer.stop(),
            l.g.circleTimer && l.g.cttl && l.g.cttl.pause(),
            l.g.paused || l.g.originalAutoSlideshow || (t(e).find(".ls-nav-stop").addClass("ls-nav-stop-active"), t(e).find(".ls-nav-start").removeClass("ls-nav-start-active")),
            clearTimeout(l.g.slideTimer),
            l.g.autoSlideshow = !1
        },
        l.forcestop = function () {
          clearTimeout(l.g.slideTimer),
            l.g.autoSlideshow = !1,
            clearTimeout(l.g.t1),
            clearTimeout(l.g.t2),
            clearTimeout(l.g.t3),
            clearTimeout(l.g.t4),
            clearTimeout(l.g.t5),
            l.g.barTimer && l.g.barTimer.stop(),
            l.g.circleTimer && l.g.cttl && l.g.cttl.pause(),
            t(e).find("*").stop(!0, !1).dequeue(),
            t(e).find(".ls-slide >").each(function () {
              t(this).data("tr") && t(this).data("tr").pause()
            }),
            l.g.paused || l.g.originalAutoSlideshow || (t(e).find(".ls-nav-stop").addClass("ls-nav-stop-active"), t(e).find(".ls-nav-start").removeClass("ls-nav-start-active"))
        },
        l.restart = function () {
          t(e).find("*").stop(),
            clearTimeout(l.g.slideTimer),
            l.change(l.g.curLayerIndex, l.g.prevNext)
        },
        l.ieEasing = function (e) {
          return "swing" == t.trim(e.toLowerCase()) || "linear" == t.trim(e.toLowerCase()) ? e.toLowerCase() : e.replace("easeinout", "easeInOut").replace("easein", "easeIn").replace("easeout", "easeOut").replace("quad", "Quad").replace("quart", "Quart").replace("cubic", "Cubic").replace("quint", "Quint").replace("sine", "Sine").replace("expo", "Expo").replace("circ", "Circ").replace("elastic", "Elastic").replace("back", "Back").replace("bounce", "Bounce")
        },
        l.prev = function (t) {
          if (l.g.curLayerIndex < 2 && (l.g.nextLoop += 1), l.g.nextLoop > l.o.loops && l.o.loops > 0 && !t) l.g.nextLoop = 0,
            l.stop(),
            0 == l.o.forceLoopNum && (l.o.loops = 0);
          else {
            var e = l.g.curLayerIndex < 2 ? l.g.layersNum : l.g.curLayerIndex - 1;
            l.g.prevNext = "prev",
              l.change(e, l.g.prevNext)
          }
        },
        l.next = function (t) {
          if (l.o.randomSlideshow) if (t) {
            if (t) {
              var e = l.g.curLayerIndex < l.g.layersNum ? l.g.curLayerIndex + 1 : 1;
              l.g.prevNext = "next",
                l.change(e, l.g.prevNext)
            }
          } else {
            var e = l.g.curLayerIndex,
              i = function () {
                e = Math.floor(Math.random() * l.g.layersNum) + 1,
                  e == l.g.curLayerIndex ? i() : (l.g.prevNext = "next", l.change(e, l.g.prevNext))
              };
            i()
          } else if (l.g.curLayerIndex < l.g.layersNum || (l.g.nextLoop += 1), l.g.nextLoop > l.o.loops && l.o.loops > 0 && !t) l.g.nextLoop = 0,
            l.stop(),
            0 == l.o.forceLoopNum && (l.o.loops = 0);
          else {
            var e = l.g.curLayerIndex < l.g.layersNum ? l.g.curLayerIndex + 1 : 1;
            l.g.prevNext = "next",
              l.change(e, l.g.prevNext)
          }
        },
        l.change = function (i, a) {
          l.g.startSlideTime = l.g.pausedSlideTime = l.g.curSlideTime = !1,
            l.g.barTimer && l.g.barTimer.stop().delay(300).animate({
              width: 0
            },
              450),
            l.g.circleTimer && (l.g.circleTimer.fadeOut(500), l.g.cttl && l.g.cttl.reverse().duration(.35)),
            1 == l.g.pausedByVideo && (l.g.pausedByVideo = !1, l.g.autoSlideshow = l.g.originalAutoSlideshow, l.g.curLayer.find('iframe[src*="youtube.com"], iframe[src*="youtu.be"], iframe[src*="player.vimeo"]').each(function () {
              t(this).parent().find(".ls-vpcontainer").fadeIn(l.g.v.fi, function () {
                t(this).parent().find("iframe").attr("src", "")
              })
            }), l.g.curLayer.find("video, audio").each(function () {
              this.pause()
            })),
            t(e).find('iframe[src*="youtube.com"], iframe[src*="youtu.be"], iframe[src*="player.vimeo"]').each(function () {
              clearTimeout(t(this).data("videoTimer"))
            }),
            clearTimeout(l.g.slideTimer),
            l.g.nextLayerIndex = i,
            l.g.nextLayer = t(e).find(".ls-slide:eq(" + (l.g.nextLayerIndex - 1) + ")"),
            a || (l.g.prevNext = l.g.curLayerIndex < l.g.nextLayerIndex ? "next" : "prev");
          var s = 0;
          t(e).find('iframe[src*="youtube.com"], iframe[src*="youtu.be"], iframe[src*="player.vimeo"]').length > 0 && (s = l.g.v.fi),
            "undefined" != typeof l.g.nextLayer[0] && l.imgPreload(l.g.nextLayer, function () {
              l.animate()
            })
        },
        l.imgPreload = function (i, a) {
          if (l.g.isLoading = !0, l.g.showSlider && t(e).css({
            visibility: "visible"
          }), l.o.imgPreload) {
            var s = [],
              o = 0;
            if ("none" != i.css("background-image") && -1 != i.css("background-image").indexOf("url") && !i.hasClass("ls-preloaded") && !i.hasClass("ls-not-preloaded")) {
              var r = i.css("background-image");
              r = r.match(/url\((.*)\)/)[1].replace(/"/gi, ""),
                s[s.length] = [r, i]
            }
            if (i.find("img:not(.ls-preloaded, .ls-not-preloaded)").each(function () {
              l.o.lazyLoad === !0 && t(this).attr("src", t(this).data("src")),
                s[s.length] = [t(this).attr("src"), t(this)]
            }), i.find("*").each(function () {
              if ("none" != t(this).css("background-image") && -1 != t(this).css("background-image").indexOf("url") && !t(this).hasClass("ls-preloaded") && !t(this).hasClass("ls-not-preloaded")) {
                var e = t(this).css("background-image");
                e = e.match(/url\((.*)\)/)[1].replace(/"/gi, ""),
                  s[s.length] = [e, t(this)]
              }
            }), 0 == s.length) t(".ls-thumbnail-wrapper, .ls-nav-next, .ls-nav-prev, .ls-bottom-nav-wrapper").css({
              visibility: "visible"
            }),
              l.makeResponsive(i, a);
            else {
              l.g.ie78 ? l.g.li.css("display", "block") : l.g.li.delay(400).fadeIn(300);
              var n = function () {
                l.g.li.stop(!0, !0).css({
                  display: "none"
                }),
                  t(".ls-thumbnail-wrapper, .ls-nav-next, .ls-nav-prev, .ls-bottom-nav-wrapper").css({
                    visibility: "visible"
                  }),
                  -1 !== navigator.userAgent.indexOf("Trident/7") || l.g.ie78 ? setTimeout(function () {
                    l.makeResponsive(i, a)
                  },
                    50) : l.makeResponsive(i, a)
              };
              for (x = 0; x < s.length; x++) t("<img>").data("el", s[x]).load(function () {
                t(this).data("el")[1].addClass("ls-preloaded"),
                  ++o == s.length && n()
              }).error(function () {
                var e = t(this).data("el")[0].substring(t(this).data("el")[0].lastIndexOf("/") + 1, t(this).data("el")[0].length);
                window.console ? console.log('LayerSlider error:\r\n\r\nIt seems like the URL of the image or background image "' + e + '" is pointing to a wrong location and it cannot be loaded. Please check the URLs of all your images used in the slider.') : alert('LayerSlider error:\r\n\r\nIt seems like the URL of the image or background image "' + e + '" is pointing to a wrong location and it cannot be loaded. Please check the URLs of all your images used in the slider.'),
                  t(this).addClass("ls-not-preloaded"),
                  ++o == s.length && n()
              }).attr("src", s[x][0])
            }
          } else t(".ls-thumbnail-wrapper, .ls-nav-next, .ls-nav-prev, .ls-bottom-nav-wrapper").css({
            visibility: "visible"
          }),
            l.makeResponsive(i, a)
        },
        l.makeResponsive = function (i, a) {
          i.css({
            visibility: "hidden",
            display: "block"
          }),
            l.g.showShadow && l.g.showShadow(),
            l.resizeSlider(),
            "always" == l.o.thumbnailNavigation && l.resizeThumb(),
            i.children().each(function () {
              var i = t(this),
                a = i.data("originalLeft") ? i.data("originalLeft") : "0",
                s = i.data("originalTop") ? i.data("originalTop") : "0";
              i.is("a") && i.children().length > 0 && (i.css({
                display: "block"
              }), i = i.children());
              var o = "auto",
                r = "auto";
              i.data("originalWidth") && ("number" == typeof i.data("originalWidth") ? o = parseInt(i.data("originalWidth")) * l.g.ratio : -1 != i.data("originalWidth").indexOf("%") && (o = i.data("originalWidth"))),
                i.data("originalHeight") && ("number" == typeof i.data("originalHeight") ? r = parseInt(i.data("originalHeight")) * l.g.ratio : -1 != i.data("originalHeight").indexOf("%") && (r = i.data("originalHeight")));
              var n = i.data("originalPaddingLeft") ? parseInt(i.data("originalPaddingLeft")) * l.g.ratio : 0,
                d = i.data("originalPaddingRight") ? parseInt(i.data("originalPaddingRight")) * l.g.ratio : 0,
                g = i.data("originalPaddingTop") ? parseInt(i.data("originalPaddingTop")) * l.g.ratio : 0,
                h = i.data("originalPaddingBottom") ? parseInt(i.data("originalPaddingBottom")) * l.g.ratio : 0,
                c = i.data("originalBorderLeft") ? parseInt(i.data("originalBorderLeft")) * l.g.ratio : 0,
                u = i.data("originalBorderRight") ? parseInt(i.data("originalBorderRight")) * l.g.ratio : 0,
                f = i.data("originalBorderTop") ? parseInt(i.data("originalBorderTop")) * l.g.ratio : 0,
                p = i.data("originalBorderBottom") ? parseInt(i.data("originalBorderBottom")) * l.g.ratio : 0,
                m = i.data("originalFontSize"),
                v = i.data("originalLineHeight");
              if (l.g.responsiveMode || l.o.responsiveUnder > 0) {
                if (i.is("img") && !i.hasClass("ls-bg") && i.attr("src") && (i.css({
                  width: "auto",
                  height: "auto"
                }), 0 != o && "auto" != o || "number" != typeof r || 0 == r || (o = r / i.height() * i.width()), 0 != r && "auto" != r || "number" != typeof o || 0 == o || (r = o / i.width() * i.height()), "auto" == o && (o = i.width() * l.g.ratio), "auto" == r && (r = i.height() * l.g.ratio), i.css({
                  width: o,
                  height: r
                })), i.is("img") || i.css({
                  width: o,
                  height: r,
                  "font-size": parseInt(m) * l.g.ratio + "px",
                  "line-height": parseInt(v) * l.g.ratio + "px"
                }), i.is("div") && i.find("iframe").data("videoSrc")) {
                  var y = i.find("iframe");
                  y.attr("width", parseInt(y.data("originalWidth")) * l.g.ratio).attr("height", parseInt(y.data("originalHeight")) * l.g.ratio),
                    i.css({
                      width: parseInt(y.data("originalWidth")) * l.g.ratio,
                      height: parseInt(y.data("originalHeight")) * l.g.ratio
                    })
                }
                i.css({
                  padding: g + "px " + d + "px " + h + "px " + n + "px ",
                  borderLeftWidth: c + "px",
                  borderRightWidth: u + "px",
                  borderTopWidth: f + "px",
                  borderBottomWidth: p + "px"
                })
              }
              if (i.hasClass("ls-bg")) {
                var b = t(e).find(".ls-inner");
                i.css({
                  width: "auto",
                  height: "auto"
                }),
                  o = i.width(),
                  r = i.height();
                var w = l.g.ratio; - 1 != l.g.sliderOriginalWidth.indexOf("%") && (l.g.sliderWidth() > o ? (w = l.g.sliderWidth() / o, l.g.sliderHeight() > r * w && (w = l.g.sliderHeight() / r)) : l.g.sliderHeight() > r && (w = l.g.sliderHeight() / r, l.g.sliderWidth() > o * w && (w = l.g.sliderWidth() / o))),
                  i.css({
                    width: o * w,
                    height: r * w,
                    marginLeft: b.width() / 2 - o * w / 2,
                    marginTop: b.height() / 2 - r * w / 2
                  })
              } else {
                var x = i;
                i.parent().is("a") && (i = i.parent());
                var S = 0;
                l.o.layersContainer ? S = l.o.layersContainer > 0 ? (l.g.sliderWidth() - l.o.layersContainer) / 2 : 0 : l.o.sublayerContainer && (S = l.o.sublayerContainer > 0 ? (l.g.sliderWidth() - l.o.sublayerContainer) / 2 : 0),
                  S = 0 > S ? 0 : S,
                  -1 != a.indexOf("%") ? i.css({
                    left: l.g.sliderWidth() / 100 * parseInt(a) - x.width() / 2 - n - c
                  }) : (S > 0 || l.g.responsiveMode || l.o.responsiveUnder > 0) && i.css({
                    left: S + parseInt(a) * l.g.ratio
                  }),
                  -1 != s.indexOf("%") ? i.css({
                    top: l.g.sliderHeight() / 100 * parseInt(s) - x.height() / 2 - g - f
                  }) : (l.g.responsiveMode || l.o.responsiveUnder > 0) && i.css({
                    top: parseInt(s) * l.g.ratio
                  })
              }
            }),
            i.css({
              display: "none",
              visibility: "visible"
            }),
            l.resizeShadow(),
            a(),
            t(this).dequeue()
        },
        l.resizeShadow = function () {
          if (l.g.shadowImg) {
            var t = function () {
              l.g.shadowImg.height() > 0 ? l.g.shadow.css(l.g.shadowBtmMod > 0 ? {
                height: l.g.shadowImg.height() / 2
              } : {
                  height: l.g.shadowImg.height(),
                  marginTop: -l.g.shadowImg.height() / 2
                }) : setTimeout(function () {
                  t()
                },
                  50)
            };
            t()
          }
        },
        l.resizeSlider = function () {
          if (l.o.responsiveUnder > 0 && (t(window).width() < l.o.responsiveUnder ? (l.g.responsiveMode = !0, l.g.sliderOriginalWidth = l.o.responsiveUnder + "px") : (l.g.responsiveMode = !1, l.g.sliderOriginalWidth = l.g.sliderOriginalWidthRU, l.g.ratio = 1)), t(e).closest(".ls-wp-fullwidth-container").length && t(e).closest(".ls-wp-fullwidth-helper").css({
            width: t(window).width()
          }), l.g.responsiveMode) {
            var i = t(e).parent();
            l.o.fullScreen === !0 ? t(e).css({
              width: "100%",
              height: t(window).height()
            }) : (t(e).css({
              width: i.width() - parseInt(t(e).css("padding-left")) - parseInt(t(e).css("padding-right"))
            }), l.g.ratio = t(e).width() / parseInt(l.g.sliderOriginalWidth), t(e).css({
              height: l.g.ratio * parseInt(l.g.sliderOriginalHeight)
            }))
          } else l.g.ratio = 1,
            t(e).css({
              width: l.g.sliderOriginalWidth,
              height: l.g.sliderOriginalHeight
            });
          if (t(e).closest(".ls-wp-fullwidth-container").length && (t(e).closest(".ls-wp-fullwidth-helper").css({
            height: t(e).outerHeight(!0)
          }), t(e).closest(".ls-wp-fullwidth-container").css({
            height: t(e).outerHeight(!0)
          }), t(e).closest(".ls-wp-fullwidth-helper").css({
            width: t(window).width(),
            left: -t(e).closest(".ls-wp-fullwidth-container").offset().left
          }), -1 != l.g.sliderOriginalWidth.indexOf("%"))) {
            var a = parseInt(l.g.sliderOriginalWidth),
              s = t("body").width() / 100 * a - (t(e).outerWidth() - t(e).width());
            t(e).width(s)
          }
          t(e).find(".ls-inner, .ls-lt-container").css({
            width: l.g.sliderWidth(),
            height: l.g.sliderHeight()
          }),
            l.g.curLayer && l.g.nextLayer ? (l.g.curLayer.css({
              width: l.g.sliderWidth(),
              height: l.g.sliderHeight()
            }), l.g.nextLayer.css({
              width: l.g.sliderWidth(),
              height: l.g.sliderHeight()
            })) : t(e).find(".ls-slide").css({
              width: l.g.sliderWidth(),
              height: l.g.sliderHeight()
            })
        },
        l.resizeYourLogo = function () {
          l.g.yourLogo.css({
            width: l.g.yourLogo.data("originalWidth") * l.g.ratio,
            height: l.g.yourLogo.data("originalHeight") * l.g.ratio
          }),
            l.g.ie78 ? l.g.yourLogo.css("display", "block") : l.g.yourLogo.fadeIn(300);
          var i = oR = oT = oB = "auto";
          i = l.g.yourLogo.data("originalLeft") && -1 != l.g.yourLogo.data("originalLeft").indexOf("%") ? l.g.sliderWidth() / 100 * parseInt(l.g.yourLogo.data("originalLeft")) - l.g.yourLogo.width() / 2 + parseInt(t(e).css("padding-left")) : parseInt(l.g.yourLogo.data("originalLeft")) * l.g.ratio,
            oR = l.g.yourLogo.data("originalRight") && -1 != l.g.yourLogo.data("originalRight").indexOf("%") ? l.g.sliderWidth() / 100 * parseInt(l.g.yourLogo.data("originalRight")) - l.g.yourLogo.width() / 2 + parseInt(t(e).css("padding-right")) : parseInt(l.g.yourLogo.data("originalRight")) * l.g.ratio,
            oT = l.g.yourLogo.data("originalTop") && -1 != l.g.yourLogo.data("originalTop").indexOf("%") ? l.g.sliderHeight() / 100 * parseInt(l.g.yourLogo.data("originalTop")) - l.g.yourLogo.height() / 2 + parseInt(t(e).css("padding-top")) : parseInt(l.g.yourLogo.data("originalTop")) * l.g.ratio,
            oB = l.g.yourLogo.data("originalBottom") && -1 != l.g.yourLogo.data("originalBottom").indexOf("%") ? l.g.sliderHeight() / 100 * parseInt(l.g.yourLogo.data("originalBottom")) - l.g.yourLogo.height() / 2 + parseInt(t(e).css("padding-bottom")) : parseInt(l.g.yourLogo.data("originalBottom")) * l.g.ratio,
            l.g.yourLogo.css({
              left: i,
              right: oR,
              top: oT,
              bottom: oB
            })
        },
        l.resizeThumb = function () {
          l.bottomNavSizeHelper("on");
          var i = -1 == l.g.sliderOriginalWidth.indexOf("%") ? parseInt(l.g.sliderOriginalWidth) : l.g.sliderWidth();
          t(e).find(".ls-thumbnail-slide a").css({
            width: parseInt(l.o.tnWidth * l.g.ratio),
            height: parseInt(l.o.tnHeight * l.g.ratio)
          }),
            t(e).find(".ls-thumbnail-slide a:last").css({
              margin: 0
            }),
            t(e).find(".ls-thumbnail-slide").css({
              height: parseInt(l.o.tnHeight * l.g.ratio)
            });
          var a = t(e).find(".ls-thumbnail"),
            s = parseInt(- 1 == l.o.tnContainerWidth.indexOf("%") ? l.o.tnContainerWidth : i / 100 * parseInt(l.o.tnContainerWidth));
          a.css({
            width: s * Math.floor(100 * l.g.ratio) / 100
          }),
            a.width() > t(e).find(".ls-thumbnail-slide").width() && a.css({
              width: t(e).find(".ls-thumbnail-slide").width()
            }),
            l.bottomNavSizeHelper("off")
        },
        l.changeThumb = function (i) {
          var a = i ? i : l.g.nextLayerIndex;
          t(e).find(".ls-thumbnail-slide a:not(.ls-thumb-" + a + ")").children().each(function () {
            t(this).removeClass("ls-thumb-active").stop().fadeTo(750, l.o.tnInactiveOpacity / 100)
          }),
            t(e).find(".ls-thumbnail-slide a.ls-thumb-" + a).children().addClass("ls-thumb-active").stop().fadeTo(750, l.o.tnActiveOpacity / 100)
        },
        l.scrollThumb = function () {
          if (!t(e).find(".ls-thumbnail-slide-container").hasClass("ls-thumbnail-slide-hover")) {
            var i = t(e).find(".ls-thumb-active").length ? t(e).find(".ls-thumb-active").parent() : !1;
            if (i) {
              var a = i.position().left + i.width() / 2,
                s = t(e).find(".ls-thumbnail-slide-container").width() / 2 - a;
              s = s < t(e).find(".ls-thumbnail-slide-container").width() - t(e).find(".ls-thumbnail-slide").width() ? t(e).find(".ls-thumbnail-slide-container").width() - t(e).find(".ls-thumbnail-slide").width() : s,
                s = s > 0 ? 0 : s,
                t(e).find(".ls-thumbnail-slide").animate({
                  marginLeft: s
                },
                  600)
            }
          }
        },
        l.bottomNavSizeHelper = function (i) {
          if (l.o.hoverBottomNav && !t(e).hasClass("ls-hover")) switch (i) {
            case "on":
              l.g.thumbsWrapper.css({
                visibility:
                  "hidden",
                display: "block"
              });
              break;
            case "off":
              l.g.thumbsWrapper.css({
                visibility:
                  "visible",
                display: "none"
              })
          }
        },
        l.animate = function () {
          l.g.numYouTubeCurSlide = 0,
            t(e).find(".ls-slide").length > 1 && (l.g.isAnimating = !0),
            l.g.isLoading = !1,
            clearTimeout(l.g.slideTimer),
            clearTimeout(l.g.changeTimer),
            l.g.stopLayer = l.g.curLayer,
            l.o.cbAnimStart(l.g),
            "always" == l.o.thumbnailNavigation && (l.changeThumb(), "ontouchstart" in window || l.scrollThumb()),
            l.g.nextLayer.addClass("ls-animating");
          var i = curLayerRight = curLayerTop = curLayerBottom = nextLayerLeft = nextLayerRight = nextLayerTop = nextLayerBottom = layerMarginLeft = layerMarginRight = layerMarginTop = layerMarginBottom = "auto",
            d = nextLayerWidth = l.g.sliderWidth(),
            g = nextLayerHeight = l.g.sliderHeight(),
            h = "prev" == l.g.prevNext ? l.g.curLayer : l.g.nextLayer,
            c = h.data("slidedirection") ? h.data("slidedirection") : l.o.slideDirection,
            u = l.g.slideDirections[l.g.prevNext][c];
          switch (("left" == u || "right" == u) && (d = curLayerTop = nextLayerWidth = nextLayerTop = 0, layerMarginTop = 0), ("top" == u || "bottom" == u) && (g = i = nextLayerHeight = nextLayerLeft = 0, layerMarginLeft = 0), u) {
            case "left":
              curLayerRight = nextLayerLeft = 0,
                layerMarginLeft = -l.g.sliderWidth();
              break;
            case "right":
              i = nextLayerRight = 0,
                layerMarginLeft = l.g.sliderWidth();
              break;
            case "top":
              curLayerBottom = nextLayerTop = 0,
                layerMarginTop = -l.g.sliderHeight();
              break;
            case "bottom":
              curLayerTop = nextLayerBottom = 0,
                layerMarginTop = l.g.sliderHeight()
          }
          l.g.curLayer.css({
            left: i,
            right: curLayerRight,
            top: curLayerTop,
            bottom: curLayerBottom
          }),
            l.g.nextLayer.css({
              width: nextLayerWidth,
              height: nextLayerHeight,
              left: nextLayerLeft,
              right: nextLayerRight,
              top: nextLayerTop,
              bottom: nextLayerBottom
            });
          var f = l.g.curLayer.data("delayout") ? parseInt(l.g.curLayer.data("delayout")) : l.o.delayOut,
            p = l.g.curLayer.data("durationout") ? parseInt(l.g.curLayer.data("durationout")) : l.o.durationOut,
            m = l.g.curLayer.data("easingout") ? l.g.curLayer.data("easingout") : l.o.easingOut,
            v = l.g.nextLayer.data("delayin") ? parseInt(l.g.nextLayer.data("delayin")) : l.o.delayIn,
            y = l.g.nextLayer.data("durationin") ? parseInt(l.g.nextLayer.data("durationin")) : l.o.durationIn;
          0 === y && (y = 1);
          var b = l.g.nextLayer.data("easingin") ? l.g.nextLayer.data("easingin") : l.o.easingIn,
            w = function () {
              l.g.curLayer.delay(f + p / 15).animate({
                width: d,
                height: g
              },
                p, m, function () {
                  x()
                })
            },
            x = function () {
              if (l.g.stopLayer.find(' > *[class*="ls-l"]').each(function () {
                t(this).data("tr") && t(this).data("tr").kill(),
                  t(this).css({
                    filter: "none"
                  })
              }), l.g.curLayer = l.g.nextLayer, l.g.prevLayerIndex = l.g.curLayerIndex, l.g.curLayerIndex = l.g.nextLayerIndex, l.o.cbAnimStop(l.g), l.o.imgPreload && l.o.lazyLoad) {
                var i = l.g.curLayerIndex == l.g.layersNum ? 1 : l.g.curLayerIndex + 1;
                t(e).find(".ls-slide").eq(i - 1).find("img:not(.ls-preloaded)").each(function () {
                  t(this).load(function () {
                    t(this).addClass("ls-preloaded")
                  }).error(function () {
                    var e = t(this).data("src").substring(t(this).data("src").lastIndexOf("/") + 1, t(this).data("src").length);
                    window.console ? console('LayerSlider error:\r\n\r\nIt seems like the URL of the image or background image "' + e + '" is pointing to a wrong location and it cannot be loaded. Please check the URLs of all your images used in the slider.') : alert('LayerSlider error:\r\n\r\nIt seems like the URL of the image or background image "' + e + '" is pointing to a wrong location and it cannot be loaded. Please check the URLs of all your images used in the slider.'),
                      t(this).addClass("ls-not-preloaded")
                  }).attr("src", t(this).data("src"))
                })
              }
              t(e).find(".ls-slide").removeClass("ls-active"),
                t(e).find(".ls-slide:eq(" + (l.g.curLayerIndex - 1) + ")").addClass("ls-active").removeClass("ls-animating"),
                t(e).find(".ls-bottom-slidebuttons a").removeClass("ls-nav-active"),
                t(e).find(".ls-bottom-slidebuttons a:eq(" + (l.g.curLayerIndex - 1) + ")").addClass("ls-nav-active"),
                l.g.autoSlideshow && l.timer(),
                l.g.isAnimating = !1,
                1 == l.g.resize && l.makeResponsive(l.g.curLayer, function () {
                  l.g.resize = !1
                })
            },
            S = function (e) {
              l.g.curLayer.find(' > *[class*="ls-l"]').each(function () {
                t(this).data("transitiontype") || l.transitionType(t(this)),
                  t(this).removeClass("ls-videohack");
                var i, s, o = t(this).data("slidedirection") ? t(this).data("slidedirection") : u;
                switch (o) {
                  case "left":
                    i = -l.g.sliderWidth(),
                      s = 0;
                    break;
                  case "right":
                    i = l.g.sliderWidth(),
                      s = 0;
                    break;
                  case "top":
                    s = -l.g.sliderHeight(),
                      i = 0;
                    break;
                  case "bottom":
                    s = l.g.sliderHeight(),
                      i = 0;
                    break;
                  case "fade":
                    s = 0,
                      i = 0
                }
                if ("new" === t(this).data("transitiontype")) var r = "new";
                else var r = t(this).data("slideoutdirection") ? t(this).data("slideoutdirection") : !1;
                switch (r) {
                  case "left":
                    i = l.g.sliderWidth(),
                      s = 0;
                    break;
                  case "right":
                    i = -l.g.sliderWidth(),
                      s = 0;
                    break;
                  case "top":
                    s = l.g.sliderHeight(),
                      i = 0;
                    break;
                  case "bottom":
                    s = -l.g.sliderHeight(),
                      i = 0;
                    break;
                  case "fade":
                    s = 0,
                      i = 0;
                    break;
                  case "new":
                    i = t(this).data("offsetxout") ? "left" === t(this).data("offsetxout") ? l.g.sliderWidth() : "right" === t(this).data("offsetxout") ? -l.g.sliderWidth() : -parseInt(t(this).data("offsetxout")) : -l.lt.offsetXOut,
                      s = t(this).data("offsetyout") ? "top" === t(this).data("offsetyout") ? l.g.sliderHeight() : "bottom" === t(this).data("offsetyout") ? -l.g.sliderHeight() : -parseInt(t(this).data("offsetyout")) : -l.lt.offsetYOut
                }
                var n = curSubRotateX = curSubRotateY = curSubScale = curSubSkewX = curSubSkewY = curSubScaleX = curSubScaleY = "none";
                n = t(this).data("rotateout") ? t(this).data("rotateout") : l.lt.rotateOut,
                  curSubRotateX = t(this).data("rotatexout") ? t(this).data("rotatexout") : l.lt.rotateXOut,
                  curSubRotateY = t(this).data("rotateyout") ? t(this).data("rotateyout") : l.lt.rotateYOut,
                  curSubScale = t(this).data("scaleout") ? t(this).data("scaleout") : l.lt.scaleOut,
                  curSubSkewX = t(this).data("skewxout") ? t(this).data("skewxout") : l.lt.skewXOut,
                  curSubSkewY = t(this).data("skewyout") ? t(this).data("skewyout") : l.lt.skewYOut,
                  1 === curSubScale ? (curSubScaleX = t(this).data("scalexout") ? t(this).data("scalexout") : l.lt.scaleXOut, curSubScaleY = t(this).data("scaleyout") ? t(this).data("scaleyout") : l.lt.scaleYOut) : curSubScaleX = curSubScaleY = curSubScale;
                for (var d = t(this).data("transformoriginout") ? t(this).data("transformoriginout").split(" ") : l.lt.transformOriginOut, g = 0; g < d.length; g++) - 1 === d[g].indexOf("%") && -1 !== d[g].indexOf("left") && -1 !== d[g].indexOf("right") && -1 !== d[g].indexOf("top") && -1 !== d[g].indexOf("bottom") && (d[g] = "" + parseInt(d[g]) * l.g.ratio + "px");
                var h = d.join(" "),
                  c = t(this).data("perspectiveout") ? t(this).data("perspectiveout") : l.lt.perspectiveOut,
                  f = parseInt(t(this).css("left")),
                  p = parseInt(t(this).css("top")),
                  m = parseInt(t(this).attr("class").split("ls-l")[1]),
                  v = t(this).outerWidth() > t(this).outerHeight() ? t(this).outerWidth() : t(this).outerHeight(),
                  y = 0 === parseInt(n) ? t(this).outerWidth() : v,
                  b = 0 === parseInt(n) ? t(this).outerHeight() : v;
                if (- 1 === m && "new" !== r || "left" === t(this).data("offsetxout") || "right" === t(this).data("offsetxout") ? 0 > i ? i = -(l.g.sliderWidth() - f + (curSubScaleX / 2 - .5) * y + 100) : i > 0 && (i = f + (curSubScaleX / 2 + .5) * y + 100) : i *= l.g.ratio, -1 === m && "new" !== r || "top" === t(this).data("offsetyout") || "bottom" === t(this).data("offsetyout") ? 0 > s ? s = -(l.g.sliderHeight() - p + (curSubScaleY / 2 - .5) * b + 100) : s > 0 && (s = p + (curSubScaleY / 2 + .5) * b + 100) : s *= l.g.ratio, -1 === m || "new" === r) var w = 1;
                else var x = l.g.curLayer.data("parallaxout") ? parseInt(l.g.curLayer.data("parallaxout")) : l.o.parallaxOut,
                  w = m * x;
                if ("new" === t(this).data("transitiontype")) var S = l.lt.delayOut,
                  L = l.lt.durationOut,
                  T = l.lt.easingOut;
                else var S = l.o.delayOut,
                  L = l.o.durationOut,
                  T = l.o.easingOut;
                var I = t(this).data("delayout") ? parseInt(t(this).data("delayout")) : S,
                  k = t(this).data("durationout") ? parseInt(t(this).data("durationout")) : L;
                0 === k && (k = 1);
                var O = t(this).data("easingout") ? t(this).data("easingout") : T;
                e && (I = 0, k = e),
                  t(this).data("showUntilTimer") && clearTimeout(t(this).data("showUntilTimer"));
                var C = {
                  visibility: "hidden"
                },
                  W = t(this),
                  X = {
                    rotation: n,
                    rotationX: curSubRotateX,
                    rotationY: curSubRotateY,
                    skewX: curSubSkewX,
                    skewY: curSubSkewY,
                    scaleX: curSubScaleX,
                    scaleY: curSubScaleY,
                    x: -i * w,
                    y: -s * w,
                    delay: I / 1e3,
                    ease: a(O),
                    onComplete: function () {
                      W.css(C)
                    }
                  };
                ("fade" == r || !r && "fade" === o || "false" !== t(this).data("fadeout") && "new" === t(this).data("transitiontype")) && (X.opacity = 0, C.opacity = t(this).data("originalOpacity")),
                  t(this).data("tr") && t(this).data("tr").kill(),
                  TweenLite.set(t(this)[0], {
                    transformOrigin: h,
                    transformPerspective: c
                  }),
                  t(this).data("tr", TweenLite.to(t(this)[0], k / 1e3, X))
              })
            },
            L = function () {
              l.g.nextLayer.delay(f + v).animate({
                width: l.g.sliderWidth(),
                height: l.g.sliderHeight()
              },
                y, b)
            },
            T = function () {
              l.g.totalDuration && (f = 0),
                "function" == typeof l.o.cbTimeLineStart && l.o.cbTimeLineStart(l.g, f + v),
                l.g.nextLayer.find(' > *[class*="ls-l"]').each(function () {
                  if (t(this).data("transitiontype") || l.transitionType(t(this)), "new" === t(this).data("transitiontype")) var e = "new";
                  else var e = t(this).data("slidedirection") ? t(this).data("slidedirection") : u;
                  var i, s;
                  switch (e) {
                    case "left":
                      i = -l.g.sliderWidth(),
                        s = 0;
                      break;
                    case "right":
                      i = l.g.sliderWidth(),
                        s = 0;
                      break;
                    case "top":
                      s = -l.g.sliderHeight(),
                        i = 0;
                      break;
                    case "bottom":
                      s = l.g.sliderHeight(),
                        i = 0;
                      break;
                    case "fade":
                      s = 0,
                        i = 0;
                      break;
                    case "new":
                      i = t(this).data("offsetxin") ? "left" === t(this).data("offsetxin") ? -l.g.sliderWidth() : "right" === t(this).data("offsetxin") ? l.g.sliderWidth() : parseInt(t(this).data("offsetxin")) : l.lt.offsetXIn,
                        s = t(this).data("offsetyin") ? "top" === t(this).data("offsetyin") ? -l.g.sliderHeight() : "bottom" === t(this).data("offsetyin") ? l.g.sliderHeight() : parseInt(t(this).data("offsetyin")) : l.lt.offsetYIn
                  }
                  var o = nextSubRotateX = nextSubRotateY = nextSubScale = nextSubSkewX = nextSubSkewY = nextSubScaleX = nextSubScaleY = "none";
                  o = t(this).data("rotatein") ? t(this).data("rotatein") : l.lt.rotateIn,
                    nextSubRotateX = t(this).data("rotatexin") ? t(this).data("rotatexin") : l.lt.rotateXIn,
                    nextSubRotateY = t(this).data("rotateyin") ? t(this).data("rotateyin") : l.lt.rotateYIn,
                    nextSubScale = t(this).data("scalein") ? t(this).data("scalein") : l.lt.scaleIn,
                    nextSubSkewX = t(this).data("skewxin") ? t(this).data("skewxin") : l.lt.skewXIn,
                    nextSubSkewY = t(this).data("skewyin") ? t(this).data("skewyin") : l.lt.skewYIn,
                    1 === nextSubScale ? (nextSubScaleX = t(this).data("scalexin") ? t(this).data("scalexin") : l.lt.scaleXIn, nextSubScaleY = t(this).data("scaleyin") ? t(this).data("scaleyin") : l.lt.scaleYIn) : nextSubScaleX = nextSubScaleY = nextSubScale;
                  for (var r = t(this).data("transformoriginin") ? t(this).data("transformoriginin").split(" ") : l.lt.transformOriginIn, n = 0; n < r.length; n++) - 1 === r[n].indexOf("%") && -1 !== r[n].indexOf("left") && -1 !== r[n].indexOf("right") && -1 !== r[n].indexOf("top") && -1 !== r[n].indexOf("bottom") && (r[n] = "" + parseInt(r[n]) * l.g.ratio + "px");
                  var d = r.join(" "),
                    g = t(this).data("perspectivein") ? t(this).data("perspectivein") : l.lt.perspectiveIn,
                    h = parseInt(t(this).css("left")),
                    c = parseInt(t(this).css("top")),
                    f = parseInt(t(this).attr("class").split("ls-l")[1]); - 1 !== t(this)[0].style.width.indexOf("%") && t(this).css({
                      width: l.g.sliderWidth() / 100 * parseInt(t(this)[0].style.width)
                    });
                  var p = t(this).outerWidth() > t(this).outerHeight() ? t(this).outerWidth() : t(this).outerHeight(),
                    m = 0 === parseInt(o) ? t(this).outerWidth() : p,
                    v = 0 === parseInt(o) ? t(this).outerHeight() : p;
                  if (- 1 === f && "new" !== e || "left" === t(this).data("offsetxin") || "right" === t(this).data("offsetxin") ? 0 > i ? i = -(h + (nextSubScaleX / 2 + .5) * m + 100) : i > 0 && (i = l.g.sliderWidth() - h + (nextSubScaleX / 2 - .5) * m + 100) : i *= l.g.ratio, -1 === f && "new" !== e || "top" === t(this).data("offsetyin") || "bottom" === t(this).data("offsetyin") ? 0 > s ? s = -(c + (nextSubScaleY / 2 + .5) * v + 100) : s > 0 && (s = l.g.sliderHeight() - c + (nextSubScaleY / 2 - .5) * v + 100) : s *= l.g.ratio, -1 === f || "new" === e) var y = 1;
                  else var b = l.g.nextLayer.data("parallaxin") ? parseInt(l.g.nextLayer.data("parallaxin")) : l.o.parallaxIn,
                    y = f * b;
                  if ("new" === t(this).data("transitiontype")) var w = l.lt.delayIn,
                    x = l.lt.durationIn,
                    S = l.lt.easingIn;
                  else var w = l.o.delayIn,
                    x = l.o.durationIn,
                    S = l.o.easingIn;
                  var L = t(this).data("delayin") ? parseInt(t(this).data("delayin")) : w,
                    T = t(this).data("durationin") ? parseInt(t(this).data("durationin")) : x,
                    I = t(this).data("easingin") ? t(this).data("easingin") : S,
                    k = t(this),
                    O = function () {
                      k.hasClass("ls-video-layer") && k.addClass("ls-videohack"),
                        1 == l.o.autoPlayVideos && (k.find(".ls-videopreview").click(), k.find("video, audio").each(function () {
                          0 !== typeof t(this)[0].currentTime && (t(this)[0].currentTime = 0),
                            t(this).click()
                        })),
                        (!k.hasClass("ls-video-layer") || k.hasClass("ls-video-layer") && l.o.autoPlayVideos === !1) && k.data("showuntil") > 0 && k.data("showUntilTimer", setTimeout(function () {
                          l.sublayerShowUntil(k)
                        },
                          k.data("showuntil")))
                    };
                  t(this).css({
                    marginLeft: 0,
                    marginTop: 0
                  });
                  var C = {
                    scaleX: nextSubScaleX,
                    scaleY: nextSubScaleY,
                    skewX: nextSubSkewX,
                    skewY: nextSubSkewY,
                    rotation: o,
                    rotationX: nextSubRotateX,
                    rotationY: nextSubRotateY,
                    visibility: "visible",
                    x: i * y,
                    y: s * y
                  },
                    W = {
                      rotation: 0,
                      rotationX: 0,
                      rotationY: 0,
                      skewX: 0,
                      skewY: 0,
                      scaleX: 1,
                      scaleY: 1,
                      ease: a(I),
                      delay: L / 1e3,
                      x: 0,
                      y: 0,
                      onComplete: function () {
                        O()
                      }
                    };
                  (- 1 != e.indexOf("fade") || "false" !== t(this).data("fadein") && "new" === t(this).data("transitiontype")) && (C.opacity = 0, W.opacity = t(this).data("originalOpacity")),
                    t(this).data("tr") && t(this).data("tr").kill(),
                    TweenLite.set(t(this)[0], {
                      transformPerspective: g,
                      transformOrigin: d
                    }),
                    t(this).data("tr", TweenLite.fromTo(t(this)[0], T / 1e3, C, W))
                })
            },
            I = function () {
              if (o(t(e)) && (l.g.nextLayer.data("transition3d") || l.g.nextLayer.data("customtransition3d"))) if (l.g.nextLayer.data("transition3d") && l.g.nextLayer.data("customtransition3d")) {
                var i = Math.floor(2 * Math.random()),
                  a = [["3d", l.g.nextLayer.data("transition3d")], ["custom3d", l.g.nextLayer.data("customtransition3d")]];
                O(a[i][0], a[i][1])
              } else l.g.nextLayer.data("transition3d") ? O("3d", l.g.nextLayer.data("transition3d")) : O("custom3d", l.g.nextLayer.data("customtransition3d"));
              else if (l.g.nextLayer.data("transition2d") && l.g.nextLayer.data("customtransition2d")) {
                var i = Math.floor(2 * Math.random()),
                  a = [["2d", l.g.nextLayer.data("transition2d")], ["custom2d", l.g.nextLayer.data("customtransition2d")]];
                O(a[i][0], a[i][1])
              } else l.g.nextLayer.data("transition2d") ? O("2d", l.g.nextLayer.data("transition2d")) : l.g.nextLayer.data("customtransition2d") ? O("custom2d", l.g.nextLayer.data("customtransition2d")) : O("2d", "1")
            },
            k = function () {
              o(t(e)) && -1 != LSCustomTransition.indexOf("3d") ? O("3d", LSCustomTransition.split(":")[1]) : -1 != LSCustomTransition.indexOf("3d") ? O("2d", "all") : O("2d", LSCustomTransition.split(":")[1])
            },
            O = function (t, e) {
              var i, a, s = -1 == t.indexOf("custom") ? l.t : l.ct,
                o = "3d";
              if (- 1 != t.indexOf("2d") && (o = "2d"), -1 != e.indexOf("last")) a = s["t" + o].length - 1,
                i = "last";
              else if (- 1 != e.indexOf("all")) a = Math.floor(Math.random() * n(s["t" + o])),
                i = "random from all";
              else {
                var r = e.split(","),
                  d = r.length;
                a = parseInt(r[Math.floor(Math.random() * d)]) - 1,
                  i = "random from specified"
              }
              C(o, s["t" + o][a])
            },
            C = function (i, o) {
              var n = t(e).find(".ls-inner"),
                d = l.g.curLayer.find('*[class*="ls-l"]').length > 0 ? 1e3 : 0,
                g = -1 == o.name.toLowerCase().indexOf("carousel") ? !1 : !0,
                h = -1 == o.name.toLowerCase().indexOf("crossfad") ? !1 : !0,
                c = typeof o.cols,
                u = typeof o.rows;
              switch (c) {
                case "number":
                  c = o.cols;
                  break;
                case "string":
                  c = Math.floor(Math.random() * (parseInt(o.cols.split(",")[1]) - parseInt(o.cols.split(",")[0]) + 1)) + parseInt(o.cols.split(",")[0]);
                  break;
                default:
                  c = Math.floor(Math.random() * (o.cols[1] - o.cols[0] + 1)) + o.cols[0]
              }
              switch (u) {
                case "number":
                  u = o.rows;
                  break;
                case "string":
                  u = Math.floor(Math.random() * (parseInt(o.rows.split(",")[1]) - parseInt(o.rows.split(",")[0]) + 1)) + parseInt(o.rows.split(",")[0]);
                  break;
                default:
                  u = Math.floor(Math.random() * (o.rows[1] - o.rows[0] + 1)) + o.rows[0]
              } (1 == l.g.isMobile() && 1 == l.o.optimizeForMobile || l.g.ie78 && 1 == l.o.optimizeForIE78) && (c >= 15 ? c = 7 : c >= 5 ? c = 4 : c >= 4 ? c = 3 : c > 2 && (c = 2), u >= 15 ? u = 7 : u >= 5 ? u = 4 : u >= 4 ? u = 3 : u > 2 && (u = 2), u > 2 && c > 2 && (u = 2, c > 4 && (c = 4)));
              var f = t(e).find(".ls-inner").width() / c,
                p = t(e).find(".ls-inner").height() / u;
              l.g.ltContainer ? l.g.ltContainer.stop(!0, !0).empty().css({
                display: "block",
                width: n.width(),
                height: n.height()
              }) : l.g.ltContainer = t("<div>").addClass("ls-lt-container").addClass("ls-overflow-hidden").css({
                width: n.width(),
                height: n.height()
              }).prependTo(n);
              var m = n.width() - Math.floor(f) * c,
                v = n.height() - Math.floor(p) * u,
                y = [];
              y.randomize = function () {
                var t, e, i, a = this.length;
                if (0 == a) return !1;
                for (; --a;) t = Math.floor(Math.random() * (a + 1)),
                  e = this[a],
                  i = this[t],
                  this[a] = i,
                  this[t] = e;
                return this
              };
              for (var b = 0; c * u > b; b++) y.push(b);
              switch (o.tile.sequence) {
                case "reverse":
                  y.reverse();
                  break;
                case "col-forward":
                  y = r(u, c, "forward");
                  break;
                case "col-reverse":
                  y = r(u, c, "reverse");
                  break;
                case "random":
                  y.randomize()
              }
              var w = l.g.curLayer.find(".ls-bg"),
                L = l.g.nextLayer.find(".ls-bg");
              if (0 == w.length && 0 == L.length && (i = "2d", o = t.extend(!0, {},
                l.t.t2d[0]), o.transition.duration = 1, o.tile.delay = 0), "3d" == i) {
                l.g.totalDuration = (c * u - 1) * o.tile.delay;
                var I = 0;
                o.before && o.before.duration && (I += o.before.duration),
                  o.animation && o.animation.duration && (I += o.animation.duration),
                  o.after && o.after.duration && (I += o.after.duration),
                  l.g.totalDuration += I;
                var k = 0;
                o.before && o.before.delay && (k += o.before.delay),
                  o.animation && o.animation.delay && (k += o.animation.delay),
                  o.after && o.after.delay && (k += o.after.delay),
                  l.g.totalDuration += k
              } else l.g.totalDuration = (c * u - 1) * o.tile.delay + o.transition.duration,
                l.g.curTiles = t("<div>").addClass("ls-curtiles").appendTo(l.g.ltContainer),
                l.g.nextTiles = t("<div>").addClass("ls-nexttiles").appendTo(l.g.ltContainer);
              for (var O = l.g.prevNext, C = 0; c * u > C; C++) {
                var W, X, Y = C % c == 0 ? m : 0,
                  H = C > (u - 1) * c - 1 ? v : 0,
                  P = t("<div>").addClass("ls-lt-tile").css({
                    width: Math.floor(f) + Y,
                    height: Math.floor(p) + H
                  }).appendTo(l.g.ltContainer);
                if ("3d" == i) {
                  P.addClass("ls-3d-container");
                  var M, N = Math.floor(f) + Y,
                    B = Math.floor(p) + H;
                  M = "horizontal" == o.animation.direction ? Math.abs(o.animation.transition.rotateY) > 90 && "large" != o.tile.depth ? Math.floor(N / 7) + Y : N : Math.abs(o.animation.transition.rotateX) > 90 && "large" != o.tile.depth ? Math.floor(B / 7) + H : B;
                  var A = N / 2,
                    R = B / 2,
                    z = M / 2,
                    D = function (e, i, a, s, o, r, n, d, l) {
                      t("<div>").addClass(e).css({
                        width: a,
                        height: s,
                        "-o-transform": "translate3d(" + o + "px, " + r + "px, " + n + "px) rotateX(" + d + "deg) rotateY(" + l + "deg) rotateZ(0deg) scale3d(1, 1, 1)",
                        "-ms-transform": "translate3d(" + o + "px, " + r + "px, " + n + "px) rotateX(" + d + "deg) rotateY(" + l + "deg) rotateZ(0deg) scale3d(1, 1, 1)",
                        "-moz-transform": "translate3d(" + o + "px, " + r + "px, " + n + "px) rotateX(" + d + "deg) rotateY(" + l + "deg) rotateZ(0deg) scale3d(1, 1, 1)",
                        "-webkit-transform": "translate3d(" + o + "px, " + r + "px, " + n + "px) rotateX(" + d + "deg) rotateY(" + l + "deg) rotateZ(0deg) scale3d(1, 1, 1)",
                        transform: "translate3d(" + o + "px, " + r + "px, " + n + "px) rotateX(" + d + "deg) rotateY(" + l + "deg) rotateZ(0deg) scale3d(1, 1, 1)"
                      }).appendTo(i)
                    };
                  D("ls-3d-box", P, 0, 0, 0, 0, -z, 0, 0);
                  "vertical" == o.animation.direction && Math.abs(o.animation.transition.rotateX) > 90 ? D("ls-3d-back", P.find(".ls-3d-box"), N, B, -A, -R, -z, 180, 0) : D("ls-3d-back", P.find(".ls-3d-box"), N, B, -A, -R, -z, 0, 180),
                    D("ls-3d-bottom", P.find(".ls-3d-box"), N, M, -A, R - z, 0, -90, 0),
                    D("ls-3d-top", P.find(".ls-3d-box"), N, M, -A, -R - z, 0, 90, 0),
                    D("ls-3d-front", P.find(".ls-3d-box"), N, B, -A, -R, z, 0, 0),
                    D("ls-3d-left", P.find(".ls-3d-box"), M, B, -A - z, -R, 0, 0, -90),
                    D("ls-3d-right", P.find(".ls-3d-box"), M, B, A - z, -R, 0, 0, 90),
                    W = P.find(".ls-3d-front"),
                    X = P.find("horizontal" == o.animation.direction ? Math.abs(o.animation.transition.rotateY) > 90 ? ".ls-3d-back" : ".ls-3d-left, .ls-3d-right" : Math.abs(o.animation.transition.rotateX) > 90 ? ".ls-3d-back" : ".ls-3d-top, .ls-3d-bottom");
                  var U = y[C] * o.tile.delay,
                    F = l.g.ltContainer.find(".ls-3d-container:eq(" + C + ") .ls-3d-box"),
                    q = new TimelineLite;
                  o.before && o.before.transition ? (o.before.transition.delay = o.before.transition.delay ? (o.before.transition.delay + U) / 1e3 : U / 1e3, q.to(F[0], o.before.duration / 1e3, s(o.before.transition, o.before.easing))) : o.animation.transition.delay = o.animation.transition.delay ? (o.animation.transition.delay + U) / 1e3 : U / 1e3,
                    q.to(F[0], o.animation.duration / 1e3, s(o.animation.transition, o.animation.easing)),
                    o.after && (o.after.transition || (o.after.transition = {}), q.to(F[0], o.after.duration / 1e3, s(o.after.transition, o.after.easing, "after")))
                } else {
                  var j = L1 = T2 = L2 = "auto",
                    Q = O2 = 1;
                  if ("random" == o.transition.direction) var V = ["top", "bottom", "right", "left"],
                    E = V[Math.floor(Math.random() * V.length)];
                  else var E = o.transition.direction;
                  if (- 1 != o.name.toLowerCase().indexOf("mirror") && C % 2 == 0 && (O = "prev" == O ? "next" : "prev"), "prev" == O) switch (E) {
                    case "top":
                      E = "bottom";
                      break;
                    case "bottom":
                      E = "top";
                      break;
                    case "left":
                      E = "right";
                      break;
                    case "right":
                      E = "left";
                      break;
                    case "topleft":
                      E = "bottomright";
                      break;
                    case "topright":
                      E = "bottomleft";
                      break;
                    case "bottomleft":
                      E = "topright";
                      break;
                    case "bottomright":
                      E = "topleft"
                  }
                  switch (E) {
                    case "top":
                      j = T2 = -P.height(),
                        L1 = L2 = 0;
                      break;
                    case "bottom":
                      j = T2 = P.height(),
                        L1 = L2 = 0;
                      break;
                    case "left":
                      j = T2 = 0,
                        L1 = L2 = -P.width();
                      break;
                    case "right":
                      j = T2 = 0,
                        L1 = L2 = P.width();
                      break;
                    case "topleft":
                      j = P.height(),
                        T2 = 0,
                        L1 = P.width(),
                        L2 = 0;
                      break;
                    case "topright":
                      j = P.height(),
                        T2 = 0,
                        L1 = -P.width(),
                        L2 = 0;
                      break;
                    case "bottomleft":
                      j = -P.height(),
                        T2 = 0,
                        L1 = P.width(),
                        L2 = 0;
                      break;
                    case "bottomright":
                      j = -P.height(),
                        T2 = 0,
                        L1 = -P.width(),
                        L2 = 0
                  }
                  switch (l.g.scale2D = o.transition.scale ? o.transition.scale : 1, 1 == g && 1 != l.g.scale2D && (j /= 2, T2 /= 2, L1 /= 2, L2 /= 2), o.transition.type) {
                    case "fade":
                      j = T2 = L1 = L2 = 0,
                        Q = 0,
                        O2 = 1;
                      break;
                    case "mixed":
                      Q = 0,
                        O2 = 1,
                        1 == l.g.scale2D && (T2 = L2 = 0)
                  }
                  if (P.css((o.transition.rotate || o.transition.rotateX || o.transition.rotateY || 1 != l.g.scale2D) && !l.g.ie78 && "slide" != o.transition.type ? {
                    overflow: "visible"
                  } : {
                      overflow: "hidden"
                    }), l.g.curTiles.css(1 == g ? {
                      overflow: "visible"
                    } : {
                        overflow: "hidden"
                      }), 1 == h || "slide" == o.transition.type || 1 == g) {
                    var G = P.appendTo(l.g.curTiles),
                      Z = P.clone().appendTo(l.g.nextTiles);
                    W = t("<div>").addClass("ls-curtile").appendTo(G)
                  } else var Z = P.appendTo(l.g.nextTiles);
                  X = t("<div>").addClass("ls-nexttile").appendTo(Z).css({
                    top: -j,
                    left: -L1,
                    dispay: "block",
                    opacity: Q
                  });
                  var _ = y[C] * o.tile.delay,
                    J = o.transition.rotate ? o.transition.rotate : 0,
                    $ = o.transition.rotateX ? o.transition.rotateX : 0,
                    K = o.transition.rotateY ? o.transition.rotateY : 0;
                  if ("prev" == O && (J = -J, $ = -$, K = -K), TweenLite.fromTo(X[0], o.transition.duration / 1e3, {
                    rotation: J,
                    rotationX: $,
                    rotationY: K,
                    scale: l.g.scale2D
                  },
                    {
                      delay: _ / 1e3,
                      top: 0,
                      left: 0,
                      opacity: O2,
                      rotation: 0,
                      rotationX: 0,
                      rotationY: 0,
                      scale: 1,
                      ease: a(o.transition.easing)
                    }), 1 == h && (L.length < 1 || L.length > 0 && (- 1 != L.attr("src").toLowerCase().indexOf("png") || L.width() < l.g.sliderWidth() || L.height() < l.g.sliderHeight())) && TweenLite.to(W[0], o.transition.duration / 1e3, {
                      delay: _ / 1e3,
                      opacity: 0,
                      ease: a(o.transition.easing)
                    }), ("slide" == o.transition.type || 1 == g) && -1 == o.name.toLowerCase().indexOf("mirror")) {
                    var te = 0;
                    0 != J && (te = -J),
                      TweenLite.to(W[0], o.transition.duration / 1e3, {
                        delay: _ / 1e3,
                        top: T2,
                        left: L2,
                        rotation: te,
                        scale: l.g.scale2D,
                        opacity: Q,
                        ease: a(o.transition.easing)
                      })
                  }
                }
                w.length && ("3d" == i || "2d" == i && (1 == h || "slide" == o.transition.type || 1 == g) ? W.append(t("<img>").attr("src", w.attr("src")).css({
                  width: w[0].style.width,
                  height: w[0].style.height,
                  marginLeft: parseFloat(w.css("margin-left")) - parseFloat(P.position().left),
                  marginTop: parseFloat(w.css("margin-top")) - parseFloat(P.position().top)
                })) : 0 == l.g.curTiles.children().length && l.g.curTiles.append(t("<img>").attr("src", w.attr("src")).css({
                  width: w[0].style.width,
                  height: w[0].style.height,
                  marginLeft: parseFloat(w.css("margin-left")),
                  marginTop: parseFloat(w.css("margin-top"))
                }))),
                  L.length && X.append(t("<img>").attr("src", L.attr("src")).css({
                    width: L[0].style.width,
                    height: L[0].style.height,
                    marginLeft: parseFloat(L.css("margin-left")) - parseFloat(P.position().left),
                    marginTop: parseFloat(L.css("margin-top")) - parseFloat(P.position().top)
                  }))
              }
              var ee = l.g.curLayer,
                ie = l.g.nextLayer;
              setTimeout(function () {
                ee.find(".ls-bg").css({
                  visibility: "hidden"
                })
              },
                50),
                ie.find(".ls-bg").css({
                  visibility: "hidden"
                }),
                l.g.ltContainer.removeClass("ls-overflow-hidden"),
                S(d),
                0 === d && (d = 10),
                setTimeout(function () {
                  ee.css({
                    width: 0
                  })
                },
                  d);
              var ae = parseInt(ie.data("timeshift")) ? parseInt(ie.data("timeshift")) : 0,
                se = l.g.totalDuration + ae > 0 ? l.g.totalDuration + ae : 0;
              setTimeout(function () {
                1 == l.g.resize && (l.g.ltContainer.empty(), ee.removeClass("ls-active"), l.makeResponsive(ie, function () {
                  l.g.resize = !1
                })),
                  T(),
                  (ie.find(".ls-bg").length < 1 || ie.find(".ls-bg").length > 0 && -1 != ie.find(".ls-bg").attr("src").toLowerCase().indexOf("png")) && l.g.ltContainer.delay(350).fadeOut(300, function () {
                    t(this).empty().show()
                  }),
                  ie.css({
                    width: l.g.sliderWidth(),
                    height: l.g.sliderHeight()
                  })
              },
                se),
                l.g.totalDuration < 300 && (l.g.totalDuration = 1e3),
                setTimeout(function () {
                  l.g.ltContainer.addClass("ls-overflow-hidden"),
                    ie.addClass("ls-active"),
                    ie.find(".ls-bg").length ? (ie.find(".ls-bg").css({
                      display: "none",
                      visibility: "visible"
                    }), l.g.ie78 ? (ie.find(".ls-bg").css("display", "block"), setTimeout(function () {
                      x()
                    },
                      500)) : ie.find(".ls-bg").fadeIn(500, function () {
                        x()
                      })) : x()
                },
                  l.g.totalDuration)
            },
            W = function () {
              l.g.nextLayer.find(' > *[class*="ls-l"]').each(function () {
                t(this).css({
                  visibility: "hidden"
                })
              }),
                l.g.sliderTop = t(e).offset().top,
                t(window).load(function () {
                  setTimeout(function () {
                    l.g.sliderTop = t(e).offset().top
                  },
                    20)
                });
              var i = function () {
                t(window).scrollTop() + t(window).height() - l.g.sliderHeight() / 2 > l.g.sliderTop && (l.g.firstSlideAnimated = !0, l.g.originalAutoStart === !0 && (l.o.autoStart = !0, l.start()), T())
              };
              t(window).scroll(function () {
                l.g.firstSlideAnimated || i()
              }),
                i()
            },
            X = (l.g.nextLayer.data("transition3d") || l.g.nextLayer.data("transition2d")) && l.t || (l.g.nextLayer.data("customtransition3d") || l.g.nextLayer.data("customtransition2d")) && l.ct ? "new" : "old";
          if (l.g.nextLayer.data("transitiontype") || l.transitionType(l.g.nextLayer), "new" === l.g.nextLayer.data("transitiontype") && (X = "new"), l.o.slideTransition && (X = "forced"), l.o.animateFirstSlide && !l.g.firstSlideAnimated) {
            if (1 == l.g.layersNum) {
              var f = 0;
              l.o.cbAnimStop(l.g)
            } else {
              var Y = parseInt(l.g.nextLayer.data("timeshift")) ? parseInt(l.g.nextLayer.data("timeshift")) : 0,
                H = "new" == X ? 0 : p;
              l.g.t5 = setTimeout(function () {
                x()
              },
                H + Math.abs(Y))
            }
            l.g.totalDuration = !0,
              l.o.startInViewport === !0 ? W() : (l.g.firstSlideAnimated = !0, T()),
              l.g.nextLayer.css({
                width: l.g.sliderWidth(),
                height: l.g.sliderHeight()
              }),
              l.g.ie78 || l.g.nextLayer.find(".ls-bg").css({
                display: "none"
              }).fadeIn(l.o.sliderFadeInDuration),
              l.g.isLoading = !1
          } else switch (X) {
            case "old":
              l.g.totalDuration = !1,
                l.g.ltContainer && l.g.ltContainer.empty(),
                w(),
                S(),
                L(),
                T();
              break;
            case "new":
              "undefined" != typeof LSCustomTransition ? k() : I();
              break;
            case "forced":
              C(l.o.slideTransition.type, l.o.slideTransition.obj)
          }
        },
        l.transitionType = function (t) {
          var e = !t.data("ls") && (t.data("ls") || t.data("slidedelay") || t.data("slidedirection") || t.data("slideoutdirection") || t.data("delayin") || t.data("delayout") || t.data("durationin") || t.data("durationout") || t.data("showuntil") || t.data("easingin") || t.data("easingout") || t.data("scalein") || t.data("scaleout") || t.data("rotatein") || t.data("rotateout")) ? "old" : "new";
          t.data("transitiontype", e)
        },
        l.sublayerShowUntil = function (t) {
          t.data("transitiontype") || l.transitionType(t),
            t.removeClass("ls-videohack");
          var e = l.g.curLayer;
          "prev" != l.g.prevNext && l.g.nextLayer && (e = l.g.nextLayer);
          var i, s, o = e.data("slidedirection") ? e.data("slidedirection") : l.o.slideDirection,
            r = l.g.slideDirections[l.g.prevNext][o],
            n = t.data("slidedirection") ? t.data("slidedirection") : r;
          switch (n) {
            case "left":
              i = -l.g.sliderWidth(),
                s = 0;
              break;
            case "right":
              i = l.g.sliderWidth(),
                s = 0;
              break;
            case "top":
              s = -l.g.sliderHeight(),
                i = 0;
              break;
            case "bottom":
              s = l.g.sliderHeight(),
                i = 0;
              break;
            case "fade":
              s = 0,
                i = 0
          }
          if ("new" === t.data("transitiontype")) var d = "new";
          else var d = t.data("slideoutdirection") ? t.data("slideoutdirection") : !1;
          switch (d) {
            case "left":
              i = l.g.sliderWidth(),
                s = 0;
              break;
            case "right":
              i = -l.g.sliderWidth(),
                s = 0;
              break;
            case "top":
              s = l.g.sliderHeight(),
                i = 0;
              break;
            case "bottom":
              s = -l.g.sliderHeight(),
                i = 0;
              break;
            case "fade":
              s = 0,
                i = 0;
              break;
            case "new":
              i = t.data("offsetxout") ? "left" === t.data("offsetxout") ? l.g.sliderWidth() : "right" === t.data("offsetxout") ? -l.g.sliderWidth() : -parseInt(t.data("offsetxout")) : -l.lt.offsetXOut,
                s = t.data("offsetyout") ? "top" === t.data("offsetyout") ? l.g.sliderHeight() : "bottom" === t.data("offsetyout") ? -l.g.sliderHeight() : -parseInt(t.data("offsetyout")) : -l.lt.offsetYOut
          }
          var g = curSubRotateX = curSubRotateY = curSubScale = curSubSkewX = curSubSkewY = curSubScaleX = curSubScaleY = "none";
          g = t.data("rotateout") ? t.data("rotateout") : l.lt.rotateOut,
            curSubRotateX = t.data("rotatexout") ? t.data("rotatexout") : l.lt.rotateXOut,
            curSubRotateY = t.data("rotateyout") ? t.data("rotateyout") : l.lt.rotateYOut,
            curSubScale = t.data("scaleout") ? t.data("scaleout") : l.lt.scaleOut,
            curSubSkewX = t.data("skewxout") ? t.data("skewxout") : l.lt.skewXOut,
            curSubSkewY = t.data("skewyout") ? t.data("skewyout") : l.lt.skewYOut,
            1 === curSubScale ? (curSubScaleX = t.data("scalexout") ? t.data("scalexout") : l.lt.scaleXOut, curSubScaleY = t.data("scaleyout") ? t.data("scaleyout") : l.lt.scaleYOut) : curSubScaleX = curSubScaleY = curSubScale;
          for (var h = t.data("transformoriginout") ? t.data("transformoriginout").split(" ") : l.lt.transformOriginOut, c = 0; c < h.length; c++) - 1 === h[c].indexOf("%") && -1 !== h[c].indexOf("left") && -1 !== h[c].indexOf("right") && -1 !== h[c].indexOf("top") && -1 !== h[c].indexOf("bottom") && (h[c] = "" + parseInt(h[c]) * l.g.ratio + "px");
          var u = h.join(" "),
            f = t.data("perspectiveout") ? t.data("perspectiveout") : l.lt.perspectiveOut,
            p = parseInt(t.css("left")),
            m = parseInt(t.css("top")),
            v = parseInt(t.attr("class").split("ls-l")[1]),
            y = t.outerWidth() > t.outerHeight() ? t.outerWidth() : t.outerHeight(),
            b = 0 === parseInt(g) ? t.outerWidth() : y,
            w = 0 === parseInt(g) ? t.outerHeight() : y;
          if (- 1 === v && "new" !== d || "left" === t.data("offsetxout") || "right" === t.data("offsetxout") ? 0 > i ? i = -(l.g.sliderWidth() - p + (curSubScaleX / 2 - .5) * b + 100) : i > 0 && (i = p + (curSubScaleX / 2 + .5) * b + 100) : i *= l.g.ratio, -1 === v && "new" !== d || "top" === t.data("offsetyout") || "bottom" === t.data("offsetyout") ? 0 > s ? s = -(l.g.sliderHeight() - m + (curSubScaleY / 2 - .5) * w + 100) : s > 0 && (s = m + (curSubScaleY / 2 + .5) * w + 100) : s *= l.g.ratio, -1 === v || "new" === d) var x = 1;
          else var S = l.g.curLayer.data("parallaxout") ? parseInt(l.g.curLayer.data("parallaxout")) : l.o.parallaxOut,
            x = v * S;
          if ("new" === t.data("transitiontype")) var L = l.lt.durationOut,
            T = l.lt.easingOut;
          else var L = l.o.durationOut,
            T = l.o.easingOut;
          var I = t.data("durationout") ? parseInt(t.data("durationout")) : L;
          0 === I && (I = 1);
          var k = t.data("easingout") ? t.data("easingout") : T,
            O = {
              visibility: "hidden"
            },
            C = {
              rotation: g,
              rotationX: curSubRotateX,
              rotationY: curSubRotateY,
              skewX: curSubSkewX,
              skewY: curSubSkewY,
              scaleX: curSubScaleX,
              scaleY: curSubScaleY,
              x: -i * x,
              y: -s * x,
              ease: a(k),
              onComplete: function () {
                t.css(O)
              }
            };
          ("fade" == d || !d && "fade" == n || "false" !== t.data("fadeout") && "new" === t.data("transitiontype")) && (C.opacity = 0, O.opacity = t.data("originalOpacity")),
            TweenLite.set(t[0], {
              transformPerspective: f,
              transformOrigin: u
            }),
            TweenLite.to(t[0], I / 1e3, C)
        },
        l.load()
    },
      a = function (t) {
        var e;
        if (- 1 !== t.toLowerCase().indexOf("swing") || -1 !== t.toLowerCase().indexOf("linear")) e = Linear.easeNone;
        else if (- 1 !== t.toLowerCase().indexOf("easeinout")) {
          var i = t.toLowerCase().split("easeinout")[1];
          e = window[i.charAt(0).toUpperCase() + i.slice(1)].easeInOut
        } else if (- 1 !== t.toLowerCase().indexOf("easeout")) {
          var i = t.toLowerCase().split("easeout")[1];
          e = window[i.charAt(0).toUpperCase() + i.slice(1)].easeOut
        } else if (- 1 !== t.toLowerCase().indexOf("easein")) {
          var i = t.toLowerCase().split("easein")[1];
          e = window[i.charAt(0).toUpperCase() + i.slice(1)].easeIn
        }
        return e
      },
      s = function (t, e, i, s) {
        if ("undefined" == typeof e) var e = "easeInOutQuart";
        var o = {};
        return t.rotate !== s && (o.rotation = t.rotate),
          t.rotateY !== s && (o.rotationY = t.rotateY),
          t.rotateX !== s && (o.rotationX = t.rotateX),
          "after" === i ? o.scaleX = o.scaleY = o.scaleZ = 1 : t.scale3d !== s && (o.scaleX = o.scaleY = o.scaleZ = t.scale3d),
          t.delay && (o.delay = "after" === i ? t.delay / 1e3 : t.delay),
          o.ease = a(e),
          o
      },
      o = function (e) {
        var i = t("<div>"),
          a = !1,
          s = !1,
          o = ["perspective", "OPerspective", "msPerspective", "MozPerspective", "WebkitPerspective"];
        transform = ["transformStyle", "OTransformStyle", "msTransformStyle", "MozTransformStyle", "WebkitTransformStyle"];
        for (var r = o.length - 1; r >= 0; r--) a = a ? a : void 0 != i[0].style[o[r]];
        for (var r = transform.length - 1; r >= 0; r--) i.css("transform-style", "preserve-3d"),
          s = s ? s : "preserve-3d" == i[0].style[transform[r]];
        return a && void 0 != i[0].style[o[4]] && (i.attr("id", "ls-test3d").appendTo(e), a = 3 === i[0].offsetHeight && 9 === i[0].offsetLeft, i.remove()),
          a && s
      },
      r = function (t, e, i) {
        var a = [];
        if ("forward" == i) for (var s = 0; t > s; s++) for (var o = 0; e > o; o++) a.push(s + o * t);
        else for (var s = t - 1; s > -1; s--) for (var o = e - 1; o > -1; o--) a.push(s + o * t);
        return a
      },
      n = function (t) {
        var e = 0;
        for (var i in t) t.hasOwnProperty(i) && ++e;
        return e
      },
      d = function () {
        var uaMatch = function (t) {
          t = t.toLowerCase();
          var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
          return {
            browser: e[1] || "",
            version: e[2] || "0"
          }
        };
        var t = uaMatch(navigator.userAgent),
          e = {};
        return t.browser && (e[t.browser] = !0, e.version = t.version),
          e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0),
          e
      };
    i.global = {
      version: "5.5.0",
      isMobile: function () {
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
      },
      isHideOn3D: function (t) {
        return "auto" == t.css("padding-bottom") || "none" == t.css("padding-bottom") || 0 == t.css("padding-bottom") || "0px" == t.css("padding-bottom") ? !0 : !1
      },
      ie78: d().msie && d().version < 9 ? !0 : !1,
      originalAutoStart: !1,
      paused: !1,
      pausedByVideo: !1,
      autoSlideshow: !1,
      isAnimating: !1,
      layersNum: null,
      prevNext: "next",
      slideTimer: null,
      sliderWidth: null,
      sliderHeight: null,
      numYouTubeCurslide: 0,
      slideDirections: {
        prev: {
          left: "right",
          right: "left",
          top: "bottom",
          bottom: "top"
        },
        next: {
          left: "left",
          right: "right",
          top: "top",
          bottom: "bottom"
        }
      },
      v: {
        d: 500,
        fo: 750,
        fi: 500
      }
    },
      i.layerTransitions = {
        offsetXIn: 80,
        offsetYIn: 0,
        durationIn: 1e3,
        delayIn: 0,
        easingIn: "easeInOutQuint",
        fadeIn: !0,
        rotateIn: 0,
        rotateXIn: 0,
        rotateYIn: 0,
        scaleIn: 1,
        scaleXIn: 1,
        scaleYIn: 1,
        skewXIn: 0,
        skewYIn: 0,
        transformOriginIn: ["50%", "50%", "0"],
        perspectiveIn: 500,
        offsetXOut: -80,
        offsetYOut: 0,
        durationOut: 400,
        showUntil: 0,
        easingOut: "easeInOutQuint",
        fadeOut: !0,
        rotateOut: 0,
        rotateXOut: 0,
        rotateYOut: 0,
        scaleOut: 1,
        scaleXOut: 1,
        scaleYOut: 1,
        skewXOut: 0,
        skewYOut: 0,
        transformOriginOut: ["50%", "50%", "0"],
        perspectiveOut: 500
      },
      i.slideTransitions = {
        slideDelay: 4e3
      },
      i.options = {
        responsive: !0,
        responsiveUnder: 0,
        layersContainer: 0,
        fullScreen: !1,
        prependTo: "",
        autoStart: !0,
        startInViewport: !0,
        pauseOnHover: !0,
        firstSlide: 1,
        animateFirstSlide: !0,
        sliderFadeInDuration: 350,
        loops: 0,
        forceLoopNum: !0,
        twoWaySlideshow: !1,
        randomSlideshow: !1,
        skin: "v5",
        skinsPath: "/layerslider/skins/",
        globalBGColor: "transparent",
        globalBGImage: !1,
        navPrevNext: !0,
        navStartStop: !0,
        navButtons: !0,
        keybNav: !0,
        touchNav: !0,
        hoverPrevNext: !0,
        hoverBottomNav: !1,
        showBarTimer: !1,
        showCircleTimer: !0,
        thumbnailNavigation: "hover",
        tnContainerWidth: "60%",
        tnWidth: 100,
        tnHeight: 60,
        tnActiveOpacity: 35,
        tnInactiveOpacity: 100,
        autoPlayVideos: !0,
        autoPauseSlideshow: "auto",
        youtubePreview: "maxresdefault.jpg",
        imgPreload: !0,
        lazyLoad: !0,
        yourLogo: !1,
        yourLogoStyle: "left: -10px; top: -10px;",
        yourLogoLink: !1,
        yourLogoTarget: "_self",
        optimizeForMobile: !0,
        optimizeForIE78: !0,
        hideOnMobile: !1,
        hideUnder: 0,
        hideOver: 1e6,
        staticImage: "",
        cbInit: function () { },
        cbStart: function () { },
        cbStop: function () { },
        cbPause: function () { },
        cbAnimStart: function () { },
        cbAnimStop: function () { },
        cbPrev: function () { },
        cbNext: function () { },
        slideDelay: 4e3,
        slideDirection: "right",
        parallaxIn: .45,
        parallaxOut: .45,
        durationIn: 1e3,
        durationOut: 1e3,
        easingIn: "easeInOutQuint",
        easingOut: "easeInOutQuint",
        delayIn: 0,
        delayOut: 0
      }
  }(jQuery);
