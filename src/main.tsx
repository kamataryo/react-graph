import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import Graph from './components/Graph'
import Vertex from './components/Vertex'
import Edge from './components/Edge'

const ROOT = document.getElementById('app')

// Go!
render(
  <HMRContainer>
    <Graph>
      <Vertex id={ 'v1' } />
      <Vertex id={ 'v2' } to={ 'v1' } />
      <Vertex id={ 'v3' } to={ 'v1' } from={ 'v2' } />
      <Edge from={ 'v3' } to={ 'v2' } />
    </Graph>
  </HMRContainer>,
  ROOT,
)

// Hot Module Replacement settings
if (module.hot) {
  module.hot.accept('./components/Graph', () => {
    const Next = require('./components/Graph').default
    render(
      <HMRContainer>
        <Next>
          <Vertex id={ 'v1' } />
          <Vertex id={ 'v2' } to={ 'v1' } />
          <Vertex id={ 'v3' } to={ 'v1' } from={ 'v2' } />
          <Edge from={ 'v3' } to={ 'v2' } />
        </Next>
      </HMRContainer>,
      ROOT,
    )
  })
}
