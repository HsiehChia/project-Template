import { LoginPage } from './page'
import locators from './page/locators'

describe('login test', function () {
  it('sign in', function () {
    cy.log(11, locators)
    const loginPage = new LoginPage()
    loginPage.openUrl()
    loginPage.signInClick(loginPage.signInBtn)
  })
})