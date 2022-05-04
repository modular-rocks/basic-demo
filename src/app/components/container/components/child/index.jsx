import React from 'react'

const Children = scope.components.children

export default function(props) {
  const [state, setState] = React.useState({})
  const updateValue = (e) => setState({ ...state, value: e.target.value  })

  const compute = () => scope.events.compute({ value, setState })

  const { value, result } = state

  return (
    <div className='container'>
      <h1>Scope AA</h1>
      <input value={value} onChange={updateValue} placeholder='Input a number' />
      <button onClick={compute}> compute </button>

      <p className='result'>{result}</p>

      <Children />
    </div>
  )
}
