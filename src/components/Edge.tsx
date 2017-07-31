import * as React from 'react'

export interface OwnProps {
  to         : string,
  from       : string,
  children?  : React.ReactChildren,
  component? : React.ReactChild,
}

const Edge = (props: OwnProps) => {

  const { to, from, children, component } = props

  const decendant = children ? children : component

  return (
    <div
      className={ 'react-graph-edge' }
      data-to={ to }
      data-from={ from }
    >
     { decendant }
    </div>
  )
}

export default Edge
