import './styles.sass'

import ReactDOM from 'react-dom'
import React from 'react'

import Component from './app/components/container/index.jsx'

import ModularRocks from '@modular-rocks/webpack'

console.log("ModularRocks", ModularRocks)
window.scope = ModularRocks.get();
console.log("ModularRocks get ", window.scope)

const el = document.getElementById('place')
const app = React.createElement(Component, {})


ReactDOM.render(app, el)
