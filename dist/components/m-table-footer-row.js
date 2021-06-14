"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var CommonValues = _interopRequireWildcard(require("../utils/common-values"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-enable no-unused-vars */
var MTableFooterRow = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MTableFooterRow, _React$Component);

  var _super = _createSuper(MTableFooterRow);

  function MTableFooterRow() {
    var _this;

    (0, _classCallCheck2["default"])(this, MTableFooterRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rotateIconStyle", function (isOpen) {
      return {
        transform: isOpen ? "rotate(90deg)" : "none"
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(MTableFooterRow, [{
    key: "renderColumns",
    value: function renderColumns() {
      var _this2 = this;

      var size = CommonValues.elementSize(this.props);
      var mapArr = this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
      }).sort(function (a, b) {
        return a.tableData.columnOrder - b.tableData.columnOrder;
      }).map(function (columnDef) {
        var value = _this2.props.getFieldValue(_this2.props.data, columnDef);

        return /*#__PURE__*/React.createElement(_this2.props.components.Cell, {
          size: size,
          errorState: _this2.props.errorState,
          icons: _this2.props.icons,
          columnDef: (0, _objectSpread2["default"])({
            cellStyle: _this2.props.options.cellStyle
          }, columnDef),
          value: value,
          key: "footer-cell-" + _this2.props.data.tableData.id + "-" + columnDef.tableData.id,
          rowData: _this2.props.data,
          cellEditable: false,
          onCellEditStarted: _this2.props.onCellEditStarted,
          scrollWidth: _this2.props.scrollWidth
        });
      });
      return mapArr;
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var size = CommonValues.elementSize(this.props);
      var width = actions.length * CommonValues.baseIconSize(this.props);
      return /*#__PURE__*/React.createElement(_TableCell["default"], {
        size: size,
        padding: "none",
        key: "key-actions-column",
        style: (0, _objectSpread2["default"])({
          width: width,
          padding: "0px 5px",
          boxSizing: "border-box"
        }, this.props.options.actionsCellStyle)
      });
    }
  }, {
    key: "renderSelectionColumn",
    value: function renderSelectionColumn() {
      var size = CommonValues.elementSize(this.props);
      var selectionWidth = CommonValues.selectionMaxWidth(this.props, this.props.treeDataMaxLevel);
      return /*#__PURE__*/React.createElement(_TableCell["default"], {
        size: size,
        padding: "none",
        key: "key-selection-column",
        style: {
          width: selectionWidth
        }
      });
    }
  }, {
    key: "renderDetailPanelColumn",
    value: function renderDetailPanelColumn() {
      var size = CommonValues.elementSize(this.props);

      if (typeof this.props.detailPanel == "function") {
        return /*#__PURE__*/React.createElement(_TableCell["default"], {
          size: size,
          padding: "none",
          key: "key-detail-panel-column",
          style: (0, _objectSpread2["default"])({
            width: 42,
            textAlign: "center"
          }, this.props.options.detailPanelColumnStyle)
        });
      } else {
        return /*#__PURE__*/React.createElement(_TableCell["default"], {
          size: size,
          padding: "none",
          key: "key-detail-panel-column"
        }, /*#__PURE__*/React.createElement("div", {
          style: (0, _objectSpread2["default"])({
            width: 42 * this.props.detailPanel.length,
            textAlign: "center",
            display: "flex"
          }, this.props.options.detailPanelColumnStyle)
        }));
      }
    }
  }, {
    key: "renderTreeDataColumn",
    value: function renderTreeDataColumn() {
      var size = CommonValues.elementSize(this.props);

      if (this.props.data.tableData.childRows && this.props.data.tableData.childRows.length > 0) {
        return /*#__PURE__*/React.createElement(_TableCell["default"], {
          size: size,
          padding: "none",
          key: "key-tree-data-column",
          style: {
            width: 48 + 9 * (this.props.treeDataMaxLevel - 2)
          }
        });
      } else {
        return /*#__PURE__*/React.createElement(_TableCell["default"], {
          padding: "none",
          key: "key-tree-data-column"
        });
      }
    }
  }, {
    key: "getStyle",
    value: function getStyle(index, level) {
      var style = {
        transition: "all ease 300ms"
      };

      if (typeof this.props.options.footerRowStyle === "function") {
        style = (0, _objectSpread2["default"])({}, style, this.props.options.footerRowStyle(this.props.data, index, level, this.props.hasAnyEditingRow));
      } else if (this.props.options.footerRowStyle) {
        style = (0, _objectSpread2["default"])({}, style, this.props.options.footerRowStyle);
      }

      if (this.props.onFooterRowClick) {
        style.cursor = "pointer";
      }

      return style;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var size = CommonValues.elementSize(this.props);
      var renderColumns = this.renderColumns();

      if (this.props.options.selection) {
        renderColumns.splice(0, 0, this.renderSelectionColumn());
      }

      if (this.props.actions && this.props.actions.filter(function (a) {
        return a.position === "row" || typeof a === "function";
      }).length > 0) {
        if (this.props.options.actionsColumnIndex === -1) {
          renderColumns.push(this.renderActions());
        } else if (this.props.options.actionsColumnIndex >= 0) {
          var endPos = 0;

          if (this.props.options.selection) {
            endPos = 1;
          }

          renderColumns.splice(this.props.options.actionsColumnIndex + endPos, 0, this.renderActions());
        }
      } // Then we add detail panel icon


      if (this.props.detailPanel) {
        if (this.props.options.detailPanelColumnAlignment === "right") {
          renderColumns.push(this.renderDetailPanelColumn());
        } else {
          renderColumns.splice(0, 0, this.renderDetailPanelColumn());
        }
      } // Lastly we add tree data icon


      if (this.props.isTreeData) {
        renderColumns.splice(0, 0, this.renderTreeDataColumn());
      }

      this.props.columns.filter(function (columnDef) {
        return columnDef.tableData.groupOrder > -1;
      }).forEach(function (columnDef) {
        renderColumns.splice(0, 0, /*#__PURE__*/React.createElement(_TableCell["default"], {
          size: size,
          padding: "none",
          key: "key-group-cell" + columnDef.tableData.id
        }));
      });
      var _this$props = this.props,
          icons = _this$props.icons,
          data = _this$props.data,
          columns = _this$props.columns,
          components = _this$props.components,
          detailPanel = _this$props.detailPanel,
          getFieldValue = _this$props.getFieldValue,
          isTreeData = _this$props.isTreeData,
          onFooterRowClick = _this$props.onFooterRowClick,
          disabledRow = _this$props.disabledRow,
          onRowSelected = _this$props.onRowSelected,
          onTreeExpandChanged = _this$props.onTreeExpandChanged,
          onToggleDetailPanel = _this$props.onToggleDetailPanel,
          onEditingCanceled = _this$props.onEditingCanceled,
          onEditingApproved = _this$props.onEditingApproved,
          options = _this$props.options,
          hasAnyEditingRow = _this$props.hasAnyEditingRow,
          treeDataMaxLevel = _this$props.treeDataMaxLevel,
          localization = _this$props.localization,
          actions = _this$props.actions,
          errorState = _this$props.errorState,
          scrollWidth = _this$props.scrollWidth,
          rowProps = (0, _objectWithoutProperties2["default"])(_this$props, ["icons", "data", "columns", "components", "detailPanel", "getFieldValue", "isTreeData", "onFooterRowClick", "disabledRow", "onRowSelected", "onTreeExpandChanged", "onToggleDetailPanel", "onEditingCanceled", "onEditingApproved", "options", "hasAnyEditingRow", "treeDataMaxLevel", "localization", "actions", "errorState", "scrollWidth"]);
      var rowIsDisabled = disabledRow(data);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_TableRow["default"], (0, _extends2["default"])({
        selected: hasAnyEditingRow
      }, rowProps, {
        hover: onFooterRowClick ? !rowIsDisabled : false,
        style: this.getStyle(this.props.index, this.props.level),
        onClick: function onClick(event) {
          !rowIsDisabled && onFooterRowClick && onFooterRowClick(event, _this3.props.data, function (panelIndex) {
            var panel = detailPanel;
            onToggleDetailPanel(_this3.props.path, panel);
          });
        }
      }), renderColumns), this.props.data.tableData.childRows && this.props.data.tableData.isTreeExpanded && this.props.data.tableData.childRows.map(function (data, index) {
        return /*#__PURE__*/React.createElement(_this3.props.components.Row, (0, _extends2["default"])({}, _this3.props, {
          data: data,
          index: index,
          key: index,
          level: _this3.props.level + 1,
          path: [].concat((0, _toConsumableArray2["default"])(_this3.props.path), [index]),
          onEditingCanceled: onEditingCanceled,
          onEditingApproved: onEditingApproved,
          hasAnyEditingRow: _this3.props.hasAnyEditingRow,
          treeDataMaxLevel: treeDataMaxLevel,
          errorState: _this3.props.errorState,
          cellEditable: false,
          onCellEditStarted: onCellEditStarted,
          onCellEditFinished: onCellEditFinished
        }));
      }));
    }
  }]);
  return MTableFooterRow;
}(React.Component);

exports["default"] = MTableFooterRow;
MTableFooterRow.defaultProps = {
  actions: [],
  index: 0,
  data: {},
  options: {},
  path: [],
  disabledRow: function disabledRow() {
    return false;
  }
};
MTableFooterRow.propTypes = {
  actions: _propTypes["default"].array,
  icons: _propTypes["default"].any.isRequired,
  index: _propTypes["default"].number.isRequired,
  data: _propTypes["default"].object.isRequired,
  detailPanel: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]))]),
  hasAnyEditingRow: _propTypes["default"].bool,
  options: _propTypes["default"].object.isRequired,
  onRowSelected: _propTypes["default"].func,
  path: _propTypes["default"].arrayOf(_propTypes["default"].number),
  treeDataMaxLevel: _propTypes["default"].number,
  getFieldValue: _propTypes["default"].func.isRequired,
  columns: _propTypes["default"].array,
  onToggleDetailPanel: _propTypes["default"].func.isRequired,
  onFooterRowClick: _propTypes["default"].func,
  onEditingApproved: _propTypes["default"].func,
  onEditingCanceled: _propTypes["default"].func,
  errorState: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]),
  disabledRow: _propTypes["default"].func
};