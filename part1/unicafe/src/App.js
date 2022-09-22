import { useState } from 'react'

const History = (props) => {
    if (props.allClicks.length === 0) {
        return <div>the app is used by pressing the buttons</div>
    }
    return <div>button press history: {props.allClicks.join(' ')}</div>
}

const Heading = (props) => {
    return <h1>{props.text}</h1>
}
const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>
}

const RunningCount = (props) => {
    return (
        <div>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
        </div>
    )
}

const Statistics = (props) => {
    return (
        <div>
            <p>all {props.total}</p>
            <p>average {props.average}</p>
            <p>positive {props.positive} %</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState([])

    function totalReviews() {
        return Number(good) + Number(neutral) + Number(bad)
    }
    function averageReviews() {
        return (Number(good) - Number(bad)) / 3
    }
    function positiveReviews() {
        return (
            (Number(good) /
                totalReviews(Number(good) + Number(neutral) + Number(bad))) *
            100
        )
    }

    const setToGood = (newGood) => {
        setGood(newGood)
        setAll(allClicks.concat('G'))
    }
    const setToNeutral = (newNeutral) => {
        setNeutral(newNeutral)
        setAll(allClicks.concat('N'))
    }
    const setToBad = (newBad) => {
        setBad(newBad)
        setAll(allClicks.concat('B'))
    }

    return (
        <div>
            <Heading text="give feedback" />
            <Button handleClick={() => setToGood(good + 1)} text="good" />
            <Button
                handleClick={() => setToNeutral(neutral + 1)}
                text="neutral"
            />
            <Button handleClick={() => setToBad(bad + 1)} text="bad" />
            <Heading text="statistics" />
            <RunningCount good={good} neutral={neutral} bad={bad} />
            <Statistics
                total={totalReviews(good, neutral, bad)}
                average={averageReviews()}
                positive={positiveReviews()}
            />
            <History allClicks={allClicks} />
        </div>
    )
}

export default App
