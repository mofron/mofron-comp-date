/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file date.js
	 * @author simpart
	 */

	/**
	 * @class mofron.comp.Date
	 * @brief Date Component class
	 */
	mofron.comp.Date = function (_mofron$Component) {
	    _inherits(_class, _mofron$Component);

	    function _class(prm, opt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, prm));

	            _this.name('Date');

	            _this.m_select = null;
	            _this.sel_evt = null;

	            if (null !== opt) {
	                _this.option(opt);
	            }
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    /**
	     * initialize DOM contents
	     * 
	     * @param prm (object) : Date object
	     */


	    _createClass(_class, [{
	        key: 'initDomConts',
	        value: function initDomConts(prm) {
	            try {
	                var def_dat = new Date();
	                if (null !== prm) {
	                    if ('object' !== (typeof prm === 'undefined' ? 'undefined' : _typeof(prm))) {
	                        def_dat = prm;
	                    }
	                }

	                this.vdom().addChild(new mofron.util.Vdom('div', this));
	                this.select(def_dat);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'selectEvent',
	        value: function selectEvent(fnc) {
	            try {
	                if (undefined === fnc) {
	                    return this.sel_evt;
	                }
	                if (null === fnc || 'function' !== typeof fnc) {
	                    throw new Error('invalid parameter');
	                }
	                this.sel_evt = fnc;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'select',
	        value: function select(sel) {
	            try {
	                if (undefined === sel) {
	                    return this.m_select;
	                }
	                if ('object' !== (typeof sel === 'undefined' ? 'undefined' : _typeof(sel))) {
	                    throw new Error('invalid parameter');
	                }
	                this.vdom().getChild(0).text(sel.getFullYear() + '/' + (sel.getMonth() + 1) + '/' + sel.getDate());
	                this.m_select = sel;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.Component);

/***/ }
/******/ ]);