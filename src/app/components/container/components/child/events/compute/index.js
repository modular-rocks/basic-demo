export default (action, scope) => {
  const value = action.value * 30
  const state = action.state
  action.setState({ ...state, result: value })
  return
}
