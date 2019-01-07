import React, { Component } from 'react'
import uid from 'uid'
import PropTypes from 'prop-types'
import CoursesList from './CourseLists'
import CourseAddForm from './CourseAddForm'
import { categories, courses, teachers } from '../../data/'


class Courses extends Component {
    constructor(...props){
        super(...props)

        this.state = {
            courses: courses
        }

        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    }
    
    handleOnAddCourse(e){
        e.preventDefault()
        let form = e.target,
            course = {
                id: form.id.value,
                name: (form.name.value) ? form.name.value : Courses.defaultProps.name,
                teacher: (form.teacher.value) ? form.teacher.value : Courses.defaultProps.teacher,
                date: (form.date.value) ? form.date.value : Courses.defaultProps.date
            }
            
        this.setState({
            courses: this.state.courses.concat([course])
        })
        form.reset()
    }
    
    render(){
        if (!this.state.courses.length){
            return (
                <div>
                    <p>No Hay cursos</p>
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
                </div>    
        )
        }
    }
}

Courses.PropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

Courses.defaultProps = {
    id: uid(10),
    name: 'Curso Desconocido',
    teacher: 'profesor No asignado',
    date: 'Fecha no asignada'
}

export default Courses