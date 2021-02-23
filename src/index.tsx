import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

const Root = document.getElementById('root')

const Test = () => {
  return (
    <div className='test'>
      <div>
        <div>Freeplsane</div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <Route path='/' component={Test}></Route>
  </Router>,
  Root
)
