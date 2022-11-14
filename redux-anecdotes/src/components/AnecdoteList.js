import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  //const anecdotes = useSelector(state => state.anecdotes)

  const getAnecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === null) {
      return anecdotes
    }
    return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  })
  const anecdotes = [...getAnecdotes]

  const dispatch = useDispatch()

  const voteHandler = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(vote(anecdote))
    dispatch(notification(`You voted '${anecdote.content}'`, 5000))
  }

  const ordering = (a1, a2) => a2.votes - a1.votes

  const sortedAnecdotes = anecdotes.sort(ordering)
  return (
    <div>
      {sortedAnecdotes.map(anecdote =>    
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteHandler(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList