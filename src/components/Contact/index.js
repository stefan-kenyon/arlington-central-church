/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({email, name, title}) => {
  return (
    <div
      className='content'
      style={{border: '1px solid #eaecee', padding: '2em 4em'}}>
      <p>{name}</p>
      <p>{title}</p>
      <p><a href={`mailto:${email}`}>{email}</a></p>
    </div>
  )
}

Contact.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
}

export default Contact
