import * as React from 'react'

export interface OwnProps {
  children?  : React.ReactChildren,
  component? : React.ReactChild,
}

const Graph = (props: OwnProps) => {

  const { children } = props

  return (
    <div className={ 'react-graph' }>
      { children }
    </div>
  )
}

export default Graph
