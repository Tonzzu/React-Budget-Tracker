import React from "react";
import {
  Box,
  Button,
  Grommet,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader
} from "grommet";
import { FormTrash } from "grommet-icons";

class BudgetTable extends React.Component {
  render() {
    return (
      <Grommet>
        <Box
          direction="row"
          border={{ color: "brand", size: "large" }}
          pad="medium"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell scope="col" border="right" align="center">
                  <strong>Name</strong>
                </TableCell>
                <TableCell scope="col" border="right" align="center">
                  <strong>Price (€)</strong>
                </TableCell>
                <TableCell
                  scope="col"
                  border="right"
                  align="center"
                  // style={{ borderLeft: "none", borderBottom: "none" }}
                >
                  <strong>Date</strong>
                </TableCell>
                <TableCell
                  scope="col"
                  align="center"
                  style={{ borderLeft: "none", borderBottom: "none" }}
                >
                  <strong>Delete</strong>
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {this.props.purchaseEvents.map(purchase => {
                return (
                  <TableRow key={purchase.id}>
                    <TableCell
                      border="top"
                      scope="row"
                      style={{ borderRight: "1px solid #ccc" }}
                    >
                      {purchase.name}
                    </TableCell>
                    <TableCell
                      border="top"
                      scope="row"
                      style={{ borderRight: "1px solid #ccc" }}
                    >
                      {purchase.price}
                    </TableCell>
                    <TableCell
                      border="top"
                      scope="row"
                      style={{ borderRight: "1px solid #ccc" }}
                    >
                      {purchase.date}
                    </TableCell>
                    <TableCell border="top" scope="row">
                      <Button
                        // primary
                        color="none"
                        label={<FormTrash color="status-critical" />}
                        style={{ height: "25px", border: "none" }}
                        onClick={() =>
                          this.props.deletePurchaseEntry(purchase.id)
                        }
                      />
                    </TableCell>
                  </TableRow>
                );
              })}

              {/* <TableRow>
                <TableCell border="top" scope="row">
                  <strong>{this.props.purchaseName}</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>{this.props.purchasePrice}</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>{this.props.purchaseDate}</strong>
                </TableCell>
              </TableRow>


              <TableRow>
                <TableCell border="top" scope="row">
                  <strong>Shoes</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>123</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>8-7-2019</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell border="top" scope="row">
                  <strong>Lunch</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>10</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>2-6-2019</strong>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell border="top" scope="row">
                  <strong>Shoes</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>123</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>8-7-2019</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell border="top" scope="row">
                  <strong>Lunch</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>10</strong>
                </TableCell>
                <TableCell border="top" scope="row">
                  <strong>2-6-2019</strong>
                </TableCell>
              </TableRow>

          

               */}
            </TableBody>
          </Table>
        </Box>
      </Grommet>
    );
  }
}

export default BudgetTable;
