import { CountryData } from "@/interfaces/CountryData";

export async function fetchCountries(){
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    return data;
}

export async function fetchCountryByName(name: string){
    const decodedName = decodeURI(name);
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();
    return data.find((country: CountryData) => country.name.common === (decodedName));
}