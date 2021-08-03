import locator from './locator.json'

export default class LoginPage {
  // 初始化地址
  constructor() {
    this.url = 'http://localhost:3000/?storehash=1i6zpxpe3g#/login'
  }
  // 封装页面对象
  get email() {
    return cy.get(locator.loginPage.email)
  }

  get password() {
    return cy.get(locator.loginPage.password)
  }

  get loginBtn() {
    return cy.get(locator.loginPage.loginBtn)
  }
  // 访问地址
  openUrl(){
    cy.visit(this.url)
  }

  // 登录业务流
  login(email, password) {
    if(email !== '') {
    this.email.type(email)
    }
    if(password !== '') {
    this.password.type(password)
    }
    this.loginBtn.click()
  }
}