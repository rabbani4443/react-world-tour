import './Country.css'
const Country = ({country}) => {
    const {name, flags,population,area,ccn3} = country;
    return (
        <div className="country">
            <h3 className='text-xl font-bold text-center bg-purple-600 py-1 rounded-lg	text-gray-100 mb-2'> {name.common}</h3>
            <div className='bg-slate-400 rounded-lg p-1'>
            <img className='h-44 w-full rounded-lg ' src={flags.png} alt={`Flag of ${name.common}`} />
            </div>
            <p className=' font-semibold '> Country Code :{population} </p>
            <p className=' font-semibold '> Area :{area} </p>
            <p className=' font-semibold '> CCN3 :{ccn3} </p>
            <button className='rounded-lg font-semibold bg-violet-700 py-1 px-5 hover:bg-violet-500 text-gray-100 '>Visited</button>
        </div>
    );
};
  export default Country;
  