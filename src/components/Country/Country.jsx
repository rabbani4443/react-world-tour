import { useState } from 'react';
import './Country.css'
const Country = ({country, handelVisitedCountries,handelVisitedFlags}) => {
    const {name, flags,population,area,ccn3} = country;

    const [visited, setVisited] = useState(false);

    const handelVisited = () =>{
        // setVisited(true)
        setVisited(!visited)
    }

    // const passWithParents = () =>{
    //     handelVisitedCountries(country)
    // }

    // const passWithParents = () => handelVisitedCountries(country)

    return (
        <>
        <div className={`country ${visited ? 'bg-gray-200' : 'bg-gray-50'}`}>
            <h3 className= {`text-xl font-bold text-center text-purple-600 rounded-lg mb-2 ${visited && 'text-fuchsia-700'}`} > {name.common}</h3>
            <div className='bg-slate-400 rounded-lg p-1'>
            <img className='h-44 w-full rounded-lg ' src={flags.png} alt={`Flag of ${name.common}`} />
            </div>
            <p className=' font-semibold '> Country Code :{population} </p>
            <p className=' font-semibold '> Area :{area} </p>
            <p className=' font-semibold '> CCN3 :{ccn3} </p>
            <div className='py-4 text-center'>
            {/* <button onClick={passWithParents}  className= 'mr-2 rounded-lg font-semibold bg-violet-700 py-1 px-5 text-gray-100'> Mark Visited </button> */}
            <button onClick={() => handelVisitedCountries(country)}  className= 'mr-2 rounded-lg font-semibold bg-violet-700 py-1 px-5 text-gray-100'> Mark Visited </button>

            <button onClick={() => handelVisitedFlags(country)}  className= 'mr-2 rounded-lg font-semibold bg-fuchsia-700 py-1 px-5 text-gray-100'> Mark Flags </button>

            <button onClick={handelVisited} className={`mb-3 rounded-lg font-semibold bg-violet-700 py-1 px-5 text-gray-100 ${visited && 'bg-fuchsia-700'}`}> {visited? 'Visited' : 'Going'}  </button> <br />
            {/* {
                visited && 'I have visited this country'
            } */}
            {
                visited ? 'I have Visited this country' : 'I want to  visited'
            }
            </div>
        </div>
    </>      
    );
};
  export default Country;
  