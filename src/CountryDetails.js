import { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import useFetch from "./useFetch";

const CountryDetails = () => {
    const {code}=useParams();
    const {data, error, isLoding}=useFetch(`https://restcountries.com/v2/alpha/${code}`);
    const navigate=useNavigate();

    const blackTheme=useContext(ThemeContext)
    
    return ( 
        <div className='pt-28 sm:px-16 px-8 country-detailss min-h-screen'>
            <button className={`px-6 py-1 mx-2 drop-shadow-md ${blackTheme ? 'bg-DarkBlue' : 'bg-white'}`} onClick={()=>navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
            </button>
            {isLoding && <div className="text-6xl text-center pt-8 h-screen">Data is loading</div>}
            {error && <div className="text-6xl text-center text-red-500 pt-8 h-screen">{error}</div> }
            {data &&
                <div className="country md:flex items-center pt-12" >
                    <div className="md:w-2/4">
                        <img src={data.flag} alt="" className="md:w-10/12 sm:h-96 sm:object-cover drop-shadow-md"/>
                    </div>
                    <div className="details md:w-2/4 sm:grid grid-cols-2">
                        <div className="font-extrabold text-3xl col-span-2 mb-8 mt-8 md:mt-0">{data.name}</div>
                        <div className="font-semibold mb-2">
                            Native Name: <span className="font-normal opacity-80">{data.nativeName}</span>
                        </div>
                        <div className="font-semibold mb-2">
                            Top Level Domaine: <span className="font-normal opacity-80">{data.topLevelDomain}</span>
                        </div>
                        <div className="font-semibold mb-2">
                            Population: <span className="font-normal opacity-80">{data.population.toLocaleString('en-US')}</span>
                        </div>
                        <div className="font-semibold mb-2">
                            Currencies: <span className="font-normal opacity-80">{data.currencies.map(currency=>(currency.name))}</span>
                        </div>
                        <div className="font-semibold sm:mb-2 mb-14">
                            Region: <span className="font-normal opacity-80">{data.region}</span>
                        </div>
                        <div className="font-semibold mb-2">
                            Languages: <span className="font-normal opacity-80">{data.languages.map(language=>(language.name+', '))}</span>
                        </div>
                        <div className="font-semibold mb-2">
                            Sub Region: <span className="font-normal opacity-80">{data.subregion}</span>
                        </div>
                        <div className="font-semibold mb-2">
                            Area: <span className="font-normal opacity-80">{data.area.toLocaleString('en-US')} km²</span>
                        </div>
                        <div className="font-semibold mb-14">
                            Capital: <span className="font-normal opacity-80">{data.capital}</span>
                        </div>
                        {data.borders &&
                            <div className="col-span-2 font-semibold sm:grid grid-cols-5">
                                <div className="mb-4">Border Countries: </div>  
                                <div className="font-normal flex flex-wrap col-span-4">{data.borders.map((b,idx)=>(<Link to={`/${b}`} key={idx}><span className={`px-6 py-0.5 mx-1 mb-2 block ${blackTheme ? 'bg-DarkBlue' : 'bg-white'} drop-shadow-md opacity-80`}>{b}</span></Link>))}</div>
                            </div>
                        }                   
                    </div>
                </div>
            }
        </div>
     );
}
 
export default CountryDetails;