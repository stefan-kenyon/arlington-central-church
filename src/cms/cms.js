/**
 * Created by vaibhav on 31/3/18
 */
import CMS from 'netlify-cms'

import EventsPagePreview from './preview-templates/EventsPagePreview'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')

CMS.registerPreviewTemplate('events', EventsPagePreview)

/* TODO not sure what we need here - I don't think 'home' is set up properly... ?
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)
*/
