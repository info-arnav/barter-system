(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    4152: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return o;
          },
        });
      var s = t(5893),
        l = t(9008),
        n = t(7294),
        d = function () {
          var e = (0, n.useState)("");
          e[0], e[1];
          return (0, s.jsx)("div", {
            children: (0, s.jsxs)("form", {
              children: [
                " ",
                (0, s.jsx)("input", {
                  placeholder: "Name",
                  style: {
                    borderRadius: "5px",
                    marginBottom: 20,
                    width: "20%",
                    minWidth: 200,
                    height: "30px",
                  },
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsx)("input", {
                  placeholder: "Email",
                  style: {
                    borderRadius: "5px",
                    marginBottom: 20,
                    width: "20%",
                    minWidth: 200,
                    height: "30px",
                  },
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsx)("input", {
                  placeholder: "Username",
                  style: {
                    borderRadius: "5px",
                    marginBottom: 20,
                    width: "20%",
                    minWidth: 200,
                    height: "30px",
                  },
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsx)("input", {
                  placeholder: "Password",
                  style: {
                    borderRadius: "5px",
                    marginBottom: 20,
                    width: "20%",
                    minWidth: 200,
                    height: "30px",
                  },
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsx)("input", {
                  placeholder: "Confirm Password",
                  style: {
                    borderRadius: "5px",
                    marginBottom: 20,
                    width: "20%",
                    minWidth: 200,
                    height: "30px",
                  },
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsx)("button", { children: "Login" }),
              ],
            }),
          });
        },
        r = function () {
          return (0, s.jsx)("div", {
            children: (0, s.jsxs)("form", {
              children: [
                " ",
                (0, s.jsx)("input", {
                  placeholder: "Name",
                  style: {
                    borderRadius: "5px",
                    marginBottom: 20,
                    width: "20%",
                    minWidth: 200,
                    height: "30px",
                  },
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsx)("input", {
                  placeholder: "Username",
                  style: {
                    borderRadius: "5px",
                    marginBottom: 20,
                    width: "20%",
                    minWidth: 200,
                    height: "30px",
                  },
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsx)("input", {
                  placeholder: "Password",
                  style: {
                    borderRadius: "5px",
                    marginBottom: 20,
                    width: "20%",
                    minWidth: 200,
                    height: "30px",
                  },
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsx)("button", { children: "Register" }),
              ],
            }),
          });
        };
      t(2243);
      function o() {
        var e = (0, n.useState)(!1),
          i = e[0],
          t = e[1],
          o = (0, n.useState)(!1),
          a = o[0],
          c = o[1];
        return (0, s.jsxs)("div", {
          style: { width: "100%" },
          children: [
            (0, s.jsxs)(l.default, {
              children: [
                (0, s.jsx)("title", { children: "Create Next App" }),
                (0, s.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, s.jsx)("title", { children: "Swap" }),
            (0, s.jsxs)("nav", {
              children: [
                (0, s.jsx)("button", {
                  onClick: function () {
                    return t(!i);
                  },
                  children: "Login",
                }),
                (0, s.jsx)("button", {
                  onClick: function () {
                    return c(!a);
                  },
                  children: "Register",
                }),
              ],
            }),
            (0, s.jsxs)("main", {
              children: [
                1 == i &&
                  (0, s.jsx)("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    class: "fade modal show",
                    tabindex: "-1",
                    "aria-labelledby": "example-modal-sizes-title-lg",
                    style: { display: "block" },
                    children: (0, s.jsx)("div", {
                      class: "modal-dialog modal-lg",
                      children: (0, s.jsxs)("div", {
                        class: "modal-content",
                        children: [
                          (0, s.jsxs)("div", {
                            class: "modal-header",
                            children: [
                              (0, s.jsx)("div", {
                                class: "modal-title h4",
                                id: "example-modal-sizes-title-lg",
                                children: "Login",
                              }),
                              (0, s.jsx)("button", {
                                type: "button",
                                class: "btn-close",
                                "aria-label": "Close",
                                onClick: function () {
                                  return t(!1);
                                },
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            class: "modal-body",
                            children: [
                              (0, s.jsx)(d, {}),
                              (0, s.jsx)("a", {
                                onClick: function () {
                                  t(!1), c(!0);
                                },
                                children: "Not yet registered ? Register here.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                1 == a &&
                  (0, s.jsx)("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    class: "fade modal show",
                    tabindex: "-1",
                    "aria-labelledby": "example-modal-sizes-title-lg",
                    style: { display: "block" },
                    children: (0, s.jsx)("div", {
                      class: "modal-dialog modal-lg",
                      children: (0, s.jsxs)("div", {
                        class: "modal-content",
                        children: [
                          (0, s.jsxs)("div", {
                            class: "modal-header",
                            children: [
                              (0, s.jsx)("div", {
                                class: "modal-title h4",
                                id: "example-modal-sizes-title-lg",
                                children: "Register",
                              }),
                              (0, s.jsx)("button", {
                                type: "button",
                                class: "btn-close",
                                "aria-label": "Close",
                                onClick: function () {
                                  return c(!1);
                                },
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            class: "modal-body",
                            children: [
                              (0, s.jsx)(r, {}),
                              (0, s.jsx)("a", {
                                onClick: function () {
                                  t(!0), c(!1);
                                },
                                children: "Already Registered ? Login here.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            }),
            (0, s.jsx)("footer", {}),
          ],
        });
      }
    },
    8581: function (e, i, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(4152);
        },
      ]);
    },
    2243: function () {},
    9008: function (e, i, t) {
      e.exports = t(639);
    },
  },
  function (e) {
    e.O(0, [595, 774, 888, 179], function () {
      return (i = 8581), e((e.s = i));
      var i;
    });
    var i = e.O();
    _N_E = i;
  },
]);
