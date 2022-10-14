
const CountryInformation =({country}) =>{
    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>
                Capital: {country.capital}
                Area: {country.area} <br></br>
            </p>
            <h4>Languages:</h4>
            <ul>
                {country.languages.map(language => 
                    <li key = {language.name}> {language.name}</li>)}
            </ul>
        </div>
    )
}

export default CountryInformation