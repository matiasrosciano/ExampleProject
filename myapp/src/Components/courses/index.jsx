import React, { Component } from 'react'
import uid from 'uid'
import PropTypes from 'prop-types'
import CoursesList from './CourseLists'
import CourseAddForm from './CourseAddForm'
import {courses} from '../data/courses.json'


class App extends Component {
    constructor(...props){
        super(...props)

        this.state = {
            courses: []
        }

        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.resetData = this.resetData.bind(this)
    }
    
    handleOnAddCourse(e){
        e.preventDefault()
        let form = e.target,
            course = {
                id: form.id.value,
                name: (form.name.value) ? form.name.value : App.defaultProps.name,
                teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher,
                date: (form.date.value) ? form.date.value : App.defaultProps.date
            }
            
        this.setState({
            courses: this.state.courses.concat([course])
        })
        form.reset()
    }
    
    fetchData(){
        setTimeout(() => this.setState( { courses:courses } ),2000)
    }

    resetData(){
        this.setState( { courses: [] } )
    }

    componentDidMount(){
        this.fetchData()
    }

    render(){
        if (!this.state.courses.length){
            return (
                <div>
                    <p>No Hay cursos</p>
                    <button onClick={this.fetchData}>Cargar cursos</button>
                </div>
            )
        } else {
            return(
                <div>
                    <CourseAddForm
                    onAddCourse={this.handleOnAddCourse}
                    />
                    <CoursesList             
                        courses={this.state.courses}
                    />
                    <button onClick={this.resetData}>Borrar cursos</button>
                </div>    
        )
        }
    }
}

App.PropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

App.defaultProps = {
    id: uid(10),
    name: 'Curso Desconocido',
    teacher: 'profesor No asignado',
    date: 'Fecha no asignada'
}

export default App