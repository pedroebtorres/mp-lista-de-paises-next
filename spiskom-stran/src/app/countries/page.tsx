import CountriesList from "./CountriesList"

export default async function Countries(){
    return(
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1>Countries</h1>
            <CountriesList />
        </main>
    )
}