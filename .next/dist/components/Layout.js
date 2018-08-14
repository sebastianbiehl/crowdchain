"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Arbeit\\Documents\\SoftwareDevelopment\\Solidity\\kickstart\\components\\Layout.js";


var layout = function layout(props) {
  return _react2.default.createElement("div", { className: "container", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
    integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), props.children, _react2.default.createElement("div", { className: "scripts", __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
    integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
    integrity: "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })));
};

exports.default = layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkhlYWQiLCJsYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTt5QkFDYixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBO1NBQ0UsQUFDTSxBQUNKO1VBRkYsQUFFTyxBQUNMO2VBSEYsQUFHWSxBQUNWO2lCQUpGLEFBSWM7O2dCQUpkO2tCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0U7U0FLRixBQUNNLEFBQ0o7VUFGRixBQUVPLEFBQ0w7ZUFIRixBQUdZLEFBQ1Y7aUJBSkYsQUFJYzs7Z0JBSmQ7a0JBUkosQUFDRSxBQU9FLEFBUUY7QUFSRTtBQUNFLHVCQU9KLEFBQUM7O2dCQUFEO2tCQWhCRixBQWdCRSxBQUNDO0FBREQ7QUFBQSxZQWhCRixBQWlCUyxBQUVQLDBCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGOztTQUNFLEFBQ00sQUFDSjtlQUZGLEFBRVksQUFDVjtpQkFIRixBQUdjOztnQkFIZDtrQkFERixBQUNFLEFBS0E7QUFMQTtBQUNFO1NBSUYsQUFDTSxBQUNKO2VBRkYsQUFFWSxBQUNWO2lCQUhGLEFBR2M7O2dCQUhkO2tCQU5GLEFBTUUsQUFLQTtBQUxBO0FBQ0U7U0FJRixBQUNNLEFBQ0o7ZUFGRixBQUVZLEFBQ1Y7aUJBSEYsQUFHYzs7Z0JBSGQ7a0JBL0JTLEFBQ2IsQUFtQkUsQUFXRTtBQUFBO0FBQ0U7QUFoQ1IsQUF3Q0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FyYmVpdC9Eb2N1bWVudHMvU29mdHdhcmVEZXZlbG9wbWVudC9Tb2xpZGl0eS9raWNrc3RhcnQifQ==