import Course from './components/Course'

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1,
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2,
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3,
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ]

    var totalEx = courses[0].parts.reduce(function (sum, totals) {
        return sum + totals.exercises
    }, 0)

    var totalEx2 = courses[1].parts.reduce(function (sum, totals) {
        return sum + totals.exercises
    }, 0)

    return (
        <>
            <Course courses={courses} />
            <b>Total of {totalEx} exercises</b>

            <b>Total of {totalEx2} exercises</b>
        </>
    )
}

export default App
