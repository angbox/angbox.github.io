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
                l("body", [
                  l("h1", [t._v("关于番茄")]),
                  l("h2", [t._v("START")]),
                  l("ul", [
                    l("li", [
                      t._v("写这个网站的初衷，就是为了我家宝宝"),
                      l("strong", [t._v("开心")]),
                      t._v("。"),
                    ]),
                    l("li", [t._v("但是时间仓促，功能实现的有些简陋，见谅。")]),
                    l("li", [t._v("编写时间 2021/12/06-22/24。")]),
                    l("li", [
                      t._v("作者："),
                      l("code", { pre: !0 }, [t._v("lazy_tomato")]),
                    ]),
                  ]),
                  l("h2", [t._v("正文")]),
                  l("h3", [t._v("说说未来规划吧")]),
                  l("p", [t._v("不知道说啥，就说说未来的规划吧")]),
                  l("blockquote", [l("p", [t._v("网站方面")])]),
                  l("p", [t._v("网站方面的话，预计：")]),
                  l("ol", [
                    l("li", [t._v("后续有时间，完善当前已经存在的功能；")]),
                    l("li", [
                      t._v(
                        "看机会吧，后续遇到有意思的地方，我会尽可能的在自己的这个网站上实现；"
                      ),
                    ]),
                    l("li", [
                      t._v(
                        "后续想接入后端逻辑，目前的状态是：数据都已经模块化处理了，但是很多代码都是固定的，需要接入数据库进行优化；"
                      ),
                    ]),
                    l("li", [
                      t._v(
                        "更新服务器，替换资源为合理合法的资源，添加域名上线，长期维护；"
                      ),
                    ]),
                  ]),
                  l("blockquote", [l("p", [t._v("感情方面")])]),
                  l("p", [t._v("感情方面的话，预计：")]),
                  l("ol", [
                    l("li", [t._v("计时的那个页面我想一直放着，直到终老；")]),
                    l("li", [
                      t._v(
                        "至于现实生活方面，我会努力去做的，我一定要有一个幸福的小家；"
                      ),
                    ]),
                    l("li", [
                      t._v(
                        "更多的规划，我在你让我在你耳边讲吧，ღ( ´･ᴗ･` )比心"
                      ),
                    ]),
                  ]),
                  l("h3", [t._v("说说其他废话吧")]),
                  l("p", [
                    t._v(
                      "以前写代码，做功能。总会觉得自己无所不能，不管三七二十一，定的目标很美很高很远。"
                    ),
                  ]),
                  l("p", [
                    t._v(
                      "到后来，才发现，很多事情啊，看起来很简单，做起来却很难。"
                    ),
                  ]),
                  l("p", [t._v("举个简单的例子，就像我这网站的搭建。")]),
                  l("blockquote", [
                    l("p", [
                      t._v(
                        "虽说，我这网站没什么具体的内容，但是由于我做的超级精细，花费的时间，精力却不少。各种问题，基本都是一个接着一个。"
                      ),
                    ]),
                  ]),
                  l("p", [
                    t._v("所以说，目标一点一点去实现，慢慢成长最好啦。"),
                  ]),
                  l("p", [
                    t._v(
                      "我相信我可以的呢，喜欢就去追，想要就去争取，爱她记得保护好她。"
                    ),
                  ]),
                  l("p", [
                    t._v("好多年之后的我们再看到这个，又是什么样子的心情呢"),
                  ]),
                  l("h2", [t._v("END")]),
                  l("ul", [
                    l("li", [t._v("加油，小番茄。")]),
                    l("li", [t._v("加油，我们。")]),
                  ]),
                ]),
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
