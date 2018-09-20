/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Event from '../components/Event'

const getiFrameHtml = () => ({  
  __html: '<iframe src="https://calendar.google.com/calendar/embed?title=ACC%20Events&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;hl=en&amp;bgcolor=%2333cc00&amp;src=arlingtoncentralchurch%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FChicago" style="border:solid 1px #777" width="100%" height="700px" frameborder="0" scrolling="no"></iframe>'
});

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
        <div className='container center'>
          <div dangerouslySetInnerHTML={getiFrameHtml()}></div>
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
          loc {
            name
            gmapslink
          }
          time {
            date
            start
            end
          }
        }
      }
    }
  }
`
