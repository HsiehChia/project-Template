import locator from './locator.json'

export default class MyAppPage {
  // 初始化地址
  constructor() {
    this.url = 'http://localhost:3000/?storehash=1i6zpxpe3g#/my-apps'
  }
  // 封装页面对象
  get invoicePortalStart() {
    return cy.get(locator.myAppPage.start).first()
  }

  get bundleb2bStart() {
    return cy.get(locator.myAppPage.start).last()
  }
  // 访问地址
  openUrl(){
    cy.visit(this.url)
  }
  // 点击选择app业务流
  chooseApp(startBtn) {
    startBtn.click()
  }
}