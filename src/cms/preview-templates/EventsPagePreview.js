import React from 'react'
import PropTypes from 'prop-types'
import { EventsPageTemplate } from '../../templates/events-page'

const EventsPagePreview = ({ entry, getAsset }) => {
  const events = entry.getIn(['data', 'events'])

  return (
    <EventsPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      events={events}
    />
  )
}

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default EventsPagePreview
