import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import BudgetForm from "./BudgetForm";
// import BudgetTable from './BudgetTable'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test: ''
    }
  }


  render() {
    return (
      <Grommet>
        <h1>React Budget App</h1>
        <BudgetForm />
        {/* <BudgetTable /> */}
        {/* <input type="text" value={this.state.test} onChange={(event) => this.setState({test: event.target.value})} />
        <button onClick={() => console.log(this.state.test)} >Click me</button> */}

      </Grommet>
    );
  }
}

export default App;
