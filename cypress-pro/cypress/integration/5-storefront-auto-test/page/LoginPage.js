import locators from "./locators"

export default class LoginPage {
  constructor(){
    this.url = 'http://localhost:3000/dashboard/'
  }
  get signInBtn() {
    return cy.get(locators.loginLocator.signInBtn)
  }

  openUrl(){
    cy.visit(this.url)
  }

  signInClick(signInButton) {
    signInButton.click()
  }
}