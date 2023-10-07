import React from "react";
import { CountryData } from "@/interfaces/CountryData"
import Image from "next/image";

type Props = {
    country: CountryData;
}

const CountryCard = (props: Props) => {
    return (
        <div>
            <Image 
            src={props.country.flags.svg} 
            alt={`${props.country.name.common} Flag`}
            width={100}
            height={100} 
            />
            <h1>{props.country.name.common}</h1>
        </div>
    )
}

export default CountryCard;