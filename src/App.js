import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: null,
      current: null,
      input: null,
      operator: null,
      display: 0,
      click : 0,
      upperDisplay: null,
      solve: null,
      decimal: null
    }

    this.buttonClick = this.buttonClick.bind(this);
    this.buttonClear = this.buttonClear.bind(this);
    this.buttonSolve = this.buttonSolve.bind(this);

  }

  buttonClick(event) {
    var getEventValue = event.target.value;
    var getStateClick = this.state.click + 1;
    this.state.click = getStateClick;
    var getValueClick = this.state.click;
    var getValueDisplay = this.state.display;
    var setStatePrevious = this.state.previous;
    var setStateOperator = this.state.operator;
    var setUpperDisplay = this.state.upperDisplay;
    var getSolve = this.state.solve;
    var getStateDecimal = this.state.decimal;
  
    console.log(getSolve);

    if (getSolve === 'solved') {
      this.setState({
        previous: null,
        current: null,
        input: null,
        operator: null,
        display: 0,
        click : 0,
        solve: null,
        upperDisplay: null,
        decimal: null
      });
    } else {
      if (getValueClick === 1 && parseInt(getEventValue) === getValueDisplay) {
        this.state.display  = 0;
      } else if (getValueClick === 1 && getEventValue === '.') {
        if (getStateDecimal != 'clicked') {
          this.setState({
            display: `0${getEventValue}`,
            decimal: 'clicked'
          });
        } else {

        }
      } else if (!(isNaN(parseInt(getEventValue))) || getEventValue === '.'){
        if (parseInt(getValueDisplay) === 0) {
          this.setState({
            display : `${parseInt(getEventValue)}`
          });
        } else if (getEventValue === '.'){
          if (getStateDecimal != 'clicked') {
            this.setState({
              display : `${getValueDisplay}${(getEventValue)}`,
              decimal: 'clicked'
            });
          }
        } else {
          this.setState({
            display : `${getValueDisplay}${parseInt(getEventValue)}`
          });
        }
      } else {
        console.log('here');
        this.state.previous = this.state.display;
        this.state.operator = getEventValue;
        this.setState({
          display: 0,
          upperDisplay : `${this.state.previous} ${this.state.operator} `
        });
      }
    }

  }

  buttonClear(event) {
    this.setState({
      previous: null,
      current: null,
      input: null,
      operator: null,
      display: 0,
      click : 0,
      solve: null,
      upperDisplay: null,
      decimal: null
    });
  }

  buttonSolve(event) {
    var getStatePrevious = parseInt(this.state.previous);
    var getStateOperator = this.state.operator;
    var getStateDisplay = parseInt(this.state.display);
    var getStateUpperDisplayy = this.state.upperDisplay;
    var setDisplay = this.state.display;

    switch(getStateOperator) {
      case '+':
        this.setState({
          display: `${getStatePrevious + getStateDisplay}`,
          upperDisplay: `${getStateUpperDisplayy} ${this.state.display} = ${getStatePrevious + getStateDisplay}`,
          solve: 'solved'
        });
        break;
      case '-':
        this.setState({
          display: `${getStatePrevious - getStateDisplay}`,
          upperDisplay: `${getStateUpperDisplayy} ${this.state.display} = ${getStatePrevious + getStateDisplay}`,
          solve: 'solved'
        });
        break;
      case '/':
        if(getStateDisplay == 0) {
          this.setState({
            previous: null,
            current: null,
            input: null,
            operator: null,
            display: 'error',
            click : 0,
            solve: null,
            upperDisplay: null,
            decimal: null
          });

        } else {
          this.setState({
            display: `${getStatePrevious / getStateDisplay}`,
            upperDisplay: `${getStateUpperDisplayy} ${this.state.display} = ${getStatePrevious + getStateDisplay}`,
            solve: 'solved'
          });
        }
        break;
      case 'x':
        this.setState({
          display: `${getStatePrevious * getStateDisplay}`,
          upperDisplay: `${getStateUpperDisplayy} ${this.state.display} = ${getStatePrevious + getStateDisplay}`,
          solve: 'solved'
        });
        break;
    }
  }

 render(){
   return (
     <div className="App">
       <div className="main-container">
         <div className="main-title">
             <h1 className="title">JavaScript Calculator</h1>
         </div>
         <div className="main-calculator">
             <div className="calculator-body">
                 <div className="display-container">
                     <div className="upper-display">
                         <p className="upper-text" id="upper-display">{this.state.upperDisplay}</p>
                         <p className="lower-text" id="display">{this.state.display}</p>
                     </div>
                 </div>
                 <div className="button-container">
                     <button id="clear" onClick={this.buttonClear} value='AC'>AC</button>
                     <button id="divide" onClick={this.buttonClick} value='/'>/</button>
                     <button id="multiply" onClick={this.buttonClick} value='x'>x</button>
                     <button id="seven" onClick={this.buttonClick} value='7'>7</button>
                     <button id="eight" onClick={this.buttonClick} value='8'>8</button>
                     <button id="nine" onClick={this.buttonClick} value='9'>9</button>
                     <button id="four" onClick={this.buttonClick} value='4'>4</button>
                     <button id="five" onClick={this.buttonClick} value='5'>5</button>
                     <button id="six" onClick={this.buttonClick} value='6'>6</button>
                     <button id="one" onClick={this.buttonClick} value='1'>1</button>
                     <button id="two" onClick={this.buttonClick} value='2'>2</button>
                     <button id="three" onClick={this.buttonClick} value='3'>3</button>
                     <button id="zero" onClick={this.buttonClick} value='0'>0</button>
                     <button id="decimal" onClick={this.buttonClick} value='.'>.</button>
                     <button id="subtract" onClick={this.buttonClick} value='-'>-</button>
                     <button id="add" onClick={this.buttonClick} value='+'>+</button>
                     <button id="equals" onClick={this.buttonSolve} value='='>=</button>
                 </div>
             </div>
         </div>
         <div className="main-footer">
             <p className="creator-name">
                 Created by John Christian M. Garon
             </p>
         </div>
       </div>
     </div>
   );
 }
}

export default App;
