/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\n    const content = document.getElementById(\"content\");\n\n    // Header\n    const header = document.createElement('header');\n    header.setAttribute(\"id\", \"header\");\n    content.appendChild(header);\n    const headerTitle = document.createElement('div');\n    headerTitle.classList.add('header-title');\n    headerTitle.textContent = \"Calabrese\";\n    header.appendChild(headerTitle);\n\n    //Main\n    const main = document.createElement(\"div\");\n    main.setAttribute(\"id\", \"main\")\n\n    const homeTab = document.createElement(\"div\");\n    homeTab.classList.add(\"home\", \"active\");\n    homeTab.setAttribute(\"data-tab\", \"homeContent\")\n    homeTab.innerHTML =\n        `\n    <div class=\"p-tag\">Welcome to Calabrese!  Where Every Noodle Tells a Story.</div>\n    <p>\n        At Calabrese Italian tradition and culinary excellence come to life right\n        in the heart of Philadelphia. Founded by the Calabrese family, our restaurant is proud to be in its third\n        generation of ownership, carrying forward a legacy of mouthwatering recipes and an unyielding commitment to quality.\n    </p>\n    <p>\n        <div class=\"p-tag\">A Family Legacy of Flavor</div>\n        What sets us apart? It's our dedication to homemade cooking. Everything that graces your plate is made from scratch,\n        using time-honored recipes that have been passed down through generations. Our kitchen starts its day with the freshest\n        ingredients, many of which are sourced directly from our on-premise garden. This ensures that you taste the peak of\n        flavor in every bite.\n    </p>\n    <p>\n        <div class=\"p-tag\">Signature Dishes</div>\n        When it comes to specialties, our pasta with red sauce and meatballs is a must-try. The sauce is a rich blend of\n        heirloom tomatoes, aromatic herbs, and a touch of family secret that gives it an unforgettable character. Paired with\n        perfectly cooked pasta and succulent meatballs, its a meal that captures the very essence of Italian cuisine.\n    </p>\n    <p>\n        <div class=\"p-tag\">A Sweet Ending to Your Meal</div>\n        And what Italian dining experience would be complete without dessert? Our cannoli are the talk of the town, and for a\n        good reason. The crisp shell and sumptuous ricotta cheese filling are a testament to the art of Italian pastry. Each\n        cannoli is a masterpiece, delicately flavored and generously filled, making it the perfect way to end your gastronomic\n        journey with us.\n    </p>\n    <p>\n        <div class=\"p-tag\">Join Us</div>\n        We invite you to experience the rich flavors and warm hospitality that have made [Your Restaurant's Name] a beloved\n        destination for food lovers. Benvenuto!\n    </p>\n    `\n\n    main.appendChild(homeTab);\n    content.appendChild(main);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n\n\n(0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// // function to get each tab details\n// const tabs = document.querySelectorAll('[data-tab-value]')\n// const tabInfos = document.querySelectorAll('[data-tab-info]')\n\n// tabs.forEach(tab => {\n//     tab.addEventListener('click', () => {\n//         const target = document\n//             .querySelector(tab.dataset.tabValue);\n//             tabInfos.forEach(tabInfo => {\n//             tabInfo.classList.remove('active')\n//         })\n//         target.classList.add('active');\n//     })\n// })\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;