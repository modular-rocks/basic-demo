const number = 10

const example = (fn, env, type) => {
  return (action, scope) => {
    action.value = action.value * 10
    return fn(action, scope, number)
  }
}



export default {
  enhancers: {
    example
  },
}
