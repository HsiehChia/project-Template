import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom'
import { Login } from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/login"/>
          <Route path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
