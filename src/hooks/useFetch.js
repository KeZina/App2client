import React, { useState, useEffect } from 'react';

const useFetch = () => {
    const [url, setUrl] = useState("");
    const [reload, setReload] = useState(0);
    const [parsingType, setParsingType] = useState(null);
    const [options, setOptions] = useState({});
    const [data, setData] = useState({});

    useEffect(() => {
        url && (async() =>{
            setData({status: "wait..."});
            try {
                const response = await fetch(url, {...options});
                if(!response.ok) throw new Error(response.status);
    
                const result = await (() => {
                    if(parsingType === "text") return response.text();
                    else if(parsingType === "formData") return response.formData();
                    else if(parsingType === "blob") return response.blob();
                    else if(parsingType === "arrayBuffer") return response.arrayBuffer();
                    else return response.json();
                })()
                setData({...result})
                console.log(data, url)

            } catch(e) {
                console.log(`Something went wrond, ${e} :(`)
            }
        })()
        
    }, [reload])

    return {
        setUrl,
        setReload,
        setParsingType,
        setOptions,
        data
    }

}

export default useFetch;