import './App.css'
import {Route, Switch} from 'react-router-dom'
import Login from './components/LoginPage/login'
import Home from './components/HomePage/home'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
