import CountriesList from "./CountriesList"
import Header from "@/components/Header"

export default async function Countries(){
    return(
        <main className="h-screen overflow-y-auto w-screen text-gray-800 bg-gray-100 font-sans">
            <Header />
            <CountriesList />
        </main>
    )
}