import {useState, useEffect} from 'react';



// const useRequest = () => {
//     const [url, setUrl] = useState("");
//     const [reload, setReload] = useState(0);
//     const [options, setOptions] = useState({});

//     const [status, setStatus] = useState(null);
//     const [tempData, setTempData] = useState({});
//     const [dataGet, setDataGet] = useState({});
//     const [dataPost, setDataPost] = useState({});
//     const [inputValue, setInputValue] = useState({});

//     const handleGet = e => {
//         e.preventDefault();
//         setUrl(e.target.action);
//         setReload(Math.random());
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
//             body: JSON.stringify(inputValue)
//         })
//     }
//     const handleInput = (e) => {
//         setInputValue({
//             ...inputValue,
//             [e.target.name]: e.target.value
//         })
//     }

//     useEffect(() => {
//         url &&
//         (() => {
//             try {
//                 setStatus("loading...");
//                 setTimeout(() => fetch(url, {...options})
//                     .then(response => response.json())
//                     .then(result => {
//                         setTempData({
//                             [options.method]:result
//                         });
//                         setStatus(null);
//                     })
//                 , 1000)
//             } catch(e) {
//                 alert(`Try again. Error: ${e}`);
//             }
//         })()
//     }, [reload])

//     useEffect(() => {
//         setDataGet({...dataGet, ...tempData.GET})
//     }, [tempData.GET])
//     useEffect(() => {
//         setDataPost({...dataPost, ...tempData.POST})
//     }, [tempData.POST])

//     return {
//         handleGet, 
//         handlePost, 
//         handleInput, 
//         ...dataGet,
//         ...dataPost
//     };
// }



const useRequest = () => {
    const [url, setUrl] = useState("");
    const [reload, setReload] = useState(0);
    const [parsingType, setParsingType] = useState()
    const [options, setOptions] = useState({});

    const [status, setStatus] = useState(null);
    const [tempData, setTempData] = useState({});
    const [dataGet, setDataGet] = useState({});
    const [inputValue, setInputValue] = useState({});

    const handleGet = (e, type = "") => {
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
            body: JSON.stringify(inputValue)
        })
    }
    const handleInput = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {   
        url && setTimeout(() => fetch(url, {...options})
            .then(response => {
                if(!response.ok) throw new Error(response.status);

                if(parsingType === "text") return response.text();
                else if(parsingType === "json") return response.json();
                else if(parsingType === "blob") return response.blob();
                else if(parsingType === "formData") return response.formData();
                else return response.json();
            })
            .then(result => setTempData({
                [options.method]:result
            }))
            .catch(err => console.log(`Something went wrong, ${err}`))
        , 1000)
    }, [reload])

    useEffect(() => {
        setDataGet({...dataGet, ...tempData.GET})
    }, [tempData.GET])
    
    return {
        handleGet, 
        handlePost, 
        handleInput, 
        ...dataGet
    };
}



export default useRequest;