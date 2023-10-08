import React from "react";
import { LanguageData } from "@/interfaces/CountryData";

type Props = {
    languages: LanguageData;
}
const CountryLanguages = (props: Props) => {
    return(
        <div className="my-4">
            <strong>🗣️ Línguas faladas:</strong>
            <div className="flex flex-wrap">           
                {Object.entries(props.languages).map(([code, language]) => (
                    <span
                        className="bg-indigo-700 rounded-3xl px-3 py-1 m-1 text-white text-base font-normal" 
                        key={code}
                    >
                        {language}
                    </span>
                ))}
            </div>
        </div>
    )   
}

export default CountryLanguages;

