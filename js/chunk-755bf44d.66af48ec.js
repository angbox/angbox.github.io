(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-755bf44d"],
  {
    "0807": function (o, r, e) {},
    "093d": function (o, r, e) {
      "use strict";
      e.r(r);
      var t = function () {
          var o = this,
            r = o.$createElement,
            e = o._self._c || r;
          return e(
            "div",
            { staticClass: "keyboard" },
            [
              e("home-button"),
              e(
                "div",
                {
                  staticClass: "play",
                  class: o.playMusic ? "turn" : "",
                  attrs: { id: "swq" },
                  on: { click: o.over },
                },
                [
                  e("svg-icon", {
                    staticStyle: { width: "4em", height: "4em" },
                    attrs: { "icon-class": "Music" },
                  }),
                ],
                1
              ),
              e("div", { staticClass: "keyboard-con" }, [
                e("div", { staticClass: "show-box" }, [
                  e("span", [o._v(o._s(o.nowText))]),
                  o._v(" "),
                  e("span", { staticClass: "jump" }),
                ]),
                e(
                  "div",
                  { staticClass: "main-box" },
                  o._l(o.keyBoardList, function (r, t) {
                    return e(
                      "div",
                      { key: t, staticClass: "ul" },
                      o._l(r.details, function (r, t) {
                        return e(
                          "div",
                          { key: t, staticClass: "li", style: o.getStyle(r) },
                          [o._v(" " + o._s(r.value) + " ")]
                        );
                      }),
                      0
                    );
                  }),
                  0
                ),
                e("audio", {
                  ref: "music",
                  attrs: {
                    id: "music",
                    src: o.musicUrl,
                    controls: "controls",
                    loop: "true",
                    hidden: "true",
                  },
                }),
              ]),
            ],
            1
          );
        },
        n = [],
        a = (e("ac1f"), e("1276"), e("466d"), e("d3b7"), e("159b"), e("c605")),
        c = [
          {
            name: "第一列",
            details: [
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "ESC",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "1",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF7F50",
                value: "2",
                backgroundCopy: "#FF7F50",
                borderColor: "#FF7F50",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF8C00",
                value: "3",
                backgroundCopy: "#FF8C00",
                borderColor: "#FF8C00",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FFD700",
                value: "4",
                backgroundCopy: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#F0E68C",
                value: "5",
                backgroundCopy: "#F0E68C",
                borderColor: "#F0E68C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#F0E68C",
                value: "6",
                backgroundCopy: "#F0E68C",
                borderColor: "#F0E68C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FFD700",
                value: "7",
                backgroundCopy: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF8C00",
                value: "8",
                backgroundCopy: "#FF8C00",
                borderColor: "#FF8C00",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF7F50",
                value: "9",
                backgroundCopy: "#FF7F50",
                borderColor: "#FF7F50",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "0",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "-",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "+",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "80",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "BACK",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
            ],
          },
          {
            name: "第二列",
            details: [
              {
                width: "80",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "TAB",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "Q",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF7F50",
                value: "W",
                backgroundCopy: "#FF7F50",
                borderColor: "#FF7F50",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF8C00",
                value: "E",
                backgroundCopy: "#FF8C00",
                borderColor: "#FF8C00",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FFD700",
                value: "R",
                backgroundCopy: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#F0E68C",
                value: "T",
                backgroundCopy: "#F0E68C",
                borderColor: "#F0E68C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#F0E68C",
                value: "Y",
                backgroundCopy: "#F0E68C",
                borderColor: "#F0E68C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FFD700",
                value: "U",
                backgroundCopy: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF8C00",
                value: "I",
                backgroundCopy: "#FF8C00",
                borderColor: "#FF8C00",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF7F50",
                value: "O",
                backgroundCopy: "#FF7F50",
                borderColor: "#FF7F50",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "P",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "[",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "]",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "\\",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
            ],
          },
          {
            name: "第三列",
            details: [
              {
                width: "96",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "CAPS",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "A",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF7F50",
                value: "S",
                backgroundCopy: "#FF7F50",
                borderColor: "#FF7F50",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF8C00",
                value: "D",
                backgroundCopy: "#FF8C00",
                borderColor: "#FF8C00",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FFD700",
                value: "F",
                backgroundCopy: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#F0E68C",
                value: "G",
                backgroundCopy: "#F0E68C",
                borderColor: "#F0E68C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#F0E68C",
                value: "H",
                backgroundCopy: "#F0E68C",
                borderColor: "#F0E68C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FFD700",
                value: "J",
                backgroundCopy: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF8C00",
                value: "K",
                backgroundCopy: "#FF8C00",
                borderColor: "#FF8C00",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF7F50",
                value: "L",
                backgroundCopy: "#FF7F50",
                borderColor: "#FF7F50",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: ";",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: '"',
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "96",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "ENTER",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
            ],
          },
          {
            name: "第四列",
            details: [
              {
                width: "128",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "SHIFT",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "Z",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF7F50",
                value: "X",
                backgroundCopy: "#FF7F50",
                borderColor: "#FF7F50",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF8C00",
                value: "C",
                backgroundCopy: "#FF8C00",
                borderColor: "#FF8C00",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FFD700",
                value: "V",
                backgroundCopy: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#F0E68C",
                value: "B",
                backgroundCopy: "#F0E68C",
                borderColor: "#F0E68C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#F0E68C",
                value: "N",
                backgroundCopy: "#F0E68C",
                borderColor: "#F0E68C",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FFD700",
                value: "M",
                backgroundCopy: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF8C00",
                value: ",",
                backgroundCopy: "#FF8C00",
                borderColor: "#FF8C00",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#FF7F50",
                value: ".",
                backgroundCopy: "#FF7F50",
                borderColor: "#FF7F50",
              },
              {
                width: "48",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "/",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
              {
                width: "128",
                height: "48",
                color: "#000000",
                background: "#DC143C",
                value: "SHIFT",
                backgroundCopy: "#DC143C",
                borderColor: "#DC143C",
              },
            ],
          },
        ],
        u = {
          data: function () {
            return {
              keyBoardList: c,
              text: "Happy Birthday.",
              nowText: "",
              times: null,
              musicUrl: e("fe98"),
              playMusic: !1,
            };
          },
          components: { HomeButton: a["a"] },
          created: function () {
            this.keyBoardList = c;
          },
          methods: {
            getStyle: function (o) {
              return {
                width: o.width + "px",
                height: o.height + "px",
                "line-height": o.height + "px",
                background: o.background,
                color: o.color,
                border: "2px solid ".concat(o.borderColor),
              };
            },
            showText: function () {
              var o = this;
              if (this.text && this.text.length > 0) {
                this.text = this.text.split("");
                var r = 0;
                this.times = setInterval(function () {
                  r >= o.text.length
                    ? clearInterval(o.times)
                    : (o.text[r].match(/^[ ]*$/)
                        ? (o.nowText += " ")
                        : o.keyBoardList.forEach(function (e) {
                            e.details.forEach(function (e) {
                              e.value.toUpperCase() === o.text[r].toUpperCase()
                                ? (e.background,
                                  (e.background = "#0C0C0E"),
                                  (e.color = e.backgroundCopy),
                                  (o.nowText += o.text[r]))
                                : ((e.background = e.backgroundCopy),
                                  (e.color = "#0C0C0E"));
                            });
                          }),
                      r++);
                }, 500);
              }
            },
            over: function () {
              var o = document.getElementById("music");
              o.paused
                ? (o.play(), (this.playMusic = !0))
                : (o.pause(), (this.playMusic = !1));
            },
          },
          mounted: function () {
            this.showText();
          },
          beforeDestroy: function () {
            clearInterval(this.times);
            var o = this.$refs.music;
            o.paused || o.pause();
          },
        },
        i = u,
        l = (e("5a60"), e("2877")),
        d = Object(l["a"])(i, t, n, !1, null, "dee22e6a", null);
      r["default"] = d.exports;
    },
    "107c": function (o, r, e) {
      var t = e("d039"),
        n = e("da84"),
        a = n.RegExp;
      o.exports = t(function () {
        var o = a("(?<a>b)", "g");
        return "b" !== o.exec("b").groups.a || "bc" !== "b".replace(o, "$<a>c");
      });
    },
    1276: function (o, r, e) {
      "use strict";
      var t = e("2ba4"),
        n = e("c65b"),
        a = e("e330"),
        c = e("d784"),
        u = e("44e7"),
        i = e("825a"),
        l = e("1d80"),
        d = e("4840"),
        C = e("8aa5"),
        h = e("50c4"),
        g = e("577e"),
        s = e("dc4a"),
        b = e("f36a"),
        F = e("14c3"),
        p = e("9263"),
        v = e("9f7f"),
        f = e("d039"),
        k = v.UNSUPPORTED_Y,
        y = 4294967295,
        x = Math.min,
        D = [].push,
        w = a(/./.exec),
        E = a(D),
        m = a("".slice),
        I = !f(function () {
          var o = /(?:)/,
            r = o.exec;
          o.exec = function () {
            return r.apply(this, arguments);
          };
          var e = "ab".split(o);
          return 2 !== e.length || "a" !== e[0] || "b" !== e[1];
        });
      c(
        "split",
        function (o, r, e) {
          var a;
          return (
            (a =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (o, e) {
                    var a = g(l(this)),
                      c = void 0 === e ? y : e >>> 0;
                    if (0 === c) return [];
                    if (void 0 === o) return [a];
                    if (!u(o)) return n(r, a, o, c);
                    var i,
                      d,
                      C,
                      h = [],
                      s =
                        (o.ignoreCase ? "i" : "") +
                        (o.multiline ? "m" : "") +
                        (o.unicode ? "u" : "") +
                        (o.sticky ? "y" : ""),
                      F = 0,
                      v = new RegExp(o.source, s + "g");
                    while ((i = n(p, v, a))) {
                      if (
                        ((d = v.lastIndex),
                        d > F &&
                          (E(h, m(a, F, i.index)),
                          i.length > 1 &&
                            i.index < a.length &&
                            t(D, h, b(i, 1)),
                          (C = i[0].length),
                          (F = d),
                          h.length >= c))
                      )
                        break;
                      v.lastIndex === i.index && v.lastIndex++;
                    }
                    return (
                      F === a.length
                        ? (!C && w(v, "")) || E(h, "")
                        : E(h, m(a, F)),
                      h.length > c ? b(h, 0, c) : h
                    );
                  }
                : "0".split(void 0, 0).length
                ? function (o, e) {
                    return void 0 === o && 0 === e ? [] : n(r, this, o, e);
                  }
                : r),
            [
              function (r, e) {
                var t = l(this),
                  c = void 0 == r ? void 0 : s(r, o);
                return c ? n(c, r, t, e) : n(a, g(t), r, e);
              },
              function (o, t) {
                var n = i(this),
                  c = g(o),
                  u = e(a, n, c, t, a !== r);
                if (u.done) return u.value;
                var l = d(n, RegExp),
                  s = n.unicode,
                  b =
                    (n.ignoreCase ? "i" : "") +
                    (n.multiline ? "m" : "") +
                    (n.unicode ? "u" : "") +
                    (k ? "g" : "y"),
                  p = new l(k ? "^(?:" + n.source + ")" : n, b),
                  v = void 0 === t ? y : t >>> 0;
                if (0 === v) return [];
                if (0 === c.length) return null === F(p, c) ? [c] : [];
                var f = 0,
                  D = 0,
                  w = [];
                while (D < c.length) {
                  p.lastIndex = k ? 0 : D;
                  var I,
                    R = F(p, k ? m(c, D) : c);
                  if (
                    null === R ||
                    (I = x(h(p.lastIndex + (k ? D : 0)), c.length)) === f
                  )
                    D = C(c, D, s);
                  else {
                    if ((E(w, m(c, f, D)), w.length === v)) return w;
                    for (var T = 1; T <= R.length - 1; T++)
                      if ((E(w, R[T]), w.length === v)) return w;
                    D = f = I;
                  }
                }
                return E(w, m(c, f)), w;
              },
            ]
          );
        },
        !I,
        k
      );
    },
    "14c3": function (o, r, e) {
      var t = e("da84"),
        n = e("c65b"),
        a = e("825a"),
        c = e("1626"),
        u = e("c6b6"),
        i = e("9263"),
        l = t.TypeError;
      o.exports = function (o, r) {
        var e = o.exec;
        if (c(e)) {
          var t = n(e, o, r);
          return null !== t && a(t), t;
        }
        if ("RegExp" === u(o)) return n(i, o, r);
        throw l("RegExp#exec called on incompatible receiver");
      };
    },
    "159b": function (o, r, e) {
      var t = e("da84"),
        n = e("fdbc"),
        a = e("785a"),
        c = e("17c2"),
        u = e("9112"),
        i = function (o) {
          if (o && o.forEach !== c)
            try {
              u(o, "forEach", c);
            } catch (r) {
              o.forEach = c;
            }
        };
      for (var l in n) n[l] && i(t[l] && t[l].prototype);
      i(a);
    },
    "17c2": function (o, r, e) {
      "use strict";
      var t = e("b727").forEach,
        n = e("a640"),
        a = n("forEach");
      o.exports = a
        ? [].forEach
        : function (o) {
            return t(this, o, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    "44e7": function (o, r, e) {
      var t = e("861d"),
        n = e("c6b6"),
        a = e("b622"),
        c = a("match");
      o.exports = function (o) {
        var r;
        return t(o) && (void 0 !== (r = o[c]) ? !!r : "RegExp" == n(o));
      };
    },
    "466d": function (o, r, e) {
      "use strict";
      var t = e("c65b"),
        n = e("d784"),
        a = e("825a"),
        c = e("50c4"),
        u = e("577e"),
        i = e("1d80"),
        l = e("dc4a"),
        d = e("8aa5"),
        C = e("14c3");
      n("match", function (o, r, e) {
        return [
          function (r) {
            var e = i(this),
              n = void 0 == r ? void 0 : l(r, o);
            return n ? t(n, r, e) : new RegExp(r)[o](u(e));
          },
          function (o) {
            var t = a(this),
              n = u(o),
              i = e(r, t, n);
            if (i.done) return i.value;
            if (!t.global) return C(t, n);
            var l = t.unicode;
            t.lastIndex = 0;
            var h,
              g = [],
              s = 0;
            while (null !== (h = C(t, n))) {
              var b = u(h[0]);
              (g[s] = b),
                "" === b && (t.lastIndex = d(n, c(t.lastIndex), l)),
                s++;
            }
            return 0 === s ? null : g;
          },
        ];
      });
    },
    "5a60": function (o, r, e) {
      "use strict";
      e("79ac");
    },
    "79ac": function (o, r, e) {},
    "8aa5": function (o, r, e) {
      "use strict";
      var t = e("6547").charAt;
      o.exports = function (o, r, e) {
        return r + (e ? t(o, r).length : 1);
      };
    },
    "8f25": function (o, r, e) {
      "use strict";
      e("0807");
    },
    9263: function (o, r, e) {
      "use strict";
      var t = e("c65b"),
        n = e("e330"),
        a = e("577e"),
        c = e("ad6d"),
        u = e("9f7f"),
        i = e("5692"),
        l = e("7c73"),
        d = e("69f3").get,
        C = e("fce3"),
        h = e("107c"),
        g = i("native-string-replace", String.prototype.replace),
        s = RegExp.prototype.exec,
        b = s,
        F = n("".charAt),
        p = n("".indexOf),
        v = n("".replace),
        f = n("".slice),
        k = (function () {
          var o = /a/,
            r = /b*/g;
          return (
            t(s, o, "a"), t(s, r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex
          );
        })(),
        y = u.UNSUPPORTED_Y || u.BROKEN_CARET,
        x = void 0 !== /()??/.exec("")[1],
        D = k || x || y || C || h;
      D &&
        (b = function (o) {
          var r,
            e,
            n,
            u,
            i,
            C,
            h,
            D = this,
            w = d(D),
            E = a(o),
            m = w.raw;
          if (m)
            return (
              (m.lastIndex = D.lastIndex),
              (r = t(b, m, E)),
              (D.lastIndex = m.lastIndex),
              r
            );
          var I = w.groups,
            R = y && D.sticky,
            T = t(c, D),
            _ = D.source,
            S = 0,
            B = E;
          if (
            (R &&
              ((T = v(T, "y", "")),
              -1 === p(T, "g") && (T += "g"),
              (B = f(E, D.lastIndex)),
              D.lastIndex > 0 &&
                (!D.multiline ||
                  (D.multiline && "\n" !== F(E, D.lastIndex - 1))) &&
                ((_ = "(?: " + _ + ")"), (B = " " + B), S++),
              (e = new RegExp("^(?:" + _ + ")", T))),
            x && (e = new RegExp("^" + _ + "$(?!\\s)", T)),
            k && (n = D.lastIndex),
            (u = t(s, R ? e : D, B)),
            R
              ? u
                ? ((u.input = f(u.input, S)),
                  (u[0] = f(u[0], S)),
                  (u.index = D.lastIndex),
                  (D.lastIndex += u[0].length))
                : (D.lastIndex = 0)
              : k && u && (D.lastIndex = D.global ? u.index + u[0].length : n),
            x &&
              u &&
              u.length > 1 &&
              t(g, u[0], e, function () {
                for (i = 1; i < arguments.length - 2; i++)
                  void 0 === arguments[i] && (u[i] = void 0);
              }),
            u && I)
          )
            for (u.groups = C = l(null), i = 0; i < I.length; i++)
              (h = I[i]), (C[h[0]] = u[h[1]]);
          return u;
        }),
        (o.exports = b);
    },
    "9f7f": function (o, r, e) {
      var t = e("d039"),
        n = e("da84"),
        a = n.RegExp;
      (r.UNSUPPORTED_Y = t(function () {
        var o = a("a", "y");
        return (o.lastIndex = 2), null != o.exec("abcd");
      })),
        (r.BROKEN_CARET = t(function () {
          var o = a("^r", "gy");
          return (o.lastIndex = 2), null != o.exec("str");
        }));
    },
    a640: function (o, r, e) {
      "use strict";
      var t = e("d039");
      o.exports = function (o, r) {
        var e = [][o];
        return (
          !!e &&
          t(function () {
            e.call(
              null,
              r ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    ac1f: function (o, r, e) {
      "use strict";
      var t = e("23e7"),
        n = e("9263");
      t({ target: "RegExp", proto: !0, forced: /./.exec !== n }, { exec: n });
    },
    ad6d: function (o, r, e) {
      "use strict";
      var t = e("825a");
      o.exports = function () {
        var o = t(this),
          r = "";
        return (
          o.global && (r += "g"),
          o.ignoreCase && (r += "i"),
          o.multiline && (r += "m"),
          o.dotAll && (r += "s"),
          o.unicode && (r += "u"),
          o.sticky && (r += "y"),
          r
        );
      };
    },
    c605: function (o, r, e) {
      "use strict";
      var t = function () {
          var o = this,
            r = o.$createElement,
            e = o._self._c || r;
          return e(
            "div",
            {
              staticClass: "home-button",
              on: {
                click: function (r) {
                  return r.stopPropagation(), o.toHome.apply(null, arguments);
                },
              },
            },
            [e("div", { staticClass: "outer" })]
          );
        },
        n = [],
        a = {
          methods: {
            toHome: function () {
              this.$router.push({ path: "/" });
            },
          },
        },
        c = a,
        u = (e("8f25"), e("2877")),
        i = Object(u["a"])(c, t, n, !1, null, null, null);
      r["a"] = i.exports;
    },
    d784: function (o, r, e) {
      "use strict";
      e("ac1f");
      var t = e("e330"),
        n = e("6eeb"),
        a = e("9263"),
        c = e("d039"),
        u = e("b622"),
        i = e("9112"),
        l = u("species"),
        d = RegExp.prototype;
      o.exports = function (o, r, e, C) {
        var h = u(o),
          g = !c(function () {
            var r = {};
            return (
              (r[h] = function () {
                return 7;
              }),
              7 != ""[o](r)
            );
          }),
          s =
            g &&
            !c(function () {
              var r = !1,
                e = /a/;
              return (
                "split" === o &&
                  ((e = {}),
                  (e.constructor = {}),
                  (e.constructor[l] = function () {
                    return e;
                  }),
                  (e.flags = ""),
                  (e[h] = /./[h])),
                (e.exec = function () {
                  return (r = !0), null;
                }),
                e[h](""),
                !r
              );
            });
        if (!g || !s || e) {
          var b = t(/./[h]),
            F = r(h, ""[o], function (o, r, e, n, c) {
              var u = t(o),
                i = r.exec;
              return i === a || i === d.exec
                ? g && !c
                  ? { done: !0, value: b(r, e, n) }
                  : { done: !0, value: u(e, r, n) }
                : { done: !1 };
            });
          n(String.prototype, o, F[0]), n(d, h, F[1]);
        }
        C && i(d[h], "sham", !0);
      };
    },
    fce3: function (o, r, e) {
      var t = e("d039"),
        n = e("da84"),
        a = n.RegExp;
      o.exports = t(function () {
        var o = a(".", "s");
        return !(o.dotAll && o.exec("\n") && "s" === o.flags);
      });
    },
    fe98: function (o, r, e) {
      o.exports = e.p + "media/wobushiliudehua.283864a5.mp3";
    },
  },
]);
//# sourceMappingURL=chunk-755bf44d.66af48ec.js.map
