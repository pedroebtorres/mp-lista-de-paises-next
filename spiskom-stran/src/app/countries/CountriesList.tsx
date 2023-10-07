"use client"
import React, { useEffect } from 'react'
import CountryCard from '@/components/CountryCard';
type Props = {

}

import { useCountries } from "@/hooks/useCountries";
import { CountryData } from "@/interfaces/CountryData";

const CountriesList = (props: Props) => {
    const {countries, error, isLoading} = useCountries();
    return(
        <div className="flex justify-center flex-row">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <div>
            {countries && countries.map((country: CountryData, index: number) => {
                return <div className='flex-wrap flex-row flex-grow' key={index}><CountryCard country={country} /></div>
            })}
            </div>
        </div>
    )
}

export default CountriesList;
