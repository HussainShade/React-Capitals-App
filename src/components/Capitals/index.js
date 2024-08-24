import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    selectedCapital: countryAndCapitalsList[0].id,
  }

  onCapitalChange = event => {
    this.setState({selectedCapital: event.target.value})
  }

  render() {
    const {selectedCapital} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectedCapital,
    ).country

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-input-container">
            <select
              name="capital"
              id="select-capital"
              value={selectedCapital}
              onChange={this.onCapitalChange}
              className="dropdown"
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="question" htmlFor="select-capital">
              is capital of which country?
            </label>
          </div>
          <p className="country-name">{selectedCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
