/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  line-height: 1.6;\n  color: #fff;\n  font-family: \"Alexandria\", sans-serif;\n  font-weight: 300;\n  font-size: 1.6rem;\n  height: 100vh;\n  overflow: hidden;\n}\n\nh1 {\n  font-size: 3.6rem;\n  font-weight: 500;\n  margin-bottom: 1.2rem;\n}\n\nh3 {\n  font-size: 2.4rem;\n  font-weight: 500;\n  margin-bottom: 1.8rem;\n}\n\na:link, a:visited {\n  color: inherit;\n  text-decoration: none;\n  outline: none;\n}\n\n.btn {\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.section {\n  margin-bottom: 16rem;\n}\n\n.container {\n  max-width: 130rem;\n  margin: 0 auto;\n}\n\n.grid {\n  display: grid;\n  gap: 7.2rem;\n}\n.grid__2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n.grid__3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.tag {\n  color: #000;\n}\n.tag__hard {\n  border: 2px solid #b91c1c;\n}\n.tag__normal {\n  border: 2px solid #0891b2;\n}\n.tag__easy {\n  border: 2px solid #22c55e;\n}\n\n.nav {\n  padding: 3.6rem 1.8rem;\n  background: #18181b;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.nav__logo {\n  margin-bottom: 4.2rem;\n}\n.nav__list {\n  list-style: none;\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n}\n.nav__item {\n  transition: all 0.3s;\n  padding: 0.8rem 3.6rem 0.8rem 1.2rem;\n  border-radius: 0.8rem;\n}\n.nav__item:hover {\n  background-color: #27272a;\n}\n.nav__item-active {\n  background-color: #27272a;\n}\n.nav__link {\n  font-size: 1.8rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 1.6rem;\n}\n.nav__icon {\n  display: inline;\n  width: 2.4rem;\n  height: 2.4rem;\n}\n.nav__logout {\n  transition: all 0.3s;\n  align-items: center;\n}\n.nav__logout:hover {\n  color: red;\n}\n\n.main {\n  color: #111827;\n  padding: 3.6rem;\n  display: grid;\n  grid-template-columns: 5fr 3fr;\n  gap: 4.8rem;\n}\n\n.latest {\n  margin-bottom: 2.4rem;\n}\n.latest__quest {\n  border-radius: 1.6rem;\n  padding: 1.6rem 2.4rem;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.latest__quest__title {\n  font-size: 2.4rem;\n  margin-bottom: 0.4rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 1.4rem;\n}\n.latest__quest__desc {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n}\n.latest__quest__btn {\n  border: none;\n  background-color: turquoise;\n  padding: 0.6rem 2.4rem;\n  border-radius: 1rem;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.latest__quest__btn:hover {\n  box-shadow: 0 0 0 0.8rem #98eee6;\n}\n.latest__quest__btn:active {\n  background-color: #21ccbb;\n}\n.latest__list {\n  height: 45rem;\n  padding: 3.6rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n  list-style: none;\n  border-radius: 0.5rem;\n  overflow-y: scroll;\n}\n.latest__tag {\n  display: inline;\n  font-size: 1.4rem;\n  padding: 0.2rem 1rem;\n  border-radius: 2rem;\n  letter-spacing: 1px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.active {\n  grid-column: 2;\n  grid-row: 1;\n  background-color: #27272a;\n  padding: 1.2rem 2.4rem;\n  border-radius: 1.2rem;\n}\n.active h3 {\n  color: #fff;\n}\n.active__list {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n}\n.active__item {\n  background-color: #fff;\n  border-radius: 1rem;\n  padding: 1rem 2.4rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.active__item:hover {\n  box-shadow: 0 0 0 0.8rem rgba(64, 224, 208, 0.5);\n}\n.active__item__title {\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.active__item__desc {\n  font-size: 1.4rem;\n}\n.active progress {\n  opacity: 0;\n}\n.active__active-item {\n  border-left: 0.6rem solid turquoise;\n  border-right: 0.6rem solid turquoise;\n}\n\n.progress__container {\n  position: relative;\n  display: inline-block;\n  background: rgb(204, 204, 204);\n  height: 0.8rem;\n  width: 15rem;\n  border-radius: 1rem;\n  margin-right: 0.8rem;\n  overflow: hidden;\n}\n.progress__container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 75%;\n  background: turquoise;\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_base.scss","webpack://./src/styles/sections/_nav.scss","webpack://./src/styles/abstracts/_variables.scss","webpack://./src/styles/sections/_main.scss","webpack://./src/styles/sections/_latest.scss","webpack://./src/styles/sections/_active.scss"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n/*\r\n  2. Remove default margin\r\n*/\r\n* {\r\n  margin: 0;\r\n}\r\n/*\r\n  3. Allow percentage-based heights in the application\r\n*/\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n/*\r\n  Typographic tweaks!\r\n  4. Add accessible line-height\r\n  5. Improve text rendering\r\n*/\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n  6. Improve media defaults\r\n*/\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n  7. Remove built-in form typography styles\r\n*/\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n  8. Avoid text overflows\r\n*/\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n/*\r\n  9. Create a root stacking context\r\n*/\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&display=swap\");\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  line-height: 1.6;\n  color: #fff;\n  font-family: \"Alexandria\", sans-serif;\n  font-weight: 300;\n  font-size: 1.6rem;\n  height: 100vh;\n  overflow: hidden;\n}\n\nh1 {\n  font-size: 3.6rem;\n  font-weight: 500;\n  margin-bottom: 1.2rem;\n}\n\nh3 {\n  font-size: 2.4rem;\n  font-weight: 500;\n  margin-bottom: 1.8rem;\n}\n\na:link, a:visited {\n  color: inherit;\n  text-decoration: none;\n  outline: none;\n}\n\n.btn {\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.section {\n  margin-bottom: 16rem;\n}\n\n.container {\n  max-width: 130rem;\n  margin: 0 auto;\n}\n\n.grid {\n  display: grid;\n  gap: 7.2rem;\n}\n.grid__2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n.grid__3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.tag {\n  color: #000;\n}\n.tag__hard {\n  border: 2px solid #b91c1c;\n}\n.tag__normal {\n  border: 2px solid #0891b2;\n}\n.tag__easy {\n  border: 2px solid #22c55e;\n}\n\n.nav {\n  padding: 3.6rem 1.8rem;\n  background: #18181b;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.nav__logo {\n  margin-bottom: 4.2rem;\n}\n.nav__list {\n  list-style: none;\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n}\n.nav__item {\n  transition: all 0.3s;\n  padding: 0.8rem 3.6rem 0.8rem 1.2rem;\n  border-radius: 0.8rem;\n}\n.nav__item:hover {\n  background-color: #27272a;\n}\n.nav__item-active {\n  background-color: #27272a;\n}\n.nav__link {\n  font-size: 1.8rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 1.6rem;\n}\n.nav__icon {\n  display: inline;\n  width: 2.4rem;\n  height: 2.4rem;\n}\n.nav__logout {\n  transition: all 0.3s;\n  align-items: center;\n}\n.nav__logout:hover {\n  color: red;\n}\n\n.main {\n  color: #111827;\n  padding: 3.6rem;\n  display: grid;\n  grid-template-columns: 5fr 3fr;\n  gap: 4.8rem;\n}\n\n.latest {\n  margin-bottom: 2.4rem;\n}\n.latest__quest {\n  border-radius: 1.6rem;\n  padding: 1.6rem 2.4rem;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.latest__quest__title {\n  font-size: 2.4rem;\n  margin-bottom: 0.4rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 1.4rem;\n}\n.latest__quest__desc {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n}\n.latest__quest__btn {\n  border: none;\n  background-color: turquoise;\n  padding: 0.6rem 2.4rem;\n  border-radius: 1rem;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.latest__quest__btn:hover {\n  box-shadow: 0 0 0 0.8rem #98eee6;\n}\n.latest__quest__btn:active {\n  background-color: #21ccbb;\n}\n.latest__list {\n  height: 45rem;\n  padding: 3.6rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n  list-style: none;\n  border-radius: 0.5rem;\n  overflow-y: scroll;\n}\n.latest__tag {\n  display: inline;\n  font-size: 1.4rem;\n  padding: 0.2rem 1rem;\n  border-radius: 2rem;\n  letter-spacing: 1px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.active {\n  grid-column: 2;\n  grid-row: 1;\n  background-color: #27272a;\n  padding: 1.2rem 2.4rem;\n  border-radius: 1.2rem;\n}\n.active h3 {\n  color: #fff;\n}\n.active__list {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n}\n.active__item {\n  background-color: #fff;\n  border-radius: 1rem;\n  padding: 1rem 2.4rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.active__item:hover {\n  box-shadow: 0 0 0 0.8rem rgba(64, 224, 208, 0.5);\n}\n.active__item__title {\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.active__item__desc {\n  font-size: 1.4rem;\n}\n.active progress {\n  opacity: 0;\n}\n.active__active-item {\n  border-left: 0.6rem solid turquoise;\n  border-right: 0.6rem solid turquoise;\n}\n\n.progress__container {\n  position: relative;\n  display: inline-block;\n  background: rgb(204, 204, 204);\n  height: 0.8rem;\n  width: 15rem;\n  border-radius: 1rem;\n  margin-right: 0.8rem;\n  overflow: hidden;\n}\n.progress__container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 75%;\n  background: turquoise;\n}","@use \"../abstracts\" as *;\r\n@import url(\"https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&display=swap\");\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  //Good font\r\n  line-height: 1.6;\r\n  color: #fff;\r\n  font-family: \"Alexandria\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 1.6rem;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nh1 {\r\n  font-size: 3.6rem;\r\n  font-weight: 500;\r\n  margin-bottom: 1.2rem;\r\n}\r\nh3 {\r\n  font-size: 2.4rem;\r\n  font-weight: 500;\r\n\r\n  margin-bottom: 1.8rem;\r\n}\r\n\r\na {\r\n  &:link,\r\n  &:visited {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    outline: none;\r\n  }\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.section {\r\n  margin-bottom: 16rem;\r\n}\r\n\r\n.container {\r\n  max-width: 130rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  gap: 7.2rem;\r\n  &__2 {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  &__3 {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n.tag {\r\n  color: #000;\r\n  &__hard {\r\n    border: 2px solid #b91c1c;\r\n  }\r\n  &__normal {\r\n    border: 2px solid #0891b2;\r\n  }\r\n  &__easy {\r\n    border: 2px solid #22c55e;\r\n  }\r\n}\r\n","@use \"../abstracts\" as *;\r\n.nav {\r\n  padding: 3.6rem 1.8rem;\r\n  background: $dark-background;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  &__logo {\r\n    margin-bottom: 4.2rem;\r\n  }\r\n  &__list {\r\n    list-style: none;\r\n    padding-left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.4rem;\r\n  }\r\n  &__item {\r\n    transition: all 0.3s;\r\n    &:hover {\r\n      background-color: $lighter-background;\r\n    }\r\n    &-active {\r\n      background-color: $lighter-background;\r\n    }\r\n    padding: 0.8rem 3.6rem 0.8rem 1.2rem;\r\n    border-radius: 0.8rem;\r\n  }\r\n  &__link {\r\n    font-size: 1.8rem;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 1.6rem;\r\n  }\r\n  &__icon {\r\n    display: inline;\r\n    width: 2.4rem;\r\n    height: 2.4rem;\r\n  }\r\n  &__logout {\r\n    transition: all 0.3s;\r\n    align-items: center;\r\n    &:hover {\r\n      color: red;\r\n    }\r\n  }\r\n}\r\n","$dark-background: #18181b;\r\n$lighter-background: #27272a;\r\n$special-color: turquoise;\r\n",".main {\r\n  color: #111827;\r\n  padding: 3.6rem;\r\n  display: grid;\r\n  grid-template-columns: 5fr 3fr;\r\n  gap: 4.8rem;\r\n}\r\n","@use \"../abstracts/\" as *;\r\n.latest {\r\n  margin-bottom: 2.4rem;\r\n  &__quest {\r\n    border-radius: 1.6rem;\r\n    padding: 1.6rem 2.4rem;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    &__title {\r\n      font-size: 2.4rem;\r\n      margin-bottom: 0.4rem;\r\n      font-weight: 500;\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 1.4rem;\r\n    }\r\n    &__desc {\r\n      font-size: 1.6rem;\r\n      margin-bottom: 2rem;\r\n    }\r\n    &__btn {\r\n      border: none;\r\n      background-color: $special-color;\r\n      padding: 0.6rem 2.4rem;\r\n      border-radius: 1rem;\r\n      font-weight: 400;\r\n      cursor: pointer;\r\n      transition: all 0.2s;\r\n      &:hover {\r\n        box-shadow: 0 0 0 0.8rem lighten($special-color, 20);\r\n      }\r\n      &:active {\r\n        background-color: darken($special-color, 10%);\r\n      }\r\n    }\r\n  }\r\n  &__list {\r\n    height: 45rem;\r\n    padding: 3.6rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.4rem;\r\n    list-style: none;\r\n    border-radius: 0.5rem;\r\n    overflow-y: scroll;\r\n  }\r\n  &__tag {\r\n    display: inline;\r\n    font-size: 1.4rem;\r\n    padding: 0.2rem 1rem;\r\n    border-radius: 2rem;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n    // color: #fff;\r\n\r\n    text-transform: uppercase;\r\n  }\r\n}\r\n","@use \"../abstracts\" as *;\r\n.active {\r\n  grid-column: 2;\r\n  grid-row: 1;\r\n  background-color: $lighter-background;\r\n  padding: 1.2rem 2.4rem;\r\n  border-radius: 1.2rem;\r\n  h3 {\r\n    color: #fff;\r\n  }\r\n  &__list {\r\n    list-style: none;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.4rem;\r\n  }\r\n\r\n  &__item {\r\n    background-color: #fff;\r\n    border-radius: 1rem;\r\n    padding: 1rem 2.4rem;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n    &:hover {\r\n      box-shadow: 0 0 0 0.8rem rgba($special-color, 0.5);\r\n    }\r\n    &__title {\r\n      font-weight: 500;\r\n      text-transform: uppercase;\r\n      letter-spacing: 0.5px;\r\n    }\r\n    &__desc {\r\n      font-size: 1.4rem;\r\n    }\r\n  }\r\n  progress {\r\n    opacity: 0;\r\n  }\r\n  &__active-item {\r\n    border-left: 0.6rem solid $special-color;\r\n    border-right: 0.6rem solid $special-color;\r\n  }\r\n}\r\n.progress__container {\r\n  position: relative;\r\n  display: inline-block;\r\n  background: rgb(204, 204, 204);\r\n  height: 0.8rem;\r\n  width: 15rem;\r\n  border-radius: 1rem;\r\n  margin-right: 0.8rem;\r\n  overflow: hidden;\r\n  &::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 75%;\r\n    background: $special-color;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var latestListEl = 0;
var listOfQuestLinesEl = 0;
window.addEventListener("load", function (event) {
  latestListEl = document.querySelector(".latest__list");
  listOfQuestLinesEl = document.querySelector(".active__list");
  load();
});
var data;
function fetchData(_x) {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);
          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();
          case 5:
            data = _context.sent;
            console.log(data.questlines);
            // Generate a list item for each questline
            data.questlines.forEach(function (questline) {
              listOfQuestLinesEl.innerHTML += "\n    <li class=\"active__item\">\n    <h4 class=\"active__item__title\">".concat(questline.name, "</h4>\n    <div class=\"progress__container\">\n      <progress\n        class=\"active__progress\"\n        max=\"100\"\n        value=\"75\"\n      ></progress>\n    </div>\n    <span class=\"active__progress-num\">").concat(questline.completition, "%</span>\n  </li>");
            });
            // add an event listener to it

            document.querySelectorAll(".active__item").forEach(function (item) {
              item.addEventListener("click", function () {
                //! remove all other active ones
                document.querySelectorAll(".active__item").forEach(function (item) {
                  return item.classList.remove("active__active-item");
                });
                item.classList.add("active__active-item");
                updateQuests();
              });
            });
            //select the first one as an active one automatically
            document.querySelector(".active__item:nth-child(1)").classList.add("active__active-item");

            //se
            updateQuests();
          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}
function load() {
  console.log(fetchData("asi_json.json"));
}
function updateQuests() {
  latestListEl.innerHTML = "";
  var activeQuestList = document.querySelector(".active__active-item h4").innerHTML;
  console.log(activeQuestList);
  var listOfQuests = data.questlines.filter(function (questline) {
    return questline.name === activeQuestList;
  })[0].quests;
  console.log(listOfQuests);
  listOfQuests.forEach(function (quest) {
    latestListEl.innerHTML += "\n    <li class=\"latest__quest\">\n      <h3 class=\"latest__quest__title\">\n        ".concat(quest.name, " <span class=\"latest__tag tag__").concat(quest.diff, "\">").concat(quest.diff, "</span>\n      </h3>\n\n      <p class=\"latest__quest__desc\">\n        ").concat(quest.desc, "\n      </p>\n      <button class=\"latest__quest__btn\">Open</button>\n    </li>");
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle59718e0a06af0253b20d.js.map