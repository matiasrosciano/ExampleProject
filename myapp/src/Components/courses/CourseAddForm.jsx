import React from 'react'
import uid from 'uid'
import Calendar from './Calendar'
import Multiselect from './Multiselect'
import { categories, teachers } from '../../data'
import 'purecss'
import './course-add-form.css'

const optionsTeachers = teachers.map( teacher => Object.assign( {}, { label: teacher, value: teacher }  ) )
const optionsCategories = categories.map( categorie => Object.assign( {},{ label: categorie, value:categorie} ) )

const CourseAddForm = (props) => (
    <form className="pure-form AddForm" onSubmit={props.onAddCourse} autoComplete="off">
        <input type="hidden" name="id" value={uid(10)} />
        <input type="text" placeholder="Nombre del curso" name="name"/>
        <input type="url" name="poster" placeholder="poster" />
        <input type="url" name="web" placeholder="web"/>
        <input type="number" name="amount" placeholder="costo"/>
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
        <input className="pure-button pure-button-primary" type="submit" value="Guardar"/>
    </form> 
)

export default CourseAddForm