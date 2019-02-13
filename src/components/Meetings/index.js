/**
 * Created by stefankenyon on 01JAN2019
 */
import React from 'react'
import PropTypes from 'prop-types'

const Meetings = ({type, desc, look}) => {
  return (
    <div className='column' style={{margin:'1px'}}>
      <h2 className='has-text-centered'style={{fontSize:'30px', fontWeight:'bold'}}>{type}</h2>
      <p>{desc}</p>
      <p>{look}</p>
    </div>
  )
}

Meetings.propTypes = {
  type: PropTypes.string,
  desc: PropTypes.string,
  look: PropTypes.string
}

export default Meetings
