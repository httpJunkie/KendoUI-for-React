import React, { Component } from 'react';
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e);
    this.setState({
      dateTime: e.sender.value()
    });
  }

  render() {
    return (
      <div className="App">
        <div className="date-picker">
          <DatePicker 
            value={this.dateTime}
            /* Remember that month is zero based */
            min={ new Date(2018, 7, 1) }
            max={ new Date(2018, 11, 30) }
            format={ "yyy/MM/dd" }
            change={ this.onChange }
          />
        </div>
      </div>
    );
  }
}

export default App;
