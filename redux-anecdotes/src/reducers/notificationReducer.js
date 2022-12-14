import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotificcation: (state, action) => action.payload,
    hideNotification: (state) => null
  }
})

export const { setNotificcation, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer

let curTimeout = null
export const notification = (content, timeout) => {
  return async dispatch => {
    if (curTimeout !== null ){
      clearTimeout(curTimeout)
    }
    dispatch(setNotificcation(content))
    curTimeout = setTimeout(() => {
      dispatch(hideNotification())
    }, timeout)
  }
}

/*
const notificationReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'HIDE_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const setNotificcation = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION',
    notification: null
  }
}
*/

//export default notificationReducer