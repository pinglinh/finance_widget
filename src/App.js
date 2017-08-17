import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const model = {
  annualSalary: {
    value: 1000,
    fromAge: 18,
    toAge: 65
  },

  mortgage: {
    value: 1000,
    fromAge: 18,
    toAge: 65
  },

  bills: {
    value: 1000,
    fromAge: 18,
    toAge: 65
  },

  generalSpending: {
    value: 1000,
    fromAge: 18,
    toAge: 65
  }
}

const IncomeSpend = ({header = 'Your Income & Spend', model}) => {
  return (
      <div className="income-spend-outer">

        <div className="income-spend-header">
          <h1>{header}</h1>
        </div>

        <div className="annual-income-subheading">
          <h2>Annual income</h2>
        </div>

        <Inputs inputText="Annual salary:" data={model.annualSalary}/>

        <div className="monthly-spending-subheading">
          <h2>Monthly spending</h2>
        </div>

        <Inputs inputText="Mortgage:" data={model.mortgage}/>
        <Inputs inputText="Bills:" data={model.bills}/>
        <Inputs inputText="General spending:" data={model.generalSpending}/>
      </div>
    )
}

const Inputs = ({inputText, data}) => {
  return (
    <div className="inputs">
      <div className="first-input">
        <label>{inputText}</label>
        <input type="text" name="annual-salary" value={data.value}/>
      </div>

      <div className="from-age">
        <label>From age:</label>
        <input type="text" name="from-age" value={data.fromAge}/>
      </div>

      <div className="to-age">
        <label>To age:</label>
        <input type="text" name="to-age" value={data.toAge}/>
      </div>
    </div>
  )
}


class App extends Component {
  constructor (props){
    super(props);
    this.state = {model}
  }

  render() {
    return (
      <div className="App">
        <IncomeSpend model={this.state.model}/>
      </div>
    );
  }
}

export default App;
