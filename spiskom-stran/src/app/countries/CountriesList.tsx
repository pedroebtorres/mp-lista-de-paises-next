"use client"
import React, { useEffect, useState } from 'react'
import CountryCard from '@/components/CountryCard';
import Image from 'next/image';
type Props = {

}

import { useCountries } from "@/hooks/useCountries";
import { CountryData } from "@/interfaces/CountryData";
import search from "../../images/search.svg";

const CountriesList = (props: Props) => {
    const {countries, error, isLoading} = useCountries();
    const [filter, setFilter] = useState('');
    return(
        <div className="flex flex-col">
            <div 
            className="bg-gray-200 rounded-xl mx-72 p-2 w-96 self-center flex"
            >
            <Image 
            priority
            src={search} 
            alt="Pesquisar" 
            width={25} 
            height={25}
            className='' 
            />
            <input 
            type="text" 
            onChange={(event) => setFilter(event.target.value)} 
            placeholder="Pesquisar país"
            className='bg-gray-200 flex-1 border-0'
            />
            </div>
            <div className="flex flex-wrap bg-gray-100 mx-72">

                {isLoading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}            
                {countries && 
                countries
                .filter((country: CountryData) => country.name.common.toLowerCase().includes(filter.toLowerCase()))
                .map((country: CountryData, index: number) => {
                    return <div 
                    className="bg-white rounded-xl p-3 m-3 flex w-60 h-56" 
                    key={index}
                    >
                        <CountryCard country={country} />
                    </div>
                })}            
            </div>
        </div>
    )
}

export default CountriesList;
