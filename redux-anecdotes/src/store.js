import { combineReducers, configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
//import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})
const store = configureStore({
  reducer
})

//anecdoteService.getAll().then(anecdotes => 
  //store.dispatch(setAnecdotes(anecdotes))  
//)

export default store