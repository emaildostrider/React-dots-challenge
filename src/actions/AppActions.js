import { CHANGE_NUMBER } from './types'

export const changeNumber = (number) => {
  return {
    type: CHANGE_NUMBER,
    payload: number
  }
}