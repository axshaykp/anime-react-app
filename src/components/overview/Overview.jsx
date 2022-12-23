import React, { useEffect, useState } from "react";
import "./Overview.scss";
import axios from "../../axios";
import { useParams } from "react-router-dom";

function Overview() {
    const [anime, setAnime] = useState();
    let params = useParams();
    useEffect(() => {
        axios.get(`/anime/${params.orderId}`).then((response) => {
            setAnime(response.data.data);
        });
    });

    return (
        <div className="overview">
            <h1>Anime</h1>
            <img src={anime ? anime.images.jpg.large_image_url : ""} alt="" />
            <h1>{anime ? anime.title : ""}</h1>
            <p>
                <strong>Episode: </strong>
                {anime ? anime.duration : ""}
                <br />
                <strong>Rating: </strong>
                {anime ? anime.rating : ""}
                <br />
                <strong>Score: </strong>
                {anime ? anime.score : ""} ({anime ? anime.scored_by : ""}{" "}
                people reviewed)
                <br />
            </p>

            <a className="overTrailer" href={anime ? anime.trailer.url : ""}>
                Watch Trailer
            </a>
            <p className="desc">
                <strong>Description: </strong>
                {anime ? anime.synopsis : ""}
            </p>
        </div>
    );
}

export default Overview;
