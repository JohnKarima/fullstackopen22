import React from 'react'

const Header = (props) => {
    return <h1>{props.courses}</h1>
}

const Content = (props) => {
    return props.parts.map((part) => <Part key={part.id} part={part} />)
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

// const Total = (props) => {
//     const { courses } = props
//     var totalEx = courses.parts.reduce(function (sum, totals) {
//         return sum + totals.exercises
//     }, 0)
//     return <p>{totalEx}</p>
// }

const Course = (props) => {
    const { courses } = props
    return (
        <div>
            <Header courses={courses[0].name} />
            <Content parts={courses[0].parts} />
            {/* <Total courses={courses[0].exercises} /> */}
            <Header courses={courses[1].name} />
            <Content parts={courses[1].parts} />
            {/* <Total courses={courses[1].exercises} /> */}
        </div>
    )
}

export default Course
