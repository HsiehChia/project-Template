import { MyAppPage } from './page'

export default class myAppPageTest {
  invoicePortalStart() {
    describe('登入ip', () => {
      it('点击Start进入ip页面', () => {
        const myApp = new MyAppPage()
        // myApp.openUrl()
        const currentApp = myApp.invoicePortalStart
        myApp.chooseApp(currentApp)
      })
    })
  }

  bundleb2bStart() {
    describe('登入bundle', () => {
      it('点击Start进入bundle页面', () => {
        const myApp = new MyAppPage()
        // myApp.openUrl()
        const currentApp = myApp.bundleb2bStart
        myApp.chooseApp(currentApp)
      })
    })
  }
}