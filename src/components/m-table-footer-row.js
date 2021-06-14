/* eslint-disable no-unused-vars */
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import * as React from "react";
import * as CommonValues from "../utils/common-values";
/* eslint-enable no-unused-vars */

export default class MTableFooterRow extends React.Component {
  renderColumns() {
    const size = CommonValues.elementSize(this.props);
    const mapArr = this.props.columns
      .filter(
        (columnDef) =>
          !columnDef.hidden && !(columnDef.tableData.groupOrder > -1)
      )
      .sort((a, b) => a.tableData.columnOrder - b.tableData.columnOrder)
      .map((columnDef) => {
        const value = this.props.getFieldValue(this.props.data, columnDef);
        return (
          <this.props.components.Cell
            size={size}
            errorState={this.props.errorState}
            icons={this.props.icons}
            columnDef={{
              cellStyle: this.props.options.cellStyle,
              ...columnDef,
            }}
            value={value}
            key={
              "footer-cell-" +
              this.props.data.tableData.id +
              "-" +
              columnDef.tableData.id
            }
            rowData={this.props.data}
            cellEditable={ false }
            onCellEditStarted={this.props.onCellEditStarted}
            scrollWidth={this.props.scrollWidth}
          />
        )
      });
    return mapArr;
  }

  renderActions() {
    const size = CommonValues.elementSize(this.props);
    const width = actions.length * CommonValues.baseIconSize(this.props);
    return (
      <TableCell
        size={size}
        padding="none"
        key="key-actions-column"
        style={{
          width: width,
          padding: "0px 5px",
          boxSizing: "border-box",
          ...this.props.options.actionsCellStyle,
        }}
      />
    );
  }
  renderSelectionColumn() {
   const size = CommonValues.elementSize(this.props);
    const selectionWidth = CommonValues.selectionMaxWidth(
      this.props,
      this.props.treeDataMaxLevel
    );

    return (
      <TableCell
        size={size}
        padding="none"
        key="key-selection-column"
        style={{ width: selectionWidth }}
      />
    );
  }

  rotateIconStyle = (isOpen) => ({
    transform: isOpen ? "rotate(90deg)" : "none",
  });

  renderDetailPanelColumn() {
    const size = CommonValues.elementSize(this.props);
    if (typeof this.props.detailPanel == "function") {
      return (
        <TableCell
          size={size}
          padding="none"
          key="key-detail-panel-column"
          style={{
            width: 42,
            textAlign: "center",
            ...this.props.options.detailPanelColumnStyle,
          }}
        />
      );
    } else {
      return (
        <TableCell size={size} padding="none" key="key-detail-panel-column">
          <div
            style={{
              width: 42 * this.props.detailPanel.length,
              textAlign: "center",
              display: "flex",
              ...this.props.options.detailPanelColumnStyle,
            }}
          />
        </TableCell>
      );
    }
  }

  renderTreeDataColumn() {
    const size = CommonValues.elementSize(this.props);
    if (
      this.props.data.tableData.childRows &&
      this.props.data.tableData.childRows.length > 0
    ) {
      return (
        <TableCell
          size={size}
          padding="none"
          key={"key-tree-data-column"}
          style={{ width: 48 + 9 * (this.props.treeDataMaxLevel - 2) }}
        />
      );
    } else {
      return <TableCell padding="none" key={"key-tree-data-column"} />;
    }
  }

  getStyle(index, level) {
    let style = {
      transition: "all ease 300ms",
    };

    if (typeof this.props.options.footerRowStyle === "function") {
      style = {
        ...style,
        ...this.props.options.footerRowStyle(
          this.props.data,
          index,
          level,
          this.props.hasAnyEditingRow
        ),
      };
    } else if (this.props.options.footerRowStyle) {
      style = {
        ...style,
        ...this.props.options.footerRowStyle,
      };
    }

    if (this.props.onFooterRowClick) {
      style.cursor = "pointer";
    }

    return style;
  }

  render() {
    const size = CommonValues.elementSize(this.props);
    const renderColumns = this.renderColumns();
    if (this.props.options.selection) {
      renderColumns.splice(0, 0, this.renderSelectionColumn());
    }
    if (
      this.props.actions &&
      this.props.actions.filter(
        (a) => a.position === "row" || typeof a === "function"
      ).length > 0
    ) {
      if (this.props.options.actionsColumnIndex === -1) {
        renderColumns.push(this.renderActions());
      } else if (this.props.options.actionsColumnIndex >= 0) {
        let endPos = 0;
        if (this.props.options.selection) {
          endPos = 1;
        }
        renderColumns.splice(
          this.props.options.actionsColumnIndex + endPos,
          0,
          this.renderActions()
        );
      }
    }

    // Then we add detail panel icon
    if (this.props.detailPanel) {
      if (this.props.options.detailPanelColumnAlignment === "right") {
        renderColumns.push(this.renderDetailPanelColumn());
      } else {
        renderColumns.splice(0, 0, this.renderDetailPanelColumn());
      }
    }

    // Lastly we add tree data icon
    if (this.props.isTreeData) {
      renderColumns.splice(0, 0, this.renderTreeDataColumn());
    }

    this.props.columns
      .filter((columnDef) => columnDef.tableData.groupOrder > -1)
      .forEach((columnDef) => {
        renderColumns.splice(
          0,
          0,
          <TableCell
            size={size}
            padding="none"
            key={"key-group-cell" + columnDef.tableData.id}
          />
        );
      });

    const {
      icons,
      data,
      columns,
      components,
      detailPanel,
      getFieldValue,
      isTreeData,
      onFooterRowClick,
      disabledRow,
      onRowSelected,
      onTreeExpandChanged,
      onToggleDetailPanel,
      onEditingCanceled,
      onEditingApproved,
      options,
      hasAnyEditingRow,
      treeDataMaxLevel,
      localization,
      actions,
      errorState,
      scrollWidth,
      ...rowProps
    } = this.props;

    const rowIsDisabled = disabledRow(data)

    return (
      <>
        <TableRow
          selected={hasAnyEditingRow}
          {...rowProps}
          hover={onFooterRowClick ? !rowIsDisabled : false}
          style={this.getStyle(this.props.index, this.props.level)}
          onClick={(event) => {
            !rowIsDisabled &&
            onFooterRowClick &&
              onFooterRowClick(event, this.props.data, (panelIndex) => {
                const panel = detailPanel;
                onToggleDetailPanel(this.props.path, panel);
              });
          }}
        >
          {renderColumns}
        </TableRow>
        {this.props.data.tableData.childRows &&
          this.props.data.tableData.isTreeExpanded &&
          this.props.data.tableData.childRows.map((data, index) => {
            return (
              <this.props.components.Row
                {...this.props}
                data={data}
                index={index}
                key={index}
                level={this.props.level + 1}
                path={[...this.props.path, index]}
                onEditingCanceled={onEditingCanceled}
                onEditingApproved={onEditingApproved}
                hasAnyEditingRow={this.props.hasAnyEditingRow}
                treeDataMaxLevel={treeDataMaxLevel}
                errorState={this.props.errorState}
                cellEditable={false}
                onCellEditStarted={onCellEditStarted}
                onCellEditFinished={onCellEditFinished}
              />
            );
          })
        }
      </>
    );
  }
}

MTableFooterRow.defaultProps = {
  actions: [],
  index: 0,
  data: {},
  options: {},
  path: [],
  disabledRow: () => false
};

MTableFooterRow.propTypes = {
  actions: PropTypes.array,
  icons: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  detailPanel: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])),
  ]),
  hasAnyEditingRow: PropTypes.bool,
  options: PropTypes.object.isRequired,
  onRowSelected: PropTypes.func,
  path: PropTypes.arrayOf(PropTypes.number),
  treeDataMaxLevel: PropTypes.number,
  getFieldValue: PropTypes.func.isRequired,
  columns: PropTypes.array,
  onToggleDetailPanel: PropTypes.func.isRequired,
  onFooterRowClick: PropTypes.func,
  onEditingApproved: PropTypes.func,
  onEditingCanceled: PropTypes.func,
  errorState: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  disabledRow: PropTypes.func
};
