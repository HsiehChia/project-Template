import loginPageTest from './login_page.spec'
import myAppPageTest from './myApp_page.spec'

// describe('app测试',function() {
//   before(()=>{
//     const loginPageTestObj = new loginPageTest()
//     loginPageTestObj.loginTest()
//   })
//   it('login', ()=> {
//     const myAppPageTestObj = new myAppPageTest()
//     console.log(myAppPageTestObj.__proto__.invoicePortalStart)
//   })
// })

describe('Hooks', () => {
  it('login',()=>{
    const loginPageTestObj = new loginPageTest()
    loginPageTestObj.loginTest()
    const myAppPageTestObj = new myAppPageTest()
    console.log(myAppPageTestObj.__proto__.invoicePortalStart)
  })
})