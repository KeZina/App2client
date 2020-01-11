import React, {useState, useEffect} from 'react';

export const useGet = (url, dependencies = []) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        url && (async () => {
            setLoading(true);
            setResponse(
                await (
                    await fetch(url)
                ).json()
            )
            setLoading(false);
        })()
    }, [url].concat(dependencies))

    if(response === null){
        if(loading) return "loading...";
        return null;
    } return response.name;
}