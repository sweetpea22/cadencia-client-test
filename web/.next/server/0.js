exports.ids = [0];
exports.modules = {

/***/ "./components/filecoinDashboard/MapComp.js":
/*!*************************************************!*\
  !*** ./components/filecoinDashboard/MapComp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ "react-leaflet");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_peers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/peers */ "./lib/peers.js");
var _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/filecoinDashboard/MapComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MapComp(props) {
  const iconStyle = L.divIcon({
    className: "mapIcon"
  });
  return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Map"], {
    center: [51.505, -0.09],
    zoom: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"], {
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["LayersControl"], {
    position: "topright",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, _lib_peers__WEBPACK_IMPORTED_MODULE_2__["peers"].map(peer => __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["LayersControl"].Overlay, {
    key: peer.client.type,
    checked: true,
    name: peer.client.type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["LayerGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, _lib_peers__WEBPACK_IMPORTED_MODULE_2__["peers"].map(peer => __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    key: peer.peerId,
    position: [peer.location.Lat, peer.location.Lon],
    icon: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, `Using ${peer.client.type} v.${peer.client.version} From ${peer.city}`))))))));
}

/***/ }),

/***/ "./lib/peers.js":
/*!**********************!*\
  !*** ./lib/peers.js ***!
  \**********************/
/*! exports provided: peers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peers", function() { return peers; });
const peers = [{
  peerId: "QmT445nNLXbqTpnoZmUTdU5iizTWbbVLTTrYpbKA6AZoia",
  client: {
    type: "Lotus",
    version: "0.2.0"
  },
  location: {
    Lat: 51.51494,
    Lon: 7.466
  },
  city: "Detmond",
  country: "Germany",
  ISP: "Hetzner"
}, {
  peerId: "hH6343Xp9yUiGJKJWGYYlaHBA5ZRA9T7CTKLbgh4fdas",
  client: {
    type: "Lotus",
    version: "0.2.8"
  },
  location: {
    Lat: 42.7,
    Lon: 23.333
  },
  city: "Sofia",
  country: "Bulgaria",
  ISP: "Hetzner"
}, {
  peerId: "4hFaMKHjt2xBNAxWXazIWx87z3YDsTmKaiifIa43at9",
  client: {
    type: "Lotus",
    version: "0.2.1"
  },
  location: {
    Lat: 51.933,
    Lon: 4.467
  },
  city: "Rotterdam",
  country: "Netherlands",
  ISP: "Hetzner"
}, {
  peerId: "Wj2LgQXymTopKUff1fmM2QJ6MtAfk1x94NNLqSeD",
  client: {
    type: "Lotus",
    version: "0.2.4"
  },
  location: {
    Lat: 49.25,
    Lon: -123.1
  },
  city: "Vancouver",
  country: "Canada",
  ISP: "Hetzner"
}, {
  peerId: "uPLfb8IJAcUfgBX6TIDxiOWIRxOKLwgYZyJQ0eMr",
  client: {
    type: "Lotus",
    version: "0.2.8"
  },
  location: {
    Lat: 42.333,
    Lon: -83.05
  },
  city: "Detroit",
  country: "Michigan",
  ISP: "Hetzner"
}, {
  peerId: "1CMHE0IA8meMzarsggXMM4czdlQOYxlzDC4CVU96",
  client: {
    type: "Lotus",
    version: "0.3.0"
  },
  location: {
    Lat: 37.967,
    Lon: 23.717
  },
  city: "Athens",
  country: "Greece",
  ISP: "Hetzner"
}, {
  peerId: "QmT445nNLXbqTpnoZmUTdU5iizTWbbVLTTrYpbKA6AZoia",
  client: {
    type: "Lotus",
    version: "0.8.0"
  },
  location: {
    Lat: 45.517,
    Lon: -122.667
  },
  city: "Portland",
  country: "United States",
  ISP: "Hetzner"
}, {
  peerId: "cBWnIB2JSUkQcEQPN40mj7uOhvPtm2kNILP8Jbv3",
  client: {
    type: "Lotus",
    version: "1.0.0"
  },
  location: {
    Lat: 23.5587,
    Lon: -46.625
  },
  city: "Sao Paolo",
  country: "Brazil",
  ISP: "Hetzner"
}];

/***/ })

};;
//# sourceMappingURL=0.js.map