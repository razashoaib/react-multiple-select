# Multi Select Control for ReactJS

This is a customizable Multi Select Control built to be used in any [ReactJS](https://reactjs.com) application. 

## Demo

![DemoGif](/examples/Demo.gif?raw=true "Gif")


## Installation and Usage Guide
### Installation
`npm i react-multiple-select`

### Usage Guide
This usage of this component is as simple as below:

```js
<MultipleSelectControl
  items={items}
  getSelectedValuesCallback={this.getSelectedItems.bind(this)}

  // All attributes below are optional for styling

  mainContainerClassName="main-container-class"
  leftContainerClassName="left-container-class"
  middleContainerClassName="middle-container-class"
  rightContainerClassName="right-container-class"
  leftSelectBoxClassName="select-box-custom-style"
  rightSelectBoxClassName="select-box-custom-style"
  selectOneInnerHTML=">"
  selectAllInnerHTML=">>"
  deSelectOneInnerHTML="<"
  deSelectAllInnerHTML="<<"

  />
```
  - In the above snippet, **`items`** is an array of all items which are needed to go in the unselected items, **getSelectedValuesCallback** is the callback function which can be used to get the array of selected items, and the rest of the attributes are optional and can be used for styling purpose.
  
### Example Usage
The complete implementation can be seen in `examples/src/index.js`.

## Contributing
Please feel free to make improvements. All the feedback is greatly appreciated.