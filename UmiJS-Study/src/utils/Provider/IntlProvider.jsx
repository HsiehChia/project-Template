import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

import { WebsiteConf } from '../config/website.conf'
import { toReactIntl } from '../helper'


const LocaleIntlProvider = ({ appState, ...props }) => {
  // const { locale } = appState.storeConfig
  const messages = appState?.i18n ?? {}
  // const currentLocale = locale || WebsiteConf.locale
  const currentLocale = WebsiteConf.locale
  const language = toReactIntl(currentLocale)

  const onIntlError = (error) => {
    if (messages) {
      if (error.code === 'MISSING_TRANSLATION') {
        console.warn('Missing translation', error.message)
        return
      }
      throw error
    }
  }

  // console.log(currentLocale, appState, props);

  return (
    <IntlProvider
      key={language}
      defaultLocale={toReactIntl(currentLocale)}
      locale={language}
      messages={messages}
      {...props}
      onError={onIntlError}
    />
  )
}

const mapStateToProps = ({ app }) => ({ appState: app })

export default connect(mapStateToProps)(LocaleIntlProvider)

