import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData]=useState('');
    const [error, setError]=useState(null);
    const [isLoding, setLoading]=useState(true);

    useEffect(()=>{
        fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('Can not get data')
                }
                return res.json();
            })
            .then(data=>{
                setData(data)
                setLoading(false)
                setError(null);
            })
            .catch(err=>{
                setLoading(false)
                setError(err.message)
            })
    },[url])

    return {data, error, isLoding};
}
 
export default useFetch;