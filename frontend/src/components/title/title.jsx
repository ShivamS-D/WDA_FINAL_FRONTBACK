import React from 'react'
import './title.css'
const title = ({para,head}) => {
  return (
    <div className='title'>
      <p>{para}</p>
      <div className='yes'>
      <h2>{head}</h2>
      </div>
    </div>
  )
}

export default title
