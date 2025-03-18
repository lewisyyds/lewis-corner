"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/reusify@1.1.0";
exports.ids = ["vendor-chunks/reusify@1.1.0"];
exports.modules = {

/***/ "(rsc)/../node_modules/.pnpm/reusify@1.1.0/node_modules/reusify/reusify.js":
/*!***************************************************************************!*\
  !*** ../node_modules/.pnpm/reusify@1.1.0/node_modules/reusify/reusify.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("\n\nfunction reusify (Constructor) {\n  var head = new Constructor()\n  var tail = head\n\n  function get () {\n    var current = head\n\n    if (current.next) {\n      head = current.next\n    } else {\n      head = new Constructor()\n      tail = head\n    }\n\n    current.next = null\n\n    return current\n  }\n\n  function release (obj) {\n    tail.next = obj\n    tail = obj\n  }\n\n  return {\n    get: get,\n    release: release\n  }\n}\n\nmodule.exports = reusify\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JldXNpZnlAMS4xLjAvbm9kZV9tb2R1bGVzL3JldXNpZnkvcmV1c2lmeS5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JldXNpZnlAMS4xLjAvbm9kZV9tb2R1bGVzL3JldXNpZnkvcmV1c2lmeS5qcz9iMjRhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiByZXVzaWZ5IChDb25zdHJ1Y3Rvcikge1xuICB2YXIgaGVhZCA9IG5ldyBDb25zdHJ1Y3RvcigpXG4gIHZhciB0YWlsID0gaGVhZFxuXG4gIGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBoZWFkXG5cbiAgICBpZiAoY3VycmVudC5uZXh0KSB7XG4gICAgICBoZWFkID0gY3VycmVudC5uZXh0XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQgPSBuZXcgQ29uc3RydWN0b3IoKVxuICAgICAgdGFpbCA9IGhlYWRcbiAgICB9XG5cbiAgICBjdXJyZW50Lm5leHQgPSBudWxsXG5cbiAgICByZXR1cm4gY3VycmVudFxuICB9XG5cbiAgZnVuY3Rpb24gcmVsZWFzZSAob2JqKSB7XG4gICAgdGFpbC5uZXh0ID0gb2JqXG4gICAgdGFpbCA9IG9ialxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGdldCxcbiAgICByZWxlYXNlOiByZWxlYXNlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXVzaWZ5XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/.pnpm/reusify@1.1.0/node_modules/reusify/reusify.js\n");

/***/ })

};
;