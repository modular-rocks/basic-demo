import React from 'react'

const Child = scope.components.child

export default function(props) {
  const [state, setState] = React.useState({})
  const updateValue = (e) => setState({ ...state, value: e.target.value  })

  const compute = () => scope.events.compute({ value, setState })

  const { value, result } = state

  return (
    <div className='container'>
      <h1>Scope A</h1>
      <input value={value} onChange={updateValue} />
      <button onClick={compute}> compute </button>

      <p className='result'>{result}</p>

      <Child />
    </div>
  )
}
