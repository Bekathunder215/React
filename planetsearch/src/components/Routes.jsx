import React from 'react'
import { Results } from './Results'
import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom'
//import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'

export const Routes = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path="/">
          <Redirect to='/search'/>
        </Route>,
        <Route path to={['/search', '/images', '/news', '/videos']}>
          <Results />
        </Route>
      </Switch>
    </div>
  )
}
