import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotificcation, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    //console.log(event.target.anecdote.value)
    const newContent = event.target.content.value
    event.target.content.value = ''
    dispatch(createNewAnecdote(newContent))
    dispatch(setNotificcation(`You created '${newContent}'`))
    setTimeout(() => {dispatch(hideNotification())}, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name="content"/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm