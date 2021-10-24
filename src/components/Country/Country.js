import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flags, name, capital } = props.country;
    return (
        <div className="country">
            <img style={{ width: '300px', height: '150px', paddingTop: '0px', borderRadius: '20px' }} src={flags.svg} alt="" />
            <h2>Name: {name.common}</h2>
            <h3>Official Name: {name.offname}</h3>
            <h4>Capital: {capital}</h4>
        </div >
    )
}

export default Country;