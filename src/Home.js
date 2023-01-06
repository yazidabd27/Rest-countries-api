import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
import useFetch from "./useFetch"
import { ThemeContext } from "./ThemeContext";

const Home = () => {
    const [x,setX]=useState('all')
    const {data, error, isLoding}=useFetch(`https://restcountries.com/v2/${x}`);
    const[drop, setDrop]=useState(false)
    const blackTheme=useContext(ThemeContext)

    const handleChange=(value)=>{
        if(value!==''){
            setX(`name/${value}`)
        }else{
            setX('all')
        }
    }
    
    return ( 
        <div className='sm:px-8 px-4 sm:pt-28 pt-24'>
            <div className="md:px-8 relative md:flex justify-between mb-6 z-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 absolute md:top-2/4 top-4 md:-translate-y-2/4 z-10 md:left-14 left-6 ${blackTheme ? 'text-white' : 'text-black'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" className={`drop-shadow-md outline-0 py-4 px-16 md:w-4/12 rounded-md mb-12 md:mb-0 ${blackTheme ? 'bg-DarkBlue text-white' : 'bg-white text-black'}`} placeholder="Search for a country..." onChange={(e)=>handleChange(e.currentTarget.value)}/>
                <div className={`${blackTheme ? 'bg-DarkBlue text-white' : 'bg-white text-black'} drop-shadow-md p-4 relative rounded-md cursor-pointer w-fit`} onClick={()=>setDrop(!drop)}>
                    Filter by Region
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 inline ml-8 duration-300 ${drop ? 'rotate-180' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <ul className={`drop-down absolute ${blackTheme ? 'bg-DarkBlue' : 'bg-white'} z-50 w-full left-0 top-full mt-1 py-2 rounded-md ${drop ? 'block' : 'hidden'}`}>
                        <li className="py-0.5 px-4 hover:bg-DarkGray cursor-pointer" onClick={()=>setX('region/africa')}>Africa</li>
                        <li className="py-0.5 px-4 hover:bg-DarkGray cursor-pointer" onClick={()=>setX('region/americas')}>America</li>
                        <li className="py-0.5 px-4 hover:bg-DarkGray cursor-pointer" onClick={()=>setX('region/asia')}>Asia</li>
                        <li className="py-0.5 px-4 hover:bg-DarkGray cursor-pointer" onClick={()=>setX('region/europe')}>Europe</li>
                        <li className="py-0.5 px-4 hover:bg-DarkGray cursor-pointer" onClick={()=>setX('region/oceania')}>Oceania</li>
                        <li className="py-0.5 px-4 hover:bg-DarkGray cursor-pointer" onClick={()=>setX('all')}>All Countries</li>
                    </ul>
                </div> 
            </div>
            {isLoding && <div className={`text-6xl text-center pt-8 h-screen ${blackTheme ? 'text-white' : 'text-black'}`}>Data is Loading</div>}
            {error && <div className="text-6xl text-center text-red-500 pt-8 h-screen">{error}</div> }
            {data && <CountriesList data={data}/>}        
        </div>
     );
}
 
export default Home;