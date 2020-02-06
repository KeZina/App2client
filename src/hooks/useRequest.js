import {useState, useEffect} from 'react';

// if post request, get user token
// if get request, just get data

const useRequest = () => {
    const [url, setUrl] = useState("");
    const [reload, setReload] = useState(0);
    const [parsingType, setParsingType] = useState(null)
    const [options, setOptions] = useState({});

    const [tempData, setTempData] = useState({});
    const [dataGet, setDataGet] = useState({});

    const handleGet = (e, type = null) => {
        e.preventDefault();
        setUrl(e.target.action);
        setReload(Math.random());
        setParsingType(type);
        setOptions({
            method: "GET",
        });
    }

    const handlePost = (e) => {
        e.preventDefault();
        console.log(e.target.action)
        setUrl(e.target.action)
        setReload(Math.random());
        setOptions({
            method: "POST",
            body: new FormData(e.target)
        })
    }

    useEffect(() => {
        url && (async() =>{
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

                setTempData({
                    [options.method]: result
                })

            } catch(e) {
                console.log(`Something went wrond, ${e} :(`)
            }
        })()
        
    }, [reload])

    useEffect(() => {
        if(tempData.GET) setDataGet({...dataGet, ...tempData.GET})
    }, [tempData.GET])
    
    useEffect(() => {
        if(tempData.POST && tempData.POST.token){
            localStorage.setItem("token", tempData.POST.token);
        }
    }, [tempData.POST])

    console.log(tempData.POST)
    
    return {
        handleGet, 
        handlePost, 
        dataGet,
        ...tempData
    };
}



export default useRequest;