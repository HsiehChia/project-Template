import {
  LoginPage,
  DashboardPage,
} from './page'

describe('ip登录', () => {
  before(() => {
    // 登录
    const loginPage = new LoginPage()
    loginPage.openUrl()
    loginPage.login('jane.xie@bundleb2b.net', 'test123456')
    cy.url().should('contain', '/my-apps').then(()=>{
      // ip test
      loginPage.chooseApp(loginPage.invoicePortalStart)
      cy.url().should('contain', '/invoice-portal')
    })
  })
})


describe.only('bundle登录', () => {
  before(()=>{
    // 登录
    const loginPage = new LoginPage()
    loginPage.openUrl()
    loginPage.login('jane.xie@bundleb2b.net', 'test123456')
    cy.screenshot('login_page_test_loginAction')
    cy.url().should('contain', '/my-apps').then(()=>{
    // bundle test
    loginPage.chooseApp(loginPage.bundleb2bStart)
    cy.screenshot('login_page_test_chooseBundleApp')
    cy.url().should('contain', '/dashboard')
    })
  })
  it('进入dashboard', () =>{
    const dashboardPage = new DashboardPage()
    dashboardPage.chooseDashboard(dashboardPage.dashboard)
  })
})

