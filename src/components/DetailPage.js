import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const api_key = process.env.REACT_APP_MOVIE_API_KEY;

const DetailPage = () => {
    const id = useParams().id;
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchDetails = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
            const response = await axios.get(url);
            setDetail(response.data);           
        }
        fetchDetails();
    }, [id])
    console.log(detail);

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}/>
            <h2>{detail ? detail.title : ''}</h2>
            <p>{detail ? detail.release_date : ''}</p>
            <p>{detail ? detail.vote_average : ''}</p>
            <p>{detail ? detail.overview : ''}</p>
            <a href={`${detail.homepage}`} target="_blank">상세보기</a>
            {detail && detail.genres && (
                <div>
                    {detail.genres.map((item) => (
                        <span key={item.id}>{item.name} </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DetailPage