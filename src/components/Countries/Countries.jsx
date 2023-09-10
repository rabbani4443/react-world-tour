import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries]=  useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data))
        
    },[])
    return (
        <div className="w-11/12 mx-auto">
            <h1 className='text-5xl font-bold text-center pb-10 pt-4'>Countries : {countries.length} </h1>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 ">
                {
                countries.map(country => <Country key={country.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;