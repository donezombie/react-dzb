import types from "../types"

export const login = (payload) => {
  return {
    payload,
    type: types.REQUEST_LOGIN,
  }
}