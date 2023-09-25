import React from 'react'
import { useParams } from 'react-router-dom'

const Private = () => {
  let { id } = useParams();

  return (
    <div>Private {id}</div>
  )
}

export default Private