import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotificcation, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  //const anecdotes = useSelector(state => state.anecdotes)
 const anecdotes = useSelector(state => {
  return state.filter === ''
    ? state.anecdotes
    : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
 })
  //const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(addVote(anecdote.id))
    dispatch(setNotificcation(`You voted '${anecdote.content}'`))
    setTimeout(() => {dispatch(hideNotification())}, 5000)
  }

  const ordering = (a1, a2) => a2.votes - a1.votes

  return (
    <div>
      {anecdotes.sort(ordering).map(anecdote =>    
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList