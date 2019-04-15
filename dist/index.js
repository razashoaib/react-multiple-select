'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultipleSelectControl = function (_Component) {
  _inherits(MultipleSelectControl, _Component);

  function MultipleSelectControl(props) {
    _classCallCheck(this, MultipleSelectControl);

    var _this = _possibleConstructorReturn(this, (MultipleSelectControl.__proto__ || Object.getPrototypeOf(MultipleSelectControl)).call(this, props));

    _this.state = {
      selectedItems: [],
      unselectedItems: _this.props.items
    };
    return _this;
  }

  _createClass(MultipleSelectControl, [{
    key: 'onSelectedClick',
    value: function onSelectedClick() {
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
        selectedItems: newSelectedValues
      });
      this.props.getSelectedValuesCallback(newSelectedValues);
    }
  }, {
    key: 'onSelectAllClick',
    value: function onSelectAllClick() {
      this.setState({
        unselectedItems: [],
        selectedItems: this.props.items
      });
      this.props.getSelectedValuesCallback(this.props.items);
    }
  }, {
    key: 'onDeselectedClick',
    value: function onDeselectedClick() {
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
        selectedItems: remainingSelectedValues
      });
      this.props.getSelectedValuesCallback(remainingSelectedValues);
    }
  }, {
    key: 'onDeselectAllClick',
    value: function onDeselectAllClick() {
      this.setState({
        unselectedItems: this.props.items,
        selectedItems: []
      });
      this.props.getSelectedValuesCallback([]);
    }
  }, {
    key: 'render',
    value: function render() {

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

      if (this.props.mainContainerClassName) {
        multipleSelectContainerClassName += ' ' + this.props.mainContainerClassName;
      }

      if (this.props.leftContainerClassName) {
        leftSelectContainerClassName += ' ' + this.props.leftContainerClassName;
      }

      if (this.props.middleContainerClassName) {
        middleSelectContainerClassName += ' ' + this.props.middleContainerClassName;
      }

      if (this.props.rightContainerClassName) {
        rightSelectContainerClassName += ' ' + this.props.rightContainerClassName;
      }

      if (this.props.leftSelectBoxClassName) {
        leftSelectBoxClassName += ' ' + this.props.leftSelectBoxClassName;
      }

      if (this.props.rightSelectBoxClassName) {
        rightSelectBoxClassName += ' ' + this.props.rightSelectBoxClassName;
      }

      if (this.props.selectOneInnerHTML) {
        selectOneInnerHTML = this.props.selectOneInnerHTML;
      }

      if (this.props.selectAllInnerHTML) {
        selectAllInnerHTML = this.props.selectAllInnerHTML;
      }

      if (this.props.deSelectOneInnerHTML) {
        deSelectOneInnerHTML = this.props.deSelectOneInnerHTML;
      }

      if (this.props.deSelectAllInnerHTML) {
        deSelectAllInnerHTML = this.props.deSelectAllInnerHTML;
      }

      return _react2.default.createElement(
        'div',
        { className: multipleSelectContainerClassName },
        _react2.default.createElement(
          'div',
          { className: leftSelectContainerClassName },
          _react2.default.createElement(
            'select',
            { multiple: true, className: leftSelectBoxClassName, id: 'unSelectedBox', ref: 'unSelectedBox' },
            this.state.unselectedItems.map(function (item, key) {
              return _react2.default.createElement(
                'option',
                { key: key, value: item },
                item
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: middleSelectContainerClassName },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.onSelectedClick.bind(this) },
                selectOneInnerHTML
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.onSelectAllClick.bind(this) },
                selectAllInnerHTML
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.onDeselectedClick.bind(this) },
                deSelectOneInnerHTML
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.onDeselectAllClick.bind(this) },
                deSelectAllInnerHTML
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: rightSelectContainerClassName },
          _react2.default.createElement(
            'select',
            { multiple: true, className: rightSelectBoxClassName, id: 'selectedBox', ref: 'selectedBox' },
            this.state.selectedItems.map(function (item, key) {
              return _react2.default.createElement(
                'option',
                { key: key, value: item },
                item
              );
            })
          )
        )
      );
    }
  }]);

  return MultipleSelectControl;
}(_react.Component);

exports.default = MultipleSelectControl;