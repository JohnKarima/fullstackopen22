import { useState } from 'react'

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    ]

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // const randomAnecdoteNumber = getRndInteger(0, 6)
    // console.log(randomAnecdoteNumber)

    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(0)


    const setToSelected = (newSelected) => {
        setSelected(newSelected)
    }

    const setToVote = (newVote) => {
        setVote(newVote)
    }

    const points = { 0: 1, 1: 3, 2: 0, 3: 2 }
    const copy = { ...points }
    // increment the property 2 value by one
    let new2 = copy[2] += 1

    console.log([points[2]])



    return (
        <div>
            {anecdotes[selected]}
            <div>
            <Button
                handleClick={() => setToSelected(getRndInteger(0, 6))}
                text="next anecdote"
            />
            {/* <Button handleClick={() => setToVote(vote + 1)} text="vote" /> */}
            <Button text="vote" />
            </div>
        </div>
    )
}

export default App
