import React from 'react'
import Course from './Course'

const CoursesList = ( props ) => (
    <ul>
        {               
            props.courses.map(course => (
                <Course
                key={course.id} 
                id={course.id}
                name={course.name}
                teacher={course.teacher}
                date={course.date}
                />
            ))
        }
           
    </ul>
)

export default CoursesList