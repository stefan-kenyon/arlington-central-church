/**
 * Created by vaibhav on 31/3/18
 */
import CMS from 'netlify-cms'

import EventsPagePreview from './preview-templates/EventsPagePreview'

CMS.registerPreviewStyle('/styles.css')

CMS.registerPreviewTemplate('events', EventsPagePreview)

