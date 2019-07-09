import React from "react";
import { Box, Button, Form, FormField, Grommet, Layer } from "grommet";

import BudgetTable from "./BudgetTable";

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPurchaseEntryForm: false,
      showNewBudgetForm: false,

      entryName: "",
      entryPrice: "",
      entryDate: new Date().toISOString().slice(0, 10),

      purchaseEvents: [],

      budget: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.deletePurchaseEntry = this.deletePurchaseEntry.bind(this);
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  onChangeHandler(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  formSubmitHandler() {
    // Copy the existing purchaseEvents
    const purchaseEvents = [...this.state.purchaseEvents];

    // console.log(this.state.entryName);
    // console.log(this.state.entryPrice);
    // console.log(this.state.entryDate);

    const id = Math.random() + 1;

    const newPurchase = {
      name: this.state.entryName,
      price: this.state.entryPrice,
      date: this.state.entryDate,
      id: id
    };

    purchaseEvents.push(newPurchase);

    console.log(purchaseEvents);

    // Reset the input fields / state. Except purchaseEvents!
    this.setState({
      showPurchaseEntryForm: false,
      entryName: "",
      entryPrice: "",
      entryDate: new Date().toISOString().slice(0, 10),
      purchaseEvents
    });
  }

  deletePurchaseEntry(id) {
    const purchaseEvents = [...this.state.purchaseEvents];
    const updatedPurchaseEvents = purchaseEvents.filter(
      purchase => purchase.id !== id
    );
    this.setState({
      purchaseEvents: updatedPurchaseEvents
    });
  }

  render() {
    return (
      <Grommet>
        {/* <Button
          name="test"
          label="TEST"
          onClick={() => console.log(this.state.entryName)}
        /> */}
        <Button
          label="Add New Purchase"
          onClick={() => this.setState({ showPurchaseEntryForm: true })}
        />
        <Button
          label="Add New Budget"
          onClick={() => this.setState({ showNewBudgetForm: true })}
        />

        {/* Show showNewBudgetForm*/}
        {this.state.showNewBudgetForm === true && (
          <Layer
            onClickOutside={() => this.setState({ showNewBudgetForm: false })}
          >
            <Box
              direction="column"
              align="center"
              border={{ color: "brand", size: "large" }}
              pad="small"
            >
              <Form align="center">
                <FormField
                  type="number"
                  name="budget"
                  label="Budget (€)"
                  value={this.state.budget}
                  onChange={this.onChangeHandler}
                />
                <Button primary label="Save" color="accent-1" />
              </Form>
            </Box>
          </Layer>
        )}

        {/* Show showPurchaseEntryForm*/}
        {this.state.showPurchaseEntryForm === true && (
          <Layer
            style={{ borderRadius: "5px" }}
            onClickOutside={() =>
              this.setState({ showPurchaseEntryForm: false })
            }
          >
            <Box
              // draggable="true"
              style={{ borderRadius: "5px" }}
              direction="column"
              border={{ color: "brand", size: "large" }}
              pad="small"
              align="center"
            >
              <Form>
                {/* <input
                  type="text"
                  value={this.state.entryName}
                  onChange={event =>
                    this.setState({ entryName: event.target.value })
                  }
                />
                <button onClick={() => console.log(this.state.entryName)} >Show State</button>
                <hr /> */}
                <FormField
                  name="entryName"
                  label="Name"
                  type="text"
                  value={this.state.entryName}
                  onChange={this.onChangeHandler}
                  // onChange={(event) => console.log(event.target.value)}
                />
                <FormField
                  name="entryPrice"
                  label="Price"
                  type="number"
                  value={this.state.entryPrice}
                  onChange={this.onChangeHandler}
                  // onChange={(event) => console.log(event.target.value)}
                />
                {/* <Calendar  
          className="calendar"
          size="small" 
          alignSelf="center"
          firstDayOfWeek={1}
          date={(new Date().toISOString())}
          onSelect={(date) => this.setState({newDate: date.slice(0, 10)})}
          /> */}
                <FormField
                  name="entryDate"
                  label="Date"
                  type="date"
                  value={this.state.entryDate}
                  onChange={this.onChangeHandler}
                />
                <Button
                  primary
                  color="accent-1"
                  label="Add"
                  // onClick={() => console.log(this.state.newEntry)}
                  onClick={this.formSubmitHandler}
                />
                {/* <input name="entryTest"  type="text" onChange={this.onChangeHandler} /> */}
              </Form>
            </Box>
          </Layer>
        )}
        <BudgetTable
          // purchaseName={this.state.purchaseEvents.name}
          // purchasePrice={this.state.purchaseEvents.price}
          // purchaseDate={this.state.purchaseEvents.date}
          purchaseEvents={this.state.purchaseEvents}
          deletePurchaseEntry={this.deletePurchaseEntry}
        />
      </Grommet>
    );
  }
}

export default BudgetForm;
