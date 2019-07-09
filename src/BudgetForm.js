import React from "react";
import { Box, Button, Form, FormField, Grommet, Layer } from "grommet";
import BudgetTable from "./BudgetTable";

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,

      entryName: "",
      entryPrice: "",
      entryDate: new Date().toISOString().slice(0, 10),

      purchaseEvents: []
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
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
      showModal: false,
      entryName: "",
      entryPrice: "",
      entryDate: new Date().toISOString().slice(0, 10),
      purchaseEvents
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
          label="Add New"
          onClick={() => this.setState({ showModal: true })}
        />
        {this.state.showModal === true && (
          <Layer
            style={{ borderRadius: "5px" }}
            onClickOutside={() => this.setState({ showModal: false })}
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
        />
      </Grommet>
    );
  }
}

export default BudgetForm;
