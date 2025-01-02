import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import './styles/video.scss'

const api_key = process.env.REACT_APP_MOVIE_API_KEY;

const Videos = (params) => {

    const [videos, setVideos] = useState({});
    const [videoSize, setVideoSize] = useState(['55vw', '70vh']);

    useEffect(() => {
        const fetchDetails = async () => {

            if (params.id) {
                const url2 = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${api_key}`
                const response2 = await axios.get(url2);
                console.log(response2);
                if (response2.data.results.length && response2.data.results[0].key) {
                    setVideos(response2.data);
                }
            }
        }
        fetchDetails();
    }, [params.id])

    console.log(videos);

    const [playable, setPlayable] = useState(1);

    const checkError = (error) => {
        console.log('오류 발생');
        setPlayable(0);
        console.log('playable : ', playable);
    }
    
    useEffect(()=> {
        if (window.innerWidth <= 768) {
            setVideoSize(['85vw', '40vh']);
        }
    })
    
    return (
        <div>
            { playable && videos.results ?
                <ReactPlayer 
                    className="video" 
                    url={'https://www.youtube.com/watch?v=' + videos.results[videos.results.length-1].key} 
                    width={videoSize[0]}
                    height={videoSize[1]}
                    playing={true}
                    muted={true}
                    onError={checkError}
                    loop={true}
                />
            : <img src={`https://image.tmdb.org/t/p/w500/${params.poster_path}`}/>}
        </div>
    )
}

export default Videos;