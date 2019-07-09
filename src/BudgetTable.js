import React from "react";
import {
  Box,
  Grommet,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader
} from "grommet";

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
                <TableCell scope="col" border="right">
                  <strong>Name</strong>
                </TableCell>
                <TableCell scope="col" border="right">
                  <strong>Price (€)</strong>
                </TableCell>
                <TableCell
                  scope="col"
                  style={{ borderLeft: "none", borderBottom: "none" }}
                >
                  <strong>Date</strong>
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
                    <TableCell border="top" scope="row">
                      {purchase.date}
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
