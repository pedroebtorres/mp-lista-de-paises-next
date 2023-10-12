"use client"

import React from "react"
import CountryCard from "@/components/CountryCard"
import { LanguageData } from "@/interfaces/CountryData"

type Props = {
    languages: string[],
}

import { useCountries } from "@/hooks/useCountries"
import { CountryData } from "@/interfaces/CountryData";

const SameLanguageCountries = (props: Props) => {
    const {countries, error, isLoading} = useCountries();

    return (
        <div className="flex flex-wrap bg-gray-100 mx-72">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}            
            {(countries && props.languages) && 
            countries.filter((country: CountryData) =>{ 
                if(country.languages){
                const countryLanguages = Object.keys(country.languages);
                const commonLanguages = countryLanguages.filter((language: string) => props.languages.includes(language));
                return commonLanguages.length > 0;
            }
                return false;
            })   
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

export default SameLanguageCountries;