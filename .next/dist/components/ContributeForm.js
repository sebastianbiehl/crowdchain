"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _index = require("next\\dist\\lib\\router\\index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Arbeit\\Documents\\SoftwareDevelopment\\Solidity\\kickstart\\components\\ContributeForm.js";


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      contribution: "",
      error: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.prev = 2;

                _this.setState({ loading: true, error: "" });
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({ from: accounts[0], value: _this.state.contribution });

              case 9:
                _this.setState({ loading: false });
                _index2.default.push("/campaigns/" + campaign.options.address);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);

                _this.setState({ loading: false, error: _context.t0.message });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var errorMessage = void 0,
          btnCreate = void 0;
      if (this.state.error) {
        errorMessage = _react2.default.createElement("div", { className: "alert alert-danger mt-3 pb-1", __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, "Oops!"), _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, this.state.error));
      }

      btnCreate = _react2.default.createElement("button", { className: "input-control btn btn-primary btn-block mb-5", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Contribute!");
      if (this.state.loading) {
        btnCreate = _react2.default.createElement("button", { className: "input-control btn btn-primary disabled mb-5", __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react2.default.createElement("i", { className: "fa fa-spinner fa-spin ", __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }), " Waiting for response from Ethereum Network");
      }

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("form", { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("h5", { className: "mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Contribute to this campaign!"), _react2.default.createElement("div", { className: "input-group", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("input", {
        type: "text",
        className: "form-control mb-3",
        placeholder: "Enter amount",
        value: this.state.contribution,
        onChange: function onChange(event) {
          return _this3.setState({ contribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement("div", { className: "input-group-append", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("span", { className: "input-group-text", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "wei"))), btnCreate), errorMessage);
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsImNvbnRyaWJ1dGlvbiIsImVycm9yIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwicHVzaCIsIm9wdGlvbnMiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiYnRuQ3JlYXRlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0o7b0JBQVEsQUFDUSxBQUNkO2FBRk0sQUFFQyxBQUNQO2VBSE0sQUFHRyxBO0FBSEgsQUFDTixhLEFBS0Y7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDQTtBQUZHLDJCQUVRLHdCQUFTLE1BQUEsQUFBSyxNQUZ0QixBQUVRLEFBQW9CO2dDQUVuQzs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sT0FKeEIsQUFJUCxBQUFjLEFBQXdCO2dDQUovQjt1QkFLZ0IsY0FBQSxBQUFLLElBTHJCLEFBS2dCLEFBQVM7O21CQUExQjtBQUxDLG9DQUFBO2dDQUFBO3VCQU1ELFNBQUEsQUFBUyxRQUFULEFBQ0gsYUFERyxBQUVILEtBQUssRUFBRSxNQUFNLFNBQVIsQUFBUSxBQUFTLElBQUksT0FBTyxNQUFBLEFBQUssTUFSbEMsQUFNRCxBQUVFLEFBQXVDOzttQkFDL0M7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQ3pCO2dDQUFBLEFBQU8scUJBQW1CLFNBQUEsQUFBUyxRQVY1QixBQVVQLEFBQTJDO2dDQVZwQztBQUFBOzttQkFBQTtnQ0FBQTtnREFZUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FBTyxZQVpoQyxBQVlQLEFBQWMsQUFBNkI7O21CQVpwQzttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQWdCRjttQkFDUDs7VUFBSSxvQkFBSjtVQUFrQixpQkFBbEIsQUFDQTtVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsT0FBTyxBQUNwQjt1Q0FDRSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSxnQkFBSSxBQUFLLE1BSGIsQUFDRSxBQUVFLEFBQWUsQUFHcEI7QUFFRDs7a0NBQ0UsY0FBQSxZQUFRLFdBQVIsQUFBa0I7b0JBQWxCO3NCQUFBO0FBQUE7T0FBQSxFQURGLEFBQ0UsQUFJRjtVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsU0FBUyxBQUN0QjtvQ0FDRSxjQUFBLFlBQVEsV0FBUixBQUFrQjtzQkFBbEI7d0JBQUEsQUFDRTtBQURGO1NBQUEsdUNBQ0ssV0FBSCxBQUFhO3NCQUFiO3dCQURGLEFBQ0U7QUFBQTtZQUZKLEFBQ0UsQUFLSDtBQUVEOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLGlEQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGOztjQUNFLEFBQ08sQUFDTDttQkFGRixBQUVZLEFBQ1Y7cUJBSEYsQUFHYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BSmQsQUFJb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLE1BQUEsQUFBTSxPQUQ1QixBQUNSLEFBQWMsQUFBNkI7QUFOL0M7O29CQUFBO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7b0JBQWhCO3NCQUFBO0FBQUE7U0FiTixBQUVFLEFBVUUsQUFDRSxBQUdILFVBakJMLEFBQ0UsQUFrQkMsWUFwQkwsQUFDRSxBQXNCSDs7Ozs7QUF2RTBCLEEsQUEwRTdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FyYmVpdC9Eb2N1bWVudHMvU29mdHdhcmVEZXZlbG9wbWVudC9Tb2xpZGl0eS9raWNrc3RhcnQifQ==