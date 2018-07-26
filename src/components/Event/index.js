/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Event = ({title, description}) => {
  return (
    <div
      className='content'
      style={{border: '1px solid #eaecee', padding: '2em 4em'}}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Event
