import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  clickShowInfo = () => {
    this.setState(() => {
        
    })
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="img of the tour" />
          <span className="close-btn">
            <i className="fa fa-window-close" aria-hidden="true"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span>
              <i
                className="fa fa-caret-square-o-down"
                aria-hidden="true"
                onClick={this.clickShowInfo}
              ></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
