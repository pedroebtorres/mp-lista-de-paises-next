import React from "react";
import Image from "next/image";
import worldDraw from "../images/worldDraw.svg";

type Props = {
}

const Header = (props: Props) => {
    return (
        <header className="flex sticky top-0 bg-white h-20 items-center">
            <div className="ml-72 flex items-center font-bold">
            <Image 
            priority 
            src={worldDraw} 
            width={55} 
            height={55} 
            alt='world draw'
            className="mr-3"
            />
            <p className="h-8 mt-2">Países do mundo</p>
            </div>
        </header>
    )
}

export default Header;