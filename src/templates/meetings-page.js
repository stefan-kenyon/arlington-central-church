/**
 * Created by stefankenyon on 01JAN2019
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Meetings from '../components/Meetings'

export const MeetingsPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  meetings,
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
          <div className='columns is-hcentered'>
            <p className='column has-text-centered'>We try to alternate every other Sunday between Family Groups and Gatherings. We believe strong community is developed when able to meet up consistently as a Family Group and a body.</p>
          </div>
          <div className='columns is-hcentered'>
            {
              meetings.map((meeting, id) =>
                <Meetings key={id} type={meeting.type} desc={meeting.desc} look={meeting.look}/>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

MeetingsPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  meetings: PropTypes.array,

}

const MeetingsPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <MeetingsPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      meetings={frontmatter.meetings}
    />
  )
}

MeetingsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MeetingsPage

export const meetingsPageQuery = graphql`
  query MeetingsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        meetings {
          type
          desc
          look
        }
      }
    }
  }
`
