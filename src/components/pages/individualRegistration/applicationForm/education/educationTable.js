import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class EducationTable extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Table striped className="innovate-table">
          <thead>
            <tr>
              <th>NAME OF INSTITUTION</th>
              <th>INSTITUTE CATEGORY</th>
              <th>YEAR OF GRADUATION</th>
              <th>QUALIFICATION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LPU</td>
              <td>IT</td>
              <td>2011</td>
              <td>M.C.A</td>
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

export default EducationTable;
