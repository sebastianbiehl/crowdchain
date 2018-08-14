"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Arbeit\\Documents\\SoftwareDevelopment\\Solidity\\kickstart\\pages\\campaigns\\show.js?entry";


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.createCards = function () {
      var propsObj = (0, _extends3.default)({}, _this.props);
      var labels = (0, _keys2.default)(propsObj);
      var cards = labels.map(function (name, index) {
        var classCol = "col-lg-6";
        if (name === "manager") {
          classCol = "mx-auto";
        }
        if (name !== "url" && name !== "address") {
          return _react2.default.createElement("div", { key: name + index, className: classCol, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, _react2.default.createElement("div", { className: "card border-primary mb-3", __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }, _react2.default.createElement("div", { className: "card-body", __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }, _react2.default.createElement("div", { className: "card-text text-center", __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }, _react2.default.createElement("h5", { className: "badge badge-primary p-2", __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }, _this.props[name].value), _react2.default.createElement("p", { className: "text-muted", __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, _this.props[name].label), _react2.default.createElement("small", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }, _this.props[name].meta)))));
        }
      });
      return cards;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("h1", { className: "h2", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Campaign Details"), _react2.default.createElement("div", { className: "row mt-5", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("div", { className: "col-lg-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.createCards())), _react2.default.createElement("div", { className: "col-lg-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "New spending request?"), _react2.default.createElement("button", { className: "btn btn-primary mt-3 btn-block", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "View Requests"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  minContribution: {
                    value: summary[0],
                    label: "Minimum Contribution",
                    meta: "The minimum amount to enter the campaign as a contributor."
                  },
                  balance: {
                    value: summary[1],
                    label: "Campaign balance",
                    meta: "The total amount of money currently available for this campaign."
                  },
                  requestsCount: {
                    value: summary[2],
                    label: "Spending Requests",
                    meta: "Requests by the manager to spend money from the campaign."
                  },
                  approversCount: {
                    value: summary[3],
                    label: "Contributors",
                    meta: "The total amount of contributors to this campaign."
                  },
                  manager: {
                    value: summary[4],
                    label: "Manager",
                    meta: "The manager created this campaign and can issue spending requests."
                  },
                  address: props.query.address
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtcGFpZ25TaG93IiwiY3JlYXRlQ2FyZHMiLCJwcm9wc09iaiIsInByb3BzIiwibGFiZWxzIiwiY2FyZHMiLCJtYXAiLCJuYW1lIiwiaW5kZXgiLCJjbGFzc0NvbCIsInZhbHVlIiwibGFiZWwiLCJtZXRhIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwibWluQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUVyQixBOzs7Ozs7Ozs7Ozs7Ozt3TixBQW9DSixjQUFjLFlBQU0sQUFDbEI7VUFBTSxzQ0FBZ0IsTUFBdEIsQUFBTSxBQUFxQixBQUMzQjtVQUFNLFNBQVMsb0JBQWYsQUFBZSxBQUFZLEFBQzNCO1VBQU0sZUFBUSxBQUFPLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ3hDO1lBQUksV0FBSixBQUFlLEFBQ2Y7WUFBSSxTQUFKLEFBQWEsV0FBVyxBQUN0QjtxQkFBQSxBQUFXLEFBQ1o7QUFDRDtZQUFJLFNBQUEsQUFBUyxTQUFTLFNBQXRCLEFBQStCLFdBQVcsQUFDeEM7aUNBQ0UsY0FBQSxTQUFLLEtBQUssT0FBVixBQUFpQixPQUFPLFdBQXhCLEFBQW1DO3dCQUFuQzswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO3dCQUFmOzBCQUFBLEFBQ0U7QUFERjs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO3dCQUFmOzBCQUFBLEFBQ0U7QUFERjs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO3dCQUFmOzBCQUFBLEFBQ0U7QUFERjs2QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO3dCQUFkOzBCQUFBLEFBQ0c7QUFESDttQkFDRyxBQUFLLE1BQUwsQUFBVyxNQUZoQixBQUNFLEFBQ29CLEFBRXBCLHdCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7d0JBQWI7MEJBQUEsQUFBMkI7QUFBM0I7bUJBQTJCLEFBQUssTUFBTCxBQUFXLE1BSnhDLEFBSUUsQUFBNEMsQUFDNUMsd0JBQUEsY0FBQTs7d0JBQUE7MEJBQUEsQUFBUTtBQUFSO0FBQUEsbUJBQVEsQUFBSyxNQUFMLEFBQVcsTUFUN0IsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQUtFLEFBQXlCLEFBTXBDO0FBQ0Y7QUF0QkQsQUFBYyxBQXVCZCxPQXZCYzthQXVCZCxBQUFPLEFBQ1I7QTs7Ozs7NkJBRVEsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSxxQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQXNCO0FBQXRCO2NBRkosQUFDRSxBQUNFLEFBQXNCLEFBQUssQUFFN0IsaUNBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLDBDQUFBLGNBQUEsWUFBUSxXQUFSLEFBQWtCO29CQUFsQjtzQkFBQTtBQUFBO1NBVlIsQUFDRSxBQUVFLEFBSUUsQUFHRSxBQU9UOzs7Ozs0R0FsRjRCLEE7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEEsQUFBcUI7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOzttQkFBOUM7QTs7OzJCQUlLLFFBRFEsQUFDUixBQUFRLEFBQ2Y7MkJBRmUsQUFFUixBQUNQOzBCQUpHLEFBQ1ksQUFHVCxBQUVSO0FBTGlCLEFBQ2Y7OzJCQUtPLFFBREEsQUFDQSxBQUFRLEFBQ2Y7MkJBRk8sQUFFQSxBQUNQOzBCQVRHLEFBTUksQUFHRCxBQUVSO0FBTFMsQUFDUDs7MkJBS08sUUFETSxBQUNOLEFBQVEsQUFDZjsyQkFGYSxBQUVOLEFBQ1A7MEJBZEcsQUFXVSxBQUdQLEFBRVI7QUFMZSxBQUNiOzsyQkFLTyxRQURPLEFBQ1AsQUFBUSxBQUNmOzJCQUZjLEFBRVAsQUFDUDswQkFuQkcsQUFnQlcsQUFHUixBQUVSO0FBTGdCLEFBQ2Q7OzJCQUtPLFFBREEsQUFDQSxBQUFRLEFBQ2Y7MkJBRk8sQUFFQSxBQUNQOzBCQXhCRyxBQXFCSSxBQUlMLEFBRUo7QUFOUyxBQUNQOzJCQUtPLE1BQUEsQUFBTSxNLEFBM0JWLEFBMkJnQjtBQTNCaEIsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5xQixBLEFBc0YzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FyYmVpdC9Eb2N1bWVudHMvU29mdHdhcmVEZXZlbG9wbWVudC9Tb2xpZGl0eS9raWNrc3RhcnQifQ==