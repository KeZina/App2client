import {useState, useEffect} from 'react';

// const useRequest = () => {
//     const [url, setUrl] = useState("");
//     const [reload, setReload] = useState(0);
//     const [parsingType, setParsingType] = useState()
//     const [options, setOptions] = useState({});

//     const [status, setStatus] = useState(null);
//     const [tempData, setTempData] = useState({});
//     const [dataGet, setDataGet] = useState({});

//     const handleGet = (e, type = "") => {
//         e.preventDefault();
//         setUrl(e.target.action);
//         setReload(Math.random());
//         setParsingType(type);
//         setOptions({
//             method: "GET"
//         });
//     }

//     const handlePost = (e) => {
//         e.preventDefault();
//         setUrl(e.target.action)
//         setReload(Math.random());
//         setOptions({
//             method: "POST",
//             body: new FormData(e.target)
//         })
//     }

//     useEffect(() => {
//         url && setTimeout(() => fetch(url, {...options})
//             .then(response => {
//                 if(!response.ok) throw new Error(response.status);

//                 if(parsingType === "json") return response.json();
//                 else if(parsingType === "text") return response.text();
//                 else if(parsingType === "formData") return response.formData();
//                 else if(parsingType === "blob") return response.blob();
//                 else if(parsingType === "arrayBuffer") return response.arrayBuffer();
//                 else return response.json();
//             })
//             .then(result => setTempData({
//                 [options.method]:result
//             }))
//             .catch(err => console.log(`Something went wrong, ${err}`))
//         , 1000)
//     }, [reload])

//     useEffect(() => {
//         setDataGet({...dataGet, ...tempData.GET})
//     }, [tempData.GET])
    
//     console.log(tempData)

//     return {
//         handleGet, 
//         handlePost, 
//         ...dataGet
//     };
// }


const useRequest = () => {
    const [url, setUrl] = useState("");
    const [reload, setReload] = useState(0);
    const [parsingType, setParsingType] = useState(null)
    const [options, setOptions] = useState({});

    // const [status, setStatus] = useState(null);
    const [tempData, setTempData] = useState({});
    const [dataGet, setDataGet] = useState({});
    const [dataPost, setDataPost] = useState(null);

    const handleGet = (e, type = null) => {
        e.preventDefault();
        setUrl(e.target.action);
        setReload(Math.random());
        setParsingType(type);
        setOptions({
            method: "GET"
        });
    }

    const handlePost = (e) => {
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
            try {
                let response = await fetch(url, {...options});
                if(!response.ok) throw new Error(response.status);
    
                let result = await (() => {
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
        tempData.GET && setDataGet({...dataGet, ...tempData.GET})
    }, [tempData.GET])
    useEffect(() => {
        tempData.POST && setDataPost(tempData.POST)
    }, [tempData.POST])

    return {
        handleGet, 
        handlePost, 
        dataGet,
        dataPost
    };
}



export default useRequest;