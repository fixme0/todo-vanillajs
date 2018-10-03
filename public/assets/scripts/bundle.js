/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/scripts/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/scripts/view.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form */ \"./src/scripts/components/form.js\");\n/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter */ \"./src/scripts/components/filter.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements */ \"./src/scripts/elements.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar Control =\n/*#__PURE__*/\nfunction () {\n  function Control() {\n    _classCallCheck(this, Control);\n\n    _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n    this.init();\n  }\n\n  _createClass(Control, [{\n    key: \"addTaskHandler\",\n    value: function addTaskHandler(_ref) {\n      var task = _ref.detail;\n      _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(task);\n      _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n      _components_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render();\n    }\n  }, {\n    key: \"editTaskHandler\",\n    value: function editTaskHandler(_ref2) {\n      var task = _ref2.detail;\n      _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].editTask(task);\n      _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n      _components_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render();\n    }\n  }, {\n    key: \"sortByPriorityTasksHandler\",\n    value: function sortByPriorityTasksHandler(_ref3) {\n      var checked = _ref3.target.checked;\n      // Model.sortByPriority = checked;\n      // if(Filter.currentFilterValue != 'Все') Model.filterByProjectName = Filter.currentFilterValue;\n      _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n    }\n  }, {\n    key: \"filterByProjectNameHandler\",\n    value: function filterByProjectNameHandler(_ref4) {\n      var projectName = _ref4.detail;\n      // Model.filterByProjectName = projectName;\n      // if(priorityCheckBox.checked) Model.sortByPriority = true;\n      _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      document.addEventListener('addTask', this.addTaskHandler);\n      document.addEventListener('editTask', this.editTaskHandler);\n      document.addEventListener('filterByProject', this.filterByProjectNameHandler);\n      _elements__WEBPACK_IMPORTED_MODULE_4__[\"priorityCheckBox\"].addEventListener('change', function (e) {\n        return _this.sortByPriorityTasksHandler(e);\n      });\n    }\n  }]);\n\n  return Control;\n}();\n\nnew Control();\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/components/Filter.js":
/*!******************************************!*\
  !*** ./src/scripts/components/Filter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model */ \"./src/scripts/model.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../elements */ \"./src/scripts/elements.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Filter =\n/*#__PURE__*/\nfunction () {\n  function Filter() {\n    var _this = this;\n\n    _classCallCheck(this, Filter);\n\n    _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].addEventListener('change', function (e) {\n      return _this.filterHandler(e);\n    });\n    this.render();\n  }\n\n  _createClass(Filter, [{\n    key: \"filterHandler\",\n    value: function filterHandler(e) {\n      document.dispatchEvent(new CustomEvent('filterByProject', {\n        detail: e.target.value\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var prevValue = _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].value || 'Все';\n      _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].innerHTML = '<option value=\"Все\">Все</option>' + this.projects.map(function (pr) {\n        return \"\\n        <option value=\\\"\".concat(pr, \"\\\">\").concat(pr, \"</option>\\n      \");\n      }).join('');\n      if (prevValue && this.projects.find(function (name) {\n        return name == prevValue;\n      })) return _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].value = prevValue;\n      _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].value = 'Все';\n    }\n  }, {\n    key: \"projects\",\n    get: function get() {\n      return _toConsumableArray(new Set(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getOriginLocalState().map(function (item) {\n        return item.nameProject;\n      })));\n    }\n  }, {\n    key: \"currentFilterValue\",\n    get: function get() {\n      return _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].value;\n    }\n  }]);\n\n  return Filter;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Filter());\n\n//# sourceURL=webpack:///./src/scripts/components/Filter.js?");

/***/ }),

/***/ "./src/scripts/components/filter.js":
/*!******************************************!*\
  !*** ./src/scripts/components/filter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model */ \"./src/scripts/model.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../elements */ \"./src/scripts/elements.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Filter =\n/*#__PURE__*/\nfunction () {\n  function Filter() {\n    var _this = this;\n\n    _classCallCheck(this, Filter);\n\n    _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].addEventListener('change', function (e) {\n      return _this.filterHandler(e);\n    });\n    this.render();\n  }\n\n  _createClass(Filter, [{\n    key: \"filterHandler\",\n    value: function filterHandler(e) {\n      document.dispatchEvent(new CustomEvent('filterByProject', {\n        detail: e.target.value\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var prevValue = _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].value || 'Все';\n      _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].innerHTML = '<option value=\"Все\">Все</option>' + this.projects.map(function (pr) {\n        return \"\\n        <option value=\\\"\".concat(pr, \"\\\">\").concat(pr, \"</option>\\n      \");\n      }).join('');\n      if (prevValue && this.projects.find(function (name) {\n        return name == prevValue;\n      })) return _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].value = prevValue;\n      _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].value = 'Все';\n    }\n  }, {\n    key: \"projects\",\n    get: function get() {\n      return _toConsumableArray(new Set(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getOriginLocalState().map(function (item) {\n        return item.nameProject;\n      })));\n    }\n  }, {\n    key: \"currentFilterValue\",\n    get: function get() {\n      return _elements__WEBPACK_IMPORTED_MODULE_1__[\"filterSelector\"].value;\n    }\n  }]);\n\n  return Filter;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Filter());\n\n//# sourceURL=webpack:///./src/scripts/components/filter.js?");

/***/ }),

/***/ "./src/scripts/components/form.js":
/*!****************************************!*\
  !*** ./src/scripts/components/form.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../elements */ \"./src/scripts/elements.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Form =\n/*#__PURE__*/\nfunction () {\n  function Form() {\n    var _this = this;\n\n    _classCallCheck(this, Form);\n\n    this.editItem = null;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"btnNewTask\"].addEventListener('click', function (e) {\n      return _this.openForm();\n    });\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"btnCancelAddNewTask\"].addEventListener('click', function (e) {\n      return _this.closeForm();\n    });\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoForm\"].addEventListener('submit', function (e) {\n      return _this.sendDate(e);\n    });\n  }\n\n  _createClass(Form, [{\n    key: \"sendDate\",\n    value: function sendDate(e) {\n      e.preventDefault();\n      var eventName = this.editItem ? 'editTask' : 'addTask';\n      document.dispatchEvent(new CustomEvent(eventName, {\n        detail: _objectSpread({}, this.getInputsValue, {\n          id: this.editItem && (this.editItem.data.id || null)\n        })\n      }));\n      this.closeForm();\n    }\n  }, {\n    key: \"clearForm\",\n    value: function clearForm() {\n      this.inputs.forEach(function (inp) {\n        return inp.value = '';\n      });\n    }\n  }, {\n    key: \"openForm\",\n    value: function openForm() {\n      var editItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoForm\"].classList.remove('d-none');\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoControlls\"].classList.add('d-none');\n\n      if (editItem) {\n        this.inputs.forEach(function (inp) {\n          return inp.value = editItem.data[inp.name];\n        });\n        editItem.editMode = true;\n        this.editItem = editItem;\n      }\n    }\n  }, {\n    key: \"closeForm\",\n    value: function closeForm() {\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoForm\"].classList.add('d-none');\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoControlls\"].classList.remove('d-none');\n      this.clearForm();\n\n      if (this.editItem) {\n        this.editItem.editMode = false;\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].classList.remove('edit-mode');\n        this.editItem = false;\n      }\n    }\n  }, {\n    key: \"getInputsValue\",\n    get: function get() {\n      return this.inputs.reduce(function (result, inp) {\n        result[inp.name] = inp.value;\n        return result;\n      }, {});\n    }\n  }, {\n    key: \"inputs\",\n    get: function get() {\n      return Array.from(_elements__WEBPACK_IMPORTED_MODULE_0__[\"todoForm\"].querySelectorAll('input, select, textarea'));\n    }\n  }]);\n\n  return Form;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Form());\n\n//# sourceURL=webpack:///./src/scripts/components/form.js?");

/***/ }),

/***/ "./src/scripts/components/task.js":
/*!****************************************!*\
  !*** ./src/scripts/components/task.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../elements */ \"./src/scripts/elements.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Task =\n/*#__PURE__*/\nfunction () {\n  function Task(data, idx) {\n    _classCallCheck(this, Task);\n\n    this.data = data;\n    this.idx = idx;\n    this.el = null;\n    this.showDescr = false;\n  }\n\n  _createClass(Task, [{\n    key: \"toggleDescr\",\n    value: function toggleDescr(btn) {\n      this.showDescr = !this.showDescr;\n\n      if (this.showDescr) {\n        btn.textContent = 'Свернуть';\n        this.descrP.classList.remove('d-none');\n      } else {\n        btn.textContent = 'Развернуть';\n        this.descrP.classList.add('d-none');\n      }\n    }\n  }, {\n    key: \"deleteTask\",\n    value: function deleteTask() {\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].children[this.idx].remove();\n    }\n  }, {\n    key: \"newEl\",\n    get: function get() {\n      var el = document.createElement('template');\n      el.innerHTML = Task.template(this.data);\n      this.el = el.content;\n      return this.el;\n    }\n  }, {\n    key: \"editMode\",\n    set: function set(val) {\n      if (val) return _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].children[this.idx].classList.add('editing');\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].children[this.idx].classList.remove('editing');\n    }\n  }, {\n    key: \"descrP\",\n    get: function get() {\n      return _elements__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].children.item(this.idx).querySelector('.descr-js');\n    }\n  }], [{\n    key: \"template\",\n    value: function template(_ref) {\n      var headerTask = _ref.headerTask,\n          nameProject = _ref.nameProject,\n          priority = _ref.priority,\n          description = _ref.description,\n          id = _ref.id;\n      return \"\\n      <div class=\\\"card mb-4\\\">\\n        <div class=\\\"card-body\\\">\\n          <h5 class=\\\"card-title\\\">\".concat(headerTask, \"</h5>\\n          <div class=\\\"row no-gutters mb-3 justify-content-between\\\">\\n            <h6 class=\\\"card-subtitle\\\">\\n              \\u041F\\u0440\\u043E\\u0435\\u043A\\u0442:\\n              <span class=\\\"text-primary\\\">\\n                \").concat(nameProject, \"\\n              </span>\\n            </h6>\\n            <h6 class=\\\"card-subtitle font-italic\\\">\\n              \\u041F\\u0440\\u0438\\u043E\\u0440\\u0438\\u0442\\u0435\\u0442: \").concat(priority, \"\\n            </h6>\\n          </div>\\n          <p class=\\\"card-text d-none descr-js\\\">\\n            \").concat(description, \"\\n          </p>\\n          <button type=\\\"button\\\" data-id=\\\"\").concat(id, \"\\\" class=\\\"btn card-link btn-success edit-btn-js\\\">\\u0418\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C</button>\\n          <button type=\\\"button\\\" data-id=\\\"\").concat(id, \"\\\" class=\\\"btn card-link btn-danger delete-btn-js\\\">\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C</button>\\n          <button type=\\\"button\\\" data-id=\\\"\").concat(id, \"\\\" class=\\\"btn card-link btn-primary toggle-btn-js\\\">\\u0420\\u0430\\u0437\\u0432\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C</button>\\n        </div>\\n      </div>\\n      \");\n    }\n  }]);\n\n  return Task;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./src/scripts/components/task.js?");

/***/ }),

/***/ "./src/scripts/elements.js":
/*!*********************************!*\
  !*** ./src/scripts/elements.js ***!
  \*********************************/
/*! exports provided: todoList, todoControlls, todoForm, btnNewTask, btnCancelAddNewTask, priorityCheckBox, filterSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoControlls\", function() { return todoControlls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoForm\", function() { return todoForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnNewTask\", function() { return btnNewTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnCancelAddNewTask\", function() { return btnCancelAddNewTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"priorityCheckBox\", function() { return priorityCheckBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterSelector\", function() { return filterSelector; });\nvar todoList = document.getElementById('todo-list');\nvar todoControlls = document.getElementById('todo-controlls');\nvar todoForm = document.getElementById('todo-form');\nvar btnNewTask = document.getElementById('btn-new-task');\nvar btnCancelAddNewTask = document.getElementById('btn-cancle-add-new-task');\nvar priorityCheckBox = document.getElementById('priority-checkbox');\nvar filterSelector = document.getElementById('filter-selector');\n\n//# sourceURL=webpack:///./src/scripts/elements.js?");

/***/ }),

/***/ "./src/scripts/model.js":
/*!******************************!*\
  !*** ./src/scripts/model.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar taskScema = {\n  id: String,\n  headerTask: String,\n  nameProject: String,\n  priority: Number,\n  description: String\n};\nvar stateKey = 'todolist';\n\nvar Model =\n/*#__PURE__*/\nfunction () {\n  function Model() {// this.viewState = this.getOriginLocalState();\n\n    _classCallCheck(this, Model);\n  }\n\n  _createClass(Model, [{\n    key: \"viewState\",\n    value: function viewState(sortByPriority, filterByName) {\n      var viewState = this.getOriginLocalState();\n\n      if (sortByPriority) {\n        viewState = this.sortByPriority(viewState);\n      }\n\n      if (filterByName != 'Все') {\n        viewState = this.filterByProjectName({\n          state: viewState,\n          nameProject: filterByName\n        });\n      }\n\n      return viewState;\n    }\n  }, {\n    key: \"addTask\",\n    value: function addTask(task) {\n      var currentLocalState = this.getOriginLocalState();\n      task.id = Model.generateRandomId();\n      currentLocalState.push(task);\n      this.updateLocalState(currentLocalState);\n    }\n  }, {\n    key: \"deleteTask\",\n    value: function deleteTask(id) {\n      var currentLocalState = this.getOriginLocalState();\n      currentLocalState.splice(currentLocalState.indexOf(this.getTaskById(id, currentLocalState)), 1);\n      this.updateLocalState(currentLocalState);\n    }\n  }, {\n    key: \"editTask\",\n    value: function editTask(updatedTask) {\n      var currentLocalState = this.getOriginLocalState();\n      currentLocalState.splice(currentLocalState.indexOf(this.getTaskById(updatedTask.id, currentLocalState)), 1, updatedTask);\n      this.updateLocalState(currentLocalState);\n    }\n  }, {\n    key: \"filterByProjectName\",\n    value: function filterByProjectName(_ref) {\n      var nameProject = _ref.nameProject,\n          state = _ref.state;\n\n      if (nameProject != 'Все') {\n        /* hardcode */\n        return state.filter(function (item) {\n          return item.nameProject == nameProject;\n        });\n      }\n\n      return state;\n    }\n  }, {\n    key: \"getTaskById\",\n    value: function getTaskById(id, state) {\n      return state.find(function (item) {\n        return item.id == id;\n      });\n    }\n  }, {\n    key: \"updateLocalState\",\n    value: function updateLocalState(state) {\n      localStorage.setItem(stateKey, JSON.stringify(state));\n    }\n  }, {\n    key: \"getOriginLocalState\",\n    value: function getOriginLocalState() {\n      return JSON.parse(localStorage.getItem(stateKey));\n    }\n  }, {\n    key: \"sortByPriority\",\n    get: function get() {\n      return function (state) {\n        return state.sort(function (a, b) {\n          return a.priority - b.priority;\n        });\n      };\n    }\n  }], [{\n    key: \"generateRandomId\",\n    value: function generateRandomId() {\n      return \"_\".concat(Math.random().toString(36).substr(2, 9));\n    }\n  }]);\n\n  return Model;\n}();\n\n!localStorage.getItem(stateKey) && localStorage.setItem(stateKey, JSON.stringify([]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Model());\n\n//# sourceURL=webpack:///./src/scripts/model.js?");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/task */ \"./src/scripts/components/task.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/scripts/model.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form */ \"./src/scripts/components/form.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Filter */ \"./src/scripts/components/Filter.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements */ \"./src/scripts/elements.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar View =\n/*#__PURE__*/\nfunction () {\n  function View() {\n    _classCallCheck(this, View);\n\n    this.tasks = [];\n    this.initEvents();\n  }\n\n  _createClass(View, [{\n    key: \"createInstanseTask\",\n    value: function createInstanseTask() {\n      this.tasks = _model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].viewState(_elements__WEBPACK_IMPORTED_MODULE_4__[\"priorityCheckBox\"].checked, _elements__WEBPACK_IMPORTED_MODULE_4__[\"filterSelector\"].value).map(function (data, idx) {\n        return new _components_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data, idx);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.clear();\n      this.createInstanseTask();\n\n      if (this.tasks.length) {\n        _elements__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].append.apply(_elements__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"], _toConsumableArray(this.tasks.map(function (task) {\n          return task.newEl;\n        })));\n      } else {\n        _elements__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].innerHTML = this.dontHaveTasks;\n      }\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      while (_elements__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].firstChild) {\n        _elements__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].firstChild.remove();\n      }\n    }\n  }, {\n    key: \"findInstanseTaskById\",\n    value: function findInstanseTaskById(id) {\n      return this.tasks.find(function (task) {\n        return task.data.id == id;\n      });\n    }\n  }, {\n    key: \"initEvents\",\n    value: function initEvents() {\n      var _this = this;\n\n      document.addEventListener('click', function (e) {\n        if (e.target.matches('.toggle-btn-js')) {\n          _this.findInstanseTaskById(e.target.dataset.id).toggleDescr(e.target);\n        } else if (e.target.matches('.delete-btn-js')) {\n          _model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(e.target.dataset.id);\n          _components_Filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render();\n\n          _this.createInstanseTask();\n\n          _this.render();\n        } else if (e.target.matches('.edit-btn-js')) {\n          _elements__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].classList.add('edit-mode');\n          _components_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].openForm(_this.findInstanseTaskById(e.target.dataset.id));\n        }\n      });\n    }\n  }, {\n    key: \"dontHaveTasks\",\n    get: function get() {\n      return \"\\n    <div class=\\\"alert alert-warning\\\" role=\\\"alert\\\">\\n      \\u0423 \\u0432\\u0430\\u0441 \\u043D\\u0435\\u0442\\u0443 \\u0437\\u0430\\u0434\\u0430\\u0447, \\u0432\\u0435\\u0437\\u0435\\u0442 \\u0432\\u0430\\u043C)\\n    </div>\\n    \";\n    }\n  }]);\n\n  return View;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new View());\n\n//# sourceURL=webpack:///./src/scripts/view.js?");

/***/ }),

/***/ "./src/styles/app.sass":
/*!*****************************!*\
  !*** ./src/styles/app.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/app.sass?");

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/scripts/app.js ./src/styles/app.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/app.js */\"./src/scripts/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/app.sass */\"./src/styles/app.sass\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/app.js_./src/styles/app.sass?");

/***/ })

/******/ });