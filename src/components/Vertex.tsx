import * as React from 'react'

export interface OwnProps {
  id         : string,
  to?        : string|string[],
  from?      : string|string[],
  children?  : React.ReactChildren,
  component? : React.ReactChild,
}

const Vertex = (props: OwnProps) => {

  const { id, to, from, children, component } = props

  const decendant = children ? children : component

  return (
    <div
      id={ id }
      className={ 'react-graph-vertex' }
      data-to={ to }
      data-from={ from }
    >
     { decendant }
    </div>
  )
}

export default Vertex
