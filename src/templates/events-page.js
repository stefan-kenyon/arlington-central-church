/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Event from '../components/Event'

export const EventsPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  events,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                  <h2 className='subtitle'>
                    {subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          {events.map((evt, id) =>
            console.log('Event is', evt) || 
            <Event
              key={id}
              title={evt.title}
              description={evt.description}
              loc={evt.loc}
              time={evt.time}
              />
          )}
        </div>
      </section>
    </div>
  )
}

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  events: PropTypes.array
}

const EventsPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <EventsPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      events={frontmatter.events}
    />
  )
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EventsPage

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        events {
          title
          description
          loc
          time {
            start
            end
          }
        }
      }
    }
  }
`
