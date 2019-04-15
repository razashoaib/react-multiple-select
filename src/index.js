import React, { Component } from 'react';
import './styles.css';

class MultipleSelectControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedItems: [],
      unselectedItems: this.props.items,
    };
  }

  onSelectedClick() {
    var selectedValues = [].filter.call(this.refs.unSelectedBox.options, function (o) {
      return o.selected;
    }).map(function (o) {
      return o.value;
    });

    var unSelectedValues = [].filter.call(this.refs.unSelectedBox.options, function (o) {
      return !o.selected;
    }).map(function (o) {
      return o.value;
    });
    var newSelectedValues = selectedValues.concat(this.state.selectedItems);
    this.setState({
      unselectedItems: unSelectedValues,
      selectedItems: newSelectedValues,
    });
    this.props.getSelectedValuesCallback(newSelectedValues);
  }

  onSelectAllClick() {
    this.setState({
      unselectedItems: [],
      selectedItems: this.props.items,
    });
    this.props.getSelectedValuesCallback(this.props.items);
  }

  onDeselectedClick() {
    var deSelectedValues = [].filter.call(this.refs.selectedBox.options, function (o) {
      return o.selected;
    }).map(function (o) {
      return o.value;
    });

    var remainingSelectedValues = [].filter.call(this.refs.selectedBox.options, function (o) {
      return !o.selected;
    }).map(function (o) {
      return o.value;
    });
    var newSelectedValues = deSelectedValues.concat(this.state.unselectedItems);
    this.setState({
      unselectedItems: newSelectedValues,
      selectedItems: remainingSelectedValues,
    });
    this.props.getSelectedValuesCallback(remainingSelectedValues);
  }

  onDeselectAllClick() {
    this.setState({
      unselectedItems: this.props.items,
      selectedItems: [],
    });
    this.props.getSelectedValuesCallback([]);
  }

  render() {

    var multipleSelectContainerClassName = 'multiple-select-container';
    var leftSelectContainerClassName = 'multiple-select-left-container';
    var middleSelectContainerClassName = 'multiple-select-middle-container';
    var rightSelectContainerClassName = 'multiple-select-right-container';
    var leftSelectBoxClassName = '';
    var rightSelectBoxClassName = '';

    var selectOneInnerHTML = '>';
    var selectAllInnerHTML = '>>';
    var deSelectOneInnerHTML = '<';
    var deSelectAllInnerHTML = '<<';

    if(this.props.mainContainerClassName) {
      multipleSelectContainerClassName += ' ' + this.props.mainContainerClassName; 
    }

    if(this.props.leftContainerClassName) {
      leftSelectContainerClassName += ' ' + this.props.leftContainerClassName; 
    }

    if(this.props.middleContainerClassName) {
      middleSelectContainerClassName += ' ' + this.props.middleContainerClassName; 
    }

    if(this.props.rightContainerClassName) {
      rightSelectContainerClassName += ' ' + this.props.rightContainerClassName; 
    }

    if(this.props.leftSelectBoxClassName) {
      leftSelectBoxClassName += ' ' + this.props.leftSelectBoxClassName; 
    }

    if(this.props.rightSelectBoxClassName) {
      rightSelectBoxClassName += ' ' + this.props.rightSelectBoxClassName; 
    }

    if(this.props.selectOneInnerHTML) {
      selectOneInnerHTML = this.props.selectOneInnerHTML; 
    }

    if(this.props.selectAllInnerHTML) {
      selectAllInnerHTML = this.props.selectAllInnerHTML; 
    }

    if(this.props.deSelectOneInnerHTML) {
      deSelectOneInnerHTML = this.props.deSelectOneInnerHTML; 
    }

    if(this.props.deSelectAllInnerHTML) {
      deSelectAllInnerHTML = this.props.deSelectAllInnerHTML; 
    }

    return (
        <div className={multipleSelectContainerClassName}>
          <div className={leftSelectContainerClassName}>
            <select multiple className={leftSelectBoxClassName} id="unSelectedBox" ref="unSelectedBox">
            {this.state.unselectedItems.map((item, key) =>
              <option key={key} value={item} >{item}</option>
              )}
            </select>
          </div>
          <div className={middleSelectContainerClassName}>
            <ul>
              <li><button type="button" onClick={this.onSelectedClick.bind(this)}>{selectOneInnerHTML}</button></li>
              <li><button type="button" onClick={this.onSelectAllClick.bind(this)}>{selectAllInnerHTML}</button></li>
              <li><button type="button" onClick={this.onDeselectedClick.bind(this)}>{deSelectOneInnerHTML}</button></li>
              <li><button type="button" onClick={this.onDeselectAllClick.bind(this)}>{deSelectAllInnerHTML}</button></li>
            </ul>
          </div>
          <div className={rightSelectContainerClassName}>
            <select multiple className={rightSelectBoxClassName} id="selectedBox" ref="selectedBox">
              {this.state.selectedItems.map((item, key) =>
              <option key={key} value={item} >{item}</option>
              )}
            </select>
          </div>
        </div>
    );
  }
}

export default MultipleSelectControl;
