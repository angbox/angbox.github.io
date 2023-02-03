(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-cbafb5de"],
  {
    "16c0": function (t, e, i) {
      "use strict";
      i.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "home" },
            [
              i("div", {
                staticClass: "bg",
                style: { background: "url(" + t.bg + ")" },
              }),
              i("div", { staticClass: "content" }, [
                i("div", {
                  staticClass: "mask",
                  style: {
                    "background-image": "url(" + t.bg + ")",
                    "mask-image": "url(" + t.mask + ")",
                  },
                }),
              ]),
              t._l(t.projectList, function (e, s) {
                return i(
                  "div",
                  {
                    key: s,
                    staticClass: "item",
                    style: {
                      top: e.top,
                      left: e.left,
                      right: e.right,
                      bottom: e.bottom,
                    },
                    on: {
                      click: function (i) {
                        return t.toDetails(e);
                      },
                    },
                  },
                  [
                    e.icon
                      ? i("svg-icon", { attrs: { "icon-class": e.icon } })
                      : t._e(),
                    t._v(" " + t._s(e.value) + " "),
                    i("div"),
                  ],
                  1
                );
              }),
              i(
                "div",
                {
                  staticClass: "play",
                  class: t.playMusic ? "turn" : "",
                  on: { click: t.over },
                },
                [
                  i("svg-icon", {
                    staticStyle: { width: "4em", height: "4em" },
                    attrs: { "icon-class": "Music" },
                  }),
                ],
                1
              ),
              i("audio", {
                ref: "homeMusic",
                attrs: {
                  id: "homeMusic",
                  src: t.musicUrl,
                  controls: "controls",
                  loop: "true",
                  hidden: "true",
                },
              }),
            ],
            2
          );
        },
        o = [],
        c =
          (i("b0c0"),
          [
            {
              name: "Keyboard",
              value: "生日快乐",
              top: "10%",
              left: "30%",
              right: "",
              bottom: "",
              icon: "Cake",
            },
            {
              name: "CommemorationDay",
              value: "曾几何时",
              top: "40%",
              left: "11%",
              right: "",
              bottom: "",
              icon: "Date",
            },
            {
              name: "AboutMe",
              value: "关于angbox",
              top: "52%",
              left: "",
              right: "16%",
              bottom: "",
              icon: "Tomato",
            },
          ]),
        a = {
          data: function () {
            return {
              projectList: c,
              firstTime: "",
              lastTime: "",
              flag: !1,
              bg: i("25cc"),
              mask: i("3433"),
              musicUrl: i("ce71"),
              playMusic: !1,
            };
          },
          created: function () {
            this.projectList = c;
          },
          methods: {
            toDetails: function (t) {
              t.name
                ? this.$router.push({ path: "/" + t.name })
                : this.$message("开发小哥哥正在紧急建设中!敬请期待~");
            },
            over: function () {
              var t = document.getElementById("homeMusic");
              t.paused
                ? (t.play(), (this.playMusic = !0))
                : (t.pause(), (this.playMusic = !1));
            },
          },
          mounted: function () {},
          beforeDestroy: function () {
            var t = this.$refs.homeMusic;
            t.paused || (t.pause(), (this.playMusic = !1));
          },
        },
        n = a,
        u = (i("95c4"), i("2877")),
        r = Object(u["a"])(n, s, o, !1, null, null, null);
      e["default"] = r.exports;
    },
    "25cc": function (t, e, i) {
      t.exports = i.p + "img/home_bg.1ebcfc16.jpg";
    },
    3433: function (t, e, i) {
      t.exports = i.p + "img/tomato.174aad27.png";
    },
    "95c4": function (t, e, i) {
      "use strict";
      i("d26b");
    },
    ce71: function (t, e, i) {
      t.exports = i.p + "media/zhizu.ada5d669.mp3";
    },
    d26b: function (t, e, i) {},
  },
]);
//# sourceMappingURL=chunk-cbafb5de.e924a98a.js.map
