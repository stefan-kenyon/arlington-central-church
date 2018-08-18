/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const dateDataFormat = "MM/DD/YYYY";
const displayDateFormat = "MMM D, YYYY";

const parseDateStr = dateStr => moment(dateStr, dateDataFormat);
const formatDateToPrettyFormat = mom => mom.format(displayDateFormat)

const formatDate = input => formatDateToPrettyFormat(parseDateStr(input));

const EventLocation = ({loc: { name, gmapslink}}) => (
  <div>
    {gmapslink ? <a target="_blank" href={gmapslink}>{name}</a> : <p>{name}</p>}
  </div>
);

const Event = ({title, description, loc, time: { date, start, end }}) => {
  return (
    <div
      className='content'
      style={{border: '1px solid #eaecee', padding: '2em 4em'}}>
      <h2>{title}</h2>
      <p>{description}</p>
      <EventLocation loc={loc} />
      <p>From <span className="time start">{start}</span> to <span className="time end">{end}</span> on <span className="date">{formatDate(date)}</span></p>
    </div>
  )
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  loc: PropTypes.object,
  time: PropTypes.object
}

export default Event
