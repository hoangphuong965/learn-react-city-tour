import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import {tourData} from '../../tourData';
export default class TourList extends Component {
  state = {
    tours: tourData
  } 
  
  render() {
    console.log()
    return (
      <div>
        Hello from tourlist
        <Tour />
      </div>
    );
  }
}
