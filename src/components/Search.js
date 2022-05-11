import React, { useState } from 'react'
import useFetch from '../UseFetch'
import { useParams,useNavigate } from "react-router-dom";


export default function Search() {
    const {data} = useFetch();
    const [filterData, setFilterData] = useState([]);
    
    const keys = ["name", "brewery_type", "street", "address_2", "address_3", "city", "state", "county_province", "postal_code", "country", "longitude", "latitude", "phone", "website_url"]

    const handleFilterChange = (event) => {
        const searchWord = event.target.value;
        const newFilterData = data.filter((brewery) => {
            return keys.some(key => brewery[key] && brewery[key].toLowerCase().includes(searchWord.toLowerCase())       
            )});
        if(searchWord === "") {
            setFilterData([])
        }else {
            setFilterData(newFilterData);
        }
    }

    const navigate = useNavigate(); //uudemassa react router versiossa useHistory() on korvatu useNavigate()
    

    const navigateToDetailCard = (id) => {
        navigate(`/detail/${id}`) 
    };

  return (
    <div style={{margin: "5px"}}>
        <input placeholder='Search...' onChange={handleFilterChange}/>
        {
            filterData.length !== 0 && (
                <div className='search-brewery-result'>
                    {
                        filterData.map(({name,id,brewery_type, street, address_2, address_3, city,state, county_province, postal_code, country, longitude, latitude, phone, website_url}) => {
                            return (
                                <div key={id} className='search-brewery' onClick={() => navigateToDetailCard(id)}>
                                    <h5>{name || brewery_type || street || address_2 || address_3 || city ||state || county_province || postal_code ||country ||longitude || latitude || phone || website_url}</h5>
                                </div>
                            )
                        })
                    } 
                </div>
            )
        }

    </div>
  )
}
