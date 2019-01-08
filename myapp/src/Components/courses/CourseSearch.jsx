import React from 'react'
import './CourseSearch.css'
import 'purecss'

const CourseSearch = (props) => (
    <form className="pure-form SearchForm">
        <input type="search" name="search" id="search" onChange={props.onSearch} placeholder="Cursos, Profesores, Categorias"  />
        <label htmlFor="search">
            <i className="fa fa-search"></i>
        </label>
    </form>
)

export default CourseSearch