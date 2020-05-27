import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="img of the tour" />
          <span className="close-btn">
            <i class="fa fa-window-close" aria-hidden="true"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span>
              <i class="fa fa-caret-square-o-down" aria-hidden="true" onClick={clickShowInfo}></i>
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}
