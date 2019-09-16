import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class EmploymentTable extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Table striped className="innovate-table">
          <thead>
            <tr>
              <th>EMPLOYER NAME</th>
              <th>EMPLOYEE STATUS</th>
              <th>POSITION</th>
              <th>EMPLOYER ADDRESS</th>
              <th>PERIOD FROM</th>
              <th>PERIOD TO</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LPU</td>
              <td>Status</td>
              <td>Develop</td>
              <td>Mumbai</td>
              <td>20-04-2017</td>
              <td>15-01-2019</td>
              <td>
                <Button className="edit">
                  <i className="fa fa-pen"></i>
                </Button>
                <Button className="delete">
                  <i className="fa fa-trash"></i>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default EmploymentTable;
