import React from 'react'

const Header = ({courseName}) =>{
  return(
      <h1>{courseName}</h1>
  )
}

const Part = ({name,exercise}) => {
  return (
      <p>
          {name} {exercise}
      </p>
  )
}

const Content = ({ course }) => {
  return (
      <div>
          {course.map((part) => 
              <Part key={part.id} name={part.name} exercise={part.exercises} />)}
      </div>
  )
}


const Total = ({numberOfExercise}) => {
  return (
    <p>Total of {numberOfExercise.reduce((sum,exercise) => sum + exercise.exercises,0)} exercises</p>
  )
}

const Course = ({course}) =>{
  return(
      <div>
        <Header courseName={course.name} />
        <Content course={course.parts} />
        <Total numberOfExercise={course.parts} />
      </div>
  )
}

export default Course;