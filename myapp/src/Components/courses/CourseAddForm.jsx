import React from 'react'
import uid from 'uid'
import Calendar from './Calendar'
import Multiselect from './Multiselect'
import { categories, teachers } from '../../data'

const optionsTeachers = teachers.map( teacher => Object.assign( {}, { label: teacher, value: teacher }  ) )
const optionsCategories = categories.map( categorie => Object.assign( {},{ label: categorie, value:categorie} ) )

const CourseAddForm = (props) => (
    <form onSubmit={props.onAddCourse} autoComplete="off">
        <input type="hidden" name="id" value={uid(10)} />
        <input type="text" placeholder="Nombre del curso" name="name"/>
        <Multiselect
            name="teacher"
            placeholder="Elige el profesor"
            options={optionsTeachers}
        />
        <Multiselect
            name="categories"
            placeholder="Seleccione las categorias"
            options={optionsCategories}
        />
        
        <Calendar name="date" />
        <input type="submit" value="Guardar"/>
    </form> 
)

export default CourseAddForm