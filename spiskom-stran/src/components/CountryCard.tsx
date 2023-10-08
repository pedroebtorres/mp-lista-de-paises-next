import React from "react";
import { CountryData } from "@/interfaces/CountryData"
import Image from "next/image";

type Props = {
    country: CountryData;
}

const imageStyle = {
    borderRadius: "15px",
    width: "219px",
    height: "131px",
}

const CountryCard = (props: Props) => {
    return (
        <div className="flex-1 text-center">
            <Image 
            src={props.country.flags.svg} 
            alt={`${props.country.name.common} Flag`}
            width={218}
            height={131}
            style={{
                ...imageStyle,
                objectFit: "cover"
              }}
            />
            <h1 className=" text-2xl text-gray-700">{props.country.name.common}</h1>
        </div>
    )
}

export default CountryCard;