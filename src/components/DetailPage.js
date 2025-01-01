import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './styles/detailPage.scss';
import Videos from "./Videos";

const api_key = process.env.REACT_APP_MOVIE_API_KEY;

const DetailPage = () => {
    const id = useParams().id;
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchDetails = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=ko-KR`
            const response = await axios.get(url);
            setDetail(response.data);
            
        }
        fetchDetails();
    }, [id])
    console.log(detail);

    return (
        <div className="detailPage" style={{backgroundImage : `url(https://image.tmdb.org/t/p/w300${detail.backdrop_path})`}}>
            <header>Details</header>
            { detail ?
            <div>
                <div className="detailBox">
                
                    <div>
                        <Videos id={detail ? detail.id : 'loading'} poster_path={detail.poster_path} />   
                    </div>
                    
                    <div className="description">
                    
                        <h2 className="detailTitle">{detail ? detail.title : ''}</h2>
                        <p className="tagLine">{(detail && detail.tagline !== "") ? `\"${detail.tagline}\"` : null}</p>
                        <hr />
                        <p className="runTime">상영시간 : {detail ? detail.runtime : ''}분</p>
                        <p className="releaseDate">개봉일 : {detail ? detail.release_date : ''}</p>
                        <p className="rate">⭐ {detail ? detail.vote_average : ''}</p>
                        <p className="overView">{detail ? detail.overview : ''}</p>
                        {/* <a href={`${detail.homepage}`} target="_blank">상세보기</a> */}
                        {detail && detail.genres && (
                            <div className="genres">
                                {detail.genres.map((item) => (
                                    <p key={item.id} style={{margin : "5px"}}>{item.name}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    
                </div>
                
            </div>
            : 'loading...'}
        </div>
    )
}

export default DetailPage