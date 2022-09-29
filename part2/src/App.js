const Course = (props) => {
    return <h1>{props.text}</h1>
}

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

    console.log(totalEx)

    var totalEx2 = courses[1].parts.reduce(function (sum, totals) {
        return sum + totals.exercises
    }, 0)

    console.log(totalEx2)

    return (
        <>
            <Course courses={courses} />
            <Header courses={courses[0].name} />
            <Content parts={courses[0].parts} />
            <div>
                <b>Total of {totalEx} exercises</b>
            </div>

            <Header courses={courses[1].name} />
            <Content parts={courses[1].parts} />
            <div>
                <b>Total of {totalEx2} exercises</b>
            </div>
        </>
    )
}

export default App
