import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const CountriesList = ({data}) => {
    const blackTheme=useContext(ThemeContext);
      
    return ( 
        <div className="countries-list sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {
                data.map((country, idx)=>(
                    <Link to={country.alpha3Code} key={idx}>
                        <div className={`country-block ${blackTheme ? 'bg-DarkBlue text-white' : 'bg-white text-black'} xl:m-8 mx-4 my-8 pointer drop-shadow-md rounded-md`}>
                            <img src={country.flag} alt="" className="w-full h-48 object-cover rounded-t-md"/>
                            <div className="country-info p-6 pb-12">
                                <div className="name font-extrabold mb-3">{country.name}</div>
                                <div className="population font-semibold">
                                    Population: <span className="font-normal opacity-80">{country.population.toLocaleString('en-US')}</span>
                                </div>
                                <div className="region font-semibold">
                                    Region: <span className="font-normal opacity-80">{country.region}</span>
                                </div>
                                <div className="capital font-semibold">
                                    Capital: <span className="font-normal opacity-80">{country.capital}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
                
            }
        </div>
     );
}
 
export default CountriesList;