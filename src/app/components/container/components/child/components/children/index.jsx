import React from 'react'

export default function(props) {
  const [state, setState] = React.useState({})
  const updateValue = (e) => setState({ ...state, value: e.target.value  })

  const compute = () => scope.events.compute({ value, setState })

  const { value, result } = state

  console.log('Scope for Scope AAA ', scope)

  return (
    <div className='container'>
      <h1>Scope AAA</h1>
      <input value={value} onChange={updateValue} />
      <button onClick={compute}> compute </button>

      <p className='result'>{result}</p>
    </div>
  )
}
