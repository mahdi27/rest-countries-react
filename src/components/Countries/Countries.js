import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Traveling arround the world</h2>
            <h4>Countries available: {countries.length}</h4>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                    // name={country.name.common}
                    // capital={country?.capital}
                    // flag={country?.flags?.svg}
                    // offname={country?.name.official}
                    ></Country>)
                }
            </div>
        </div>
    )
}


export default Countries;