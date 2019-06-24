webpackHotUpdate("static/development/pages/project.js",{

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _content_output_summary_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../content/output/summary.json */ "./content/output/summary.json");
var _content_output_summary_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/summary.json */ "./content/output/summary.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer */ "./pages/footer.js");










 // import {Router} from '../routes'




var Project =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Project, _React$Component);

  function Project() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Project);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Project).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Project, [{
    key: "render",
    value: function render() {
      var project = __webpack_require__("./content/output/projects sync recursive ^\\.\\/.*\\.json$")("./".concat(this.props.id, ".json"));

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", null, project.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui stackable grid",
        style: {
          marginTop: '20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "one wide column"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "project",
        className: "ten wide column centered"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "breadcrumb",
        className: "ui breadcrumb"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "section",
        href: "/"
      }, "Ryo Suzuki"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "right angle icon divider"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "active section"
      }, project.name)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "title"
      }, project.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, project.authors.map(function (author) {
        return author === 'Ryo Suzuki' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", null, author) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, author);
      }).reduce(function (prev, curr) {
        return [prev, ', ', curr];
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project.conference.url
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, project.conference.fullname))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Links: \xA0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: '/publications/' + project.pdf,
        target: "blank",
        style: {
          marginRight: '5px',
          display: project.pdf ? 'inline' : 'none'
        }
      }, "[PDF]"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project.video,
        target: "blank",
        style: {
          marginRight: '5px',
          display: project.video ? 'inline' : 'none'
        }
      }, "[Video]"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project['short-video'],
        target: "blank",
        style: {
          marginRight: '5px',
          display: project['short-video'] ? 'inline' : 'none'
        }
      }, "[Short Video]"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: '/publications/' + project.slide,
        target: "blank",
        style: {
          marginRight: '5px',
          display: project.slide ? 'inline' : 'none'
        }
      }, "[Slide]"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project.github,
        target: "blank",
        style: {
          marginRight: '5px',
          display: project.github ? 'inline' : 'none'
        }
      }, "[GitHub]"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project['acm-dl'],
        target: "blank",
        style: {
          marginRight: '5px',
          display: project['acm-dl'] ? 'inline' : 'none'
        }
      }, "[ACM DL]"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project['ieee'],
        target: "blank",
        style: {
          marginRight: '5px',
          display: project['ieee'] ? 'inline' : 'none'
        }
      }, "[IEEE]"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project['talk'],
        target: "blank",
        style: {
          marginRight: '5px',
          display: project['talk'] ? 'inline' : 'none'
        }
      }, "[Talk]"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui label",
        href: project.pdf,
        target: "_blank"
      }, "PDF"), " \xA0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui label",
        href: project.doi,
        target: "_blank"
      }, "DOI"), " \xA0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui label",
        href: project.slide,
        target: "_blank"
      }, "Slide"), " \xA0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui label",
        href: project.video,
        target: "_blank"
      }, "Video")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
        source: project.bodyContent,
        escapeHtml: false,
        linkTarget: "_blank"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Video Preview"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        class: "video-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("iframe", {
        class: "embed",
        width: "100%",
        height: "315",
        src: "".concat(project.embed, "?autoplay=1&mute=1&rel=0&loop=1"),
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: true
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Publication"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        class: "ui placeholder segment"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, project.authors.join(', ').replace(/, ([^,]*)$/, ', and $1'), ". ", project.year, ". ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, project.title), ". ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", null, project.booktitle), ". ", project.publisher, ", ", project.pages, ".", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), "DOI: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project.doi,
        target: "_blank"
      }, project.doi))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        class: "paper-thumbnail",
        href: "/publications/".concat(project.pdf),
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        class: "figures ui six column grid"
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(12)).map(function (v, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          class: "paper column",
          src: "/static/projects/".concat(project.name, "/paper-").concat(i + 1, ".png")
        });
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Slide"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        class: "figures ui six column grid"
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(12)).map(function (v, i) {
        var src = "/static/projects/".concat(project.name, "/slide-").concat(i + 1, ".png");
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          class: "paper column",
          href: src,
          "data-lightbox": "lightbox"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: src
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "one wide column"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_12__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
        var id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.query.id;
                return _context.abrupt("return", {
                  id: id
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=project.js.291c6aba37b447e9b7fa.hot-update.js.map