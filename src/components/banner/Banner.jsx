import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../axios";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Banner() {
    const [anime, setAnime] = useState("");
    useEffect(() => {
        axios.get("/top/anime").then((response) => {
            setAnime(response.data.data[getRandomInt(10)]);
        });
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${
                    anime.images ? anime.images.jpg.large_image_url : ""
                })`,
            }}
            className="banner"
        >
            <h1 className="logo">Anime</h1>
            <img
                src={anime.images ? anime.images.jpg.large_image_url : ""}
                alt=""
            />
            <div className="trending">
                <p>
                    <strong>{anime.title}</strong>
                </p>
                <p className="trendingDesc">
                    Episode: {anime.episodes}
                    <br />
                    Duration: {anime.duration}
                    <br />
                </p>
                <a
                    className="ytLink"
                    href={`https://www.youtube.com/watch?v=${
                        anime.trailer ? anime.trailer.youtube_id : ""
                    }`}
                >
                    Watch Trailer
                </a>
            </div>
        </div>
    );
}

export default Banner;
