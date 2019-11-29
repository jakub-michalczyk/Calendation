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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/element-remove/index.js":
/*!**********************************************!*\
  !*** ./node_modules/element-remove/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (arr) {\n  arr.forEach(function (item) {\n    if (item.hasOwnProperty('remove')) {\n      return;\n    }\n    Object.defineProperty(item, 'remove', {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function remove() {\n        this.parentNode && this.parentNode.removeChild(this);\n      }\n    });\n  });\n})([Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean));\n\n\n//# sourceURL=webpack:///./node_modules/element-remove/index.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar eventsList = [];\nvar activeMonth;\nvar adding;\nvar newEvent;\nvar currentlyEdited = null;\n\nvar Event =\n/*#__PURE__*/\nfunction () {\n  function Event(title, idx, date, hour, minutes, weekDay, month, img) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Event);\n\n    this.title = title;\n    this.idx = idx;\n    this.date = date;\n    this.hour = hour;\n    this.minutes = minutes;\n    this.weekDay = weekDay;\n    this.month = month;\n    this.img = img;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Event, [{\n    key: \"addToList\",\n    value: function addToList() {\n      eventsList.push(this);\n    }\n  }]);\n\n  return Event;\n}();\n\n(function init() {\n  var hamburgerBox = document.querySelector('#hamburgerBox');\n  var monthsList = document.querySelectorAll('#monthsList li');\n  monthsList.forEach(function (li) {\n    li.addEventListener('click', function (e) {\n      activeMonth = e.target.dataset.id; //Create day boxes for specifed month\n\n      return createDayBoxes(Number(e.target.dataset.id));\n    });\n  });\n  hamburgerBox.addEventListener('click', menuToggle);\n  createDayBoxes();\n  return checkStorage();\n})();\n\nfunction checkStorage() {\n  if (localStorage.getItem('event') !== null) {\n    var storageEvents = localStorage.getItem('event');\n    eventsList = JSON.parse(storageEvents);\n    eventsList.forEach(function (event) {\n      var eventDay = event.date.split('-')[0];\n      eventDay[0] === '0' ? eventDay = eventDay.substring(1) : null; //Check if day which has event is lower than 10, and if true cut the '0'\n\n      if (event.month === activeMonth) {\n        return createEventMiniature(document.querySelector(\".dayBox[data-id=\\\"\".concat(eventDay, \"\\\"]\")), event);\n      }\n    });\n  }\n}\n\nfunction createDayBoxes(selectedMonth) {\n  var currentDate = new Date();\n  var month;\n  selectedMonth === undefined ? month = currentDate.getMonth() + 1 : month = selectedMonth;\n  var firstDay = new Date(currentDate.getFullYear() + \"-\" + month + \"-01\").getDay(); //Check the week day that month starts with\n\n  var monthsLength = new Date(currentDate.getFullYear(), month, 0).getDate(); //Calculate how many days the month has\n\n  var calendar = document.querySelector('#calendar');\n  calendar.innerHTML = '';\n  month < 10 ? activeMonth = '0' + month : activeMonth = month;\n\n  for (var i = 1; i <= monthsLength; i++) {\n    calendar.innerHTML += \"<div data-id=\\\"\".concat(i, \"\\\" class=\\\"dayBox\\\">\\n                <i class='fas fa-plus calendarPlus'></i>\\n                <div class=\\\"dayBoxInfo\\\">\\n                    <div class=\\\"weekDay\\\">\").concat(i, \"</div>\\n                    <div class=\\\"dayBoxDate\\\">\").concat(i < 10 ? '0' + i : i, \"-\").concat(month < 10 ? '0' + month : month, \"-\").concat(currentDate.getFullYear(), \"</div>\\n                </div>\\n             </div>\");\n  }\n\n  makeWeekDays(firstDay);\n  document.querySelectorAll('.dayBox').forEach(function (box) {\n    return box.addEventListener('click', creatingEventBox);\n  });\n  return checkStorage();\n}\n\nfunction makeWeekDays(startPoint) {\n  var weekCounter = startPoint;\n  var day;\n  document.querySelectorAll('.weekDay').forEach(function (week) {\n    if (weekCounter === 7) {\n      weekCounter = 0;\n    }\n\n    switch (weekCounter) {\n      case 0:\n        day = 'Niedziela';\n        break;\n\n      case 1:\n        day = 'Poniedziałek';\n        break;\n\n      case 2:\n        day = 'Wtorek';\n        break;\n\n      case 3:\n        day = 'Środa';\n        break;\n\n      case 4:\n        day = 'Czwartek';\n        break;\n\n      case 5:\n        day = 'Piątek';\n        break;\n\n      case 6:\n        day = 'Sobota';\n        break;\n    }\n\n    week.textContent = day;\n    weekCounter++;\n  });\n}\n\nfunction creatingEventBox(e) {\n  if (e.target.className === 'cancelEvent' || e.target.parentNode.className === 'cancelEvent' || e.target.className === 'dayBoxInfo' || e.target.parentNode.className === 'dayBoxInfo') {\n    return;\n  } else {\n    var popup = document.createElement('div');\n    var overlayer = document.createElement('div');\n    var target = null;\n    overlayer.id = 'overlayer';\n    popup.id = 'addingBox';\n    document.body.append(popup, overlayer);\n    adding = document.querySelector('#addingBox');\n    popup.className = 'popUpAnimation';\n\n    if (e.target.nodeName === 'IMG' || e.target.id === 'overlayerInfo') {\n      return editEvent(e.target.parentNode.dataset.id);\n    } else if (e.target.id === 'overlayerDate' || e.target.id === 'overlayerTitle') {\n      return editEvent(e.target.parentNode.parentNode.dataset.id);\n    } else if (e.target.className === 'dayBox') {\n      if (e.target.children[0].nodeName === 'IMG') {\n        return editEvent(e.target.dataset.id);\n      }\n    }\n\n    e.target.dataset.id === undefined ? target = e.target.parentNode.dataset.id : target = e.target.dataset.id;\n    return addNewEvent(target);\n  }\n}\n\nfunction createEventModulationBox(action, hour, minutes, title) {\n  var time = \"\".concat(hour, \":\").concat(minutes);\n  adding.innerHTML = \"<div id=\\\"popUpShowing\\\">\\n            <div id=\\\"closePopup\\\">\\n                <i class='fas fa-close'></i>\\n            </div>\\n            <h2>\".concat(action, \" wydarzenia</h2>\\n            <div id=\\\"dateBox\\\">\\n                <h3 id=\\\"eventDate\\\"></h3>\\n                <div class=\\\"slash\\\">/</div>\\n                <div id=\\\"titleBox\\\">\\n                    <input type=\\\"time\\\" id=\\\"time\\\" value=\\\"\").concat(time, \"\\\">\\n                </div>\\n            </div>\\n            <input placeholder=\\\"Nazwa wydarzenia\\\" type=\\\"text\\\" id=\\\"title\\\" name=\\\"title\\\" value=\\\"\").concat(title, \"\\\">\\n        </div>\");\n  createEventModulationButtons(action);\n}\n\nfunction createEventModulationButtons(action) {\n  var buttonsArr = []; //CREATE FEW BUTTONS, DEPENDING ON THE ACTION\n\n  for (var i = 0; i <= 3; i++) {\n    buttonsArr.push(document.createElement('div'));\n\n    if (i === 0) {\n      buttonsArr[i].id = 'buttonsBox';\n    } else if (i === 1) {\n      buttonsArr[i].className = 'readyButton';\n      buttonsArr[i].id = 'uploadButton';\n      buttonsArr[i].textContent = 'Dodaj miniaturkę';\n    } else if (i === 2) {\n      buttonsArr[i].className = 'saveEditedEvent';\n      buttonsArr[i].id = 'checkButton';\n      buttonsArr[i].textContent = 'Zapisz zmiany';\n    }\n  }\n\n  if (action === 'Dodawanie') {\n    buttonsArr[0].append(buttonsArr[1]);\n  } else {\n    buttonsArr[1].textContent = 'Dodaj nową miniaturkę';\n    buttonsArr[2].textContent = 'Zapisz zmiany';\n    buttonsArr[0].append(buttonsArr[1], buttonsArr[2]);\n  }\n\n  document.querySelector('#popUpShowing').appendChild(buttonsArr[0]);\n  document.querySelector('#closePopup').addEventListener('click', removeEventBox);\n  document.querySelectorAll('.readyButton').forEach(function (btn) {\n    if (btn.textContent !== 'Dodaj nową miniaturkę') {\n      btn.addEventListener('click', saveInfo);\n    } else {\n      btn.addEventListener('click', function () {\n        eventsList.forEach(function (event) {\n          return event.date === document.querySelector('#eventDate') ? currentlyEdited = event : null;\n        });\n        addURL();\n      });\n    }\n  });\n}\n\nfunction removeEventBox() {\n  document.querySelector('#overlayer').remove();\n  adding.remove();\n}\n\nfunction editEvent(day) {\n  var hour;\n  var minutes;\n  var title;\n  var month;\n  currentlyEdited = null;\n  eventsList.forEach(function (event) {\n    if (event.idx === day && event.month === activeMonth) {\n      currentlyEdited = event;\n      month = event.month;\n      hour = event.hour;\n      minutes = event.minutes;\n      title = event.title;\n    }\n  });\n  Number(day) < 10 ? day = '0' + day : null;\n  createEventModulationBox('Edycja', hour, minutes, title);\n  eventBoxAnimation();\n  document.querySelector('#eventDate').textContent = \"\".concat(day, \"-\").concat(month, \"-\").concat(new Date().getFullYear());\n  document.querySelector('#checkButton').addEventListener('click', saveEditedEvent);\n}\n\nfunction saveEditedEvent() {\n  var editedEvent;\n  editedEvent = document.querySelector('#eventDate').textContent.split('-')[0];\n  editedEvent[0] === '0' ? editedEvent = editedEvent.substring(1) : null;\n  eventsList.forEach(function (event) {\n    if (event.idx === editedEvent && event.month === activeMonth) {\n      event.hour = document.querySelector('#time').value.split(':')[0];\n      event.minutes = document.querySelector('#time').value.split(':')[1];\n      event.title = document.querySelector('#title').value;\n      createEventMiniature(document.querySelector(\".dayBox[data-id=\\\"\".concat(editedEvent, \"\\\"]\")), event);\n      addToStorage('event', eventsList);\n    }\n  });\n  return removeEventBox();\n}\n\nfunction addNewEvent(day) {\n  day < 10 ? day = \"0\".concat(day) : null;\n  createEventModulationBox('Dodawanie', '', '', '');\n  eventBoxAnimation();\n  document.querySelector('#eventDate').textContent = \"\".concat(day, \"-\").concat(activeMonth, \"-\").concat(new Date().getFullYear());\n}\n\nfunction eventBoxAnimation() {\n  setTimeout(function () {\n    document.querySelector('#popUpShowing').style.opacity = '1';\n  }, 150);\n}\n\nfunction saveInfo(e) {\n  if (document.querySelector('#title').value === '' || document.querySelector('#time').value === '') {\n    document.querySelector('#title').value = 'An unnamed event';\n    document.querySelector('#time').value = '12:00';\n    saveInfo(e);\n  } else {\n    var idx;\n\n    if (document.querySelector('#eventDate').textContent[0] === '0') {\n      idx = document.querySelector('#eventDate').textContent.split('-')[0].substring(1);\n    } else {\n      idx = document.querySelector('#eventDate').textContent.split('-')[0];\n    }\n\n    newEvent = new Event(document.querySelector('#title').value, idx, document.querySelector('#eventDate').textContent, document.querySelector('#time').value.split(':')[0], document.querySelector('#time').value.split(':')[1], document.querySelector(\".dayBox[data-id=\\\"\".concat(idx, \"\\\"] .dayBoxInfo .weekDay\")).textContent, activeMonth, null);\n    e.target.id === 'drawButton' ? drawImgSetup() : addURL();\n  }\n}\n\nfunction saveEvent() {\n  var eventBox = document.createElement('div');\n  var eventDay = newEvent.date.split('-')[0];\n  eventDay[0] === '0' ? eventDay = eventDay.substring(1) : null;\n  addToStorage('event', eventsList);\n  return createEventMiniature(document.querySelector(\".dayBox[data-id=\\\"\".concat(eventDay, \"\\\"]\")), newEvent);\n}\n\nfunction createEventMiniature(dayBox, createdEvent) {\n  var miniature = new Image();\n  var overlayerInfo = document.createElement('div');\n  var overlayerTitle = document.createElement('div');\n  var cancelEvent = document.createElement('div');\n  overlayerInfo.id = 'overlayerInfo';\n  overlayerInfo.innerHTML = \"<div id=\\\"overlayerTitle\\\">\".concat(createdEvent.title, \"</div>\\n         <div id=\\\"overlayerDate\\\">\\n            <div>\").concat(createdEvent.date, \"</div>\\n            <div>\").concat(createdEvent.hour, \":\").concat(createdEvent.minutes, \"</div>\\n         </div>\");\n  cancelEvent.className = 'cancelEvent';\n  cancelEvent.innerHTML = \"<i class='fas fa-close'></i>\";\n  miniature.src = createdEvent.img;\n  miniature.style.width = '100%';\n  miniature.style.height = '100%';\n  dayBox.innerHTML = '';\n  dayBox.append(miniature, overlayerInfo, cancelEvent);\n  document.querySelectorAll('.cancelEvent').forEach(function (cancel) {\n    return cancel.addEventListener('click', removeEvent);\n  });\n}\n\nfunction removeEvent(e) {\n  var newArr = [];\n  var dayBox;\n  var eventID;\n  var weekDay = '';\n  var eventDate = '';\n\n  if (e.target.nodeName === 'I') {\n    dayBox = e.target.parentNode.parentNode;\n    eventID = e.target.parentNode.parentNode.dataset.id;\n  } else if (e.target.nodeName === 'DIV') {\n    dayBox = e.target.parentNode;\n    eventID = e.target.parentNode.dataset.id;\n  }\n\n  eventsList.forEach(function (event) {\n    if (event.idx === eventID && event.month === activeMonth) {\n      weekDay = event.weekDay;\n      eventDate = event.date;\n      eventsList.splice(eventsList.indexOf(event), 1);\n    }\n  });\n  dayBox.innerHTML = \"<i class='fas fa-plus calendarPlus'></i>\\n            <div class=\\\"dayBoxInfo\\\">\\n                <div class=\\\"weekDay\\\">\".concat(weekDay, \"</div>\\n                <div class=\\\"dayBoxDate\\\">\").concat(eventDate, \"</div>\\n            </div>\\n         </div>\");\n  return addToStorage('event', eventsList);\n}\n\nfunction addToStorage(name, itemToAdd) {\n  localStorage.setItem(name, JSON.stringify(itemToAdd));\n}\n\nfunction menuToggle() {\n  var hamburger = document.querySelector('#hamburger');\n  var lines = [document.querySelector('#hamburger #line1'), document.querySelector('#hamburger #line2'), document.querySelector('#hamburger #line3')];\n  hamburger.style.top = '45%';\n\n  if (hamburger.dataset.type === 'hide') {\n    hamburger.dataset.type = 'show';\n    lines[2].style = \"margin-top:-10px;\";\n    setTimeout(function () {\n      return lines[0].style.transform = \"rotate(45deg)\";\n    }, 200);\n    setTimeout(function () {\n      lines[1].style.transform += \"translateY(-200%) rotate(-45deg)\";\n      lines[2].style.opacity = \"0\";\n    });\n    document.querySelector('nav').style.left = '0%';\n    document.querySelectorAll('#hamburger span').forEach(function (line) {\n      return line.style.backgroundColor = '#fff';\n    });\n  } else {\n    hamburger.style.top = '35%';\n    hamburger.dataset.type = 'hide';\n    lines[2].style = \"margin-top:5px;\";\n    setTimeout(function () {\n      lines[1].style.transform = \"translateY(0.5px)\";\n      lines[0].style.transform = \"rotate(0deg)\";\n      lines[1].style.transform = \"translateY(0%) rotate(0deg)\";\n      lines[2].style.opacity = \"1\";\n    }, 200);\n    document.querySelector('nav').style.left = '-100%';\n    document.querySelectorAll('#hamburger span').forEach(function (line) {\n      return line.style.backgroundColor = '#65913d';\n    });\n  }\n}\n\nfunction addURL() {\n  adding.innerHTML = \"<div id=\\\"closeAddingURL\\\">\\n            <i class='fas fa-close'></i>\\n         </div>\\n         <h2>Wklej adres URL lub przeci\\u0105gnij zdj\\u0119cie</h2>\\n         <div id=\\\"drop\\\" data-dropped=\\\"none\\\">\\n         </div>\\n         <input placeholder=\\\"Adres URL zdj\\u0119cia\\\" id=\\\"url\\\" type=\\\"text\\\">\\n         <input id=\\\"saveUrl\\\" type=\\\"button\\\" value=\\\"Dodaj miniaturk\\u0119\\\">\";\n  document.querySelector('#closeAddingURL').addEventListener('click', removeEventBox);\n  document.querySelector('#saveUrl').addEventListener('click', saveImg);\n  document.querySelector('#drop').addEventListener('drop', dropImage);\n  document.querySelector('#drop').addEventListener('dragover', function (e) {\n    return e.preventDefault();\n  });\n}\n\nfunction dropImage(e) {\n  e.preventDefault();\n\n  if (e.dataTransfer.items) {\n    for (var i = 0; i < e.dataTransfer.items.length; i++) {\n      if (e.dataTransfer.items[i].kind === 'file') {\n        var _file = e.dataTransfer.items[i].getAsFile();\n\n        imageDataURL(_file);\n      }\n    }\n  } else {\n    for (var i = 0; i < e.dataTransfer.files.length; i++) {\n      file.onload = loadImage(file);\n    }\n  }\n}\n\nfunction imageDataURL(file) {\n  var reader = new FileReader();\n  reader.readAsDataURL(file);\n\n  reader.onload = function () {\n    var img = new Image();\n    document.querySelector('#drop').appendChild(img);\n    document.querySelector('#drop').dataset.dropped = 'drop';\n    document.querySelector('#drop img').src = reader.result;\n  };\n\n  reader.onerror = function (error) {\n    console.log('Error: ', error);\n  };\n}\n\nfunction saveImg() {\n  if (currentlyEdited === null) {\n    if (document.querySelector('#drop').dataset.dropped === 'drop') {\n      newEvent.img = document.querySelector('#drop img').src;\n    } else {\n      newEvent.img = document.querySelector('#url').value;\n    }\n\n    newEvent.addToList();\n    removeEventBox();\n    return saveEvent();\n  } else {\n    var eventRoute;\n    Number(currentlyEdited.date.split('-')[0]) >= 10 ? eventRoute = \".dayBox[data-id=\\\"\".concat(currentlyEdited.date.split('-')[0].trim(), \"\\\"]\") : eventRoute = \".dayBox[data-id=\\\"\".concat(currentlyEdited.date.split('-')[0].substring(1).trim(), \"\\\"]\");\n    currentlyEdited.img = document.querySelector('#url').value;\n    createEventMiniature(document.querySelector(eventRoute), currentlyEdited);\n    currentlyEdited = null;\n    addToStorage('event', eventsList);\n    removeEventBox();\n  }\n}\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi element-remove ./src/js/script.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! element-remove */\"./node_modules/element-remove/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/script.js */\"./src/js/script.js\");\n\n\n//# sourceURL=webpack:///multi_element-remove_./src/js/script.js?");

/***/ })

/******/ });