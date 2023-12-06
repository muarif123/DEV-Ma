import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./home.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
    }, []);

    return (
        <Link to={movie ? `/movie/${movie.id}` : "/"} style={{ textDecoration: 'none', color: 'white' }}>
            <div className="h">
                {!isLoaded ? (
                    <SkeletonTheme  color='red' highlightColor="gray" >
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                ) : (
                    movie && (
                        <>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                            <div className="j">
                                <div>
                                    <p>{movie.original_title}</p>
                                </div>
                                <div>
                                    <p>{movie.release_date}</p> <span>{movie.vote_average} <i className="fas fa-star"></i></span>
                                </div>
                                <div>
                                    <p>{movie.overview.slice(0, 118) + '...'}</p>
                                </div>
                            </div>
                        </>
                    )
                )}
            </div>
        </Link>
    );
};

export default Card;
