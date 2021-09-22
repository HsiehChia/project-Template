import Base from './Base'

export default class User extends Base {
  login() {
    return {
      username: 'jane',
      password: '123456',
    }
  }
}