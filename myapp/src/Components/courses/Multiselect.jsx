import React, { Component } from 'react'
import Select from 'react-select'


class Multiselect extends Component {
    constructor(...props){
        super(...props)

        this.state = {
            options: this.props.options,
            value: []  
        }
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSelectChange(value){
        this.setState( {value} )
    }
    render(){
        return(
            <Select
                isMulti={true}
                simpleValue={true}
                joinValues={true}
                name={this.props.name}
                value={this.state.value}
                options={this.props.options}
                onChange={this.handleSelectChange}
                placeholder={this.props.placeholder}
            />
        )
        
    }
}

export default Multiselect