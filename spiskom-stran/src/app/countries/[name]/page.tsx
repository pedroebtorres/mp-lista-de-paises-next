/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import CountryDetails from "../CountryDetails";
import { CountryData } from "@/interfaces/CountryData";
import { fetchCountryByName } from "@/utils/fetchCountries";
import React, {useEffect, useState} from "react";
import Header from "@/components/Header";

type Props = {
    params: {
        name: string;
    }
}


export default function CountryPage(props: Props) {
    const [country, setCountry] = useState<CountryData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const fetchedCountry = await fetchCountryByName(props.params.name);
            setCountry(fetchedCountry);
        }

        fetchData();
    }, []);

    return (
        <main className="h-screen overflow-y-auto w-screen text-black bg-gray-100 font-sans">
        <Header />
            {country !== null ? (
                <CountryDetails country={country} />
            ) : (
                <p>Loading...</p>
            )}

        </main>
    );
}