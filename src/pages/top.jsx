import React, { useEffect, useState } from "react";
import Card from "./card";
import './home.css'
import { useParams } from "react-router-dom";

function Top() {
    let { tops } = useParams();
    let [topr, settopr] = useState([]); // Initialize mup state with an empty array
    useEffect(()=>{
        getdata()
        

    },[])
    useEffect(() => {
        getdata();
    }, [tops]);

    function getdata() {
        fetch(`https://api.themoviedb.org/3/movie/${tops?tops:"top_rated"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                settopr(data.results || []); // Set mup state with data.results or an empty array if data.results is undefined
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    return (
        <div className="p-1 bg-dark" style={{paddingTop:'1px',paddingBottom:'100px'}}>
            <div style={{ marginTop: '100px' }}>
                <h1 style={{ color: 'white', marginLeft: '150px' }}>TOP RATED</h1>
                <div style={{ width: '80%', margin: 'auto', marginTop: '100px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {topr.map((movie, index) => (
                        <Card key={index} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Top;
