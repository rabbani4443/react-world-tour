import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries]=  useState([]);

    const [visitedCountries ,setVisitedCountries ] = useState([]);

    const [visitedFlags , setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])

    const handelVisitedCountries =(country)=>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    };

    const handelVisitedFlags =(country) => {
        const newVisitedFlags =[...visitedFlags, country];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div className="w-11/12 mx-auto">
            <h1 className='text-5xl font-bold text-center  pt-4'>Countries : {countries.length} </h1>
            <div >
            <h1 className='text-3xl font-bold text-center pb-10 pt-4'> Visited Countries : {visitedCountries.length} </h1>
            <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 pb-10 gap-3 text-center">

            {
                visitedCountries.map(country=> <p key={country.ccn3} className=' font-semibold border border-purple-500 rounded-lg px-3 py-1 '> {country.name.common} </p>)
            }
            {
               visitedFlags.map(country => <div key={country.ccn3} className='bg-slate-100 rounded-lg p-2'>
                <p key={country.ccn3} className=' bg-gray-50 font-semibold  rounded-lg px-3 py-1 '> {country.name.common} </p>
                <img className='h-20 w-full rounded-lg bg-slate-200 p-1' src={country.flags.png} />  
                </div>) 
            }

            </div>
            </div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 ">
                {
                countries.map(country => <Country 
                    key={country.ccn3} 
                    country={country} 
                    handelVisitedCountries={handelVisitedCountries}
                    handelVisitedFlags={handelVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;