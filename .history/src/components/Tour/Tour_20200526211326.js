import React, { Component } from 'react'
import "./tour.scss"
import { tourData } from "../../tourData";

export default class Tour extends Component {

    render() {
        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props.removeTour;
        console.log(removeTour)
        return (
            <div>
                hello
            </div>
        )
    }
}
