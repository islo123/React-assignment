import React from 'react'
import useFetch from '../UseFetch'
import { useNavigate } from "react-router-dom";

export default function Card() {
    const {data} = useFetch();
    const navigate = useNavigate(); //uudemassa react router versiossa useHistory() on korvatu useNavigate()

    const handleDetail = (id) => {
        navigate(`/detail/${id}`) 
    };

    return (
        <div className='card-container'>
            {
                data.map((brewery) => {
                    return (
                    <div className='card' key={brewery.id}>
                        <h3>{brewery.name}</h3>
                        <h3>{brewery.brewery_type}</h3>
                        <h3>{brewery.city}</h3>
                        <div className='card-btn' onClick={() => handleDetail(brewery.id)}>View Detail</div>
                    </div>
                    )
                })
            }
        </div>
    )
}
