import React, { useEffect, useState } from "react";
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
// import Popular from "./popular";
import Top from "./top";
function Home() {
    let [popular, setpopular] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setpopular(data.results)
            })

    }, [])
    return (
        <>
            <div className="bg-dark  " style={{paddingTop:'1px',paddingBottom:'100px'}}>
                <div className="msk " style={{ position: 'relative' }}>
                    <Carousel className="msk2" showThumbs={false}
                        autoPlay={true}
                        transitionTime={3}
                        infiniteLoop={true}
                        showStatus={false}


                    >
                        {popular.map((item) => {
                            return (
                                <>
                                    <Link to={`/movie/:id/${item.id}`}>


                                        <div className="" >
                                            <img className="" style={{}} src={`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`} alt="" />


                                            <div style={{ position: 'absolute', top: '35%', width: '70%',padding:'0px 50px' }}>
                                                <div>

                                                    <p style={{ fontSize: '64px', fontWeight: '700', textAlign: 'start', textDecoration: 'none', color: 'rgb(255,253,208)' }}>{item.original_title}</p> <br />
                                                </div>
                                                <div style={{display:'flex',width:'30%',justifyContent:'space-between'}}>

                                                    <p style={{ fontSize: '26px',  textAlign: 'start', textDecoration: 'none', color: 'white' }} >{item.release_date}</p>
                                                    <div style={{ fontSize: '26px',  textAlign: 'start', textDecoration: 'none', color: 'white' }} >

                                                        <p >{item.vote_average}
                                                            <i className="fas fa-star" style={{color:'  '}}></i>

                                                        </p> <br />
                                                    </div>
                                                </div>

                                                <div>

                                                    <p className="text-decoration-none  text-white " style={{textAlign:'start',fontSize:'18px',fontStyle:'italic'}}>{item.overview}</p>
                                                </div>

                                            </div>
                                        </div>


                                    </Link>

                                </>
                            )
                        })}

                    </Carousel>

                </div>
                <Top/>

            </div>


        </>
    )
}
export default Home