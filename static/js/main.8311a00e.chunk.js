(this["webpackJsonpcss-grid-validator"] =
  this["webpackJsonpcss-grid-validator"] || []).push([
  [0],
  {
    17: function (e, r, n) {},
    18: function (e, r, n) {},
    19: function (e, r, n) {
      "use strict";
      n.r(r);
      var t = n(0),
        a = n(1),
        i = n.n(a),
        c = n(7),
        s = n.n(c),
        o = (n(17), n(2));
      n(18);
      var u = function (e) {
          var r = e.propertyValue,
            n = e.namedAreas,
            i = { gridTemplateAreas: r },
            c = Object(a.useState)(0),
            s = Object(o.a)(c, 2),
            u = s[0],
            l = s[1];
          return Object(t.jsxs)(t.Fragment, {
            children: [
              Object(t.jsx)("h2", { children: "View preview of named areas" }),
              Object(t.jsxs)("div", {
                children: [
                  "Rendered using CSS grid.",
                  Object(t.jsx)("button", {
                    onClick: function () {
                      return l(u + 1);
                    },
                    children: "Add grid child",
                  }),
                  u > 0
                    ? Object(t.jsx)("button", {
                        onClick: function () {
                          return l(u - 1);
                        },
                        children: "Remove grid child",
                      })
                    : "",
                ],
              }),
              Object(t.jsxs)("div", {
                className: "grid-preview",
                style: i,
                children: [
                  Array.from(n).map(function (e, r) {
                    return Object(t.jsx)(
                      "div",
                      { style: { gridArea: "".concat(e) }, children: e },
                      e
                    );
                  }),
                  Array.from(Array(u)).map(function () {
                    return Object(t.jsx)("div", { children: "." });
                  }),
                ],
              }),
            ],
          });
        },
        l = n(4),
        d = n.n(l);
      var j = function (e) {
        var r = e.rows,
          n = e.isRectangular,
          a = e.columnsPerRow,
          i = e.nonContigousAreas;
        return Object(t.jsxs)("ul", {
          className: "grid-properties",
          children: [
            Object(t.jsxs)("li", {
              className: 0 === r ? "invalid" : "",
              children: ["has ", r, " rows"],
            }),
            Object(t.jsxs)("li", {
              className: n ? "" : "invalid",
              children: ["is ", !n && "not", " rectangular"],
            }),
            Object(t.jsxs)("li", {
              className: n ? "" : "invalid",
              children: ["has ", n ? a[0] : a.join(", "), " columns per row"],
            }),
            Object(t.jsx)("li", {
              className: d()(i) ? "" : "invalid",
              children: d()(i)
                ? "All areas are contiguous and rectangular"
                : Object(t.jsxs)(t.Fragment, {
                    children: [
                      "The following areas are not contiguous or rectangular:",
                      Array.from(i).map(function (e) {
                        return Object(t.jsx)("code", { children: e });
                      }),
                    ],
                  }),
            }),
          ],
        });
      };
      var h = function (e) {
          var r = e.gridTemplate;
          return Object(t.jsxs)(t.Fragment, {
            children: [
              Object(t.jsx)("h2", {
                children: "View tabular rendering of grid",
              }),
              Object(t.jsx)("table", {
                className: "grid-table",
                children: Object(t.jsx)("tbody", {
                  children: r.map(function (e, r) {
                    return Object(t.jsx)(
                      "tr",
                      {
                        children: e.map(function (e, r) {
                          return Object(t.jsx)("td", { children: e }, r);
                        }),
                      },
                      r
                    );
                  }),
                }),
              }),
            ],
          });
        },
        m = n(8),
        f = n(9),
        g = n(10),
        b = n.n(g),
        v = n(11),
        p = n.n(v),
        O = (function () {
          function e(r) {
            Object(m.a)(this, e), (this.gridTemplate = void 0);
            var n = Array.from(r.matchAll(/["']([^"']*)["']/g)).map(function (
              e
            ) {
              return e[1];
            });
            this.gridTemplate = n.map(function (e) {
              return p()(e.trim().split(" "));
            });
          }
          return (
            Object(f.a)(e, [
              {
                key: "rows",
                value: function () {
                  return this.gridTemplate.length;
                },
              },
              {
                key: "columnsPerRow",
                value: function () {
                  return this.gridTemplate.map(function (e, r) {
                    return e.length;
                  });
                },
              },
              {
                key: "isRectangular",
                value: function () {
                  return this.columnsPerRow().every(function (e, r, n) {
                    return e === n[0];
                  });
                },
              },
              {
                key: "columns",
                value: function () {
                  if (!this.isRectangular())
                    throw new Error("rows have different number of columns");
                  return this.columnsPerRow()[0];
                },
              },
              {
                key: "namedAreas",
                value: function () {
                  var e = new Set(this.gridTemplate.flat());
                  return e.delete("."), e;
                },
              },
              {
                key: "toPropertyValue",
                value: function () {
                  return this.gridTemplate
                    .map(function (e) {
                      return '"'.concat(e.join(" "), '"');
                    })
                    .join(" ");
                },
              },
              {
                key: "isContiguous",
                value: function (e) {
                  for (
                    var r = this.gridTemplate.map(function (r) {
                        for (var n = [], t = r.indexOf(e); -1 !== t; )
                          n.push(t), (t = r.indexOf(e, t + 1));
                        return n;
                      }),
                      n = 0;
                    n < r.length;
                    n++
                  )
                    for (var t = n + 1; t < r.length; t++)
                      if (
                        0 !== r[n].length &&
                        0 !== r[t].length &&
                        !b()(r[n], r[t])
                      )
                        return !1;
                  return !0;
                },
              },
              {
                key: "findNotContiguous",
                value: function () {
                  var e = this;
                  return new Set(
                    Array.from(this.namedAreas()).filter(function (r) {
                      return !e.isContiguous(r);
                    })
                  );
                },
              },
            ]),
            e
          );
        })(),
        x = {
          Correct: '"a a ."\n"a a ."\n". b c";',
          "Not Rectangular":
            "'header header header header header header'\n'menu main main main right right'\n'menu footer footer footer footer';",
          "Not Contiguous":
            '"header header header header"\n"main main . sidebar"\n"footer footer footer header";',
        };
      var w = function () {
        var e = Object(a.useState)('"a a ."\n"a a ."\n". b c";'),
          r = Object(o.a)(e, 2),
          n = r[0],
          i = r[1],
          c = new O(n);
        return Object(t.jsxs)("div", {
          className: "App",
          children: [
            Object(t.jsxs)("header", {
              children: [
                Object(t.jsx)("h1", {
                  children: "CSS Grid Template Validator & Preview",
                }),
                Object(t.jsxs)("div", {
                  children: [
                    "Paste your ",
                    Object(t.jsx)("code", { children: "grid-template-areas" }),
                    " property value and see a preview and diagnosis what is wrong.",
                  ],
                }),
              ],
            }),
            Object(t.jsxs)("main", {
              children: [
                Object(t.jsx)("textarea", {
                  onChange: function (e) {
                    var r = e.target.value;
                    i(r);
                  },
                  value: n,
                }),
                Object(t.jsxs)("div", {
                  children: [
                    "Examples:",
                    Object.entries(x).map(function (e) {
                      var r = Object(o.a)(e, 2),
                        n = r[0],
                        a = r[1];
                      return Object(t.jsx)("button", {
                        onClick: function () {
                          return i(a);
                        },
                        children: n,
                      });
                    }),
                  ],
                }),
                Object(t.jsx)(j, {
                  rows: c.rows(),
                  columnsPerRow: c.columnsPerRow(),
                  isRectangular: c.isRectangular(),
                  nonContigousAreas: c.findNotContiguous(),
                }),
                Object(t.jsx)(u, {
                  namedAreas: c.namedAreas(),
                  propertyValue: c.toPropertyValue(),
                }),
                Object(t.jsx)(h, { gridTemplate: c.gridTemplate }),
              ],
            }),
          ],
        });
      };
      s.a.render(
        Object(t.jsx)(i.a.StrictMode, { children: Object(t.jsx)(w, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.8311a00e.chunk.js.map
