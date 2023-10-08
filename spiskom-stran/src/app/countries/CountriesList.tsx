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
        <div className="flex flex-wrap bg-gray-100">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}            
            {countries && countries.map((country: CountryData, index: number) => {
                return <div 
                className="bg-white rounded-xl p-3 m-3 flex w-60 h-56" 
                key={index}
                >
                    <CountryCard country={country} />
                </div>
            })}            
        </div>
    )
}

export default CountriesList;
