import {NEW_TEXT, SET_HOVER, TICK, SET_COLOR} from './constants'

export function newText (text) {
  return {
    type: NEW_TEXT,
    text
  }
}

export function setHover (letter) {
  return {
    type: SET_HOVER,
    letter
  }
}

export function tick () {
  return {
    type: TICK
  }
}

export function setColor (user, color) {
  return {
    type: SET_COLOR,
    user,
    color
  }
}
