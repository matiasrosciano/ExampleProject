import React, { Component } from 'react'
import uid from 'uid'
import PropTypes from 'prop-types'
import CoursesList from './CourseLists'
import CourseAddForm from './CourseAddForm'
import {categories, courses, teachers} from '../../data/'
import CourseSearch from './CourseSearch';



class Courses extends Component {
    constructor(...props){
        super(...props)

        this.state = {
            courses: courses,
            categories: categories,
            teachers: teachers,
            filter:{
                name: '',
                teacher: '',
                categories: [],
                search: ''
            }
        }

        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
        this.handleOnSearch = this.handleOnSearch.bind(this)
        this.handleOnfilter = this.handleOnfilter.bind(this)
    }
    
    handleOnAddCourse(e){
        e.preventDefault()
        let form = e.target,
        course = {
          id: (form.id.value) ? form.id.value : Courses.defaultProps.id,
          name: (form.name.value) ? form.name.value : Courses.defaultProps.name,
          poster: (form.poster.value) ? form.poster.value : Courses.defaultProps.poster,
          url: (form.web.value) ? form.web.value : Courses.defaultProps.web,
          amount: (form.amount.value) ? form.amount.value : Courses.defaultProps.amount,
          teacher: (form.teacher.value) ? form.teacher.value : Courses.defaultProps.teacher,
          date: (form.date.value) ? (form.date.value) : Courses.defaultProps.date,
          categories: (form.categories.value) ? form.categories.value.split(',') : Courses.defaultProps.categories
        }
        this.setState({
            courses: this.state.courses.concat([course])
        })
        form.reset()
    }

    handleOnSearch(e){
        let newFilter = Object.assign( {} , this.state.filter, { [e.target.name]: [e.target.value] } )
        this.setState({
            filter : newFilter
        })
    }

    handleOnfilter(filter, data){
        let regex = new RegExp(filter.search, 'i') //la opcion i es para que busque mayusculas y minusculas
        return data.filter( q => ( regex.test(q.name) || regex.test(q.teacher) || regex.test(q.categories) )  )
    }
    
    render(){
        if (!this.state.courses.length){
            return (
                <article className="Main-container">
                    <p>No hay cursos</p>
                </article>
            )
        } else {
            return(
                <article>
                    <CourseAddForm
                        onAddCourse={this.handleOnAddCourse}
                    
                    />

                    <CourseSearch
                        onSearch={this.handleOnSearch}
                    />

                    <CoursesList             
                        courses={this.handleOnfilter(this.state.filter,this.state.courses)}
                    />
        
                </article>
        )
        }
    }
}

Courses.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    teacher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired
  }
  
  Courses.defaultProps = {
    id: uid(10),
    name: 'Curso Desconocido',
    poster: 'https://ed.team/sites/default/files/edteam-logo-118.png?2abr2017',
    url: 'https://ed.team/cursos',
    amount: 40,
    teacher: 'Profesor No Asignado',
    date: 'Fecha No Definida',
    categories: ['Sin Categoría']
  }

export default Courses