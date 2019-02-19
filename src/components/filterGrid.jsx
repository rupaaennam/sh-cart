import React, { Component, PureComponent } from "react";

class FilterGrid extends PureComponent {
  buildFilterValues = filterValArr => {
    const filterVal1 = filterValArr.map((element, index) => {
      return (
        <option key={index} value={index}>
          {element}
        </option>
      );
    });
    return filterVal1;
  };
  render() {
    return (
      <div className="filterGrid">
        <div>
          <span>Size by: </span>
          <select id="size" defaultValue="All" onChange={this.props.onSizeBy}>
            {this.buildFilterValues(this.props.sizeValues)}
          </select>
          &nbsp;&nbsp;
          <span>Sort by: </span>
          <select
            id="sortBy"
            defaultValue="Featured"
            onChange={this.props.onSortBy}
          >
            {this.buildFilterValues(this.props.sortValues)}
          </select>
        </div>
      </div>
    );
  }
}

export default FilterGrid;
