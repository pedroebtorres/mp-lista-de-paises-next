"use client"

import React from "react"
import CountryCard from "@/components/CountryCard"

type Props = {
    borders: string[]
}

import { useCountries } from "@/hooks/useCountries"
import { CountryData } from "@/interfaces/CountryData";

const NeighborsCountries = (props: Props) => {
    const {countries, error, isLoading} = useCountries();

    return (
        <div className="flex flex-wrap bg-gray-100 mx-72">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}            
            {(countries && props.borders) && countries.filter((country: CountryData) => props.borders.includes(country.cca3))
            .map((country: CountryData, index: number) => {
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

export default NeighborsCountries;