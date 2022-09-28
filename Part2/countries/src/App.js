import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesSearch, setCountriesSearch] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handlecountriesSearch = (event) =>{
    console.log(event.target.value)
    setCountriesSearch(event.target.value)
  }

  const countriesToShow = countries.filter(countries => 
    countries.name.common.toLowerCase().includes(countriesSearch.toLowerCase()))

  return (
    <div>
      Find countries: <input value={countriesSearch} onChange={handlecountriesSearch}></input>
      {countriesToShow.length <= 10 ? 
        countriesToShow.map(country => <li>{country.name.common}</li>) : 
        <div>Too many matches, specify another filter.</div>}                
    </div>
    
  )
}

export default App
