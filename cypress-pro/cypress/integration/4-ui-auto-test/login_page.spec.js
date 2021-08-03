import { LoginPage } from './page'

describe('登录', () => {
  it('输入email和password可以登录成功', () => {
    // 登录
    const loginPage = new LoginPage()
    loginPage.openUrl()
    loginPage.login('jane.xie@bundleb2b.net', 'test123456')
    cy.url().should('contain', '/my-apps').then(()=>{
      // ip test
      loginPage.chooseApp(loginPage.invoicePortalStart)
      cy.url().should('contain', '/invoice-portal')

      // bundle test
      // loginPage.chooseApp(loginPage.bundleb2bStart)
      // cy.url().should('contain', '/dashboard')
    })
    
  })
})

