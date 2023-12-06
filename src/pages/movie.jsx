import React, { useEffect, useState } from "react";
import './home.css'
import { useParams } from "react-router-dom";
function Movie(){
    let [result,setresult]=useState(null)
    let {id} = useParams()
    useEffect(()=>{
        getdata()
        window.scrollTo(0,0)

    },[])
    function getdata() {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setresult(data || []); // Set mup state with data.results or an empty array if data.results is undefined
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    return(
        <>
        {result && (
                <div style={{paddingTop:'1px',paddingBottom:'100px'}} className="bg-black ">
                    <div style={{width:'80%',margin:'auto'}}>

                    <div style={{width:'100%',position:'relative'}}>
                        <img style={{width:'95%',margin:'auto'}} src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} alt="" />
                    </div>
                    <div style={{position:'absolute',top:'65%',left:'14%'}}>
                        <img style={{height:'300px',width:'230px',borderRadius:'10px'}} src={`https://image.tmdb.org/t/p/original${result.poster_path}`} alt="" />
                        
                    </div>
                    <div style={{color:'white',position:'absolute',left:'31%',top:'66%'}}>
                        <h2>{result.original_title}</h2>
                        <p>{result.tagline}</p>
                      
                        <h4>{result.vote_average}</h4> <span><i className="fas fa-star"></i></span> <span>({result.vote_count})votes</span>
                        <p>{result.runtime} mins</p>
                       




                    </div>
                    <div style={{marginTop:'80px',marginLeft:'30%'}}>

                    <div>
                            <h2 style={{color:'white'}}>Synopsis</h2>
                        </div>
                        <div>
                            <p style={{color:'white'}}>{result.overview}</p>
                        </div>
                    </div>
                    </div>
                    {/* Display other movie details here */}
                </div>
            )}
        
        </>
    )
}
export default Movie