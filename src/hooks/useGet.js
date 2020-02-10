import { useState} from 'react';

const useGet = () => {
    let {setUrl, setReload, setOptions, data: tempData} = useFetch();
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

    useEffect(() => {
        if(tempData) setDataGet({...dataGet, ...tempData})
    }, [tempData])

    return {
        handleGet,
        dataGet
    }
}

export default useGet;