import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";
export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
  };
  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;
    console.log(tours)
    return (
      <div>
        
      </div>
    );
  }
}
