const number = 10

const tenfold = (fn, env, type) => {
  return (action, scope) => {
    action.value = action.value * 10
    return fn(action, scope, number)
  }
}

const files = (module, env, type) => {
  if (env.files.length > 10) {
    return 'A lot of files'
  }

  return 'some files'
}

export default {
  decorators: {
    tenfold,
    files
  },
}
