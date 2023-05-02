(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-c0978286"],
  {
    "0807": function (t, n, l) {},
    "58da": function (t, n, l) {},
    "8f25": function (t, n, l) {
      "use strict";
      l("0807");
    },
    aa1f: function (t, n, l) {
      "use strict";
      l("58da");
    },
    b6af: function (t, n, l) {
      "use strict";
      l.r(n);
      var o = function () {
          var t = this,
            n = t.$createElement,
            l = t._self._c || n;
          return l(
            "div",
            { staticClass: "about-me" },
            [
              l("home-button"),
              l(
                "div",
                { staticClass: "content" },
                [l("about", { staticClass: "markdown-body" })],
                1
              ),
            ],
            1
          );
        },
        e = [],
        i = l("c605"),
        u = function () {
          var t = this,
            n = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        c = [
          function () {
            var t = this,
              n = t.$createElement,
              l = t._self._c || n;
            return l("section", [
              l("html", [
                l("head"),
                l("body", []),
              ]),
            ]);
          },
        ],
        a = l("2877"),
        s = {},
        v = Object(a["a"])(s, u, c, !1, null, null, null),
        _ = v.exports,
        r = { components: { about: _, HomeButton: i["a"] } },
        p = r,
        f = (l("aa1f"), Object(a["a"])(p, o, e, !1, null, null, null));
      n["default"] = f.exports;
    },
    c605: function (t, n, l) {
      "use strict";
      var o = function () {
          var t = this,
            n = t.$createElement,
            l = t._self._c || n;
          return l(
            "div",
            {
              staticClass: "home-button",
              on: {
                click: function (n) {
                  return n.stopPropagation(), t.toHome.apply(null, arguments);
                },
              },
            },
            [l("div", { staticClass: "outer" })]
          );
        },
        e = [],
        i = {
          methods: {
            toHome: function () {
              this.$router.push({ path: "/" });
            },
          },
        },
        u = i,
        c = (l("8f25"), l("2877")),
        a = Object(c["a"])(u, o, e, !1, null, null, null);
      n["a"] = a.exports;
    },
  },
]);
//# sourceMappingURL=chunk-c0978286.0c1ad73b.js.map
