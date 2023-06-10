import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header/header'
import './home.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    trendingApiStatus: apiStatusConstants.initial,
    OriginalApiStatus: apiStatusConstants.initial,
    trendingList: [],
    originalList: [],
    randomMovie: {},
  }

  componentDidMount() {
    this.getTrendingMoviesList()
    this.getOriginalMoviesList()
  }

  getOriginalMoviesList = async () => {
    this.setState({originalApiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/movies-app/originals'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const randomMovieIndex = Math.floor(Math.random() * data.results.length)
      this.setState({
        originalApiStatus: apiStatusConstants.success,
        originalList: data.results,
        randomMovie: data.results[randomMovieIndex],
      })
    } else {
      this.setState({originalApiStatus: apiStatusConstants.failure})
    }
  }

  getTrendingMoviesList = async () => {
    this.setState({trendingApiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/movies-app/trending-movies'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({
        trendingApiStatus: apiStatusConstants.success,
        trendingList: data.results,
      })
    } else {
      this.setState({
        trendingApiStatus: apiStatusConstants.failure,
      })
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="home-page">Hello</div>
      </>
    )
  }
}

export default Home
