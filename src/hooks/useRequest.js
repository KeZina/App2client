import {useState, useEffect} from 'react';



// const useRequest = () => {
//     const [url, setUrl] = useState("");
//     const [reload, setReload] = useState(0);
//     const [parsingType, setParsingType] = useState(null)
//     const [options, setOptions] = useState({});

//     const [tempData, setTempData] = useState({});
//     const [GET, setGET] = useState({});

//     const handleGet = (e, type = null) => {
//         e.preventDefault();
//         setUrl(e.target.action);
//         setReload(Math.random());
//         setParsingType(type);
//         setOptions({
//             method: "GET",
//         });
//     }

//     const handleForm = (e) => {
//         e.preventDefault();
//         setUrl(e.target.action)
//         setReload(Math.random());
//         setOptions({
//             method: "POST",
//             body: new FormData(e.target)
//         })
//     }

//     useEffect(() => {
//         url && (async() =>{
//             try {
//                 const response = await fetch(url, {...options});
//                 if(!response.ok) throw new Error(response.status);
    
//                 const result = await (() => {
//                     if(parsingType === "text") return response.text();
//                     else if(parsingType === "formData") return response.formData();
//                     else if(parsingType === "blob") return response.blob();
//                     else if(parsingType === "arrayBuffer") return response.arrayBuffer();
//                     else return response.json();
//                 })()

//                 setTempData({
//                     [options.method]: result
//                 })

//             } catch(e) {
//                 console.log(`Something went wrond, ${e} :(`)
//             }
//         })()
        
//     }, [reload])

//     useEffect(() => {
//         if(tempData.GET) setGET({...GET, ...tempData.GET})
//     }, [tempData.GET])
    
//     useEffect(() => {
//         if(tempData.POST && tempData.POST.token){
//             localStorage.setItem("token", tempData.POST.token);
//         }
//     }, [tempData.POST])

//     console.log(tempData.POST)

//     return {
//         handleGet, 
//         handleForm, 
//         GET,
//         ...tempData
//     };
// }


const useRequest = () => {
    const [url, setUrl] = useState("");
    const [reload, setReload] = useState(0);
    const [parsingType, setParsingType] = useState(null)
    const [options, setOptions] = useState({});

    const [tempData, setTempData] = useState({});
    const [GET, setGET] = useState({});

    const handleGet = (e, type = null) => {
        e.preventDefault();
        setUrl(e.target.action);
        setReload(Math.random());
        setParsingType(type);
        setOptions({
            method: "GET",
        });
    }

    const handleForm = (e) => {
        e.preventDefault();
        setUrl(e.target.action)
        setReload(Math.random());
        setOptions({
            method: "POST",
            body: new FormData(e.target)
        })
    }

    useEffect(() => {
        url && (async() =>{
            setTempData({
                [options.method]: {status: "wait..."}
            });
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
        if(tempData.GET) setGET({...GET, ...tempData.GET})
    }, [tempData.GET])
    
    useEffect(() => {
        if(tempData.POST && tempData.POST.token){
            localStorage.setItem("token", tempData.POST.token);
        }
    }, [tempData.POST])

    console.log(tempData.POST)

    return {
        handleGet, 
        handleForm, 
        GET,
        ...tempData
    };
}



export default useRequest;