import { useEffect, useState } from "react"


const useFetch = (url)=>{
    const [data,Setdata] = useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                Setdata(result)
            })
        })

    },[])
    return data
}
export default useFetch;