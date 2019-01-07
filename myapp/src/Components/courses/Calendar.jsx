import React, { Component } from 'react'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

class Calendar extends Component {
    constructor (...props){
        super(...props)
        this.state = {
            startDate: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(date){
        this.setState({
            startDate: date
        })
    }
    render (){
        return(
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                placeholderText="Seleccione la fecha del curso"
                isClearable={true}
                dateFormat="dd/MM/yyyy"
                name={this.props.name}
            />
        )
    }
}

export default Calendar