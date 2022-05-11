import React from 'react'
import useFetch from '../UseFetch'
import { useParams,useNavigate } from "react-router-dom";

export default function Detail() {
    const {data} = useFetch();
    const { id } = useParams();
    const navigate = useNavigate(); //uudemassa react router versiossa useHistory() on korvatu useNavigate()
    
    const goBackToCards = () => {
        navigate("/") 
    };

    return (
        <div className='detail-modal'>
            {data.filter((brewery) => brewery.id === id).map((brewery) => {
                return (
                    <div key={brewery.id} className="detail-container">
                        <h2>Name: <span>{brewery.name}</span></h2>
                        <h2>Type: <span>{brewery.brewery_type}</span></h2>
                        <h2>Street: <span>{brewery.street===null? "Empty...": brewery.street }</span></h2>
                        <h2>City: <span>{brewery.city}</span></h2>
                        <h2>State: <span>{brewery.state}</span></h2>
                        <h2>Postal Code: <span>{brewery.postal_code}</span></h2>
                        <h2>country: <span>{brewery.country}</span></h2>
                        <h2>Phone: <span>{brewery.phone}</span></h2>
                        <button className='detail-btn' onClick={goBackToCards}>Go Back</button>
                    </div>
                );
            })}
        </div>
    )
}