"use client"
import React, { useEffect } from 'react'

type Props = {

}

import { useCountries } from "@/hooks/useCountries";
import { CountryData } from "@/interfaces/CountryData";

const CountriesList = (props: Props) => {
    const {countries, error, isLoading} = useCountries();
    return(
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <div>
            {countries && countries.map((country: CountryData, index: number) => {
                return <div key={index}>{country.name.common}</div>
            })}
            </div>
        </div>
    )
}

export default CountriesList;
