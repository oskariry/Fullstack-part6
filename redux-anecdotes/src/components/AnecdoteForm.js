import { connect } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  //const dispatch = useDispatch()

  const createAnecdote = async (event) => {
    event.preventDefault()
    const newContent = event.target.content.value
    event.target.content.value = ''
    //dispatch(createNewAnecdote(newContent))
    //dispatch(notification(`You created '${newContent}'`, 5000))
    props.createNewAnecdote(newContent)
    props.notification(`You created '${newContent}'`, 5000)
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


export default connect(
  null, 
  { createNewAnecdote, notification }
  )(AnecdoteForm)