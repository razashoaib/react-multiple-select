import React, { Component } from 'react';
import { render} from 'react-dom';
import './index.css';
import MultipleSelectControl from '../../src';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  getSelectedItems(selectedItems) {
    console.log(selectedItems);
  }

  render() {
    var items = [
      "Tennis",
      "Rugby",
      "Soccer",
      "Cricket",
      "Badminton",
      "Footy",
      "Basketball",
      "Ice Hockey",
      "Field Hockey",
    ];
    return (
      <div className="App">
        <MultipleSelectControl
          items={items}
          getSelectedValuesCallback={this.getSelectedItems.bind(this)}
          leftSelectBoxClassName="select-box-custom-style"
          rightSelectBoxClassName="select-box-custom-style"
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
