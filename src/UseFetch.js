import {useState, useEffect} from "react";

const url = 'https://api.openbrewerydb.org/breweries';

export default function UseFetch() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
        const response = await fetch(url)
        const breweries = await response.json()
        setData(breweries);

        }
        getData()
    }, [url])

    return {data}
}
