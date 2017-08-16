import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const IncomeSpend = ({header = 'Your Income & Spend'}) => {
  return (
      <div className="income-spend-outer">

        <div className="income-spend-header">
          <h1>{header}</h1>
        </div>

        <div className="annual-income-subheading">
          <h2>Annual income</h2>
        </div>

        <Inputs />

        <div className="monthly-spending">
          <h2>Monthly spending</h2>
        </div>

        <Inputs />
        <Inputs />
        <Inputs />
      </div>
    )
}

const Inputs = () => {
  return (
    <div className="inputs">
      <div className="annual-salary">
        Annual salary:
        <input type="text" name="annual-salary" />
      </div>

      <div className="from-age">
        From age:
        <input type="text" name="from-age" />
      </div>

      <div className="to-age">
        To age:
        <input type="text" name="to-age" />
      </div>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <IncomeSpend />
      </div>
    );
  }
}

export default App;
