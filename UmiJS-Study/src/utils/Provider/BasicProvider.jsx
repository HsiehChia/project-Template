import { createContext, useContext, useMemo } from 'react'
import { bindActionCreators as reduxBindActionCreators } from 'redux'

const BasicContext = createContext()

export const bindActionCreators = (actions, dispatch) =>
  Object.entries(actions).reduce((acc, [name, value]) => {
    const bind =
      typeof value === 'function' ? reduxBindActionCreators : bindActionCreators
    acc[name] = bind(value, dispatch)
    return acc
  }, {})

const BasicProvider = ({ storeConfig }) => {
  const contextValue = useMemo(() => [appState, appApi], [appApi, appState])

  return <BasicContext.Provider value={contextValue}>{children}</BasicContext.Provider>
}

const mapStateToProps = ({ storeConfig }) => ({ storeConfig })

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(appActions, dispatch),
  asyncActions: bindActionCreators(appAsyncActions, dispatch)
})

export const useBasicContext = () => useContext(BasicContext)

export default connect(mapStateToProps, mapDispatchToProps)(AppContextProvider)
