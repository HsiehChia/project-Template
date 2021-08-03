import { LoginPage } from './page'
import myAppPageTest from './myApp_page.spec'

export default class loginPageTest {
  // login业务实现
  loginTest () {
    describe('登录', () => {
      it('输入email和password可以登录成功', () => {
        // 登录
        const loginPage = new LoginPage()
        loginPage.openUrl()
        loginPage.login('jane.xie@bundleb2b.net', 'test123456')
        cy.url().should('contain', '/my-apps')
      })
    })
  }
}
