import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import {tourData} from '../../'
export default class TourList extends Component {
  render() {
    return (
      <div>
        Hello from tourlist
        <Tour />
      </div>
    );
  }
}
