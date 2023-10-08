import React from "react";
import { CountryData } from "@/interfaces/CountryData"
import CountryLanguages from "./CountryLanguages";
import Image from "next/image";

type Props = {
    country: CountryData;
}

const imageStyle = {
    borderRadius: "24px",
    width: "458px",
    height: "275px",
}
const CountryDetails = (props: Props) => {
    return (
        <div className="flex-1 text-center mt-3">
            <h1 className=" text-5xl text-gray-800 font-bold">{props.country.name.common}</h1>
            <div className="flex justify-center mt-7 bg-white mx-20 p-10 rounded-xl">

            <div className="flex-1 flex-col text-start">
                <p className='my-4'><strong>🏙️ Capital:</strong> {props.country.capital[0]}</p>
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
                />
            </div>            
                </div>
        </div>
    )
}

export default CountryDetails;

