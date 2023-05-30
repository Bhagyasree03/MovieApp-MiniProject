import {Component} from 'react'
import Cookies from 'js-cookie'
import './login.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onError = error => {
    this.setState({showSubmitError: true, errorMsg: error})
    console.log(error)
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onError(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state

    return (
      <div className="bg-login">
        <h1 className="login-heading">MOVIES</h1>
        <form onSubmit={this.submitForm} className="login-card">
          <h1 className="login-card-heading">Login</h1>
          <div className="input-login">
            <label htmlFor="input-text" className="text-card">
              USERNAME
            </label>
            <input
              type="text"
              className="user-text"
              id="input-text"
              onChange={this.onChangeUsername}
              value={username}
            />
          </div>
          <div className="input-login">
            <label htmlFor="input-pswd" className="text-card">
              PASSWORD
            </label>
            <input
              type="password"
              className="user-text"
              id="input-pswd"
              onChange={this.onChangePassword}
              value={password}
            />
          </div>
          {showSubmitError && <p className="invalid-text">{errorMsg}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
          <button type="submit" className="sign-button">
            Sign in
          </button>
        </form>
      </div>
    )
  }
}
export default Login
