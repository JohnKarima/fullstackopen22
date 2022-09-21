import { useState } from 'react'

const Heading = (props) => {
    return <h1>{props.text}</h1>
}

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>
}

const GoodCount = (props) => {
    return (
        <div>
            <p>good {props.text}</p>
        </div>
    )
}
const NeutralCount = (props) => {
    return (
        <div>
            <p>neutral {props.text}</p>
        </div>
    )
}

const BadCount = (props) => {
    return (
        <div>
            <p>bad {props.text}</p>
        </div>
    )
}

const All = (props) => {
    return (
        <div>
            <p>total {props.text}</p>
        </div>
    )
}

const Average = (props) => {
    return (
        <div>
            <p>average {props.text}</p>
        </div>
    )
}

const Positive = (props) => {
    return (
        <div>
            <p>positive {props.text} %</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    function totalReviews() {
        return (Number(good) + Number(neutral)+ Number(bad))
    }
    function averageReviews() {
        return ((Number(good) -Number(bad))/3)
    }
    function positiveReviews() {
        return ((Number(good)/totalReviews(Number(good) + Number(neutral)+ Number(bad))*100))
    }

    const setToGood = (newGood) => {
        setGood(newGood)
    }
    const setToNeutral = (newNeutral) => {
        setNeutral(newNeutral)
    }
    const setToBad = (newBad) => {
        setBad(newBad)
    }

    return (
        <div>
            <Heading text="give feedback" />
            <Button handleClick={() => setToGood(good + 1)} text="good" />
            <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setToBad(bad + 1)} text="bad" />
            <Heading text="statistics" />
            <GoodCount text={good} />
            <NeutralCount text={neutral} />
            <BadCount text={bad} />
            <All text={totalReviews(good, bad, neutral)}/>
            <Average text={averageReviews()} />
            <Positive text={positiveReviews()}/>
        </div>
    )
}

export default App
