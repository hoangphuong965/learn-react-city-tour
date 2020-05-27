import React, { Component } from 'react'
import "./tour.scss"
import { tourData } from "../../tourData";

export default class Tour extends Component {

    render() {
        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props;
        console.log(removeTour)
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="img of the tour"/>
                    <span className="close-btn">
                        <i class="fa <i class="fa fa-window-close-o" aria-hidden="true"></i>" aria-hidden="true"></i>
                    </span>
                </div>
            </article>
        )
    }
}
