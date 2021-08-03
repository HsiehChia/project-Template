import locator from '../locate'

export default class DashboardPage {
  get dashboard() {
    return cy.get(locator.bundleDashboard.dashboardTitle).find('.MuiListItem-button')
  }

  chooseDashboard(dashboardTitle) {
    // dashboardTitle.trigger('mouseover')
    dashboardTitle.click()
  }
  test(){
    console.log(locator)
  }
}
// div>div:nth-child(5)