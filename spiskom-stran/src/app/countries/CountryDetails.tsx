import React from "react";
import { CountryData } from "@/interfaces/CountryData"
import CountryLanguages from "../../components/CountryLanguages";
import Image from "next/image";
import NeighborsCountries from "./NeighborsCountries";
import SameLanguageCountries from "./SameLanguageCountries";
import Link from 'next/link';
import arrow from "../../images/arrow.svg";

type Props = {
    country: CountryData;
}

const imageStyle = {
    borderRadius: "24px",
    width: "458px",
    height: "275px",
}
const CountryDetails = (props: Props) => {
    console.log(props.country);
    return (
        <div className="flex-1 text-center mt-3">
            <h1 className=" text-5xl text-gray-800 font-bold">{props.country.name.common}</h1>
            <Link href="/countries">
                <div className="flex ml-72 mt-3 content-center">
                <Image src={arrow} alt="Voltar Arrow" width={25} height={25} />
                <p className="self-center text-xl">Voltar</p>
                </div>
            </Link>
            <div className="flex justify-center mt-7 bg-white ml-72 mr-64 p-10 rounded-xl">

                <div className="flex-1 flex-col text-start">
                    {props.country.capital && <p className='my-4'><strong>🏙️ Capital:</strong> {props.country.capital[0]}</p>}
                    <p className='my-4'><strong>🗺️ Continente: </strong>{props.country.region}</p>
                    <p className='my-4'><strong>👨‍👩‍👧‍👦 População: </strong>{(props.country.population / 1000000).toFixed(1)}M</p>
                    <CountryLanguages languages={props.country.languages}/>
                </div>
                <div className="flex-1 justify-center">
                    <Image 
                    src={props.country.flags.svg} 
                    alt={`${props.country.name.common} Flag`}
                    width={458}
                    height={275}
                    style={{
                        ...imageStyle,
                        objectFit: "cover"
                    }}
                    className="  content-end"
                    />
                </div>            
            </div>
            <div>
            <h1 className="text-3xl text-gray-800 font-bold text-start ml-72 my-24 ">Países que fazem fronteira</h1>
                    <NeighborsCountries borders={props.country.borders}/>
            </div>
            <div>
            <h1 className="text-3xl text-gray-800 font-bold text-start ml-72 my-24 ">Países que falam o mesmo idioma</h1>
                    <SameLanguageCountries languages={Object.keys(props.country.languages)}/>
            </div>
        </div>
    )
}

export default CountryDetails;

