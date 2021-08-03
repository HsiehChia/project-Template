/// <reference types="cypress" />

describe('登录测试',()=>{
  beforeEach(() => {
    cy.visit('https://www.yuque.com/login')
    // 获取对象
    cy.get('[data-testid=prefix-phone-input]').type('13008151373')
    cy.get('[data-testid=loginPasswordInput]').type('hsieh0625{enter}')
  })
  it('当笔记存在时删除第一个笔记',() => {
    cy.get('.index-module_more_2S_Y3').first().click().then(() => {
      cy.get('[data-aspm-click=d73377_0]').click()
    })
  })

})