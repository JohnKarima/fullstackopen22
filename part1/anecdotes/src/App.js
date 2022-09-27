import { useState } from 'react'
const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Anecdote = ({ text, votes }) => {
    return (
        <div>
            {text} <br /> has {votes} votes
        </div>
    )
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
    const [votes, setVotes] = useState(anecdotes.map((x) => 0))

    const randomAnecdote = () => {
        const index = Math.floor(Math.random() * anecdotes.length)
        setSelected(index)
    }

    const castVote = (value) => {
        const arr = [...votes]
        arr[value]++
        setVotes(arr)
    }

    const topVote = votes.indexOf(Math.max(...votes))

    return (
        <div>
            <Header text="Anecdote of the day" />
            <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
            <Button text="vote" onClick={() => castVote(selected)} />
            <Button text="next anecdote" onClick={randomAnecdote} />
            <Header text="Anecdote with the most votes" />
            <Anecdote text={anecdotes[topVote]} votes={votes[topVote]} />
        </div>
    )
}

export default App
