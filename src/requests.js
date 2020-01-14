import {useState, useEffect} from 'react';



export const useGet = (params, dependencies = []) => {
    const {url, reload, options} = params;
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        url && (async () => {
            setLoading(true);
            try {
                setResponse(
                    await (
                        await fetch(url, {
                            method: "GET",
                            ...options
                        })
                    ).json()
                )
            } catch(e) {
                alert("No such address");
            }
            setLoading(false);
        })()
    }, [reload, ...dependencies])

    console.log(response, Date.now());

    if(response === null) {
        if(loading) return "loading...";
        return null;
    } return response.name;
}



export const usePost = (params, dependencies = []) => {
    const {url, reload, options} = params;
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        options.body &&
        url && (async () => {
            setLoading(true);
            try {
                setResponse(
                    await(
                        await fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                            },
                            ...options
                        })
                    ).json()
                )
                
            } catch(e) {
                alert("Try again");
            }
            setLoading(false);
        })()
    }, [reload, ...dependencies])

    console.log(response, Date.now())

    if(response === null) {
        if(loading) return "loading...";
        return null;
    } return response;
}